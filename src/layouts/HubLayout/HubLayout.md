---
description: The hub-page archetype layout. Wraps BaseLayout, builds and injects the hub JSON-LD graph via buildHubGraph, and renders the fixed hub chrome (BreadcrumbBar, PageHeading, HeroTrustBar) above a slot for the content sections.
---

# HubLayout

The hub-page archetype layout from analysis §1. Used by every course-stream hub — `/owner-builder` (confirmed), with `/white-card` and `/cpd` to come.

HubLayout wraps `BaseLayout`, assembles the hub JSON-LD graph with `buildHubGraph`, and renders the fixed hub chrome. The variable content sections are composed by the page into the default slot.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `title` | `string` | ✓ | — | `<title>`, og:title, and the schema page name. |
| `description` | `string` | ✓ | — | Meta description and the schema description. |
| `canonical` | `string` | ✓ | — | Canonical URL; also the schema page id. |
| `ogImage` | `string` | — | — | Open Graph image. |
| `noIndex` | `boolean` | — | `false` | Emit `noindex,nofollow`. |
| `pageHeading` | `string` | ✓ | — | The visible page H1. |
| `lastUpdated` | `string` | ✓ | — | ISO date `YYYY-MM-DD` from frontmatter (decision #6). |
| `breadcrumbs` | `Crumb[]` | ✓ | — | Breadcrumb trail — Home first, this hub last. |
| `credentials` | `Credential[]` | ✓ | — | Regulators for the HeroTrustBar. |
| `stateItems` | `HubGraphLink[]` | ✓ | — | State spoke pages — become the schema `ItemList`. |
| `faqs` | `HubGraphFaq[]` | — | — | FAQ entries — become the schema `FAQPage`. |

`Crumb` is `{ label, href? }` (omit `href` on the current page). `Credential` is `{ regulator, state? }`. `HubGraphLink` is `{ name, url }`. `HubGraphFaq` is `{ question, answer }`.

## Composition

```
HubLayout
└── BaseLayout
    ├── slot "schema"  ← buildHubGraph(...) JSON-LD
    └── slot (default)
        └── div.hub
            ├── header.hub__head
            │   ├── BreadcrumbBar
            │   ├── PageHeading
            │   └── HeroTrustBar
            └── main.hub__main
                └── <slot />   ← page composes content sections here
```

## When to use

- Any course-stream hub page (`/owner-builder`, `/white-card`, `/cpd`).

## When NOT to use

- For a single course-state page — use `CoursePageLayout`.
- For the homepage — use `HomepageLayout`.

## Schema

HubLayout calls `buildHubGraph`, which emits a `@graph` of `CollectionPage` (with the state spoke pages as an `ItemList` `mainEntity`), `BreadcrumbList`, `EducationalOrganization`, and — when `faqs` is supplied — `FAQPage`. No hand-written JSON-LD in pages (decision #5).

## Related

- `BaseLayout` — the shared parent layout HubLayout wraps.
- `buildHubGraph` — the schema builder it calls.
- `BreadcrumbBar`, `PageHeading`, `HeroTrustBar` — the fixed chrome it renders.
