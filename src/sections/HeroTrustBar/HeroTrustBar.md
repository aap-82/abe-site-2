---
description: The slim hero-region credential strip — a colophon-style "Recognised by QBCC (QLD) • LGIRS (WA) • ..." line framed by a 1px Rule top and bottom. The lightest member of the trust family; the hub hero bar.
---

# HeroTrustBar

The hero-region trust bar from analysis §2.1. A single colophon-style line that sits directly under a hub's page heading and names the regulators recognising the courses the hub links to.

```
─────────────────────────────────────────────
RECOGNISED BY  QBCC (QLD) • LGIRS (WA) • CBOS (TAS)
─────────────────────────────────────────────
```

The lightest member of the trust family. `RegulatorBand` and the trust-stripe variants are the heavier between-sections bands (stat tiles, plates); HeroTrustBar is the slimmest possible hero credential signal — a Rule-framed one-liner, no fill, no tiles.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Accessible section label. Rendered as a visually-hidden `<h2>` per decision #1. |
| `label` | `string` | — | `Recognised by` | The mono caps lead-in label. |
| `credentials` | `Credential[]` | ✓ | — | The regulators recognising the hub's courses. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `Credential` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `regulator` | `string` | ✓ | Regulator or authority name, e.g. `QBCC`, `NSW Fair Trading`. |
| `state` | `string` | — | Optional jurisdiction tag, rendered in parentheses, e.g. `QLD`. |

## When to use

- Directly under the page heading on a hub page, as the hero trust signal.

## When NOT to use

- For the course-page hero attribution ("Training delivered by AlertForce (RTO 91826)...") — use `RTOAttributionLine`.
- For a between-sections stat band — use `RegulatorBand` or a trust-stripe variant.
- For a mid-page grid of verifiable credentials — use `TrustBadgeGrid`.

## Related

- `RegulatorBand`, `TrustBadgeGrid` — the heavier trust components.
- `RTOAttributionLine` — the course-page hero attribution counterpart.
