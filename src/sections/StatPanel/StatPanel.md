---
description: The light proof stats panel (the Why choose ABE section). A stacked section heading and intro, then a row of big-number stats with mono caps labels, ink numerals, and maroon unit superscripts on a Cream-2 panel with 1px hairline dividers, then a Listed by and Verified sources footer. The light sibling of the RegulatorBand stats band.
---

# StatPanel

The light, sourced stats panel, recreated from the deployed "Why choose ABE Education?" section. A full content section: a stacked header (optional number, H2, intro), a row of big-number stats on a Cream-2 panel, and a "Listed by / Verified" sources footer.

## The stats family

StatPanel is one of three stats presentations in the library; pick by tone and context:

| Component | Presentation | Use when |
|---|---|---|
| `RegulatorBand` | Saturated deep-blue band | A bold, full-bleed credentials punctuation (Stripe Singleton) |
| **`StatPanel`** | Light Cream-2 panel with sources | A document-register "proof" section with per-stat detail and citations |
| `PullQuote` (`variant="stat"`) | A single large figure inline | One quantified fact mid-flow |

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Section H2, e.g. `Why choose ABE Education?`. |
| `num` | `string` | — | — | Small section number shown above the heading, e.g. `03`. |
| `intro` | `string` | — | — | Intro paragraph under the heading. |
| `stats` | `Stat[]` | ✓ | — | 3-4 stats. |
| `listedBy` | `{ label: string; href?: string }[]` | — | `[]` | Footer source links. |
| `verified` | `string` | — | — | Footer ISO date `YYYY-MM-DD`. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### Types

```ts
interface Stat {
  label: string;       // mono caps, e.g. "Students certified"
  value: string;       // ink numeral, e.g. "31,000", "95", "4.8", "2"
  suffix?: string;     // maroon superscript unit, e.g. "+", "%", "/5"
  description: string; // one line under the numeral
}
```

## When to use

- A "why choose / proof" section that backs claims with quantified, sourced stats.
- Anywhere four-ish headline numbers need labels, a one-line gloss each, and a citation footer.

## When NOT to use

- For a bold, full-bleed colour band — use `RegulatorBand` (and only one stripe per page).
- For a single figure in running text — use `PullQuote` with `variant="stat"`.
- For a verifiable claim that needs a per-item `.gov.au` link beside it — use `TrustBadgeGrid`.

## Example

```astro
---
import StatPanel from '@sections/StatPanel/StatPanel.astro';
---

<StatPanel
  num="03"
  heading="Why choose ABE Education?"
  intro="ABE combines RTO partnerships with direct state-regulator approvals, giving more verifiable authority than a single-RTO provider."
  stats={[
    { label: 'Students certified', value: '31,000', suffix: '+', description: 'Across NSW, QLD, WA, TAS, ACT, since 2007.' },
    { label: 'First-attempt pass', value: '95', suffix: '%', description: 'Across all three course streams.' },
    { label: 'Google rating', value: '4.8', suffix: '/5', description: 'From 52 Google reviews.' },
    { label: 'RTO partners', value: '2', description: 'Blue Dog (RTO 31193) · AlertForce (RTO 91826).' },
  ]}
  listedBy={[
    { label: 'CBOS Tasmania', href: 'https://cbos.tas.gov.au' },
    { label: 'training.gov.au', href: 'https://training.gov.au' },
  ]}
  verified="2026-05-10"
/>
```

## Visual treatment

Per DESIGN.md §2 and §3:

- Header: optional Geist Mono caps number, Display heading (Archivo 700, up to ~2.5rem), Public Sans intro capped ~60ch.
- Stats: Geist Mono caps labels (Ink-3); numerals max-contrast Ink in Geist Mono 700 (tabular figures) per the Contrast-First Rule; the unit (`+`, `%`, `/5`) is a small Document Maroon superscript, the only accent.
- Panel: Cream-2 (`bg-alt`) cells with 1px Rule hairline dividers via the gap-grid technique (no thick stripes, no shadow, sharp corners), responsive 4 to 2 to 1 column.
- Footer: a 1px dotted rule, then `Listed by` and `Verified` rows in Geist Mono caps; source links carry the dotted-underline grammar, hover to Maroon.

## Note on Contrast-First

The deployed section renders one numeral (the 95% first-attempt pass) in maroon. That breaks the Contrast-First Rule (a large number that IS the content should be max-contrast). This component keeps all numerals Ink and uses Maroon only on the small unit superscript. If a "featured" maroon numeral is genuinely wanted, add it as an explicit opt-in rather than the default.

## Related

- `RegulatorBand` — the saturated blue stats band.
- `PullQuote` (`variant="stat"`) — a single inline key figure.
- `TrustBadgeGrid`, `VerificationFootnote` — the verification register for per-claim citations.
