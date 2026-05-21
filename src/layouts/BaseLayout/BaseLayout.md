---
description: The page-level wrapper every content page extends. Sets up <html>, head meta tags, canonical, OG tags, and a schema slot. Archetype layouts (Homepage, Hub, Course, Expert) wrap this and inject their own schema graph.
---

# BaseLayout

The root layout for every content page on the abe-site. Renders the `<html>`, `<head>`, and `<body>` shells, plus the standard SEO meta tags. Archetype layouts (`HomepageLayout`, `HubLayout`, `CoursePageLayout`, `ExpertPageLayout`) compose on top of this layout and inject their own JSON-LD into the `schema` slot.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `title` | `string` | ✓ | — | Page meta title. 20–70 chars per Zod schema. |
| `description` | `string` | ✓ | — | Meta description. 120–170 chars per Zod schema. |
| `canonical` | `string` (URL) | ✓ | — | Full canonical URL (https://...). |
| `ogImage` | `string` | — | none | Path to OG image; falls back to the per-archetype default. |
| `noIndex` | `boolean` | — | `false` | When true, emits `<meta name="robots" content="noindex,nofollow">`. Used on `/styleguide`, drafts, internal pages. |

## Slots

| Slot | Purpose |
|---|---|
| `schema` | Where the archetype layout injects its JSON-LD `<script type="application/ld+json">…</script>`. |
| (default) | Page body content — sections composed by the archetype layout above. |

## When to use

- As the parent of every archetype layout (`HomepageLayout`, `HubLayout`, `CoursePageLayout`, `ExpertPageLayout`).
- Directly on the rare utility page (contact, 404, terms) where none of the archetype layouts apply.

## When NOT to use

- For the styleguide route — that uses `StyleguideLayout` instead, which has its own sidebar nav.
- For embedded fragments — components and sections never wrap themselves in a layout.

## Example

```astro
---
import BaseLayout from '@layouts/BaseLayout/BaseLayout.astro';
---

<BaseLayout
  title="NSW Owner Builder Course Online — AlertForce RTO 91826"
  description="Complete the 5 units required for your NSW Owner Builder Permit online. Delivered by AlertForce (RTO 91826). Statement of Attainment on completion."
  canonical="https://www.abeeducation.edu.au/owner-builder-nsw"
>
  <script slot="schema" type="application/ld+json" set:html={JSON.stringify(graph)} />

  <main>
    <!-- BreadcrumbBar, PageHeading, sections, etc. -->
  </main>
</BaseLayout>
```

## Related

- `HomepageLayout`, `HubLayout`, `CoursePageLayout`, `ExpertPageLayout` — archetype layouts that wrap this one.
- `StyleguideLayout` — the parallel layout for the component catalogue, with its own sidebar nav.
- `buildHomepageGraph`, `buildHubGraph`, `buildCourseGraph` — schema builders that produce the JSON-LD injected via the `schema` slot.
