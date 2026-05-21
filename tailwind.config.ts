import type { Config } from 'tailwindcss';

// Tailwind 4 uses CSS-first config via `@theme` in src/styles/global.css.
// This file exists as a hook for plugins and content-scanning overrides only.
//
// Brand tokens (colours, type, spacing) live in src/styles/global.css.

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  plugins: [],
} satisfies Config;
