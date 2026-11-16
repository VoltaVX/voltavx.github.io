# C-0006 — Heading hierarchy and behavior feature

## Rules and decisions
The latest user instruction explicitly permits a viewport-height outer card, superseding all prior no-card behavior rules. Follow updated typography-content.md and behavior.md. Preserve C5 responsive layout and semantic source order. Same-resolution screenshots inform an approximate12.5% increase for display/major/secondary headings; this is an authored CSS target, not a recovered original CSS measurement.

## Interfaces
Existing component props, routes, source copy, scripts and dependencies remain. Shared heading tokens change; the behavior component receives a card class on its existing process wrapper and stops forcing a break inside the final phrase.

## Verification
Check36/72 display,36/54 major,36/45 secondary,22/26 card heading bounds; body/control sizes unchanged. Check outer minimum viewport height with auto growth, responsive padding, original lavender/ivory color scheme, inner list card, no nested filter, source-order reflow and intact original text. Run UI/type/unit/static-build audits and source review. Prepared browser tests are not executed without the supported browser surface.

## Open acceptance
Actual color composition, wrapping, small-screen/zoom reflow, viewport fit, contrast and caption clearance require browser review. Preserve open acceptance instead of claiming visual conformance.
