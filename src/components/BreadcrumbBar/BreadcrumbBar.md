---
description: Top-of-page navigation row. Left-aligned breadcrumb trail; optional right-aligned "Reviewed by [Person] · DD MMM YYYY" reviewer line. Geist Mono caps, dotted-underline grammar.
---

# BreadcrumbBar

The top-of-page navigation row that sits above `PageHeading` on every hub, course-state, and expert page. Two visual variants share one component:

- **Plain crumbs.** Just the breadcrumb trail. Used on the homepage and any utility page where there's no named page reviewer.
- **With reviewer line.** Same trail on the left, plus a right-aligned "Reviewed by [Person] · DD MMM YYYY" credit. Required on hub pages (reviewed by the named course developer) and course-state pages (reviewed by the named page-accuracy reviewer).

Typography per DESIGN.md §5: Geist Mono caps for the crumbs, dotted-underline grammar on the linked crumb names, hover shifts to Document Maroon.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `crumbs` | `Crumb[]` | ✓ | — | Array of `{ label, href? }`. The last crumb omits `href` (it's the current page). |
| `reviewer` | `Reviewer` | — | none | `{ name, date, profileSlug }`. Shows the right-aligned reviewer line when present. |

### Types

```ts
interface Crumb {
  label: string;
  href?: string; // omit on the last crumb
}

interface Reviewer {
  name: string;
  date: string;       // ISO YYYY-MM-DD
  profileSlug: string; // links to /experts/<profileSlug>
}
```

## When to use

- On every hub, course-state, and expert page, immediately above `PageHeading`.
- On internal pages with a clear position in the IA (e.g. terms, contact).

## When NOT to use

- On the homepage — root pages don't take breadcrumbs.
- On the styleguide — that has its own sidebar nav.
- Inside any section body — this is a page-level component, not a content block.

## Example — plain trail

```astro
---
import BreadcrumbBar from '@components/BreadcrumbBar/BreadcrumbBar.astro';
---

<BreadcrumbBar
  crumbs={[
    { label: 'Home', href: '/' },
    { label: 'Owner Builder Training' },
  ]}
/>
```

## Example — with reviewer line

```astro
<BreadcrumbBar
  crumbs={[
    { label: 'Home', href: '/' },
    { label: 'Owner Builder Training', href: '/owner-builder' },
    { label: 'NSW Owner Builder' },
  ]}
  reviewer={{
    name: 'Warwick Smith',
    date: '2026-04-28',
    profileSlug: 'warwick-smith',
  }}
/>
```

## Related

- `PageHeading` — sits directly underneath this component.
- The expert profile pages at `/experts/<profileSlug>` — linked from the reviewer name.
- `LastUpdatedDate` — visible inside `PageHeading`. The reviewer's date and the page's `lastUpdated` date are independent.
