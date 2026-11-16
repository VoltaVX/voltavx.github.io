import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
test('C-0015: all original routes and source copy are migrated without scripts', async () => {
 const pages=JSON.parse(await readFile(new URL('../../src/content/migrated-pages.json',import.meta.url)));
 const inventory=JSON.parse(await readFile(new URL('../../docs/migration-inventory.json',import.meta.url)));
 assert.equal(pages.length,17);
 assert.deepEqual(pages.map(p=>p.path).sort(),inventory.map(p=>p.path).sort());
 for(const p of pages){
  assert.equal((p.html.match(/<h1[ >]/g)||[]).length,1,p.path);
  assert.ok(!/<script|\son\w+=|javascript:/i.test(p.html),p.path);
  assert.ok(p.description.length>0);
  for(const match of p.html.matchAll(/href="(\/[^"]*)"/g)) {
   const target=match[1].split(/[?#]/)[0];
   assert.ok(target==='/' || pages.some(page=>page.path===target), `${p.path}: missing local route ${target}`);
  }
  assert.equal(p.sourceTextHash,inventory.find(i=>i.path===p.path).sourceTextHash);
 }
});
