# C-0003 research and architecture findings

Checked 2026-10-17. These are primary documentation findings and project decisions, not a measured study of agent compliance.

| Source | Finding | Project decision |
| --- | --- | --- |
| [Astro styling](https://docs.astro.build/en/guides/styling/) | Component styles are scoped; global imports and scoped rules can compete | Preserve the shared layout imports and reconcile the existing compatibility adapter. Verify computed values in a browser |
| [OpenAI AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md/) | Instruction discovery follows a directory chain and has a default combined byte limit. Linked documents are not a substitute for instruction discovery | Keep root guidance short, require explicit reads, route from local contracts, and keep detail in an indexed catalog |
| [Apple Materials](https://developer.apple.com/design/human-interface-guidelines/materials) and [WWDC25 material principles](https://developer.apple.com/videos/play/wwdc2025/219/) | Distinguish controls from content and avoid repeated glass layers | Compact navigation glass, opaque content, project-specific numerical overrides, and no native-refraction claim |
| [MDN cascade layers](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer) | Cascade layer ordering and normal rules outside layers affect precedence | Keep the five existing layers; prevent unlayered visual overrides from bypassing the system |
| [MDN reduced transparency](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) | Preference support is not universal | Keep opaque-first support and the independent root data-glass=off fallback |
| [W3C contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | Contrast and target-size requirements have defined thresholds and exceptions | Test final composites; distinguish the project's 44 px target preference from WCAG's AA minimum |

Modern Web Guidance was searched and the visual-effects, accessibility and css-layout guides were read. Apply only relevant guidance: standard intrinsic grid/flex layout, native semantics, declared dimensions, optional effects and fallbacks. Do not add the guides' unrelated patterns.

## Scaffold analysis

Pages compose BaseLayout and small presentation components. Layout/components consume public config, base-aware URL helpers and shared styles. GitHub Actions validates root and repository hosting. Minimal Delta controls scope/state; KnowzCode tracks change acceptance and context; its runtime is development tooling, not a website service.

The original root AGENTS.md held a large generic visual standard. The approved portfolio changes its palette, type, margins, section-gap ownership, surfaces and diagram details. A short router plus one canonical design file and 12 component contracts prevents duplicate numerical standards. The manifest is an index, not a second source of numeric requirements. The structural checker does not certify agent obedience.

No Astro, TypeScript, Node, package, hosting, component-prop or KnowzCode-runtime upgrade is part of C-0003. A fourth CSS file organizes future portfolio composition within the existing Styles module. Placeholder pages remain; the actual portfolio is a later change.
