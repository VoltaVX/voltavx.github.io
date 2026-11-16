import { test, expect, type Locator, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFileSync } from 'node:fs';
import { normalizeBase, localPath } from '../../src/lib/paths';

const base = normalizeBase(process.env.BASE_PATH ?? '/');
const path = (route: string) => localPath(route, base);
const cards: { n: string; term: string; title: string; body: string; implication: string }[] = JSON.parse(readFileSync(new URL('../fixtures/pathway.json', import.meta.url), 'utf8'));
const projectTitles = ['SIS Asphalt', 'VX Nexus', 'World Cup Items', 'AI Misattribution', 'Sharper Image Services', 'SIS Florida', 'PantherNOW Operations', 'ABA Data Visualization System'];
const box = async (element: Locator) => {
  const result = await element.boundingBox();
  expect(result, 'Expected a rendered element').not.toBeNull();
  return result!;
};
const centerX = (rect: { x: number; width: number }) => rect.x + rect.width / 2;
const centerY = (rect: { y: number; height: number }) => rect.y + rect.height / 2;
async function ready(page: Page) {
  await page.goto(path('/'));
  await page.evaluate(() => document.fonts.ready);
}

// These tests use the actual homepage. Do not substitute fixture markup here.
test('C-0004: complete portfolio keeps original content, source images and semantic sections', async ({ page }) => {
  await ready(page);
  await expect(page.locator('h1')).toHaveCount(1);
  for (const id of ['research', 'approach', 'pathway', 'work', 'ecosystem', 'services', 'about', 'contact']) {
    await expect(page.locator(`section#${id}`)).toHaveCount(1);
    await expect(page.locator(`section#${id} h2`)).toHaveCount(1);
  }
  await expect(page.locator('.research-stage-label')).toHaveText(['Observe', 'Define', 'Measure', 'Analyze', 'Test', 'Refine']);
  await expect(page.locator('.project-card h3')).toHaveText(projectTitles);
  await expect(page.locator('.project-card').last()).toContainText('In development');
  await expect(page.locator('.project-card').last().getByRole('link', { name: /^View concept/ })).toBeVisible();
  await expect(page.locator('.pathway-card')).toHaveCount(5);
  for (const [index, card] of cards.entries()) {
    const actual = page.locator('.pathway-card').nth(index);
    await expect(actual.locator('.eyebrow')).toHaveText(card.term);
    await expect(actual.locator('h3')).toHaveText(card.title);
    await expect(actual.locator('.pathway-copy > p').nth(1)).toHaveText(card.body);
    await expect(actual.locator('.pathway-implication')).toHaveText(card.implication);
  }
  const images = page.locator('main img');
  await expect(images).toHaveCount(10);
  for (const image of await images.all()) {
    await expect(image).toHaveAttribute('src', new RegExp(`^${base}images/`));
    await expect(image).toHaveAttribute('alt', /\S/);
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBeTruthy();
  }
  await expect(page.getByRole('link', { name: /^Start a conversation/ })).toHaveAttribute('href', 'mailto:voltavxofficial@gmail.com');
  await expect(page.locator('body')).not.toContainText(/\bForma\b|example\.com/);
});

