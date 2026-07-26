# Juan Lopez Portfolio

A static Astro and TypeScript portfolio for Juan Lopez, centered on behavior analysis, research, and humane digital systems.

## Local development

```bash
npm install
npm run dev
```

Run `npm run build` before publishing. The site outputs static HTML to `dist/`.

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
