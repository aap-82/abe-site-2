---
description: The paid-tier / featured-content tag. A small inline chip marking prestige or paid content (Premium course, Featured expert). Mirrors the state-chip pattern in the semantic premium colour, with premium-deep text and a 1px premium violet border on a transparent background, mono caps, sharp corners.
---

# PremiumBadge

A small inline chip that marks prestige or paid content: a "Premium" course tier, a "Featured" expert, a bundled upgrade. It mirrors the state-chip pattern (DESIGN.md §5 Chips) in the semantic `premium` colour, so it sits in the same visual family as the Regulator Blue state chips while reading as a distinct register.

It labels, it does not act. It is not a callout (no block, no body) and not a button (no action). Drop it inline next to a heading or list item.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `label` | `string` | — | `Premium` | Fallback text when no slot content is passed. |

Content comes from the default slot, with `label` as a fallback, so both forms work:

```astro
<PremiumBadge>Featured</PremiumBadge>
<PremiumBadge label="Featured" />
```

## When to use

- Marking a paid or upgraded tier in a list of options.
- Flagging featured / prestige content (a featured expert, a flagship course).
- Anywhere a single short word needs to signal "this one is the premium option".

## When NOT to use

- For a regulator credential or state code — that is a Regulator Blue state chip.
- For a status message with a sentence of explanation — use a callout (`Warning` / `Error` / `Success`).
- As a call to action — premium is a label register, never the maroon action register.
- More than once or twice in a view; a badge stops signalling prestige if everything wears one.

## Design notes

PremiumBadge uses the semantic `premium` colour (DESIGN.md §2 Semantic status colours): `premium-deep` text and a 1px `premium` violet border on a transparent background (an outlined tag, no fill). Geist Mono caps (the label voice), sharp corners, flat. Premium is chosen cool violet rather than the conventional gold specifically so it needs no warm-tone exception.

## Example

```astro
---
import PremiumBadge from '@components/PremiumBadge/PremiumBadge.astro';
---

<h3>Owner Builder course <PremiumBadge>Premium</PremiumBadge></h3>
```

## Related

- State chip (DESIGN.md §5 Chips) — the Regulator Blue sibling for state codes and RTO numbers.
- `WarningCallout`, `ErrorCallout`, `SuccessCallout` — the block-level semantic callouts.
