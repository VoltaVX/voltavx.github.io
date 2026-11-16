# Superseded UI specification snapshot

Historical reference only. Do not implement these values. Current authority: ../design.md and ../components/. This snapshot preserves the earlier accumulated overrides before C-0012 consolidation.

---

## docs/ui/design.md

# Portfolio design specification

Version: 4.8. Change: C-0011. Date: 2026-10-20. Owner: Juan Lopez / VoltaVX.

## Scope and authority

This is the current UI authority for the supplied Astro scaffold and its future portfolio. It merges the approved design.md version 3.2 and the final compact stage 02 refinement. It supersedes the generic C-0002 UI defaults wherever they conflict. C-0004 implements the portfolio homepage with semantic section components.

Priority: latest explicit user instruction; locked original pathway copy; specific component requirements in this catalog; shared requirements here and in foundations; Apple HIG for unspecified visual questions; framework defaults. Keep accessibility and semantic requirements as acceptance criteria. A local CSS shortcut, old example, archived spec, or generated screenshot cannot override this authority.

The component catalog is normative. Read this file and foundations.md for every UI task, then open only the affected component specs. A global token/style change requires an impact check against the whole catalog, followed by the affected specs. Links are lookup instructions, not automatically loaded content.

## Required UI work sequence

1. Read root AGENTS.md, current state and the affected module contract.
2. Open this file, [foundations](components/foundations.md), and the component rows selected below. Include typography/content and controls when text or interaction changes.
3. Record exact spec paths, relevant requirements, owned files and acceptance checks in the change record. Do not copy every component spec into the prompt or WorkGroup.
4. Inspect existing markup, scoped/unlayered CSS and callers. Use the current token/class API; preserve semantics and public interfaces.
5. If a genuinely new element has no row, add a focused component spec and manifest entry before styling it. Define its anatomy, spacing, states, responsive behavior and acceptance. Do not invent unrelated product features.
6. Implement the requested change. Run npm run check:ui, the relevant tests, and browser/screenshot checks. Compare at 320, 390, 768, 1024 and 1440 px as relevant; include long labels and enlarged text.
7. Review the actual diff against the loaded specs. Update specification and CSS together when a user-authorized design rule changes. State any untested browsers or accessibility conditions. Stop when accepted scope passes.

## Component lookup and element coverage

| Element family | Required component specification | CSS owner |
| --- | --- | --- |
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

## Shared numerical baseline

All dimensions are CSS px at a 16 px root unless expressed as relative units. Do not set a fixed root font size. A raster's image pixels are not CSS measurements.

| Rule | Project value |
| --- | --- |
| Desktop reference / container / outer margin | 1440 / 1200 / 120 px |
| Phone / medium / minimum desktop gutter | 20 / 24 / 40 px |
| Major / related section gap | 96 / 64 px, owned once |
| Eyebrow → heading / heading → copy / copy → action | 12 / 16 / 24 px |
| Standard / pathway card padding | 24 / 32 px |
| Card gap / editorial gap | 24 / 48 px |
| Hero / section / pathway intro / card heading | 64/68, 48/52, 40/44, 22/28 px |
| Body / card body / caption / eyebrow | 18/28, 16/24, 14/20, 12/16 px |
| Content / image frame radius | 24 px; nested radius subtracts inset |
| Primary / ordinary control minimum | 48 / 44 px |
| Main pathway card width / minimum height | 552 / 352 px; height grows |
| Pathway stage minimum / stage gap | 400 / 64 px |
| Pathway example caption clearance | 40 px beyond projected frame |
| Navigation material | 76% white, 24 px blur, saturation 1.15 when supported |
| Page / surface / ink / secondary / accent | #F5F5F2 / #FCFCFA / #171922 / #505461 / #5147D9 |

## Apple base and project overrides

Use Apple's Materials, Layout, Typography, Motion, Color and Accessibility HIG as a base. Apple does not define a universal Liquid Glass CSS specification for websites. The exact numbers above are project decisions. Reserve web glass for compact navigation/controls; use nearly opaque content cards and no nested blur. CSS does not reproduce native lensing or automatic adaptive contrast.

The approved ivory/indigo palette, limited serif accent, exact pathway copy, alternating cards, small mirrored examples and custom spacing override former generic defaults. Section 02's compact fit-content example overrides the default crop-height range. Stage 04's example contents are centered; stage 05's lines join the frame borders.

## CSS and markup contract

Import src/styles/tokens.css then src/styles/global.css once in BaseLayout. global.css imports scaffold.css and portfolio.css. Preserve layer order tokens, base, layout, components, utilities. Tokens own CSS values; component specifications define their intended use. Keep existing aliases for compatibility. Do not use unlayered visual overrides, arbitrary literals, !important or overflow hiding to evade a mismatch.

Existing Astro component props, /system/ and /404.html remain. Portfolio sections compose the homepage; do not use the reference PNG as a full-page background. New interactive behavior needs an explicit keyboard/state contract and authorized implementation.

## Accessibility, motion and completion

Use semantic HTML, one H1, native controls, visible focus, meaningful names, alt text, reading order and usable no-script navigation. Target WCAG 2.2 AA contrast: 4.5:1 normal text; 3:1 qualifying large text and required graphical/control identification. A 44 px control minimum is a project usability rule, not a universal AA threshold.

Respect reduced motion, increased contrast, supported reduced transparency, forced colors and print. Supply an opaque no-filter fallback and html[data-glass="off"]. No automatic parallax, autoplay, hidden-until-animated text, repeated glass cards or fabricated outcomes. A static concept does not prove responsive or accessible implementation.

The structural checker verifies specification reachability and routing only. Browser checks verify computed behavior. Neither proves that every future agent will obey instructions. Independent review and explicit acceptance remain necessary for meaningful UI work.

## References and migration

- [Research and architecture findings](research.md)
- [Verification procedure](verification.md)
- [Approved source design, historical reference only](reference/approved-design-v3.2.md)
- [Approved full portfolio concept, approximate raster](reference/portfolio-approved.png)
- [Earlier pathway research](reference/pathway-research.md)

Future agents must use the current catalog, not restore obsolete C-0002 values or historical raster spelling artifacts. The locked pathway copy is in components/pathway.md. Keep the agent harnesses intact. See knowzcode/specs/C-0004-portfolio-site.md for implementation acceptance; source media provenance is in reference/source-assets.md.

## C-0004 implementation scope

The homepage composes hero, research, behavior, pathway, selected work, ecosystem, services, about and contact. The current CSS API remains authoritative. Project filtering is now authorized progressive enhancement; all eight cards remain visible without JavaScript. Native mobile disclosure navigation is defined in shell.md. Original case studies, detailed research, résumé, privacy and About destinations link to confirmed paths on voltavx.com until their content is separately migrated. Do not fabricate these pages or form delivery.

## Current responsive override

