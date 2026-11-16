# Historical approved design input

This is a frozen input, not the current UI authority. Use ../design.md and the current component catalog for implementation. Later centering/content-fit rules and implementation geometry override the older crop offsets.

# Design specification

Version: 3.2. Date: 17 October 2026. Owner: Juan Lopez / VoltaVX.

## 1. Scope and authority

This file defines the portfolio design system and the revised “From observation to useful change.” section. It replaces the dense dissection pathway in version 2 after a review of 23 first-party websites. Preserve the other approved sections.

Use this priority order when rules conflict:

1. The latest explicit instruction from Juan.
2. The locked original pathway text and internal card arrangement in this file.
3. The project customizations and numerical tokens in this file.
4. Apple's official Human Interface Guidelines for matters not customized here.
5. Browser and framework defaults.

Project customizations override Apple's general visual defaults. Do not overwrite a project token with an Apple platform value. Keep web accessibility requirements as acceptance criteria. Do not use a visual override as a reason to hide text or remove access.

All dimensions are CSS pixels unless marked as image pixels. These web dimensions are project decisions. They are not Apple-mandated website measurements. The raster concept demonstrates appearance. This file defines exact intended geometry and content.

## 2. Official base and explicit project overrides

Apple's official base is the Human Interface Guidelines, especially Materials, Layout, Typography, Motion, Color, and Accessibility. There is no single universal Apple Glass CSS specification for websites.

Apple separates a floating control layer from the content layer. Its Materials guidance recommends restrained use of Liquid Glass and regular material where labels need legibility. Standard materials define content surfaces. [A1]

Apple's Layout guidance supports clear hierarchy, related groups, alignment, and adaptable layouts. Its Motion guidance calls for purposeful, optional movement. [A2, A4]

| Base guidance | Project customization with higher priority |
| --- | --- |
| Platform-specific layouts and system spacing | Use the 1,200 px web container, project grid, type scale, and spacing below |
| System type treatments | Use the approved system/Inter appearance and restrained serif accent |
| Functional glass above content | Keep glass navigation and controls. Use warm, nearly opaque standard-material cards for the pathway |
| General clarity and hierarchy | Preserve every original pathway word and its internal order, including technical eyebrow labels |
| Adaptive layout | Restore five alternating left/right stages on desktop. Replace the compact grid |
| Default content presentation | Use five focused website-component crops with subtle mirrored perspective. Keep cards front-facing and separate. |
| Optional motion | Keep the twist visible in the static pose. Use no continuous spinning, bobbing, or automatic parallax |
| Platform color behavior | Use the existing ivory, ink, and indigo tokens. Test actual contrast in each material state |

The pathway is an explanatory content composition. Its website panels are images or annotated previews. They are not floating system windows. Do not label this custom effect as native Liquid Glass rendering.

## 3. Global design system

### Global layout and spacing

Use CSS pixels for every measurement in this specification. Generated images have their own pixel sizes. Do not measure a screenshot to recover the CSS values.

| Token or element | Desktop value | Use |
| --- | --- | --- |
| Reference viewport | 1,440 px | Main desktop design reference |
| Content maximum width | 1,200 px | Shared edges for all sections and navigation |
| Outer side margins at reference width | 120 px each | (1,440 - 1,200) / 2 |
| Desktop grid | 12 columns | 78 px columns and 24 px gutters |
| Standard column gap | 24 px | Project, service, and pathway cards |
| Editorial column gap | 48 px | Hero, research, ecosystem, and about |
| Major section separation | 96 px | From the final content edge to the next section's first content edge |
| Closely related section separation | 64 px | Philosophy to pathway; ecosystem to services |
| Section intro to content | 32 px | Below the final introductory paragraph |
| Eyebrow to heading | 12 px | Apply consistently |
| Heading to supporting copy | 16 px | Keep the copy connected to the heading |
| Paragraph to paragraph | 16 px | Do not add empty lines with spacer elements |
| Supporting copy to actions | 24 px | One clear action group |
| Button-to-button gap | 12 px | Do not stretch buttons across unused space |
| Standard card padding | 24 px | Project, service, and pathway cards |
| Large diagram padding | 32 px | Research canvas |
| Hairline | 1 px | Decorative section separators |

