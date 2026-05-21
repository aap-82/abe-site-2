---
description: H1 plus visible LastUpdatedDate. The first content block on every archetype layout below the BreadcrumbBar.
---

# PageHeading

The page H1 with the freshness stamp directly underneath. Composes `LastUpdatedDate` so every page gets a consistent treatment of "page title + when it was last reviewed".

Renders at Display register scale (slightly smaller than the section numbers in the meta column to maintain hierarchy), 38ch max width to keep titles readable, with the date in mono caps Ink-3 below.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The page H1 text. Per Zod schema, derives from the page slug/title combo. |
| `lastUpdated` | `string` (ISO `YYYY-MM-DD`) | ✓ | — | Forwarded to the embedded `LastUpdatedDate` component. |

## When to use

- As the first content element on every archetype layout (after `BreadcrumbBar`).
- Once per page. Multiple H1s breaks the heading outline and SEO.

## When NOT to use

- For section headings — those are H2s rendered by section components (locked decision #1: heading prop, never slot).
- On the styleguide pages — styleguide uses its own header treatment with sidebar context.

## Example

```astro
---
import PageHeading from '@components/PageHeading/PageHeading.astro';
---

<PageHeading
  heading="NSW Owner Builder Course — Online & Nationally Recognised"
  lastUpdated="2026-04-28"
/>
```

## Composition

```
PageHeading
├── <h1> using Display register clamp(1.875rem, 3vw, 2.5rem)
└── LastUpdatedDate (which renders <p class="t-label"><time>...</time></p>)
```

## Related

- `LastUpdatedDate` — composed inside this component.
- `BreadcrumbBar` — sits directly above PageHeading on the page.
- The archetype layouts (`HubLayout`, `CoursePageLayout`, `ExpertPageLayout`) all call this component once near the top.
