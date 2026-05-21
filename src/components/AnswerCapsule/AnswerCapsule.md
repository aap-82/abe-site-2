---
description: The 📌 Answer block. Cornerstone of the library — sits under every H2 question heading. Source Serif 4 prose body with a Regulator Blue mono caps eyebrow (default "Overview"). ~29 instances across the four reference pages.
---

# AnswerCapsule

The 40–60 word direct answer that sits under an H2 question heading on every content section. Voice assistants, AI Overviews, and skim-readers pull this as a snippet. Always paired with `BodyParagraph` below for the expanded explanation.

A small Regulator Blue Deep mono caps eyebrow sits above the prose text, identifying the section's purpose ("OVERVIEW", "HOW IT WORKS", "WHAT YOU'LL LEARN"). The eyebrow uses the verification-register blue rather than ink because it's a structural label, not a body claim — matches the abe-homepage section-eyebrow pattern.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `text` | `string` | ✓ | — | The answer body. Target 40–60 words. |
| `eyebrow` | `string \| null` | — | `'Overview'` | Section eyebrow text rendered in Regulator Blue Deep. Pass `null` to hide the eyebrow entirely. |

## When to use

- Directly under every H2 question heading on a hub, course, or state page.
- Whenever a section heading is phrased as a question that deserves a snippet-able direct answer ("What is …?", "How does …?", "How much does … cost?").
- Always paired with `BodyParagraph` for the expanded explanation underneath.

## When NOT to use

- Inside FAQ answers — FAQ items use plain prose (no capsule, no body split).
- Under headings that aren't phrased as questions. The capsule pattern works because it directly answers a question.
- For warnings, legal callouts, or "important" notes — use the appropriate callout component instead.

## Example — default eyebrow

```astro
---
import AnswerCapsule from '@components/AnswerCapsule/AnswerCapsule.astro';
---

<AnswerCapsule
  text="The NSW Owner Builder Course is the approved education you must complete before applying for an Owner Builder Permit..."
/>
```

Renders with `OVERVIEW` (the default eyebrow) above the prose text in Regulator Blue Deep.

## Example — custom eyebrow

```astro
<AnswerCapsule
  eyebrow="How it works"
  text="Enrol online through ABE Education, complete five units of competency at your own pace, then sit the assessment..."
/>
```

Renders with `HOW IT WORKS` as the eyebrow (mono caps transforms the text to uppercase automatically).

## Example — no eyebrow

```astro
<AnswerCapsule
  eyebrow={null}
  text="A short callout without a structural label..."
/>
```

## Source markdown pattern

```markdown
**📌 Answer:** The NSW Owner Builder Course is the approved education you must complete...
```

The build pipeline maps this pattern onto `<AnswerCapsule text="..." />`. Authors who want a non-default eyebrow set it explicitly in the source.

## Word-count target

40–60 words. Below 40 the answer is too thin to satisfy intent; above 60 it stops being snippet-able.

## Related

- `BodyParagraph` — the 📖 Body block paired with this capsule.
- `MicroCTA` — the ↕️ jump-link that typically closes a capsule section.
- `VerificationNote` / `SourceCitation` — the trust-signal pair that often follows the body paragraph.
- `AnswerCapsuleSection` — the section component that wraps this with an H2, BodyParagraph, slot, and optional MicroCTA; takes its own `eyebrow` prop that passes through to AnswerCapsule.
