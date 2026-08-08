import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const distDir = join(process.cwd(), 'dist');

if (!existsSync(distDir)) {
  console.error('No existe dist/. Ejecuta `npm run build` antes del inventario de claims.');
  process.exit(1);
}

const claimFamilies = [
  {
    id: 'RATE',
    label: 'Tasa, costo o pago',
    owner: 'Legal + Finanzas',
    status: 'requiere evidencia y texto aprobado',
    pattern: /(?:4[.,]5\s*%|tasa\s+(?:mensual|fija|final|desde)|saldo insoluto|costo total|comisiones?)/iu,
  },
  {
    id: 'AMOUNT',
    label: 'Monto, límite o rango monetario',
    owner: 'Operaciones + Finanzas',
    status: 'requiere fuente, vigencia y condiciones',
    pattern: /(?:\$\s?[\d,.]+|\b\d+(?:[.,]\d+)?\s*(?:mil|millones?)\s+(?:de\s+)?pesos|hasta\s+\d+\s+millones)/iu,
  },
  {
    id: 'SPEED',
    label: 'Velocidad de respuesta, valuación o desembolso',
    owner: 'Operaciones',
    status: 'requiere definir hito, condiciones y SLA observado',
    pattern: /(?:en\s+minutos|menos\s+de\s+24\s+horas|en\s+24\s*h(?:oras)?|mismo\s+d[ií]a(?:\s+h[aá]bil)?|respuesta\s+inmediata)/iu,
  },
  {
    id: 'BUREAU',
    label: 'Buró o historial crediticio',
    owner: 'Legal + Riesgo',
    status: 'requiere alcance y condición de elegibilidad',
    pattern: /(?:sin\s+bur[oó]|bur[oó]\s+de\s+cr[eé]dito|historial\s+crediticio)/iu,
  },
  {
    id: 'CUSTODY',
    label: 'Custodia, seguro, GPS o seguridad física',
    owner: 'Operaciones + Legal',
    status: 'requiere soporte contractual y operativo',
    pattern: /(?:seguro\s+(?:vigente|activo)|cobertura\s+de\s+seguro|monitoreo\s+gps|instalaciones\s+seguras|acceso\s+controlado|temperatura\s+controlada|resguardo\s+seguro)/iu,
  },
  {
    id: 'VALUATION',
    label: 'Valuación, LTV o rango por activo',
    owner: 'Valuación + Datos',
    status: 'requiere metodología, fecha de corte y limitaciones',
    pattern: /(?:entre\s+el\s+\d+\s*%\s+y\s+el\s+\d+\s*%|valor\s+(?:comercial|de\s+mercado|real|de\s+liquidaci[oó]n)|rango\s+(?:preliminar|estimado)|valuaci[oó]n\s+(?:especializada|f[ií]sica|en\s+persona))/iu,
  },
  {
    id: 'COMPARISON',
    label: 'Comparación con bancos, empeño u otros proveedores',
    owner: 'Legal + Contenido',
    status: 'requiere fuente, fecha, alcance y lenguaje no absoluto',
    pattern: /(?:\bvs\.?\b|bancos?|monte\s+de\s+piedad|casa(?:s)?\s+de\s+empe(?:ñ|n)o|otros\s+prestamistas|competidores?)/iu,
  },
];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function routeFor(file) {
  const directory = relative(distDir, dirname(file)).split(sep).join('/');
  return directory === '' ? '/' : `/${directory}/`;
}

function visibleText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;
  return main
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function sourceFor(route) {
  if (route === '/') return 'src/pages/index.astro';
  if (route.startsWith('/blog/') && route !== '/blog/') {
    return `src/content/blog/${route.slice('/blog/'.length, -1)}.md`;
  }
  return `src/pages${route}index.astro`;
}

const pages = walk(distDir)
  .filter((file) => file.endsWith(`${sep}index.html`))
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    const route = routeFor(file);
    const noindex = /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/iu.test(html);
    const content = visibleText(html);
    const claims = claimFamilies
      .filter(({ pattern }) => pattern.test(content))
      .map(({ pattern, ...family }) => family);
    return { route, source: sourceFor(route), noindex, claims };
  });

const indexablePages = pages.filter(({ noindex }) => !noindex);
const result = {
  generatedAt: new Date().toISOString(),
  coverage: {
    builtPages: pages.length,
    indexablePages: indexablePages.length,
    indexablePagesWithClaims: indexablePages.filter(({ claims }) => claims.length).length,
    indexablePagesWithoutDetectedClaims: indexablePages.filter(({ claims }) => claims.length === 0).length,
  },
  families: claimFamilies.map(({ pattern, ...family }) => ({
    ...family,
    pages: indexablePages
      .filter(({ claims }) => claims.some(({ id }) => id === family.id))
      .map(({ route, source }) => ({ route, source })),
  })),
  pagesWithoutDetectedClaims: indexablePages
    .filter(({ claims }) => claims.length === 0)
    .map(({ route, source }) => ({ route, source })),
};

console.log(JSON.stringify(result, null, 2));
