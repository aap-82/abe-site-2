---
description: In-page jump link. Mono caps label in Ink-3 with dotted underline (label only), Maroon ↓ or ↑ arrow on the right, arrow translates 3px in its direction on hover. For cross-page links, use CrossRefLink instead.
---

# MicroCTA

The small jump link that closes most content sections on hub and course pages. Resolves to an in-page anchor on the SAME page; the arrow indicates which direction the reader will scroll.

Visual grammar per DESIGN.md §5: Geist Mono caps in Ink-3 with a dotted underline under the label only, plus a Maroon arrow on the right (no underline). On hover the label shifts to Maroon and the arrow translates 3px in its direction.

For links to **other ABE pages** (cross-page navigation), use `CrossRefLink` instead — that component uses a → arrow and is the right register for navigation out of the current page.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `targetHeading` | `string` | one-of | — | Heading text of the target section. Slugified via `src/lib/slugify.ts` to build the href. |
| `targetId` | `string` | one-of | — | Explicit anchor id (preserves an existing URL anchor like `page-review`). |
| `label` | `string` | ✓ | — | Visible link text. Clean text only — no leading/trailing arrows; the component renders the arrow. |
| `direction` | `'up' \| 'down'` | — | `'down'` | `down` when the target is below the current section (most common); `up` when the target is above. |

Exactly one of `targetHeading` or `targetId` must be provided.

## When to use

- At the bottom of every major content section to point readers at the next section (`direction: 'down'`).
- For back-to-top or "return to course requirements" patterns where the target is above (`direction: 'up'`).
- Anywhere a quiet inline link should jump within the same page.

## When NOT to use

- For links to **other pages** (e.g. `/owner-builder-nsw` from the hub). Use `CrossRefLink` — wrong arrow direction here would mislead the reader.
- Inside FAQ answers. Quality-gate rule: no inline CTAs in FAQ answers.
- For the primary final CTA on a page. Use `PrimaryCTAButton` — this is the quiet link tier.

## Example — jump down (most common)

```astro
---
import MicroCTA from '@components/MicroCTA/MicroCTA.astro';
---

<MicroCTA targetHeading="See pricing" label="See pricing" />
```

Renders as: `SEE PRICING ↓`.

## Example — jump up

```astro
<MicroCTA
  targetHeading="Course requirements and eligibility"
  label="Back to course requirements"
  direction="up"
/>
```

Renders as: `BACK TO COURSE REQUIREMENTS ↑`.

## Example — preserve existing URL anchor

```astro
<MicroCTA targetId="page-review" label="Jump to the page-review section" />
```

## Label convention

Pass **clean text**. The component renders the arrow itself; do NOT include leading `↓ ` or trailing ` →` in the label. The arrow direction is controlled by the `direction` prop, not by characters in the label.

## Visual treatment

- Label: Geist Mono 500, 11px, tracking 0.1em, uppercase (`.t-label` class).
- Label colour: Ink-3 default; shifts to Maroon on hover.
- Label underline: dotted, 1px, offset 4px from baseline. **Underline is on the label span only — never under the arrow.**
- Arrow: ↓ or ↑ depending on `direction`. Always Maroon. Translates 3px in its direction on hover (180ms ease).

## Related

- `CrossRefLink` — the cross-page sibling component with → arrow.
- `AnswerCapsuleSection` — most capsule sections close with a MicroCTA.
- `slugify` (`src/lib/slugify.ts`) — the shared function that builds the in-page href.
