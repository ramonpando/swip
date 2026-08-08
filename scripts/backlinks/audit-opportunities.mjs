import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const TRACKER = path.join(ROOT, 'data/backlinks/opportunities.csv');
const LIVE = process.argv.includes('--live');
const STRICT_LIVE = process.argv.includes('--strict-live');

const REQUIRED_HEADERS = [
  'id',
  'organization',
  'opportunity_url',
  'channel',
  'region',
  'priority',
  'relevance_score',
  'authority_confidence',
  'destination_url',
  'angle',
  'status',
  'legal_review',
  'source_url',
  'backlink_url',
  'notes',
];

const ALLOWED = {
  channel: new Set([
    'media_finance',
    'media_automotive',
    'media_business',
    'association',
    'local_profile',
    'regulatory_directory',
  ]),
  priority: new Set(['P1', 'P2', 'P3']),
  authority_confidence: new Set(['high', 'medium', 'unknown']),
  status: new Set([
    'research',
    'qualified',
    'legal_review',
    'ready',
    'submitted',
    'live',
    'rejected',
  ]),
  legal_review: new Set(['yes', 'no']),
};

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];

    if (char === '"' && quoted && next === '"') {
      field += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ',' && !quoted) {
      row.push(field);
      field = '';
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(field);
      if (row.some((value) => value !== '')) rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    if (row.some((value) => value !== '')) rows.push(row);
  }

  return rows;
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

function groupCount(records, key) {
  return records.reduce((summary, record) => {
    summary[record[key]] = (summary[record[key]] || 0) + 1;
    return summary;
  }, {});
}

function validateStructure(headers, records) {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const opportunityHosts = new Set();

  for (const header of REQUIRED_HEADERS) {
    if (!headers.includes(header)) errors.push(`Falta la columna requerida: ${header}`);
  }

  records.forEach((record, index) => {
    const line = index + 2;

    for (const field of ['id', 'organization', 'opportunity_url', 'channel', 'priority', 'relevance_score', 'destination_url', 'angle', 'status']) {
      if (!record[field]) errors.push(`Línea ${line}: ${field} está vacío`);
    }

    if (ids.has(record.id)) errors.push(`Línea ${line}: id duplicado ${record.id}`);
    ids.add(record.id);

    if (!isHttpUrl(record.opportunity_url)) {
      errors.push(`Línea ${line}: opportunity_url inválida`);
    } else {
      const host = new URL(record.opportunity_url).hostname.replace(/^www\./, '');
      if (opportunityHosts.has(host)) warnings.push(`Línea ${line}: dominio repetido ${host}`);
      opportunityHosts.add(host);
    }

    if (!isHttpUrl(record.destination_url)) {
      errors.push(`Línea ${line}: destination_url inválida`);
    } else if (new URL(record.destination_url).hostname !== 'swip.mx') {
      errors.push(`Línea ${line}: destination_url debe usar https://swip.mx`);
    }

    if (record.source_url && !isHttpUrl(record.source_url)) {
      errors.push(`Línea ${line}: source_url inválida`);
    }
    if (record.backlink_url && !isHttpUrl(record.backlink_url)) {
      errors.push(`Línea ${line}: backlink_url inválida`);
    }

    for (const [field, values] of Object.entries(ALLOWED)) {
      if (!values.has(record[field])) errors.push(`Línea ${line}: valor no permitido en ${field}: ${record[field]}`);
    }

    const relevance = Number(record.relevance_score);
    if (!Number.isInteger(relevance) || relevance < 1 || relevance > 5) {
      errors.push(`Línea ${line}: relevance_score debe ser entero entre 1 y 5`);
    }

    if (record.status === 'live' && !record.backlink_url) {
      errors.push(`Línea ${line}: un registro live necesita backlink_url`);
    }
    if (record.legal_review === 'yes' && record.status !== 'legal_review' && record.status !== 'research') {
      warnings.push(`Línea ${line}: requiere revisión legal pero su estado es ${record.status}`);
    }
  });

  return { errors, warnings };
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    return await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'SWIPBacklinkAudit/1.0 (+https://swip.mx/)',
        accept: 'text/html,application/xhtml+xml',
      },
      ...options,
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function inspectUrl(url) {
  try {
    let response = await fetchWithTimeout(url, { method: 'HEAD' });
    if (response.status === 405 || response.status === 403) {
      response = await fetchWithTimeout(url, { method: 'GET' });
    }
    return {
      ok: response.status >= 200 && response.status < 400,
      reachable: response.status < 500,
      status: response.status,
      finalUrl: response.url,
      error: '',
    };
  } catch (error) {
    return {
      ok: false,
      reachable: false,
      status: 0,
      finalUrl: '',
      error: error.name === 'AbortError' ? 'timeout' : error.message,
    };
  }
}

