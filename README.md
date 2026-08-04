# Juan Lopez Portfolio

A static Astro 7 and TypeScript portfolio for Juan Lopez, centered on behavior analysis, research, and humane digital systems.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Open `voltavx-portfolio.code-workspace` in VS Code to load the recommended extensions and the development, check, verification, and preview tasks.

The normal server binds to `127.0.0.1` for a safe local default. Use `npm run dev:container` only when Docker or a remote workspace must expose the forwarded port.

## Development diagnostics

Astro's managed background development server is the project's debugging sidecar. It produces structured logs and exposes status without adding a second server, runtime package, production route, or visitor telemetry. Anonymous framework-usage reporting is disabled by the wrapper; local diagnostic logging remains verbose.

```bash
npm run dev:agent
npm run dev:status
npm run dev:logs
npm run dev:logs:follow
npm run dev:stop
```

While it is running, `http://127.0.0.1:4322/_astro/status` reports development-server and HMR health. `npm run dev:info` prints the relevant Astro, Node, package-manager, platform, and adapter versions. `npm run debug:build` emits inspectable development build output; run the normal production build again afterward. Broad Vite verbose logging is deliberately not enabled because it can print environment values.

Astro's development toolbar remains enabled and includes its Audit app. The production CSP is intentionally generated only during `build`/`preview`, because Vite development requires its own inline styles and scripts.

## Contact behavior

The native action is a real, same-context `mailto:` link. Chrome delegates it to the browser/operating-system protocol handler, so it honors Apple Mail, Outlook, Spark, Thunderbird, a registered webmail handler, or any other configured default. The site does not attempt to detect installed applications or cancel the click.

The form progressively enriches the subject and body. Long messages omit the native URL body to keep the app handoff reliable; Gmail Web and clipboard actions preserve the full message. SMS is shown only when `PUBLIC_PHONE_NUMBER` is configured.

## Verification and publishing

```bash
npm run verify
npm run zip
```

`verify` audits production dependencies, type-checks, builds from source, checks CSP and stylesheet output, validates contact fallbacks, and fails when a built page points to a missing local asset. The archive script excludes dependencies, build output, caches, secrets, logs, prior archives, and macOS metadata.

The pinned GitHub Actions workflow deploys `main` to GitHub Pages. Dependabot checks npm and Actions weekly, and CodeQL scans JavaScript and TypeScript. The canonical site and `public/CNAME` target `https://voltavx.com`.

Repository settings still matter: enable HTTPS, branch protection, Dependabot alerts, secret scanning, code scanning, and protection rules for the `github-pages` environment.

## Security model

This is a static site with no database, login, session, form API, or storage of contact data. Astro generates a hash-based production CSP for the processed scripts and styles; the policy does not allow `unsafe-inline` or `unsafe-eval`. Adding a form backend would be a separate architecture and threat-model change, including server-side validation, abuse controls, rate limiting, and monitoring.

Project and research records live in `src/content/`; shared UI is in `src/components/`; browser enhancements are in `src/scripts/`; design tokens and responsive layout are in `src/styles/global.css`.
