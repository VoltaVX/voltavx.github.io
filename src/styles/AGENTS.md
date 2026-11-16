# Styles module — approved portfolio system

## Purpose and ownership
Implement the current UI authority in `docs/ui/design.md`. Before any style edit, read that file, `docs/ui/components/foundations.md`, and affected component contracts from the lookup table. Global changes require an impact check across the catalog. Root AGENTS.md remains applicable.

Owns tokens, base element styles, layout primitives, the compatibility adapter, portfolio composition classes and preference fallbacks. Does not own page copy, routes, business state, actual filtering, menu/dialog behavior, settings persistence or native Apple refraction.

## Public interface
BaseLayout imports tokens.css then global.css. global.css imports scaffold.css and portfolio.css. Copy all four CSS files together. Keep layer order tokens, base, layout, components, utilities. Existing aliases such as --color-sage and --color-lime now map to the pale-indigo palette. Existing classes and component props remain compatible.

global.css exports .container, .section, .stack, .cluster, .actions, .grid, .prose, .card, .surface, .glass, .button/.secondary/.icon-button, .text-link, .display, .lead, .eyebrow, .media-frame/.crop, .form-grid, .field, .choice, .help-text, .field-error, .badge, .notice, .table-scroll, .dialog, .muted, .divider and .visually-hidden. A .section owns one leading gap; do not also add the preceding trailing gap.

portfolio.css exports the composition selectors listed in docs/ui/manifest.json: hero, research, behavior, pathway, projects, ecosystem, services and about. They govern the implemented portfolio components and the reusable reference in framework exports. Pathway card, evidence, caption and compact-filter behavior is defined in components/pathway.md.

## Constraints
Native CSS/system fonts only. Do not add framework, theme JavaScript, animation library or external font requests. Keep all visual rules layered. Only scaffold.css may use the existing compatibility specificity needed to outrank old Astro-scoped rules. No !important. Keep reference images out of production page markup.

Two frosted material tiers with solid unsupported/accessibility fallbacks; no nested blur; no essential motion; visible focus; native semantics; readable reflow. html[data-glass="off"] forces opaque surfaces. Reduced transparency/contrast/forced colors/print have documented fallbacks. A static screenshot cannot verify behavior.

## Validation
Run npm run check:ui and the relevant browser checks; inspect root/repository hosting, 320–1440 px layouts, enlarged text, states and preferences. Update the exact component spec when its authorized rule changes. Do not duplicate numeric values here. Document unsupported browser/manual checks. Stop at accepted scope.
