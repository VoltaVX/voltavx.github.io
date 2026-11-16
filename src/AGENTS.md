# Source instructions

Follow root AGENTS.md and the nearest module contract.

For `src/pages/`, load `docs/modules/pages.md`. Do not place documentation Markdown under `src/pages/`: Astro turns it into a public route.

The remaining module contracts are in their own source directories. Preserve the declared import direction.


## UI authority lookup

Before changing UI in this area, open `docs/ui/design.md`, `docs/ui/components/foundations.md`, and the affected component files from the main lookup table. Paths are relative to repository root. Do not assume linked files were loaded. Keep specs and implementation aligned, preserve public interfaces, and run `npm run check:ui` plus relevant browser checks. New UI elements require a catalog entry before styling. Historical C-0002 rules do not override this catalog.
