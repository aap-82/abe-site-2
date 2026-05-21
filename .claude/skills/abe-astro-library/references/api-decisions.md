# Locked API decisions

The 8 rules that constrain how every layout, section, and component is built. Settled on 19 May 2026. Reference doc: `../../../component-library-analysis.md` §7.

## 1. Section headings are props, not slots

Section components accept `heading: string` and decide whether to render `<h2>` or `<h3>` themselves. Authors never write heading tags inside a section.

```astro
<!-- ✅ correct -->
<AnswerCapsuleSection heading="What is the NSW Owner Builder Course?" text="..." />

<!-- ❌ wrong — don't pass heading as slot content -->
<AnswerCapsuleSection>
  <h2 slot="heading">What is the NSW Owner Builder Course?</h2>
</AnswerCapsuleSection>
```

## 2. Content lives in Astro Content Collections

Page markdown sits under `src/content/pages-{homepage,hub,course-state,expert}/`. Frontmatter is validated against the Zod schemas in `src/content.config.ts`. Pages are generated via `getCollection()` + `getStaticPaths()`, not hand-written `.astro` pages.

## 3. Tailwind 4 utility classes with @theme tokens

Brand tokens (colours, type, spacing, radii, shadows) live in `src/styles/global.css` inside `@theme`. Components consume utility classes (`bg-abe-primary`, `text-abe-ink`, `font-sans`). Hard-coded values are forbidden.

```astro
<!-- ✅ -->
<div class="bg-abe-primary text-white px-6 py-4 rounded-lg">

<!-- ❌ -->
<div style="background: #0b3d91; color: white; padding: 16px;">
```

## 4. One ASQADisclosure component with variant prop

```astro
<ASQADisclosure variant="inline" />        <!-- under hero -->
<ASQADisclosure variant="near-cta" />      <!-- ~Section 7 -->
<ASQADisclosure variant="footer-legal" />  <!-- ~Trust Footer -->
<ASQADisclosure variant="copyright-bar" /> <!-- 3-line bottom strip -->
```

Verbatim templates: `src/data/disclosures/asqa-templates.ts`. Paraphrasing fails ASQA Cat H — never edit the strings inline.

## 5. Schema graphs come from layout-level builders

Each archetype layout calls its own schema builder:

| Layout | Builder | Returns |
|---|---|---|
| `HomepageLayout` | `buildHomepageGraph(frontmatter)` | WebSite + EducationalOrganization + SiteNavigationElement |
| `HubLayout` | `buildHubGraph(frontmatter, items, faqs)` | CollectionPage + ItemList + BreadcrumbList + FAQPage |
| `CoursePageLayout` | `buildCourseGraph(frontmatter, faqs)` | Course + FAQPage + BreadcrumbList (+ AggregateRating/reviewedBy) |

The layout injects via `set:html={JSON.stringify(graph)}`. **Never** write `<script type="application/ld+json">` by hand in a page.

## 6. `lastUpdated` is from frontmatter, never git

Required field on every page. ISO date `YYYY-MM-DD`. Formatted at render time with `toLocaleDateString('en-AU', { year: 'numeric', month: 'long' })`. Reviewer bumps the date explicitly — git commits don't.

## 7. Anchor IDs auto-generate from heading slug

Section components set `id={anchorId ?? slugify(heading)}` on their wrapper. `MicroCTA` runs the same slugify on its `targetHeading` prop. Use the `anchorId` prop only to preserve an existing URL anchor (e.g. `#page-review` on White Card NSW).

```astro
<AnswerCapsuleSection heading="What will you learn?" text="..." />
<!-- → wrapper has id="what-will-you-learn" -->

<MicroCTA targetHeading="What will you learn?" label="↓ See what you'll learn" />
<!-- → href="#what-will-you-learn" -->
```

## 8. Single RTO partner per state page

Frontmatter shape: `rtoPartner: { name, code, url }`, optional (homepage and hubs omit it). `RoleSeparationTable` and `RTOAttributionLine` consume it directly. If a future page needs multiple RTOs, escalate — don't quietly add an array.

```yaml
rtoPartner:
  name: AlertForce
  code: "RTO 91826"
  url: https://training.gov.au/Organisation/Details/91826
```

---

## Cross-cutting reminders

- **Australian English everywhere.** `organise`, `centre`, `colour`, `recognised`. Per Andrey's global preference.
- **Never use the word "comprehensive".** Per Andrey's global preference.
- **Markdown is the default output.** Don't create `.docx` unless the user explicitly asks.
