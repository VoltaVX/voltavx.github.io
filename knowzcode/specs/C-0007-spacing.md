# C-0007 — Spacing and full-width feature

## Rules
Follow latest foundations/behavior spacing override. Use a full-width feature wrapper around a centered existing content container; let small-screen height follow content. Large screens retain minimum viewport height. Keep current typography, colors, inner card, content and semantics. No viewport-width overflow hack, negative margin, new package or script.

## Interfaces
Existing IDs, routes, props, public CSS layers and withBase links remain. Outer section changes to behavior-feature, while behavior-statement becomes the inner composition container. Update existing behavior manifest family; no new module.

## Verify
Check the WorkGroup criteria and docs/ui/components/foundations.md C7 table. Run UI/type/unit checks, root/repository static content audits and independent source review. New browser checks must measure full-width edges, actual phone gaps, feature height and zoom when a permitted surface exists; do not substitute static evidence.

## Open validation
Browser rendering unavailable. C4–C7 remain validating. Native Sites save/deploy results own exact source publication status.
