# Repository instructions

## Project

This is a static Astro 7 and TypeScript portfolio deployed to GitHub Pages. It has no server runtime, database, authentication, session, or contact-form API.

Important paths:

- `src/pages/`: routes
- `src/layouts/`: document shell and metadata
- `src/components/`: reusable UI
- `src/content/`: project and research records
- `src/styles/global.css`: shared design tokens and styles
- `src/scripts/`: Astro-processed, CSP-compatible TypeScript for progressive enhancement
- `public/images/`: optimized image assets
- `scripts/`: deterministic project utilities
- `dist/`, `.astro/`, `node_modules/`, `.debug/`, and archives: generated; never edit

## Commands

Run commands from the repository root.

- Install: `npm ci`
- Develop: `npm run dev`
- Develop in a container: `npm run dev:container`
- Start the managed debugging sidecar: `npm run dev:agent`
- Check sidecar status: `npm run dev:status`
- Read or follow sidecar logs: `npm run dev:logs` or `npm run dev:logs:follow`
- Stop the sidecar: `npm run dev:stop`
- Type and Astro checks: `npm run check`
- Production build: `npm run build`
- Full verification: `npm run verify`
- Archive: `npm run zip`

## Engineering rules

- Preserve the static-first architecture and Astro's zero-JavaScript default.
- Add browser JavaScript only for behavior HTML cannot provide.
- Prefer semantic HTML, progressive enhancement, platform APIs, and one source of truth.
- Do not add a runtime dependency unless the requested feature cannot be implemented safely with the platform or existing dependencies.
- Search for references before removing files, selectors, fields, routes, or content.
- Never edit generated output or a bundled archive.
- Preserve unrelated user changes and keep patches focused.

## Contact invariants

- Native email must remain a real `mailto:` anchor so the browser delegates to the configured protocol handler.
- Do not target Apple Mail, Outlook, Gmail, or any named installed application from the native action.
- A valid `mailto:` href must exist before JavaScript runs.
- JavaScript may enrich subject and body values, but must not cancel or asynchronously initiate normal mail or SMS navigation.
- Encode individual query values, not the complete protocol URL.
- Preserve direct email, native email, SMS, Gmail Web, and clipboard fallbacks.
- Never log contact-field values.

## Security and privacy

- Use Astro's `security.csp` configuration; do not hand-maintain CSP hashes.
- Keep the production CSP strict. Never add `unsafe-inline` or `unsafe-eval`.
- Keep executable browser code external and same-origin.
- Do not add production analytics, remote telemetry, trackers, source maps, or diagnostics endpoints without explicit approval.
- Audit production dependencies with `npm audit --omit=dev`.
- Treat a form backend as a separate architecture and threat-model change.

## Content rules

A record is a research project when `category` or `projectType` contains `Research`.

- Research projects must render outcomes and limitations under “What can—and cannot—be claimed.”
- Commercial website projects must not render research evidence-limit blocks.
- Keep research tagging explicit in both content collections.
- Do not strengthen claims beyond the supplied evidence or remove verification qualifiers.

## AI workflow

- Read this file, `package.json`, and the relevant project skill before changing code.
- For complex work, identify the goal, constraints, affected files, and acceptance checks before editing.
- Delegate only independent work with disjoint file ownership; one agent owns integration and final validation.
- Separate observed evidence from assumptions.
- When a failure recurs, add the smallest durable prevention rule here or in a focused skill.

## Definition of done

1. Run `npm run verify` for code changes.
2. Inspect the final changes for generated files, secrets, unnecessary dependencies, and unrelated edits.
3. Test the affected route in development.
4. For CSP, asset, or deployment changes, inspect the production output.
5. For contact changes, verify the native anchor without JavaScript and retain every fallback.

## Archiving

Always use `npm run zip` or `scripts/zip_project.sh`. The archive must exclude dependencies, build output, caches, secrets, existing archives, debug logs, and macOS metadata.