test('C-0023: Approach pathway heading and cards align to the shared 75rem rail', async ({ page }) => {
  for (const width of [390, 768, 1194, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(path('/approach/'));
    const section = page.locator('.m-section:has(.m-pathway-list)');
    const shell = await box(section.locator('.m-page-shell'));
    const intro = await box(section.locator('.m-section-intro--center'));
    const list = await box(section.locator('.m-pathway-list'));
    const first = await box(section.locator('.m-pathway-step').first());
    const railCenter = centerX(shell);
    expect(centerX(intro)).toBeCloseTo(railCenter, 1);
    expect(centerX(list)).toBeCloseTo(railCenter, 1);
    expect(centerX(first)).toBeCloseTo(railCenter, 1);
    expect(list.width).toBeCloseTo(shell.width, 1);
    expect(await section.locator('.m-section-intro--center').evaluate(el => getComputedStyle(el).textAlign)).toBe('center');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});

test('C-0004: desktop pathway preserves centered compact examples, caption space and attached final branch', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await ready(page);
  const container = await box(page.locator('#pathway'));
  expect(container.x).toBe(120);
  expect(container.width).toBe(1200);
  const stages = page.locator('.pathway-stage');
  for (const stage of await stages.all()) {
    const main = await box(stage.locator('.pathway-card'));
    expect(main.width).toBe(552);
    await expect(stage.locator('.pathway-card')).toHaveCSS('padding-top', '32px');
    const example = await box(stage.locator('.example-plane'));
    const caption = await box(stage.locator('.pathway-caption'));
    expect(caption.y - example.y - example.height, 'Caption clearance beyond projected example').toBeGreaterThanOrEqual(16);
  }
  const second = stages.nth(1);
  const secondCard = await box(second.locator('.pathway-card'));
  const evidence = await box(second.locator('.pathway-evidence'));
  expect(Math.abs(centerX(evidence) - (container.x + 276))).toBeLessThan(1);
  expect(Math.abs(centerY(evidence) - centerY(secondCard))).toBeLessThan(1);
  expect(evidence.width).toBeLessThanOrEqual(390);
  expect((await second.locator('.filter-example').boundingBox())!.height).toBeLessThan(110);
  await expect(second.locator('.filter-example')).not.toContainText('Selected work');
  const snug = await second.locator('.filter-example').evaluate(el => {
    const style = getComputedStyle(el);
    const children = Array.from(el.children).map(node => node.getBoundingClientRect());
    return { height: el.getBoundingClientRect().height, children: Math.max(...children.map(rect => rect.height)), padding: parseFloat(style.paddingTop) + parseFloat(style.paddingBottom), border: parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth) };
  });
  expect(snug.height).toBeLessThanOrEqual(snug.children + snug.padding + snug.border + 10);
  const confirmation = stages.nth(3).locator('.confirmation-example');
  const childCenters = await confirmation.locator(':scope > *').evaluateAll(nodes => nodes.map(node => { const rect = node.getBoundingClientRect(); return rect.x + rect.width / 2; }));
  expect(Math.max(...childCenters) - Math.min(...childCenters)).toBeLessThan(5);
  const final = stages.last();
  const connection = await final.evaluate(stage => {
    const card = stage.querySelector<HTMLElement>('.pathway-card')!;
    const evidence = stage.querySelector<HTMLElement>('.pathway-evidence')!;
    const plane = stage.querySelector<HTMLElement>('.example-plane')!;
    const cardRect = card.getBoundingClientRect();
    const evidenceRect = evidence.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    const branch = getComputedStyle(evidence, '::before');
    const rail = getComputedStyle(stage, '::before');
    const marker = getComputedStyle(plane, '::after');
    const planeStyle = getComputedStyle(plane);
    const origin = planeStyle.transformOrigin.split(' ').map(Number.parseFloat);
    const matrix = new DOMMatrix(planeStyle.transform === 'none' ? undefined : planeStyle.transform);
    const local = new DOMPoint(parseFloat(marker.left) + parseFloat(marker.width) / 2 - origin[0], parseFloat(marker.top) + parseFloat(marker.height) / 2 - origin[1]);
    const projected = matrix.transformPoint(local);
    return {
      cardRight: cardRect.right,
      branchStart: evidenceRect.x + parseFloat(branch.left),
      branchEnd: evidenceRect.x + parseFloat(branch.left) + parseFloat(branch.width),
      branchY: evidenceRect.y + parseFloat(branch.top),
      markerX: evidenceRect.x + plane.offsetLeft + origin[0] + projected.x / projected.w,
      markerY: evidenceRect.y + plane.offsetTop + origin[1] + projected.y / projected.w,
      railX: stageRect.x + parseFloat(rail.left),
      railEnd: stageRect.bottom - parseFloat(rail.bottom),
      railDisplay: rail.display,
      markerDisplay: marker.display,
    };
  });
  expect(connection.railDisplay).not.toBe('none');
  expect(connection.markerDisplay).not.toBe('none');
  expect(Math.abs(connection.branchStart - connection.cardRight)).toBeLessThan(2);
  expect(Math.abs(connection.branchEnd - connection.markerX)).toBeLessThan(2);
  expect(Math.abs(connection.branchY - connection.markerY)).toBeLessThan(2);
  expect(connection.railX).toBeGreaterThan(connection.branchStart);
  expect(connection.railX).toBeLessThan(connection.branchEnd);
  expect(Math.abs(connection.railEnd - connection.branchY)).toBeLessThan(2);
  await page.screenshot({ path: 'test-results/C-0004-portfolio-desktop.png', fullPage: true });
});

test('C-0004: work filters expose counts, pressed states, stable order and keyboard reset', async ({ page }) => {
  await ready(page);
  const controls = page.getByRole('group', { name: 'Filter selected work' });
  const count = page.locator('[data-work-count]');
  const reset = page.getByRole('button', { name: 'Show all work', exact: true });
  await expect(controls).toBeVisible();
  await expect(count).toHaveText('8 of 8 projects shown · All work');
  await expect(reset).toBeHidden();
  for (const [label, expected] of [['Client systems', ['SIS Asphalt', 'Sharper Image Services', 'SIS Florida']], ['Commerce', ['VX Nexus', 'World Cup Items']], ['Research', ['AI Misattribution', 'PantherNOW Operations', 'ABA Data Visualization System']]] as const) {
    const button = controls.getByRole('button', { name: label, exact: true });
    await button.focus();
    await page.keyboard.press('Enter');
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await expect(controls.locator('[aria-pressed="true"]')).toHaveCount(1);
    await expect(page.locator('.project-card:visible h3')).toHaveText([...expected]);
    await expect(count).toHaveText(`${expected.length} of 8 projects shown · ${label}`);
    await expect(count).toHaveAttribute('aria-live', 'polite');
    await expect(reset).toBeVisible();
  }
  await reset.focus();
  await page.keyboard.press('Space');
  await expect(page.locator('.project-card:visible h3')).toHaveText(projectTitles);
  await expect(controls.getByRole('button', { name: 'All work', exact: true })).toBeFocused();
  await expect(count).toHaveText('8 of 8 projects shown · All work');
  await expect(reset).toBeHidden();
});

