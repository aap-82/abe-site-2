# ABE Current Baseline (the thing being audited)

What the ABE Astro pages currently do, so the audit is concrete. Treat every value here as the present setting under review, not as a target. Standards live in `readability-standards.md`; this file is the comparison point.

The styleguide lives at `https://abe-site-2.andrey-p-personal.workers.dev/styleguide` (and `/styleguide/conventions`). The reference course page is `/sample/white-card-online-nsw`. Built pages include `/owner-builder-nsw` and `/white-card-nsw`. Fetch the page under audit before judging it.

## Type roles (4 faces, 7 roles)
Set as CSS classes; components attach the class rather than inlining properties.

| Class | Face | Size | Line-height | Notes |
|---|---|---|---|---|
| `.t-display` | Geist Mono 700 | clamp(2.25rem, 3.5vw, 3rem) | 0.9 | tabular figures; big numerals/prices |
| `.t-headline` | Archivo 800 | clamp(1.3rem, 2vw, 1.9rem) | 1.1 | tracking -0.015em; section H2 |
| `.t-headline-sm` | Archivo 800 | clamp(1.125rem, 1.6vw, 1.375rem) | — | sentence case, Ink; quieter H2 |
| `.t-title` | Archivo 800 | clamp(1.125rem, 1.6vw, 1.375rem) | — | always Maroon |
| `.t-body` | Public Sans 400 | 16px | 1.55 | argument voice |
| `.t-prose` | Source Serif 4 | clamp(1.0625rem, 1.2vw, 1.125rem) | 1.6 | old-style figures; ONLY answer capsules |
| `.t-label` | Geist Mono 500 | 11px | — | tracking 0.1em, uppercase |
| `.t-label-footnote` | Geist Mono 500 | 10px | — | tracking 0.12em, uppercase |

## Colour tokens (oklch)
Neutrals: `bg` 98.2% / `bg-alt` 96% / `bg-deep` 93.5% (Newsprint Cream 1/2/3, cool near-whites, hue 240), `rule` 85%.
Ink: `ink` 18% / `ink-2` 35% / `ink-3` 50% / `ink-4` 62%.
Maroon (action): `accent` #800000 / `accent-deep` #500000.
Regulator Blue (verification): `info` 46% / `info-deep` 32% / `info-soft` 85% / `info-wash` 95% / `info-on-dark` 78%, all hue ~235.
Semantic (small signals only): success (hue 150), warning amber (hue 74), error (hue 27), premium (hue 305), each with deep/wash variants.

Discipline in force: Two-Accent (maroon = action/brand, blue = verification/state, ink = structure, no overlap), 60-30-10 weight budget, flat (no shadows, sharp corners), two ornaments only (1px solid ink frame, 1px dotted ink-3 rule), no warm-tone surfaces (amber permitted only as a small status signal).

## Measured contrast (from scripts/contrast_check.py)
Run the script for the live numbers; the notable current results:
- `ink` on `bg`: ~17.8:1 (excellent; not pure black on pure white).
- `ink-2` on `bg`: ~10.7:1 (good).
- `ink-3` on `bg`: ~5.68:1 (passes AA, fails AAA) — used for small mono caps labels and the default dotted-link colour.
- `ink-4` on `bg`: ~3.45:1 (FAILS AA for normal text) — used for section numbers and disabled text. Flag wherever it carries meaningful small text.
- `accent` (#800000) on `bg`: ~10.4:1 (good for links/CTAs).
- Status deep-on-wash pairs all clear AA; warning deep-on-wash (~6.2:1) passes AA, fails AAA.

## Component and page patterns
Course pages use `CoursePageLayout` (fixed chrome: BreadcrumbBar + reviewer line, PageHeading + LastUpdatedDate, RTOAttributionLine if RTO-partnered, content slot, ASQADisclosure footer). The content slot is, in order on the reference page: above-fold answer + price + CTA, `TrustBadgeGrid`, then question-led `AnswerCapsuleSection`s (overview, process, curriculum, requirements), `ComparisonTable`, a buyer-beware objection block, `WhyChooseList` + `StatPanel`, `FAQSection`, and an accuracy/review section.

The repeated unit is the AnswerCapsuleSection: StatusPill eyebrow, H2 question, AnswerCapsule (Source Serif prose, answer first), BodyParagraph (Public Sans), supporting components, optional MicroCTA.

## Known issues to check (already identified, confirm per page)
1. **No locked line measure.** Tokens fix size and leading but not column width, so prose can run well past 75 CPL on wide screens. Highest-impact gap.
2. **`.t-headline-sm` and `.t-title` share a size** and differ only by colour, so a small H2 and a title can read as the same level (hierarchy collision).
3. **Small-label floor:** `.t-label-footnote` is 10px; below the comfortable 12px floor.
4. **`ink-4` fails AA** for normal text (3.45:1); **`ink-3` fails AAA** (5.68:1). Audit what small text uses them.
5. **Wide tables scroll horizontally on mobile** (ComparisonTable, PricingTable); no stacked fallback.
6. **Tap targets:** dotted text links and inline CTAs may fall below 44 to 48px on mobile.

## House rules recommendations must respect
Australian English. Never use the word "comprehensive". No em dashes (and no "--") in body copy. Stay flat, sharp-cornered, two-ornament, no warm surfaces. Hold the Two-Accent and 60-30-10 colour discipline. Single RTO partner per state page; ASQA disclosure verbatim. A good fix improves readability without breaking these.
