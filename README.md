# VoltaVX — Juan Lopez portfolio

A static Astro portfolio built from the Minimal-Delta scaffold. The homepage includes behavior research, a five-stage design pathway, eight projects, services, About and email contact. The approved ivory/indigo UI and agent harnesses remain in the source. Sites hosts the private build; the original GitHub Pages workflow is retained.

## Run locally

Use Node 24 and npm. Dependencies are pinned in the lockfile.

```bash
npm ci
npm run dev
```

Open the URL printed by Astro. For a production preview:

```bash
npm run build
npm run preview
```

## Maintain the portfolio

1. Change name, public contact email, description, and language in `src/config/site.ts`.
2. Read `docs/ui/design.md` and the affected component specifications before changing visual rules. Shared CSS values live in `src/styles/tokens.css`.
3. Compose homepage sections in `src/pages/index.astro`; edit the individual presentation components in `src/components/`.
4. Keep the design-system page as a reference, or remove it and its navigation links in one intentional change.
5. The default deployment origin is the registered Sites URL. Set SITE_URL/BASE_PATH for another host. The contact link opens a mail app for voltavxofficial@gmail.com.

The ten original WebP assets are local, with provenance in docs/ui/reference/source-assets.md. Fonts are system fonts. A small client script progressively filters work; all projects remain readable without JavaScript. There are no cookies, remote fonts or model calls. Native links and disclosures work without JavaScript. The initial design uses a fixed light palette and supports forced colors.

## Deploy to GitHub Pages

1. Put the project at the root of a GitHub repository with a `main` branch.
2. Open **Settings → Pages → Build and deployment → Source**. Select **GitHub Actions**.
3. Push to `main`, or run **Validate and deploy Pages** from Actions.

The workflow validates before deployment. It reads your Pages origin and repository path from `actions/configure-pages`. Root sites, repository sites, and a custom domain configured in Pages use the same workflow. Pull requests validate without deploying.

GitHub deployment has not been executed as part of the template bootstrap. A repository and Pages configuration are required. If you use another branch, change the workflow's branch filters.

### Local URL configuration

Copy `.env.example` to `.env` when you need to preview another deployment layout. Shell/CI values take precedence. Restart Astro after changing `.env`.

| Layout | SITE_URL | BASE_PATH |
| --- | --- | --- |
| Root GitHub site | `https://username.github.io` | `/` |
| Repository site | `https://username.github.io` | `/repo-name/` |
| Custom domain | `https://example.org` | `/` |

SITE_URL must be an origin. Put the repository path only in BASE_PATH. For local page and public asset links use `withBase('/system/')` or `withBase('/favicon.svg')`. Pass unprefixed root-relative paths; use external and mailto URLs directly.

For custom domains, configure the domain and DNS through GitHub Pages. Do not hardcode the repository base. This Actions workflow gets the configured domain from Pages metadata; it does not require a template CNAME file.

## Validate a change

```bash
npm run check:ui
npm run check
npm test
npx playwright install --with-deps chromium firefox webkit
npm run test:e2e
```

On macOS or Windows, `npx playwright install chromium firefox webkit` is enough. Linux may require system dependencies; use `--with-deps` when permitted.

Check a repository-path build on macOS/Linux:

```bash
SITE_URL=https://example.com BASE_PATH=/preview/ npm run test:e2e
```

On other shells, set SITE_URL and BASE_PATH using their environment-variable syntax. Browser tests start and stop their own production preview. Clear a custom `.env` or align its URL values with the test environment. `npm run validate` combines checks, unit tests, and one browser run.

Tests cover URL behavior, all local links/resources, canonical URLs, landmarks, axe AA tags, keyboard skip/focus, no-script navigation, disclosures, and 320px reflow with enlarged text. Projects include Chromium desktop/mobile, Firefox, and WebKit. Automated tests do not establish full WCAG conformance. VoiceOver/NVDA and physical-device checks remain manual release validation.

If a restricted environment has only a system Chromium binary, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its absolute path and use `--project=chromium-desktop --project=chromium-mobile`. Record this limited result; do not claim Firefox or WebKit passed.

## Work with GPT

Start with `AGENTS.md` and `.ai/state.json`. Load the relevant workflow from `.ai/workflows/README.md`, then the affected module contract and source. For routes, use `docs/modules/pages.md`: Markdown inside `src/pages/` becomes a public page.

