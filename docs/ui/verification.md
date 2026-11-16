# UI verification procedure

1. Open design.md, foundations.md and affected component specifications. Record the actual paths read and requirements checked.
2. Run npm run check:ui. It checks registry entries, coverage links, CSS exports, imports and agent lookup routes. It cannot prove that an agent followed a requirement.
3. Run npm run check, npm test and relevant Playwright checks. Test domain-root and repository-base URLs after shared shell/style changes.
4. Inspect affected surfaces at 320, 390, 768, 1024 and 1440 CSS px. Check long labels, full original copy, natural text height, keyboard/focus, 200% text size and WCAG text spacing. Check real 400% browser zoom separately when available.
5. Check default/solid mode, reduced motion, supported reduced transparency, increased contrast, forced colors and print. Measure actual foreground/background contrast. Axe is supporting evidence, not certification.
6. For the pathway, inspect all five main cards, mirrored frame angles, source wording, caption clearance and connector attachments. Example 02 must fit its row and stay centered in both axes. Example 04 contents share a center axis. Example 05 has no detached branch or rail tail. Stack narrow layouts without long leaders or transforms.
7. Inspect screenshots against the approved reference. The reference is approximate; the current written contract wins. Do not fix raster artifacts by changing source text.
8. Review the diff and document unavailable browsers, screen readers, physical-device performance, true browser zoom, or unsupported preference propagation. New tests must demonstrate desired behavior; do not mirror source formatting or weaken failures.

Change-specific results belong in docs/verification/C-XXXX.md and the matching KnowzCode record. Keep reusable requirements here rather than copying them into test logs.
