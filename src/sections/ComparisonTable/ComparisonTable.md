---
description: Document-grade comparison grid (attribute rows × option columns). State-by-state requirements, online-vs-in-person, plan tiers. Mono caps headers, Public Sans 600 row labels, 1px ink header rule + Rule hairlines between rows, horizontal scroll on mobile.
---

# ComparisonTable

The white-paper way to present dense factual data: a comparison grid where **rows are attributes** and **columns are the options being compared**. Pulls a wall of "in NSW the fee is X, in QLD it is Y, in WA it is Z…" prose into a single scannable table, which is both more visual and more honest (every option side by side).

Header row uses Geist Mono caps in Ink-3 (label voice) with a 1px solid ink underline. Row labels use Public Sans 600 Ink. Cells use Public Sans 400 Ink. Rows are separated by 1px Rule hairlines — no zebra fills, no shadows, sharp corners (Two-Ornament Rule). On small screens the table scrolls horizontally rather than reflowing.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Section H2. |
| `answer` | `string` | — | — | Optional 40–60 word AnswerCapsule intro. |
| `body` | `string` | — | — | Optional BodyParagraph. Renders only if `answer` is set. |
| `rowHeader` | `string` | — | `''` | Top-left corner cell label, e.g. "Requirement". |
| `columns` | `string[]` | ✓ | — | Column headers, e.g. `["NSW","QLD","WA","TAS","ACT"]`. |
| `rows` | `Row[]` | ✓ | — | Comparison rows. |
| `caption` | `string` | — | — | Mono footnote below the table (use it for the verify-with-regulator note). |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### Types

```ts
interface Row {
  label: string;   // the attribute being compared (row header)
  cells: string[]; // values aligned 1:1 with `columns`
}
```

## When to use

- State-by-state requirement comparisons (the most common dense block on hub/course pages).
- "Online vs in person", "Owner builder vs licensed builder", plan/tier comparisons.
- Any place the same set of attributes is repeated across 2–6 options.

## When NOT to use

- For a single option's facts — use a fact list, not a table.
- For a sequence of steps — use `NumberedStepsSection`.
- For a flat feature list — use `WhyChooseList` / `BulletedFeatureList`.
- For more than ~6 columns — the grid stops being scannable; split it or rethink the cut.

## Example

```astro
---
import ComparisonTable from '@sections/ComparisonTable/ComparisonTable.astro';
---

<ComparisonTable
  heading="What does each state require?"
  answer="Every state requires an approved owner-builder course and a White Card, but the permit authority, fees, and insurance thresholds differ. Here is the side-by-side."
  rowHeader="Requirement"
  columns={['NSW', 'QLD', 'WA', 'TAS', 'ACT']}
  rows={[
    { label: 'Owner-builder course', cells: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes'] },
    { label: 'White Card', cells: ['Required', 'Required', 'Required', 'Required', 'Required'] },
    { label: 'Permit issued by', cells: ['Service NSW', 'QBCC', 'DMIRS', 'CBOS', 'Access Canberra'] },
    { label: 'Home warranty insurance', cells: ['Over $20k', 'Over $3,300', 'Required', 'Over $20k', 'Over $12k'] },
  ]}
  caption="Illustrative summary. Verify current requirements and thresholds with each state regulator before applying."
/>
```

## Visual treatment

Per DESIGN.md §2 and §5:

- Header (corner + column heads): Geist Mono 11px caps, Ink-3, 1px solid ink bottom border.
- Row label: Public Sans 16px weight 600, Ink.
- Cell: Public Sans 16px weight 400, Ink, line-height 1.5.
- Row separators: 1px solid Rule hairline (the Two-Ornament Rule's allowed rule).
- First column hugs the section's left edge (no left padding) so it aligns with the section meta column.
- Tabular figures (`lnum`, `tnum`) so numeric columns align.
- Mobile (≤640px): tighter padding, smaller cell text, horizontal scroll preserved.

## Related

- `NumberedStepsSection` — ordered sequence instead of a comparison.
- `WhyChooseList` / `BulletedFeatureList` — unordered single-option lists.
- `AnswerCapsule`, `BodyParagraph` — composed into the optional intro.
