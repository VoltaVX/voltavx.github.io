# User Development Preferences

**Last Updated:** 2026-10-09T04:45:00Z
**Source:** User-supplied Minimal-Delta standard. Tool choices below are documented bootstrap defaults in ADR-0001.

## Core Principles

One iteration has one primary intent. Minimum valid diff. Preserve architecture and interfaces unless the user requests a change. Stop when acceptance criteria pass. No raw model reasoning logs.

## Testing Approach

Node tests for pure behavior; Playwright and axe for UI/hosting; Astro Check for types. TDD for meaningful behavior implementation. Targeted visual/semantic validation for reversible CSS/text patches. No percentage coverage target was requested; validate declared acceptance behavior.

## Code Style

Strict TypeScript; ESM; PascalCase Astro components; two-space source indentation. Preserve formatting outside the changed area. No formatter or linter package selected. Native HTML/CSS before a new dependency or abstraction.

## Language-Specific Patterns

Static Astro rendering. Relative font units and shared CSS tokens. Native links/details. Local URLs through withBase. No default client hydration or UI framework.

## Quality Priorities

1. User control over architecture and scope.
2. Small, reversible, inspectable changes.
3. Traceable evidence and efficient session continuation.

Accessibility and responsive behavior are acceptance requirements for the web base.

## Project-Specific Conventions

Git owns implementation history; ADRs own architectural rationale; .ai/state.json owns current state; contracts own module rules; KnowzCode specs own acceptance criteria; tests own evidence. C-XXXX IDs join these records. Load detailed context only when relevant.

## Integration with KnowzCode

Use phases and quality checks within the user's authorized scope. User instructions override generated defaults, including proportional tests and stopping at completion. Do not preload all framework docs or introduce a cloud memory service. No approval is implied for a future architecture change beyond its explicitly requested scope.
