# Cross-page spacing and frosted-material audit

C-0018,2026-10-30. Homepage is the master; all17 migrated routes and system/404 reuse its semantic roles. CSS sizes below are project rules, not Apple-mandated web measurements.

## Category and ownership map

| Between/inside elements | Mobile → desktop | Owner |
| --- | --- | --- |
| Page sides |20 /24 /40px minimum |Shared container width, automatic side margins |
| Major sections |64–120px |Next section leading margin only |
| Heading group → components |24–32px |Heading trailing margin OR next grid leading margin, never both |
| Editorial columns/stack |20–48px |Parent grid gap; homepage Research phone48px exception |
| Cards in a grid |16–24px |Parent gap; direct child block margins zero |
| Ordinary card edge → content |16–24px all sides |Card padding |
| Large diagram/feature panel edge |20–32px all sides |Panel padding |
| Full-width Behavior/Contact feature |24–64px top AND bottom |Outer shell padding, inner shell zero block padding |
| Eyebrow → heading |12px |Following heading margin |
| Heading → paragraph/list |16px |Following content margin |
| Paragraphs |16px |Following paragraph margin |
| Copy → actions |24px |Action group leading margin; no simultaneous parent gap |
| Buttons within action group |12px |Flex gap |
| Field label → input / field groups |8px /24px |Grid gaps; child margins zero |
| List indentation / list rows |24px /8px |Inline padding / following row margin; grid lists use gap instead |
| Project image → title/body |16–20px |Body top padding; image has no bottom margin |
| Project image inset |8–12px |Image top/side margin only |
| Project title → meta → description |8px /12px |Leading margins |
| Metadata label → value |8px |Value leading margin |
| Metadata separator |16px each side |Row block padding, parent gap0; no outside first/last inset |
| Diagram levels / cells / caption |32 /16 /24px |Flow grid gap / cell grid gap / caption leading margin |
| Pathway complete groups |64–96px |List gap |
| Pathway explanation → example |40px stacked |Stage gap, occupied by arrow |
| Example → callout |16px stacked /26px wide |Callout leading margin |
| Pathway local heading/body |8 /12px |Approved homepage compact-copy exception |

Alignment exceptions: pathway icon48px top offset positions the icon beside its text within the SAME grid row; it does not add to a row gap. Flexible auto margins bottom-align service/project actions; they are not a fixed second spacing rule. Separator spacing is explicitly two-sided. Grid/flex lists must clear generic sibling margins.

## Findings and corrections

- Homepage ecosystem heading retained its24–32px trailing margin inside a20–48px grid gap: removed the heading margin; the parent now owns the distance.
- Research index action combined16px parent gap and8px child margin: copy uses flow margins, with a single24px action margin.
- Shared homepage research lists had two-sided margins: converted to16px leading-only rhythm, keeping actions24px after tools.
- Work index media/card padding and title margin accumulated; image top/side inset and body top padding now match homepage roles. Actions share bottom alignment.
- Detail ordinary cards drifted to the larger20–32px panel inset: restored16–24px while keeping genuine feature/diagram panels20–32px.
- Detail section descriptions used24px versus homepage16px; standardized16px. Prose heading-body12px changed to16px.
- Metadata used a16px parent gap plus16px lower padding. Rows now own symmetric separator padding; no parent gap or hidden outside insets.
- Contact forms/action panels/research asides explicitly clear child block margins where their parent owns gaps. First prose children have no extra leading margin.
- Existing material specs required solid content despite the requested frosting. Current primary and all13 component contracts now specify two translucent tiers and accessibility fallbacks.

## Apple and modern CSS comparison

[Apple Materials](https://developer.apple.com/design/human-interface-guidelines/materials) separates Liquid Glass navigation/controls from standard content materials and advises restraint. The site therefore gives navigation a stronger24px blur/60%-white fill, and content cards a quieter18px blur/70%-white fill. Nested data/source surfaces remain unblurred. This is a web interpretation, not native refraction.

[Apple Layout](https://developer.apple.com/design/human-interface-guidelines/layout) calls for consistent alignment and layouts that adapt across sizes. We retain the homepage gutters, shared bounded fluid tokens and natural text growth. Native platform-specific point tables are not copied into browser CSS.

[Apple adoption guidance](https://developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass) calls for testing accessibility/display settings and avoiding layered glass. Both material tiers resolve to solid surfaces with no blur/shadow for glass-off, reduced transparency, increased contrast, forced colors and print.

[MDN box model](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model/Introduction), [margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model/Margin_collapsing) and [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/gap) distinguish edge insets, external margins and layout gutters. We assign one spacing owner per relationship; grid/flex gaps do not collapse with margins. Margin and padding can validly coexist when they represent different relationships, such as a section's outside separation and its internal inset.

[MDN backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) explains why a transparent background is necessary to see backdrop blur. Actual rgba fills replace opaque card backgrounds; foreground text remains fully opaque. Subtle static indigo page washes make the material visible without moving decoration.

Research also used modern-web-guidance css-layout recommendations for intrinsic grid/flex layout. No new CSS framework or runtime dependency.

## Verification

See [C-0018 evidence](../verification/C-0018.md). Source inspection covers every route and current component contract; rendered geometry checks cover all20 routes at phone/desktop widths. Distinguish measured results from physical-device/accessibility tests not performed.