test('C-0004: production sections reflow at five widths and with enlarged text', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await ready(page);
    const container = await box(page.locator('#work'));
    expect(container.width).toBeLessThanOrEqual(1200);
    expect(container.x).toBeGreaterThanOrEqual(width < 768 ? 20 : width < 1280 ? 24 : 40);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px default text`).toBeTruthy();
    const projects = page.locator('.project-card');
    if (width < 768) {
      const first = await box(projects.nth(0));
      const second = await box(projects.nth(1));
      expect(first.x).toBeCloseTo(second.x, 1);
      expect(second.y).toBeGreaterThanOrEqual(first.y + first.height);
    }
    if (width < 896) {
      for (const stage of await page.locator('.pathway-stage').all()) {
        const main = await box(stage.locator('.pathway-card'));
        const figure = await box(stage.locator('.pathway-evidence'));
        expect(figure.y).toBeGreaterThanOrEqual(main.y + main.height + 23);
        await expect(stage.locator('.example-plane')).toHaveCSS('transform', 'none');
        await expect(stage.locator('.pathway-caption')).toHaveCSS('position', 'relative');
        const frame = await box(stage.locator('.example-plane'));
        const caption = await box(stage.locator('.pathway-caption'));
        expect(caption.y - frame.y - frame.height).toBeGreaterThanOrEqual(16);
      }
    }
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px enlarged text`).toBeTruthy();
    await expect(page.locator('.pathway-card')).toHaveCount(5);
    await expect(page.locator('.project-card:visible')).toHaveCount(8);
  }
  await page.screenshot({ path: 'test-results/C-0004-portfolio-enlarged.png', fullPage: true });
});

test('C-0004: native mobile menu works with keyboard and remains in document flow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await ready(page);
  const menu = page.locator('.mobile-menu');
  const summary = menu.locator('summary');
  await expect(summary).toBeVisible();
  await expect(page.locator('.desktop-navigation')).toBeHidden();
  await expect(page.locator('.site-header > .brand')).toBeVisible();
  const closedHero = await box(page.locator('.portfolio-hero'));
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('open', '');
  await expect(page.locator('.site-header > .brand')).toBeHidden();
  const expandedHero = await box(page.locator('.portfolio-hero'));
  expect(expandedHero.y).toBeGreaterThan(closedHero.y);
  await page.keyboard.press('Tab');
  const work = menu.getByRole('link', { name: 'Work', exact: true });
  await expect(work).toBeFocused();
  expect(await work.evaluate(node => getComputedStyle(node).outlineStyle)).not.toBe('none');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(new RegExp(`${base}#work$`));
  await expect(page.locator('#work')).toBeInViewport();
  await summary.focus();
  await page.keyboard.press('Space');
  await expect(menu).not.toHaveAttribute('open', '');
});

test('C-0004: no-script visitors retain all projects, native mobile links and email contact', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const page = await context.newPage();
    await page.goto(new URL(path('/'), baseURL).href);
    await expect(page.locator('.project-card:visible h3')).toHaveText(projectTitles);
    await expect(page.locator('[data-work-filters]')).toBeHidden();
    await expect(page.locator('[data-work-status]')).toBeHidden();
    const menu = page.locator('.mobile-menu');
    await menu.locator('summary').click();
    await expect(menu).toHaveAttribute('open', '');
    await menu.getByRole('link', { name: 'About', exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${base}#about$`));
    await expect(page.locator('#about')).toBeInViewport();
    await expect(page.getByRole('link', { name: /^Start a conversation/ })).toHaveAttribute('href', 'mailto:voltavxofficial@gmail.com');
  } finally { await context.close(); }
});

test('C-0004: reduced motion keeps production content visible and filtered states pass axe', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await ready(page);
  await expect(page.locator('.example-plane').first()).toHaveCSS('transform', 'none');
  await page.getByRole('group', { name: 'Filter selected work' }).getByRole('button', { name: 'Research', exact: true }).click();
  await expect(page.locator('.project-card:visible')).toHaveCount(3);
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
  await expect(page.locator('#pathway')).toBeVisible();
});
