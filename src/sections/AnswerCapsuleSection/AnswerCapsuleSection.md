---
description: The canonical content-section pattern. H2 question, then AnswerCapsule, then BodyParagraph, then optional slot content (VerificationNote, SourceCitation), then optional closing MicroCTA. The shape repeated ~29 times across the four reference pages.
---

# AnswerCapsuleSection

The standard content-section pattern used on hub, course-state, homepage, and expert pages. Composes a question H2 with the canonical AnswerCapsule + BodyParagraph pair, leaves a slot for trust signals (VerificationNote, SourceCitation, extra paragraphs), and optionally closes with a MicroCTA pointing at the next section.

Auto-generates its wrapper `id` from the slugified heading per locked decision #7, so MicroCTAs on earlier sections resolve their jump targets without manual anchor wiring.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The H2 question. Component renders `<h2>` itself per decision #1. |
| `answer` | `string` | ✓ | — | 40–60 word AnswerCapsule body. |
| `body` | `string` | ✓ | — | 60–120 word BodyParagraph. |
| `anchorId` | `string` | — | `slugify(heading)` | Override for preserving an existing URL anchor (e.g. `page-review`). |
| `nextSectionHeading` | `string` | — | — | Heading of the next section. Slugified for the closing MicroCTA href. |
| `nextSectionLabel` | `string` | — | — | Visible label of the closing MicroCTA. |

Closing MicroCTA renders only when both `nextSectionHeading` and `nextSectionLabel` are provided.

## When to use

- Every content section on every hub, course-state, and homepage. This is THE standard shape.
- Whenever a section heading is phrased as a question that deserves both a snippet-able answer and an expanded body.

## When NOT to use

- Inside FAQ — use `FAQSection` instead (FAQ items are single-paragraph prose without the capsule pattern).
- For numbered processes — use `NumberedStepsSection`.
- For pure feature lists — use `WhyChooseList`.
- For a section with no question heading (e.g. trust-bar strip) — use a different section component.

## Example — standard pattern

```astro
---
import AnswerCapsuleSection from '@sections/AnswerCapsuleSection/AnswerCapsuleSection.astro';
import VerificationNote from '@components/VerificationNote/VerificationNote.astro';
---

<AnswerCapsuleSection
  heading="What is the NSW Owner Builder Course and who needs it?"
  answer="The NSW Owner Builder Course is the approved education you must complete before applying for an Owner Builder Permit when residential building work on your home is valued at $20,000 or more. It covers the five nationally recognised units of competency set by Building Commission NSW."
  body="If you plan to supervise or do building work valued over $10,000 on your own home and you're not contracting a licensed builder, you need an Owner Builder Permit from Building Commission NSW. Once the work value reaches $20,000, you also need to complete the approved education or hold an equivalent qualification."
  nextSectionHeading="How does the course work?"
  nextSectionLabel="↓ See how the course works"
>
  <VerificationNote lastVerified="2026-04-28">
    <a href="https://www.nsw.gov.au/.../when-a-permit-needed" class="link-dotted">Building Commission NSW</a>
  </VerificationNote>
</AnswerCapsuleSection>
```

## Composition

```
AnswerCapsuleSection
├── <h2 class="t-headline"> (heading prop)
├── AnswerCapsule (answer prop)
├── BodyParagraph (body prop)
├── <slot> (VerificationNote, SourceCitation, extra paragraphs)
└── MicroCTA (only if nextSectionHeading + nextSectionLabel)
```

## Related

- `AnswerCapsule`, `BodyParagraph`, `MicroCTA` — the component primitives this section composes.
- `VerificationNote`, `SourceCitation` — typical slot content.
- `FAQSection`, `NumberedStepsSection`, `WhyChooseList` — sibling section patterns for other content shapes.
