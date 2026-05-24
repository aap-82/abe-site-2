# Design rules

The 10 named design rules from `DESIGN.md` §2–§4 that constrain every visual decision on the ABE site. Read alongside `api-decisions.md` (which covers component construction). Full spec lives at `DESIGN.md` in the project root.

## Creative North Star

**"The Government White Paper."** Surface reads as a document, not a marketing page. A cautious tradesperson at 9pm is trying to verify in under 30 seconds whether ABE is real, regulator-approved, and will issue a certificate their state accepts. Every claim sits next to a `.gov.au` link, every reviewer has a name, every price is published.

## Colour discipline — 60-30-10

| Weight | Register | Tokens | Use |
|---|---|---|---|
| 60% | Neutrals | `bg`, `bg-alt`, `bg-deep`, `rule` | Page grounds, section grounds, nested cards, hairline rules |
| 30% | Ink palette | `ink`, `ink-2`, `ink-3`, `ink-4` | Primary type, descriptions, mono caps labels, big section numbers |
| 7% | Document Maroon | `accent`, `accent-deep` | **Action only.** CTAs, link hover, named-person credits, eyebrow words |
| 3% | Regulator Blue | `info`, `info-deep`, `info-soft`, `info-wash`, `info-on-dark` | **Verification only.** Regulator chips, freshness stamps, verification footnotes |
| — | Semantic status | `success`, `warning`, `error`, `premium` (each base/deep/wash), plus `information` (mirrors blue) | **Status signals only**, outside the 60-30-10 core. Permitted on 1px borders, mono caps labels, icons, and pale `wash` fills on small signals (callouts, badges). Never surfaces, large fills, or body text. |

Audit any rendered page. If maroon exceeds 10% or blue exceeds 5%, a token is mis-tagged as a highlight when it should be structural. The semantic status colours (added 21 May 2026) are a separate bounded register: they label and frame small signals and never substitute for maroon, blue, or ink.

## The 10 named rules

### 1. Contrast-First Rule
Display headings, body text, primary CTA labels, hero copy, and trust-bar stats on dark plates use the **highest-contrast colour available** (Document Ink on light grounds, Newsprint Cream on dark grounds). Chromatic signal is subordinate to legibility when the element IS the content. Coloured tokens are reserved for elements small or labelled enough that the contrast trade-off is negligible (chips, mono labels, active-state circles, link colour).

### 2. Two-Accent Rule
**Maroon = action + brand. Blue = verification + current-state. Ink = structure + default.** Three registers, no overlap.
- If maroon appears on body text, the rule has been broken.
- If blue appears on a primary heading, the rule has been broken.

### 3. 60-30-10 Weight Rule
Roughly 60% neutral surfaces and ink type, 30% secondary ink-2/ink-3 text and rule lines, 7% maroon, 3% blue. If blue exceeds 5% of any rendered page, an item that should be structural has been mis-tagged as a highlight.

### 4. No Warm Tones Rule
Orange, yellow, peach, and cream-as-paper are **forbidden** as surfaces and decorative accents. Two attempts at warm-paper backgrounds were rolled back during the project; do not propose them again. The one bounded exception is the semantic `warning` amber, permitted only as a small status signal (1px border, mono label, pale wash), never as a surface or background.

### 5. Flat-By-Default Rule
Surfaces are flat at rest. **No box-shadow tokens exist** in the system; introducing one violates the doctrine. Hover states shift colour, translate elements 3px on the appropriate axis, or alter underline colour, never elevate.

### 6. Two-Ornament Rule
The system owns exactly two visual ornaments: **the 1px solid ink frame, and the 1px dotted ink-3 rule**. Anything else (gradient borders, glow rings, decorative dividers) is forbidden.

### 7. Voice-Per-Face Rule
- Mono (Geist Mono) is the **label voice**.
- Display (Archivo) is the **title voice**.
- Body (Public Sans) is the **argument voice**.
- Prose (Source Serif 4) is the **editorial-longform voice**.

Don't blend; don't substitute. Don't render titles in mono "for technical vibes." Don't render labels in display "for emphasis."

### 8. Five-Step Scale Rule
The type scale has at least a 1.25 ratio between adjacent steps (Display 48px → Headline 30px → Title 22px → Body 16px → Label 11px). Don't introduce sizes between these steps. For emphasis at the body tier use weight; for a quieter label use the Label-Footnote variant.

### 9. Volume Ladder Rule
The streamcard CTA variants `v1` / `v2` / `v3` form **one component family at three volumes**, not three unrelated buttons. They share placement, typography, gap, and arrow grammar. Pick one for a given production surface; don't mix variants on the same page outside an A/B comparison or design-system showcase.

