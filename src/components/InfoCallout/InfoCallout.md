---
description: The neutral informational note. The information member of the callout family for neutral context or a helpful aside (good-to-know info that is not a caution, failure, success, or verifiable claim). 1px blue frame, information-deep mono label, Ink body, transparent background. Uses the information token (identical to Regulator Blue).
---

# InfoCallout

The neutral informational note: helpful context or a "good to know" aside that is not a caution, a failure, a success, or a verifiable regulator claim. Same structure as the rest of the callout family, in the blue `information` token.

## The register boundary (read this first)

The `information` token is identical to Regulator Blue, because information and verification share one register (DESIGN.md §2). Use InfoCallout for **neutral asides**. Keep **verifiable regulator claims** ("nationally recognised", "RTO 91826", "approved by Service NSW") in the verification family (`VerificationNote`, `TrustBadgeGrid`, state chips). If the blue is backing a checkable claim, use the verification family instead; InfoCallout is for context, not evidence.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `label` | `string` | — | `Info` | The mono caps label naming the callout. Override for the specific case: `Good to know`, `Tip`, `Note`. |

The body is a `<slot>` so the note can carry inline `link-dotted` links.

## When to use

- A neutral, helpful aside the reader benefits from but does not have to act on.
- Context that explains a term, a process detail, or a "good to know" fact.
- Anywhere a note is informational rather than cautionary, blocking, or celebratory.

## When NOT to use

- For a verifiable regulator claim — use the verification family (the blue there is evidence, not an aside).
- For a caution, a blocking problem, or a confirmation — use `WarningCallout` / `ErrorCallout` / `SuccessCallout`.
- For contractual fine print — use `LegalCallout`.

## Design notes

InfoCallout uses the `information` colour (DESIGN.md §2 Semantic status colours), which mirrors Regulator Blue: a 1px blue border with an `information-deep` mono caps label, on a transparent background. Body text stays Ink; the colour frames and labels, it never colours body copy. Flat, sharp corners, full 1px frame (never a left-border colour stripe), no fill.

## Example

```astro
---
import InfoCallout from '@components/InfoCallout/InfoCallout.astro';
---

<InfoCallout label="Good to know">
  Your Unique Student Identifier (USI) follows you for life. Every nationally
  recognised course you complete is recorded against it, so you only ever need
  to create it once.
</InfoCallout>
```

## Related

- `WarningCallout`, `ErrorCallout`, `SuccessCallout`, `LegalCallout`, `ScopeLimitNote` — the rest of the callout family.
- `VerificationNote`, `TrustBadgeGrid`, state chips — the verification register, for checkable regulator claims (not this).
