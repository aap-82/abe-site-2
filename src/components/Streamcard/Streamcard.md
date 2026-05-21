---
description: The homepage stream card, with two layouts. plate (default) is the deployed solid vertical card (Cream-1 or Document Ink) with eyebrow, big maroon number, Display title, body, CTA, and credential footnote. canonical is the DESIGN.md §5 transparent three-column row (14rem summary, 1fr body, 14rem state-nav) with aligned dotted top rules and a Deep Burgundy brand word.
---

# Streamcard

The homepage "stream" card. One component, two layouts selected by the `layout` prop.

- **`layout="plate"` (default)** — the currently deployed design: a solid vertical card used three-up, with a `light` (Cream-1) or `dark` (Document Ink) variant. Eyebrow + big maroon number, Display title, body with bold RTO lead-ins, a CTA link, a dotted rule, and a credential footnote.
- **`layout="canonical"`** — the DESIGN.md §5 "Streamcard (§02 canonical)": a transparent three-column grid (14rem summary / 1fr body / 14rem state-nav), no perimeter border, no shadow. Each column carries an aligned 1px dotted ink-3 top rule that marks the card boundary. The brand word sits in Deep Burgundy; column three holds the per-state links (same grammar as the section-header browse-streams nav).

Body text is the default `<slot>` in both layouts, so RTO-partner names can be bolded inline.

## The two layouts

DESIGN.md §5 originally documented only the canonical three-column row. The deployed homepage later moved to the solid plate. Rather than choose, this component carries **both**: `plate` matches what is live, `canonical` matches the design doc. If one is retired, drop the corresponding branch and update DESIGN.md §5.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `num` | `string` | ✓ | — | Two-digit stream number, e.g. `01`. |
| `eyebrow` | `string` | ✓ | — | Short 2-3 word stream description. Plate eyebrow / canonical category line. |
| `title` | `string` | ✓ | — | Stream title (plate) or brand word (canonical). Renders `<h3>`. |
| `ctaLabel` | `string` | ✓ | — | CTA text, rendered mono caps. |
| `ctaHref` | `string` | — | — | CTA target. Omit to render the label as static (unlinked). |
| `footnote` | `string` | ✓ | — | Mono caps credential / source line. |
| `layout` | `'plate' \| 'canonical'` | — | `plate` | Which layout to render. |
| `variant` | `'light' \| 'dark'` | — | `light` | Plate tonal variant. Ignored when `layout="canonical"`. |
| `states` | `{ name: string; href?: string }[]` | — | `[]` | Per-state links for the canonical nav column. Ignored by the plate. |

## When to use

- **plate** — the homepage streams section (three cards: Owner Builder, White Card, CPD), `dark` on the emphasis card.
- **canonical** — a denser, document-register streams section where each stream also exposes its per-state course links inline (the right-hand nav column).

## When NOT to use

- For a single call to action in running text — use `CTAButton`.
- For a dense data comparison across options — use `ComparisonTable`.
- For a verification-only credentials strip — use `TrustBadgeGrid` or `RegulatorBand`.
- More than one plate `dark` card per row; the dark plate is an emphasis, not a default.

## Examples

```astro
---
import Streamcard from '@components/Streamcard/Streamcard.astro';
---

<!-- Plate (deployed) -->
<Streamcard
  num="01"
  eyebrow="Owner-builder permits"
  title="Owner Builder courses."
  ctaLabel="Browse Owner Builder by state"
  ctaHref="/owner-builder"
  footnote="Approved by QBCC · Consumer Protection WA · CBOS TAS"
>
  ABE delivers directly in <strong>QLD</strong>, <strong>WA</strong>,
  <strong>TAS</strong>, and <strong>ACT</strong>, and with
  <strong>AlertForce (RTO 91826)</strong> for NSW.
</Streamcard>

<!-- Canonical (DESIGN.md §5) -->
<Streamcard
  layout="canonical"
  num="01"
  eyebrow="Permit pathway"
  title="Owner Builder"
  ctaLabel="Browse Owner Builder"
  ctaHref="/owner-builder"
  footnote="Source QBCC · CBOS TAS · Verified 15 Apr 2026"
  states={[
    { name: 'NSW', href: '/owner-builder-nsw' },
    { name: 'QLD', href: '/owner-builder-qld' },
    { name: 'WA', href: '/owner-builder-wa' },
    { name: 'TAS', href: '/owner-builder-tas' },
    { name: 'ACT', href: '/owner-builder-act' },
  ]}
>
  Get the training you need to apply for an Owner Builder permit, delivered
  directly in <strong>QLD</strong>, <strong>WA</strong>, <strong>TAS</strong>,
  and <strong>ACT</strong>, and with <strong>AlertForce (RTO 91826)</strong> for NSW.
</Streamcard>
```

## Visual treatment

Per DESIGN.md §2, §3, §5:

- **plate** — Cream-1 (`light`) or Document Ink (`dark`) plate, sharp corners, no shadow. Number in Geist Mono 700, Document Maroon, lifted toward cream on the dark plate. Title max-contrast Ink/Cream.
- **canonical** — transparent grid `14rem 1fr 14rem`; each column a 1px dotted ink-3 top rule, 32px (`xl`) vertical padding, aligned across columns. Brand word in Deep Burgundy (`accent-deep`), number in Geist Mono 700 Ink-4. Column three is the state-list: each row `[number] [name] [arrow]`, Ink-3 mono with dotted-underline name and a Maroon arrow that translates 3px on hover.
- Eyebrow, CTA label, footnote, and state list are the Geist Mono caps label voice in both layouts.

## Related

- `CTAButton` — the standalone streamcard CTA volume ladder (v1/v2/v3) for active links.
- `RegulatorBand`, `TrustBadgeGrid` — credential surfaces for the verification register.
- `ComparisonTable` — when options need a side-by-side rather than a card each.
