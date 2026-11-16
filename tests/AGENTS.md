# Verification module

## Purpose
Verify declared behavior independently of implementation wording.
## Owns
URL/config behavior tests, real-browser navigation, resources, metadata, axe, keyboard, no-script, and reflow checks.
## Does Not Own
Production behavior, exhaustive accessibility certification, model-compliance claims.
## Public Interface
npm test; npm run test:e2e; npm run check. Browser tests build their own static preview.
## Allowed Dependencies
Node test/assert, public URL helper, Playwright, axe, generated pages.
## Forbidden Dependencies
Private component state; tests that merely mirror source; rewriting expected results to hide failures.
## Invariants
Use root and repository-base runs. Browser checks are behavior-based. Tests may not alter production files.
## Change Constraints
Write a meaningful red test for new behavior. Do not add tests for trivial reversible edits. Keep validation proportionate to scope.


## UI authority lookup

Before changing UI in this area, open `docs/ui/design.md`, `docs/ui/components/foundations.md`, and the affected component files from the main lookup table. Paths are relative to repository root. Do not assume linked files were loaded. Keep specs and implementation aligned, preserve public interfaces, and run `npm run check:ui` plus relevant browser checks. New UI elements require a catalog entry before styling. Historical C-0002 rules do not override this catalog.
