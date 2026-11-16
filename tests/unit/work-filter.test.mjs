import test from 'node:test';
import assert from 'node:assert/strict';
import { selectWorkItems } from '../../src/lib/work-filter.ts';

const projects = Object.freeze([
  { title: 'SIS Asphalt', category: 'client' },
  { title: 'VX Nexus', category: 'commerce' },
  { title: 'World Cup Items', category: 'commerce' },
  { title: 'AI Misattribution', category: 'research' },
  { title: 'Sharper Image Services', category: 'client' },
  { title: 'SIS Florida', category: 'client' },
  { title: 'PantherNOW Operations', category: 'research' },
  { title: 'ABA Data Visualization System', category: 'research' },
].map(Object.freeze));

const titles = (items) => items.map((item) => item.title);

test('work filters keep source order and include each project in its declared category', () => {
  assert.deepEqual(titles(selectWorkItems(projects, 'client')), ['SIS Asphalt', 'Sharper Image Services', 'SIS Florida']);
  assert.deepEqual(titles(selectWorkItems(projects, 'commerce')), ['VX Nexus', 'World Cup Items']);
  assert.deepEqual(titles(selectWorkItems(projects, 'research')), ['AI Misattribution', 'PantherNOW Operations', 'ABA Data Visualization System']);
  assert.equal(selectWorkItems(projects, 'all').length, 8);
  assert.equal(projects.length, 8);
});

test('unknown filter values restore all work, including object prototype keys', () => {
  for (const filter of ['', 'unknown', 'Client systems', '__proto__', 'constructor', 'toString']) {
    assert.deepEqual(selectWorkItems(projects, filter), projects);
  }
});

test('a valid category with no items produces an empty result rather than unrelated work', () => {
  assert.deepEqual(selectWorkItems([{ title: 'A', category: 'commerce' }], 'research'), []);
  assert.deepEqual(selectWorkItems([], 'all'), []);
});
