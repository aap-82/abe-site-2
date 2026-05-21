---
description: The choose-your-state navigator — lists the states ABE serves, each linking to its course spoke page. Two layouts via the variant prop — a grid of state cards, or a State / Regulator / Course row table.
---

# StateNavigator

The "Choose your state" block from analysis §2.2. Lists the states ABE serves and links each one down to its course spoke page. Used on the homepage and on every course-stream hub.

It is a **navigation** component — every state is a link to its spoke page. For attribute-by-option data comparison (thresholds, fees side by side), use `ComparisonTable` instead.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Component renders the `<h2>` itself per decision #1. |
| `variant` | `'grid' \| 'table'` | — | `grid` | `grid` is a responsive card grid; `table` is a dense State / Regulator / Course row table. |
| `states` | `StateEntry[]` | ✓ | — | The states ABE serves. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `StateEntry` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `name` | `string` | ✓ | State or territory name, e.g. `New South Wales`. |
| `regulator` | `string` | ✓ | The regulator that approves the course there. |
| `href` | `string` | ✓ | Link to the state course spoke page. |
| `detail` | `string` | ✓ | One-line course detail. |

## Variants

- **grid** — a responsive grid of state cards, each card a single link. The regulator sits as a Regulator Blue mono caps label, the state name as a display title, and a maroon "View course →" affordance whose arrow translates on hover. The default for the homepage and hub.
- **table** — a State / Regulator / Course row table in the `ComparisonTable` grammar (mono caps headers, 1px ink header rule, Rule hairlines, horizontal scroll on mobile). Use where a dense listing reads better than cards.

## When to use

- The "Choose your state" section on a hub or the homepage.

## When NOT to use

- For side-by-side data comparison across states — use `ComparisonTable`.
- For an in-page jump menu — use `MicroCTA` or the section-header jump nav.

## Related

- `ComparisonTable` — attribute-by-option comparison; the data-table counterpart.
- `ScopeLimitNote` — the honest "states not listed are not offered" note that follows this section.
