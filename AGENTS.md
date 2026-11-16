# Project instructions

Maintain the static Astro portfolio for Sites. Keep its static output compatible with the retained GitHub Pages workflow. One iteration has one primary intent. Make the smallest valid change. Stop when its acceptance criteria pass.

## Start here

1. Read the user request and `.ai/state.json`.
2. Check `git status --short`. Preserve existing work.
3. Read `.ai/workflows/README.md`; load only the workflow and module contract relevant to the task.
4. Read `knowzcode/workgroups/<change-id>.md` and its spec only for active meaningful work.

## Authority and sources

User instructions take precedence over project rules; these rules take precedence over generated KnowzCode defaults. `.ai/minimal-delta.md` contains the full governing policy. Git owns implementation history. `docs/adr/` owns architecture rationale. `.ai/state.json` owns current state. Module `AGENTS.md` files own local rules. Tests own behavioral evidence. KnowzCode specs own acceptance criteria; its tracker indexes verified nodes without duplicating state. Do not preload the framework or all policy files.

## Change control

- Classify PATCH, BEHAVIOR, or ARCHITECTURE before editing.
- Meaningful work gets a C-XXXX ID and a bounded plan with acceptance criteria.
- PATCH: local change, targeted validation, Git. No ADR.
- BEHAVIOR: meaningful tests, state update when needed, Git. ADR only if architecture changes.
- ARCHITECTURE: explicit user scope authority, ADR, tests, state, Git, rollback.
- Do not add unrequested refactors, dependencies, renames, services, interfaces, or module boundaries.
- No raw model reasoning or private thought logs. Record concise engineering rationale.

## Invariants

- Static output only. No server adapter, private browser credentials, or runtime model calls in this base.
- Import direction: pages → layouts/components → config/lib/styles. Shared components never import pages; low-level modules never import UI. No cycles.
- Pass unprefixed local paths through `withBase()`. Do not prefix Astro.url.pathname twice.
- Prefer semantic HTML and native controls. Keep keyboard access, focus, contrast, and reflow intact.
- Use shared tokens. Add client JavaScript only for requested behavior.
- New dependencies default to zero. Approved bootstrap dependencies are listed in ADR-0001.

## Validation and completion

Use the smallest relevant test set. Behavior code follows KnowzCode TDD; reversible CSS/text patches need relevant validation, without redundant tests. Run `npm run check` for typed changes, `npm test` for path/config changes, and browser tests for UI/hosting changes. Review the actual diff. Update state, relevant specs/tracker, and handoff. Use a small descriptive Git commit with the change ID. Stop at completion.

## ChatGPT web/mobile

Repository files are context, not automatic conversation memory. In a session without repository access, attach the current relevant files and ask GPT to follow this file. Use the handoff as the resume point. Do not claim an on-demand workflow ran unless its file was loaded.

## Mandatory UI specification lookup — C-0003

For ANY UI work, including a one-line CSS change, HTML/Astro markup, layout, text hierarchy, component, state, media, responsive behavior, accessibility, or UI tests:

1. Open `docs/ui/design.md` and `docs/ui/components/foundations.md` before editing. Then select and open the affected files in its component lookup table and `docs/ui/manifest.json`. Read typography-content.md for type/copy work, controls-feedback.md for controls/states, shell.md for shared layout/navigation/footer, and pathway.md for any of the five pathway stages. These are explicit required reads; a link does not preload a file.
2. Use the current UI specification as the visual authority. It supersedes older change records and generic UI defaults. Current contracts are consolidated as-built rules: history/reference snapshots explain past decisions and never override them. Update the matching current contract when authorized rules change; do not append contradictory override chains. Exact original pathway text and the latest user customization override older templates and raster artifacts. Do not restore the old blue palette, larger crop 02, doubled section padding, or blanket sans-only emphasis.
3. For cross-page work, use the homepage as the master, read docs/ui/spacing-materials-C-0018.md and the foundations single-owner spacing rules. Check computed gap plus margins, symmetric padding, and actual translucent backgrounds with backdrop-filter; never restore opaque cards as the default. Record the loaded spec paths, relevant requirements, affected selectors and acceptance checks in the change record or short PATCH note. Read only affected component details. For shared tokens/global styles, inspect the catalog for downstream impact and load each affected contract.
4. Keep shared CSS values in `src/styles/tokens.css`; use the existing five layers and public style API. Reconcile Astro-scoped/unlayered overrides. No arbitrary hard-coded visual values, !important, negative-gap workaround, overflow masking, or new styling dependency. A new element must first receive a component spec, manifest entry and coverage-table row.
5. Preserve element anatomy, text, semantics, states, reading order, responsive rules and all relevant spacing. Keep code and specification aligned when a user authorizes a design change. Do not build an unrelated feature to demonstrate a style.
6. Run `npm run check:ui`, relevant checks and browser/screenshot validation. Report loaded specs, verification and limits. Checks detect broken links/coverage; they do not prove model obedience or WCAG conformance. Never mark a UI task complete from document checks alone.

Specifications belong in `docs/ui/`, never `src/pages/`. Root and local AGENTS.md files route to the same authority; do not maintain independent copied numerical tables in agent entry points. Existing architecture, dependency, safety and change-control rules still apply.
