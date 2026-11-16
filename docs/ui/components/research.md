# Research spotlight and study diagram

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/portfolio.css`. Version 5.0, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

At768+ use equal columns and20–48px gap. The research index card left pane starts at the same top inset as the diagram/metadata pane; do not vertically center its content. In the research-question feature, center the left copy pane against the design panel. Below768px stack copy before diagram with48px row gap and let each pane return to normal flow. Keep title, study question, original summary, N=123, three label conditions, Fall2025, tools and one primary study link. Homepage metadata/tool groups use16px leading spacing and16px internal gaps; actions follow by24px. Detail-page tool chips use8px gaps. No fabricated statistics or study outcomes.

Research diagram is a semantic figure with20–32px padding,24px corners, frosted content surface and decorative border. One shared transcript sits above H–H, H–AI and AI–AI cells. Diagram levels remain32px apart and cells16px apart; cells form three columns at768+ and one below. Native connector strokes are hidden on stacked phone diagram; caption describes unchanged transcript/changed labels, not numerical results. Keep14px caption and24px internal caption gap. Labels are HTML, not raster text. A future quantitative chart needs a semantic table. Missing study content must be stated honestly.

Shared implementation: `src/components/StudyDiagram.astro`, used by ResearchSpotlight and migrated research pages. The optional detail variant uses its own labels, omits the condition descriptions and figcaption, and retains an accessible figure label. Geometry and responsive states share the same classes. See [detail-pages](detail-pages.md) for card typography and local spacing.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
