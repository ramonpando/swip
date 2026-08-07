import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const DIST_DIR = join(process.cwd(), 'dist');
const SITE_URL = 'https://swip.mx';
const errors = [];
const warnings = [];

if (!existsSync(DIST_DIR)) {
  console.error('No existe dist/. Ejecuta `npm run build` antes de la auditoría SEO.');
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function routeFor(file) {
  const directory = relative(DIST_DIR, dirname(file)).split(sep).join('/');
  return directory === '' ? '/' : `/${directory}/`;
}

function text(value = '') {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function firstMatch(html, pattern) {
  return html.match(pattern)?.[1]?.trim() ?? '';
}

function addIssue(collection, route, message) {
  collection.push(`${route} — ${message}`);
}

const pages = walk(DIST_DIR)
  .filter((file) => file.endsWith(`${sep}index.html`))
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    const route = routeFor(file);
    const title = text(firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
    const description = firstMatch(
      html,
      /<meta\s+name="description"\s+content="([^"]*)"/i,
    );
    const canonical = firstMatch(
      html,
      /<link\s+rel="canonical"\s+href="([^"]*)"/i,
    );
    const robots = firstMatch(
      html,
      /<meta\s+name="robots"\s+content="([^"]*)"/i,
    );
    const h1Count = [...html.matchAll(/<h1\b[^>]*>/gi)].length;
    const images = [...html.matchAll(/<img\b([^>]*)>/gi)];
    const schemas = [...html.matchAll(
      /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    )];
    const noindex = robots.toLowerCase().includes('noindex');

    if (!title) addIssue(errors, route, 'falta title');
    if (!description) addIssue(errors, route, 'falta meta description');
    if (!canonical) addIssue(errors, route, 'falta canonical');
    if (h1Count !== 1) addIssue(errors, route, `tiene ${h1Count} H1`);
    if (canonical && canonical !== `${SITE_URL}${route}`) {
      addIssue(errors, route, `canonical inesperado: ${canonical}`);
    }

    if (!noindex && (title.length < 30 || title.length > 65)) {
      addIssue(warnings, route, `title de ${title.length} caracteres`);
    }
    if (!noindex && (description.length < 120 || description.length > 170)) {
      addIssue(warnings, route, `description de ${description.length} caracteres`);
    }

    images.forEach((image, index) => {
      if (!/\balt="[^"]*"/i.test(image[1])) {
        addIssue(errors, route, `imagen ${index + 1} sin atributo alt`);
      }
    });

    if (schemas.length === 0) addIssue(warnings, route, 'sin JSON-LD');
    schemas.forEach((schema, index) => {
      try {
        JSON.parse(schema[1]);
      } catch (error) {
        addIssue(errors, route, `JSON-LD ${index + 1} inválido: ${error.message}`);
      }
    });

    return { route, title, description, canonical, noindex };
  });

function findDuplicates(key, label) {
  const groups = new Map();
  pages
    .filter((page) => !page.noindex && page[key])
    .forEach((page) => {
      const routes = groups.get(page[key]) ?? [];
      routes.push(page.route);
      groups.set(page[key], routes);
    });

  groups.forEach((routes) => {
    if (routes.length > 1) {
      errors.push(`${routes.join(', ')} — ${label} duplicado`);
    }
  });
}

findDuplicates('title', 'title');
findDuplicates('description', 'meta description');
findDuplicates('canonical', 'canonical');

const sitemapPath = join(DIST_DIR, 'sitemap-0.xml');
if (!existsSync(sitemapPath)) {
  errors.push('Falta dist/sitemap-0.xml');
} else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
  );

  pages.forEach((page) => {
    const inSitemap = sitemapUrls.has(page.canonical);
    if (!page.noindex && !inSitemap) {
      addIssue(errors, page.route, 'página indexable ausente del sitemap');
    }
    if (page.noindex && inSitemap) {
      addIssue(errors, page.route, 'página noindex incluida en el sitemap');
    }
  });

  sitemapUrls.forEach((url) => {
    if (!pages.some((page) => page.canonical === url)) {
      errors.push(`${url} — URL del sitemap sin página generada`);
    }
  });
}

console.log(`Páginas auditadas: ${pages.length}`);
console.log(`Páginas indexables: ${pages.filter((page) => !page.noindex).length}`);
console.log(`Errores SEO: ${errors.length}`);
console.log(`Advertencias SEO: ${warnings.length}`);

if (warnings.length) {
  console.log('\nADVERTENCIAS');
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length) {
  console.error('\nERRORES');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
