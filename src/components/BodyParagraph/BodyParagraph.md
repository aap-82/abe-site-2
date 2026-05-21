---
description: The expanded explanation that follows AnswerCapsule. Plain Public Sans paragraph, no label or emoji — the font switch from Source Serif 4 (capsule) to Public Sans (body) is the visual cue.
---

# BodyParagraph

The 60–120 word body explanation that pairs with `AnswerCapsule` on a content section. The capsule answers the H2 question in snippet-able form; the body expands.

Migrated 19 May 2026 to drop the `📖 Body` emoji label per DESIGN.md §3 Voice-Per-Face Rule. The visual differentiation from AnswerCapsule is now carried entirely by typography: capsule is Source Serif 4 prose (editorial register), body is Public Sans (argument register). The reader recognises the shift without a redundant label.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `text` | `string` | ✓ | — | The expanded explanation. Target 60–120 words. |

## When to use

- Directly under every `AnswerCapsule`.
- Whenever a section needs both a snippet-able answer and a longer, more nuanced explanation.

## When NOT to use

- Without a preceding `AnswerCapsule`. The component reads as a homeless paragraph on its own.
- Inside FAQ answers. FAQ items are single-paragraph prose, no capsule/body split.
- For warnings, legal callouts, or important notes. Use the appropriate callout component instead.

## Example

```astro
---
import AnswerCapsule from '@components/AnswerCapsule/AnswerCapsule.astro';
import BodyParagraph from '@components/BodyParagraph/BodyParagraph.astro';
---

<AnswerCapsule text="The NSW Owner Builder Course is the approved education you must complete before applying for an Owner Builder Permit..." />

<BodyParagraph
  text="If you plan to supervise or do building work valued over $10,000 on your own home and you're not contracting a licensed builder, you need an Owner Builder Permit from Building Commission NSW."
/>
```

## Word-count target

60–120 words is the sweet spot. Below 60, the body is not adding much beyond the capsule. Above 120, the section starts to crowd; split into multiple paragraphs or pull part into a separate section.

## Related

- `AnswerCapsule` — the answer block this paragraph pairs with.
- `VerificationNote`, `SourceCitation` — small ink-3 captions that often follow this paragraph citing a `.gov.au` source.
- `AnswerCapsuleSection` — the section that composes both into the canonical pattern.
