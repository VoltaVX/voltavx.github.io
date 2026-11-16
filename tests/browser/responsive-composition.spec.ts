import { test, expect } from '@playwright/test';
import { normalizeBase, localPath } from '../../src/lib/paths';
const home = localPath('/', normalizeBase(process.env.BASE_PATH ?? '/'));

// Regression from the supplied ~940px screenshot: preserve composition before
// stacking, and never inherit figure's 40px UA horizontal margins.
test('C-0005: tablet editorial sections retain columns and aligned media', async ({ page }) => {
  for (const width of [940, 1024]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(home);
    for (const selector of ['.portfolio-hero', '.research-spotlight', '.behavior-statement', '.ecosystem-grid', '.about-grid']) {
      const columns = await page.locator(selector).evaluate(el => getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean));
      expect(columns, `${selector} at ${width}`).toHaveLength(2);
    }
    const hero = page.locator('.portfolio-hero');
    const portrait = hero.locator('.hero-portrait');
    const image = portrait.locator('img');
    const copy = (await hero.locator('.hero-copy').boundingBox())!;
    const frame = (await portrait.boundingBox())!;
    const picture = (await image.boundingBox())!;
    expect(frame.x).toBeGreaterThan(copy.x + copy.width);
    expect(Math.abs(copy.y + copy.height / 2 - frame.y - frame.height / 2)).toBeLessThan(2);
    expect(Math.abs(frame.x - picture.x)).toBeLessThan(1);
    expect(Math.abs(frame.width - picture.width)).toBeLessThan(1);
    expect(frame.y).toBeCloseTo(copy.y, 1);
    expect(frame.height).toBeCloseTo(copy.height, 1);
    expect(picture.height).toBeCloseTo(copy.height, 1);
    for (const figure of await page.locator('main figure').all()) {
      await expect(figure).toHaveCSS('margin-left', '0px');
      await expect(figure).toHaveCSS('margin-right', '0px');
    }
    const heading = await hero.locator('h1').evaluate(el => parseFloat(getComputedStyle(el).fontSize));
    expect(heading).toBeGreaterThanOrEqual(36);
    expect(heading).toBeLessThan(54);
    const body = await hero.locator('.lead').evaluate(el => parseFloat(getComputedStyle(el).fontSize));
    expect(body).toBeGreaterThanOrEqual(16);
    expect(body).toBeLessThanOrEqual(18);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});

