// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ABE Astro site config — locked decisions reflected here:
//   - trailingSlash: 'never'  (per homepage v2 Astro implementation notes)
//   - output: 'static'        (content site; deploys as static assets to
//                              Cloudflare Pages or Workers Static Assets —
//                              no adapter needed for pure static output)
//   - tailwind via @tailwindcss/vite (Tailwind 4 — CSS-first @theme tokens)
//
// 📌 When to re-enable @astrojs/cloudflare:
//     Add the import + `adapter: cloudflare()` below ONLY if a route needs
//     SSR (forms, API endpoints, dynamic redirects). The package is still
//     installed; just uncomment the two lines.
//
// See: ../component-library-analysis.md §7 (locked API decisions)
//      ../component-library-storage.md (storage architecture)

// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.abeeducation.edu.au',
  trailingSlash: 'never',
  output: 'static',
  // adapter: cloudflare({ imageService: 'compile' }),
  vite: {
    plugins: [tailwindcss()],
  },
});
