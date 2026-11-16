import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
const pages = JSON.parse(readFileSync(new URL('../../src/content/migrated-pages.json', import.meta.url), 'utf8')) as {slug: string}[];
const base = process.env.BASE_PATH ?? '/';
test('C-0015: migrated routes keep landmarks, local navigation and readable reflow', async ({page}) => {
 for (const width of [390, 1440]) {
  await page.setViewportSize({width,height:900});
  for (const item of pages) {
   await page.goto(`${base}${item.slug}/`);
   await expect(page.getByRole('main').getByRole('heading',{level:1})).toHaveCount(1);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
   expect(await page.locator('main img').evaluateAll(images=>images.every(image=>(image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth>0))).toBeTruthy();
  }
 }
});
test('C-0015: work filter and contact preparation retain native actions', async ({page}) => {
 await page.goto(`${base}work/`);
 await page.getByRole('button',{name:'Commerce & Brand Systems',exact:true}).click();
 await expect(page.locator('.m-filter-count')).toContainText('2 of 8');
 await page.goto(`${base}contact/`);
 await page.getByLabel('Your name',{exact:true}).fill('Preview Tester');
 await page.getByLabel('Your email',{exact:true}).fill('preview@example.org');
 await page.getByLabel('A little context',{exact:true}).fill('A useful preview message with spaces.');
 await expect(page.locator('[data-action="mailto"]')).toHaveAttribute('href',/body=A%20useful%20preview/);
 await expect(page.locator('[data-action="gmail"]')).toHaveAttribute('href',/^https:\/\/mail.google.com\/mail\//);
});

test('C-0016: research cards use card typography and shared diagrams', async ({page}) => {
 for (const width of [390,1440]) {
  await page.setViewportSize({width,height:900});
  await page.goto(`${base}research/`);
  const title=page.locator('.m-research-index-card h2');
  const size=await title.evaluate(el=>parseFloat(getComputedStyle(el).fontSize));
  expect(size).toBeGreaterThanOrEqual(22); expect(size).toBeLessThanOrEqual(26);
  await expect(page.locator('.research-condition')).toHaveCount(3);
  await expect(page.locator('.m-research-index-card')).toHaveCSS('row-gap',width<896?'32px':'48px');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
 }
});