### 10. Stripe Singleton Rule
**Only one trust-stripe variant ships per page.** The documented alternatives are a comparison palette, not a stack. Variant C ships in production (chosen 19 May 2026).

## Spacing, layout, and borders

Spacing carries the same weight here as the dotted rule: it makes the page read as a calm, ordered document. The reader is a tired tradesperson scanning for proof in under 30 seconds, so sections sit well apart and never crowd. Regular, generous spacing is a trust signal, not wasted room.

### The spacing scale

Eight tokens on an 8px base, defined in `global.css` `@theme` as `--spacing-*`. Never hard-code a pixel value outside the scale.

| Token | Value | Typical use |
|---|---|---|
| `xs` | 8px | Tight gaps inside a control; chip padding |
| `sm` | 12px | Gaps inside a compact component |
| `md` | 16px | Default gap between related elements; mobile page gutter |
| `lg` | 24px | Header-block gaps; heading-to-body spacing |
| `xl` | 32px | Desktop page gutter; scroll-margin for anchored sections |
| `xxl` | 48px | A content section's vertical padding; mobile inter-section gap |
| `xxxl` | 64px | Gap between content sections (desktop) |
| `xxxxl` | 96px | Page bottom padding |

### Layout frame

Every archetype layout (`HubLayout`, `CoursePageLayout`, `ExpertPageLayout`, `HomepageLayout`) shares one frame:

- **Container** — `max-width: 75rem`, centred (`margin: 0 auto`). Never edge to edge; the measure stays document-width.
- **Page gutter** — desktop `padding: xl xl xxxxl`; mobile (max-width 720px) `padding: lg md xxxl`.
- **Header block** — breadcrumb, heading and hero strip stack with `gap: lg`.
- **Section gap** — the content `<main>` is a flex column, `gap: xxxl` desktop / `xxl` mobile, with `margin-top: xxxl` below the header. The 64px gap is what makes the page read as a white paper, not a landing page.

### Section structure

Sections sit in the layout's content column (`.course__main` and the hub / homepage equivalents) — a flex column with `gap: var(--spacing-xxxl)` desktop, `var(--spacing-xxl)` mobile. That gap is the one separator every section gets for free. Two patterns build on it.

**Ruled content section — the default.** A document-grade content section (a heading plus answer, body, table, or list) marks itself off with three properties on its `<section>` root:

- `border-top: 1px solid var(--color-rule)` — the hairline that opens the section
- `padding: var(--spacing-xxl) 0` — its own vertical padding, inside the rule
- `scroll-margin-top: var(--spacing-xl)` — so an anchor jump lands clear of the heading

Nine sections use it exactly: AnswerCapsuleSection, ComparisonTable, CourseShowcase, FAQSection, NumberedStepsSection, PricingTable, StatPanel, UnitOfCompetencyList, WhyChooseList. A new content section reproduces all three. The section that renders first on a page resets `border-top` to `0` so the page does not open with a stray rule; AnswerCapsuleSection, the standard course-page opener, carries that `:first-child` reset.

**Band / plate section — the exception.** A full-bleed feature band or a coloured plate is not a ruled document section: it carries no top rule and no vertical padding of its own, and is set apart from its neighbours only by the layout gap. It owns its internal padding and, if coloured, its own ground. This covers the dark RegulatorBand plate and the homepage feature bands (CourseStreams, FinalCTA, TrustBadgeGrid, StateNavigator, CEOQuoteBlock, InsuranceCrossSell).

Two components sit outside both patterns: **HeroTrustBar** is a slim credential strip framed by a 1px Rule line top and bottom with `padding: var(--spacing-sm) 0`; **ScopeLimitNote** is a callout (`<aside>` with a full 1px frame), a member of the callout family, not a rhythm section.

### Background grounds — no alternation

The page is **one continuous Newsprint Cream-1 ground**. Content sections do not alternate background colour; they are told apart by the 1px rule and the spacing above. Alternating grey/white bands read as marketing; a single ruled ground reads as a document.

The deeper grounds are for nested use only:

- **Cream-2 (`bg-alt`)** — a panel set *inside* a section (the StatPanel number row, the trust-stripe datebar). A contained panel, never a section-wide ground.
- **Cream-3 (`bg-deep`)** — a card nested inside a Cream-2 panel.
- **Document Ink (`ink`)** — the one dark plate, full-bleed, for the trust stripe and credential bands.

For visual separation reach for the rule and the spacing first; a fill is only correct for a contained panel inside a section.

### Borders

