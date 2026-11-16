import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { auditPortfolioBuild } from '../../tools/check-portfolio-build.mjs';

const sourceRoot = new URL('../../', import.meta.url);
const titles = ['SIS Asphalt', 'VX Nexus', 'World Cup Items', 'AI Misattribution', 'Sharper Image Services', 'SIS Florida', 'PantherNOW Operations', 'ABA Data Visualization System'];
const locked = JSON.parse(await readFile(new URL('tests/fixtures/pathway.json', sourceRoot), 'utf8'));
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

async function fixture(base, callback) {
  const root = await mkdtemp(resolve(tmpdir(), 'portfolio-build-'));
  const directory = resolve(root, 'dist');
  try {
    await mkdir(resolve(root, 'tests/fixtures'), { recursive: true });
    await writeFile(resolve(root, 'tests/fixtures/pathway.json'), JSON.stringify(locked));
    await mkdir(resolve(root, 'public/images'), { recursive: true });
    await mkdir(resolve(directory, 'images'), { recursive: true });
    await mkdir(resolve(directory, 'system'), { recursive: true });
    for (let index = 0; index < 10; index++) {
      await writeFile(resolve(root, 'public/images', `${index}.webp`), 'source');
      await writeFile(resolve(directory, 'images', `${index}.webp`), 'image');
    }
    const projects = titles.map((title, index) => `<article class="project-card"><h3>${title}</h3>${index === 7 ? '<p>In development</p><a href="https://voltavx.com/work/aba/">View concept</a>' : ''}</article>`).join('');
    const pathway = locked.map(item => `<article class="pathway-card"><p>${item.term}</p><h3>${item.title}</h3><p>${item.body}</p><p>${item.implication}</p></article>`).join('');
    const stages = ['Observe', 'Define', 'Measure', 'Analyze', 'Test', 'Refine'].map(label => `<span class="research-stage-label">${label}</span>`).join('');
    const sections = ['research', 'approach', 'pathway', 'work', 'ecosystem', 'services', 'about', 'contact'].map(id => `<section id="${id}"><h2>${id}</h2>${id === 'work' ? projects : id === 'pathway' ? pathway : id === 'approach' ? stages : ''}</section>`).join('');
    const images = Array.from({ length: 10 }, (_, index) => `<img src="${base}images/${index}.webp" alt="Source photo ${index}" width="1200" height="750">`).join('');
    const body = `<h1>Juan &amp; thoughtful systems</h1>${sections}${images}<a href="mailto:juan@voltavx.com">Start a conversation</a><a href="${base}#work">Work</a><a href="${base}system/">System</a><script>const ignored = '<h1>fake</h1>';</script>`;
    await writeFile(resolve(directory, 'index.html'), `<!doctype html><html><head><title>Juan</title></head><body>${body}</body></html>`);
    await writeFile(resolve(directory, 'system/index.html'), `<html><body><h1>System</h1><a href="${base}#contact">Contact</a></body></html>`);
    await writeFile(resolve(directory, '404.html'), `<html><head><meta name="robots" content="noindex, follow"></head><body><h1>Page unavailable</h1><a href="${base}">Home</a></body></html>`);
    await callback({ directory, base, root });
  } finally { await rm(root, { recursive: true, force: true }); }
}

test('static portfolio audit accepts complete root and repository-base output', async () => {
  for (const base of ['/', '/preview/']) await fixture(base, async options => assert.deepEqual(await auditPortfolioBuild(options), []));
});

test('static portfolio audit rejects missing assets, changed locked text and invalid anchors', async () => {
  await fixture('/preview/', async options => {
    const path = resolve(options.directory, 'index.html');
    const html = await readFile(path, 'utf8');
    await writeFile(path, html.replace(escape(locked[0].title), 'A different title') + '<a href="/outside/">Wrong base</a><a href="#absent">Missing anchor</a><script src="/preview/missing-filter.js"></script>');
    await rm(resolve(options.directory, 'images/0.webp'));
    const errors = await auditPortfolioBuild(options);
    assert.ok(errors.some(error => error.includes('pathway 01') && error.includes('title')));
    assert.ok(errors.some(error => error.includes('missing local src target')));
    assert.ok(errors.some(error => error.includes('missing-filter.js')));
    assert.ok(errors.some(error => error.includes('Missing output image')));
    assert.ok(errors.some(error => error.includes('escapes hosting base')));
    assert.ok(errors.some(error => error.includes('missing fragment')));
  });
});