Define the 96 px section gap once. Do not place 96 px below one section and another 96 px above the next. Use the same rule for the 64 px related-section gap.

At widths below the maximum container, use available width minus the responsive side gutters. Keep a minimum 24 px gutter on medium layouts. On phones, use 20 px.

### Typography

Use the system font stack with the local Apple system font where available. Use Inter as an optional project fallback. Keep the serif accent to a few existing emphasis words. Do not use italic display text for long paragraphs.

| Role | Desktop size / line height | Weight | Notes |
| --- | --- | --- | --- |
| Hero heading | 64 / 68 px | 650-700 | Maximum width 640 px; natural line breaks |
| Major section heading | 48 / 52 px | 650-700 | Maximum width 800 px |
| Secondary section heading | 40 / 44 px | 650 | Pathway and services |
| Card heading | 22 / 28 px | 600-650 | Permit two or three lines when needed |
| Body | 18 / 28 px | 400 | Paragraph width 56-65 characters |
| Card body | 16 / 24 px | 400 | Short descriptions |
| Metadata and navigation | 14 / 20 px | 500 | Keep essential information readable |
| Eyebrow | 12 / 16 px | 650 | Letter spacing 0.12 em; short labels only |
| Button | 15 / 20 px | 600 | Use one size across the page |

Avoid negative letter spacing that joins letters at small sizes. Use about -0.035 em only for the largest display heading. Use -0.02 em for section headings and normal tracking for body copy.

### Color, materials, corners, and shadows

| Token | Value | Application |
| --- | --- | --- |
| Page | #F5F5F2 | Continuous page canvas |
| Content surface | #FCFCFA | Opaque cards and diagram cells |
| Primary text | #171922 | Headings and primary labels |
| Secondary text | #505461 | Body text and metadata |
| Accent | #5147D9 | Primary action and important links |
| Pale accent | #ECEBF7 | Selected fill, diagrams, and small icon tiles |
| Decorative separator | #DFE0E5 | Nonessential rules and card outlines |
| Focus | #5147D9 | A 2 px outline, offset 3 px |

Keep the faint border decorative. A control must remain identifiable through its label, shape, or a stronger boundary when needed.

Use a 24 px outer radius for portraits and content cards. For a 24 px outer frame with a 12 px image inset, use a 12 px inner image radius. For a 32 px outer frame and an 8 px inset, use a 24 px inner radius. Calculate nested corners from the inset. Do not give every nested rectangle the same radius.

Use a fully rounded capsule for navigation and buttons. Avoid thick metallic edges and bright rainbow rims.

For the web glass navigation, start with white at 76% opacity, backdrop blur of 24 px, and backdrop saturation of 1.15. Add a 1 px light rim at 65% white. Use a shadow of 0 12 px 32 px at 8% dark ink. These are starting values. Verify the result over the actual content. Increase opacity if labels lose contrast.

Use a quiet content-card shadow only where separation requires it: 0 8 px 24 px at 3% dark ink. Most content cards can use the border alone. Do not animate blur or large shadows while scrolling.

### Navigation

At the desktop reference, use a 1,200 px wide, 64 px high navigation capsule. Place it 24 px from the viewport top. Use 24 px horizontal internal padding and 8 px vertical padding.

Use three layout areas: logo, centered navigation, and Contact. Keep the first and final layout tracks equal so the center group stays centered. Do not center the link group in only the remaining space after the logo.

Give each link a minimum 44 px interaction height. Use a 20 px gap between link areas. Contact is 48 px high with 24 px horizontal padding. If the full group no longer fits, switch to the menu layout.

Keep sticky content clear of the navigation. For anchor destinations, allow at least 112 px of scroll clearance. The current-section state must have a shape or underline as well as color.

### Hero

Use a 576 px text column, a 48 px gap, and a 576 px portrait column. Vertically center the copy against the portrait. Place the hero at least 48 px below the navigation's lower edge.

