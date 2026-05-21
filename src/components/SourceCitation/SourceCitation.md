---
description: The right-aligned "SOURCE [value]" pointer. 10px Geist Mono caps label, 12px Public Sans value, Ink-3. Multiple sources joined with a double-spaced bullet. Same register as VerificationNote / VerificationFootnote.
---

# SourceCitation

The right-aligned `SOURCE [value]` pointer that names the `.gov.au` or `training.gov.au` page(s) backing a body paragraph's claim.

```
                                  SOURCE QBCC
                      SOURCE QBCC • RTO 31193
```

10px Geist Mono caps `SOURCE` label, 12px Public Sans value, Ink-3 — the same type register as `VerificationNote` and `VerificationFootnote`, so the verification family stays visually consistent. Right-aligned.

## Props

No props. The source value(s) are provided as a slot. Multiple sources are joined with a double-spaced `•` bullet inside the slot (give the bullet span `margin: 0 0.5em`).

## When to use

- After a fact-citing paragraph that needs a source pointer without a date stamp.
- In hubs and course-state pages, where a section's authority claim links out to a regulator page.

## When NOT to use

- When the verification needs a date — use `VerificationNote` (one-line stamp with `VERIFIED ON`).
- For the stacked card-bottom footnote — use `VerificationFootnote`.
- Inside FAQ answers.

## Example — single source

```astro
---
import SourceCitation from '@components/SourceCitation/SourceCitation.astro';
---

<SourceCitation>
  <a href="https://www.qbcc.qld.gov.au/" class="link-dotted">QBCC</a>
</SourceCitation>
```

Renders (right-aligned):

```
SOURCE QBCC
```

## Example — multiple sources

Multiple sources are joined with a double-spaced `•` bullet.

```astro
<SourceCitation>
  <a href="https://www.qbcc.qld.gov.au/" class="link-dotted">QBCC</a>
  <span class="eg-bullet" aria-hidden="true">•</span>
  <a href="https://training.gov.au/Organisation/Details/31193" class="link-dotted">RTO 31193</a>
</SourceCitation>
```

Renders (right-aligned):

```
SOURCE QBCC • RTO 31193
```

## Visual treatment

- Label: Geist Mono 500, 10px, tracking 0.12em, uppercase, Ink-3, `0.4em` right margin.
- Value: Public Sans 400, 12px, line-height 1.5, Ink-3.
- Container: `text-align: right`, no top border (lighter than `VerificationFootnote`).

## Related

- `VerificationNote` — the one-line stamp with a `VERIFIED ON` date.
- `VerificationFootnote` — the stacked two-row card-bottom footnote.
- `link-dotted` — the inline-link grammar applied to source values.
