---
description: The nationally recognised units list — each unit pairs a national unit code with its title, plus optional elements count and delivery mode. A hairline-separated list that suits a five-unit or single-unit course alike.
---

# UnitOfCompetencyList

The units-of-competency block from analysis §3.5. Lists the nationally recognised units a course delivers — one unit, one code, one row.

A hairline-separated list rather than a wide table, so it reads cleanly whether a course delivers five units (Owner Builder) or one (White Card). Codes sit in Geist Mono at a fixed width so the titles align.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Component renders the `<h2>` per decision #1. |
| `units` | `Unit[]` | ✓ | — | The units the course delivers. |
| `supersededNote` | `string` | — | — | A note about accepted superseded unit codes. |
| `caption` | `string` | — | — | A mono footnote, e.g. a verification source. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `Unit` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `code` | `string` | ✓ | National unit code, e.g. `CPCCWHS2001`. |
| `title` | `string` | ✓ | Unit title. |
| `elements` | `number` | — | Number of elements in the unit. |
| `delivery` | `string` | — | Delivery mode, e.g. `Online (Zoom)`. |

## When to use

- The "What will you learn" / units-of-competency section on a course-state page.

## When NOT to use

- For a plain feature or outcomes list — use `BulletedFeatureList`.
- For side-by-side comparison of unit attributes across courses — use `ComparisonTable`.

## Related

- `BulletedFeatureList` — the plain-English outcomes list that often follows.
- `VerificationNote` — the dated training.gov.au verification stamp.
