# Controls, forms, data and feedback

Authority: [main UI specification](../design.md). Read the foundations and this contract before editing this element.

CSS owner: `src/styles/global.css`. Version5.0,2026-10-20. These are current rules for shared and reference components. Browser evidence remains separate from written requirements.

## Buttons, links and filter controls

Links navigate; buttons perform an action. Keep ActionLink's existing href/variant/slot interface. Use solid indigo primary actions, opaque or regular-inspired secondary surfaces, a capsule radius, 48 px primary height, 44 px other control minimum, 24 px horizontal padding and 8 px icon gap. Button text is 15/20 px, weight 600. Use 12 px between actions. Permit text wrapping and height growth. Icon-only controls need an accessible name and 44 px target; icons are 16–24 px.

Implement default, hover, focus, pressed, disabled and selected states as applicable. Focus is a 2 px indigo outline with 3 px offset. Disabled controls use native attributes plus a boundary/style cue; do not rely only on opacity. Current navigation has a shape and underline. Filters use real buttons with aria-pressed unless implementing the full tab keyboard contract. Use a filled selected state and a non-color cue. C-0004 authorizes the project filter behavior defined in projects.md.

## Forms and validation

Use .form-grid with 24 px group gaps, .field with 8 px label/control/help gaps, visible associated labels, correct input/autocomplete types, and .choice labels for native checkbox/radio controls. Fields have 12 px block/16 px inline padding, 12 px corners, 44 px minimum height and a stronger boundary than decorative card rims. Textarea has an 8 rem minimum height and vertical resizing. Fieldset padding is 24 px and legend remains semantic. Placeholder text is not a label.

Connect help/errors with aria-describedby. Set aria-invalid for real errors, preserve values and explain recovery. Use a polite status for a relevant completed action and an alert only for urgent new errors. Never display Message sent as a real delivery result before an actual supported action succeeds. The scaffold has no form backend.

## Status, data and overlays

Badges: 4 px block/12 px inline padding, 4 px content gap, 14/20 px text. Notices: 16 px padding, 3 px semantic edge, text/icon meaning. Define empty, loading, success, error and unavailable states only for features that exist; do not create asynchronous features to demonstrate CSS.

Tables need caption, headers and scope. Use .table-scroll for local overflow, a name/focus when needed for keyboard scrolling, 12/16 px cell padding, 16 px caption padding and 1 px separators. Do not hide columns on phones without equivalent access.

Ordinary content details/summary keeps its marker and keyboard behavior (the icon-only header exception is specified in shell.md), 16 px inline padding, 16 px summary padding, 8 px between disclosures and 24 px answer-bottom space. Dialog geometry is opaque, at most 36 rem wide, fluid16–24 px card padding, 24 px content gaps and 16 px viewport clearance. When an actual dialog is requested, use showModal, a name, close button, Escape and focus return. CSS supplies no opening behavior. Menus, tooltips, carousels and popovers require their own keyboard/state contract before implementation. Essential help stays visible.


## Acceptance

Verify the relevant geometry, content, states, narrow layout, keyboard access and preferences in a browser. Keep source text as HTML. Report checks that were unavailable. Do not claim that a document check proves agent compliance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
