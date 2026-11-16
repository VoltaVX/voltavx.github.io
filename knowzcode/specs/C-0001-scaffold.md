# C-0001 scaffold specification

Status: As-Built, verified. Updated: 2026-10-09. Independent audit passed.

Evidence: docs/verification/C-0001.md. Bootstrap implementation history: Git, C-0001 commit.

## Rules & Decisions

Implement one static Astro scaffold within the user-requested scope. ADR-0001 and root AGENTS.md govern the accepted module boundaries and dependencies.

## Interfaces

Routes: /, /system/, /404.html. BaseLayout props: title, description, noindex. ActionLink: href, variant, slot. SectionHeading: eyebrow, title, description. URL helpers: normalizeBase, localPath, deploymentSettings, withBase. Public site config: name, description, email, language.

## Verification Criteria

### Hosting

VERIFY: H1: Astro emits static HTML. A clean npm ci plus build succeeds on Node 24.
VERIFY: H2: localPath handles root and repository bases; invalid bases fail visibly.
VERIFY: H3: all local links, favicon, CSS, and canonical URLs work at / and /preview/.
VERIFY: H4: Pages workflow uses configured origin/base, least job permissions, dependency lockfile, checks, browser tests, upload, and deployment. PRs validate without deployment.

### Interface

VERIFY: U1: homepage, design-system page, and 404 render semantic landmarks, unique titles, one h1, and descriptions.
VERIFY: U2: shared tokens and components give consistent typography, spacing, buttons, cards, and section headings.
VERIFY: U3: skip link and visible keyboard focus work. Navigation and details work without JavaScript.
VERIFY: U4: axe AA tags report no violations. Pages reflow at 320px with doubled root font size, without horizontal overflow.
VERIFY: U5: Chromium desktop/mobile, Firefox, and WebKit acceptance tests pass. Inspect desktop and mobile screenshots for clipping and squashed content.

### AgentContext

VERIFY: A1: root AGENTS.md is compact; module contracts state ownership, interfaces, dependencies, invariants, and constraints.
VERIFY: A2: .ai/state.json records current state, change ID, modules, architecture version, open work, and validation status.
VERIFY: A3: six indexed on-demand workflows cover routing, planning, minimal implementation, ADRs, review, and handoff.
VERIFY: A4: ADR-0001 records rationale and rollback. The supplied standard remains available as the governing project policy.
VERIFY: A5: KnowzCode CLI output includes knowzcode_loop.md and the Cursor adapter; project/preferences/tracker/specs/handoff are personalized. No cloud memory or credentials required.
VERIFY: A6: Git records the bootstrap. Handoff includes goal, change, completion, state, next action, constraints, files, risks, ADR, and tests.

### Verification

VERIFY: V1: behavioral URL tests fail before the helper exists, then pass after implementation.
VERIFY: V2: Astro check reports zero errors. Meaningful browser tests enforce H3 and U1/U3/U4.
VERIFY: V3: an independent reviewer reads the spec, implementation, diff, and evidence without builder reasoning. At most three repair iterations.

## Debt & Gaps

Manual screen-reader/physical-device testing and real GitHub deployment are outside this bootstrap execution. The workflow is prepared and locally validated. Do not claim those checks passed.

### Out of scope

Publishing to a user's GitHub account, application AI, authentication, forms with a server handler, databases, analytics, image generation, additional page families, and speculative infrastructure.
