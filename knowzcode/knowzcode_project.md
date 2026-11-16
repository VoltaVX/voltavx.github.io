# Project Overview

## Goal

**Goal:** Create a reusable static Astro website base for GitHub Pages with an accessible shared design and controlled GPT development workflows.

**Core Problem:** Starting each project from scratch repeats UI and deployment work. Unbounded agent changes make architecture hard to control and sessions hard to resume.

## Stack

| Category | Technology | Version |
| --- | --- | --- |
| Language | TypeScript / Astro templates / native CSS | TypeScript 6.0.3 |
| Backend Framework | None: static build | Not applicable |
| Frontend Framework | Astro | 7.3.8 |
| Database | None | Not applicable |
| ORM/ODM | None | Not applicable |
| Testing (Unit) | Node test runner | Node 24 |
| Testing (E2E) | Playwright + axe | 1.64.0 / 4.13.0 |
| Key Libraries | Astro Check / Node types | 0.9.10 / 24.19.1 |
| Package Manager | npm with package-lock.json | npm 11 |
| Test Command | npm test; npm run test:e2e; npm run check | |
| Build Command | npm run build | |

## Architecture

**Style:** Static site; local presentation modules; no runtime service.

Pages compose a shared layout and small components. Layout/components read public config and base-aware URL helpers. CSS tokens define the shared design. The Pages workflow uses configured origin/base metadata. Agent workflow records are development files; they are not application runtime code.

See root AGENTS.md for dependency direction, docs/adr/ADR-0001-static-astro-base.md for accepted decisions, and .ai/state.json for current work. Architecture documentation is a descriptive map; ADRs own durable rationale.

## Standards

- Formatter/linter: no extra package configured; use consistent two-space source indentation and scoped changes. Add a formatter only as its own authorized intent.
- Type checking: strict Astro/TypeScript; npm run check.
- Commit convention: Conventional Commits plus meaningful C-XXXX ID.
- File naming: PascalCase Astro components; kebab/lowercase routes and utility files.
- User Minimal-Delta instructions take precedence over framework defaults.

## Testing

Behavior changes use meaningful failing tests before code. URL/config helpers use Node tests; UI/hosting changes use real-browser checks. No arbitrary numeric coverage target was requested. Bootstrap defaults cover public URL cases, navigation, metadata, local resources, axe AA tags, keyboard focus, no-script behavior, and reflow.

Tests live in tests/unit and tests/browser. VoiceOver/NVDA and physical-device validation are manual release checks. Do not claim model compliance from document tests.

## Security Priorities

No authentication, authorization, persistence, or user-input server is present. All site config is public. Keep credentials out of source and client HTML. Private APIs or runtime AI require separate approved architecture. Browser deployment uses least job permissions; PRs never deploy.


## Current visual authority

The scaffold is now prepared for Juan's approved VoltaVX portfolio. Read docs/ui/design.md and the affected component catalog before any UI change. C-0004 replaces the placeholder homepage with semantic portfolio sections and progressive work filtering. The application remains static; detailed source material links to original voltavx.com pages. C-0003 owns validation; ADR-0002 owns the specification-ownership decision.
