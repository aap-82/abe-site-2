---
description: The one-line verification stamp. Right-aligned "VERIFIED AGAINST [source] VERIFIED ON [date]". 10px Geist Mono caps labels in Ink-4, 10px Public Sans values (source links and date) in Ink-3, date uppercased as DD MMM YYYY (e.g. 11 APR 2026), 1px Rule divider above. For the stacked two-row footnote, use VerificationFootnote.
---

# VerificationNote

The one-line verification stamp — the visible E-E-A-T signal that grounds a factual claim in a `.gov.au` source and a verification date.

```
            ────────────────────────────────────────────
                      VERIFIED AGAINST QBCC VERIFIED ON 19 MAY 2026
```

Right-aligned within its container. Two mono caps labels (`VERIFIED AGAINST`, `VERIFIED ON`) at 10px Geist Mono in Ink-4 (quieter, so they recede behind the evidence). The source and date sit at 12px Public Sans in Ink-3, and the date is uppercased to the stamp form (e.g. `11 APR 2026`). 1px solid Rule line above.

For the **stacked two-row footnote** (Source above, Verified on below), use `VerificationFootnote`.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `lastVerified` | `string` (ISO `YYYY-MM-DD`) | ✓ | — | The verification date. Formatted in Australian locale and uppercased (`11 APR 2026`). |

The source value is provided as a slot. Multiple sources are joined with a double-spaced `•` bullet inside the slot.

## When to use

- Anywhere a claim needs a compact, structured verification stamp.
- The bottom of compact cards or panels.
- Under a section's body content as a right-aligned freshness signal.

## When NOT to use

- For the stacked two-row footnote at the bottom of streamcards — use `VerificationFootnote`.
- For general copy that is not a verifiable fact.

## Example — single source

```astro
---
import VerificationNote from '@components/VerificationNote/VerificationNote.astro';
---

<VerificationNote lastVerified="2026-05-19">
  <a href="https://www.qbcc.qld.gov.au/" class="link-dotted">QBCC</a>
</VerificationNote>
```

Renders (right-aligned):

```
VERIFIED AGAINST QBCC VERIFIED ON 19 MAY 2026
```

## Example — multiple sources, bullet-separated

Multiple sources are joined with a double-spaced `•` bullet (give the bullet span `margin: 0 0.5em`).

```astro
<VerificationNote lastVerified="2026-05-01">
  <a href="https://training.gov.au/Organisation/Details/31193" class="link-dotted">RTO 31193</a>
  <span class="eg-bullet" aria-hidden="true">•</span>
  <a href="https://training.gov.au/Organisation/Details/91826" class="link-dotted">RTO 91826</a>
  <span class="eg-bullet" aria-hidden="true">•</span>
  <a href="https://www.qbcc.qld.gov.au/" class="link-dotted">QBCC</a>
</VerificationNote>
```

Renders (right-aligned):

```
VERIFIED AGAINST RTO 31193 • RTO 91826 • QBCC VERIFIED ON 01 MAY 2026
```

## Visual treatment

- Labels: Geist Mono 500, 10px, tracking 0.12em, uppercase, **Ink-4** (quieter than the values). `0.4em` right margin after each; `0.75em` left margin before the second label.
- Values: Public Sans 400, 10px, line-height 1.5, **Ink-3**. Source links stay mixed case; the date is uppercased to `DD MMM YYYY` (e.g. `11 APR 2026`).
- Container: 1px solid Rule line above, `text-align: right`.

## Related

- `VerificationFootnote` — the stacked two-row footnote for streamcard bottoms.
- `SourceCitation` — the standalone right-aligned "SOURCE [value]" pointer.
- `link-dotted` — the inline-link grammar applied inside the slot.
