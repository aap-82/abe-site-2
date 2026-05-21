---
description: The homepage archetype layout. Wraps BaseLayout, builds and injects the homepage JSON-LD graph via buildHomepageGraph, and renders the PageHeading above a slot for the content sections. Carries no BreadcrumbBar — the homepage is the site root.
---

# HomepageLayout

The homepage archetype layout from analysis §1. Used by the site root (`/`).

HomepageLayout wraps `BaseLayout`, assembles the homepage JSON-LD graph with `buildHomepageGraph`, and renders the homepage chrome. Being the site root, it carries no `BreadcrumbBar`.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `title` | `string` | ✓ | — | `<title>`, og:title, schema WebSite name. |
| `description` | `string` | ✓ | — | Meta description and schema description. |
| `canonical` | `string` | ✓ | — | Canonical URL; the site root. |
| `ogImage` | `string` | — | — | Open Graph image. |
| `noIndex` | `boolean` | — | `false` | Emit `noindex,nofollow`. |
| `pageHeading` | `string` | ✓ | — | The visible page H1. |
| `lastUpdated` | `string` | ✓ | — | ISO date `YYYY-MM-DD` from frontmatter (decision #6). |
| `navItems` | `HomepageGraphLink[]` | ✓ | — | Primary hub links — become the schema `SiteNavigationElement` nodes. |

## Composition

```
HomepageLayout
└── BaseLayout
    ├── slot "schema"  ← buildHomepageGraph(...) JSON-LD
    └── div.home
        ├── header.home__head
        │   └── PageHeading
        └── main.home__main
            └── <slot />   ← content sections
```

## When to use

- The site root (`/`) only.

## When NOT to use

- For a course-stream hub — use `HubLayout`.
- For a course-state page — use `CoursePageLayout`.

## Schema

HomepageLayout calls `buildHomepageGraph`, which emits a `@graph` of `WebSite`, `EducationalOrganization`, and one `SiteNavigationElement` per primary hub the homepage links down to.

## Related

- `BaseLayout` — the shared parent layout.
- `buildHomepageGraph` — the schema builder it calls.
- `HubLayout`, `CoursePageLayout` — the sibling archetype layouts.
