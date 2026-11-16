# About, tools, resume and Contact

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/portfolio.css`. Version 5.0, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## About

Use384:768 portrait/copy proportions at768+,20–48px editorial gap. Copy is right, portrait left. Below768px copy precedes portrait; image fills100% of its content container with max-inline-size:none and natural1122:1402 ratio, retaining equal20px outside gutters. Do not reinstate the24rem mobile cap. Original source is juan-writing-notebook-v2.webp,1122×1402, lazy loaded with meaningful alt and24px corners.

Keep two original first-person paragraphs,16px paragraph gap and62ch readable measure. Tool labels are SitePad, WordPress, Shopify, Astro, Qualtrics and IBM SPSS. Tool/action groups use16–24px gaps and offsets. About heading-to-prose trailing separation is16px. About/résumé links now use the local migrated routes; full-page details follow [detail-pages](detail-pages.md). Do not invent qualifications or availability.

## Contact

Full-width content-height gradient card shares behavior material,32px corners, quiet rim/shadow and equal24–64px block padding. Inner .container.contact-panel has zero extra padding, centered column,32px gap and centered text. Heading remains “Build something people can understand and trust.” and primary action “Start a conversation” Contact has no viewport height/minimum or spacer. Preserve native mailto; no form delivery backend or false Message sent state. Page-section leading gap follows shared64–120px rule. Solid/forced-color/print fallback is required.

Shared typography follows [typography-content](typography-content.md):700-weight near-black headings and soft-slate supporting copy. Full-page Approach/About variants follow [detail-pages](detail-pages.md); homepage anatomy and local spacing remain unchanged.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
