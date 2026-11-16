# C-0003 — Portfolio UI authority and styles

Status: As-built and verified. See docs/verification/C-0003.md for evidence and limits.

## 1. Rules and decisions

The user's 17 October request authorizes this scaffold preparation. docs/ui/design.md and its 12 indexed component contracts own current reusable UI requirements. They supersede conflicting generic C-0002 visual defaults. ADR-0002 records specification ownership. Preserve exact pathway copy and the final compact/centered stage 02 example, centered stage 04 confirmation and attached stage 05 line.

No actual portfolio routes, new product behavior, runtime service, package version, framework, font request, client hydration or KnowzCode-runtime change is authorized. Existing architecture/import direction, routes, props and Pages URLs stay intact.

## 2. Interfaces

BaseLayout imports tokens.css then global.css; global imports scaffold.css and portfolio.css. Keep five layers and stable aliases. docs/ui/manifest.json is the coverage index, not a parallel numerical source. Root/local AGENTS.md, Cursor, Copilot, Claude and KnowzCode entry points route UI work to the same required read sequence. npm run check:ui checks structural reachability. docs/ui/verification.md defines browser/manual evidence.

## 3. Verification criteria

- VERIFY: Every registered component file, main-table link, CSS owner/export and mandatory agent entry route is reachable. Missing and malformed documents produce diagnostics.
- VERIFY: Root instructions stay below the project 10 KiB budget; detailed component rules load on demand.
- VERIFY: The approved palette, container, type, spacing, content materials and fallback states appear in rendered scaffold styles rather than only documentation.
- VERIFY: Pathway fixtures preserve full source text and the main-card anatomy. Main cards are 552 px wide at the 1440 px reference; evidence is centered; stage 02 fits content; caption clearance is at least 40 px after projection.
- VERIFY: Navigation, links, metadata, resources, keyboard, no-script behavior, native disclosure/dialog, reflow and supported preferences pass at root and /preview/.
- VERIFY: All existing package versions, URL helpers, route interfaces, deployment workflow and KnowzCode context runtime stay unchanged.
- VERIFY: UI reference media and Markdown do not become public pages. The deliverable contains source, specifications and refreshed Git history, not node_modules or browser binaries.

## 4. Debt and gaps

This is a scaffold/style foundation, not the implemented portfolio. Browser evidence uses semantic fixtures for new composition APIs. No structural test proves future model obedience. Record browser availability, manual screen readers, physical-device blur performance and true 400% browser zoom in docs/verification/C-0003.md. Real portfolio assets/content/route implementation remain the next authorized change.
