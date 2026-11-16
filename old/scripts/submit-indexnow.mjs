import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const host = 'voltavx.com';
const key = 'c36014db93be5976f1b60bdb51491648';
const registry = await readFile(join(projectRoot, 'src/config/seo.ts'), 'utf8');
const routes = [...registry.matchAll(/\{\s*path:\s*'([^']+)'[^\n]+index:\s*true\s*\}/g)]
  .map((match) => match[1]);

if (!routes.length) throw new Error('No indexable routes were found in src/config/seo.ts.');

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: routes.map((route) => new URL(route, `https://${host}`).href),
};

if (process.argv.includes('--dry-run')) {
  console.log(`IndexNow payload is valid for ${payload.urlList.length} URLs.`);
  process.exit(0);
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}.`);
}

console.log(`IndexNow accepted ${payload.urlList.length} URLs with HTTP ${response.status}.`);
