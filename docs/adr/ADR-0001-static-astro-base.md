# ADR-0001: Static Astro base with explicit agent change control

Status: Accepted
Date: 2026-10-09

## Problem

Create one reusable website scaffold that works on GitHub Pages and gives GPT agents a clear, controlled way to change it.

## Constraints

The user requires Astro, GitHub Pages, KnowzCode, Modern Web Guidance, minimal iterations, clear architecture control, traceable decisions, and efficient on-demand context. The initial request authorizes this bootstrap architecture. No existing application exists.

## Options

1. Static Astro with native HTML/CSS and repository agent context.
2. Astro with a client UI framework and CSS framework.
3. Astro with server rendering, a database, and runtime AI orchestration.

## Decision

Select option 1. Use Astro 7.3.8 static output, strict TypeScript, Node 24, native controls, shared CSS tokens, a shared layout, and three example routes. Use local helpers for repository-base URLs. Use GitHub Pages configuration metadata for deployment origin/base. Keep all generated website resources local.

Initialize KnowzCode through its published CLI. Use AGENTS.md as the compact entry point, `.ai/state.json` for current state, module contracts for boundaries, ADRs for architecture, and six repository workflow files loaded on demand. WorkGroups/specs keep one C-XXXX thread, not a second history journal. User rules override framework defaults, including acceptance-based stopping and targeted validation.

Dependencies approved by this initial design: Astro is the sole application dependency. `@astrojs/check`, compatible TypeScript, and `@types/node` provide type validation; Playwright supplies real browser verification; axe supplies automated accessibility checks. The development packages add no script to the website. Versions and transitive dependencies are fixed by package-lock.json. No formatter/linter, frontend framework, AI SDK, or external service is required.

## Reason

Astro's official Pages guide documents static hosting and the need to prefix local links when a base is configured. GitHub's configure-pages action exposes origin and base_path, including custom domains. The URL behavior is tested instead of copied into each page. Modern Web Guidance's accessibility, HTML, and CSS guides support native semantics, visible focus, relative sizing, and token-driven styling. Astro Check 0.9.10 accepts TypeScript 5 or 6, so pin 6.0.3 rather than the incompatible latest major.

References (checked 2026-10-09):
- https://docs.astro.build/en/guides/deploy/github/
- https://docs.astro.build/en/install-and-setup/
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://github.com/actions/configure-pages/blob/main/action.yml
- Modern Web Guidance: accessibility, html, css, responsive-design, color, typography.

## Consequences

Positive:
- Portable static HTML/CSS, no application client scripts, and no hosting runtime service.
- Root, repository, and custom-domain origins share one deployment contract.
- Small always-loaded instructions and targeted behavior/browser checks.
- Architecture changes have explicit records, tests, and rollback.

Negative:
- Private APIs, database writes, and runtime AI need a separately authorized architecture.
- Browser-test tools increase development install size and CI time.
- Repository instructions cannot force an AI model to comply or automatically load context in every ChatGPT client.
- Screen-reader and physical-device testing remains a manual release check.

## Rollback

Revert C-0001's bootstrap commit. No deployment or user data was changed. For a copied project, use normal feature commits and `git revert` so rollback remains traceable. If replacing hosting later, supersede this ADR and preserve the URL interface until callers migrate.

## Related Changes

- C-0001: knowzcode/workgroups/C-0001.md
- Specification: knowzcode/specs/C-0001-scaffold.md
- Bootstrap commit: locate `feat(scaffold): bootstrap static Astro base (C-0001)` in Git.
