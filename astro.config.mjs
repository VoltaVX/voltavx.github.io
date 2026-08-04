import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://voltavx.com',
  output: 'static',
  integrations: [sitemap()],
  compressHTML: true,
  markdown: { syntaxHighlight: false },
  env: {
    schema: {
      PUBLIC_EMAIL_ADDRESS: envField.string({
        context: 'client',
        access: 'public',
        default: 'voltavxofficial@gmail.com',
        includes: '@',
      }),
      PUBLIC_PHONE_NUMBER: envField.string({
        context: 'client',
        access: 'public',
        default: '',
      }),
    },
  },
  security: {
    csp: {
      scriptDirective: { resources: ["'self'"] },
      styleDirective: { resources: ["'self'"] },
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "media-src 'self'",
        "frame-src 'none'",
        "worker-src 'none'",
        "manifest-src 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
  build: {
    format: 'directory',
  },
  vite: {
    server: {
      strictPort: true,
    },
    build: {
      rollupOptions: {
        output: {
          // GitHub Pages can briefly serve cached HTML after a deployment.
          // A stable CSS URL prevents stale HTML from pointing at a deleted
          // content-hashed stylesheet during that cache window.
          assetFileNames: (assetInfo) =>
            assetInfo.names.some((name) => name.endsWith('.css'))
              ? '_astro/site.css'
              : '_astro/[name]-[hash][extname]',
        },
      },
    },
  },
  server: {
    port: 4322,
    host: '127.0.0.1',
  },
});
