---
description: The named-expert credential block — course developer or compliance reviewer. Square portrait, Maroon name byline, mono caps specialty tags, bio, and an optional review note. Two layouts via the variant prop.
---

# ExpertReviewerCard

The named-expert credential block from analysis §2.3 / §3.4. Carries the course developer on a hub, or the compliance reviewer on a course-state page. Same data, two layouts.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `name` | `string` | ✓ | — | The expert's full name. |
| `role` | `string` | ✓ | — | Role line, e.g. `Course Developer, ABE Education`. |
| `bio` | `string` | ✓ | — | Bio paragraph. Verified credentials only. |
| `variant` | `'card' \| 'blockquote'` | — | `card` | `card` sits the avatar beside the content; `blockquote` stacks it above, in a heavier ink frame. |
| `profileHref` | `string` | — | — | Link to the expert's profile page. The name becomes a dotted link. |
| `avatar` | `string` | — | — | Square portrait URL. |
| `specialties` | `string[]` | — | — | Specialty tags, joined with a bullet. |
| `reviewNote` | `string` | — | — | A review note, e.g. "Reviewed this hub on 14 April 2026." |

## Variants

- **card** — avatar beside a compact content column. The course-state reviewer register; stacks to a single column on narrow screens.
- **blockquote** — avatar above an editorial content column in a heavier 1px ink frame. The hub uses this for its course-developer note.

## Design notes

The person's name is Document Maroon — DESIGN.md assigns maroon to named-person reviewer bylines. Everything else stays in the ink palette. Sharp corners always, so the portrait is a square image, never a circle. Specialty tags use the mono caps label register; the review note uses the verification register (12px Ink-3) with a 1px Rule line above.

Never invent credentials. The bio and specialties must come from a verified record; this component renders only what it is given.

## When to use

- The hub-level course-developer block (blockquote variant).
- The course-state compliance-reviewer block (card variant).

## When NOT to use

- For a non-person testimonial or editorial pull quote — use `PullQuote`.
- For the verification stamp under a paragraph — use `VerificationNote`.

## Related

- `PullQuote` — the non-attributed editorial quote.
- `VerificationNote` — the dated verification stamp.
