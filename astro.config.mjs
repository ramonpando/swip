// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

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
    }),
    mdx(),
  ],
});
