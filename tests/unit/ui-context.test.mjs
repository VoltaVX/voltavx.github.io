import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { auditUI } from '../../tools/check-ui-contract.mjs';

test('C-0003: current UI authority and every registered component are reachable', async () => {
  assert.deepEqual(await auditUI(new URL('../../', import.meta.url)), []);
});

test('C-0003: missing component specification and unindexed specification are reported', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'ui-authority-'));
  try {
    await mkdir(join(dir, 'docs/ui/components'), { recursive: true });
    await writeFile(join(dir, 'docs/ui/manifest.json'), JSON.stringify({ version: 1, authority: 'design.md', required: ['foundations'], components: [{ id: 'foundations', spec: 'components/missing.md', css: 'src/styles/tokens.css', selectors: [] }] }));
    await writeFile(join(dir, 'docs/ui/components/orphan.md'), '# Unindexed requirement');
    const errors = await auditUI(dir);
    assert.ok(errors.some(e => e.includes('components/missing.md')));
    assert.ok(errors.some(e => e.includes('orphan.md')));
  } finally { await rm(dir, { recursive: true, force: true }); }
});

test('C-0003: a malformed manifest produces an actionable diagnostic', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'ui-authority-'));
  try {
    await mkdir(join(dir, 'docs/ui'), { recursive: true });
    await writeFile(join(dir, 'docs/ui/manifest.json'), '{ invalid');
    assert.ok((await auditUI(dir)).some(e => e.includes('manifest.json')));
  } finally { await rm(dir, { recursive: true, force: true }); }
});
