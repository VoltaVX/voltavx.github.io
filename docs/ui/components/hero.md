# Hero, portrait and discipline panel

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/portfolio.css`. Version 5.1, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## Anatomy and content

Keep one H1: “I study behavior. I design with people in mind.” Emphasize people with the installed serif italic. Preserve original lead, links and eyebrow. Source order: hero-copy, discipline-panel containing the three-item ul, hero-portrait. Original image is juan-hero-v2.webp,1586×992, eager/high priority; caption “Observe. Understand. Build.” is real text with opaque fill,24px inset and24px frame corners.

## Layout and image framing

Introduction is a compact content-height section, with no viewport minimum. Its leading margin uses section-space (64–120px), matching the section boundary below; internal block padding remains separate and symmetric. Its block inset is equal20–32px top and bottom. At768+ use equal copy/portrait tracks and20–48px column gap. The photo must match the complete copy row height including eyebrow, heading, lead and actions. Relative figure stretches; absolute cover image fills it without intrinsic-height inflation or a45svh cap. Retain70%center focal point and caption.

Below768px use flexible text track plus sidebar minimum104px,12px gap. Portrait spans both tracks beneath. Its2:1 landscape ratio and70%12% object position protect the source face/hair (approximately y110–400 of992) above caption. No fixed compact image height. Below14rem available container width, stack copy, panel and portrait to protect enlarged-text controls; keep type/targets unchanged.

## Discipline panel

Preserve exactly Behavior research; Digital experiences; Data & context. Mobile .discipline-panel alone owns the frosted material,24px corners and12px padding. The list is its only child: no eye emblem, icon row or reserved space above the labels. List rows remain16px apart. Each label row uses a responsive clamp of14–16px at the default root and has an8px indigo dot with4px pale halo and8px text gap; natural/emergency wrapping is allowed. No fake interaction or extra focus target. The inner ul never adds blur.

At768+ wrapper display:contents; list is a plain horizontal three-column strip across row2 with shared16–24px block padding and thin separators. Keep explicit glass-off and reduced-transparency/contrast/forced-color/print fallbacks. On mobile enlarged text, move the wrapper rather than merely repositioning its inner list.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
