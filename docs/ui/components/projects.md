# Selected work, filters and project cards

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/portfolio.css`. Version 5.0, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## Inventory and grid

Preserve eight projects: SIS Asphalt, VX Nexus, World Cup Items, AI Misattribution, Sharper Image Services, SIS Florida, PantherNOW Operations, ABA Data Visualization System. Keep last item In development/View concept and original source order. At1100+ use two featured cards followed by three-column cards; at768–1099 use two equal columns; below768 use one. Grid gaps16–24px both axes; no dense packing or duplicate whole-card focus targets.

Images use source dimensions,16:9 cover crop,8–12px fluid inset and nested radius24px minus inset. Text padding16–24px; image-to-title16–20px; title/meta8px; description12px; action trailing-row spacing16–20px. Cards grow for text and align actions to row bottom. Use original local assets, not generated thumbnail metrics.

## Filters and states

Native All work, Client systems, Commerce, Research buttons; selected state has aria-pressed, lavender fill and underline. The dedicated Work page reuses the homepage capsule exactly: 4px inset, 4px control gaps, 44px minimum targets, transparent unselected controls, centered wrapping rows, navigation glass material and reduced-transparency/contrast/forced-color fallbacks. Do not blur individual buttons or add nested glass. Keep24px intro→filters, filters→status, status→grid. No-script view hides filter controls/status and shows every project,32px intro→grid.

Visible polite live count includes “8 of 8 projects shown · All work” by default. Center both count and count/reset row on mobile. Filtering retains focus on activating button and source order; Show all work restores all cards and focus to All work. Unknown category safely restores all. Preserve empty category behavior and [hidden] semantics. Do not treat illustrative pathway filter as real live controls.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
