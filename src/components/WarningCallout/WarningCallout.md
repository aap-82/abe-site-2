---
description: The must-read constraint note, the "⚠️ Important" block for location and eligibility constraints a reader cannot miss. The loudest member of the callout family, with a 1px amber frame in the semantic warning colour, an ochre label, and full body-size Ink copy.
---

# WarningCallout

The must-read constraint note from analysis §3.1. Carries location and eligibility constraints the reader genuinely cannot miss — for example, "you must be physically located in NSW on the day of online training."

The loudest member of the callout family. The prominence ladder runs: `LegalCallout` (1px rule frame, no fill) → `ScopeLimitNote` (rule frame + tonal fill) → **WarningCallout** (1px amber frame, semantic warning colour).

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `label` | `string` | — | `Important` | The mono caps label naming the callout. Rendered uppercase by CSS. Override for a more specific framing, e.g. `Eligibility`. |

The body is a `<slot>` so the constraint can carry inline `link-dotted` links.

## When to use

- Location constraints — where the learner must physically be to complete the course.
- Eligibility constraints — prerequisites or conditions that disqualify some readers.
- Any single fact that, if missed, would waste the reader's money or time.

## When NOT to use

- For quiet contractual fine print — use `LegalCallout`.
- For stating what ABE does not offer — use `ScopeLimitNote`.
- For the verbatim ASQA / AFSL regulator wording — use `ASQADisclosure`.
- As a general highlight box. WarningCallout is the loudest callout; overusing it flattens the prominence ladder and it stops reading as "must not miss".

## Design notes

WarningCallout uses the semantic `warning` colour (DESIGN.md §2 Semantic status colours): a 1px amber border with an ochre `warning-deep` mono caps label, on a transparent background. Amber is the system's one warm hue, a bounded exception to the No Warm Tones Rule, permitted here only as a small status signal (border and label, no fill). The body text stays Ink: semantic colours label and frame, they never colour body copy. A left-border colour stripe is still forbidden (the design system's named AI tell): the warning colour is applied as a full 1px frame, not a stripe. The "⚠️" emoji is dropped; the `IMPORTANT` mono caps label names the callout, and the body stays at full body size (16px) because it must be read.

## Example

```astro
---
import WarningCallout from '@components/WarningCallout/WarningCallout.astro';
---

<WarningCallout>
  You must be physically located within NSW at the time of online training.
  The course cannot be completed if you are interstate on the day.
</WarningCallout>
```

## Related

- `LegalCallout`, `ScopeLimitNote`, `InfoCallout`, `ErrorCallout`, `SuccessCallout` — the other members of the callout family.
- `ASQADisclosure` — verbatim regulator legal wording, a separate concern.
- `link-dotted` — the inline-link grammar used inside the body slot.
