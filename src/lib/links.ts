import { localPath } from './paths';

/** Use unprefixed root-relative paths at call sites. External URLs stay explicit. */
export const withBase = (path: string): string => localPath(path, import.meta.env.BASE_URL);
