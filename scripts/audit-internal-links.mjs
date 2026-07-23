import { readdir, readFile } from 'node:fs/promises';
import { extname, relative, resolve, sep } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const sourceRoot = resolve(projectRoot, 'src');
const pagesRoot = resolve(sourceRoot, 'pages');
const blogRoot = resolve(sourceRoot, 'content/blog');
const scannableExtensions = new Set(['.astro', '.md', '.mdx']);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }));

  return nested.flat();
}

function normalizeUrl(rawUrl) {
  if (!rawUrl.startsWith('/') || rawUrl.startsWith('//')) return null;
  const pathname = rawUrl.split(/[?#]/, 1)[0];
  if (!pathname || pathname.startsWith('/assets/')) return null;
  return pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
}

function pageUrl(file) {
  const path = relative(pagesRoot, file).split(sep).join('/');
  if (path.includes('[')) return null;

  const withoutExtension = path.replace(/\.(astro|md|mdx)$/, '');
  const route = withoutExtension === 'index'
    ? '/'
    : `/${withoutExtension.replace(/\/index$/, '')}/`;
  return normalizeUrl(route);
}

function extractLinks(source) {
  const links = [];
  const patterns = [
    /href\s*=\s*["'](\/[^"']*)["']/g,
    /\]\((\/[^)\s]+)(?:\s+["'][^"']*["'])?\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      const normalized = normalizeUrl(match[1]);
      if (normalized) links.push(normalized);
    }
  }

  return links;
}

const pageFiles = (await walk(pagesRoot)).filter((file) => scannableExtensions.has(extname(file)));
const blogFiles = (await walk(blogRoot)).filter((file) => scannableExtensions.has(extname(file)));
const sharedFiles = (await walk(sourceRoot)).filter((file) =>
  scannableExtensions.has(extname(file))
  && !file.startsWith(pagesRoot)
  && !file.startsWith(blogRoot)
);

const knownUrls = new Set(pageFiles.map(pageUrl).filter(Boolean));
const blogEntries = [];

for (const file of blogFiles) {
  const source = await readFile(file, 'utf8');
  const slug = source.match(/^slug:\s*["']?([^"'\n]+)["']?\s*$/m)?.[1];
  const draft = source.match(/^draft:\s*(true|false)\s*$/m)?.[1] === 'true';
  if (!slug || draft) continue;

  const url = normalizeUrl(`/blog/${slug}/`);
  knownUrls.add(url);
  blogEntries.push({ file, url });
}

const incomingSources = new Map([...knownUrls].map((url) => [url, new Set()]));
const broken = [];
const filesToScan = [...pageFiles, ...blogFiles, ...sharedFiles];

for (const file of filesToScan) {
  const source = await readFile(file, 'utf8');
  const sourceName = relative(projectRoot, file).split(sep).join('/');
  const uniqueLinks = new Set(extractLinks(source));

  for (const target of uniqueLinks) {
    if (!knownUrls.has(target)) {
      broken.push({ source: sourceName, target });
      continue;
    }
    incomingSources.get(target).add(sourceName);
  }
}

// The blog index and related-post cards are generated from the collection, so
// those links do not appear as URL literals in the Astro templates.
for (const { url } of blogEntries) {
  incomingSources.get(url).add('src/pages/blog/index.astro (generated)');
  incomingSources.get(url).add('src/pages/blog/[slug].astro (related posts)');
}

const ignoredOrphans = new Set([
  '/',
  '/aviso-de-privacidad/',
  '/terminos-de-uso/',
  '/cotizar/',
]);
const orphans = [...knownUrls]
  .filter((url) => !ignoredOrphans.has(url) && incomingSources.get(url).size === 0)
  .sort();
const weaklyLinked = [...knownUrls]
  .filter((url) => !ignoredOrphans.has(url) && incomingSources.get(url).size === 1)
  .map((url) => ({ url, source: [...incomingSources.get(url)][0] }))
  .sort((a, b) => a.url.localeCompare(b.url));

console.log(`URLs indexables conocidas: ${knownUrls.size}`);
console.log(`Enlaces internos rotos: ${broken.length}`);
for (const item of broken.sort((a, b) => a.target.localeCompare(b.target))) {
  console.log(`  ROTO ${item.target} <- ${item.source}`);
}
console.log(`Páginas huérfanas: ${orphans.length}`);
for (const url of orphans) console.log(`  HUÉRFANA ${url}`);
console.log(`Páginas con una sola fuente de enlaces: ${weaklyLinked.length}`);
for (const item of weaklyLinked) console.log(`  DÉBIL ${item.url} <- ${item.source}`);

if (broken.length > 0) process.exitCode = 1;
