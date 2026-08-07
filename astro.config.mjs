// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import { readdirSync, readFileSync } from 'node:fs';

const blogDirectory = new URL('./src/content/blog/', import.meta.url);
const blogLastmod = new Map();

for (const filename of readdirSync(blogDirectory)) {
  if (!filename.endsWith('.md') && !filename.endsWith('.mdx')) continue;
  const content = readFileSync(new URL(filename, blogDirectory), 'utf8');
  const slug = content.match(/^slug:\s*"([^"]+)"/m)?.[1];
  const published = content.match(/^date:\s*"([^"]+)"/m)?.[1];
  const updated = content.match(/^updatedDate:\s*"([^"]+)"/m)?.[1];
  if (slug && (updated || published)) {
    blogLastmod.set(`/blog/${slug}/`, new Date(updated ?? published));
  }
}

const newestBlogDate = [...blogLastmod.values()]
  .sort((a, b) => b.getTime() - a.getTime())[0];

export default defineConfig({
  site: 'https://swip.mx',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => ![
        '/lp/',
        '/aviso-de-privacidad/',
        '/terminos-de-uso/',
        '/cotizar/',
      ].some((path) => page.includes(path)),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = pathname === '/blog/'
          ? newestBlogDate
          : blogLastmod.get(pathname);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
    mdx(),
    partytown({
      config: {
        forward: ['gtag'],
      },
    }),
  ],
});
