# Security policy

## Reporting a vulnerability

Please report suspected vulnerabilities privately to `voltavxofficial@gmail.com`. Include the affected URL, a concise reproduction, the expected impact, and any relevant browser or platform details. Do not include sensitive personal, health, or client information.

Please avoid public disclosure until the issue has been reviewed and a correction can be prepared.

## Scope

The deployed portfolio is a static Astro site. It does not accept server-side contact submissions, authenticate users, store visitor messages, or expose an application API. The source repository, dependency tree, GitHub Actions workflows, generated static assets, custom domain, and browser-side contact behavior are in scope.

## Implemented controls

- Astro generates the production Content Security Policy and hashes every processed script and style. Development does not receive the production policy because Vite HMR requires development-only execution.
- Browser enhancements are checked TypeScript modules processed by Astro; native email remains functional when JavaScript is unavailable.
- Dependency versions are integrity-locked, top-level versions are exact, production dependencies are audited on each deployment, and Dependabot monitors npm and GitHub Actions.
- Project-level npm lifecycle scripts are disabled by default. Any dependency that newly requires an install script must be reviewed before an explicit exception.
- GitHub Actions are pinned to full commit SHAs, use job-scoped permissions, and run CodeQL plus the same release verification used locally.
- Generated pages are tested for missing local scripts, styles, images, and links before deployment.
- Development diagnostics stay local, exclude form content and environment values, and are omitted from release archives.

These supply-chain controls reflect the practical failure mode documented by JFrog Security Research: trusted packages or dependencies can be republished with malicious install hooks while leaving most application code unchanged. See [JFrog's npm supply-chain analysis](https://research.jfrog.com/post/easy-day-js/).

## Known development-only advisory

The full development tree currently reports `GHSA-7p8r-x3mc-p8w7` in `fast-uri`, reached through `@astrojs/check` and its YAML language-server tooling. npm reports no available fix. It is not in the deployed production tree (`npm audit --omit=dev` reports zero known vulnerabilities), and Dependabot remains enabled to surface an upstream resolution.

## If a form backend is added

The current contact form launches visitor-controlled applications and sends no request to this site, so client-side cooldowns or artificial race conditions cannot prevent server abuse. A future submission API must add server-side schema validation, request-size limits, rate limiting, bot defenses, origin/CSRF controls as appropriate, privacy-safe monitoring, and retention rules before deployment.
