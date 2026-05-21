---
description: H2 + optional AnswerCapsule intro + BulletedFeatureList. The "Why choose ABE" / "Why students choose this course" pattern.
---

# WhyChooseList

The "Why choose ABE Education?" / "Why students choose this course" / "Verified trust signals" pattern. An H2 heading, an optional snippet-able intro (AnswerCapsule + BodyParagraph), and a `BulletedFeatureList` with 4–6 items.

The list `style` prop chooses between quiet ink-3 bullets (for structural lists) and maroon ticks (for verified-claim lists).

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Section H2. |
| `answer` | `string` | — | — | Optional 40–60 word AnswerCapsule intro. |
| `body` | `string` | — | — | Optional 60–120 word BodyParagraph. Renders only when `answer` is also set. |
| `items` | `Item[]` | ✓ | — | 4–6 list items. Forwarded to `BulletedFeatureList`. |
| `style` | `'bullet' \| 'ticked'` | — | `'bullet'` | List visual mode. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### Types

```ts
interface Item {
  title?: string; // optional bold lead-in
  text: string;
}
```

## When to use

- "Why choose [the course / ABE]" sections with bold-lead-in items (`bullet` style).
- "Verified trust signals" sections with `.gov.au`-grounded claims (`ticked` style).
- Anywhere a section needs a heading plus a short bulleted feature list, with or without an intro capsule.

## When NOT to use

- For numbered processes (use `NumberedStepsSection`).
- For curriculum / units of competency (use a dedicated unit list, not this).
- When the list contains nested structure or deep prose per item — use multiple sections instead.

## Example — bullet style with intro (homepage "Why ABE")

```astro
---
import WhyChooseList from '@sections/WhyChooseList/WhyChooseList.astro';
---

<WhyChooseList
  heading="Why choose ABE Education?"
  answer="ABE Education combines RTO partnerships with direct state-regulator approvals, giving you more verifiable authority than a single-RTO provider. Every course is built and reviewed by named subject-matter experts, delivered fully online."
  items={[
    { title: 'Verifiable authority', text: 'every regulator approval links back to a .gov.au page you can check yourself' },
    { title: 'Named experts', text: 'courses are reviewed by industry-credentialled people, not anonymous training teams' },
    { title: '100% online', text: 'start in minutes, complete on your schedule, on any device' },
    { title: 'Australian support', text: 'phone and email support during business hours (AEST and AEDT)' },
  ]}
/>
```

## Example — ticked style without intro (verified trust signals)

```astro
<WhyChooseList
  heading="Verified trust signals"
  style="ticked"
  items={[
    { text: 'SafeWork NSW Approved Provider (Approval No. RTO800520)' },
    { text: 'Nationally Recognised RTO 45708, verifiable at training.gov.au' },
    { text: 'Same-day Statement of Training' },
    { text: 'Live trainer on every session, not pre-recorded videos' },
  ]}
/>
```

## Related

- `BulletedFeatureList` — the underlying component this section composes.
- `AnswerCapsule`, `BodyParagraph` — composed into the optional intro.
- `AnswerCapsuleSection` — the more general "heading + capsule + body + slot" pattern when the section isn't a list.