Use the name as the eyebrow. Keep the existing main idea: “I study behavior. I design with people in mind.” Keep the emphasis on “people.” Use the shorter supporting sentence shown in the concept.

Use a portrait area about 576 px wide by 560 px high, with a 24 px radius. Crop the original asset with the face safely inside the frame. Do not stretch it. Keep all main text outside the picture. A short opaque caption may sit 24 px from the picture's lower and left edges.

Use 48 px action height, 24 px horizontal padding, and a 12 px gap. Put the plain discipline strip 40 px below the hero. Give the strip 24 px vertical padding, two fine internal separators, and no card shadow.

### Research spotlight

Use two equal 576 px columns with a 48 px gap. The left side contains the title, the question, a concise summary, study metadata, and actions. The right side contains the diagram. Do not enclose both in a second large card.

Use a 576 px diagram width, 32 px padding, and a 24 px outer radius. Use a single shared transcript node above three label-condition cells. Use 16 px gaps between cells and 32 px between diagram levels. Treat the diagram as opaque content.

Keep the reported sample size of 123, three label conditions, and one shared transcript. Do not imply that the site measured new effects. Do not add invented percentages, significance levels, or effect sizes. The generated diagram explains the study structure; it does not provide numerical results.

Give the metadata strip a 24 px top margin and 24 px bottom margin. Use 16 px internal gaps. Place tools below as simple labels. Keep only one primary research action.

### Behavior statement

Keep the approved open philosophy section. Use a 690 px heading area, a 48 px gap, and a 462 px supporting area. Keep the data-and-care statement and the six research stages. Place the revised five-principle pathway 64 px after this section. The six research stages and the five pathway principles are separate lists.

### Selected work

Retain the existing eight-project inventory. Use two featured cards in row one, then three cards in each of rows two and three. Use 24 px horizontal gaps and 32 px row gaps. Featured cards are 588 px wide. Smaller cards are 384 px wide.

Use a 16:9 image ratio. Inset images by 12 px. Use 24 px padding for text. Use 20 px between image and title, 8 px between title and metadata, 12 px before the description, and 20 px before the case-study link.

Keep titles, descriptions, and action rows aligned within a row. Permit text to determine row height. Do not truncate a project name to force equal height.

The project inventory is SIS Asphalt, VX Nexus, World Cup Items, AI Misattribution, Sharper Image Services, SIS Florida, PantherNOW Operations, and ABA Data Visualization System. Keep the final project's “In development” status visible and use “View concept” for its action.

Put filters 24 px below the section intro and 24 px above the project grid. Use one 52 px outer glass control with 4 px padding and 44 px inner tabs. The active tab uses a simple fill within that single material layer. All work is the default. A filtered view must provide a visible result count and a clear reset action. These are implementation states, not visible in the static default view.

Use actual source screenshots in production. The concept thumbnails are visual approximations. In particular, small dashboard numbers in generated previews are illustrative interface detail, not validated project metrics.

### Project ecosystem

Use a 486 px heading column, a 48 px gap, and a 666 px list panel. Use sentence case and a balanced two-line heading. Avoid the original long vertical stack of capitalized words.

Use a 24 px panel radius. Give each of the three rows 24 px horizontal and vertical padding. Use a 32 px icon, a 16 px icon-to-text gap, and an 8 px title-to-description gap. Separate rows with a decorative 1 px rule. Keep the panel opaque.

Describe the distinct needs of Sharper Image Services, SIS Florida, and SIS Asphalt. Do not imply new business relationships beyond those shown in the original portfolio.

### Services

Place services 64 px after the ecosystem. Use four 282 px cards with 24 px gaps. Use 24 px padding and a 240 px minimum height. Use a 32 px icon, a small number, a title, and a short description. Align arrows and action areas across the row.

Retain Behavioral Research & Strategy, Web Design & Development, Commerce & Digital Systems, and Data & Context Systems. Link a service title or explicit action to the relevant destination. Do not show an arrow as the only accessible label.

