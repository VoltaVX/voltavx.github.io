# Portfolio and Astro framework design specification

Version6.2 — unify homepage and Work index filter capsules and spacing,2026-11-15. Owner: Juan Lopez / VoltaVX. This is the current as-built UI contract for the working reference portfolio and exported Astro base. It replaces accumulated C-0003–C-0011 override chains; C-0013 reduces mobile header padding and removes the discipline eye emblem, C-0020 restores consistent page rails and adds balanced navigation height, C-0021 standardizes vertical alignment across two-pane compositions, C-0022 hides the brand in the open compact menu, C-0023 restores homepage alternation while aligning the Approach page pathway to the shared75rem rail, and C-0024 makes the two Work filter capsules consistent.

## Authority and scope

Priority: latest explicit user instruction; locked original pathway copy; specific current component contract; shared foundations/type/control rules; Apple HIG for unspecified questions; framework defaults. Preserve semantics/accessibility. Current contracts are normative. Historical files in reference/, verification/, KnowzCode and screenshots explain history and never override them. Pre-consolidation documents are preserved in [history](reference/spec-history-before-2026-10-20.md).

For any UI change, read this file and [foundations](components/foundations.md), select affected component rows below, then read their full contracts and current source. Record actual paths, acceptance requirements and verification. Shared token edits require catalog impact review. Add a missing component contract/catalog entry before styling new elements. Update code and matching current contract together; do not append another contradictory override chain. Keep agent entry points short and route to this same authority.

## Component lookup and element coverage

| Element family | Required component specification | CSS owner |
| --- | --- | --- |
| Migrated detail pages, case studies and indexes | [detail-pages](components/detail-pages.md) | `src/styles/portfolio.css` |
| Foundations, spacing, materials and preferences | [foundations](components/foundations.md) | `src/styles/tokens.css` |
| Typography and text elements | [typography-content](components/typography-content.md) | `src/styles/global.css` |
| Controls, forms, data and feedback | [controls-feedback](components/controls-feedback.md) | `src/styles/global.css` |
| Navigation, footer and route shell | [shell](components/shell.md) | `src/styles/scaffold.css` |
| Hero, portrait and discipline strip | [hero](components/hero.md) | `src/styles/portfolio.css` |
| Research spotlight and study diagram | [research](components/research.md) | `src/styles/portfolio.css` |
| Behavior statement and research stages | [behavior](components/behavior.md) | `src/styles/portfolio.css` |
| Five-stage pathway, examples and locked copy | [pathway](components/pathway.md) | `src/styles/portfolio.css` |
| Selected work, filters and project cards | [projects](components/projects.md) | `src/styles/portfolio.css` |
| Project ecosystem and service cards | [ecosystem-services](components/ecosystem-services.md) | `src/styles/portfolio.css` |
| About, tools, resume and contact | [about-contact](components/about-contact.md) | `src/styles/portfolio.css` |
| Images, captions, icons and diagrams | [media-diagrams](components/media-diagrams.md) | `src/styles/global.css` |

The [manifest](manifest.json) is a structural lookup index; the Markdown files own design requirements. A component file can cover several related HTML elements. Do not create one document per tag or duplicate the catalog inside KnowzCode. C-XXXX specs own change acceptance; this catalog owns reusable UI behavior and geometry.

## Current system at a glance

