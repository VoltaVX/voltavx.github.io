/** Reject path segments that URL parsing could interpret as navigation or separators. */
function hasUnsafeSegment(pathname: string): boolean {
  // The URL parser strips literal control whitespace before resolving dot segments.
  if (/[\u0000-\u0020\u007f]/.test(pathname)) return true;
  return pathname.split('/').some(segment => {
    const decoded = decodeURIComponent(segment);
    return decoded === '.' || decoded === '..' || /[/\\]/.test(decoded);
  });
}

/** Normalize a root or repository base to one leading and trailing slash. */
export function normalizeBase(base = '/'): string {
  if (base === '' || base === '/') return '/';
  if (!base.startsWith('/') || /[?#\\]|\/\//.test(base) || hasUnsafeSegment(base)) {
    throw new Error('BASE_PATH must be a root-relative path, for example /my-repo/.');
  }
  return `${base.replace(/\/$/, '')}/`;
}

/** Prefix a site-local, root-relative page or asset path exactly once. */
export function localPath(path: string, base = '/'): string {
  if (!path.startsWith('/') || path.startsWith('//') || hasUnsafeSegment(path.split(/[?#]/)[0])) {
    throw new Error('Use a site-local path beginning with one slash.');
  }
  return `${normalizeBase(base)}${path.slice(1)}`;
}

/** Keep the public origin separate from the repository base path. */
export function deploymentSettings(site = 'https://example.com', base = '/') {
  const url = new URL(site);
  if (!['http:', 'https:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
    throw new Error('SITE_URL must be an HTTP(S) origin. Set the repository path with BASE_PATH.');
  }
  return { site: url.origin, base: normalizeBase(base) };
}
