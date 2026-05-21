---
description: The choose-your-state navigator — lists the states ABE serves, each linking to its course spoke page. Three layouts via the variant prop — a grid of state cards, a State / Regulator / Course row table, or state cards each listing several course links.
---

# StateNavigator

The "Choose your state" block from analysis §2.2. Lists the states ABE serves and links each one down to its course spoke page. Used on the homepage and on every course-stream hub.

It is a **navigation** component — every state is a link to its spoke page. For attribute-by-option data comparison (thresholds, fees side by side), use `ComparisonTable` instead.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Component renders the `<h2>` itself per decision #1. |
| `variant` | `'grid' \| 'table' \| 'links'` | — | `grid` | `grid` is a responsive card grid; `table` is a dense State / Regulator / Course row table; `links` is a grid of state cards, each listing several course links. |
| `states` | `StateEntry[]` | ✓ | — | The states ABE serves. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `StateEntry` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `name` | `string` | ✓ | State or territory name, e.g. `New South Wales`. |
| `regulator` | `string` | — | The regulator that approves the course there. Used by `grid` and `table`. |
| `href` | `string` | — | Link to the state course spoke page. Used by `grid` and `table`. |
| `detail` | `string` | — | One-line course detail. Used by `grid` and `table`. |
| `courses` | `CourseLink[]` | — | The course links for this state. Used by the `links` variant. |

### `CourseLink` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `label` | `string` | ✓ | Course link label, e.g. `White Card NSW`. |
| `href` | `string` | ✓ | Course page URL. |

## Variants

- **grid** — a responsive grid of state cards, each card a single link. The regulator sits as a Regulator Blue mono caps label, the state name as a display title, and a maroon "View course →" affordance whose arrow translates on hover. The default for a hub where one state offers one course.
- **table** — a State / Regulator / Course row table in the `ComparisonTable` grammar (mono caps headers, 1px ink header rule, Rule hairlines, horizontal scroll on mobile). Use where a dense listing reads better than cards.
- **links** — a grid of state cards, each card listing several course links. The state name is a display title; below it a stack of dotted-underline course links. Use where one state offers more than one course — the homepage, where each state links to White Card, Owner Builder and any CPD course.

## When to use

- The "Choose your state" section on a hub (`grid` or `table`).
- The "Find your course by state" section on the homepage, where each state links to several courses (`links`).

## When NOT to use

- For side-by-side data comparison across states — use `ComparisonTable`.
- For an in-page jump menu — use `MicroCTA` or the section-header jump nav.

## Related

- `ComparisonTable` — attribute-by-option comparison; the data-table counterpart.
- `ScopeLimitNote` — the honest "states not listed are not offered" note that follows this section.
