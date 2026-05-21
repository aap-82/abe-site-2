---
description: The lifted statement / key-stat device. variant="quote" is a large Source Serif 4 pull-quote (editorial voice) with optional eyebrow + cite; variant="stat" is a big Geist Mono 700 numeral over a mono caps label. Both max-contrast Ink, framed by 1px ink hairlines top and bottom. Drop inside a section body to break a long run of text.
---

# PullQuote

A single high-contrast focal moment for breaking up a long run of body text. One component, two variants.

- **`variant="quote"` (default)** — a large statement set in Source Serif 4. Per the Voice-Per-Face Rule, prose is the editorial-longform voice, so a serif pull-quote both reads correctly and contrasts the surrounding Public Sans body. Optional mono caps eyebrow above, optional mono caps cite below.
- **`variant="stat"`** — a big Geist Mono 700 numeral over a mono caps label. The light-ground sibling of a `RegulatorBand` tile, dropped inline in the reading flow.

Both go max-contrast Ink (Contrast-First Rule — the statement *is* the content; never maroon, which is action-only). Framed by 1px solid ink hairlines top and bottom (the Two-Ornament Rule's ink frame, applied horizontally) — no left/right colour stripe, no shadow, sharp corners.

This is a **component, not a section**: no `heading`, no anchor. Place it inside a section's body flow.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `variant` | `'quote' \| 'stat'` | — | `'quote'` | Which device to render. |
| `eyebrow` | `string` | — | — | Optional mono caps eyebrow above, e.g. "KEY POINT". Both variants. |
| `text` | `string` | quote | — | The statement (quote variant). |
| `cite` | `string` | — | — | Attribution / source line (quote variant). No em dashes. |
| `value` | `string` | stat | — | The big value (stat variant), e.g. "2,400+", "$294". Keep short. |
| `label` | `string` | — | — | Mono caps label under the value (stat variant). |

## When to use

- To break a long section of prose with one focal statement (quote).
- To surface a single quantified fact at display scale inside the flow (stat) — a price, a count, a duration.
- Once or twice per page, as punctuation. It is a focal device; more than a couple dilutes it.

## When NOT to use

- For several stats together — use `RegulatorBand` (the grouped band), not a row of PullQuotes.
- For a verifiable claim that needs a `.gov.au` link — use the verification family; PullQuote is emphasis, not citation. (You can pair them: a stat PullQuote followed by a `SourceCitation`.)
- For an action / CTA — that register is Maroon and the CTAButton, never a pull-quote.
- For a long paragraph — a pull-quote is one or two lines; if it needs three, it is body copy.

## Examples

```astro
---
import PullQuote from '@components/PullQuote/PullQuote.astro';
---

<!-- Quote -->
<PullQuote
  eyebrow="Key point"
  text="An owner-builder permit lets you manage your own residential build, but you take on the legal duties of a licensed builder for six years."
  cite="Service NSW, verified 21 May 2026"
/>

<!-- Key stat -->
<PullQuote
  variant="stat"
  value="2,400+"
  label="Owner builders trained since 2019"
/>
```

## Visual treatment

Per DESIGN.md §2 and §3:

- Quote text: Source Serif 4 400, `clamp(1.5rem, 3vw, 2.25rem)`, line-height 1.3, max 30ch, old-style figures. Ink.
- Stat value: Geist Mono 700, `clamp(2.5rem, 6vw, 4rem)`, tabular figures. Ink.
- Eyebrow / cite / label: Geist Mono caps, Ink-3 (label voice). Cite uses the 10px footnote step.
- Frame: 1px solid ink top + bottom, generous block padding. No left stripe, no shadow, sharp corners.

## Related

- `RegulatorBand` — grouped stat tiles on a blue plate (use for several stats at once).
- `AnswerCapsule` — the serif capsule that opens a section (PullQuote is a mid-flow focal moment, not the opener).
- `SourceCitation` / `VerificationNote` — pair after a stat PullQuote when the figure needs a source.
