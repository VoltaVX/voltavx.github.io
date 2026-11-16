import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { normalizeBase, localPath } from '../../src/lib/paths';

const base = normalizeBase(process.env.BASE_PATH ?? '/');
const path = (route: string) => localPath(route, base);

for (const route of ['/', '/system/', '/404.html']) {
  test(`C-0001: ${route} has landmarks, metadata, working local resources, and no axe AA violations`, async ({ page }) => {
    const failures: string[] = [];
    page.on('pageerror', error => failures.push(error.message));
    page.on('response', response => {
      if (response.status() >= 400) failures.push(`${response.status()}: ${response.url()}`);
    });
    await page.goto(path(route));
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S/);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(results.violations).toEqual([]);
    expect(failures).toEqual([]);
  });
}

test('C-0001: keyboard skip link moves focus to main and focus stays visible', async ({ page }) => {
  await page.goto(path('/'));
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  await page.keyboard.press('Tab');
  const focus = page.locator(':focus');
  expect(await focus.evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe('none');
});

test('C-0001: all internal links resolve and canonical URL includes the repository base once', async ({ page, request }) => {
  for (const route of ['/', '/system/', '/404.html']) {
    await page.goto(path(route));
    const links = await page.locator('a[href^="/"]').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')!));
    for (const link of new Set(links)) {
      expect(link.startsWith(base)).toBeTruthy();
      expect((await request.get(link.split('#')[0])).ok(), link).toBeTruthy();
    }
    if (route !== '/404.html') {
      const origin = process.env.SITE_URL ?? 'https://example.com';
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new URL(path(route), origin).href);
    } else {
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
    }
  }
});

test('C-0001: content reflows at 320px and enlarged text without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  for (const route of ['/', '/system/', '/404.html']) {
    await page.goto(path(route));
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), route).toBeTruthy();
  }
});

test('C-0001: navigation and native disclosure work with JavaScript disabled', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4321${path('/')}`);
  await page.getByRole('link', { name: 'Design system', exact: true }).first().click();
  await expect(page).toHaveURL(new RegExp(`${base}system/`));
  const disclosure = page.locator('.disclosures details').first();
  await disclosure.locator('summary').click();
  await expect(disclosure).toHaveAttribute('open', '');
  await context.close();
});
