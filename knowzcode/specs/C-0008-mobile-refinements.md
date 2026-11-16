# C-0008 — Mobile spacing and centered contact feature

BEHAVIOR presentation change. Nine attached screenshots inspected directly from upload/ paths. No dependencies, routes, scripts, content or control behavior changes.

Acceptance:
1. Below768px, increase hero/nav separation to48px; discipline labels remain three equal centered columns, allowing each label to wrap naturally without reducing type.
2. Mobile research text-to-diagram gap48px (was20–26px). Preserve study diagram cells and semantics.
3. Below768px pathway intro-to-first-card gap64px. Below896px show attached vertical card-to-example connector with a down arrow, using40px separation; retain ordered stacked stages, readable examples and40px caption gap. Desktop branches remain unchanged. Hide decoration for print.
4. Below768px center work filter capsule and each wrapped row. Preserve targets, statuses and filtering.
5. Below768px services starts64px after ecosystem (was24–34px). One leading gap only.
6. Contact becomes full-width gradient card with minimum100svh (100vh fallback), centered heading/button, balanced24–64px padding and intrinsic content growth at all widths. Use exact same shared gradient as behavior. No fixed height or nested blur; preserve native mailto.
7. At1100px+ reduce behavior inner outer margins to40px each, instead of the max1200px container limit. Keep full-width shell, original690:462 columns,48px column gap maximum, text measures and balanced padding. Other sections retain existing container.

Checks: UI contract; Astro/type checks; unit tests if needed; both static bases/build audits; browser regression cases prepared. Rendered QA unavailable under managed Sites workflow (no control-browser). Independent source review required; publish exact source to same owner-private Site. Existing C4–C7 visual acceptance remains open.
