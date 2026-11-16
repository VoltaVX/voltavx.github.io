# Typography and text elements

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/global.css`. Version 5.0, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## Type roles

System sans stack only; installed Georgia/Times serif italic for approved short emphasis. No Inter download or font service. Do not fix root font size, shrink whole pages, clamp text lines or use type size to replace semantics.

| Role | Current range / rule |
| --- | --- |
| Hero / behavior display |36–72px fluid |
| Major H2 |36–54px fluid |
| Pathway/services secondary |36–45px fluid; actual component role may use major token |
| Card H3 |22–26px fluid |
| H4 / H5 / H6 |22 /20 /18px |
| Body / lead |16–18px fluid |
| Card body / caption / eyebrow / button |16 /14 /12 /15px |

Use existing token leading: body1.555556 except phone1.5; headings use700 weight, primary ink #171922 and−.035em tracking; leading about1.08–1.125 per role/breakpoint; display about1.0625–1.1. Card body16/24, caption14/20, eyebrow12/16, button15/20. Hero max40rem and ordinary paragraph56–65ch; keep natural wrapping. Existing display/section tracking approximately−.035em; small text normal. Supporting paragraphs, ordinary list content and metadata values use soft slate #585D70; eyebrows keep indigo and labels remain visually subordinate. Do not mute headings or primary actions. Preserve the role ranges instead of copying phone screenshot pixel sizes. Role-specific exceptions belong in corresponding component.

One H1 per page, H2 major section, H3 card, and subordinate levels only for real hierarchy. Hero people and behavior statement use approved serif emphasis, not long italic paragraphs. Preserve warm first-person voice and locked pathway wording. Names/credentials/outcomes must remain factual.

## Text elements

Prose paragraphs16px apart, headings32px above and16px before following text. Ordinary lists retain markers,24px indentation and8px item gaps unless specific process contract overrides alignment. Definition descriptions indent24px; quotes use3px accent edge and24px inset. Code/pre use system mono,16px padding,12px corners and local horizontal scroll. Figures/quotes/pre/table groups use24px local separation. Strong/em express meaning. Dates, abbreviations, captions, superscripts/subscripts retain native semantics. Links remain identifiable; do not truncate important words.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.

## Consistent hierarchy across sections

Page titles retain the display role. Portfolio/detail section headings use the36–45px secondary-section token; a new section may restart at that tier. Card headings use22–26px, body copy16–18px, captions14px and labels12px. The Services editorial heading and homepage Behavior heading are section-level, not display-level. No lower-level supporting text may inherit a larger display size. Hierarchy follows semantic groups, not an ever-decreasing size for every later item on the page.
