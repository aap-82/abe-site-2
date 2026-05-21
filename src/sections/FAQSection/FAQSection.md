---
description: Frameless FAQ accordion. Each item separated by a 1px solid ink top divider. Maroon + / × toggle indicator. Hover shifts question to Maroon. Native <details>/<summary>. Drives FAQPage JSON-LD via the same items array.
---

# FAQSection

A frameless accordion that displays N FAQ items separated by 1px solid ink top dividers — no surrounding card, no outer frame. Each row's toggle indicator swaps between `+` (closed) and `×` (open), both in Maroon. Hovering a row shifts the question text to Maroon. Native HTML `<details>`/`<summary>` — multi-open by default, no JavaScript, full keyboard accessibility.

Any section heading or eyebrow sits **outside** this component, handled by the parent page or archetype layout.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | — | — | Not rendered. Used only as the basis for the wrapper id when `anchorId` is not provided. Pass the same string the parent page uses for its H2 so in-page jumps resolve cleanly. |
| `items` | `FAQItem[]` | ✓ | — | 6–10 question/answer pairs. Drives both the rendered accordion and the FAQPage schema. |
| `anchorId` | `string` | — | `slugify(heading)` or `"faq"` | Override the wrapper id explicitly. |

### Types

```ts
interface FAQItem {
  question: string;  // 5–15 word voice-search-style phrasing
  answer: string;    // 30–80 word plain prose, no inline CTAs
}
```

## When to use

- Once per page (hub, course-state, homepage). The reference pages each carry one FAQ section.
- Whenever a content stream has 6 or more questions that don't fit cleanly into the body sections.

## When NOT to use

- For a single question + answer pair — use `AnswerCapsuleSection` instead.
- For a sectioned set of detailed answers — those usually want their own `AnswerCapsuleSection` per topic.

## Quality rules for FAQ content

- **6–10 items.** Below six the FAQPage schema is thin; above ten the section starts feeling like a knowledge base.
- **30–80 word answers.** Inside the AI-Overview snippet target.
- **No inline CTAs in answers.** Hard rule.
- **Plain prose.** Single paragraph per answer.
- **Voice-search phrasing.** Questions in natural spoken form.

## Example

```astro
---
import FAQSection from '@sections/FAQSection/FAQSection.astro';

const faqs = [
  {
    question: 'Is ABE Education a registered training organisation (RTO)?',
    answer: "No, and we don't claim to be. ABE partners with RTOs to deliver White Card training across all states and the NSW Owner Builder qualification, since NSW requires Owner Builder training to be issued by a registered training organisation.",
  },
  // … more items
];
---

<FAQSection items={faqs} heading="Frequently asked questions" />
```

If you want a visible heading above the accordion, render it yourself outside the component:

```astro
<h2 class="t-headline">Frequently asked questions</h2>
<FAQSection items={faqs} heading="Frequently asked questions" />
```

The `heading` prop on the component is only used to derive the wrapper id (`#frequently-asked-questions`) for jump-link resolution.

## Visual treatment

- **Outer outline**: 1px solid Ink on the top and bottom of the whole accordion. No side borders, no background. The outline frames the list as a unit.
- **Inner dividers**: 1px solid Rule (lighter than Ink) between each pair of items. The first item gets no top divider because the outer outline handles it. Summary padding `--spacing-md` vertical, no horizontal padding.
- **Question**: Archivo 700, ~17–18px (clamp), Ink, tight letter-spacing. Hover and focus shift the question to Maroon (no background flash).
- **Toggle indicator**: 16px SVG, stroke Maroon. Two icons rendered in the same slot — `+` is visible by default, `×` is visible when the `<details>` element has the `[open]` attribute. Hover deepens to `--accent-deep`.
- **Answer body**: padding 0 0 `--spacing-lg`, max-width 70ch. Paragraphs at 15px Ink-2.

## Accessibility

- Native `<details>`/`<summary>` carries the click and keyboard semantics for free (Enter and Space toggle).
- `<h3 class="faq__q">` inside `<summary>` provides correct document outline.
- `:focus-visible` on the summary draws a 2px ink outline so keyboard users see where they are.
- The chevron is `aria-hidden` because the toggle state is communicated via the native `<details>` semantics.

## Schema integration

The same `items` array passed here should be passed to `buildFAQPage(items)` in the layout's schema builder. Single source of truth: the rendered FAQ and the JSON-LD never drift.

```ts
import { buildFAQPage } from '@lib/buildFAQPage';
const faqPageGraph = buildFAQPage(faqs);
```

## Related

- `AnswerCapsuleSection` — for single question/answer sections.
- `buildFAQPage` — the schema builder that consumes the same data shape.
- `abe-homepage.html §09` (in `Website Content/`) — the original reference markup this component mirrors.
