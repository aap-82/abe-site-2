---
description: The mid-page grid of verifiable credential badges. Each badge pairs a Regulator Blue mono caps label with a credential value; verifiable claims link to their .gov.au / training.gov.au authority. A shared "Last verified" stamp closes the block. Appears on all four reference pages.
---

# TrustBadgeGrid

The mid-page trust block from analysis §2.3. A responsive grid of credential badges, each one a Regulator Blue mono caps label over a credential value, with the verifiable values linking out to their `.gov.au` or `training.gov.au` authority page. An optional shared `Last verified` stamp closes the block.

```
┌───────────────────┬───────────────────┬───────────────────┐
│ APPROVED PROVIDER  │ NATIONALLY RECOG. │ DELIVERY MODE     │
│ SafeWork NSW …     │ RTO 45708 …       │ 100% online …     │
└───────────────────┴───────────────────┴───────────────────┘
                                          Last verified 21 May 2026
```

Self-contained: badges are passed as a `badges` array prop and rendered inline, the same shape as the sibling `RegulatorBand`. There is no separate `TrustBadge` component.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Accessible section label. Rendered as a visually-hidden `<h2>` per decision #1 — trust grids carry no visible title. |
| `badges` | `Badge[]` | ✓ | — | 3–5 credential badges. |
| `lastVerified` | `string` | — | — | ISO date `YYYY-MM-DD`. When set, renders the shared freshness stamp. |
| `anchorId` | `string` | — | `slugify(heading)` | Override for preserving an existing URL anchor. |

### `Badge` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `label` | `string` | ✓ | Mono caps credential category, e.g. `APPROVED PROVIDER`, `NATIONALLY RECOGNISED`. |
| `value` | `string` | ✓ | The credential value. Keep to one short line. |
| `href` | `string` | — | A `.gov.au` / `training.gov.au` verification page. When set, the whole `value` renders as a dotted verify link. Phrase the value so the full string reads sensibly as a link. |

## When to use

- The mid-page credentials block on every hub, course-state, and homepage. This is the standard "every claim is checkable" trust grid.
- Whenever a set of accreditations, regulator approvals, or RTO numbers needs to sit together with their verification links in one eyeline.

## When NOT to use

- For the hero-level trust stripe — use `RegulatorBand` (the blue stat band) or a `TrustStrip` variant. Those are governed by the Stripe Singleton Rule; `TrustBadgeGrid` is not, and may sit on the same page as one.
- For a single dated source pointer under a paragraph — use `VerificationNote` or `SourceCitation`.
- For the verbatim ASQA / AFSL legal wording — use `ASQADisclosure`.

## Design notes

The analysis doc described badges as "icon + label". Decorative icons are dropped here to honour the Two-Ornament Rule (DESIGN.md §4) — the system owns only the 1px ink frame and the 1px dotted rule. The blue category label and the dotted verify link carry the "verified credential" meaning instead.

Two-Accent Rule: the category label is Regulator Blue (verification register), the value is ink, and maroon appears only on link hover through the global `link-dotted` grammar. The shared freshness stamp uses the same register as `VerificationNote` (10px Geist Mono caps label, 12px value, Ink-3) so the verification family stays visually consistent.

## Example

```astro
---
import TrustBadgeGrid from '@sections/TrustBadgeGrid/TrustBadgeGrid.astro';
---

<TrustBadgeGrid
  heading="Accreditation and credentials"
  lastVerified="2026-04-30"
  badges={[
    {
      label: 'Approved provider',
      value: 'SafeWork NSW — RTO800520',
      href: 'https://www.safework.nsw.gov.au/licences-and-registrations/white-cards',
    },
    {
      label: 'Nationally recognised',
      value: 'RTO 45708 on training.gov.au',
      href: 'https://training.gov.au/Organisation/Details/45708/summary',
    },
    { label: 'Delivery mode', value: '100% online via Zoom' },
  ]}
/>
```

## Composition

```
TrustBadgeGrid
├── <h2 class="sr-only"> (heading prop — visually hidden)
├── <ul class="tbg__grid">      ← 1px hairline grid, auto-fit columns
│   └── <li class="tbg__badge"> ← per badge: mono caps label + value/verify link
└── <p class="tbg__verified">   ← shared freshness stamp (only if lastVerified)
```

## Related

- `RegulatorBand` — the hero-level blue credentials stat band; the sibling trust component.
- `VerificationNote`, `SourceCitation` — the verification family the freshness stamp shares its type register with.
- `link-dotted` — the inline-link grammar applied to verify links.
- `ASQADisclosure` — the verbatim regulator legal wording, a separate concern.
