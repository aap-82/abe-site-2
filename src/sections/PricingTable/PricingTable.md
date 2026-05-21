---
description: The itemised course-cost table — item / cost rows with an optional struck-through RRP, an optional cost link for centrally-published regulator fees, and an optional emphasised total row. Document-grade table grammar.
---

# PricingTable

The course-cost table from analysis §3.5. Pulls a wall of "the course is X, the card fee is Y, the permit fee is set separately" prose into one transparent, itemised table.

Shares its table grammar with `ComparisonTable`: Geist Mono caps headers with a 1px solid ink underline, Public Sans cells, 1px Rule hairlines between rows, no zebra fills, sharp corners. Scrolls horizontally on small screens.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Component renders the `<h2>` per decision #1. |
| `rows` | `PriceRow[]` | ✓ | — | The itemised rows. |
| `total` | `{ item, cost }` | — | — | An emphasised total row, e.g. `You pay / $129`. |
| `caption` | `string` | — | — | A mono footnote below the table. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `PriceRow` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `item` | `string` | ✓ | What is being priced. |
| `cost` | `string` | ✓ | The cost — `$180`, `Included`, `Set by the regulator`, etc. |
| `rrp` | `string` | — | A struck-through original price shown before the cost. |
| `costHref` | `string` | — | A link on the cost, for fees a regulator publishes centrally. |

## When to use

- The "How much does the course cost?" section on a course-state page.

## When NOT to use

- For attribute-by-option comparison across states or plans — use `ComparisonTable`.
- For the fee fine print (refund terms, what the fee covers) — pair with `LegalCallout` below the table.

## Related

- `ComparisonTable` — the attribute-by-option comparison grid; same table grammar.
- `LegalCallout` — the fee disclaimer that typically sits under this table.
