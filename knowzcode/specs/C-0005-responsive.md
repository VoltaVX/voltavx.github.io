# C-0005 — Responsive composition

## Rules and decisions
Preserve the portfolio's arrangement across desktop and tablet widths until its text/controls cannot fit. Use the latest responsive override in docs/ui/components/foundations.md; it supersedes earlier1280px blanket stacking instructions. No page scaling, reduced root font or hidden overflow. Fix native figure inline margins at their source. Retain C-0004 open behavior treatment and all content.

## Interfaces
Existing component props, routes, withBase links, CSS layers and semantic source order remain. Only shared visual tokens, figure reset and section-specific responsive behavior change. Work/filter/menu behavior stays unchanged.

## Verification
See WorkGroup VERIFY criteria. Browser regressions cover940/1024 two-column hero/editorial alignment, figure margins, narrow stacks, readable fonts/control targets,200% text and row geometry. Browser cases must remain explicitly unexecuted in this restricted Sites session. Source/type/unit/static-build checks and independent diff review must pass before publishing.

## Debt
C-0004 and C-0005 rendered review remain open. Native Sites results own deployment status. No new runtime architecture.
