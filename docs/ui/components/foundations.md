# Foundations, spacing, materials and preferences

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/tokens.css`. Version 5.5, 2026-10-30. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## Layout and spacing

Dimensions are CSS px at the default16px root; do not fix the root size. Tokens use rem bounds and viewport interpolation. Keep text/controls readable, allow intrinsic growth and use normal flow. No whole-page scaling, clipped overflow, negative-gap workaround or fixed text height.

| Role / token | Current rule |
| --- | --- |
| Content container / reference | max1200px /1440px viewport |
| Side gutters |20px below768;24px at768–1279; minimum40px at1280+ |
| All main section boundaries: section-space / related-space | one leading64–120px fluid gap; related aliases section |
| Editorial columns / narrow stack |20–48px fluid |
| Ordinary grid gap / card inset |16–24px fluid |
| Large panel / footer block padding |20–32px fluid |
| Heading trailing gap |24–32px fluid |
| Eyebrow → heading / heading → body / paragraph gap |12 /16 /16px |
| Copy → action / action group gap |24 /12px |
| Behavior feature top and bottom inset |equal24–64px; zero colored-shell inline padding |
| Intro strip / behavior supporting-copy offset |24–40px fluid |
| Pathway group separation |64–96px fluid; includes card, example and callout as one group |
| Pathway card → sample when stacked |40px; vertical arrow occupies this gap |
| Sample → callout |16px stacked;26px desktop including10px perspective allowance |
| Project image inset / image → title |8–12px /16–20px fluid |

A section owns its leading gap once. Do not add the same trailing gap to its predecessor. Local card/header/caption spacing is distinct from page-section separation. All main section boundaries include Services; no fixed mobile Services exception.

## Responsive rules

| Element | Rule |
| --- | --- |
| Hero/research/behavior/ecosystem/About | two columns at768+; narrow layout below |
| Pathway | alternate two tracks at896+; stacked below |
| Work / services |2featured+3columns /4columns at1100+;2columns at768–1099;1below768 |
| Header | desktop three-track navigation at1280+; native icon menu below |
| Mobile hero sidebar fallback | below14rem available container width, stack glass panel after copy |

The opening introduction is content-height with equal20–32px block inset and no viewport minimum. Behavior/Contact cards are content-height at every width. Body viewport floor and dialog viewport maximum are unrelated shell/overlay constraints. The behavior inner grid alone uses40px side gutters without the1200px cap at1100+.

## Color and materials

| Role | Value |
| --- | --- |
| Page / content / primary ink / secondary text |#F5F5F2 /#FCFCFA /#171922 /#585D70 |
| Accent / pale fill / decorative line / rail |#5147D9 /#ECEBF7 /#DFE0E5 /#D9D8E9 |
| Control boundary / focus |#747783 /2px #5147D9 outline,3px offset |
| Behavior and Contact shared gradient |#EEEFFF → page →#EDF3F4, static13% indigo wash |
| Content / feature / small example corner |24 /32 /16px |
| Quiet card / glass shadow |0 8px 24px at3% ink /0 12px 32px at8% ink |

Nested image corners subtract the inset from the outer radius. Native/system fonts only; no external font service or automatic dark mode. Apple separates navigation/control Liquid Glass from standard content materials. This website uses two CSS approximations, not native optical refraction:

| Material role | Supported-browser treatment |
| --- | --- |
| Navigation/filter |60% white,24px blur,130% saturation; white65% rim; existing glass shadow |
| Standalone content card/panel |70% white,18px blur,120% saturation;85% white rim, inset white highlight and5% ink shadow |
| Nested chart/diagram cells, sources and inputs |Opaque pale-indigo or near-white; no second backdrop filter |
| Feature shell |Existing lavender/ivory/cool gradient; inner standalone card uses content tier |

The page carries subtle static indigo washes so transparency has a visible backdrop. Never reduce text opacity, blur the foreground, or apply opacity to the whole card. Navigation remains the stronger material. Card geometry and text colors match the homepage. `html[data-glass="off"]`, reduced transparency, increased contrast, forced colors and print disable both material filters and shadows and restore solid backgrounds. Unsupported browsers start solid. Target4.5:1 normal-text contrast,3:1 qualifying large text/required graphics; verify rendered results. Keep44/48px targets and no essential motion. Exact values are project customizations; see [current research/audit](../spacing-materials-C-0018.md).

### Single spacing owner

- Padding owns distance from a container edge to its content. Equal inline values preserve symmetry.
- Grid/flex gap owns distances between direct items. Clear inherited child block margins in those groups. Lists with gap must not also receive li+li margins.
- Normal-flow text uses leading margins:12px eyebrow→heading,16px heading→body/paragraph,24px text→actions. Section margins are leading-only64–120px. First children have no extra leading margin.
- Work filters use one shared24px rhythm on both homepage and Work index: intro→capsule, capsule→live count, and count→grid. The homepage capsule owns the visual style; status owns its leading/trailing rhythm so the grid does not add a duplicate margin.
- Project media has top/side inset only; the text container owns the16–20px gap below the image. Do not add image bottom margin to text top padding.
- Metadata pairs have zero parent gap and16px block padding around their separator, with no outer first/last inset. The rule has16px breathing room on each side, not an undocumented gap+padding sum.
- Dividers may intentionally have space on both sides. Document each side; do not describe the entire distance as only one side. Auto margins used to bottom-align actions are alignment, not extra fixed spacing.
- Pathway arrow40px and sample-caption16/26px remain named role exceptions, not arbitrary page-specific spacing.

Use layers tokens,base,layout,components,utilities. Import tokens then global once; global imports scaffold and portfolio. Shared values belong in tokens, scoped rules must stay layered, compatibility specificity stays in scaffold. No !important or new style dependency.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.