The C-0005 responsive override in [foundations](components/foundations.md#c-0005-responsive-composition-override--2026-10-18) is mandatory for every component. It replaces former blanket 1280px stacking and fixed medium heading sizes. Preserve tablet composition using fluid visual tokens, reset figure inline margins and use section-specific breakpoints. The source screenshot demonstrates proportional layout, not permission to restore the old card-based hero.

## Latest heading and feature-card override

C-0006 in [typography-content](components/typography-content.md#c-0006-heading-hierarchy-override--2026-10-18) and [behavior](components/behavior.md#c-0006-full-height-feature-card--2026-10-18) supersedes earlier smaller heading tokens and the no-card behavior rule. The user now requests a viewport-height lavender/ivory outer feature and a near-white inner research-stage card. Preserve C-0005 layout behavior and accessibility.

## Latest full-width spacing authority

C-0007 in [foundations](components/foundations.md#c-0007-proportional-spacing-override--2026-10-18) and [behavior](components/behavior.md#c-0007-full-width-and-compact-spacing--2026-10-18) supersedes previous spacing values, the inset outer feature and the universal small-screen viewport minimum. Retain C6 heading sizes and C5 content layouts.

## Latest targeted mobile and contact authority

C-0008 [foundations](components/foundations.md#c-0008-targeted-spacing-exceptions--2026-10-18) and affected component refinements override prior mobile discipline stacking, hidden narrow pathway connectors, compact research/services gaps, open Contact and behavior desktop container cap. Preserve all original copy and typography.

## Latest card-height correction and hero authority

C-0009 [foundations](components/foundations.md#c-0009-viewport-sizing-correction--2026-10-18) and affected component rules supersede all prior full-height behavior/Contact instructions: these cards use content height. Only the introduction targets75% viewport height and can grow for content. Mobile discipline labels form a glass column beside hero copy; work status is centered.

## Latest material, image and section-spacing authority

C-0010 component refinements and [research](research-C-0010.md) supersede older compact section gaps, About mobile width cap and absolute pathway captions. Use unified64–120px section spacing and restrained content-material callouts, centered mobile process text, matched About gutters and visible hero face. Retain C9 content-sized feature cards and growing75% hero. Apple HIG supplies principles; project measurements are custom.

Latest pathway spacing PATCH (2026-10-20): follow the current [pathway](components/pathway.md#pathway-grouping-patch--2026-10-20) rule:64–96px between numbered groups and16px stacked example/callout gap. This supersedes older40px caption clearance; other section spacing stays unchanged.

## Latest header and hero authority

C-0011 [shell](components/shell.md#c-0011-header-and-hero-refinement--2026-10-20) and [hero](components/hero.md#c-0011-header-and-hero-refinement--2026-10-20) override the old mobile Menu text/Contact placement, desktop portrait height cap and discipline card anatomy. Preserve native semantics, preferences and all latest pathway spacing.


---

## docs/ui/components/about-contact.md

# About, tools, resume and contact

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/portfolio.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

For About, use a 384 px portrait, a 48 px gap, and a 768 px text area. Keep paragraph text to about 62 characters per line within that area. Use a portrait around 440 px high, a 24 px radius, and an appropriate crop of the original image.

Use two short paragraphs. Put the tool list 24 px below the text. Put the about and résumé links 24 px below the tool list, with a 24 px gap between them. Do not invent availability, degrees, results, or credentials.

Separate Contact from About by 96 px. Use an open section with 48 px vertical internal padding. Keep the heading on the left and the action on the right. At smaller widths, move the action below the copy. The button is 48 px high. Its label is “Start a conversation.”

## Detail and states

Use a simple tool list, named about/resume links, and a clearly labeled contact action. Retain paragraph order and the original portrait. External links do not need a new tab by default. Do not invent personal credentials or availability. The scaffold's mailto contact remains functional; a real contact form needs separately authorized delivery behavior and validation. Reflow actions before shrinking their labels. The shared footer is owned by shell.md.

## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0008 responsive refinement — 2026-10-18

Contact now uses a full-width outer gradient card matching the behavior feature material exactly,32px corners and minimum100svh (100vh fallback) at all sizes. Keep min-height, never fixed height. Center heading and action horizontally and vertically in a native content-sized column, with32px gap and equal24–64px block padding. Put .container.contact-panel inside outer section and remove its prior internal padding. Preserve existing copy, heading level, native mailto and focus. Contrast/forced colors become solid; print removes viewport minimum/gradient.

## C-0009 latest sizing and hero authority — 2026-10-18

Remove Contact viewport min-height at every width. Keep full-width shared gradient card and centered heading/action column with32px gap and equal24–64px padding. Height is content-driven. This supersedes C8 minimum-viewport-height. Do not add screen-sized spacer, fixed height or equivalent empty flex expansion.

## C-0010 material and spacing refinement — 2026-10-18

Below768px the About image fills100% of its content container with max-inline-size:none and natural source aspect ratio/height. Left/right page gutters remain equal20px. This supersedes the old24rem image cap. Contact remains content-height with centered original heading/action; section leading gap uses unified64–120px rhythm.


---

## docs/ui/components/behavior.md

# Behavior statement and research stages

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/portfolio.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

Keep the approved open philosophy section. Use a 690 px heading area, a 48 px gap, and a 462 px supporting area. Keep the data-and-care statement and the six research stages. Place the revised five-principle pathway 64 px after this section. The six research stages and the five pathway principles are separate lists.

## Element details

Use the approved data-and-care statement as a heading, a supporting paragraph, and a six-item ordered research-stage list. The process uses the six original labels with leading-zero numbers and 24 px row gaps; do not add explanatory paragraphs to each row. Do not convert this open editorial section into stacked glass panels. At medium widths stack the two areas with a 32 px gap; preserve document order.

## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## User reference refinement — 2026-10-18

The attached original-style reference overrides the former 48px mixed heading and heading-only left column. Keep the current words “Data reveals patterns. Care gives them purpose.” Use four natural block lines: Data reveals / patterns. / Care gives / them purpose. Style Data reveals in bold uppercase system sans; style the remaining phrase in regular-weight italic Georgia and the existing indigo accent. Consume the responsive display tokens: 64/68 desktop,48/52 medium,40/44 phone. Keep one H2, real text, wrapping and growing height; do not fix the section height.

Move the existing two supporting paragraphs below the heading in the left editorial column, with 40px separation on desktop/medium and 24px on phones; retain 16px paragraph gaps and a 62ch readable measure. Keep the 690:462 desktop column proportions and 48px gap. Align a compact, at most 22rem process list to the bottom right; use ordinary body-size labels, 12/16px indigo leading-zero markers and 24px row gaps. Add the original small closing note below with 24px separation.

Neither the outer section nor the process list is a card: no panel fill, border, radius, shadow, glass, gradient wash or decorative orb from the screenshot. Use the continuous page canvas. Below 1280px, stack editorial content before the process with 32px gap; expand the list to its available column. Preserve normal reading order and allow enlarged text to reflow. The heading font exception is specific to this section; other sections retain the shared major-heading size.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0006 full-height feature card — 2026-10-18

The latest user request supersedes the open/no-card rules above. Put the entire behavior section in one rounded feature card with minimum height100svh and100vh fallback. Use min-block-size, never fixed height: content and enlarged text must grow the card. Keep normal page flow and existing leading section separation. Use32px outer corners,1px pale-lavender rim, quiet3% shadow and the original pale-lavender/ivory/cool-paper scheme: #EEEFFF, page #F5F5F2, end #EDF3F4, with a static13% indigo wash near top-right. No moving orb, nested blur or whole-page scaling.

Responsive outer padding clamps24–64px. The existing690:462 desktop/editorial composition is inside that padding and keeps C5 two columns at768px and above, one below. Align content comfortably within the minimum-height card; keep all content visible and preserve text-first reading order.

Only the six-step list plus its existing note receives an inner near-white card,24px corners and lavender rim. Use32px padding above768px and24px below; keep24px list row gaps, native leading-zero numbering and readable labels. The inner card remains opaque and does not use backdrop blur.

Use the new display36–72px heading tokens. Data reveals is bold uppercase sans on its own line; patterns is italic on its own line; Care gives them purpose is one italic phrase that wraps naturally. Remove the forced break after gives; retain exact words. The accompanying paragraphs and all six labels remain unchanged. Preserve this typography hierarchy across the rest of the website through the shared tokens.

For the larger card titles, pathway rows use a432px minimum (growing for text) to reserve external-caption clearance. Narrow stacked rows retain intrinsic height and captions in flow. All other pathway geometry and locked text remain.

## C-0007 full-width and compact spacing — 2026-10-18

This supersedes the universal viewport minimum and inset outer container above. #approach is a full-width .behavior-feature outer card. Place the existing .container.behavior-statement inside to constrain and align content, retaining existing two-column/phone layout. Outer padding is24–64px equally on top and bottom (latest equal-spacing PATCH); no horizontal section gutters on the colored shell, while inner .container keeps normal responsive gutters. Below1100px remove the viewport minimum and center content only within its intrinsic height. At1100px+ retain100vh/100svh minimum. Keep the lavender/ivory scheme,32px corners, inner research-stage card and exact words. Use panel padding20–32px and grid gap16–24px for that inner list/card. See foundations C7 for the complete site-wide spacing hierarchy.

## C-0008 responsive refinement — 2026-10-18

At1100px+ the inner .behavior-statement grid uses40px side gutters without the1200px container cap. This latest desktop margin request supersedes C7 shared text-edge alignment for this feature only. Keep690:462 columns and existing fluid column gap, full-width shell and equal24–64px block padding.

## C-0009 latest sizing and hero authority — 2026-10-18

Remove all viewport-based height/min-height rules from the behavior feature at every breakpoint. Height follows content plus equal responsive24–64px padding. Keep full-width gradient shell, existing columns and desktop40px inner gutters. The user explicitly rejects full-screen content cards; do not restore100vh/100svh from C6–C8.

## C-0010 material and spacing refinement — 2026-10-18

Below768px center six-step ordered-list numbers and labels using inside markers, zero inline list indentation, and centered text. Center closing note too. Keep original labels, native ol semantics, balanced content-sized outer card and inner card; no viewport-height floor.


---

## docs/ui/components/controls-feedback.md

# Controls, forms, data and feedback

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/global.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

## Buttons, links and filter controls

Links navigate; buttons perform an action. Keep ActionLink's existing href/variant/slot interface. Use solid indigo primary actions, opaque or regular-inspired secondary surfaces, a capsule radius, 48 px primary height, 44 px other control minimum, 24 px horizontal padding and 8 px icon gap. Button text is 15/20 px, weight 600. Use 12 px between actions. Permit text wrapping and height growth. Icon-only controls need an accessible name and 44 px target; icons are 16–24 px.

Implement default, hover, focus, pressed, disabled and selected states as applicable. Focus is a 2 px indigo outline with 3 px offset. Disabled controls use native attributes plus a boundary/style cue; do not rely only on opacity. Current navigation has a shape and underline. Filters use real buttons with aria-pressed unless implementing the full tab keyboard contract. Use a filled selected state and a non-color cue. C-0004 authorizes the project filter behavior defined in projects.md.

## Forms and validation

Use .form-grid with 24 px group gaps, .field with 8 px label/control/help gaps, visible associated labels, correct input/autocomplete types, and .choice labels for native checkbox/radio controls. Fields have 12 px block/16 px inline padding, 12 px corners, 44 px minimum height and a stronger boundary than decorative card rims. Textarea has an 8 rem minimum height and vertical resizing. Fieldset padding is 24 px and legend remains semantic. Placeholder text is not a label.

Connect help/errors with aria-describedby. Set aria-invalid for real errors, preserve values and explain recovery. Use a polite status for a relevant completed action and an alert only for urgent new errors. Never display Message sent as a real delivery result before an actual supported action succeeds. The scaffold has no form backend.

## Status, data and overlays

Badges: 4 px block/12 px inline padding, 4 px content gap, 14/20 px text. Notices: 16 px padding, 3 px semantic edge, text/icon meaning. Define empty, loading, success, error and unavailable states only for features that exist; do not create asynchronous features to demonstrate CSS.

Tables need caption, headers and scope. Use .table-scroll for local overflow, a name/focus when needed for keyboard scrolling, 12/16 px cell padding, 16 px caption padding and 1 px separators. Do not hide columns on phones without equivalent access.

Native details/summary keeps its marker, keyboard behavior, 16 px inline padding, 16 px summary padding, 8 px between disclosures and 24 px answer-bottom space. Dialog geometry is opaque, at most 36 rem wide, 24 px padding, 24 px content gaps and 16 px viewport clearance. When an actual dialog is requested, use showModal, a name, close button, Escape and focus return. CSS supplies no opening behavior. Menus, tooltips, carousels and popovers require their own keyboard/state contract before implementation. Essential help stays visible.




## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.


---

## docs/ui/components/ecosystem-services.md

# Project ecosystem and service cards

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/portfolio.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

Use a 486 px heading column, a 48 px gap, and a 666 px list panel. Use sentence case and a balanced two-line heading. Avoid the original long vertical stack of capitalized words.

Use a 24 px panel radius. Give each of the three rows 24 px horizontal and vertical padding. Use a 32 px icon, a 16 px icon-to-text gap, and an 8 px title-to-description gap. Separate rows with a decorative 1 px rule. Keep the panel opaque.

Describe the distinct needs of Sharper Image Services, SIS Florida, and SIS Asphalt. Do not imply new business relationships beyond those shown in the original portfolio.

## Services

Place services 64 px after the ecosystem. Use four 282 px cards with 24 px gaps. Use 24 px padding and a 240 px minimum height. Use a 32 px icon, a small number, a title, and a short description. Align arrows and action areas across the row.

Retain Behavioral Research & Strategy, Web Design & Development, Commerce & Digital Systems, and Data & Context Systems. Link a service title or explicit action to the relevant destination. Do not show an arrow as the only accessible label.

## Element anatomy

Ecosystem rows use a 32 px icon, 16 px icon/text gap, title, 8 px gap and a short description. Service cards use a number, 32 px icon, heading, short text and explicitly named action. Give controls native semantics; arrows alone are decorative. Keep the four service labels from the approved design. At medium widths services use two columns; on phones use one. No invented client outcomes or affiliations.

## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0008 responsive refinement — 2026-10-18

Below768px increase the single leading services separation after ecosystem to64px. Do not add trailing ecosystem padding.

## C-0010 material and spacing refinement — 2026-10-18

Remove C8 fixed mobile services separation; all major/related section boundaries use shared64–120px leading gap. Local card/intro gaps stay unchanged.


---

## docs/ui/components/foundations.md

# Foundations, spacing, materials and preferences

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/tokens.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

## Global layout and spacing

Use CSS pixels for every measurement in this specification. Generated images have their own pixel sizes. Do not measure a screenshot to recover the CSS values.

| Token or element | Desktop value | Use |
| --- | --- | --- |
| Reference viewport | 1,440 px | Main desktop design reference |
| Content maximum width | 1,200 px | Shared edges for all sections and navigation |
| Outer side margins at reference width | 120 px each | (1,440 - 1,200) / 2 |
| Desktop grid | 12 columns | 78 px columns and 24 px gutters |
| Standard column gap | 24 px | Project and service cards; pathway cards use 32 px |
| Editorial column gap | 48 px | Hero, research, ecosystem, and about |
| Major section separation | 96 px | From the final content edge to the next section's first content edge |
| Closely related section separation | 64 px | Philosophy to pathway; ecosystem to services |
| Section intro to content | 32 px | Below the final introductory paragraph |
| Eyebrow to heading | 12 px | Apply consistently |
| Heading to supporting copy | 16 px | Keep the copy connected to the heading |
| Paragraph to paragraph | 16 px | Do not add empty lines with spacer elements |
| Supporting copy to actions | 24 px | One clear action group |
| Button-to-button gap | 12 px | Do not stretch buttons across unused space |
| Standard card padding | 24 px | Project and service cards; pathway cards use 32 px |
| Large diagram padding | 32 px | Research canvas |
| Hairline | 1 px | Decorative section separators |

Define the 96 px section gap once. Do not place 96 px below one section and another 96 px above the next. Use the same rule for the 64 px related-section gap.

At widths below the maximum container, use available width minus the responsive side gutters. Keep a minimum 24 px gutter on medium layouts. On phones, use 20 px.

## Color, materials, corners, and shadows

| Token | Value | Application |
| --- | --- | --- |
| Page | #F5F5F2 | Continuous page canvas |
| Content surface | #FCFCFA | Opaque cards and diagram cells |
| Primary text | #171922 | Headings and primary labels |
| Secondary text | #505461 | Body text and metadata |
| Accent | #5147D9 | Primary action and important links |
| Pale accent | #ECEBF7 | Selected fill, diagrams, and small icon tiles |
| Decorative separator | #DFE0E5 | Nonessential rules and card outlines |
| Focus | #5147D9 | A 2 px outline, offset 3 px |

Keep the faint border decorative. A control must remain identifiable through its label, shape, or a stronger boundary when needed.

Use a 24 px outer radius for portraits and content cards. For a 24 px outer frame with a 12 px image inset, use a 12 px inner image radius. For a 32 px outer frame and an 8 px inset, use a 24 px inner radius. Calculate nested corners from the inset. Do not give every nested rectangle the same radius.

Use a fully rounded capsule for navigation and buttons. Avoid thick metallic edges and bright rainbow rims.

For the web glass navigation, start with white at 76% opacity, backdrop blur of 24 px, and backdrop saturation of 1.15. Add a 1 px light rim at 65% white. Use a shadow of 0 12 px 32 px at 8% dark ink. These are starting values. Verify the result over the actual content. Increase opacity if labels lose contrast.

Use a quiet content-card shadow only where separation requires it: 0 8 px 24 px at 3% dark ink. Most content cards can use the border alone. Do not animate blur or large shadows while scrolling.

## Motion and interactive behavior

These are proposed runtime values. A static image cannot demonstrate them.

| Interaction | Behavior | Duration | Reduced-motion behavior |
| --- | --- | --- | --- |
| Navigation selection | Move a thin selected fill between current links; preserve labels | 180 ms | Instant state change |
| Button hover | Increase contrast slightly and move arrow 2 px | 120 ms | Color change only |
| Button press | Scale to 0.98 while pressed; restore on release | 90 ms | No scale |
| Project hover | Lift card 3 px; keep the label stable; zoom image to 1.02 | 180 ms | No lift or zoom |
| Work filtering | Fade changed cards with stable reading order; announce result count | 160 ms | Instant result change |
| Research diagram | Reveal connections once after the section becomes visible | 300 ms | All connections visible immediately |
| Anchor navigation | Keep the destination clear of the sticky header | Up to 300 ms | Immediate scroll |
| Contact feedback | Show a clear focus and pressed state | 120 ms | No movement |

Use an ease-out curve such as cubic-bezier(0.2, 0.8, 0.2, 1). Avoid bouncy springs on large text. Do not hide essential content until an entrance animation succeeds. Avoid autoplay carousels, cursor trails, constant shimmer, and scroll-controlled portrait motion.

Use a static, more opaque material if blur is unavailable. Provide reduced motion and reduced transparency behavior where supported. Also provide an explicit appearance option if reliable platform preference detection is unavailable. These web behaviors require deliberate implementation.

## Responsive layout

| Width | Side gutter | Main layout | Type and spacing |
| --- | --- | --- | --- |
| 1,280 px and above | Centered, at least 40 px; 120 px at 1,440 px | Desktop arrangements | Hero 64/68; sections 48/52; major gap 96 |
| 768-1,279 px | 24 px | Hero and research may stack when copy no longer fits; work and services use two columns; pathway uses ordered stacked stages | Hero 48/52; sections 40/44; major gap 72 |
| Below 768 px | 20 px | One column; menu replaces full navigation; text comes before image | Hero 40/44; sections 32/36; body 16/24; major gap 56 |

At 390 px wide, content width is 350 px. Use 20 px card padding and 20 px card gaps. Allow action groups and filters to wrap. Use an accessible filter menu if the full set cannot fit. Do not shrink labels into unreadable pills. Keep 48 px primary controls and at least 44 px link interaction areas.

## Accessibility and implementation acceptance

WCAG text contrast requires at least 4.5:1 for ordinary text and 3:1 for qualifying large text. Measure actual foreground/background combinations, including every glass state. [W3C: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Before release, check keyboard navigation, visible focus, meaningful link labels, heading order, image descriptions, menu operation, filter result announcements, text zoom, and narrow widths. Check reduced motion, reduced transparency, and contrast settings. These checks have not been run against a live implementation in this task.

## Overrides resolved for implementation

Use one 96 px major section gap, 64 px related gap, 24 px ordinary card padding, and 32 px pathway card padding. A section owns its leading margin; do not add equal trailing padding to the previous section. Use 20 px phone gutters, 24 px medium gutters, and at least 40 px desktop gutters, with a 1,200 px maximum container. At 1,440 px the outer margin is 120 px.

Global CSS uses five layers: tokens, base, layout, components, utilities. Import tokens.css then global.css once in BaseLayout; global.css imports scaffold.css and portfolio.css. Unlayered CSS can defeat layered rules. Use minimal scoped layout rules in an existing layer and consume shared tokens. Keep the adapter's existing higher specificity confined to scaffold.css. No !important or overflow masking.

The header stays in normal flow in this scaffold. A future sticky behavior must account for focus, anchors and occlusion. The light palette is authored; do not add automatic dark mode or a font service. --font-accent may use installed Georgia only for approved emphasis words.

Browser policy: current Chromium, Firefox and WebKit. Essential content and native links must work without JavaScript or backdrop-filter. Treat reduced-transparency as optional browser support; html[data-glass="off"] supplies an independent solid mode. Prefer standard grid, flexbox and intrinsic sizing. Do not add a polyfill for materials or nonessential perspective.




## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## C-0005 responsive composition override — 2026-10-18

This latest user customization supersedes earlier blanket 1280 px stacking rules and stepped heading sizes throughout the catalog. Preserve the original arrangement at tablet widths such as 940/1024 px. Do not copy the second screenshot's old card/glass overlay or alter approved content; it illustrates proportional resizing. No page-scale transform, CSS zoom, reduced root font, horizontal clipping or fixed text height.

Use CSS clamp with rem minimum/maximum and viewport interpolation: display 32–64 px (32 at 768,64 at 1440), section 32–48 px, secondary 32–40 px, card headings 20–22 px, body/lead 16–18 px. Keep 14 px captions,12 px eyebrows and existing 44/48 px control heights. Editorial gaps scale 24–48 px, grid gaps 20–24 px, card padding 20–24 px, diagram padding 20–32 px, major section gaps 56–96 px and related gaps 40–64 px. Existing gutters 20/24/minimum 40 px and max 1200 px container remain. Desktop 1440 px geometry stays unchanged.

Hero, research, behavior, ecosystem and About keep their two-column proportions at 768 px and above; below 768 px they stack in reading order with 24 px gap. The hero image fills its column, with no UA figure margin or independent fixed-width limit. About retains portrait left/copy right above 768 px and copy before portrait on phones. Keep the behavior statement open, never a card.

Work keeps its featured 2/then 3 arrangement at 1100 px and above; use two equal columns at 768–1099 px and one below 768 px. Services keep four columns at 1100 px and above, two at 768–1099 px and one below 768 px.

Pathway stays alternating above 896 px. Between 896–1279 px use 48 px track gap,24 px card padding,48 px icon tile and 16 px icon/text gap; retain original type/copy and let height grow. At 1280 px restore 96 px track gap,32 px padding,56 px icon and 24 px icon/text gap. Below 896 px use the existing stacked stages, flat examples, no decorative rail and captions in flow. Preserve compact 02 centering,04 center and 05 attachments.

Reset figure margin-inline to 0 globally; a figure owns no implicit horizontal inset. Preserve image aspect ratios, original intrinsic dimensions and meaningful text equivalents. Contact actions and navigation may wrap before labels shrink. Browser review is still required to verify actual fit and text zoom.

## C-0006 latest visual override

Use the larger heading ranges in [typography-content](typography-content.md#c-0006-heading-hierarchy-override--2026-10-18) instead of the preceding C-0005 type ranges. Layout breakpoints, body/control sizes and reflow rules remain. The user now explicitly requests the behavior statement as a full-height feature card: [behavior](behavior.md#c-0006-full-height-feature-card--2026-10-18) overrides all earlier no-card instructions for that section only.

## C-0007 proportional spacing override — 2026-10-18

This latest user request supersedes previous fixed spacing floors and universal feature viewport height. Keep C6 type sizes,44/48px controls, existing gutters and the1200px content maximum. Preserve C5 column breakpoints. Use one leading gap per section; no additive trailing spacers or clipped overflow.

| Spacing role | Small-screen minimum | Desktop maximum |
| --- | --- | --- |
| Major section separation |32px|96px|
| Related sections, including feature to pathway |24px|64px|
| Editorial columns and phone stack gap |20px|48px|
| Grid gap and standard card padding |16px|24px|
| Diagram/large panel and footer block padding |20px|32px|
| Section-heading trailing gap |24px|32px|
| Hero discipline-strip offset / statement copy offset |24px|40px|
| Pathway row separation |32px|64px|
| Project image inset |8px|12px|
| Project image to title |16px|20px|
| Full-width feature top and bottom padding, equal |24px|64px|

Use rem-bounded fluid interpolation, not whole-page scaling. Keep paragraph gaps16px, small label/heading gaps12/16px and pathway caption clearance40px; these are readable local relationships. Related gaps remain smaller than major gaps. Open Contact uses zero top internal padding after its section leading margin; its bottom gap and footer padding use shared tokens.

The behavior outer card is a normal100%-width section and owns color, rim, radius and vertical padding. Its grid moves to an inner .container.behavior-statement so shared text edges remain aligned. Do not use100vw or negative margins. At1100px and above retain minimum100svh (100vh fallback); below1100px use intrinsic height and no viewport minimum. The user asked for less excess space at smaller sizes; do not restore the mobile viewport-height floor. Body, headings, buttons and content order stay unchanged.

Use the grid spacing token for metadata/tool/action groups where previously fixed24px spacing was used; preserve fixed local text hierarchy and control targets. Project image width subtracts twice its fluid inset and inner radius equals outer radius minus inset. Pathway rails use the same stage-gap token for their continuation, without changing example/card horizontal geometry.

## C-0008 targeted spacing exceptions — 2026-10-18

Keep C7 proportional defaults except the explicitly requested mobile hero48px, research row gap48px, pathway intro64px and ecosystem-to-services64px. Narrow pathway example connectors use40px reserved clearance. Behavior desktop inner margins are40px at1100px+, overriding its shared max1200px alignment only. Contact is now a centered full-width minimum-viewport-height feature with the shared behavior gradient and equal feature padding; this supersedes the former open contact zero-padding rule. Other sections retain shared container and tokens. See affected component contracts.

## C-0009 viewport sizing correction — 2026-10-18

Latest user instruction overrides every full-height behavior/Contact requirement above: both cards size to content at all widths, with equal24–64px inset. Only opening hero targets75svh (75vh fallback), with min-height so content can grow. No other content card has viewport-sized floors. Hero mobile discipline sidebar is the explicitly authorized glass exception; use existing material/preferences, no nested blur. Center mobile work status. Read hero/behavior/about-contact/projects C9 details. Do not reapply older C6–C8 viewport floors.

## C-0010 material and spacing refinement — 2026-10-18

All homepage section boundaries now use one leading --section-space:64px phone floor to120px desktop ceiling, fluid interpolation; --related-space aliases it. This supersedes C7 compact gaps and C8 services exception. No double leading/trailing gap. Footer internal padding and local heading/card gaps remain separate. Content material uses a high-opacity frosted web adaptation, existing blur/opaque preferences and quiet shadow; no literal native lensing or content-layer clear Liquid Glass. See research-C-0010.md for official sources; exact CSS values are custom.

## Pathway grouping PATCH — 2026-10-20

Latest user request supersedes earlier pathway gaps only: use64–96px between complete numbered stages (explanation card, example and description together). Example-to-description gap is16px on stacked layouts and26px on desktop to reserve10px perspective allowance, preserving at least16px projected clearance. Keep callout styling, original copy, card-to-example40px connector gap, centered desktop samples and growing symmetric figure rows. Main website section spacing remains unchanged.

## C-0011 header and hero refinement — 2026-10-20

C11 adds reference mobile header and discipline anatomy, retaining existing spacing/material tokens and accessibility fallbacks. New wrapper is the only blurred discipline surface. Widescreen hero photo matches copy height rather than viewport cap. Keep C9 content-height feature cards and latest pathway spacing PATCH. No change to global section rhythm.


---

## docs/ui/components/hero.md

# Hero, portrait and discipline strip

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/portfolio.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

Use a 576 px text column, a 48 px gap, and a 576 px portrait column. Vertically center the copy against the portrait. Place the hero at least 48 px below the navigation's lower edge.

Use the name as the eyebrow. Keep the existing main idea: “I study behavior. I design with people in mind.” Keep the emphasis on “people.” Use the shorter supporting sentence shown in the concept.

Use a portrait area about 576 px wide by 560 px high, with a 24 px radius. Crop the original asset with the face safely inside the frame. Do not stretch it. Keep all main text outside the picture. A short opaque caption may sit 24 px from the picture's lower and left edges.

Use 48 px action height, 24 px horizontal padding, and a 12 px gap. Put the plain discipline strip 40 px below the hero. Give the strip 24 px vertical padding, two fine internal separators, and no card shadow.

## Composition

Use .portfolio-hero for equal columns, .hero-portrait for the intentional portrait crop, .portrait-caption for an opaque inset caption, and .discipline-strip for the open line of disciplines. The scaffold's original .hero remains a compatible demonstration. Do not replace source portraits with generated approximations. Use 12 px eyebrow-to-heading, 16 px heading-to-copy, 24 px copy-to-actions and 12 px action gaps. Keep one H1 and no overlaid hero paragraph. Preserve the approved short hero copy when portfolio implementation begins.

## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## Source media and copy

Use the original hero WebP at /images/hero/juan-hero-v2.webp with actual intrinsic 1586×992 dimensions and object-position 70% center inside the approved crop. Supporting copy: “Behavior research, thoughtful design, and digital systems built around people.” Caption: “Observe. Understand. Build.” Discipline labels: Behavior research; Digital experiences; Data & context. These copy details follow the approved concept.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0008 responsive refinement — 2026-10-18

Below768px use48px hero top margin below navigation. Keep discipline strip in three equal centered columns, with16px horizontal cell padding and separators. Each label may wrap naturally; keep body type and no clipped/forced single-line text.

## C-0009 latest sizing and hero authority — 2026-10-18

Latest screenshot2 refers to hero text. At all widths .portfolio-introduction targets75svh (75vh fallback) via min-block-size, growing for long/enlarged content. No fixed height or clipping. Keep copy and portrait columns above768px and plain horizontal discipline strip below. Move existing list between text and portrait in source; below768px place it beside the text in a vertical glass sidebar,104px minimum narrow track,12px gap. Portrait spans both columns beneath. Use24px corners,16px inset/row gap, existing76%white24px blur tokens with solid/reduced-transparency/forced-color/print fallbacks. Preserve copy, type, controls and original image. Portrait max45svh above768px; compact128–192px height below,18svh preferred. This supersedes C8 mobile horizontal row and previous unrestricted portrait height.

C9 accessibility fallback: .portfolio-introduction is an inline-size query container. Below14rem available width, stack copy, vertical glass list and portrait in that order. This protects enlarged text without shrinking controls; normal320px phones retain the sidebar.

## C-0010 material and spacing refinement — 2026-10-18

Mobile discipline card adopts a restrained standard-material-inspired frosted surface with24px radius,16px inset/gap, pale rim and quiet shadow. Keep vertical labels beside copy and C9 enlarged-text stacking fallback. Use existing preference-aware glass tokens, no nested blur. Set mobile hero object-position70%12% rather than center vertically so hair/face remain visible in the compact frame; preserve original image, dimensions and caption.

C10 image framing replaces the earlier128–192px mobile crop with a2:1 fluid landscape frame. Keep face source region approximately y110–400 of992 visible above the lower-left caption; verify actual rendered crop and caption overlap at phone widths.

## C-0011 header and hero refinement — 2026-10-20

At768px+ the right portrait matches the complete hero-copy row height, including actions. Figure stretches, image is absolute cover filling row; no45svh cap or intrinsic-image row inflation. Keep mobile2:1/70%12% face-safe crop and source asset/caption. New discipline-panel wrapper owns mobile frosted card; discipline-emblem is decorative circular32px eye above original3 labels; each row has8px indigo dot/4px halo,16px row gap/type,12px inset and24px corners. List has no nested material. Desktop wrapper display:contents, emblem hidden, plain strip spans row2. Below14rem container fallback stacks wrapper, not list alone. Respect material/print/preferences and maintain content growth.


---

## docs/ui/components/media-diagrams.md

# Images, captions, icons and diagrams

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/global.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

## Media

Use real source portraits/project screenshots in production. Supply intrinsic dimensions and useful alt text; decorative media uses empty alt. .media-frame displays full intrinsic media; .media-frame.crop uses intentional 16:9 cover cropping with a known focal point. Keep focusable content out of aria-hidden areas. Load the main visual promptly and lazy-load below-fold media. No external fonts or new animation assets are required.

Portrait/content frames use 24 px corners. A project image inset by 12 px inside a 24 px frame uses 12 px inner corners. Do not stack equal radii at every inset. Ordinary figure captions use 16 px separation, 14/20 px type and readable secondary color. Pathway captions override this with the larger 40 px clearance.

Use 16–24 px control icons and 32 px service icons. Pathway icon tiles are 56 px on desktop and 40 px on phones. Use a consistent stroke and currentColor for meaningful state. Icon targets still need an accessible name and 44 px area. Decorative arrows/rails are hidden from assistive technology and never carry the only meaning.

Use HTML/SVG for exact diagram labels and data. A diagram must have a concise text equivalent; numerical charts also need a data table. Keep the approved research structure and no fabricated statistics. Website examples are illustrations: label proposed interaction studies and the evaluation plan. Do not imply pictured controls are functional.

The reference PNG under reference/ is an approximate design artifact, not a production page image or source of copy. The written specifications and exact text override raster artifacts.



## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0010 material and spacing refinement — 2026-10-18

About mobile portrait uses natural ratio and full container width; hero mobile focal point is70%12% to preserve hair/face. Pathway figcaptions are associated frosted callouts in growing layout, minimum40px clearance. Keep intrinsic dimensions and semantic captions; no screenshot as page background.

## Pathway grouping PATCH — 2026-10-20

Latest user request supersedes earlier pathway gaps only: use64–96px between complete numbered stages (explanation card, example and description together). Example-to-description gap is16px on stacked layouts and26px on desktop to reserve10px perspective allowance, preserving at least16px projected clearance. Keep callout styling, original copy, card-to-example40px connector gap, centered desktop samples and growing symmetric figure rows. Main website section spacing remains unchanged.


---

## docs/ui/components/pathway.md

# Five-stage pathway, examples and locked copy

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/portfolio.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

## 4. Revised pathway: researched simplification

This section supersedes version 2's full-page dissection composition. See pathway-research.md for the 23-site review and evidence limits. The following values are project recommendations, not measurements copied from those websites.

### 4.1 Section identity

Keep the eyebrow “ABA-INFORMED DESIGN PATHWAY”, the heading “From observation to useful change.”, and the supporting sentence “Behavioral ideas are translated into everyday design decisions. Technical terms appear only where they add precision.”

Center the intro within 800 px. Use 12 px from eyebrow to heading, a 40/44 px heading, 16 px before supporting copy, and 48 px before the first stage.

Keep the original card order: 01 left, 02 right, 03 left, 04 right, 05 left. Keep all original words and the original icon-left internal layout. The simplification changes evidence presentation, not the original copy.

### 4.2 Visual hierarchy and geometry

The main card is primary, the interface crop is secondary, and the rail is background structure. Show one crop, one target, and one short annotation per stage. Remove full website screenshots, repeated navigation, portraits inside previews, browser frames, confetti, and three-subpoint caption strips. Keep added research notes at one source/details destination below the section.

Do not overlap cards or crops. The current clutter correction overrides version 2's overlapping background planes. Only one target receives strong indigo emphasis in a viewport. Keep all original body text at full contrast.

Use the existing 1,200 px container with 120 px side margins at a 1,440 px viewport. Coordinates are relative to that container.

| Element | Odd stages 01, 03, 05 | Even stages 02, 04 |
| --- | --- | --- |
| Main card | x=0; width 552 px | x=648; width 552 px |
| Supporting crop | Centered in the right 552 px track | Centered in the left 552 px track |
| Crop height | 160-240 px | 160-240 px |
| Track gap | 96 px; 156 px card-to-default-crop edge distance | Same |
| Main card height | 352 px minimum; grow for text | Same |
| Stage height | 400 px minimum; grow for text | Same |
| Gap between stages | 64 px | 64 px |
| Quiet sequence rail | x=600 | x=600 |

Center each crop against its card's body region. Keep at least 32 px clearance to unrelated content. Five minimum rows plus four gaps use 2,256 px. Intro and source/footer space are additional. Do not shrink the original type to force a shorter section.

### 4.3 Original internal card layout

Use the original icon on the left and the original text stack on the right. Do not move the icon above the title. Do not place the stage number inside the text stack.

Each card uses 32 px padding. Use a 56 × 56 px icon tile, a 24 px icon-to-text gap, and a flexible text column. At 552 px card width, the text column is 408 px: 552 - 64 padding - 56 icon - 24 gap. Align the icon tile vertically with the body region, as in the original. Keep the text stack top aligned.

Keep the small numbered badge attached to the upper-left card edge. Use a 40 px badge and a 12 px outward offset. Maintain the same badge corner on even cards; do not mirror their internal layout.

Text stack order: technical eyebrow, title, explanatory paragraph, design implication. Use 12/16 px uppercase eyebrow, 22/28 px title, 16/24 px body, and 14/22 px implication. Use 8 px between eyebrow and title, 12 px before the body, and 16 px before the implication. Use a 24 px card radius and a 16 px icon-tile radius. Use consistent 1.5 px line icons: eye, signpost, steps, shield-check, and measurement chart.

The card surface is #FCFCFA at 98% opacity over a quiet backdrop, with a 1 px #DFE0E5 rim. Use the quiet content shadow already defined. Keep the surface readable without backdrop blur. This is a standard-material content treatment, not repeated clear Liquid Glass.



For version 3, prefer opaque #FCFCFA cards and no shadow. Use the existing quiet 3% content shadow only when required for separation. Do not add lensing or thick glass edges to these content cards.

### 4.4 Focused crops and mirrored perspective

Use a component-level crop that proves the card's point. Do not include a separate website shell. Use a 16 px maximum outer radius and a 1 px neutral boundary, with no decorative shadow. Keep the controls identifiable. Glass can appear on an illustrated functional control, not on the entire crop surface.

Retain the user's mirrored perspective preference at a smaller scale. Odd crops use rotateY(-4deg) and rotateZ(1deg). Even crops use rotateY(4deg) and rotateZ(-1deg). Use 1,600 px perspective and rotateX(0deg). These are maximum values. Use a flat crop when that is clearer. Never mirror text or use scaleX(-1). Main cards stay flat.

### 4.5 One connector system

Use one straight vertical rail at x=600, with a 1 px #D9D8E9 stroke. Begin near the first stage and end near the last. Do not extend it through large empty areas.

Each stage has one local horizontal branch to its target. Keep the target near the crop edge facing the card, so the branch is approximately 120-180 px long. Use a 1.5 px stroke and a 6 px outlined target ring. Inactive branches stay neutral; the active branch may use indigo.

The rail and its branches are one system. No winding vine, arrow chain, curved route, or second sequence spine is permitted. Do not duplicate numbers on the rail: the original badges provide the count. Keep lines outside paragraphs and control labels. Place targets after transforms and recalculate them on resize. If the branch is too long, adjust the crop framing instead of crossing other content.

### 4.6 Five-stage storyboard

| Stage | Focused crop | Single annotation | State label |
| --- | --- | --- | --- |
| 01 | Hero headline and primary action; no portrait or global navigation | One clear next action | None |
| 02 | Selected-work filter and selected state; no project screenshots | A recognizable selected state | None |
| 03 | Proposed Project / Details / Review stepper and optional help | Help at the relevant step | Interaction study |
| 04 | Proposed confirmation component with small check and return action | A clear completion state | Interaction study |
| 05 | Proposed user-defined task goal and observation criteria | Success defined with users | Evaluation plan |

Use 14/20 px annotations with at most eight words. Use 12/16 px proposed-state labels. Do not add extra pills or repeated explanatory prose. Do not claim that a pictured message was sent or a test was completed. No invented numerical results are permitted.


Revision 3.1 detail rules: Use 40 px from the lowest transformed edge of each example to the top of its external caption group. Keep 12 px between a state label and the following annotation. Place all captions outside the example frame, including stage 05. Keep captions aligned to the example's left edge. These values override earlier local caption gaps.

For stage 02, show only the All work / Commerce / Research controls and their divider. Do not repeat “Selected work” inside the crop. For stage 04, center the check icon, “Message sent” heading, and return link on one horizontal center axis. Stack them vertically with 16 px gaps and balanced panel padding. This changes the example only; the main process card retains its icon-left/text-right layout.

For stage 05, join the branch directly to the main-card border and the facing example border. Center the endpoint ring on the example border. Join the vertical rail to the branch without a gap, and terminate it at that junction without a dangling tail. Resolve anchors after the example transform.


Revision 3.2 stage 02 exception: Size the filter example to its content. Use approximately 20 px vertical and 24 px horizontal padding around the readable tab row, with a maximum width near 390 px. Remove the divider and unused lower area. This compact example is exempt from the general 160–240 px crop-height range. Center its frame horizontally in its column and vertically against its paired process card. Keep the caption outside with the 40 px gap. Recalculate the connector after resizing. Do not reduce the tab font size to make the frame smaller.

### 4.7 Research transfer

Mike De Bastiani supplies the scan-versus-depth model. Paco Coursey supplies a common axis. Emil Kowalski and Clerk supply focused component demonstration. Josh Comeau and Maxime Heckel supply incremental explanation. Spline supplies a named sequence. Product pages such as Linear, Resend, and Framer supply repeated explanation/evidence structure.

These are selective lessons, not a license to combine every effect. See pathway-research.md for all 23 websites, evidence types, and rejected patterns.

## 5. Locked original pathway copy

The source is page 2 of the original portfolio capture. OCR was checked against the visual page. Keep wording, spelling, punctuation, and capitalization. Line wrapping may adapt to width. Preserve the original internal hierarchy described above.

### 01

Technical eyebrow: STIMULUS SALIENCE AND ATTENDING

Title: Make What Matters Easy to Notice

Body: Visual hierarchy, contrast, and placement make task-relevant information easier to distinguish from supporting detail. The most useful next action should stand out without competing unnecessarily for attention.

Design implication: prioritize the next useful action, then layer in supporting detail.

### 02

Technical eyebrow: DISCRIMINATIVE STIMULI

Title: Use Clear Cues for Action

Body: Labels, controls, and interface states should signal which actions are available and which are likely to work. Consistent cues reduce guesswork and help people move through a system with greater confidence.

Design implication: use stable labels, recognizable controls, and predictable states.

### 03

Technical eyebrow: TASK ANALYSIS, PROMPTING, AND FADING

Title: Support Progress in Manageable Steps

Body: Complex tasks become more approachable when they are divided into meaningful steps and supported at the moment help is needed. That assistance should gradually recede as the person becomes more capable of completing the task independently.

Design implication: sequence difficult tasks, provide timely guidance, and fade support when it is no longer needed.

### 04

Technical eyebrow: CONSEQUENCES AND REINFORCEMENT

Title: Make Outcomes Clear and Consistent

Body: Immediate, accurate feedback helps people determine whether an action worked. A consequence functions as reinforcement only when it makes the behavior it follows more likely to occur again.

Design implication: confirm outcomes, preserve progress, and make effective actions easy to repeat.

### 05

Technical eyebrow: SOCIAL VALIDITY AND DATA-BASED DECISIONS

Title: Measure Meaningful Outcomes

Body: A useful system should be evaluated by outcomes that matter to the people using it. Measure whether important tasks become more successful, efficient, or independent, identify barriers, and revise the environment when results fall short.

Design implication: define observable success with users and let the results guide refinement.

## 6. Research basis for each stage

These sources support design decisions. The website mapping is a design inference. It does not show that clinical learning results automatically transfer to portfolio visitors.

| Stage | Research or official source | Supported point | Application and limit |
| --- | --- | --- | --- |
| 01 | W3C, Make the Purpose of Your Page Clear [R1] | Descriptive headings and clear signposts help identify context | Make the hero hierarchy and primary action visible. Confirm effectiveness with users |
| 02 | W3C, Use a Consistent Visual Design [R2]; Understandable objective [R3] | Repeated controls, states, and relationships should remain recognizable | Connect the active work tab to its visible result. Calling it a cue is appropriate. Calling it a demonstrated discriminative stimulus requires evidence of a learning history |
| 03 | W3C, Multi-page Forms [R4]; primary experiment on transfer of stimulus control [R5] | Logical form stages can show progress. Prompt removal is a separate learning procedure | Use optional help and preserve progress. Offer reduced default help as an option. Do not remove help solely because time passed or an animation finished |
| 04 | W3C, User Notification [R6] | People need clear success and error information | Show completion and recovery. A pleasant confirmation is feedback. It is not established as reinforcement unless later behavior shows that function |
| 05 | Wolf's original social-validity work [R7]; original study gathering autistic adults' input [R8] | User judgments of goals, procedures, and outcomes matter | Define successful tasks with users. Collect acceptability and clarity feedback, not clicks alone. Do not present the illustrative evaluation plan as collected results |

### Suggested observation measures

For stage 01, observe whether a visitor can identify the main action. For stage 02, check whether the visitor predicts the filter result. For stage 03, record independent task completion, help requests, and errors. For stage 04, check whether the visitor can identify success and recover from an error. For stage 05, ask whether the goal and procedure are useful and acceptable to the visitor. These are proposed evaluation tasks. They are not measured findings.



## Implementation geometry resolution

Use a two-column grid of equal 552 px tracks with a 96 px gap inside 1,200 px. The main-card positions remain x=0 and x=648; the rail stays x=600. Center each 432 px default example within its opposite track. Center the compact stage 02 frame in that track and vertically against the main card, excluding its external caption. This explicit centering supersedes earlier asymmetric crop offsets and the earlier 120 px edge-gap statement.

Stage 02 uses a fit-content filter frame, about 390 px maximum width, 20 px vertical/24 px horizontal padding, no divider and no empty lower panel. Keep All work / Commerce / Research at readable size and keep the selected state. Do not repeat Selected work. The default 160–240 px example-height range does not apply to this compact row.

Stage 04 centers check icon, Message sent and return link in one vertical stack with 16 px gaps. Stage 05's branch touches both panel borders; its endpoint ring lies on the example border. The rail ends at that branch without a tail. Preserve all original main-card text and icon-left/text-right layout.

Use .pathway-list, .pathway-stage, .pathway-card, .pathway-icon, .pathway-copy, .pathway-badge, .pathway-evidence, .example-plane and .pathway-caption. Stage 02 adds .pathway-stage--compact and .filter-example. .confirmation-example centers the stage 04 contents. Pure CSS branches attach to example-frame anchors. If a future callout must target a different internal control, define and test its measured SVG anchor after transforms; do not guess offsets or add a runtime library.

Desktop captions are external and do not shift the example's center. Reserve 50 px beyond the untransformed frame for at least 40 px clearance at the approved small twist. On narrow screens, return captions to document flow with a 40 px gap. Use a static flat figure when perspective is not supported. Main content remains visible without motion.

Below 1,280 px, stack each main card before its example with 24 px separation and 64 px between stages; remove long leaders, the central rail and all example transforms. On phones use 20 px card padding, 40 px icon, 16 px icon/text gap, 16/24 px body and growing height. Do not reduce the source copy.




## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## Unsupported geometry fallback

If container-relative lengths are unsupported, hide the decorative rail, branches and target rings and remove example transforms. Keep every card, figure and caption readable. Never draw a known detached connector with guessed viewport offsets. Current supported browsers use the container-unit branch geometry.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0008 responsive refinement — 2026-10-18

Below768px use64px between intro copy and first stage. Below896px use40px card-to-example gap and an attached vertical downward connector, centered on example frame; this replaces the hidden-connector mobile rule only. Keep desktop rail/branches, locked copy, compact02, flat mobile examples and40px external caption clearance. Print hides decorative connectors.

## C-0010 material and spacing refinement — 2026-10-18

Captions are now distinctive16px-radius frosted content-material callouts,16px inset and8px internal gaps. Preserve original state/annotation plus small Example01–05 label tying each callout to its own figure. Add decorative pointer; no interactive styling or nested blur. Keep original example/card geometry and40px projected caption clearance. At896px+ use symmetric1fr auto1fr figure rows: example middle, callout bottom, equal reserved top space; captions in flow and stages grow for long text. This keeps sample centered against main card and branch at frame midpoint. Below896px display normal block flow with40px caption margin and existing card/example arrow. Keep compact02 frame,04 centered contents,05 attachments. This replaces absolute caption positioning, not locked card text.

## Pathway grouping PATCH — 2026-10-20

Latest user request supersedes earlier pathway gaps only: use64–96px between complete numbered stages (explanation card, example and description together). Example-to-description gap is16px on stacked layouts and26px on desktop to reserve10px perspective allowance, preserving at least16px projected clearance. Keep callout styling, original copy, card-to-example40px connector gap, centered desktop samples and growing symmetric figure rows. Main website section spacing remains unchanged.


---

## docs/ui/components/projects.md

# Selected work, filters and project cards

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/portfolio.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

Retain the existing eight-project inventory. Use two featured cards in row one, then three cards in each of rows two and three. Use 24 px horizontal gaps and 32 px row gaps. Featured cards are 588 px wide. Smaller cards are 384 px wide.

Use a 16:9 image ratio. Inset images by 12 px. Use 24 px padding for text. Use 20 px between image and title, 8 px between title and metadata, 12 px before the description, and 20 px before the case-study link.

Keep titles, descriptions, and action rows aligned within a row. Permit text to determine row height. Do not truncate a project name to force equal height.

The project inventory is SIS Asphalt, VX Nexus, World Cup Items, AI Misattribution, Sharper Image Services, SIS Florida, PantherNOW Operations, and ABA Data Visualization System. Keep the final project's “In development” status visible and use “View concept” for its action.

Put filters 24 px below the section intro and 24 px above the project grid. Use one 52 px outer glass control with 4 px padding and 44 px inner tabs. The active tab uses a simple fill within that single material layer. All work is the default. A filtered view must provide a visible result count and a clear reset action. These are implementation states, not visible in the static default view.

Use actual source screenshots in production. The concept thumbnails are visual approximations. In particular, small dashboard numbers in generated previews are illustrative interface detail, not validated project metrics.

## Card anatomy and behavior

Use article or list-item cards: intentional 16:9 media, title, category/status, concise description and named case-study link. Use .project-card--featured on the first two cards. At medium widths use two columns; below 768 px use one. Keep DOM order. Do not use dense grid packing or whole-card duplicate focus targets. Selected filters have a text/shape cue as well as color, reset access and an announced result count when filtering is later implemented. In development is a real text status, with View concept rather than a false case-study destination. Missing thumbnails retain readable card content.

## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## C-0004 filter implementation

Use All work, Client systems, Commerce and Research as filter labels. The selected category is exposed with aria-pressed and an underlined fill. Show a polite visible result count and Show all work reset after filtering. Keep keyboard focus on the activating filter; reset returns focus to All work. Native buttons have 44px targets, result status has 24px before the grid. Hide controls until JavaScript initializes; all eight articles remain visible without script. Unknown filter values safely restore all items. Preserve original source order; do not use dense grid packing. Keep article hidden states effective over component display rules.

The visible result-count row belongs to the filter group. Keep 24px between filter capsule and status, and 24px from status to the grid. Keep 24px from the introduction final paragraph to the capsule; remove the generic 32px SectionHeading trailing margin in this context. The no-script view omits the entire filter group and retains the standard 32px intro-to-grid gap.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0008 responsive refinement — 2026-10-18

Below768px center the filter capsule using automatic inline margins and center wrapped filter rows. Preserve button targets, labels, selected states, result count and reset behavior.

## C-0009 latest sizing and hero authority — 2026-10-18

Below768px center .work-filter-status with justify-content:center and text-align:center, including default8-of8 count and filtered reset row. Keep polite live region, exact text, targets and controls.


---

## docs/ui/components/research.md

# Research spotlight and study diagram

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/portfolio.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

Use two equal 576 px columns with a 48 px gap. The left side contains the title, the question, a concise summary, study metadata, and actions. The right side contains the diagram. Do not enclose both in a second large card.

Use a 576 px diagram width, 32 px padding, and a 24 px outer radius. Use a single shared transcript node above three label-condition cells. Use 16 px gaps between cells and 32 px between diagram levels. Treat the diagram as opaque content.

Keep the reported sample size of 123, three label conditions, and one shared transcript. Do not imply that the site measured new effects. Do not add invented percentages, significance levels, or effect sizes. The generated diagram explains the study structure; it does not provide numerical results.

Give the metadata strip a 24 px top margin and 24 px bottom margin. Use 16 px internal gaps. Place tools below as simple labels. Keep only one primary research action.

## Semantics and states

Use a figure with a text description of the shared-transcript/three-label structure. Diagram cells remain HTML or SVG with readable labels; do not use a raster for exact text. Provide a semantic data table for quantitative data if a future chart is added. Use real study material and retain the stated N=123 only for that study. Label illustrative examples. When source material is unavailable, show an honest unavailable state and retain context.

## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## Current responsive authority

Apply the C-0005 responsive composition override in [foundations](foundations.md#c-0005-responsive-composition-override--2026-10-18). Its fluid tokens and section-specific breakpoints supersede earlier fixed medium sizes and stacking thresholds in this file. Preserve all other element anatomy, copy and accessibility requirements.

## C-0008 responsive refinement — 2026-10-18

Below768px set the research text-to-diagram grid row gap to48px. Keep intrinsic diagram height,20–32px panel padding and original study conditions.


---

## docs/ui/components/shell.md

# Navigation, footer and route shell

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/scaffold.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

## Navigation

At the desktop reference, use a 1,200 px wide, 64 px high navigation capsule. Place it 24 px from the viewport top. Use 24 px horizontal internal padding and 8 px vertical padding.

Use three layout areas: logo, centered navigation, and Contact. Keep the first and final layout tracks equal so the center group stays centered. Do not center the link group in only the remaining space after the logo.

Give each link a minimum 44 px interaction height. Use a 20 px gap between link areas. Contact is 48 px high with 24 px horizontal padding. If the full group no longer fits, switch to the menu layout.

Keep sticky content clear of the navigation. For anchor destinations, allow at least 112 px of scroll clearance. The current-section state must have a shape or underline as well as color.

## Footer and route shell

BaseLayout retains language, title, description, canonical/noindex, Open Graph, favicon, skip link and focusable main target. Use the paper color for theme-color. Route contracts and base-aware URLs stay unchanged. Header/footer are shared shell components, not per-page copies.

The footer has a 1 px upper rule, 32 px vertical padding, at least 24 px between links and 44 px standalone link targets. Preserve the mark, Resume, Privacy, LinkedIn and Email when the actual portfolio replaces placeholders. Do not invent missing destination URLs.

At phone widths the wrapping navigation may reduce its link gap to 4 px; desktop uses the required 20 px gap. Below the full-navigation fit width, keep the scaffold's accessible wrapping native links. A future menu requires an explicit behavior contract and no-script access. The full-size header uses equal outside tracks to center the navigation independently of logo/contact widths. Its 64 px height is a minimum; allow growth for long labels and text zoom.

Keep /system/ as a style reference and /404.html as a noindex page with one heading and a clear return action. These do not establish future portfolio route architecture. Check all three current routes and both hosting bases after shell edits.




## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## C-0004 native mobile navigation

At widths below 1280px, replace the full link row with a native details/summary disclosure labeled Menu. Keep one Primary nav landmark, containing mutually exclusive desktop and mobile link lists. The mobile disclosure starts closed, expands in normal flow, supports native Enter/Space and no JavaScript, and has no modal overlay or focus trap. Its summary and links have at least 44px targets; use the existing capsule header and 20px link gap. Keep Contact visible outside the disclosure. Allow header wrapping at enlarged text; never force its height or overlap brand and controls. At desktop the equal outside tracks keep the link group centered. Do not claim native details supports Escape dismissal; no such behavior is implemented.

## C-0011 header and hero refinement — 2026-10-20

Below1280px mobile header reference overrides former visible Menu text/external Contact: rounded32px frosted header,16px padding,80px minimum,28px logo,48px summary target with two horizontal32px lines. Accessible hidden Menu label. Contact appears inside expanded list, external header Contact hidden. Keep native details/summary/keyboard/no-script, in-flow full-width links and visible focus; one Primary nav landmark. Logo and summary remain at top when open. Desktop1280px+ stays unchanged.


---

## docs/ui/components/typography-content.md

# Typography and text elements

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/global.css`. C-0004 implements these portfolio elements as semantic homepage components. Browser evidence remains separate from the written requirements.

## Typography

Use the system font stack with the local Apple system font where available. Use Inter as an optional project fallback. Keep the serif accent to a few existing emphasis words. Do not use italic display text for long paragraphs.

| Role | Desktop size / line height | Weight | Notes |
| --- | --- | --- | --- |
| Hero heading | 64 / 68 px | 650-700 | Maximum width 640 px; natural line breaks |
| Major section heading | 48 / 52 px | 650-700 | Maximum width 800 px |
| Secondary section heading | 40 / 44 px | 650 | Pathway and services |
| Card heading | 22 / 28 px | 600-650 | Permit two or three lines when needed |
| Body | 18 / 28 px | 400 | Paragraph width 56-65 characters |
| Card body | 16 / 24 px | 400 | Short descriptions |
| Metadata and navigation | 14 / 20 px | 500 | Keep essential information readable |
| Eyebrow | 12 / 16 px | 650 | Letter spacing 0.12 em; short labels only |
| Button | 15 / 20 px | 600 | Use one size across the page |

Avoid negative letter spacing that joins letters at small sizes. Use about -0.035 em only for the largest display heading. Use -0.02 em for section headings and normal tracking for body copy.

## Text and document elements

Use one meaningful h1 per route. Use h2 for major sections, h3 for cards and h4/h5/h6 for actual subordinate structure: 20/28, 18/28 and 16/24 px respectively. A visual size does not determine the semantic heading level. Body is 18/28 px on desktop and 16/24 px on phones; card body remains 16/24 px. Lead is 18/28 px. Caption/navigation/help is 14/20 px. Use 12/16 px short uppercase eyebrows.

Use .prose for long text: 16 px paragraph gaps, 32 px before a new heading, 12 px from that heading to text. Lists keep their markers, 24 px indentation and 8 px item gaps. Definition descriptions indent 24 px. Quotes use a 3 px accent edge and 24 px inset. Code uses the system monospace family, 16 px block padding, 12 px corners and local horizontal scrolling. Quotes, code, tables and figures have 24 px separation from adjacent prose. Inline links stay underlined and can retain inline targets.

Use strong/em for meaning. The .display em accent uses restrained installed serif italic; do not apply it to long text or technical labels. Dates, abbreviations, captions, superscripts and subscripts inherit readable native semantics. Do not clamp essential text or fix text heights. The approved warm first-person portfolio voice and exact locked pathway wording remain intact.




## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## C-0006 heading hierarchy override — 2026-10-18

Latest screenshot comparison authorizes larger heading occupancy across all sections. Replace the C-0005 heading ranges with display36–72px, major36–54px, secondary36–45px and card22–26px. h4/h5/h6 use22/20/18px with their existing readable line-height ratios. Use rem-based clamp bounds and viewport interpolation; keep body16–18px, captions14px, eyebrows12px and controls44/48px unchanged. Display/major/secondary increases are approximately12.5%; do not claim recovery of the original website CSS from image pixels. Preserve semantic H1–H6 roles and let content wrap/grow. This override applies to hero, research, behavior, pathway, projects, ecosystem, services, About/Contact and shared style reference. C-0005 layout breakpoints remain.
