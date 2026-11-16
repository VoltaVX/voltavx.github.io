> Historical change record. C-0003 and docs/ui/design.md supersede conflicting UI values. Do not restore C-0002 visual defaults during new UI work.

# C-0002 — Glass visual system

Classification: BEHAVIOR (shared visual system); authorized by the user's request on 2026-10-12.
Scope: shared styles, comprehensive UI agent guidance, packaging and migration instructions. No new routes, product interaction, dependencies, component props, runtime AI, hosting changes or theme system.

## Evidence and approach
Apple's Materials HIG and WWDC25 session 219 reserve Liquid Glass for controls/navigation, avoid stacked glass, distinguish regular and clear variants, and respect accessibility settings. CSS cannot reproduce native adaptive refraction. Use a conservative regular-inspired web surface with 86% white fill, 20px blur, opaque fallback, visible boundaries, and no native-effect claim. Keep authored light appearance and existing public token/class names. Exact numbers are project defaults, not Apple requirements.

## Desired behavior
- Navigation and standalone actions use glass; cards, media and reading surfaces remain opaque.
- The two existing layout imports remain sufficient. The portable pack includes all three CSS files and the styles contract.
- A narrowly scoped adapter outranks the previous scaffold's Astro scoped styles; keep page markup and component interfaces stable.
- Explicit solid mode, reduced transparency, increased contrast and forced colors remove backdrop blur. Reduced motion removes authored transitions.
- Shared rules cover headings, text, lists, media, forms, tables, notices, dialogs and control states. Documentation explains patterns that require semantic markup or behavior.
- Comprehensive root AGENTS.md includes layout, spacing, typography, material, accessibility and validation rules. A paste-ready instructions.md guides safe migration of projects with local overrides.

## Acceptance criteria
VERIFY: Existing routes, links, canonical URLs and no-script behavior work at root and repository base.
VERIFY: Keyboard focus, axe AA checks and 320px/200% text reflow pass.
VERIFY: Glass navigation is computed with blur when supported, content cards have no blur, and major controls are at least 44 by 44 CSS px.
VERIFY: Explicit solid mode, increased contrast and forced colors remove blur; reduced motion removes transitions.
VERIFY: Exported form/media/table/dialog patterns reflow in a temporary browser fixture.
VERIFY: Unsupported blur remains opaque; stylesheet review confirms both filter properties and feature detection.
VERIFY: Portable styles copied over the previous archive produce the same HTML/CSS build outputs as the full archive, apart from documentation-copy corrections.
VERIFY: Styles in both ZIPs are byte-identical; both archives pass CRC and extract/build validation.
VERIFY: No runtime dependency or hosting/interface changes. Git history, current state and handoff reflect this change.

## Limitations
CSS preference support varies by browser. data-glass='off' on html is the independent fallback; do not add an unrequested settings interface. Native Liquid Glass adaptivity, screen-reader behavior, physical-device performance and live deployment require separate checks.

## As built

All UI acceptance criteria pass. Existing interfaces, hosting and architecture version are unchanged. The adapter uses repeated classes only for known compound scoped selectors. Complete archive and portable pack contain matching styles and migration instructions. Candidate ZIP CRC/extraction/parity and clean extracted build passed; the final delivery verifies its Git bundle. Evidence: docs/verification/C-0002.md.
