---
description: The hero-region conversion box on a course-state page — a 1px ink-framed box carrying a few key facts, a prominent Display-register price, a filled v3 CTAButton, and a closing reassurance line.
---

# AboveFoldCTABox

The above-the-fold CTA block from analysis §2.1. The one element on a course-state page built purely to convert — it sits in the hero region beside or under the heading.

Prominence comes from a 1px solid ink frame (the strongest permitted ornament) plus a v3 filled `CTAButton` — this is the focal element, the case the Volume Ladder Rule reserves v3 for.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `facts` | `string[]` | — | `[]` | Key fact lines, hairline-separated. |
| `price` | `string` | ✓ | — | The headline price, rendered in Display register. |
| `priceNote` | `string` | — | — | A supporting note beside the price. |
| `ctaLabel` | `string` | ✓ | — | Primary action label. |
| `ctaHref` | `string` | ✓ | — | Primary action href. |
| `reassurance` | `string` | — | — | A closing reassurance line below a Rule hairline. |

## When to use

- In the hero region of a course-state page, as the primary conversion element.

## When NOT to use

- As the closing CTA of a page — use `FinalCTA`.
- For an itemised price breakdown — use `PricingTable`.

## Design notes

The "📅 📍 💰 ⏱" emoji from the content draft are dropped — the design system owns no icon set. The price uses the Display face so it is the loudest type in the box; the facts and reassurance stay quiet in the ink palette.

## Related

- `CTAButton` — the v3 filled button this box composes.
- `PricingTable` — the full itemised price breakdown.
- `FinalCTA` — the page's closing call to action.
