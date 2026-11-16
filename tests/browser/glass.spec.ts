import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { normalizeBase, localPath } from '../../src/lib/paths';

const path = (route: string) => localPath(route, normalizeBase(process.env.BASE_PATH ?? '/'));

test('C-0002: navigation has glass, content stays opaque, and targets remain comfortable', async ({ page }) => {
  await page.goto(path('/'));
  const header = page.locator('.site-header');
  expect(await header.evaluate(el => getComputedStyle(el).backdropFilter)).not.toBe('none');
  expect(await page.locator('.card').first().evaluate(el => getComputedStyle(el).backdropFilter)).toBe('none');
  for (const link of await page.locator('.site-header a:visible, .site-header summary:visible, .action-link:visible').all()) {
    const box = await link.boundingBox();
    expect(box!.height + 0.01).toBeGreaterThanOrEqual(44);
    expect(box!.width + 0.01).toBeGreaterThanOrEqual(44);
  }
});

test('C-0002: explicit solid mode disables glass with readable opaque surfaces', async ({ page }) => {
  await page.goto(path('/system/'));
  await page.locator('html').evaluate(el => el.setAttribute('data-glass', 'off'));
  expect(await page.locator('.site-header').evaluate(el => getComputedStyle(el).backdropFilter)).toBe('none');
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(results.violations).toEqual([]);
});

test('C-0002: high contrast and forced colors remove glass', async ({ page }) => {
  await page.emulateMedia({ contrast: 'more', reducedMotion: 'reduce' });
  await page.goto(path('/'));
  expect(await page.locator('.site-header').evaluate(el => getComputedStyle(el).backdropFilter)).toBe('none');
  const durations = await page.locator('.action-link').first().evaluate(el => getComputedStyle(el).transitionDuration);
  expect(durations.split(',').every(value => parseFloat(value) === 0)).toBeTruthy();
  await page.emulateMedia({ forcedColors: 'active', contrast: 'no-preference', reducedMotion: 'no-preference' });
  expect(await page.evaluate(() => matchMedia('(prefers-contrast: more)').matches)).toBeFalsy();
  expect(await page.evaluate(() => matchMedia('(forced-colors: active)').matches)).toBeTruthy();
  expect(await page.locator('.site-header').evaluate(el => getComputedStyle(el).backdropFilter)).toBe('none');
  await page.keyboard.press('Tab');
  expect(await page.locator(':focus').evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe('none');
});

test('C-0002: reduced transparency removes blur when the browser supports the preference', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'CDP preference emulation is available in Chromium only.');
  const session = await page.context().newCDPSession(page);
  await session.send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-transparency', value: 'reduce' }] });
  await page.goto(path('/'));
  expect(await page.evaluate(() => matchMedia('(prefers-reduced-transparency: reduce)').matches)).toBeTruthy();
  expect(await page.locator('.site-header').evaluate(el => getComputedStyle(el).backdropFilter)).toBe('none');
});

test('C-0002: layouts and enlarged text spacing retain readable controls', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/system/', '/404.html']) {
      await page.goto(path(route));
      await page.addStyleTag({ content: '* { line-height: 1.5; letter-spacing: 0.12em; word-spacing: 0.16em; } p { margin-block-end: 2em; }' });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route} at ${width}`).toBeTruthy();
      for (const link of await page.locator('.site-header a:visible, .site-header summary:visible, .action-link:visible').all()) {
        expect(await link.evaluate(el => el.scrollWidth <= el.clientWidth + 1)).toBeTruthy();
      }
    }
  }
});

test('C-0003: approved heading roles and spacing replace the old scoped values', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(path('/'));
  await expect(page.locator('.hero-copy h1')).toHaveCSS('margin-top', '12px');
  await expect(page.locator('.hero-copy .lead')).toHaveCSS('margin-top', '16px');
  const heading = await page.locator('.section-heading h2').first().evaluate(el => getComputedStyle(el).fontSize);
  await expect(page.locator('.contact-panel h2')).toHaveCSS('font-size', heading);
  const weight = await page.locator('.hero-copy h1').evaluate(el => getComputedStyle(el).fontWeight);
  await expect(page.locator('.hero-copy em')).toHaveCSS('font-weight', weight);
  await page.goto(path('/system/'));
  await expect(page.locator('.swatch code').first()).toHaveCSS('font-size', '14px');
  const cardHeading = await page.locator('.card h3').first().evaluate(el => getComputedStyle(el).fontSize);
  await expect(page.locator('.disclosures h3')).toHaveCSS('font-size', cardHeading);
});

test('C-0002: shared forms, media, tables, and dialog styles reflow without clipping', async ({ page }) => {
  await page.goto(path('/system/'));
  // Temporary semantic fixture exercises exported styles without adding a product feature.
  await page.locator('main').evaluate(el => el.insertAdjacentHTML('beforeend', `
    <section class="container section stack" id="style-fixture">
      <form class="form-grid card"><div class="field"><label for="sample">Contact email</label><input id="sample" type="email" value="user@example.com"/><p class="help-text">Use a valid email address.</p></div><button type="button" class="button">Save my email preferences</button></form>
      <figure class="media-frame"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%23dcebe9'/%3E%3C/svg%3E" width="800" height="450" alt="Sample landscape"/><figcaption>Image caption</figcaption></figure>
      <div class="table-scroll" tabindex="0" role="region" aria-label="Example data"><table><caption>Example data</caption><thead><tr><th scope="col">Name</th><th scope="col">Status</th></tr></thead><tbody><tr><th scope="row">Sample</th><td>Ready</td></tr></tbody></table></div>
      <dialog class="dialog"><h2>Example dialog</h2><p>Read this content.</p><form method="dialog"><button class="button">Close</button></form></dialog>
    </section>`));
  await page.setViewportSize({ width: 320, height: 800 });
  await page.addStyleTag({ content: 'html { font-size: 200%; }' });
  await page.locator('#style-fixture img').evaluate((el: HTMLImageElement) => el.decode());
  await page.evaluate(() => document.fonts.ready);
  const geometry = await page.evaluate(() => ({
    width: innerWidth,
    scroll: document.documentElement.scrollWidth,
    outside: Array.from(document.querySelectorAll('#style-fixture *')).filter(el => el.getBoundingClientRect().right > innerWidth + 1).map(el => ({ tag: el.tagName, class: el.className, right: el.getBoundingClientRect().right }))
  }));
  expect(geometry.scroll <= geometry.width + 1, JSON.stringify(geometry)).toBeTruthy();
  expect(await page.locator('#style-fixture .button').first().evaluate(el => el.scrollWidth <= el.clientWidth + 1)).toBeTruthy();
  await page.locator('dialog').evaluate((el: HTMLDialogElement) => el.showModal());
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
});
