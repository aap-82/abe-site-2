---
description: The expert-profile archetype layout. Wraps BaseLayout, builds and injects the Person JSON-LD graph via buildPersonGraph, and renders the fixed expert chrome — breadcrumb, headshot, role eyebrow, H1, bio, credentials, and pages-reviewed list.
---

# ExpertPageLayout

The expert-profile archetype layout. Used by every `/experts/<slug>` page. Wraps `BaseLayout`, builds and injects the Person JSON-LD graph via `buildPersonGraph`, and renders the fixed expert chrome above the bio slot.

## When to use

For an expert profile page — a named course developer or compliance reviewer who is referenced from course and hub pages. Pair it with a `pages-expert` content-collection entry.

## When NOT to use

Not for course, hub, or homepage archetypes. Not for a generic "team" or "about us" page — this layout renders a single person with `Person` structured data.

## Chrome

In order: `BreadcrumbBar`, then an identity row (optional square headshot beside a mono-caps role eyebrow and `PageHeading`), then the bio `<slot>`, a credentials list, an optional pages-reviewed list, and an optional LinkedIn link.

## Props

| Prop | Type | Required | Notes |
|---|---|:-:|---|
| `title` / `description` / `canonical` | string | ✓ | Head meta and schema identity. |
| `ogImage` / `noIndex` | string / boolean | — | Passed to `BaseLayout`. |
| `lastUpdated` | ISO date | ✓ | Freshness date, rendered by `PageHeading` (decision #6). |
| `name` | string | ✓ | The expert's full name — the page H1. |
| `role` | string | ✓ | Job title and organisation; the mono-caps eyebrow and schema `jobTitle`. |
| `credentials` | string[] | ✓ | Verified credentials. Become the credentials list and schema `knowsAbout`. Never invented. |
| `linkedin` | URL | — | Public profile URL; becomes schema `sameAs`. |
| `headshot` | string | — | Square portrait URL; becomes schema `image`. |
| `pagesReviewed` | `{ label, href }[]` | — | ABE pages this expert reviewed or developed. |
| `breadcrumbs` | `{ label, href? }[]` | ✓ | Trail, Home first, this page last. |

## Schema

Emits a `Person` + `BreadcrumbList` + `EducationalOrganization` `@graph` via `buildPersonGraph`. Never hand-write JSON-LD (decision #5).

## Design notes

Square headshot with a 1px solid ink frame, sharp corners (Two-Ornament Rule). Role renders in the mono caps label voice. Credentials are a dotted-hairline-separated list with no fills. Flat throughout — no shadows.