async function inspectBacklink(url) {
  if (!url) return null;
  try {
    const response = await fetchWithTimeout(url, { method: 'GET' });
    const html = await response.text();
    const links = [...html.matchAll(/<a\b([^>]*?)href=["']([^"']+)["']([^>]*)>/gi)];
    const matches = links
      .map((match) => ({ href: match[2], attributes: `${match[1]} ${match[3]}` }))
      .filter(({ href }) => {
        try {
          return new URL(href, response.url).hostname.replace(/^www\./, '') === 'swip.mx';
        } catch {
          return false;
        }
      });

    return {
      status: response.status,
      found: matches.length > 0,
      relations: matches.map(({ attributes }) => {
        const rel = attributes.match(/\brel=["']([^"']+)["']/i);
        return rel ? rel[1] : 'dofollow';
      }),
    };
  } catch (error) {
    return { status: 0, found: false, relations: [], error: error.message };
  }
}

async function mapLimit(items, limit, mapper) {
  const output = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      output[index] = await mapper(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return output;
}

if (!fs.existsSync(TRACKER)) {
  console.error(`No existe el tracker: ${path.relative(ROOT, TRACKER)}`);
  process.exit(1);
}

const rows = parseCsv(fs.readFileSync(TRACKER, 'utf8'));
const headers = rows.shift() || [];
const records = rows.map((row) => Object.fromEntries(headers.map((header, index) => [header, (row[index] || '').trim()])));
const { errors, warnings } = validateStructure(headers, records);

console.log(`Oportunidades: ${records.length}`);
console.log(`Por canal: ${JSON.stringify(groupCount(records, 'channel'))}`);
console.log(`Por estado: ${JSON.stringify(groupCount(records, 'status'))}`);
console.log(`Errores estructurales: ${errors.length}`);
console.log(`Advertencias estructurales: ${warnings.length}`);

for (const warning of warnings) console.warn(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);

if (errors.length) process.exit(1);

if (LIVE) {
  const uniqueUrls = [...new Set(records.flatMap((record) => [record.opportunity_url, record.destination_url]))];
  const checks = await mapLimit(uniqueUrls, 5, async (url) => [url, await inspectUrl(url)]);
  const results = new Map(checks);
  const backlinkChecks = await mapLimit(records, 4, (record) => inspectBacklink(record.backlink_url));
  let unavailable = 0;

  records.forEach((record, index) => {
    const opportunity = results.get(record.opportunity_url);
    const destination = results.get(record.destination_url);
    if (!opportunity.ok || !destination.ok) unavailable += 1;

    const opportunityLabel = opportunity.status || opportunity.error;
    const destinationLabel = destination.status || destination.error;
    const backlink = backlinkChecks[index];
    const backlinkLabel = backlink ? `${backlink.found ? 'found' : 'missing'}:${backlink.status}` : 'not-set';
    console.log(`${record.id}\tprospect=${opportunityLabel}\tdestination=${destinationLabel}\tbacklink=${backlinkLabel}`);
  });

  console.log(`URLs con revisión manual requerida: ${unavailable}`);
  if (STRICT_LIVE && unavailable) process.exit(1);
}
