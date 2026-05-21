---
description: The deep Regulator Blue credentials band. A saturated info-deep plate carrying an optional brand block and 3-5 credential stat tiles (cream numerals over blue-on-dark mono caps labels). The blue member of the Trust Stripe family. Subject to the Stripe Singleton Rule.
---

# RegulatorBand

The at-a-glance credentials band, set on a saturated deep Regulator Blue plate. It is the blue member of the Trust Stripe family from DESIGN.md §5: the same dashboard register as the production dark-ink Variant C, recoloured onto an `info-deep` ground so verification reads as a distinct, current-state register rather than another ink surface.

Use it to break up a long, ink-heavy page with one saturated colour surface that is still 100% on-doctrine, because every tile is verification or current-state (states served, RTO partner, regulator, freshness stamp), never decoration.

Numerals go max-contrast cream (Contrast-First Rule — the number IS the content). Only the small mono caps labels carry the `info-on-dark` blue tint. Sharp corners, flat, 1px hairline dividers between tiles. No box-shadow.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Accessible section label. Rendered as a visually-hidden `<h2>` (trust stripes have no visible title, but the band still needs a real outline entry and anchor). |
| `brand` | `string` | — | — | Optional left brand stamp, e.g. "ABE Education". Cream Archivo 800. |
| `brandTag` | `string` | — | — | Optional mono caps tagline under the brand stamp. |
| `stats` | `Stat[]` | ✓ | — | 3-5 credential tiles. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### Types

```ts
interface Stat {
  value: string; // short credential value: "5", "RTO 91826", "Yes", "21 May 2026"
  label: string; // mono caps label: "STATES COVERED", "RTO PARTNER"
}
```

## When to use

- Directly under the `PageHeading` (or between hero and the first section) as the page's single trust stripe.
- When a long page reads as too monochrome and needs one saturated colour surface without breaking the Two-Accent Rule.
- To summarise credentials at a glance; the detailed, linked citations still live in `VerificationFootnote` / `SourceCitation` further down the page.

## When NOT to use

- More than once per page. The **Stripe Singleton Rule** allows one trust-stripe variant per page; don't stack this with another stripe.
- For per-claim verification with a `.gov.au` link — use `VerificationNote`, `VerificationFootnote`, or `SourceCitation`. The band is a glanceable summary, not a linked citation.
- For action / brand messaging — that register is Maroon, not blue. Don't put a CTA in the band.
- For long text values. Keep each `value` short (a number, a code, a one-word state, a date). Long phrases break the numeral scale.

## Example

```astro
---
import RegulatorBand from '@sections/RegulatorBand/RegulatorBand.astro';
---

<RegulatorBand
  heading="Accreditation and credentials"
  brand="ABE Education"
  brandTag="Nationally recognised training"
  stats={[
    { value: '5', label: 'States covered' },
    { value: 'RTO 91826', label: 'RTO partner' },
    { value: 'Yes', label: 'Nationally recognised' },
    { value: '21 May 2026', label: 'Last verified' },
  ]}
/>
```

## Visual treatment

Per DESIGN.md §2 and §5:

- Plate ground: `--info-deep` (`oklch(32% 0.12 235)`), full width.
- Numerals: cream (`--bg`), Geist Mono 700, `clamp(1.5rem, 2.4vw, 2rem)`, tabular-nums (Contrast-First Rule).
- Labels: Geist Mono 10px caps, `--info-on-dark` (`oklch(78% 0.08 235)`), the blue-on-dark token.
- Brand name: cream Archivo 800; brand tag: `--info-on-dark` mono caps.
- Dividers: 1px solid hairline (`color-mix` of cream into transparent), the dark-plate analogue of the Two-Ornament Rule's 1px ink frame. Between tiles and after the brand block only; never a thick coloured side stripe.
- Flat: no box-shadow, sharp corners.
- Mobile (≤720px): brand block stacks above the stats with a bottom hairline; tiles wrap to two-up.

## Related

- `VerificationFootnote`, `VerificationNote`, `SourceCitation` — the linked, per-claim verification family. The band summarises; these cite.
- DESIGN.md §5 Trust Stripe table — the full variant family (A datebar, B chips, C dark-ink stats, plus this blue stats variant).