test('C-0005: phone layouts stack at readable size without scaling controls', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(home);
  const copy = (await page.locator('.hero-copy').boundingBox())!;
  const portrait = (await page.locator('.hero-portrait').boundingBox())!;
  expect(portrait.y).toBeGreaterThanOrEqual(copy.y + copy.height + 19);
  expect(portrait.x).toBeCloseTo(copy.x, 1);
  const sidebar = (await page.locator('.discipline-panel').boundingBox())!;
  expect(sidebar.x).toBeGreaterThan(copy.x + copy.width);
  expect(portrait.width).toBeCloseTo(sidebar.x + sidebar.width - copy.x, 1);
  for (const link of await page.locator('.hero-copy .actions > a').all()) {
    expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(48);
  }
  await page.addStyleTag({ content: 'html { font-size: 200%; }' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
});

// Latest feature-card and type requirements. This suite needs a permitted browser.
test('C-0009: content-sized behavior feature contains a separate stage card', async ({ page }) => {
  for (const width of [390, 726, 1440]) {
    await page.setViewportSize({ width, height: 947 });
    await page.goto(home);
    const feature = page.locator('#approach');
    const card = feature.locator('.behavior-process.card');
    const bounds = (await feature.boundingBox())!;
    await expect(feature).toHaveCSS('min-height', '0px');
    const contentHeight = (await feature.locator('.behavior-statement').boundingBox())!.height;
    const padding = await feature.evaluate(el => { const s = getComputedStyle(el); return parseFloat(s.paddingTop) + parseFloat(s.paddingBottom) + parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth); });
    expect(bounds.height).toBeCloseTo(contentHeight + padding, 1);
    expect(bounds.x).toBeCloseTo(0, 1);
    expect(bounds.width).toBeCloseTo(await page.evaluate(() => document.documentElement.clientWidth), 1);
    await expect(card).toBeVisible();
    await expect(card).toHaveCSS('border-radius', '24px');
    await expect(card.locator('.research-stage-label')).toHaveCount(6);
    expect(await feature.evaluate(el => getComputedStyle(el).backgroundImage)).not.toBe('none');
    await expect(feature.locator('h2')).toContainText('Care gives them purpose.');
    await expect(feature.locator('h2 em > span')).toHaveCount(2);
    expect(await feature.evaluate(el => el.scrollHeight <= el.clientHeight + 1)).toBeTruthy();
    if (width === 726) await expect(feature.locator('h2')).toHaveCSS('font-size', '36px');
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});

// New spacing acceptance; browser execution remains a separate release check.
test('C-0007: shared spacing scales smoothly and contact has no doubled top gap', async ({ page }) => {
  let previousMajor = 0;
  for (const width of [390, 726, 940, 1440]) {
    await page.setViewportSize({ width, height: 947 });
    await page.goto(home);
    const major = await page.locator('#work').evaluate(el => parseFloat(getComputedStyle(el).marginTop));
    const related = await page.locator('#pathway').evaluate(el => parseFloat(getComputedStyle(el).marginTop));
    expect(major).toBeGreaterThanOrEqual(64);
    expect(major).toBeLessThanOrEqual(120);
    expect(major).toBeGreaterThanOrEqual(previousMajor);
    expect(related).toBeCloseTo(major, 1);
    previousMajor = major;
    await expect(page.locator('.contact-panel')).toHaveCSS('padding-top', '4px');
    const feature = page.locator('#approach');
    const bottom = await feature.evaluate(el => parseFloat(getComputedStyle(el).paddingBottom));
    expect(bottom).toBeGreaterThanOrEqual(24);
    expect(bottom).toBeLessThanOrEqual(64);
    const top = await feature.evaluate(el => parseFloat(getComputedStyle(el).paddingTop));
    expect(bottom).toBeCloseTo(top, 1);
    const inside = (await feature.locator('.behavior-statement').boundingBox())!;
    const sibling = (await page.locator('#research').boundingBox())!;
    if (width < 1100) {
      expect(inside.x).toBeCloseTo(sibling.x, 1);
      expect(inside.width).toBeCloseTo(sibling.width, 1);
    } else {
      expect(inside.x).toBeCloseTo(40, 1);
      expect(inside.width).toBeCloseTo(width - 80, 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});


test('C-0008: mobile reference spacing, row labels, arrows and centered filters', async ({ page }) => {
  for (const width of [320, 390, 660, 726]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(home);
    await expect(page.locator('.portfolio-introduction')).toHaveCSS('padding-top', '48px');
    const labels = await page.locator('.discipline-strip > li').all();
    const labelBoxes = await Promise.all(labels.map(label => label.boundingBox()));
    for (let i = 0; i < labelBoxes.length; i++) {
      expect(labelBoxes[i]!.x).toBeCloseTo(labelBoxes[0]!.x, 1);
      if (i > 0) expect(labelBoxes[i]!.y).toBeGreaterThan(labelBoxes[i - 1]!.y + labelBoxes[i - 1]!.height);
    }
    await expect(page.locator('.discipline-strip')).toHaveCSS('flex-direction', 'column');
    const sidebar = (await page.locator('.discipline-panel').boundingBox())!;
    const copy = (await page.locator('.hero-copy').boundingBox())!;
    expect(sidebar.x - copy.x - copy.width).toBeCloseTo(12, 1);
    await expect(page.locator('.discipline-panel')).toHaveCSS('border-radius', '24px');
    await expect(page.locator('.work-filter-status')).toHaveCSS('justify-content', 'center');
    await expect(page.locator('[data-work-count]')).toHaveCSS('text-align', 'center');
    const researchCopy = (await page.locator('.research-copy').boundingBox())!;
    const researchCard = (await page.locator('.research-diagram').boundingBox())!;
    expect(researchCard.y - researchCopy.y - researchCopy.height).toBeCloseTo(48, 1);
    const intro = (await page.locator('.pathway-intro').boundingBox())!;
    const firstCard = (await page.locator('.pathway-card').first().boundingBox())!;
    expect(firstCard.y - intro.y - intro.height).toBeGreaterThanOrEqual(63);
    for (const stage of await page.locator('.pathway-stage').all()) {
      const card = (await stage.locator('.pathway-card').boundingBox())!;
      const evidence = stage.locator('.pathway-evidence');
      const example = (await evidence.boundingBox())!;
      expect(example.y - card.y - card.height).toBeCloseTo(40, 1);
      expect(await evidence.evaluate(el => getComputedStyle(el, '::before').display)).not.toBe('none');
      expect(await evidence.evaluate(el => getComputedStyle(el, '::after').content)).not.toBe('none');
    }
    const filters = page.locator('.work-filters');
    await expect(filters).toBeVisible();
    const filterBox = (await filters.boundingBox())!;
    expect(filterBox.x + filterBox.width / 2).toBeCloseTo(width / 2, 1);
    await expect(filters).toHaveCSS('justify-content', 'center');
    await expect(page.locator('#services')).toHaveCSS('margin-top', '64px');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});

test('C-0009: Contact is a centered content-sized feature with shared material', async ({ page }) => {
  for (const width of [390, 940, 1440]) {
    await page.setViewportSize({ width, height: 947 });
    await page.goto(home);
    const contact = page.locator('#contact');
    const frame = (await contact.boundingBox())!;
    const panel = (await contact.locator('.contact-panel').boundingBox())!;
    await expect(contact).toHaveCSS('min-height', '0px');
    const insets = await contact.evaluate(el => { const s = getComputedStyle(el); return parseFloat(s.paddingTop) + parseFloat(s.paddingBottom) + parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth); });
    expect(frame.height).toBeCloseTo(panel.height + insets, 1);
    expect(frame.x).toBeCloseTo(0, 1);
    expect(frame.width).toBeCloseTo(await page.evaluate(() => document.documentElement.clientWidth), 1);
    expect(panel.y + panel.height / 2).toBeCloseTo(frame.y + frame.height / 2, 1);
    for (const child of await contact.locator('.contact-panel > *').all()) {
      const box = (await child.boundingBox())!;
      expect(box.x + box.width / 2).toBeCloseTo(frame.x + frame.width / 2, 1);
    }
    await expect(contact.locator('.contact-panel')).toHaveCSS('text-align', 'center');
    const contactGradient = await contact.evaluate(el => getComputedStyle(el).backgroundImage);
    expect(contactGradient).toBe(await page.locator('#approach').evaluate(el => getComputedStyle(el).backgroundImage));
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    expect(await contact.evaluate(el => el.scrollHeight <= el.clientHeight + 1)).toBeTruthy();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});


test('C-0009: only the opening hero has a three-quarter viewport height target', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(home);
    await expect(page.locator('.portfolio-introduction')).toHaveCSS('min-height', '750px');
    for (const selector of ['#approach', '#contact']) await expect(page.locator(selector)).toHaveCSS('min-height', '0px');
    const hero = page.locator('.portfolio-introduction');
    expect(await hero.evaluate(el => el.scrollHeight <= el.clientHeight + 1)).toBeTruthy();
    if (width < 768) {
      await page.locator('html').evaluate(el => el.setAttribute('data-glass', 'off'));
      await expect(page.locator('.discipline-panel')).toHaveCSS('backdrop-filter', 'none');
    }
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    if (width <= 390) {
      const copy = (await page.locator('.hero-copy').boundingBox())!;
      const list = (await page.locator('.discipline-panel').boundingBox())!;
      expect(list.y).toBeGreaterThanOrEqual(copy.y + copy.height);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});


test('C-0010: mobile process, image gutters and face-safe hero framing', async ({ page }) => {
  for (const width of [320, 390, 660, 726]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(home);
    await expect(page.locator('.research-stages')).toHaveCSS('text-align', 'center');
    await expect(page.locator('.research-stages')).toHaveCSS('list-style-position', 'inside');
    await expect(page.locator('.behavior-process-note')).toHaveCSS('text-align', 'center');
    const about = (await page.locator('#about').boundingBox())!;
    const portrait = (await page.locator('#about > img').boundingBox())!;
    expect(portrait.x).toBeCloseTo(about.x, 1);
    expect(portrait.width).toBeCloseTo(about.width, 1);
    expect(portrait.x).toBeCloseTo(width - portrait.x - portrait.width, 1);
    const visible = await page.locator('.hero-portrait > img').evaluate((node: HTMLImageElement) => {
      const b = node.getBoundingClientRect();
      const scale = Math.max(b.width / node.naturalWidth, b.height / node.naturalHeight);
      const renderedHeight = node.naturalHeight * scale;
      const crop = (renderedHeight - b.height) * .12;
      // Source reference face region includes hair/top through chin, y110–400 of992.
      const caption = node.parentElement!.querySelector('.portrait-caption')!.getBoundingClientRect();
      return { top: 110 * scale - crop, bottom: 400 * scale - crop, height: b.height, captionTop: caption.y - b.y };
    });
    expect(visible.top).toBeGreaterThanOrEqual(0);
    expect(visible.bottom).toBeLessThanOrEqual(visible.height);
    expect(visible.bottom).toBeLessThanOrEqual(visible.captionTop);
    await expect(page.locator('.hero-portrait > img')).toHaveCSS('object-position', '70% 12%');
    const boundaries = await page.locator('main > .section').evaluateAll(nodes => nodes.map(el => parseFloat(getComputedStyle(el).marginTop)));
    for (const gap of boundaries) expect(gap).toBeCloseTo(64, 1);
  }
});

test('C-0010: each pathway callout belongs to its example and keeps clearance', async ({ page }) => {
  for (const width of [390, 940, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(home);
    const stages = page.locator('.pathway-stage');
    for (let i = 0; i < await stages.count(); i++) {
      const stage = stages.nth(i);
      const caption = stage.locator('figure > figcaption.pathway-caption');
      await expect(caption.locator('.pathway-caption-label')).toHaveText(`Example 0${i + 1}`);
      await expect(caption).toHaveCSS('border-radius', '16px');
      const c = (await caption.boundingBox())!;
      const frame = (await stage.locator('.example-plane').boundingBox())!;
      expect(c.y - frame.y - frame.height).toBeGreaterThanOrEqual(16);
      const row = (await stage.boundingBox())!;
      if (i > 0) {
        const previous = (await stages.nth(i - 1).boundingBox())!;
        expect(row.y - previous.y - previous.height).toBeGreaterThanOrEqual(64);
        expect(row.y - previous.y - previous.height).toBeLessThanOrEqual(96.1);
      }
      if (width < 896) expect(c.y - frame.y - frame.height).toBeCloseTo(16, 1);
      expect(c.y + c.height).toBeLessThanOrEqual(row.y + row.height + 1);
      if (width >= 896) {
        const main = (await stage.locator('.pathway-card').boundingBox())!;
        expect(Math.abs(frame.y + frame.height / 2 - main.y - main.height / 2)).toBeLessThan(5);
      }
    }
    await page.locator('html').evaluate(el => el.setAttribute('data-glass', 'off'));
    await expect(stages.first().locator('.pathway-caption')).toHaveCSS('backdrop-filter', 'none');
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});


test('C-0013: compact mobile header retains an accessible icon disclosure and Contact', async ({ page }) => {
  for (const width of [320, 390, 768, 1024]) {
    await page.setViewportSize({ width, height: 947 });
    await page.goto(home);
    const header = page.locator('.site-header');
    const menu = header.locator('.mobile-menu');
    const summary = menu.locator('summary');
    await expect(summary).toHaveAccessibleName('Menu');
    await expect(summary.locator('.menu-glyph')).toBeVisible();
    await expect(header.locator('> .header-contact')).toBeHidden();
    expect((await summary.boundingBox())!.height).toBeGreaterThanOrEqual(48);
    await expect(header).toHaveCSS('padding-top', '4px');
    await expect(header).toHaveCSS('padding-bottom', '4px');
    expect((await header.boundingBox())!.height).toBeCloseTo(58, 1);
    const before = (await summary.boundingBox())!;
    const brand = (await header.locator('.brand').boundingBox())!;
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(menu).toHaveAttribute('open', '');
    await expect(menu.getByRole('link', { name: 'Contact', exact: true })).toBeVisible();
    const after = (await summary.boundingBox())!;
    expect(after.y).toBeCloseTo(before.y, 1);
    expect((await header.locator('.brand').boundingBox())!.y).toBeCloseTo(brand.y, 1);
    const firstLink = (await menu.getByRole('link', { name: 'Work', exact: true }).boundingBox())!;
    expect(firstLink.y).toBeGreaterThanOrEqual(after.y + after.height);
    await summary.focus();
    await page.keyboard.press('Space');
    await expect(menu).not.toHaveAttribute('open', '');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});

test('C-0013: discipline panel has no eye and retains three unchanged labels', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(home);
  const panel = page.locator('.discipline-panel');
  await expect(panel.locator('li')).toHaveText(['Behavior research', 'Digital experiences', 'Data & context']);
  await expect(panel.locator('.discipline-emblem, svg')).toHaveCount(0);
  await expect(panel.locator(':scope > *')).toHaveCount(1);
  await expect(panel.locator('.discipline-strip')).toHaveCSS('backdrop-filter', 'none');
  for (const li of await panel.locator('li').all()) expect(await li.evaluate(el => getComputedStyle(el, '::before').content)).not.toBe('none');
  await page.locator('html').evaluate(el => el.setAttribute('data-glass', 'off'));
  await expect(panel).toHaveCSS('backdrop-filter', 'none');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(panel).toHaveCSS('display', 'contents');
  await expect(page.locator('.site-header > .header-contact')).toBeVisible();
});
