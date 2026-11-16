# Images, captions, icons and diagrams

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/global.css`. Version 5.0, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

Use original local WebPs with intrinsic dimensions, useful alt, lazy loading below fold and eager/high-priority hero. Do not stretch assets or use full-page reference PNGs as production backgrounds. Media frames have24px outer corners; inset media corners subtract inset. Figures have no implicit inline margin. Ordinary captions use16px separation and14/20 type.

Hero mobile frame is2:1 with70%12% focal point protecting source face above caption. Widescreen frame height follows full hero copy row. About mobile portrait fills its container at natural1122:1402 ratio with equal gutters. Project thumbs remain16:9. Component contracts own these exceptions.

Pathway figcaptions are associated frosted callouts:16px stacked separation,26px desktop offset with perspective allowance, at least16px projected clearance. Preserve Example01–05 labels, original states/annotations,16px radius/inset,8px inner gaps and pointer. They grow in flow; no absolute-height clipping. See [pathway](pathway.md).

Use16–24px control icons,32px service icons and40–56px pathway tiles by breakpoint. Decorative icons/arrows/eye emblem are aria-hidden, nonfocusable and cannot be sole information. Functional icons need named44px targets. HTML/SVG owns exact labels/diagrams; quantitative charts also need tables. Label proposed interaction studies/evaluation plan, never claim illustrative message delivery or invented measurements.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
