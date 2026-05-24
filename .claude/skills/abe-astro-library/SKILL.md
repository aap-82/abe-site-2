---
name: abe-astro-library
description: Build pages for the ABE Education Astro site (abe-site repo) using the locked component library. Use this skill whenever the user asks Claude to build, draft, create, scaffold, or add to an ABE page — including hub pages (/owner-builder, /white-card, /cpd), course state pages (/owner-builder-nsw, /white-card-online-qld, etc.), the homepage, or expert profile pages. Also triggers on phrases like "build the QLD Owner Builder page", "draft a WA White Card page", "write the CPD hub", "make a homepage section", "add an FAQ to the NSW page", "what components should this page use", or any request to write Astro markup, content-collection frontmatter, or page markdown for the ABE site. The skill reads `references/component-index.md` to discover available components, `references/layouts.md` to pick the right archetype, `references/frontmatter-schema.md` for collection schemas, `references/api-decisions.md` for the 8 locked component-API rules, and `references/design-rules.md` for the 10 locked design rules + anti-patterns.
---

# Building ABE pages with the component library

This skill runs when the user wants a new (or modified) ABE page composed from the locked component library at `src/components/`, `src/sections/`, and `src/layouts/`.

## Order of operations

1. **Read `references/component-index.md`** for the full inventory of layouts, sections, and components with one-line descriptions. If it says "no components yet" the library is not populated; pause and ask the user before fabricating anything.

2. **Read `references/design-rules.md`** to refresh the 10 named design rules, the spacing/layout/border conventions, and the anti-pattern list. Every visual decision must respect them. The "AI design tell" check (no thick coloured side borders) catches the most common drift.

3. **Pick the layout** from `references/layouts.md` based on the page archetype:
   - Homepage (root `/`) → `HomepageLayout`
   - Hub (`/owner-builder`, `/white-card`, `/cpd`) → `HubLayout`
   - Course state (`/owner-builder-nsw`, `/white-card-online-qld`, …) → `CoursePageLayout`
   - Expert profile (`/experts/<slug>`) → `ExpertPageLayout`

4. **Compose sections in order.** Pull section names from the component index. For each section, read its spec file at `src/sections/<Name>/<Name>.md` before using it — the spec defines props, when to use, and when NOT to use. Treat "when NOT to use" as a hard constraint.

5. **Validate the frontmatter** against `references/frontmatter-schema.md`. It mirrors the Zod schema in `src/content.config.ts`. Any deviation will fail the Astro build at dev time.

6. **Create the page as two files** (validation-pass decision, 21 May 2026 — the meta-only collection schema cannot hold a composed multi-section page, and a plain `.md` body cannot compose Astro sections):
   - The **content-collection entry** carries the Zod-validated SEO metadata only: `src/content/pages-{archetype}/{slug}.md`. This is the queryable, length-enforced source of truth for `title` / `description` / `canonical` / `lastUpdated` / `reviewer`.
   - The **route** composes the page: `src/pages/{slug}.astro` reads the entry with `getEntry('pages-{archetype}', '{slug}')`, passes the validated meta to the archetype layout, and composes the library sections in order. Section content lives in the route, beside the composition.
   - Expert pages are pure data, so `pages-expert` entries need no bespoke composition — a generic renderer can map the frontmatter directly.

7. **Do NOT generate JSON-LD by hand.** The layout calls `buildHubGraph()` / `buildCourseGraph()` / `buildHomepageGraph()` internally using the frontmatter values you provide.

## Hard rules — component API

Full detail in `references/api-decisions.md`. The 8 rules in brief:

1. Section headings come from the `heading` prop, not slots. The section picks the right `<h2>` / `<h3>` level.
2. Page markdown lives in Astro Content Collections under `src/content/`. Zod-validated frontmatter.
3. Styling uses Tailwind 4 utility classes that map to ABE brand tokens in `src/styles/global.css`. Never hard-code colours, type sizes, or spacing.
4. ASQA disclosure uses a single `<ASQADisclosure variant="..." />` component. The four verbatim templates live in `src/data/disclosures/asqa-templates.ts`.
5. JSON-LD is built by layout-level schema generators in `src/lib/`. Never write JSON-LD by hand in a page.
6. `lastUpdated` is required in frontmatter (ISO date YYYY-MM-DD). Never derived from git.
7. Section anchor IDs auto-generate from heading slug via `src/lib/slugify.ts`. Override with `anchorId` prop only when preserving a pre-existing URL anchor.
8. RTO partner data is a single object `{ name, code, url }`, optional. Multi-RTO state pages are not currently supported.

## Hard rules — design system

Full detail in `references/design-rules.md`. The 10 rules in brief:

