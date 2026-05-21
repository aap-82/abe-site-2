---
description: H2 + optional AnswerCapsule intro + N numbered step cards. Variable length (3-step course process, 5-step hub process). Numbers in mono Display, titles in Archivo 700, items separated by dotted rules.
---

# NumberedStepsSection

The numbered-process pattern used on course-state pages ("How does the course work?" with 3 steps) and hub pages ("How to become an owner builder" with 5 steps). One component, variable step count.

Numbers render in Display register (Geist Mono 1.75rem, Ink-4) as `01`, `02`, etc. Step titles use a custom Archivo 700 subheading at body-tier size. Step bodies use standard Body register. Items separated by 1px dotted ink-3 rules per the Two-Ornament Rule.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Section H2. |
| `answer` | `string` | — | — | Optional 40–60 word AnswerCapsule intro. |
| `body` | `string` | — | — | Optional 60–120 word BodyParagraph. Renders only if `answer` is set. |
| `steps` | `Step[]` | ✓ | — | 3–5 step entries (typically 3 on course pages, 5 on hub pages). |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### Types

```ts
interface Step {
  title: string; // short noun phrase or imperative
  text: string;  // 1–2 sentences
}
```

## When to use

- "How does the course work?" / "How does it work?" sections on every course-state page (3 steps).
- "How to become an [owner builder / White Card holder]" sections on hub pages (5 steps).
- Whenever the content is a sequence of discrete actions in order.

## When NOT to use

- For a flat feature list — use `WhyChooseList`.
- For a sectioned set of explanatory blocks where order doesn't matter — use sibling `AnswerCapsuleSection`s instead.
- For curriculum / units of competency — use a dedicated unit list (not this).

## Example — 3-step course process

```astro
---
import NumberedStepsSection from '@sections/NumberedStepsSection/NumberedStepsSection.astro';
---

<NumberedStepsSection
  heading="How does the course work?"
  answer="Enrol online through ABE Education, complete five units of competency at your own pace, then sit the assessment. AlertForce verifies your work and issues your Statement of Attainment."
  steps={[
    {
      title: 'Enrol online',
      text: 'Sign up through ABE Education, set your password, and you have straight access to the course. You need a Unique Student Identifier (USI) to enrol — this is a legal requirement for all nationally recognised training.',
    },
    {
      title: 'Work through the five units',
      text: 'The course is fully online and self-paced. Read the learner materials, watch the supporting videos, and complete each unit in the order presented. You can pause and pick up where you left off.',
    },
    {
      title: 'Sit the assessment',
      text: 'Each unit has a written assessment you complete inside the platform. Once you have passed all five, AlertForce reviews your work and issues your Statement of Attainment.',
    },
  ]}
/>
```

## Example — 5-step hub process

```astro
<NumberedStepsSection
  heading="What are the steps to become an owner builder?"
  steps={[
    { title: "Check you're eligible", text: '…' },
    { title: 'Get your White Card', text: '…' },
    { title: 'Complete the approved course', text: '…' },
    { title: 'Lodge your permit application', text: '…' },
    { title: 'Arrange insurance and start', text: '…' },
  ]}
/>
```

## Visual treatment

Per DESIGN.md §2 and §3:

- Number column: 4rem wide on desktop, 3rem on mobile. Numbers padded to two digits (`01`, `02`).
- Number colour: Ink-4 (the "big section number / disabled" tier — quiet enough not to compete with the title).
- Title: Archivo 700 at 1.125rem, ink primary.
- Body: Public Sans 400 at 16px, ink primary, max 65ch line length.
- Dotted ink-3 rule between every item (Two-Ornament Rule — only this and the 1px solid ink frame are allowed).

## Related

- `AnswerCapsule`, `BodyParagraph` — composed into the optional intro.
- `AnswerCapsuleSection` — the more general "heading + capsule + body + slot" pattern when the section isn't a sequence.
- `WhyChooseList` — for an unordered list of features instead of an ordered sequence of steps.
