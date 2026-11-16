import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizeBase, localPath, deploymentSettings } from '../../src/lib/paths.ts';

test('C-0001: root and repository bases produce usable page and asset paths', () => {
  assert.equal(normalizeBase(''), '/');
  assert.equal(normalizeBase('/'), '/');
  assert.equal(normalizeBase('/my-repo'), '/my-repo/');
  assert.equal(normalizeBase('/my-repo/'), '/my-repo/');
  assert.equal(localPath('/', '/'), '/');
  assert.equal(localPath('/system/', '/my-repo/'), '/my-repo/system/');
  assert.equal(localPath('/favicon.svg', '/my-repo'), '/my-repo/favicon.svg');
  assert.equal(localPath('/#approach', '/my-repo'), '/my-repo/#approach');
  assert.equal(localPath('/system/?view=all#tokens', '/my-repo'), '/my-repo/system/?view=all#tokens');
});

test('C-0001: invalid bases and nonlocal paths fail instead of emitting broken links', () => {
  for (const base of ['repo', '//repo', '/a//b', '/a/../b', '/repo?x=1', '/repo#x', '/%2e%2e/', '/%2Foutside/', '/bad%/', '/.\t./', '/\n/other.example/', '/a\r/b', '/a b/']) {
    assert.throws(() => normalizeBase(base));
  }
  for (const path of ['system/', 'https://other.example/', '//other.example/', '/../outside', '/\\other.example/', '/%2e%2e/outside', '/%2E/outside', '/%2Foutside', '/%5Coutside', '/bad%/', '/.\t./outside', '/\n/other.example/', '/a\r/b', '/a b/']) {
    assert.throws(() => localPath(path, '/repo'));
  }
});

test('C-0001: URL parsing cannot move accepted sample paths outside the configured origin/base', () => {
  const origin = 'https://site.example';
  const paths = ['/system/', '/a%20b/', '/#section', '/?q=../other', '/%2e%2e/outside', '/\\other.example/'];
  for (const point of [...Array.from({ length: 33 }, (_, i) => i), 127]) {
    const char = String.fromCharCode(point);
    paths.push(`/.${char}./outside`, `/${char}/other.example/`);
  }
  for (const base of ['/', '/preview/']) {
    for (const path of paths) {
      let output;
      try { output = localPath(path, base); } catch { continue; }
      const resolved = new URL(output, origin);
      assert.equal(resolved.origin, origin, path);
      assert.ok(resolved.pathname.startsWith(base), path);
    }
  }
});

test('C-0001: deployment configuration separates origin from base', () => {
  assert.deepEqual(deploymentSettings(), { site: 'https://example.com', base: '/' });
  assert.deepEqual(deploymentSettings('https://juan.github.io/', '/project'), {
    site: 'https://juan.github.io', base: '/project/'
  });
  assert.deepEqual(deploymentSettings('https://custom.example', ''), {
    site: 'https://custom.example', base: '/'
  });
  for (const site of ['not-a-url', 'ftp://example.com', 'https://example.com/subpath', 'https://example.com/?x=1']) {
    assert.throws(() => deploymentSettings(site, '/'));
  }
});
