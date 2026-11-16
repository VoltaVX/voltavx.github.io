import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync } from 'node:fs';
import { normalizeBase, localPath } from '../../src/lib/paths';

const cards = JSON.parse(readFileSync(new URL('../fixtures/pathway.json', import.meta.url), 'utf8'));
const path = (route: string) => localPath(route, normalizeBase(process.env.BASE_PATH ?? '/'));
const examples = [
  '<div class="example-plane"><p class="lead">I design with people in mind.</p><span class="button">Explore my work</span></div>',
  '<div class="example-plane filter-example"><span class="is-selected">All work</span><span>Commerce</span><span>Research</span></div>',
  '<div class="example-plane"><p>Project → <strong>Details</strong> → Review</p><p>Show guidance</p></div>',
  '<div class="example-plane confirmation-example"><span>✓</span><h4>Message sent</h4><span>Back to your message</span></div>',
  '<div class="example-plane"><p>User goal</p><p>Find a relevant case study</p><p>Observe</p><p>Task completed · Help needed · User feedback</p></div>'
];
const captions = ['One clear next action', 'A recognizable selected state', 'Interaction study|Help at the relevant step', 'Interaction study|A clear completion state', 'Evaluation plan|Success defined with users'];

async function fixture(page: Page) {
  await page.goto(path('/system/'));
  const stages = cards.map((c: { n: string; term: string; title: string; body: string; implication: string }, i: number) => `<li class="pathway-stage ${i === 1 ? 'pathway-stage--compact' : ''}">
    <article class="pathway-card"><span class="pathway-badge">${c.n}</span><span class="pathway-icon" aria-hidden="true">◇</span><div class="pathway-copy"><p class="eyebrow">${c.term}</p><h3>${c.title}</h3><p>${c.body}</p><p class="pathway-implication">${c.implication}</p></div></article>
    <figure class="pathway-evidence">${examples[i]}<figcaption class="pathway-caption">${captions[i].split('|').map(x => `<span>${x}</span>`).join('')}</figcaption></figure></li>`).join('');
  // Keep the exported-style fixture isolated on /system/. Live portfolio markup
  // and its example content are verified separately by live-portfolio.spec.ts.
  await page.locator('main').evaluate((el, html) => { el.innerHTML = html; }, `<section class="container section"><h1>Pathway style verification</h1><ol class="pathway-list" role="list">${stages}</ol></section>`);
}

test('C-0003: shared responsive type, card padding and navigation roles match the catalog', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(path('/system/'));
  await expect(page.locator('.site-header .desktop-navigation')).toHaveCSS('column-gap', '20px');
  for (const [width, size, line] of [[1440, 54, 58.5], [1024, 42.857143, 47.142857], [390, 36, 40.5]]) {
    await page.setViewportSize({ width, height: 1000 });
    const values = await page.locator('.section-heading h2').first().evaluate(el => ({ size: parseFloat(getComputedStyle(el).fontSize), line: parseFloat(getComputedStyle(el).lineHeight) }));
    expect(values.size).toBeCloseTo(size, 2); expect(values.line).toBeCloseTo(line, 2);
  }
  await expect(page.locator('.card').first()).toHaveCSS('padding-left', '16px');
  await page.locator('main').evaluate(el => el.insertAdjacentHTML('beforeend', '<figure id="role-fixture"><figcaption>Caption role</figcaption><p class="help-text">Help role</p><p class="field-error">Error role</p></figure>'));
  for (const el of await page.locator('#role-fixture > *').all()) {
    await expect(el).toHaveCSS('font-size', '14px');
    expect(await el.evaluate(node => parseFloat(getComputedStyle(node).lineHeight))).toBeCloseTo(20, 2);
  }
});

test('C-0003: desktop container, original cards and compact evidence follow the approved geometry', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await fixture(page);
  const container = (await page.locator('main .container').boundingBox())!;
  expect(container.x).toBe(120); expect(container.width).toBe(1200);
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(245, 245, 242)');
  const stages = page.locator('.pathway-stage');
  for (let i = 0; i < 5; i++) {
    const card = stages.nth(i).locator('.pathway-card');
    expect((await card.boundingBox())!.width).toBe(552);
    await expect(card).toHaveCSS('padding-top', '32px');
    await expect(card).toHaveCSS('font-size', '16px');
    await expect(card).toContainText(cards[i].body);
    const frame = (await stages.nth(i).locator('.example-plane').boundingBox())!;
    const caption = (await stages.nth(i).locator('.pathway-caption').boundingBox())!;
    expect(caption.y - frame.y - frame.height).toBeGreaterThanOrEqual(16);
  }
  const second = stages.nth(1);
  const main = (await second.locator('.pathway-card').boundingBox())!;
  const example = (await second.locator('.pathway-evidence').boundingBox())!;
  expect(Math.abs(example.y + example.height / 2 - main.y - main.height / 2)).toBeLessThan(1);
  expect(Math.abs(example.x + example.width / 2 - 396)).toBeLessThan(1);
  expect((await second.locator('.filter-example').boundingBox())!.height).toBeLessThan(110);
  expect(example.width).toBeLessThanOrEqual(390);
  await expect(second.locator('.filter-example')).not.toContainText('Selected work');
  const confirmation = stages.nth(3).locator('.confirmation-example');
  const centers = await confirmation.locator(':scope > *').evaluateAll(nodes => nodes.map(n => { const b = n.getBoundingClientRect(); return b.x + b.width / 2; }));
  expect(Math.max(...centers) - Math.min(...centers)).toBeLessThan(5);
  const last = stages.last();
  const stageHeight = (await last.boundingBox())!.height;
  const railBottom = await last.evaluate(el => parseFloat(getComputedStyle(el, '::before').bottom));
  expect(Math.abs(railBottom - stageHeight / 2)).toBeLessThan(1);
  await page.screenshot({ path: 'test-results/C-0003-pathway-desktop.png', fullPage: true });
});

test('C-0003: pathway copy and controls reflow at narrow widths and enlarged text', async ({ page }) => {
  for (const width of [320, 390, 768, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await fixture(page);
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `width ${width}`).toBeTruthy();
    if (width < 896) await expect(page.locator('.example-plane').first()).toHaveCSS('transform', 'none');
    const caption = await page.locator('.pathway-caption').first().evaluate(el => getComputedStyle(el).position);
    expect(caption).toBe('relative');
  }
  await page.screenshot({ path: 'test-results/C-0003-pathway-enlarged.png', fullPage: true });
});

test('C-0003: pathway fixture retains semantic contrast and reduced-motion access', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await fixture(page);
  await expect(page.locator('.example-plane').first()).toHaveCSS('transform', 'none');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
});
