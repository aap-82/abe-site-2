---
description: The choose-your-state navigator — lists the states ABE serves, each linking to its course spoke page. Four layouts via the variant prop — a grid of state cards, a State / Regulator / Course row table, state cards listing several course links, or state-code cards with a per-course status badge.
---

# StateNavigator

The "Choose your state" block from analysis §2.2. Lists the states ABE serves and links each one down to its course spoke page. Used on the homepage and on every course-stream hub.

It is a **navigation** component — every state is a link to its spoke page. For attribute-by-option data comparison (thresholds, fees side by side), use `ComparisonTable` instead.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Component renders the `<h2>` itself per decision #1. |
| `variant` | `'grid' \| 'table' \| 'links' \| 'board'` | — | `grid` | `grid` is a responsive card grid; `table` is a dense State / Regulator / Course row table; `links` is a grid of state cards, each listing several course links; `board` is a grid of state-code cards with a per-course status badge. |
| `states` | `StateEntry[]` | ✓ | — | The states ABE serves. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `StateEntry` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `name` | `string` | ✓ | State or territory name, e.g. `New South Wales`. |
| `abbr` | `string` | — | Short state code, e.g. `NSW`. The board variant uses it as the card heading, with `name` as the subtitle. |
| `regulator` | `string` | — | The regulator that approves the course there. Used by `grid` and `table`. |
| `href` | `string` | — | Link to the state course spoke page. Used by `grid` and `table`. |
| `detail` | `string` | — | One-line course detail. Used by `grid` and `table`. |
| `courses` | `CourseLink[]` | — | The course links for this state. Used by the `links` and `board` variants. |

### `CourseLink` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `label` | `string` | ✓ | Course label, e.g. `White Card`. |
| `href` | `string` | — | Course page URL. Required by `links`. In `board`, a course with an `href` renders as a dotted link; omit it for a course that is not yet available. |
| `via` | `string` | — | RTO attribution, rendered inline as `(via …)`. Board variant only. |
| `status` | `string` | — | Status badge text, e.g. `Coming soon`. Board variant only. |

## Variants

- **grid** — a responsive grid of state cards, each card a single link. The regulator sits as a Regulator Blue mono caps label, the state name as a display title, and a maroon "View course →" affordance whose arrow translates on hover. The default for a hub where one state offers one course.
- **table** — a State / Regulator / Course row table in the `ComparisonTable` grammar (mono caps headers, 1px ink header rule, Rule hairlines, horizontal scroll on mobile). Use where a dense listing reads better than cards.
- **links** — a grid of state cards, each card listing several course links. The state name is a display title; below it a stack of dotted-underline course links. Use where one state offers more than one course — the homepage, where each state links to White Card, Owner Builder and any CPD course.
- **board** — a grid of cards headed by the large state code (`abbr`) with the full `name` as a mono caps subtitle. Each course sits on its own row: a dotted link where an `href` is set, otherwise plain text, with an optional status badge (`Coming soon`) aligned to the right. Use for the homepage by-state board while course pages are still rolling out.

## When to use

- The "Choose your state" section on a hub (`grid` or `table`).
- The "Find your course by state" section on the homepage, where each state links to several courses (`links`).
- The same homepage section while pages are still being published, where each course needs a `Coming soon` badge until it goes live (`board`).

## When NOT to use

- For side-by-side data comparison across states — use `ComparisonTable`.
- For an in-page jump menu — use `MicroCTA` or the section-header jump nav.

## Related

- `ComparisonTable` — attribute-by-option comparison; the data-table counterpart.
- `ScopeLimitNote` — the honest "states not listed are not offered" note that follows this section.
