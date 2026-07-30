# Juan Lopez Portfolio

A static Astro and TypeScript portfolio for Juan Lopez, centered on behavior analysis, research, and humane digital systems.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build` before publishing. The site outputs static HTML to `dist/`.

## VS Code setup

Open `voltavx-portfolio.code-workspace` rather than the folder directly to load the project workspace. VS Code will offer the recommended extensions automatically.

- **Astro** — language support, diagnostics, and formatting for `.astro` files.
- **Prettier** — formatting for TypeScript, JSON, Markdown, CSS, and other supporting files.
- **GitHub Actions** — syntax support and validation for the deployment workflow.
- **Code Spell Checker** — catches copy errors in portfolio and case-study content.
- **Error Lens** — keeps TypeScript and Astro errors visible in the editor.

The workspace provides tasks for the development server, type checking, production builds, and local preview. Run them from **Terminal → Run Task** or with `npm run dev`, `npm run check`, `npm run build`, and `npm run preview`.

## Publishing

The included GitHub Actions workflow publishes the `main` branch to GitHub Pages. The Astro canonical site and `public/CNAME` are configured for `https://voltavx.com`.

Before launch:

- replace the temporary hero art with an approved portrait generated from Juan's own reference photo;
- confirm the public use of `voltavxofficial@gmail.com` and the LinkedIn link;
- add the final resume PDF to `public/resume/`;
- review project image permissions and final case-study copy;
- connect `voltavx.com` to GitHub Pages and enable HTTPS.

## Content

Project and research records live in `src/content/`. Shared interface components live in `src/components/`, and design tokens live in `src/styles/global.css`.