1. **Contrast-First.** Primary content uses max-contrast Ink/Cream, not coloured tokens.
2. **Two-Accent.** Maroon = action + brand. Blue = verification + current-state. Ink = structure + default. No overlap.
3. **60-30-10.** 60% neutral, 30% ink, 7% maroon, 3% blue. Audit any page; if maroon > 10% or blue > 5%, something is mis-tagged.
4. **No Warm Tones.** Orange/yellow/peach/cream-as-paper forbidden.
5. **Flat-By-Default.** Zero box-shadows ever. Depth via tonal layering and 1px frames.
6. **Two-Ornament.** Only 1px solid ink frame + 1px dotted ink-3 rule. Nothing else.
7. **Voice-Per-Face.** Mono = label. Display = title. Body = argument. Prose = editorial-longform. Each face has one job.
8. **Five-Step Scale.** 1.25 ratio between type tiers. No intermediate sizes.
9. **Volume Ladder.** Streamcard CTAs v1/v2/v3 are one family at three volumes.
10. **Stripe Singleton.** One trust-stripe variant per page.

## Anti-patterns

- ❌ Don't invent a new section or component without first checking `component-index.md`. The inventory is closed unless explicitly extended.
- ❌ Don't hard-code colours, font sizes, or spacing. Always use Tailwind utility classes that read from `@theme` brand tokens.
- ❌ Don't write JSON-LD by hand. Always rely on the schema builders.
- ❌ Don't paraphrase ASQA or AFSL disclosure templates — they're verbatim imports from `src/data/disclosures/`. Paraphrasing fails compliance (ASQA Cat H).
- ❌ Don't pass `<h2>` or `<h3>` tags as slot content into section components. Use the `heading` prop.
- ❌ Don't add ASQA disclosure to a hub page. ASQA disclosure lives on course-state pages only (full 7-location coverage on RTO-partnered pages).
- ❌ Don't reference a state that ABE doesn't currently serve (VIC, SA, NT). Use the `ScopeLimitNote` section to honestly call out the gap.
- ❌ Don't use `border-left` or `border-right` greater than 1px as a colour stripe. The single most recognisable AI design tell.
- ❌ Don't use em dashes in body copy. Use commas, colons, semicolons, periods, or parentheses. Not `--` either.
- ❌ Don't introduce a new font. The 4-face system (Archivo / Public Sans / Source Serif 4 / Geist Mono) is locked.

## File locations (project-relative)

| Item | Path |
|---|---|
| Component inventory (read first) | `.claude/skills/abe-astro-library/references/component-index.md` |
| Layout picker | `.claude/skills/abe-astro-library/references/layouts.md` |
| Locked component-API rules | `.claude/skills/abe-astro-library/references/api-decisions.md` |
| **Locked design rules** | `.claude/skills/abe-astro-library/references/design-rules.md` |
| Frontmatter schemas | `.claude/skills/abe-astro-library/references/frontmatter-schema.md` |
| Full design spec | `DESIGN.md` (project root) |
| Component source | `src/components/<Name>/<Name>.astro` |
| Component spec | `src/components/<Name>/<Name>.md` |
| Section source | `src/sections/<Name>/<Name>.astro` |
| Section spec | `src/sections/<Name>/<Name>.md` |
| Layout source | `src/layouts/<Name>/<Name>.astro` |
| Page markdown (output) | `src/content/pages-<archetype>/<slug>.md` |
| Zod schema (source of truth) | `src/content.config.ts` |
| Brand tokens | `src/styles/global.css` (`@theme` block) |
| Disclosure templates | `src/data/disclosures/*.ts` |
| Schema builders | `src/lib/build*Graph.ts` |
| Sitemap (generated) | `src/pages/sitemap.xml.ts` |
| llms.txt (generated) | `src/pages/llms.txt.ts` |
| robots.txt (static) | `public/robots.txt` |

## Site-wide SEO files

Three site-level files exist outside the four page archetypes. Two of them regenerate from the content collections on every build, so adding a page needs no manual step:

- **`/sitemap.xml`** — generated by `src/pages/sitemap.xml.ts`. Lists every content-collection page by its `canonical` URL and `lastUpdated` date.
- **`/llms.txt`** — generated by `src/pages/llms.txt.ts` (format: llmstxt.org). A link-first map of the site for AI answer engines, grouped into main pages, state course pages, and course developers.
- **`/robots.txt`** — static file at `public/robots.txt`. Allows all crawlers, disallows `/styleguide` and `/sample`, and points to the sitemap. Edit by hand if crawl rules change.

The `noIndex` frontmatter field (optional boolean, default `false`) is the single switch for holding a page back. Setting `noIndex: true` makes the layout emit `<meta name="robots" content="noindex,nofollow">` AND drops the page from both `/sitemap.xml` and `/llms.txt`. Never hardcode `noIndex={true}` in a route — set it in frontmatter so all three stay in agreement. When a held page (for example an unapproved course) is cleared to publish, removing the `noIndex` line indexes and lists it automatically.

## When to refresh the index

After any new component or spec change, run `npm run claude:reindex` from the project root. This regenerates `references/component-index.md` so the next page-build pass sees the latest inventory.
