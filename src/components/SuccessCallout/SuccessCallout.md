---
description: The confirmation / completion note. The success member of the callout family for a positive outcome of a process the reader just completed (enrolment confirmed, assessment passed, payment received). 1px green frame, success-deep mono label, Ink body, transparent background. NOT for regulator approval, which stays Regulator Blue.
---

# SuccessCallout

The confirmation note for a positive outcome of a process the reader just completed: enrolment confirmed, assessment passed, payment received, course finished. Same structure as `WarningCallout`, in the semantic `success` colour.

## The register boundary (read this first)

Success green confirms a **process outcome**. It is **not** the regulator-approval signal. "Approved by Service NSW", "nationally recognised", "RTO 91826" and other verification or current-state claims stay in **Regulator Blue** (the Two-Accent Rule, DESIGN.md §2). If the green is labelling a credential rather than a completed action, the wrong register is in use; reach for the verification family (`VerificationNote`, `TrustBadgeGrid`, state chips) instead.

Rule of thumb: if the reader *did* something and it worked, that is SuccessCallout. If a regulator *recognises* something, that is blue.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `label` | `string` | — | `Confirmed` | The mono caps label naming the callout. Override for the specific case: `Complete`, `Passed`, `Received`, `Enrolled`. |

The body is a `<slot>` so the confirmation can carry inline `link-dotted` links (receipts, next-step pages).

## When to use

- Post-action confirmations in a flow: enrolment confirmed, payment received.
- Completion states: assessment passed, course finished, Statement of Attainment issued to the learner.
- Any moment the reader's own action succeeded and you are telling them so.

## When NOT to use

- For a regulator approval or recognition claim — that is Regulator Blue (verification register).
- For a caution or blocking problem — use `WarningCallout` / `ErrorCallout`.
- As a decorative "good news" highlight. It marks a real outcome, not marketing tone.

## Design notes

SuccessCallout uses the semantic `success` colour (DESIGN.md §2 Semantic status colours): a 1px green border with a `success-deep` mono caps label, on a transparent background. Body text stays Ink; semantic colours frame and label, they never colour body copy. Flat, sharp corners, full 1px frame (never a left-border colour stripe).

## Example

```astro
---
import SuccessCallout from '@components/SuccessCallout/SuccessCallout.astro';
---

<SuccessCallout label="Enrolled">
  Your place in the 14 July intake is confirmed. A receipt and your course
  login have been emailed to you.
</SuccessCallout>
```

## Related

- `WarningCallout`, `ErrorCallout`, `InfoCallout`, `LegalCallout`, `ScopeLimitNote` — the other members of the callout family.
- `VerificationNote`, `TrustBadgeGrid`, state chips — the Regulator Blue verification register, for approval / recognition claims (not this).
