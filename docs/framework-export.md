# Astro base export and reuse

This source archive retains the current portfolio as a complete working reference, not an empty starter. Current primary authority is [ui/design.md](ui/design.md); the13 component contracts, registry, agent entry points and four CSS files travel together. Pre-consolidation requirements live under ui/reference/ as history only. Export packaging adds no runtime UI, component API, dependency or architecture change. The reference includes C-0019 local-page compositions, shared frosted materials, responsive typography, compact navigation and no discipline eye.

## Included and excluded

Included: Astro/TypeScript source and pinned lockfile;10 local WebP assets and provenance; homepage/system/404 and17 local detail/index routes; tests/build audits; GitHub Pages workflow; UI catalog/history; root/local AGENTS.md, Cursor/Copilot/Claude and Minimal-Delta/KnowzCode harnesses; upstream notices. The public portfolio copy/assets remain reference content.

Excluded: .git, Git history bundle, node_modules, .astro, dist, browser/test outputs, private environment files, caches, credentials, old archives and .openai/hosting.json. A new project must never inherit the current Sites project identity. The export is standalone source: initialize your own Git repository and connect your own host. Existing project history is retained in documentation, not a Git bundle.

Export-only normalization: astro.config.mjs and .env.example default SITE_URL to https://example.org and BASE_PATH to /. README/START-HERE describe reuse. AGENTS.md purpose becomes generic while its UI lookup rules stay intact. .ai/state.json/.ai/handoff.md become neutral bootstrap context without stale active changes. Historical change records are retained and marked by their dates/IDs. The live project's configuration/state are not overwritten with these new-project defaults.

EXPORT-MANIFEST.json identifies the source commit, export transformations, exclusions and SHA-256/size for each included file except the manifest itself (avoids a circular checksum). It is a record of the export, not a deployment credential. Verify these hashes after extraction. No dependencies/build outputs ship in the ZIP.

## Start a new project

1. Extract into a new directory. Use Node24/npm; run npm ci. Read AGENTS.md, state, handoff and instructions.md.
2. Keep the reference intact for initial checks: npm run check:ui; npm run check; npm test; npx tsc --noEmit; npm run build; node tools/check-portfolio-build.mjs. For the second base: BASE_PATH=/preview/ npm run build, then node tools/check-portfolio-build.mjs --base /preview/. Rebuild at / afterward.
3. Set your actual origin via SITE_URL and optional BASE_PATH. .env.example documents the shape. BASE_PATH carries a repository path; SITE_URL is an origin. withBase() accepts unprefixed local paths. Do not deploy example.org canonicals.
4. Replace the public reference identity in src/config/site.ts, page/section copy, contact/external links, image/favicon assets, alt text and metadata. Several reference details live in components and tests, not config alone. Preserve provenance/usage rights; update tests and content audits intentionally as reference content is replaced, without weakening layout/accessibility coverage.
5. Read the main/foundations and affected component specs before UI work. Adapt current contracts alongside authorized visual changes. Start the next C-XXXX from the retained tracker (C-0020 after this export); historical WIP browser records describe the reference, not a new project's active tasks.
6. Initialize your own Git repository/remote. The retained GitHub Pages workflow targets main and obtains hosting metadata from configure-pages; configure Pages/DNS separately. For Sites, create/select your own site and let its supported workflow bind the new source. Export does not provision hosting or install plugins/cloud accounts.
7. In a permitted local/browser environment, install Playwright browsers per README and run npm run test:e2e for root and repository bases. Inspect320/390/768/1024/1440, enlarged text, keyboard/no-script/preferences and physical-device/assistive-technology checks as appropriate.

Reference browser evidence includes C-0019:85 route-width checks,17 enlarged-text checks and selected menu/filter/contact checks. Full visual, preference, no-script, accessibility and physical Safari coverage remains incomplete; see docs/verification/C-0019-browser.md. Static checks/hash validation establish source/package integrity, not visual fidelity or WCAG conformance. Contact uses mailto; detailed case-study/research/About/résumé/privacy destinations are local reference routes. No backend, runtime AI or new package is bundled.

## Updating an existing project

Merge only authorized UI/source changes; preserve that project's business logic, secrets boundaries, current state and deployment identity. Do not copy this archive over an active repository blindly. Keep upstream KnowzCode notices and dependency licenses. Review the actual diff and use a scoped Git commit for rollback.
