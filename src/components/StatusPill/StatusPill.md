---
description: A small inline status chip with five tones — info, important, error and success (the semantic status colours) plus legal (the quiet neutral register). Three fill variants — fill (wash), outline (border) and framed (border plus wash). Geist Mono caps, sharp corners, flat. Labels a status inline; the block-level callout siblings carry the explanation.
---

# StatusPill

A small inline status chip that marks a short status word: an "Info" note, an "Important" flag, an "Error" state, a "Success" confirmation, a "Legal" fine-print tag. It sits in the same chip family as `PremiumBadge`, but carries the semantic status registers rather than the premium register.

It labels a status, it does not act and it does not explain. It is not a button (no action, no maroon) and not a callout (no block, no sentence of explanation). Drop it inline next to a heading, a list item, or a row label.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `tone` | `'info' \| 'important' \| 'error' \| 'success' \| 'legal'` | ✓ | — | The pill register. Picks the colour. |
| `variant` | `'fill' \| 'outline' \| 'framed'` | — | `fill` | The fill style. |
| `label` | `string` | — | the tone word | Fallback text when no slot content is passed. |

Content comes from the default slot, with `label` as a fallback, so both forms work:

```astro
<StatusPill tone="legal">Disclosure</StatusPill>
<StatusPill tone="legal" />   <!-- renders "Legal" -->
```

## Tones

Four tones are the semantic status colours. The fifth, `legal`, is the quiet neutral register — it mirrors `LegalCallout` and carries no status colour, because legal fine print is not a status.

| `tone` | Register | Colour |
|---|---|---|
| `info` | Information | `information` base / `information-deep` text / `information-wash` fill |
| `important` | Warning | `warning` base / `warning-deep` text / `warning-wash` fill |
| `error` | Error | `error` base / `error-deep` text / `error-wash` fill |
| `success` | Success | `success` base / `success-deep` text / `success-wash` fill |
| `legal` | Neutral (legal) | `rule` hairline border / `ink-2` text / `bg-deep` (Cream-3) fill |

## Variants

All three variants work with every tone. Text is fixed per tone; the variant decides the fill and the border.

| `variant` | Border | Background | Use it for |
|---|---|---|---|
| `fill` | none | wash | The default. The quietest, softest signal. |
| `outline` | 1px border | transparent | A crisper edge where the pill sits on a busy or tinted surface. |
| `framed` | 1px border | wash | The most defined and prominent signal — border and fill together. |

Every variant carries a 1px border box (transparent on `fill`), so all variants are the exact same size and can be mixed in one list without the rows shifting.

```astro
<StatusPill tone="legal" variant="fill">Legal</StatusPill>
<StatusPill tone="legal" variant="outline">Legal</StatusPill>
<StatusPill tone="legal" variant="framed">Legal</StatusPill>
```

## When to use

- Flagging the status of an item in a list (a course that is live, on hold, or not yet built).
- Marking a single short status word next to a heading or row label.
- Tagging a row, fact, or price line that carries a legal condition, with `tone="legal"`.
- Anywhere a status needs a compact, scannable signal rather than a sentence.

## When NOT to use

- For a status or legal message with a sentence of explanation — use a callout (`InfoCallout` / `WarningCallout` / `ErrorCallout` / `SuccessCallout` / `LegalCallout`).
- For a paid or featured tier — use `PremiumBadge`.
- For a regulator credential or state code — that is a Regulator Blue state chip.
- For the verbatim ASQA or AFSL regulator wording — use `ASQADisclosure`.
- As a call to action — a pill is a label register, never the maroon action register.
- More than a couple of times in one view; a pill stops signalling if everything wears one.

## Design notes

StatusPill uses the semantic status register (DESIGN.md §2 Semantic status colours): the `*-wash` fill, the `*` base tier for 1px borders, and the `*-deep` tier for text. The `legal` tone steps outside the status register on purpose — legal fine print is not a status, so it takes the neutral palette `LegalCallout` already uses: a 1px `rule` hairline, Ink-2 text, and a quiet Cream-3 fill. That keeps it the quietest pill in the set, matching legal's place at the bottom of the callout prominence ladder. Geist Mono caps (the label voice), 11px, sharp corners, flat. The `important` tone uses the `warning` amber, the system's one warm hue and a documented, bounded exception to the No Warm Tones Rule, permitted here only as a small signal.

## Example

```astro
---
import StatusPill from '@components/StatusPill/StatusPill.astro';
---

<li>Owner Builder QLD <StatusPill tone="success">Live</StatusPill></li>
<li>Course fee <StatusPill tone="legal" variant="outline">GST inclusive</StatusPill></li>
```

## Related

- `PremiumBadge` — the chip sibling in the semantic `premium` colour, for paid or featured content.
- `LegalCallout` — the block-level legal note, the same neutral register with a sentence of fine print.
- `InfoCallout`, `WarningCallout`, `ErrorCallout`, `SuccessCallout` — the block-level status callouts.
