import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import { deploymentSettings } from './src/lib/paths.ts';

// Shell and CI variables take precedence over the optional local .env file.
if (existsSync('.env')) process.loadEnvFile('.env');
const { site, base } = deploymentSettings(
  process.env.SITE_URL ?? 'https://voltavx-portfolio.voltavxofficial.chatgpt.site',
  process.env.BASE_PATH
);

export default defineConfig({
  output: 'static',
  vite: { server: { allowedHosts: ['terminal.local'] } },
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' }
});
