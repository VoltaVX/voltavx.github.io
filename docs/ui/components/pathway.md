# Five-stage pathway, examples and callouts

Current as-built authority: [design.md](../design.md). CSS owner: `src/styles/portfolio.css`. Version 5.0, 2026-10-20. Read [foundations](foundations.md) for shared tokens. Historical C-0003–C-0011 values do not override this document.

## Identity and locked anatomy

Keep eyebrow ABA-INFORMED DESIGN PATHWAY, heading “From observation to useful change.” and original supporting sentence. Align the homepage intro text to the start edge of its section content; do not center its text or add automatic inline margins. Keep the complete alternating stage sequence in a70rem maximum-width rail centered within the shared page rail; each stage keeps its paired card, example and callout as one balanced composition. Preserve the central connector and alternating directions. Intro-to-first-stage is32–48px fluid at768+ and64px below768px. Keep five original cards in order01–05 and icon-left/text-right anatomy at every width. Card copy below is locked; wrapping may adapt.

## Current geometry

| Element | Rule |
| --- | --- |
| Page container |shared75rem maximum container; stage sequence is centered at70rem maximum; ordinary shared gutters |
| Alternate layout at896+ | two equal tracks; odd card left, even card right |
| Track gap |96px at1280+;48px at896–1279 |
| Main card inset / icon / icon-text gap |32 /56 /24px at1280+;24 /48 /16px at896–1279 |
| Phone card inset / icon / text gap |20 /40 /16px below768 |
| Card minimum / stage minimum |Cards have no minimum height and fit their text plus documented padding at every width; desktop stage retains432px for example/callout connectors; stacked stage has no fixed minimum |
| Between complete stage groups |64–96px fluid |
| Default example / compact02 width |432px maximum /fit-content up to390px |
| Main/sample stacked separation |40px with attached downward arrow |
| Sample/callout separation |16px stacked;26px desktop including10px twist allowance |

At768–895px cards are stacked and retain base32px inset/56px icon geometry. Badge40px stays attached12px above the top edge and12px inward from the inline start. Text order:12px eyebrow, H3 title,16/24 body,14px implication; title gap8px, body12px, implication16px. Main cards use the shared frosted content material with24px corners and quiet rim; do not change original internals to fit a raster.

Above896px each figure uses symmetric1fr auto1fr rows: sample in middle, callout at bottom, equal reserved space above. Figure stretches with stage, so sample center aligns to card/branch midpoint while long callout content expands stage. Do not position the caption absolutely. Narrow figures use normal block flow, flat samples, captions after16px, no central rail. All stages include explanation card, example and callout before the next stage gap.

## Examples and connectors

Keep one sample/annotation per stage, no full browser screenshot, repeated nav or clutter. Odd examples use perspective1600px, rotateY−4deg/rotateZ1deg; even+4deg/−1deg. Main cards stay flat; reduced motion/forced colors/unsupported geometry flatten samples. Never mirror text.

Desktop one quiet1px center rail and1.5px local branches connect card to facing sample edge, with6px target ring. The final rail ends at05 branch without tail. Branch uses current stage-gap continuation token; no detached guessed endpoints. If container units are unsupported, hide desktop decorative geometry. Narrow40px vertical arrow remains anchored to sample top; print hides connectors.

02 shows only All work / Commerce / Research, selected state, no Selected work label/divider/dead area;20px block and24px inline padding at wide widths,16px padding /8px gap in the narrow adaptation. Its actual sample frame stays snug and centered on both axes against paired card, excluding callout.04 check/Message sent/return stack shares one horizontal center axis,16px gaps.05 branch touches card and facing sample border, target centered on border.

Every callout is a semantic figcaption inside its own figure, small Example01–05 label, original proposed-state label when present, then original annotation. Use16px corners/inset,8px inner gaps, primary ink, decorative pointer and restrained standard-material-inspired frosting. One blur surface only. At least16px projected frame clearance. No fixed callout height; preserve solid/off/contrast/print fallback. 03/04 are illustrative Interaction studies;05 is an Evaluation plan, not collected outcomes.

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




Shared typography follows [typography-content](typography-content.md):700-weight near-black headings and soft-slate supporting copy. Full-page Approach/About variants follow [detail-pages](detail-pages.md); homepage anatomy and local spacing remain unchanged.

## Verification

Follow [the verification procedure](../verification.md). Check affected widths, long text, enlarged text, focus/keyboard and preferences. Source checks do not establish rendered fidelity, browser behavior or accessibility conformance.

## Cross-page spacing and materials

Inherit the [foundations spacing ownership and material tiers](foundations.md#single-spacing-owner), updated C-0018. Equivalent components on every route use the homepage tokens. Content surfaces use the70%-white/18px frosted tier, navigation the60%-white/24px tier; nested data cells, source panels and form fields stay unblurred. Preserve the local geometry and named exceptions above. Grid/flex spacing must not accumulate child margins; normal-flow spacing is leading-only. Verify actual computed spacing, equal side insets, long text and accessibility material fallbacks.
