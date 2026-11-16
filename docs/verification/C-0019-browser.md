# C-0019 browser evidence

October31,2026. Managed preview and CUA Chrome. Read design.md, foundations and managed preview guidance. Temporary iframe harness used native route/width controls and onload status before each DOM measurement, then was removed.

- All17 non-homepage routes at320/390/768/1024/1440:85 checks passed document horizontal overflow and one-H1 checks.
- All17 routes at320 with200% root text: no horizontal overflow.
- Contact wrapper computed backdrop-filter:none; its3 option cards each rgba(255,255,255,.7) with blur18px saturate1.2. This verifies removal of nested glass.
- Mobile Services opening layout screenshot inspected at390px iframe width. Source Services lower feature screenshot inspected: editorial copy left/process card right; current implementation preserves that composition at wide widths.

Raw measured results and screenshots: [evidence directory](C-0019-browser/). These are geometry checks, not exhaustive visual or accessibility certification. Screenshots for every route at390/1440, source mobile/lower capture of every section, full keyboard/no-script/contact/axe/preference matrix and physicalSafari remain unexecuted. The1440 iframe geometry was measured even though the outer browser viewport is narrower. No browser viewport API was available to capture its entire1440px width.

## Follow-up interactions and captures

Screenshot calls completed for all17 routes at390 and1440 iframe widths (34 calls), but only13 files synchronized to the main workspace after the documented5-second wait. Only files actually present in the evidence directory are attached; the rest are unavailable. Wide images are clipped to the outer browser viewport; full1440 geometry is measured separately. Full-page screenshot batch timed out and reset the browser runtime after60seconds; seven additional mobile full-page captures were returned, but are not a complete set.

Native mobile menu opened with Enter and closed with Space. Work Commerce filter reported2 of8, All work restored8 of8. Contact has one label for each field, name/email/message required attributes, and input changes generated the expected encoded mailto with local QA text. No message was sent or external mail app opened. Read-only DOM scope did not expose checkValidity(), so native constraint validation interaction is not certified. Clipboard/error, no-script, axe and complete preference matrix remain unexecuted.
