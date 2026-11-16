import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repository = fileURLToPath(new URL('../', import.meta.url));
const voidTags = new Set('area base br col embed hr img input link meta param source track wbr'.split(' '));
const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“' };
const decode = value => value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (whole, entity) => {
  if (entity[0] !== '#') return entities[entity] ?? whole;
  const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
  return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : whole;
});
const normalize = value => decode(value).replace(/\s+/g, ' ').trim();

// A deliberately small reader for Astro's generated, well-formed HTML. Raw text
// containers are removed before tokenization, so JS/CSS cannot create fake nodes.
function parseHTML(html) {
  const root = { tag: '#document', attrs: {}, children: [] };
  const stack = [root];
  const source = html.replace(/<(script|style)\b((?:[^"'<>]|"[^"]*"|'[^']*')*)>[\s\S]*?<\/\1\s*>/gi, (_, tag, attrs) => `<${tag}${attrs}></${tag}>`);
  const token = /<!--[\s\S]*?-->|<![^>]*>|<\/?([a-z][\w:-]*)\b((?:[^"'<>]|"[^"]*"|'[^']*')*)>/gi;
  let end = 0;
  for (const match of source.matchAll(token)) {
    if (match.index > end) stack.at(-1).children.push(source.slice(end, match.index));
    end = match.index + match[0].length;
    if (!match[1]) continue;
    const tag = match[1].toLowerCase();
    if (match[0][1] === '/') {
      const open = stack.findLastIndex(node => node.tag === tag);
      if (open > 0) stack.length = open;
      continue;
    }
    const attrs = {};
    for (const attr of match[2].matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      attrs[attr[1].toLowerCase()] = decode(attr[2] ?? attr[3] ?? attr[4] ?? '');
    }
    const node = { tag, attrs, children: [], parent: stack.at(-1) };
    stack.at(-1).children.push(node);
    if (!voidTags.has(tag) && !match[0].endsWith('/>')) stack.push(node);
  }
  if (end < source.length) stack.at(-1).children.push(source.slice(end));
  return root;
}
const children = node => node.children.filter(child => typeof child !== 'string');
const nodes = node => children(node).flatMap(child => [child, ...nodes(child)]);
const textContent = node => normalize(node.children.map(child => typeof child === 'string' ? child : textContent(child)).join(' '));
const hasClass = (node, name) => (node.attrs.class ?? '').split(/\s+/).includes(name);

async function filesBelow(directory) {
  let entries;
  try { entries = await readdir(directory, { withFileTypes: true }); }
  catch { return []; }
  const groups = await Promise.all(entries.map(entry => entry.isDirectory() ? filesBelow(resolve(directory, entry.name)) : [resolve(directory, entry.name)]));
  return groups.flat();
}

/** Audit emitted HTML/content and local links only. This is not browser or visual QA. */
export async function auditPortfolioBuild({ directory = resolve(repository, 'dist'), base = '/', root = repository } = {}) {
  const errors = [];
  const build = resolve(directory);
  if (!/^\/(?:[^?#\\]*\/)?$/.test(base) || base.includes('//') || base.split('/').includes('..')) {
    return ['Base must start and end with /, for example --base /preview/.'];
  }
  const pages = new Map();
  for (const file of (await filesBelow(build)).filter(file => file.endsWith('.html'))) {
    const name = relative(build, file).split(sep).join('/');
    const html = await readFile(file, 'utf8');
    const tree = parseHTML(html);
    pages.set(name, { html, tree, elements: nodes(tree) });
  }
  for (const name of ['index.html', 'system/index.html', '404.html']) if (!pages.has(name)) errors.push(`Missing required static route: ${name}`);
  const home = pages.get('index.html');
  if (!home) return errors;
  const homeText = textContent(home.tree);
  const one = (condition, message) => { if (!condition) errors.push(message); };
  for (const [name, page] of pages) {
    one(page.elements.filter(node => node.tag === 'h1').length === 1, `${name}: expected exactly one H1.`);
    one(!/\bForma\b|example\.com/i.test(page.html), `${name}: contains a scaffold brand or example.com placeholder.`);
    const ids = page.elements.filter(node => node.attrs.id).map(node => node.attrs.id);
    one(ids.length === new Set(ids).size, `${name}: duplicate element IDs break anchor destinations.`);
    for (const anchor of page.elements.filter(node => node.tag === 'a')) {
      one(!['', '#'].includes(anchor.attrs.href), `${name}: anchor “${textContent(anchor)}” has an empty placeholder destination.`);
    }
  }
  for (const id of ['research', 'approach', 'pathway', 'work', 'ecosystem', 'services', 'about', 'contact']) {
    const section = home.elements.find(node => node.tag === 'section' && node.attrs.id === id);
    one(Boolean(section), `index.html: missing semantic section #${id}.`);
    if (section) one(nodes(section).some(node => node.tag === 'h2'), `index.html: section #${id} needs an H2.`);
  }
  const titles = ['SIS Asphalt', 'VX Nexus', 'World Cup Items', 'AI Misattribution', 'Sharper Image Services', 'SIS Florida', 'PantherNOW Operations', 'ABA Data Visualization System'];
  const projects = home.elements.filter(node => hasClass(node, 'project-card'));
  one(projects.length === 8, `index.html: expected 8 .project-card elements; found ${projects.length}.`);
  titles.forEach((title, index) => {
    const headings = projects[index] ? nodes(projects[index]).filter(node => /^h[2-6]$/.test(node.tag)) : [];
    one(headings.some(node => textContent(node) === title), `index.html: project ${index + 1} must retain heading “${title}” in source order.`);
  });
  if (projects[7]) {
    one(textContent(projects[7]).includes('In development'), 'index.html: final project needs its In development status.');
    one(nodes(projects[7]).some(node => node.tag === 'a' && textContent(node).startsWith('View concept')), 'index.html: final project action must say View concept.');
  }
  const cards = home.elements.filter(node => hasClass(node, 'pathway-card'));
  const fixture = JSON.parse(await readFile(resolve(root, 'tests/fixtures/pathway.json'), 'utf8'));
  one(cards.length === fixture.length, `index.html: expected ${fixture.length} original .pathway-card elements; found ${cards.length}.`);
  for (const [index, item] of fixture.entries()) {
    const text = cards[index] ? textContent(cards[index]) : '';
    for (const field of ['term', 'title', 'body', 'implication']) one(text.includes(normalize(item[field])), `index.html: pathway ${item.n} changed or omitted locked ${field} copy.`);
  }
  const stageLabels = home.elements.filter(node => hasClass(node, 'research-stage-label')).map(textContent);
  one(JSON.stringify(stageLabels) === JSON.stringify(['Observe', 'Define', 'Measure', 'Analyze', 'Test', 'Refine']), 'index.html: retain the six research-stage labels Observe, Define, Measure, Analyze, Test, Refine in that order.');
  const emails = home.elements.filter(node => node.tag === 'a' && /^mailto:/i.test(node.attrs.href ?? ''));
  one(emails.some(node => /^mailto:[^@\s]+@[^@\s]+\.[^@\s?]+(?:\?.*)?$/.test(node.attrs.href)), 'index.html: a native contact email link is required.');
  one(homeText.includes('Start a conversation'), 'index.html: missing Start a conversation contact action.');
  const notFound = pages.get('404.html');
  if (notFound) one(notFound.elements.some(node => node.tag === 'meta' && node.attrs.name?.toLowerCase() === 'robots' && /\bnoindex\b/i.test(node.attrs.content ?? '')), '404.html: expected robots noindex.');

  // Resolve every emitted local link/resource relative to its actual route and
  // the supplied hosting base. Remote URLs and mailto/tel/data are not fetched.
  const fakeOrigin = 'https://portfolio-audit.invalid';
  for (const [name, page] of pages) {
    const route = `${base}${name === 'index.html' ? '' : name.endsWith('/index.html') ? name.slice(0, -10) : name}`;
    for (const node of page.elements) {
      const refs = ['href', 'src', 'poster'].filter(attr => node.attrs[attr] !== undefined).map(attr => [attr, node.attrs[attr]]);
      if (node.attrs.srcset) for (const candidate of node.attrs.srcset.split(',')) refs.push(['srcset', candidate.trim().split(/\s+/)[0]]);
      for (const [attr, value] of refs) {
        if (!value || /^(?:[a-z][\w+.-]*:|\/\/)/i.test(value)) continue;
        let url;
        try { url = new URL(value, `${fakeOrigin}${route}`); }
        catch { errors.push(`${name}: invalid ${attr} URL ${value}.`); continue; }
        if (!url.pathname.startsWith(base)) { errors.push(`${name}: ${attr} ${value} escapes hosting base ${base}.`); continue; }
        let local;
        try { local = decodeURIComponent(url.pathname.slice(base.length)); }
        catch { errors.push(`${name}: invalid encoded URL ${value}.`); continue; }
        const requested = resolve(build, local);
        if (requested !== build && !requested.startsWith(build + sep)) { errors.push(`${name}: unsafe local URL ${value}.`); continue; }
        let destination = requested;
        try { if ((await stat(destination)).isDirectory()) destination = resolve(destination, 'index.html'); await stat(destination); }
        catch { errors.push(`${name}: missing local ${attr} target ${value}.`); continue; }
        if (url.hash && destination.endsWith('.html')) {
          let fragment;
          try { fragment = decodeURIComponent(url.hash.slice(1)); } catch { fragment = url.hash.slice(1); }
          const target = pages.get(relative(build, destination).split(sep).join('/'));
          if (!target?.elements.some(element => element.attrs.id === fragment)) errors.push(`${name}: missing fragment ${value}.`);
        }
      }
    }
  }
  const sourceImages = (await filesBelow(resolve(root, 'public/images'))).filter(file => /\.(?:avif|webp|png|jpe?g|gif|svg)$/i.test(file));
  one(sourceImages.length === 10, `public/images: expected the 10 original portfolio images; found ${sourceImages.length}.`);
  for (const source of sourceImages) {
    const path = relative(resolve(root, 'public'), source).split(sep).join('/');
    try { one((await stat(resolve(build, path))).size > 0, `Empty output image: ${path}.`); }
    catch { errors.push(`Missing output image from source inventory: ${path}.`); }
    one(home.elements.some(node => node.tag === 'img' && node.attrs.src === `${base}${path}`), `index.html: original image is not referenced by an img: ${path}.`);
  }
  for (const image of home.elements.filter(node => node.tag === 'img')) {
    one('alt' in image.attrs, `index.html: image ${image.attrs.src} needs an explicit alt attribute.`);
    one(Number(image.attrs.width) > 0 && Number(image.attrs.height) > 0, `index.html: image ${image.attrs.src} needs positive intrinsic width and height.`);
  }
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  let directory = resolve(repository, 'dist');
  let base = '/';
  let positional = false;
  for (let index = 2; index < process.argv.length; index++) {
    const arg = process.argv[index];
    if (arg === '--base' && process.argv[index + 1]) base = process.argv[++index];
    else if (!arg.startsWith('-') && !positional) { directory = resolve(arg); positional = true; }
    else { console.error('Usage: node tools/check-portfolio-build.mjs [built-directory] [--base /preview/]'); process.exitCode = 2; }
  }
  if (!process.exitCode) {
    const errors = await auditPortfolioBuild({ directory, base });
    if (errors.length) { console.error(`Portfolio build audit failed (${errors.length}):\n${errors.map(error => `- ${error}`).join('\n')}`); process.exitCode = 1; }
    else console.log('Portfolio build audit passed: static content, original copy, routes, local links and image inventory. Visual layout, interaction and accessibility require browser verification.');
  }
}
