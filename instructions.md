# Use the current Astro base

The base includes the working static portfolio reference, current UI catalog, CSS, tests and agent harnesses. It is implemented source, not a pending page-building prompt. Start with [framework reuse](docs/framework-export.md) and README.md.

## Begin any development session

Read AGENTS.md, .ai/state.json and .ai/handoff.md. Route through .ai/workflows/README.md and load only relevant workflows/contracts. For UI work, explicitly read docs/ui/design.md, docs/ui/components/foundations.md and affected component rows. Record the actual paths, requirements and verification. Current contracts override historical screenshots/change records. Preserve dependency versions and architecture.

## CSS installation contract

Copy all four files together: src/styles/tokens.css, global.css, scaffold.css and portfolio.css. BaseLayout imports tokens.css then global.css once; global imports both other files. Preserve the five layers and shared tokens. Inspect scoped/unlayered overrides; never mask overflow or use !important to force a match.

For adoption into an existing project, merge the catalog and lookup rules with that project's business rules, state, props, routes and hosting. Do not overwrite its current state or deployment identity. Read each affected component contract before using composition classes.

## Next project prompt

Adapt the included reference to [authorized project goal]. Read AGENTS.md, state, handoff, docs/ui/design.md and foundations, then affected component contracts and current source. Use the next change ID. Keep responsive composition, semantic HTML, native controls, public interfaces, static output, base-aware URLs, existing dependencies and no runtime AI. Replace reference content/assets only within the authorized scope. Update matching current contracts in place. Run proportionate source checks and browser checks, inspect relevant screenshots, and disclose unexecuted/manual checks. Stop at the requested outcome.

## Validation and rollback

Use Node24 and npm ci. Run npm run check:ui, npm run check, npm test, npx tsc --noEmit, root and /preview/ builds plus tools/check-portfolio-build.mjs as described in README. Browser tests require a supported environment and permitted browser tooling; listing tests is not execution. See docs/ui/verification.md. Git owns rollback; revert the specific change commit. No data migration is needed for this static framework.
