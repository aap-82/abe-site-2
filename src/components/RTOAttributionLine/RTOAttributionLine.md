---
description: The hero short-form RTO attribution — a one-line "Training delivered by [RTO] ([code]) · Enrolled through [partner]" that sits under the page heading on an RTO-partnered course-state page. ASQA disclosure location 1 of 7.
---

# RTOAttributionLine

The hero short-form RTO attribution from analysis §3.3. The single quiet line under a course-state page heading that names who delivers the training and who handles enrolment.

This is ASQA disclosure location 1 of 7 — the hero inline short form. The longer verbatim disclosures (near-CTA, footer-legal, copyright bar) are handled by `ASQADisclosure`.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `rto` | `string` | ✓ | — | Display name of the Registered Training Organisation. |
| `rtoCode` | `string` | ✓ | — | RTO code label, e.g. `RTO 91826`. |
| `enrolPartner` | `string` | — | `ABE Education` | The enrolment partner. |

## When to use

- Directly under the page heading on an RTO-partnered course-state page (where an RTO delivers and ABE enrols).

## When NOT to use

- On a hub page — use `HeroTrustBar` for the hub hero credential strip.
- For the near-CTA, footer-legal, or copyright-bar disclosures — use `ASQADisclosure`.

## Design notes

The line states a plain fact about who delivers and who enrols. The wording is fixed and must not be paraphrased into a marketing claim. It renders quietly — body register, Ink-3, no frame — with the two named organisations one ink tier stronger.

## Related

- `ASQADisclosure` — the three longer verbatim ASQA disclosures.
- `HeroTrustBar` — the hub hero credential strip.
