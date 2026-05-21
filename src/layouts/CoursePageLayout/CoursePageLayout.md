---
description: The course-state-page archetype layout. Wraps BaseLayout, builds and injects the course JSON-LD graph via buildCourseGraph, and renders the fixed chrome — BreadcrumbBar, PageHeading, RTOAttributionLine, content slot, and the ASQADisclosure footer.
---

# CoursePageLayout

The course-state-page archetype layout from analysis §1. Used by every course-state page — Owner Builder NSW, White Card NSW, and their state siblings.

CoursePageLayout wraps `BaseLayout`, assembles the course JSON-LD graph with `buildCourseGraph`, and renders the fixed course chrome. The variable content sections are composed by the page into the default slot.

## RTO-partnered vs ABE-direct

When a `disclosure` context is supplied, the page is RTO-partnered: the hero `RTOAttributionLine` and the footer `ASQADisclosure` blocks (footer-legal and copyright-bar) render. Omit `disclosure` for a course ABE delivers directly.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `title` | `string` | ✓ | — | `<title>`, og:title, schema name. |
| `description` | `string` | ✓ | — | Meta description and schema description. |
| `canonical` | `string` | ✓ | — | Canonical URL; also the schema page id. |
| `ogImage` | `string` | — | — | Open Graph image. |
| `noIndex` | `boolean` | — | `false` | Emit `noindex,nofollow`. |
| `pageHeading` | `string` | ✓ | — | The visible page H1. |
| `lastUpdated` | `string` | ✓ | — | ISO date `YYYY-MM-DD` from frontmatter (decision #6). |
| `breadcrumbs` | `Crumb[]` | ✓ | — | Breadcrumb trail — Home first, this page last. |
| `reviewer` | `Reviewer` | — | — | Compliance reviewer for the BreadcrumbBar reviewer line. |
| `courseName` | `string` | ✓ | — | Course name for the schema `Course` node. |
| `provider` | `CourseGraphLink` | ✓ | — | The training provider — the RTO that delivers, or ABE if direct. |
| `faqs` | `CourseGraphFaq[]` | — | — | FAQ entries — become the schema `FAQPage`. |
| `aggregateRating` | `{ ratingValue, reviewCount }` | — | — | Optional rating for the schema `Course`. |
| `disclosure` | `DisclosureContext` | — | — | When set, the page is RTO-partnered (see above). |

`Crumb` is `{ label, href? }`; `Reviewer` is `{ name, date, profileSlug }`; `CourseGraphLink` is `{ name, url }`.

## Composition

```
CoursePageLayout
└── BaseLayout
    ├── slot "schema"  ← buildCourseGraph(...) JSON-LD
    └── div.course
        ├── header.course__head
        │   ├── BreadcrumbBar (with reviewer line)
        │   ├── PageHeading
        │   └── RTOAttributionLine        (RTO-partnered only)
        ├── main.course__main
        │   └── <slot />   ← content sections
        └── footer.course__footer         (RTO-partnered only)
            ├── ASQADisclosure footer-legal
            └── ASQADisclosure copyright-bar
```

## When to use

- Any single course-state page.

## When NOT to use

- For a course-stream hub — use `HubLayout`.
- For the homepage — use `HomepageLayout`.

## Schema

CoursePageLayout calls `buildCourseGraph`, emitting a `@graph` of `Course` (with its provider and optional `AggregateRating`), `BreadcrumbList`, `EducationalOrganization`, and — when `faqs` is supplied — `FAQPage`.

## Related

- `BaseLayout` — the shared parent layout.
- `buildCourseGraph` — the schema builder it calls.
- `BreadcrumbBar`, `PageHeading`, `RTOAttributionLine`, `ASQADisclosure` — the fixed chrome.
