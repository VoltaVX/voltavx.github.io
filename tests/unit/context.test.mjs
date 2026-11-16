import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { test } from 'node:test';

const root = new URL('../../', import.meta.url);

test('C-0001: current state references real ADRs, workflows, and an active record when applicable', async () => {
  const state = JSON.parse(await readFile(new URL('.ai/state.json', root), 'utf8'));
  assert.equal(state.schema, 1);
  assert.equal(typeof state.current_goal, 'string');
  assert.ok(state.current_goal.length > 0);
  assert.ok(Number.isInteger(state.architecture_version));
  assert.ok(state.architecture_version >= 1);
  assert.ok(['implementing', 'validating', 'complete'].includes(state.implementation_state));
  assert.ok(Array.isArray(state.open_changes));
  if (state.active_change !== null) {
    assert.match(state.active_change, /^C-\d{4}$/);
    await access(new URL(`knowzcode/workgroups/${state.active_change}.md`, root));
  }
  if (state.implementation_state === 'complete') {
    assert.equal(state.active_change, null);
    assert.equal(state.open_changes.length, 0);
    assert.equal(state.open_work.length, 0);
  }
  const adrs = await readdir(new URL('docs/adr/', root));
  for (const id of state.related_adrs) assert.ok(adrs.some(file => file.startsWith(`${id}-`)));
  const index = await readFile(new URL('.ai/workflows/README.md', root), 'utf8');
  for (const match of index.matchAll(/\]\(([^)]+\.md)\)/g)) {
    await access(new URL(`.ai/workflows/${match[1]}`, root));
  }
});

test('C-0001: agent documentation cannot become an accidental public page', async () => {
  const pages = await readdir(new URL('src/pages/', root), { recursive: true });
  assert.ok(!pages.some(file => /(^|\/)AGENTS\.md$/.test(file)));
});
