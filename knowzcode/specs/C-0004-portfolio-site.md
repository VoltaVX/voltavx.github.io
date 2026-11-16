# C-0004 — Portfolio implementation

## Rules and decisions
Use docs/ui/design.md and its affected component catalog as visual authority. Use original source images and content. Preserve static Astro, zero new dependencies, withBase URLs, five CSS layers, locked pathway text and agent lookup. Implement a single cohesive homepage with semantic sections and functional work filtering, native no-script content and email contact. Keep /system/ and /404.html. Use confirmed original case-study/resume/privacy destinations rather than inventing content.

## Interfaces
Homepage composes independent presentational section components in source order. Shared shell keeps its existing interfaces. Project filtering is progressive enhancement: all eight visible without JS; buttons update aria-pressed, visible results, polite count and reset. Illustrative pathway controls are non-interactive HTML. Assets live in public/images, with intrinsic dimensions and source provenance. Sources/harness docs do not ship as public routes.

## Verification criteria
VERIFY: isolated worktree exists before implementation; original baseline remains intact.
VERIFY: eight named projects, six research steps, five exact original pathway cards and all approved sections exist as HTML, with one H1 and valid heading/anchor order.
VERIFY: core responsive and token rules meet current component specs by source review; no fixed full-page raster, typography shrink workaround or overflow masking.
VERIFY: original local assets resolve, no placeholder destinations or invented outcomes, native email link and confirmed external material destinations work by structure.
VERIFY: filter behavior has a meaningful failing test before code and passes after code; no-script all-work remains available.
VERIFY: check:ui, types, unit, root/repository static builds and generated-content/link audits pass. Browser-dependent checks remain unverified if permitted preview is unavailable.
VERIFY: fresh independent reviewer audits approved spec and actual changes; repair at most three times and record remaining gaps.
VERIFY: exact pushed source is packaged and private Sites deployment has a terminal success URL.

## Debt and gaps
Browser QA is blocked by missing permitted control-browser surface. Do not mark visual/keyboard/axe/reflow checks passed from static analysis. Manual assistive technology/device checks remain outside automated evidence.

## As-built checkpoint

Implementation and source audit pass;14 unit tests, zero Astro diagnostics, UI check and both static-base audits pass. Browser criteria remain OPEN due unavailable permitted preview. See docs/verification/C-0004.md. Native private Sites publication can supply the review implementation; do not mark visual acceptance passed.
