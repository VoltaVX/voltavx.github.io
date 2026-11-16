# URL module

## Purpose
Keep local paths valid across static hosting bases.
## Owns
normalizeBase, localPath, deploymentSettings; Astro-specific withBase wrapper.
## Does Not Own
Routes, content, UI, GitHub API calls.
## Public Interface
normalizeBase(base?) → trailing-slash path; localPath(unprefixedLocalPath, base?) → prefixed URL path; deploymentSettings(origin?, base?) → { site, base }; withBase(localPath) → Astro base-aware path.
## Allowed Dependencies
Standard URL API; Astro BASE_URL in links.ts only.
## Forbidden Dependencies
UI modules, test internals, server or cloud clients.
## Invariants
Origin and base are separate. Only root-relative paths go to localPath/withBase. Dot segments, backslashes, encoded separators, malformed escapes, and literal control whitespace are rejected in pathnames. Encode spaces as %20. Callers never pre-prefix a base. Pure helpers run in Node without Astro globals.
## Change Constraints
Exports are contracts. Run URL tests and root/repository browser tests after changes. Never infer repository base from a page pathname.