### About, contact, and footer

For About, use a 384 px portrait, a 48 px gap, and a 768 px text area. Keep paragraph text to about 62 characters per line within that area. Use a portrait around 440 px high, a 24 px radius, and an appropriate crop of the original image.

Use two short paragraphs. Put the tool list 24 px below the text. Put the about and résumé links 24 px below the tool list, with a 24 px gap between them. Do not invent availability, degrees, results, or credentials.

Separate Contact from About by 96 px. Use an open section with 48 px vertical internal padding. Keep the heading on the left and the action on the right. At smaller widths, move the action below the copy. The button is 48 px high. Its label is “Start a conversation.”

Put a 1 px rule above the footer. Use 32 px vertical footer padding and at least 24 px between link areas. Each link has at least a 44 px high interaction area. Keep Resume, Privacy, LinkedIn, and Email destinations. Use the same JL mark and indigo accent as the navigation.

### Motion and interactive behavior

These are proposed runtime values. A static image cannot demonstrate them.

| Interaction | Behavior | Duration | Reduced-motion behavior |
| --- | --- | --- | --- |
| Navigation selection | Move a thin selected fill between current links; preserve labels | 180 ms | Instant state change |
| Button hover | Increase contrast slightly and move arrow 2 px | 120 ms | Color change only |
| Button press | Scale to 0.98 while pressed; restore on release | 90 ms | No scale |
| Project hover | Lift card 3 px; keep the label stable; zoom image to 1.02 | 180 ms | No lift or zoom |
| Work filtering | Fade changed cards with stable reading order; announce result count | 160 ms | Instant result change |
| Research diagram | Reveal connections once after the section becomes visible | 300 ms | All connections visible immediately |
| Anchor navigation | Keep the destination clear of the sticky header | Up to 300 ms | Immediate scroll |
| Contact feedback | Show a clear focus and pressed state | 120 ms | No movement |

Use an ease-out curve such as cubic-bezier(0.2, 0.8, 0.2, 1). Avoid bouncy springs on large text. Do not hide essential content until an entrance animation succeeds. Avoid autoplay carousels, cursor trails, constant shimmer, and scroll-controlled portrait motion.

Use a static, more opaque material if blur is unavailable. Provide reduced motion and reduced transparency behavior where supported. Also provide an explicit appearance option if reliable platform preference detection is unavailable. These web behaviors require deliberate implementation.

### Responsive layout

| Width | Side gutter | Main layout | Type and spacing |
| --- | --- | --- | --- |
| 1,280 px and above | Centered, at least 40 px; 120 px at 1,440 px | Desktop arrangements | Hero 64/68; sections 48/52; major gap 96 |
| 768-1,279 px | 24 px | Hero and research may stack when copy no longer fits; work and services use two columns; pathway uses ordered stacked stages | Hero 48/52; sections 40/44; major gap 72 |
| Below 768 px | 20 px | One column; menu replaces full navigation; text comes before image | Hero 40/44; sections 32/36; body 16/24; major gap 56 |

At 390 px wide, content width is 350 px. Use 20 px card padding and 20 px card gaps. Allow action groups and filters to wrap. Use an accessible filter menu if the full set cannot fit. Do not shrink labels into unreadable pills. Keep 48 px primary controls and at least 44 px link interaction areas.

### Accessibility and implementation acceptance

