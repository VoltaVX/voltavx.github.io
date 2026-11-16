# ADR-0002 — Portfolio UI specification authority

Status: Accepted
Date: 2026-10-17
Related change: C-0003

## Problem

The scaffold embeds a large generic UI specification in root AGENTS.md. Its palette, spacing, typography and material values conflict with the approved portfolio. Agents need an efficient route to detailed requirements without loading all component details for every task.

## Constraints

Preserve static output, dependency direction, current harnesses, public component interfaces and package versions. The user explicitly requests a component specification folder and mandatory agent lookup. Specifications must not become Astro routes.

## Options

1. Expand root AGENTS.md: easy discovery but excessive repeated context and drift.
2. Put independent rules beside each component only: local detail, but weak cross-component authority and poor coverage before components exist.
3. Use one docs/ui authority with an indexed component catalog and short root/local routers.

## Decision and reason

Choose option 3. docs/ui/design.md defines project authority and shared rules. docs/ui/components/ defines element-level contracts. docs/ui/manifest.json indexes coverage and CSS ownership. Root and local AGENTS.md require reading the main specification and affected component files before UI edits. Existing workflows route to that same source. A dependency-free check verifies structural reachability and registry integrity.

Keep the five CSS cascade layers and two layout imports. Add portfolio.css inside the Styles module; global.css imports it and the existing adapter. This is an additive style-file organization, not a new runtime layer.

## Consequences

Positive: one current UI authority, smaller automatic instruction context, explicit coverage, no new dependency, reusable styles.
Negative: agents must deliberately open linked specs; instructions and checks cannot guarantee model obedience. Actual visual and accessibility behavior still needs browser/user review.

## Rollback

Revert C-0003. No persistent data or hosting change is involved. Restore the matching prior CSS and UI instruction set together.
