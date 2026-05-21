---
description: The stacked two-row "Source / Verified on" footnote from DESIGN.md §5. Right-aligned. 10px Geist Mono caps labels in Ink-4, 10px Public Sans values (source links and uppercased date) in Ink-3, 1px Rule divider above. Multiple sources joined with a double-spaced bullet.
---

# VerificationFootnote

The stacked two-row trust-signal footnote from DESIGN.md §5, used at the bottom of streamcards and any panel that needs an explicit "source / verified on" footer.

```
─────────────────────────────────
        SOURCE RTO 31193 • RTO 91826
     VERIFIED ON 01 MAY 2026
```

Right-aligned. 10px Geist Mono caps labels in Ink-4 (quieter), 10px Public Sans values (source links and the uppercased date) in Ink-3. A 1px solid Rule line above separates it from the content above. Source row on top, Verified-on row below.

For the **one-line stamp** (`VERIFIED AGAINST x VERIFIED ON date`), use `VerificationNote`.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `lastVerified` | `string` (ISO `YYYY-MM-DD`) | ✓ | — | Date the trust signals were last verified. Formatted in Australian locale and uppercased (`11 MAY 2026`). |

The `Source` value is provided as a slot. Multiple sources are joined with a double-spaced `•` bullet inside the slot (give the bullet span `margin: 0 0.5em`).

## When to use

- Bottom of every streamcard (the canonical placement per DESIGN.md §5).
- Bottom of any trust-signal panel or fact-list summarising regulator-approved claims.

## When NOT to use

- For a compact one-line stamp — use `VerificationNote`.
- For arbitrary date stamps (course start dates, application deadlines).

## Example

```astro
---
import VerificationFootnote from '@components/VerificationFootnote/VerificationFootnote.astro';
---

<VerificationFootnote lastVerified="2026-05-01">
  <a href="https://training.gov.au/Organisation/Details/31193" class="link-dotted">RTO 31193</a>
  <span class="eg-bullet" aria-hidden="true">•</span>
  <a href="https://training.gov.au/Organisation/Details/91826" class="link-dotted">RTO 91826</a>
</VerificationFootnote>
```

Renders (right-aligned):

```
─────────────────────────────────
        SOURCE RTO 31193 • RTO 91826
     VERIFIED ON 01 MAY 2026
```

## Visual treatment

Per DESIGN.md §5:

- Label: Geist Mono, 10px, tracking 0.12em, uppercase, **Ink-4** (quieter), `0.4em` right margin.
- Value: Public Sans, 10px, line-height 1.5, **Ink-3** (source links and date). Links keep the dotted underline + Maroon hover; the date is uppercased to `DD MMM YYYY` (e.g. `11 MAY 2026`).
- Layout: two stacked rows, `text-align: right`. Source row above the Verified-on row.
- Multiple sources: joined with a double-spaced `•` bullet inside the slot.
- Top divider: 1px solid Rule above the footnote.

## Related

- `VerificationNote` — the one-line right-aligned stamp.
- `SourceCitation` — the standalone right-aligned "SOURCE [value]" pointer.
- `link-dotted` — the inline-link grammar applied inside the Source slot.