One width, ever: **1px**, with sharp corners (`--radius-base: 0`). Per the Two-Ornament Rule there are exactly two:

- **1px solid `--color-rule`** — the hairline: section top rules, fact-row dividers, light component frames (callouts, cards).
- **1px solid `--color-ink`** — the strong frame: where a box must read as a defined object (a portrait, an action panel, the trust-stripe brand block).

Borders are always full — four sides, or a clean top/bottom rule. A thick coloured `border-left` or `border-right` stripe is the most recognisable AI design tell and is banned (see Anti-patterns). Depth comes from these 1px borders and the tonal grounds, never a shadow.

## Anti-patterns — scan for these during every review

- ❌ **`border-left` or `border-right` > 1px as a colour stripe.** The single most recognisable AI design tell. Reach for full borders, leading numbers, or no indicator. *(AnswerCapsule was refactored 19 May 2026 to remove a 4px maroon left border that violated this.)*
- ❌ **Box-shadows.** The system is flat. Depth comes from tonal layering and the 1px ink frame.
- ❌ **Rounded rectangles.** Sharp corners always (`--radius-base: 0`). Exception: form input controls.
- ❌ **Gradient text** (`background-clip: text` with a gradient). Forbidden.
- ❌ **Glassmorphism**, blur effects, glass cards, glow borders for decoration. Rare and purposeful, or nothing.
- ❌ **Cyan-on-dark, purple-to-blue gradients, any 2024-era AI-slop palette.** The colour discipline is the brand.
- ❌ **Orange, yellow, peach** as surfaces or decorative accents. The only exception is the semantic `warning` amber, and only as a small status signal (1px border, mono label, pale wash).
- ❌ **Coloured body text** outside the ink palette. Coloured body text is a smell.
- ❌ **Em dashes in body copy.** Use commas, colons, semicolons, periods, or parentheses. Not `--` either.
- ❌ **New fonts.** The four-face system (Archivo / Public Sans / Source Serif 4 / Geist Mono) is locked.
- ❌ **Entrance cascades** or hero reveal animations. Motion is structural (CSS sticky, scroll-reveal 12px fade-up, hover lifts 2px), never decorative.
- ❌ **Modals** as a first thought. Exhaust inline / progressive alternatives first.
- ❌ **Restating the same fact two ways** (DESCRIPTION label + restated heading + lede paragraph all saying the same thing). Every word earns its place.
- ❌ **New colour tokens without a Q1/Q2/Q3 role assignment.** New colours need a documented register, not a slot in a ramp.

## Signature patterns to use

When a section calls for a familiar pattern, reach for the spec's signature components before inventing new ones:

- **Section Card Meta Block.** Sticky 14rem left column: Display section number + Title maroon eyebrow + uppercase Headline H2.
- **Verification Footnote.** Two rows at the bottom of every streamcard: `Last verified DD MMM YYYY` and `Source [linked regulators]`. 10px mono label + 12px value. Separated by 1px solid Rule line + 16px breathing space.
- **Dotted-Underline Link Grammar.** Inline links inside body prose or fact values use `.link-dotted` (text-decoration: underline dotted, Ink-3, hover shifts to Maroon). Never for primary CTAs.
- **Streamcard CTAs v1 / v2 / v3.** Volume ladder: colour amplification / structural framing / full fill. Production uses v2.
- **Trust Stripe Variant C.** Dark `--ink` plate, no animation, four stat tiles with Display 800 numerals above 10px mono caps labels.
- **RegulatorBand.** The blue member of the Trust Stripe family: a saturated `info-deep` plate with cream credential numerals over blue-on-dark mono labels. One per page (Stripe Singleton Rule).
- **ComparisonTable.** Document-grade attribute-rows × option-columns grid for dense factual data (state-by-state, online-vs-in-person). Mono caps headers, 1px rule hairlines, no fills.
- **PullQuote.** A mid-flow focal moment to break a long run of text: a large Source Serif 4 statement, or a big Archivo numeral key-stat. Max-contrast Ink, framed by 1px ink hairlines.
- **Semantic callout family.** `LegalCallout` / `ScopeLimitNote` / `InfoCallout` / `WarningCallout` / `ErrorCallout` / `SuccessCallout`: block notes sharing one structure (mono caps label + Ink body in a 1px frame), differing only by frame and label colour. No fills.

## Cross-cutting reminders

- **Australian English everywhere.** organise, centre, colour, recognised, programme, behaviour, licence (noun) / license (verb).
- **Never the word "comprehensive."** Personal preference. Use complete, full, thorough, or delete the modifier.
- **Markdown is the default output format.** No .docx without explicit ask.
