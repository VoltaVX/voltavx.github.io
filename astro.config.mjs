import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://voltavx.com',
  output: 'static',
  integrations: [mdx(), sitemap()],
  compressHTML: true,
  build: {
    format: 'directory',
  },
});
