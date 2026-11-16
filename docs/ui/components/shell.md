# Navigation, footer and route shell

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/scaffold.css`. Version 5.1, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## Header

Shared container and24px top offset. At1280+ use desktop capsule,48px minimum row,24px inline/8px block inset and equal outside grid tracks around centered navigation. Navigation link gaps20px; link targets44px minimum. External Contact is48px high with24px inline inset. Keep logo and existing destinations.

All widths use the shared60%-white/24px frosted navigation material, opaque fallback, visible focus and no nested glass layer. Header content stays centered in its row. Desktop and compact headers use8px block inset; compact uses16px inline inset, rounded32px corners and a48px minimum row. Brand and menu glyph remain visually balanced at28px and use at least48px hit regions. The closed row is about66px high (48px control row +16px block inset +2px border), including on compact screens. Apple recommends a44×44pt minimum hit region for buttons; these CSS px dimensions are project values and the48px target is deliberately generous. Do not reserve the former80px floor. Native summary has hidden accessible name Menu; remove visual disclosure marker only for this header. It starts closed. Contact is inside expanded links; hide external header Contact at compact widths. One Primary nav landmark contains mutually exclusive desktop/mobile content.

Native details/summary opens with Enter/Space and works without script. Expanded links stay in normal flow below first-row controls; brand and summary stay vertically centered in the first row while closed. Hide the brand while the compact menu is open so it cannot overlap expanded links. Keep visible focus, base-aware URLs and growing height. No modal overlay, focus trap or unsupported Escape claim. No fixed-height header at enlarged text. Material preferences reuse shared fallbacks; no nested glass layer inside menu.

## Footer and routes

Footer has decorative upper line,20–32px block padding and16–24px grouping gaps; links keep44px targets. Preserve identity, résumé, privacy, LinkedIn and email links. BaseLayout owns document metadata, language, canonical/noindex, social metadata, theme color, favicon, skip link and focusable main.

Retain /, /system/ style reference and /404.html noindex. C-0015 adds all17 source detail/index routes; primary Work/Research/Approach/Services/About/Contact links route to their local pages, with aria-current including descendant case-study pages. Markdown specs must never live inside src/pages. Prefix local paths through withBase; external/mailto paths directly. Header is in normal flow, not sticky. A future sticky change needs anchor/focus clearance and separately authorized behavior.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
