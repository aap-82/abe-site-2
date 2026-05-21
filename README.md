# abe-site

ABE Education — Astro site with a reusable component library for hub, course-state, homepage, and expert pages.

## Status

Steps 1–2 of 5 complete (19 May 2026) — project bootstrapped with Astro 6.3, Tailwind 4, Content Collections, and a built-in `/styleguide` route for visual component browsing.

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` — should show the bootstrap placeholder.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Astro dev server. |
| `npm run build` | Build the static site to `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run check` | Type-check Astro components and TypeScript. |

## Styleguide

Once `npm run dev` is running, open **http://localhost:4321/styleguide** to browse every component, section, and layout in the library.

Components are discovered automatically. To add a new one, create a folder under `src/components/`, `src/sections/`, or `src/layouts/` with three files:

```
src/components/Foo/
├── Foo.astro            # the component
├── Foo.md               # the spec (props, when to use, when not to use, example)
└── Foo.examples.astro   # variants rendered in the styleguide
```

The styleguide auto-discovers via `import.meta.glob` — no registration step needed.

## Project structure

```
abe-site/
├── astro.config.mjs        # Astro + Tailwind + Cloudflare config
├── tailwind.config.ts      # Tailwind plugin hook (tokens live in CSS)
├── tsconfig.json           # Strict TS, with `@/` path aliases
├── src/
│   ├── content/
│   │   └── config.ts       # Zod schemas — single source of truth for frontmatter
│   ├── pages/
│   │   └── index.astro     # bootstrap placeholder (step 1)
│   └── styles/
│       └── global.css      # Tailwind 4 @theme — ABE brand tokens
└── package.json
```

## Locked decisions

This project follows the 8 locked API decisions and storage architecture documented in:

- [`../component-library-analysis.md`](../component-library-analysis.md) — sections, components, locked decisions
- [`../component-library-storage.md`](../component-library-storage.md) — Histoire, folder-per-component, Claude skill, Cloudflare Pages deploy

## Next steps

1. ✅ **Step 1 — project init** (this commit)
2. ⏭ **Step 2 — install Histoire** for visual component browsing
3. ⏭ **Step 3 — scaffold the `.claude/skills/abe-astro-library/`** skill
4. ⏭ **Step 4 — build first component (`AnswerCapsule`)** as the reference pattern
5. ⏭ **Step 5 — wire up Cloudflare Pages** for catalogue deployment
