import assert from 'node:assert/strict';
import { access, readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(projectRoot, 'dist');
const read = (path) => readFile(join(projectRoot, path), 'utf8');

const collectHtml = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectHtml(path);
    return entry.isFile() && entry.name.endsWith('.html') ? [path] : [];
  }));
  return nested.flat();
};

const localTarget = (value) => {
  const clean = value.split(/[?#]/, 1)[0];
  if (!clean || clean.startsWith('#') || clean.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(clean)) return null;
  const relative = clean.startsWith('/') ? clean.slice(1) : clean;
  if (!relative) return join(distRoot, 'index.html');
  if (relative.endsWith('/')) return join(distRoot, relative, 'index.html');
  return join(distRoot, relative);
};

const [homeHtml, contactHtml, contactScript, layoutStyles, stylesheet] = await Promise.all([
  read('dist/index.html'),
  read('dist/contact/index.html'),
  read('src/scripts/contact.ts'),
  read('src/styles/global.css'),
  stat(join(distRoot, '_astro/site.css')),
]);

assert(stylesheet.size > 0, 'The production stylesheet is empty.');
assert.match(homeHtml, /http-equiv=["']content-security-policy["']/i, 'Production CSP is missing.');
assert.doesNotMatch(homeHtml, /unsafe-inline|unsafe-eval/i, 'Production CSP contains an unsafe execution keyword.');
assert.match(homeHtml, /href=["']\/_astro\/site\.css["']/i, 'The stable stylesheet link is missing.');
assert.match(contactHtml, /href=["']mailto:[^"']+/i, 'The contact page lacks a native mailto link.');
assert.match(contactHtml, /data-action=["']gmail["']/i, 'The Gmail fallback is missing.');
assert.match(contactHtml, /data-action=["']copy["']/i, 'The clipboard fallback is missing.');
assert.doesNotMatch(contactScript, /actionCooldown|actionLockedUntil|actionSelector/, 'A contact-action click guard can still cancel native navigation.');
assert.doesNotMatch(contactScript, /mailtoLink\.addEventListener|form\.addEventListener\(['"]click/, 'Native mail navigation has a JavaScript click interceptor.');
assert.match(layoutStyles, /\.hero-grid\s*{[^}]*margin-inline:\s*auto/s, 'The hero is not horizontally centered.');
assert.match(layoutStyles, /html\s*{[^}]*overflow-x:\s*clip/s, 'The mobile overflow guard is missing.');

const htmlFiles = await collectHtml(distRoot);
const missing = [];
for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const attributes = html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi);
  for (const [, value] of attributes) {
    const target = localTarget(value);
    if (!target) continue;
    try {
      await access(target);
    } catch {
      missing.push(`${htmlFile.slice(distRoot.length + 1)} -> ${value}`);
    }
  }
}
assert.deepEqual(missing, [], `Built pages reference missing local files:\n${missing.join('\n')}`);

console.log(`Project verification passed for ${htmlFiles.length} pages: CSP, CSS, local assets, native mail, Gmail, and clipboard fallbacks are valid.`);