| Record | Source of truth |
| --- | --- |
| Exact implementation/history/rollback | Git |
| Architectural rationale | `docs/adr/` |
| Current goal, modules, open work | `.ai/state.json` |
| Global instructions | `AGENTS.md` |
| Module rules | Local `AGENTS.md`, route contract in docs |
| Acceptance criteria | `knowzcode/specs/` |
| Behavioral evidence | Tests and verified spec records |
| Resume context | `.ai/handoff.md` |

The full policy requirements are in `.ai/minimal-delta.md`. Six on-demand workflows cover routing, planning, minimal implementation, architecture decisions, review, and handoff. Use C-XXXX IDs for meaningful work. PATCH changes need no ADR or large WorkGroup. Architecture changes require explicit requested scope, an ADR, tests, state, Git, and rollback.

### ChatGPT web and mobile

These files do not automatically install a plugin or become permanent conversation memory. In Work, give the session access to the current repository files. In a session without repository access, attach the current AGENTS.md, state, handoff, relevant workflow/contract, and affected source files.

Example prompt:

> Read AGENTS.md, .ai/state.json, and the handoff. Use change-router. My request is [one specific outcome]. Load only the relevant workflow and module contract. Plan the smallest valid change. Preserve existing architecture and stop when its acceptance criteria pass.

The AI support in this scaffold is for development. Adding an application chatbot, provider adapter, private API, or database is a separate architecture change with its own tests, evals, and budgets.

### KnowzCode

The published KnowzCode CLI installed its core framework and Cursor adapter. Project context and preferences are personalized. The Minimal-Delta user policy takes precedence over framework defaults; load detailed KnowzCode documents only for relevant phases.

Use `/knowzcode:work` for meaningful work, `/knowzcode:explore` for research, `/knowzcode:fix` for small corrections, and `/knowzcode:continue` to resume when the plugin is available. Repository workflow files also work as instructions when the plugin is unavailable. No Knowz cloud account or credentials are required.

## Git and reuse

For the current portable source ZIP, read [docs/framework-export.md](docs/framework-export.md). It includes the implemented reference portfolio, consolidated UI contracts, tests and agent harnesses. It excludes Git/history bundles, dependencies, build outputs and Sites identity. Export-only defaults use example.org and neutral bootstrap context; this live project's configuration stays unchanged. Initialize a fresh repository for reuse. Old bootstrap bundles are not dependencies of this source.

No application license is imposed by this template. Select your project license before distribution. The KnowzCode files retain upstream ownership markers and notices; framework license information is in `knowzcode/UPSTREAM.md`. Dependencies retain their own licenses.

## Approved portfolio UI authority

Start at [docs/ui/design.md](docs/ui/design.md). It links 13 component specifications, the coverage manifest, verification procedure, research findings and approved reference image. The catalog covers shared elements and every implemented portfolio section. Root/local AGENTS.md plus Cursor, Copilot, Claude and KnowzCode entry points require explicit UI lookup before edits. Detailed component contracts load on demand; the root file stays concise.

The styles use the approved ivory/indigo palette, content surfaces, type, margins, gap ownership and final pathway refinements. BaseLayout still imports tokens.css then global.css. global.css imports scaffold.css and portfolio.css; copy all four files together. No CSS framework, font service, theme runtime, component prop, route or package upgrade was added.

`npm run check:ui` validates references, registry coverage, CSS exports and agent routes. It also runs through the unit suite and existing CI npm-test step. It cannot guarantee future agent behavior or certify accessibility. Browser checks cover shared styles, semantic fixtures and the real portfolio homepage. C-0004 implements the actual homepage. See docs/verification/C-0019.md and C-0019-browser.md for current evidence and limits. All17 detail/index pages are local routes.

## Static portfolio audit

Run `npm run build` then `node tools/check-portfolio-build.mjs`. For a repository layout, run `BASE_PATH=/preview/ npm run build` then `node tools/check-portfolio-build.mjs --base /preview/`. Rebuild at `/` before Sites packaging. The audit checks emitted content, local resources, original pathway wording and semantic structure; it cannot check rendered geometry or accessibility.

Current reference: C-0019. The current primary UI contract is v5.6. Shared materials and spacing use homepage tokens; detail pages preserve source compositions. Fifteen unit tests and root/repository build audits pass. Browser evidence includes85 route-width checks,17 enlarged-text checks and selected menu/filter/contact checks. Full source/mobile visual comparison, preference/accessibility coverage and physical Safari remain unverified. Historical change records are evidence, not active requirements.
