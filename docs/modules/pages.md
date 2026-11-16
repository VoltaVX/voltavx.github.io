# Pages module

## Purpose
Compose static routes and page-specific content.
## Owns
Homepage, design-system page,404, migrated indexes/detail pages; section order and route-specific presentation.
## Does Not Own
Shared navigation, metadata mechanics, hosting configuration, global tokens.
## Public Interface
`/`, `/system/`, `/404.html`, and17 original routes listed in docs/migration-inventory.json. Pass title/description/noindex to BaseLayout.
## Allowed Dependencies
Layouts, components, config, lib, shared styles.
## Forbidden Dependencies
Test internals, workflow scripts, server adapters, private services.
## Invariants
One h1 per page; meaningful headings; all internal links use withBase; static prerendering.
## Change Constraints
Preserve routes unless explicitly requested. Run affected browser checks and inspect layout after UI edits.


## UI authority lookup

Before changing UI in this area, open `docs/ui/design.md`, `docs/ui/components/foundations.md`, and the affected component files from the main lookup table. Paths are relative to repository root. Do not assume linked files were loaded. Keep specs and implementation aligned, preserve public interfaces, and run `npm run check:ui` plus relevant browser checks. New UI elements require a catalog entry before styling. Historical C-0002 rules do not override this catalog.
