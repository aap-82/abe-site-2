# Frontmatter schema (human-readable)

Every page in the four content collections has frontmatter validated against the Zod schemas in `src/content.config.ts`. This file mirrors those schemas in markdown for quick reference.

All fields below are listed as `name: type — required? — notes`.

## Shared fields (every page)

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `title` | string (20–70 chars) | ✓ | SEO meta title. Length validated. |
| `description` | string (120–170 chars) | ✓ | SEO meta description. Length validated. |
| `slug` | string | ✓ | URL path segment (no leading slash). E.g. `owner-builder-nsw`. |
| `canonical` | URL string | ✓ | Full canonical URL. `https://www.abeeducation.edu.au/...`. |
| `lastUpdated` | ISO date `YYYY-MM-DD` | ✓ | When the page content was last reviewed. Never git-derived. |
| `ogImage` | string | — | Path to OG image. Defaults to a per-archetype fallback. |
| `noIndex` | boolean | — | Default `false`. When `true`, the page emits `noindex,nofollow` and is excluded from `/sitemap.xml` and `/llms.txt`. Use for pages on hold (pending approval, drafts). Set here in frontmatter, never hardcoded in the route. |
| `pageType` | literal | ✓ | One of `homepage` / `hub` / `course-state` / `expert`. |

## Collection: `pages-homepage`

```yaml
title: "ABE Education — Online Construction Training Australia"
description: "Australia's online construction training provider..."
slug: ""
canonical: "https://www.abeeducation.edu.au/"
lastUpdated: 2026-05-19
pageType: homepage
```

No extra fields beyond the shared set.

## Collection: `pages-hub`

```yaml
title: "Owner Builder Course Online — Five States · ABE Education"
description: "Approved Owner Builder courses for NSW, QLD, WA, TAS & ACT..."
slug: "owner-builder"
canonical: "https://www.abeeducation.edu.au/owner-builder"
lastUpdated: 2026-05-19
pageType: hub
reviewer:
  name: "Dominic Ogburn"
  date: 2026-04-14
  profileSlug: "dominic-ogburn"
```

| Extra field | Type | Required | Notes |
|---|---|:-:|---|
| `reviewer` | `{ name, date, profileSlug }` | — | Named reviewer who last verified the hub copy. |

## Collection: `pages-course-state`

```yaml
title: "NSW Owner Builder Course Online — AlertForce RTO 91826"
description: "Complete the 5 units required for your NSW Owner Builder Permit..."
slug: "owner-builder-nsw"
canonical: "https://www.abeeducation.edu.au/owner-builder-nsw"
lastUpdated: 2026-04-28
pageType: course-state
state: NSW
courseStream: owner-builder
rtoPartner:
  name: "AlertForce"
  code: "RTO 91826"
  url: "https://training.gov.au/Organisation/Details/91826"
reviewer:
  name: "Warwick Smith"
  date: 2026-04-28
  profileSlug: "warwick-smith"
```

| Extra field | Type | Required | Notes |
|---|---|:-:|---|
| `state` | enum | ✓ | One of `NSW` / `QLD` / `WA` / `TAS` / `ACT`. No VIC/SA/NT. |
| `courseStream` | enum | ✓ | One of `owner-builder` / `white-card` / `cpd`. |
| `rtoPartner` | `{ name, code, url }` | — | Present on RTO-partnered pages (NSW OB, all WC). Absent on ABE-direct pages (QLD/WA/TAS/ACT OB, CPD). |
| `reviewer` | `{ name, date, profileSlug }` | — | Page accuracy reviewer (Warwick Smith for partner pages, Dominic Ogburn for ABE-direct). |

## Collection: `pages-expert`

```yaml
title: "Dominic Ogburn - Course Developer · ABE Education"
description: "Licensed NSW builder (Licence 369417C), Standards Australia committee member..."
slug: "dominic-ogburn"
canonical: "https://www.abeeducation.edu.au/experts/dominic-ogburn"
lastUpdated: 2026-04-14
pageType: expert
name: "Dominic Ogburn"
role: "Course Developer, ABE Education"
credentials:
  - "Licensed NSW Builder (Licence 369417C)"
  - "NSW Fair Trading Minister's Award recipient (2005)"
  - "Standards Australia committee member"
headshot: "https://lwfiles.mycourse.app/.../headshot.png"
pagesReviewed:
  - label: "Owner Builder hub"
    href: "/owner-builder"
```

The markdown body of a `pages-expert` entry is the expert's bio prose; it renders into the ExpertPageLayout bio slot.

| Extra field | Type | Required | Notes |
|---|---|:-:|---|
| `name` | string | ✓ | The person's full name — the page H1 and schema `Person` name. |
| `role` | string | ✓ | Job title + organisation. |
| `credentials` | string[] | ✓ | Each item is a verified credential. Never invent. |
| `linkedin` | URL | — | Public LinkedIn URL — becomes schema `sameAs`. |
| `headshot` | string | — | Path or URL to headshot image. |
| `pagesReviewed` | `{ label, href }[]` | — | ABE pages this expert reviewed or developed. |

---

## Validation rules

The Zod schema is the single source of truth at `src/content.config.ts`. If a field's behaviour seems unclear from this doc, read the schema directly — it's the runtime check.

Common gotchas:
- `title` and `description` length is **enforced**. A 75-char title fails the build.
- `lastUpdated` regex: `^\d{4}-\d{2}-\d{2}$`. `19-05-2026` or `May 19 2026` fails.
- `state` is an enum. `Victoria` or lowercase `nsw` fails.
- All URLs (canonical, rtoPartner.url, linkedin) must include the `https://` scheme.
