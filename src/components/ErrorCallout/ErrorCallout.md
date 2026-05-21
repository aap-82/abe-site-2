---
description: The blocking / critical notice. The error member of the callout family for a problem the reader must act on (enrolments closed, course unavailable in a state). 1px red frame, error-deep mono label, Ink body, transparent background. Same structure as WarningCallout, in the semantic error colour.
---

# ErrorCallout

The blocking notice for a problem the reader has to act on right now: an intake whose enrolments have closed, a course not currently offered in their state, a payment that did not go through. Same structure as `WarningCallout`, in the semantic `error` colour.

It is the strongest signal in the callout system, above WarningCallout, because it reports a state that stops the reader rather than just cautioning them. Reserve it for genuinely blocking facts.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `label` | `string` | — | `Critical` | The mono caps label naming the callout. Override for the specific case: `Closed`, `Unavailable`, `Sold out`, `Payment failed`. |

The body is a `<slot>` so the notice can carry inline `link-dotted` links.

## When to use

- A blocking state: enrolments closed, intake full, course unavailable in the reader's state.
- A failed transaction or action the reader must retry.
- Anything that means "you cannot proceed on this path right now".

## When NOT to use

- For a caution the reader can still act through — use `WarningCallout`.
- For quiet contractual fine print — use `LegalCallout`.
- For stating what ABE simply does not offer (a scope limit, not a failure) — use `ScopeLimitNote`.
- For a confirmation / success state — use `SuccessCallout`.

## Design notes

ErrorCallout uses the semantic `error` colour (DESIGN.md §2 Semantic status colours): a 1px red border with an `error-deep` mono caps label, on a transparent background. Body text stays Ink; semantic colours frame and label, they never colour body copy. Flat, sharp corners, full 1px frame (never a left-border colour stripe).

Error red shares Document Maroon's hue neighbourhood but sits lighter and more saturated. The mono caps label and the framed-callout form (not a button) keep it from reading as a maroon CTA. Per DESIGN.md §2, never place an error signal and a maroon action where the two must be told apart with no other cue.

## Example

```astro
---
import ErrorCallout from '@components/ErrorCallout/ErrorCallout.astro';
---

<ErrorCallout label="Closed">
  Enrolments for the June intake have closed. The next available start date is
  14 July 2026.
</ErrorCallout>
```

## Related

- `WarningCallout` — a caution the reader can still act through (one rung quieter).
- `LegalCallout`, `ScopeLimitNote`, `InfoCallout` — the neutral and informational members of the callout family.
- `SuccessCallout` — the confirmation counterpart, in the semantic success colour.
