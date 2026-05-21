---
description: The verbatim ASQA / RTO disclosure block — one component, three variants (near-CTA, footer-legal, copyright-bar). The approved wording is stored verbatim in src/data/disclosures and never paraphrased.
---

# ASQADisclosure

The verbatim ASQA / RTO disclosure block from analysis §3.3 and locked decision #4. An RTO-partnered course-state page must carry the approved regulator wording in several places; this one component renders three of them via a `variant` prop.

The wording is **never written or paraphrased in the component**. It lives verbatim in `src/data/disclosures/asqa-templates.ts`, where only the bracketed facts (RTO name and code, enrolment partner, ABN, course, permit regulator) are interpolated. If a regulator updates the approved wording, it changes in that one file.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `variant` | `'near-cta' \| 'footer-legal' \| 'copyright-bar'` | ✓ | — | Which approved disclosure to render. |
| `context` | `DisclosureContext` | ✓ | — | The page facts interpolated into the verbatim template. |

`DisclosureContext` carries the enrolment partner (name, legal name, ABN), the RTO (name, legal name, code), the course (name, short name, unit codes), the permit details (name, regulator, Act, application body), and the Terms & Conditions href. See `asqa-templates.ts` for the full shape.

## Variants

- **near-cta** — ASQA disclosure location 2. The disclosure that must sit near every call to action. A quiet paragraph with a 1px Rule line above.
- **footer-legal** — location 3. The "About this course" footer block: three approved paragraphs, with the Terms & Conditions reference linked.
- **copyright-bar** — location 4. The 3-line structured copyright bar (Course / Training Provider / Enrolment Partner), in Geist Mono.

## When to use

- On every RTO-partnered course-state page, in the three required positions.

## When NOT to use

- For the short hero attribution — use `RTOAttributionLine` (ASQA disclosure location 1).
- On a hub page — hubs carry regulator names only and no ASQA disclosure (per the Owner Builder hub draft).

## Compliance note

This is a Category H hard-blocker area. The component must not be given paraphrased wording; supply a `DisclosureContext` and let the verbatim templates render. Update the wording only in `asqa-templates.ts`.

## Related

- `RTOAttributionLine` — the short hero attribution (disclosure location 1).
- `asqa-templates.ts` — the verbatim approved wording.
- `LegalCallout` — fee fine print, a separate concern.
