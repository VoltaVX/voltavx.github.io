# Behavior statement and research stages

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/portfolio.css`. Version 5.0, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## Content and hierarchy

Keep one H2: “Data reveals patterns. Care gives them purpose.” Data reveals is bold uppercase sans on its own line; patterns is italic on its own line; Care gives them purpose is one italic phrase that wraps naturally. Use the36–45px section token. Preserve original two supporting paragraphs and16px paragraph gap, with24–40px offset below heading. Do not insert a forced break after gives.

Six original process labels remain Observe, Define, Measure, Analyze, Test, Refine, using native decimal-leading-zero ordered-list semantics, body16–18px and accent12px markers. Closing note remains “Patterns become useful when they lead to thoughtful action.” Do not confuse this six-step research list with the separate five-stage pathway.

The editorial block is vertically centered within the section grid row using align-self:center. Equal top/bottom section padding centers it relative to the full card. Its eyebrow, heading and supporting paragraphs keep their original left alignment; no fixed height or absolute positioning is used.

## Geometry

Outer #approach.behavior-feature is100% available width with shared lavender/ivory/cool-paper gradient,32px corners, decorative rim, quiet shadow and equal24–64px top/bottom padding. It has no viewport-based height or minimum at any width. Do not restore historical full-screen or no-card rules.

Inner .container.behavior-statement uses the same75rem maximum content width and responsive gutters as the homepage hero and research spotlight on every route. Keep690:462 column proportions,20–48px gap, and vertically center both columns at768+. Do not add a wider feature-specific width or extra desktop gutters. Below768px stack editorial text then process card; both stay inside the shared container.

Process inner card is near-white,24px corners, pale rail rim,20–32px inset and16–24px list/note spacing, with the shared content-tier blur. At768+ its maximum is22rem and it aligns right. Below768px it fills available width; center list numbers/labels using inside markers and no inline indentation, and center the closing note. Content grows without clipping. Apply shared solid/forced-color/print fallbacks.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