WCAG text contrast requires at least 4.5:1 for ordinary text and 3:1 for qualifying large text. Measure actual foreground/background combinations, including every glass state. [W3C: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Before release, check keyboard navigation, visible focus, meaningful link labels, heading order, image descriptions, menu operation, filter result announcements, text zoom, and narrow widths. Check reduced motion, reduced transparency, and contrast settings. These checks have not been run against a live implementation in this task.



## 4. Revised pathway: researched simplification

This section supersedes version 2's full-page dissection composition. See pathway-research.md for the 23-site review and evidence limits. The following values are project recommendations, not measurements copied from those websites.

### 4.1 Section identity

Keep the eyebrow “ABA-INFORMED DESIGN PATHWAY”, the heading “From observation to useful change.”, and the supporting sentence “Behavioral ideas are translated into everyday design decisions. Technical terms appear only where they add precision.”

Center the intro within 800 px. Use 12 px from eyebrow to heading, a 40/44 px heading, 16 px before supporting copy, and 48 px before the first stage.

Keep the original card order: 01 left, 02 right, 03 left, 04 right, 05 left. Keep all original words and the original icon-left internal layout. The simplification changes evidence presentation, not the original copy.

### 4.2 Visual hierarchy and geometry

The main card is primary, the interface crop is secondary, and the rail is background structure. Show one crop, one target, and one short annotation per stage. Remove full website screenshots, repeated navigation, portraits inside previews, browser frames, confetti, and three-subpoint caption strips. Keep added research notes at one source/details destination below the section.

Do not overlap cards or crops. The current clutter correction overrides version 2's overlapping background planes. Only one target receives strong indigo emphasis in a viewport. Keep all original body text at full contrast.

Use the existing 1,200 px container with 120 px side margins at a 1,440 px viewport. Coordinates are relative to that container.

| Element | Odd stages 01, 03, 05 | Even stages 02, 04 |
| --- | --- | --- |
| Main card | x=0; width 552 px | x=648; width 552 px |
| Supporting crop | x=672; width 432 px maximum | x=96; width 432 px maximum |
| Crop height | 160-240 px | 160-240 px |
| Card-to-crop edge separation | 120 px | 120 px |
| Main card height | 352 px minimum; grow for text | Same |
| Stage height | 400 px minimum; grow for text | Same |
| Gap between stages | 64 px | 64 px |
| Quiet sequence rail | x=600 | x=600 |

Center each crop against its card's body region. Keep at least 32 px clearance to unrelated content. Five minimum rows plus four gaps use 2,256 px. Intro and source/footer space are additional. Do not shrink the original type to force a shorter section.

### 4.3 Original internal card layout

Use the original icon on the left and the original text stack on the right. Do not move the icon above the title. Do not place the stage number inside the text stack.

Each card uses 32 px padding. Use a 56 × 56 px icon tile, a 24 px icon-to-text gap, and a flexible text column. At 552 px card width, the text column is 408 px: 552 - 64 padding - 56 icon - 24 gap. Align the icon tile vertically with the body region, as in the original. Keep the text stack top aligned.

Keep the small numbered badge attached to the upper-left card edge. Use a 40 px badge and a 12 px outward offset. Maintain the same badge corner on even cards; do not mirror their internal layout.

Text stack order: technical eyebrow, title, explanatory paragraph, design implication. Use 12/16 px uppercase eyebrow, 22/28 px title, 16/24 px body, and 14/22 px implication. Use 8 px between eyebrow and title, 12 px before the body, and 16 px before the implication. Use a 24 px card radius and a 16 px icon-tile radius. Use consistent 1.5 px line icons: eye, signpost, steps, shield-check, and measurement chart.

The card surface is #FCFCFA at 98% opacity over a quiet backdrop, with a 1 px #DFE0E5 rim. Use the quiet content shadow already defined. Keep the surface readable without backdrop blur. This is a standard-material content treatment, not repeated clear Liquid Glass.



For version 3, prefer opaque #FCFCFA cards and no shadow. Use the existing quiet 3% content shadow only when required for separation. Do not add lensing or thick glass edges to these content cards.

### 4.4 Focused crops and mirrored perspective

Use a component-level crop that proves the card's point. Do not include a separate website shell. Use a 16 px maximum outer radius and a 1 px neutral boundary, with no decorative shadow. Keep the controls identifiable. Glass can appear on an illustrated functional control, not on the entire crop surface.

Retain the user's mirrored perspective preference at a smaller scale. Odd crops use rotateY(-4deg) and rotateZ(1deg). Even crops use rotateY(4deg) and rotateZ(-1deg). Use 1,600 px perspective and rotateX(0deg). These are maximum values. Use a flat crop when that is clearer. Never mirror text or use scaleX(-1). Main cards stay flat.

### 4.5 One connector system

Use one straight vertical rail at x=600, with a 1 px #D9D8E9 stroke. Begin near the first stage and end near the last. Do not extend it through large empty areas.

Each stage has one local horizontal branch to its target. Keep the target near the crop edge facing the card, so the branch is approximately 120-180 px long. Use a 1.5 px stroke and a 6 px outlined target ring. Inactive branches stay neutral; the active branch may use indigo.

The rail and its branches are one system. No winding vine, arrow chain, curved route, or second sequence spine is permitted. Do not duplicate numbers on the rail: the original badges provide the count. Keep lines outside paragraphs and control labels. Place targets after transforms and recalculate them on resize. If the branch is too long, adjust the crop framing instead of crossing other content.

### 4.6 Five-stage storyboard

| Stage | Focused crop | Single annotation | State label |
| --- | --- | --- | --- |
| 01 | Hero headline and primary action; no portrait or global navigation | One clear next action | None |
| 02 | Selected-work filter and selected state; no project screenshots | A recognizable selected state | None |
| 03 | Proposed Project / Details / Review stepper and optional help | Help at the relevant step | Interaction study |
| 04 | Proposed confirmation component with small check and return action | A clear completion state | Interaction study |
| 05 | Proposed user-defined task goal and observation criteria | Success defined with users | Evaluation plan |

Use 14/20 px annotations with at most eight words. Use 12/16 px proposed-state labels. Do not add extra pills or repeated explanatory prose. Do not claim that a pictured message was sent or a test was completed. No invented numerical results are permitted.


Revision 3.1 detail rules: Use 40 px from the lowest transformed edge of each example to the top of its external caption group. Keep 12 px between a state label and the following annotation. Place all captions outside the example frame, including stage 05. Keep captions aligned to the example's left edge. These values override earlier local caption gaps.

For stage 02, show only the All work / Commerce / Research controls and their divider. Do not repeat “Selected work” inside the crop. For stage 04, center the check icon, “Message sent” heading, and return link on one horizontal center axis. Stack them vertically with 16 px gaps and balanced panel padding. This changes the example only; the main process card retains its icon-left/text-right layout.

For stage 05, join the branch directly to the main-card border and the facing example border. Center the endpoint ring on the example border. Join the vertical rail to the branch without a gap, and terminate it at that junction without a dangling tail. Resolve anchors after the example transform.


Revision 3.2 stage 02 exception: Size the filter example to its content. Use approximately 20 px vertical and 24 px horizontal padding around the readable tab row, with a maximum width near 390 px. Remove the divider and unused lower area. This compact example is exempt from the general 160–240 px crop-height range. Center its frame horizontally in its column and vertically against its paired process card. Keep the caption outside with the 40 px gap. Recalculate the connector after resizing. Do not reduce the tab font size to make the frame smaller.

### 4.7 Research transfer

Mike De Bastiani supplies the scan-versus-depth model. Paco Coursey supplies a common axis. Emil Kowalski and Clerk supply focused component demonstration. Josh Comeau and Maxime Heckel supply incremental explanation. Spline supplies a named sequence. Product pages such as Linear, Resend, and Framer supply repeated explanation/evidence structure.

These are selective lessons, not a license to combine every effect. See pathway-research.md for all 23 websites, evidence types, and rejected patterns.

## 5. Locked original pathway copy

The source is page 2 of the original portfolio capture. OCR was checked against the visual page. Keep wording, spelling, punctuation, and capitalization. Line wrapping may adapt to width. Preserve the original internal hierarchy described above.

### 01

Technical eyebrow: STIMULUS SALIENCE AND ATTENDING

Title: Make What Matters Easy to Notice

Body: Visual hierarchy, contrast, and placement make task-relevant information easier to distinguish from supporting detail. The most useful next action should stand out without competing unnecessarily for attention.

Design implication: prioritize the next useful action, then layer in supporting detail.

### 02

Technical eyebrow: DISCRIMINATIVE STIMULI

Title: Use Clear Cues for Action

Body: Labels, controls, and interface states should signal which actions are available and which are likely to work. Consistent cues reduce guesswork and help people move through a system with greater confidence.

Design implication: use stable labels, recognizable controls, and predictable states.

### 03

Technical eyebrow: TASK ANALYSIS, PROMPTING, AND FADING

Title: Support Progress in Manageable Steps

Body: Complex tasks become more approachable when they are divided into meaningful steps and supported at the moment help is needed. That assistance should gradually recede as the person becomes more capable of completing the task independently.

Design implication: sequence difficult tasks, provide timely guidance, and fade support when it is no longer needed.

### 04

Technical eyebrow: CONSEQUENCES AND REINFORCEMENT

Title: Make Outcomes Clear and Consistent

Body: Immediate, accurate feedback helps people determine whether an action worked. A consequence functions as reinforcement only when it makes the behavior it follows more likely to occur again.

Design implication: confirm outcomes, preserve progress, and make effective actions easy to repeat.

### 05

Technical eyebrow: SOCIAL VALIDITY AND DATA-BASED DECISIONS

Title: Measure Meaningful Outcomes

Body: A useful system should be evaluated by outcomes that matter to the people using it. Measure whether important tasks become more successful, efficient, or independent, identify barriers, and revise the environment when results fall short.

Design implication: define observable success with users and let the results guide refinement.

## 6. Research basis for each stage

These sources support design decisions. The website mapping is a design inference. It does not show that clinical learning results automatically transfer to portfolio visitors.

| Stage | Research or official source | Supported point | Application and limit |
| --- | --- | --- | --- |
| 01 | W3C, Make the Purpose of Your Page Clear [R1] | Descriptive headings and clear signposts help identify context | Make the hero hierarchy and primary action visible. Confirm effectiveness with users |
| 02 | W3C, Use a Consistent Visual Design [R2]; Understandable objective [R3] | Repeated controls, states, and relationships should remain recognizable | Connect the active work tab to its visible result. Calling it a cue is appropriate. Calling it a demonstrated discriminative stimulus requires evidence of a learning history |
| 03 | W3C, Multi-page Forms [R4]; primary experiment on transfer of stimulus control [R5] | Logical form stages can show progress. Prompt removal is a separate learning procedure | Use optional help and preserve progress. Offer reduced default help as an option. Do not remove help solely because time passed or an animation finished |
| 04 | W3C, User Notification [R6] | People need clear success and error information | Show completion and recovery. A pleasant confirmation is feedback. It is not established as reinforcement unless later behavior shows that function |
| 05 | Wolf's original social-validity work [R7]; original study gathering autistic adults' input [R8] | User judgments of goals, procedures, and outcomes matter | Define successful tasks with users. Collect acceptability and clarity feedback, not clicks alone. Do not present the illustrative evaluation plan as collected results |

### Suggested observation measures

For stage 01, observe whether a visitor can identify the main action. For stage 02, check whether the visitor predicts the filter result. For stage 03, record independent task completion, help requests, and errors. For stage 04, check whether the visitor can identify success and recover from an error. For stage 05, ask whether the goal and procedure are useful and acceptable to the visitor. These are proposed evaluation tasks. They are not measured findings.

## 7. Motion, responsive behavior, and accessibility for the pathway

The scene must remain understandable without motion. Keep body text visible at first paint. A target border or ring can change over 120-160 ms. Do not move main cards, animate all crops together, or scroll the page automatically. Under reduced motion, use immediate state changes and fixed or flat crops.

Use the desktop alternation at 1,280 px and above only while text retains its width. At 768-1,279 px, place each card before its crop, with 24 px between them and 64 px between stages. On phones, use 20 px side gutters, no transforms, no overlap, and no long leaders. Preserve the original icon-left arrangement and allow height to grow.

At 390 px, use a 350 px card, 20 px padding, a 40 px icon, a 16 px gap, and a 254 px text column. Keep body text at 16/24 px. Do not turn original paragraphs into tiny captions.

Use an ordered list of five stages in reading order. Describe relationships in text. Hide decorative connectors from assistive technology when their meaning is already stated. Describe informative crops. Pictured controls are illustrations, not interactive forms.

Use at least 4.5:1 ordinary-text contrast and 3:1 qualifying-large-text contrast. Keep visible focus. Use shape and text as well as color for states. Use opaque surfaces and clear boundaries in higher contrast or reduced transparency.

## 8. Acceptance checklist

- All five original technical labels, titles, bodies, and implications match Section 5.
- Original icon-left/text-right order and upper-left badges remain intact.
- Cards alternate left, right, left, right, left on desktop.
- Each stage has one crop, one target, and one short annotation.
- No repeated global navigation, embedded portrait, browser frame, or full-page preview remains.
- No content surfaces overlap.
- One straight rail with short local branches communicates sequence. No winding vine remains.
- Perspective is limited to mirrored Y angles of 4 degrees and Z angles of 1 degree. Text is never mirrored.
- Added research notes remain outside the default scene.
- Proposed states are labeled; no outcome is invented.
- Existing typography, color, gutters, and spacing remain consistent.
- Only one target is strongly emphasized within a viewport.
- The narrow layout preserves all content without transforms or long leaders.
- The research report records 23 first-party websites and evidence limits.
- Raster output is inspected. This file defines exact production geometry.

## 9. Sources and local design inputs

Official sources were checked on 17 October 2026. The project dimensions above are customizations.

- [A1] Apple, Materials: https://developer.apple.com/design/human-interface-guidelines/materials
- [A2] Apple, Layout: https://developer.apple.com/design/human-interface-guidelines/layout
- [A3] Apple, Typography: https://developer.apple.com/design/human-interface-guidelines/typography
- [A4] Apple, Motion: https://developer.apple.com/design/human-interface-guidelines/motion
- [A5] Apple, Color: https://developer.apple.com/design/human-interface-guidelines/color
- [A6] Apple, Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility
- [R1] W3C WAI, Make the Purpose of Your Page Clear: https://www.w3.org/WAI/WCAG2/supplemental/patterns/o1p01-clear-purpose/
- [R2] W3C WAI, Use a Consistent Visual Design: https://www.w3.org/WAI/WCAG2/supplemental/patterns/o1p03-consistent-design/
- [R3] W3C WAI, Help Users Understand What Things are and How to Use Them: https://www.w3.org/WAI/WCAG2/supplemental/objectives/o1-understandable/
- [R4] W3C WAI, Multi-page Forms: https://www.w3.org/WAI/tutorials/forms/multi-page/
- [R5] Assessing Transfer of Stimulus Control Procedures Across Learners With Autism: https://pmc.ncbi.nlm.nih.gov/articles/PMC2779927/
- [R6] W3C WAI, User Notification: https://www.w3.org/WAI/tutorials/forms/notifications/
- [R7] Wolf, M. M. (1978), Social validity: the case for subjective measurement or how applied behavior analysis is finding its heart. DOI: https://doi.org/10.1901/jaba.1978.11-203 ; PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC1311293/
- [R8] The Social Validity of Behavioral Interventions: Seeking Input from Autistic Adults: https://doi.org/10.1007/s10803-024-06297-3
- [R9] W3C, Contrast Minimum: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

Local design inputs: the original five-page portfolio capture; the 16 October portfolio review; the approved ivory-and-indigo concept; and both 17 October sketches. The sketch lines illustrate perspective and relationships only. They are not UI copy, fields, or controls to reproduce.

## 10. Revision history

Version 3 replaces full-page previews, large perspective, repeated captions, and a winding path with focused component crops and one sequence rail. Locked original copy and global tokens remain. Research: pathway-research.md, 23 first-party sites, 17 October 2026.

Version 3.1 adds example-to-caption spacing, removes the repeated stage 02 label, centers the stage 04 confirmation group, and connects stage 05 lines to its panel borders. Original process-card wording remains unchanged.

Version 3.2 makes the stage 02 example fit its filter controls while retaining horizontal and vertical centering.