- Page/content palette: ivory and indigo, near-black #171922 headings, soft slate #585D70 supporting copy; local system sans,700-weight headings with −.035em tracking, and restrained installed serif emphasis.
- Heading ranges:36–72 page display,36–45 section headings,22–26 card. Body16–18, native44/48px targets; natural wrapping and no page scaling.
- Every main section owns one64–120px leading gap. Editorial20–48, grid/card16–24, panel20–32; exact local exceptions in component contracts.
- The opening introduction fits its content with equal20–32px vertical inset and no hero-style viewport minimum. Behavior/Contact are content-height full-width gradient cards with balanced24–64px block inset. Never restore full-screen feature floors.
- The shared75rem container and responsive page gutters set one content edge across the hero, research spotlight, behavior statement, work, ecosystem and every migrated route. Full-bleed feature backgrounds may extend to the viewport; their content stays on the same shared rail. Do not widen or add extra desktop insets to the behavior feature. Two-column editorial layout starts768px, alternate pathway896px, larger project/service grids1100px, full navigation1280px.
- Header uses one restrained functional glass layer,48px controls,28px brand and menu glyph,8px block inset, and compact16px inline inset; expected closed height is about66px. The compact header is a native two-line icon disclosure with Contact inside menu. Apple recommends44×44pt minimum button hit regions; exact CSS sizes are project choices. Widescreen portrait matches full hero copy height. Mobile discipline card is a single frosted wrapper with responsive 14–16px labels, dot markers and no eye emblem, plus enlarged-text stacking fallback.
- Homepage pathway returns to its alternating two-column desktop composition in the existing70rem sequence rail. Odd and even card/example pairs retain opposite sides, local connectors, mirrored example rotations and callouts; below896px they stack in source order. Do not place all card/example pairs on one vertical axis.
- The homepage Selected Work filter capsule is the style reference for the dedicated Work index. Both share the glass capsule, control geometry, selected underline and24px spacing between intro, capsule, count and project grid.
- On the Approach page, center the ABA-Informed Design Pathway intro within800px. The list and cards use the shared75rem page-shell width, matching the hero and other full-width sections. Keep the heading text centered and do not narrow the section rail.
- At desktop widths, every two-pane editorial or card layout centers each pane against the taller pane. This includes homepage hero/research/behavior/about compositions and detail-page case, About, Contact, research and valet layouts. The research index card stretches its left text pane to match the diagram side, then centers the content inside it. Mobile layouts stack in source order and do not vertically center against viewport height.

## Materials and implementation

Apple [Materials](https://developer.apple.com/design/human-interface-guidelines/materials) distinguishes Liquid Glass navigation/controls from standard content materials; [Layout](https://developer.apple.com/design/human-interface-guidelines/layout) supplies adaptable alignment/margin principles. There is no universal Apple Liquid Glass website CSS specification. All exact measurements here are project customizations. See [current spacing/material audit and research](spacing-materials-C-0018.md). Frosted navigation/filter material and a quieter translucent content-card tier are the default where supported; opaque surfaces are accessibility/unsupported-browser fallbacks, not the normal card design. Do not nest backdrop filters or simulate native lensing. Preferences include reduced motion/transparency, increased contrast, forced colors, explicit glass off and print.

Import tokens.css then global.css once in BaseLayout; global imports scaffold.css and portfolio.css. Preserve layers tokens/base/layout/components/utilities, shared tokens and public component props. No unlayered visual workaround, !important, overflow masking, font service, styling dependency, unnecessary client hydration or runtime AI.

Homepage: hero, research, behavior, pathway, work, ecosystem, services, About, Contact. Keep /system/ and /404.html. Eight-project filter is progressive enhancement: native buttons/states/count/reset, all projects visible without JS. Mobile menu is native details. Contact opens email; no backend delivery. C-0015 migrates the17 detailed/index routes locally; navigation and portfolio actions use those local destinations.

## Evidence and release

Use [verification](verification.md): UI contract, appropriate type/unit/root+repository build audits and browser checks at320/390/768/1024/1440 plus enlarged text/preferences. Structural checks verify links/coverage, not model obedience, rendered fidelity or WCAG conformance. Current verification is recorded per change in docs/verification/. C-0018 includes route-wide reflow checks; C-0019 evidence and remaining limits are recorded separately; [C-0020](../verification/C-0020.md) records shared-width, alignment and navigation updates; [C-0021](../verification/C-0021.md) records two-pane alignment; [C-0022](../verification/C-0022.md) records open-menu brand behavior; [C-0023](../verification/C-0023.md) records restoration of homepage alternation and Approach page shared-width alignment. Do not infer visual completion from source checks.

Framework reuse/setup: [framework-export.md](../framework-export.md). Component contracts govern UI; change specs govern acceptance; Git owns history; ADRs own architecture; .ai/state.json owns active work. Do not copy an existing project's stale active state over a new one.

## Spacing ownership across all pages

The homepage is the master for equivalent component roles. Read the [spacing audit](spacing-materials-C-0018.md) for categories, measured checks and source comparisons. Use padding for internal insets, gap for grid/flex siblings with zero child block margins, and one leading margin for normal-flow section/prose boundaries. Never add two mechanisms to represent the same distance. Auto margins for alignment and separator insets are explicit exceptions. All thirteen current component contracts inherit these rules; migrated pages are not a second design system.

## Local-page composition

The current [detail-page contract](components/detail-pages.md) owns the research feature, framed case media, separate Contact option cards, Services process variant and mobile About order. Their appearances inherit homepage tokens; only composition varies. The Contact wrapper stays unblurred. Current evidence is in [C-0019 browser verification](../verification/C-0019-browser.md); incomplete visual/accessibility checks are not certified by an export.
