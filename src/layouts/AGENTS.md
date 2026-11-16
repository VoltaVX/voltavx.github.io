# Layout module

## Purpose
Own the document shell and shared metadata.
## Owns
HTML language, head, canonical URLs, skip link, main target, header/footer composition.
## Does Not Own
Page content, business rules, hosting origin selection.
## Public Interface
BaseLayout: title (required), description (optional), noindex (optional), default slot.
## Allowed Dependencies
Components, config, lib, global styles.
## Forbidden Dependencies
Page routes, tests, AI workflow implementations.
## Invariants
Astro.url already contains base; no double prefix. A noindex page has no canonical. Skip target is focusable.
## Change Constraints
Props are contracts. Metadata/shell changes require checks on all three routes and both bases.


## UI authority lookup

Before changing UI in this area, open `docs/ui/design.md`, `docs/ui/components/foundations.md`, and the affected component files from the main lookup table. Paths are relative to repository root. Do not assume linked files were loaded. Keep specs and implementation aligned, preserve public interfaces, and run `npm run check:ui` plus relevant browser checks. New UI elements require a catalog entry before styling. Historical C-0002 rules do not override this catalog.
