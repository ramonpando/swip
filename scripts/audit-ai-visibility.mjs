import { existsSync, readFileSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const projectRoot = process.cwd();
const distRoot = join(projectRoot, 'dist');
const failures = [];
const checks = [];

function requireCheck(condition, message) {
  if (condition) checks.push(message);
  else failures.push(message);
}

function readDist(file) {
  const path = join(distRoot, file);
  requireCheck(existsSync(path), `${file} existe en el build`);
  return existsSync(path) ? readFileSync(path, 'utf8') : '';
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

if (!existsSync(distRoot)) {
  console.error('No existe dist/. Ejecuta `npm run build` antes de la auditoría AI.');
  process.exit(1);
}

const robots = readDist('robots.txt');
const llms = readDist('llms.txt');
const llmsFull = readDist('llms-full.txt');
const landing = readDist('empeno-de-autos/index.html');
const sitemap = readDist('sitemap-0.xml');

const requiredCrawlers = [
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
];

for (const crawler of requiredCrawlers) {
  const groupPattern = new RegExp(
    `User-agent:\\s*${crawler.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}[\\s\\S]*?(?=\\nUser-agent:|$)`,
    'i',
  );
  const group = robots.match(groupPattern)?.[0] ?? '';
  requireCheck(Boolean(group), `robots.txt declara ${crawler}`);
  requireCheck(!/Disallow:\s*\/\s*$/im.test(group), `robots.txt no bloquea ${crawler}`);
}

requireCheck(
  /Sitemap:\s*https:\/\/swip\.mx\/sitemap-index\.xml/i.test(robots),
  'robots.txt declara el sitemap canónico',
);

for (const content of [llms, llmsFull]) {
  requireCheck(
    content.includes('https://swip.mx/empeno-de-autos/'),
    'archivo LLM enlaza la fuente principal de empeño de autos',
  );
}
requireCheck(
  /intenci[oó]n comercial principal[\s\S]{0,180}empeño de autos/i.test(llms),
  'llms.txt identifica empeño de autos como intención principal',
);
requireCheck(
  /fuente comercial principal[\s\S]{0,220}empeño de autos/i.test(llmsFull),
  'llms-full.txt documenta la fuente comercial principal',
);

requireCheck(
  /<link rel="canonical" href="https:\/\/swip\.mx\/empeno-de-autos\/"/i.test(landing),
  'landing tiene canonical autorreferente',
);
requireCheck(
  /<h1\b[^>]*>[\s\S]*?Empeño de autos[\s\S]*?<\/h1>/i.test(landing),
  'landing expone Empeño de autos en el H1 renderizado',
);
requireCheck(
  !/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(landing),
  'landing permanece indexable',
);
requireCheck(
  /rel="alternate" type="text\/plain" href="\/llms\.txt"/i.test(landing),
  'landing descubre llms.txt desde el head',
);
requireCheck(
  /https:\/\/swip\.mx\/empeno-de-autos\/#service/.test(landing),
  'landing declara una entidad de servicio estable',
);
requireCheck(/"FAQPage"/.test(landing), 'landing incluye FAQPage en JSON-LD');
requireCheck(
  sitemap.includes('<loc>https://swip.mx/empeno-de-autos/</loc>'),
  'sitemap incluye la landing principal',
);

const sourceFiles = walk(join(projectRoot, 'src')).filter((file) =>
  ['.astro', '.md', '.mdx'].includes(extname(file)),
);
const incomingSources = sourceFiles.filter((file) =>
  readFileSync(file, 'utf8').includes('/empeno-de-autos/'),
);
requireCheck(
  incomingSources.length >= 30,
  `al menos 30 archivos fuente enlazan el hub (${incomingSources.length})`,
);

console.log(`Comprobaciones AI/LLM superadas: ${checks.length}`);
checks.forEach((check) => console.log(`- OK ${check}`));

if (failures.length) {
  console.error(`\nComprobaciones AI/LLM fallidas: ${failures.length}`);
  failures.forEach((failure) => console.error(`- ERROR ${failure}`));
  process.exit(1);
}
