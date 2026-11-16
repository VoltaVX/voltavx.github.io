# Components module

## Purpose
Own small reusable presentation components.
## Owns
SiteHeader, SiteFooter, ActionLink, SectionHeading and the semantic portfolio section components. Shared visual rules remain in the styles module.
## Does Not Own
Routes, document metadata, business state, hosting deployment.
## Public Interface
ActionLink: href, variant (primary/secondary), content slot. SectionHeading: eyebrow, title, optional description. Header/footer use site config.
## Allowed Dependencies
Config, lib, tokens. Another component only when necessary.
## Forbidden Dependencies
Pages, layout shell, private APIs, workflow runtime.
## Invariants
Links navigate; buttons act. Keep accessible names, native semantics, focus, reflow, and targets. No client hydration by default.
## Change Constraints
Preserve props and slot behavior. Do not create abstractions without present reuse. Test callers of changed props.


## UI authority lookup

Before changing UI in this area, open `docs/ui/design.md`, `docs/ui/components/foundations.md`, and the affected component files from the main lookup table. Paths are relative to repository root. Do not assume linked files were loaded. Keep specs and implementation aligned, preserve public interfaces, and run `npm run check:ui` plus relevant browser checks. New UI elements require a catalog entry before styling. Historical C-0002 rules do not override this catalog.
