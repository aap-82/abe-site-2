---
description: The fine-print legal note — the "⚖️ Legal" block for fee disclaimers, refund terms, and other small print inside a content section. The quietest member of the callout family — a 1px rule frame, no fill, small Ink-2 body.
---

# LegalCallout

The small-print legal note from analysis §3.1. Carries fee disclaimers, refund and cancellation terms, and other contractual fine print that needs to sit near a price or a booking action without competing with the body copy.

The quietest member of the callout family. The prominence ladder runs: **LegalCallout** (1px rule frame, no fill) → `ScopeLimitNote` (rule frame + tonal fill) → `WarningCallout` (1px amber frame, semantic warning colour).

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `label` | `string` | — | `Legal` | The mono caps label naming the callout. Rendered uppercase by CSS. |

The body is a `<slot>` so the fine print can carry inline `link-dotted` links (a student handbook, a refund-policy page).

## When to use

- Fee disclaimers and "what the price does / does not include" small print, typically under a `PricingTable`.
- Refund, cancellation, and rescheduling terms.
- Any contractual fine print that must be present but should read quietly.

## When NOT to use

- For a must-read eligibility or location constraint — use `WarningCallout` (louder, amber-framed).
- For stating what ABE does not offer — use `ScopeLimitNote`.
- For the verbatim ASQA / AFSL regulator wording — use `ASQADisclosure`, which carries approved templates that must not be paraphrased.
- For a dated source pointer — use `VerificationNote` or `SourceCitation`.

## Design notes

The "⚖️" emoji from the content drafts is dropped — the design system owns no icon set (Two-Ornament Rule, DESIGN.md §4). The mono caps `LEGAL` label names the callout. The body is set one step down from body copy (14px, Ink-2) so it reads as fine print without becoming illegible.

## Example

```astro
---
import LegalCallout from '@components/LegalCallout/LegalCallout.astro';
---

<LegalCallout>
  The course fee covers training and assessment for the five units. The
  permit fee is paid separately when you apply to Service NSW. For full
  refund and cancellation terms, see the
  <a href="https://example.edu.au/handbook" class="link-dotted" rel="external">
    Student Handbook</a>.
</LegalCallout>
```

## Related

- `WarningCallout`, `ScopeLimitNote` — the other two members of the callout family.
- `ASQADisclosure` — verbatim regulator legal wording, a separate concern.
- `link-dotted` — the inline-link grammar used inside the body slot.
