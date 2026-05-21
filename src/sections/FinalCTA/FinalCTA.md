---
description: The closing call-to-action section — an outcome-focused heading, a short body line, a primary v3 CTAButton, and an optional quiet secondary link. Closes every hub, course, and homepage.
---

# FinalCTA

The "Section 7 — Final CTA" from analysis §2.4. The section that closes every hub, course-state, and homepage with one clear next step.

The primary action is a v3 (filled) `CTAButton` — FinalCTA is an action-led surface where the button is the focal point, the case the Volume Ladder Rule (DESIGN.md §2) reserves v3 for. The secondary action is a quiet `link-dotted` link rather than a second button, so the primary stays unmistakably primary.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Outcome-focused, not a generic "Enrol now". Component renders the `<h2>` per decision #1. |
| `body` | `string` | ✓ | — | A short supporting line under the heading. |
| `primaryLabel` | `string` | ✓ | — | Primary CTA label. |
| `primaryHref` | `string` | ✓ | — | Primary CTA href. |
| `secondaryLabel` | `string` | — | — | Optional secondary action label. |
| `secondaryHref` | `string` | — | — | Required when `secondaryLabel` is set. |
| `secondaryNote` | `string` | — | — | Optional trailing note after the secondary link, e.g. "phone, email, or live chat during business hours". |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

The secondary action renders only when both `secondaryLabel` and `secondaryHref` are provided.

## When to use

- As the final section of any hub, course-state, or homepage.

## When NOT to use

- For an inline mid-section nudge to the next section — use `MicroCTA`.
- For a single framed action inside a content section — use `CTAButton` directly.

## Composition

```
FinalCTA
├── <h2 class="t-headline"> (heading prop)
├── <p class="fcta__body">  (body prop)
└── fcta__actions
    ├── CTAButton variant="v3"        (primary)
    └── link-dotted + note            (secondary, optional)
```

## Related

- `CTAButton` — the primary action button this section composes.
- `MicroCTA` — the inline next-section nudge, a different job.
