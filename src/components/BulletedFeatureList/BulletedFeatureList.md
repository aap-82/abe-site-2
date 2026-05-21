---
description: The "What you get" / "Verified trust signals" bullet list. Two visual modes via prop (quiet bullets or maroon ticks). Optional bold lead-in per item. No em dashes in body copy.
---

# BulletedFeatureList

The bullet-list pattern that carries "What you get from ABE", "Why this course", "Verified trust signals" type content. Two visual modes — quiet ink-3 bullets for structural lists, or maroon ticks (✓) for verified-claim lists.

Each item takes an optional bold `title` lead-in plus the body `text`. Title and text are joined with a colon, not an em dash (DESIGN.md §6 forbids em dashes in body copy).

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `items` | `Item[]` | ✓ | — | Array of `{ title?, text }`. |
| `style` | `'bullet' \| 'ticked'` | — | `'bullet'` | `bullet` for quiet structural lists; `ticked` for verified-claim lists. |

### Types

```ts
interface Item {
  title?: string; // optional bold lead-in
  text: string;
}
```

## When to use — `bullet` mode

- "Why choose ABE" sections with bold-lead-in items.
- Generic feature lists in body copy.
- Anywhere a structural list reads as part of the prose flow.

## When to use — `ticked` mode

- "Verified trust signals" rows with `.gov.au` references.
- Course requirements ("What you need") checklists.
- Anywhere the visual semantics are "these are confirmed / proven / done".

## When NOT to use

- For numbered processes — use `NumberedStepsSection` instead.
- For curriculum units of competency — use `UnitOfCompetencyList`.
- For navigation lists — use the nav-specific components in `src/components/links/`.

## Example — bullet mode with bold lead-ins

```astro
---
import BulletedFeatureList from '@components/BulletedFeatureList/BulletedFeatureList.astro';
---

<BulletedFeatureList
  items={[
    { title: 'Verifiable authority', text: 'every regulator approval links back to a .gov.au page you can check yourself' },
    { title: 'Named experts', text: 'our content is reviewed by industry-credentialled people, not anonymous training teams' },
    { title: '100% online', text: 'start in minutes, complete on your schedule, on any device' },
    { title: 'Australian support', text: 'phone and email support during business hours (AEST/AEDT)' },
  ]}
/>
```

## Example — ticked mode for verified signals

```astro
<BulletedFeatureList
  style="ticked"
  items={[
    { text: 'SafeWork NSW Approved Provider (Approval No. RTO800520)' },
    { text: 'Nationally recognised RTO 45708 — verifiable at training.gov.au' },
    { text: 'Same-day Statement of Training' },
    { text: 'White Card delivered in approximately 2 weeks' },
  ]}
/>
```

## Source markdown patterns

The pipeline maps two source patterns onto this component:

```markdown
- **Verifiable authority** every regulator approval links back to a .gov.au page...
- ✅ SafeWork NSW Approved Provider (Approval No. RTO800520)
```

(In the source-markdown convention, the bold lead-in uses a space rather than an em dash; the build step joins with a colon when rendering.)

## Related

- `WhyChooseList` — the section that wraps a `BulletedFeatureList` with a heading and intro.
- `NumberedStepsSection` — when the items are a sequence rather than a flat list.
