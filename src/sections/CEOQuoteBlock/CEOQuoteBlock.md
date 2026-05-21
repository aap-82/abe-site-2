---
description: The "A note from our CEO" homepage section — a short editorial quote attributed to the named CEO with a link to their expert profile. Composes PullQuote for the quote and adds a Maroon named-person byline.
---

# CEOQuoteBlock

The "A note from our CEO" section from analysis §2.2. A homepage section carrying a short editorial quote from the named CEO, attributed with a profile link for E-E-A-T.

It composes `PullQuote` for the quote itself — the editorial Source Serif register inside 1px ink hairlines — and adds a named-person byline below.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Component renders the `<h2>` per decision #1. |
| `quote` | `string` | ✓ | — | The quote text. |
| `name` | `string` | ✓ | — | The CEO's name. |
| `role` | `string` | ✓ | — | Role line, e.g. `CEO and Course Developer`. |
| `profileHref` | `string` | — | — | Link to the CEO's expert profile page. |
| `profileLabel` | `string` | — | `Read [name]'s profile` | Label for the profile link. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

## When to use

- The homepage "A note from our CEO" section.

## When NOT to use

- For a non-attributed editorial pull quote inside body text — use `PullQuote` directly.
- For a credentials block (avatar, bio, specialties) — use `ExpertReviewerCard`.

## Design notes

The CEO's name is Document Maroon — DESIGN.md assigns maroon to named-person bylines. The quote itself stays max-contrast Ink, set by `PullQuote` in the editorial Source Serif face.

## Related

- `PullQuote` — the editorial quote device this section composes.
- `ExpertReviewerCard` — the fuller named-expert credentials block.
