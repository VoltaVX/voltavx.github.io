import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Structural reachability check only. This does not evaluate model obedience.
export async function auditUI(rootInput) {
  const root = resolve(rootInput instanceof URL ? fileURLToPath(rootInput) : rootInput);
  const ui = resolve(root, 'docs/ui');
  const errors = [];
  async function text(path) {
    try { return await readFile(path, 'utf8'); }
    catch { errors.push(`Missing readable file: ${relative(root, path)}`); return ''; }
  }
  const raw = await text(resolve(ui, 'manifest.json'));
  let manifest;
  try { manifest = JSON.parse(raw); }
  catch { return [...errors, 'Invalid JSON: docs/ui/manifest.json']; }
  if (manifest.version !== 1 || !Array.isArray(manifest.components) || manifest.components.length === 0 || !Array.isArray(manifest.required)) {
    return [...errors, 'Invalid manifest.json structure: version, required and components are required'];
  }
  const authority = resolve(ui, manifest.authority ?? '');
  if (!authority.startsWith(ui + sep)) return ['Authority must stay inside docs/ui'];
  const main = await text(authority);
  const ids = new Set(), files = new Set();
  const cssPaths = ['tokens.css', 'global.css', 'scaffold.css', 'portfolio.css'].map(f => resolve(root, 'src/styles', f));
  const css = (await Promise.all(cssPaths.map(text))).join('\n');
  const documents = [[authority, main]];
  for (const component of manifest.components) {
    if (!component.id || ids.has(component.id)) errors.push(`Missing or duplicate component ID: ${component.id}`);
    ids.add(component.id);
    if (typeof component.spec !== 'string' || !component.spec.startsWith('components/') || component.spec.includes('..')) {
      errors.push(`Unsafe/missing component spec: ${component.id}`); continue;
    }
    files.add(component.spec);
    const target = resolve(ui, component.spec);
    documents.push([target, await text(target)]);
    if (!main.includes(`](${component.spec})`)) errors.push(`Component is absent from main lookup table: ${component.spec}`);
    if (typeof component.css !== 'string' || !cssPaths.includes(resolve(root, component.css))) errors.push(`Unknown CSS owner: ${component.id}`);
    for (const selector of component.selectors ?? []) if (!css.includes(selector)) errors.push(`Missing exported selector ${selector}: ${component.id}`);
  }
  for (const id of manifest.required) if (!ids.has(id)) errors.push(`Required component is missing: ${id}`);
  try {
    for (const name of await readdir(resolve(ui, 'components'))) if (name.endsWith('.md') && !files.has(`components/${name}`)) errors.push(`Unindexed component specification: ${name}`);
  } catch { errors.push('Missing docs/ui/components directory'); }
  for (const [file, body] of documents) {
    for (const match of body.matchAll(/\]\(([^)]+)\)/g)) {
      const href = match[1].split('#')[0];
      if (!href || /^(?:[a-z]+:|\/\/)/i.test(href)) continue;
      try { await stat(resolve(dirname(file), href)); }
      catch { errors.push(`Broken specification link in ${relative(root, file)}: ${href}`); }
    }
  }
  const entrypoints = ['AGENTS.md', 'src/AGENTS.md', 'src/styles/AGENTS.md', 'src/components/AGENTS.md', 'src/layouts/AGENTS.md', 'docs/modules/pages.md', 'CLAUDE.md', '.github/copilot-instructions.md', '.cursor/rules/knowzcode.mdc', 'knowzcode/enterprise/guidelines/design.md', '.ai/workflows/ui-change.md'];
  for (const entry of entrypoints) {
    const body = await text(resolve(root, entry));
    if (!body.includes('docs/ui/design.md') || !body.includes('foundations.md')) errors.push(`UI lookup route is incomplete: ${entry}`);
  }
  const instructions = await text(resolve(root, 'AGENTS.md'));
  if (Buffer.byteLength(instructions) > 10240) errors.push('Root AGENTS.md exceeds the project 10 KiB context budget');
  const layout = await text(resolve(root, 'src/layouts/BaseLayout.astro'));
  if (layout.indexOf("'../styles/tokens.css'") < 0 || layout.indexOf("'../styles/global.css'") <= layout.indexOf("'../styles/tokens.css'")) errors.push('BaseLayout must import tokens.css before global.css');
  const global = await text(resolve(root, 'src/styles/global.css'));
  for (const name of ['scaffold.css', 'portfolio.css']) if (!global.includes(`@import './${name}';`)) errors.push(`Missing CSS entry import: ${name}`);
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const errors = await auditUI(new URL('../', import.meta.url));
  if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
  else console.log('UI contract: authority, component coverage, links, selectors and agent routes are reachable.');
}
