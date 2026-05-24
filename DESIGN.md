---
name: ABE Education
description: Online construction-training provider for Australian tradies and owner-builders; document-grade editorial register.
colors:
  bg: "oklch(98.2% 0.004 240)"
  bg-alt: "oklch(96.0% 0.006 240)"
  bg-deep: "oklch(93.5% 0.008 240)"
  rule: "oklch(85% 0.010 240)"
  ink: "oklch(18% 0.020 240)"
  ink-2: "oklch(35% 0.018 240)"
  ink-3: "oklch(50% 0.014 240)"
  ink-4: "oklch(62% 0.012 240)"
  accent: "#800000"
  accent-deep: "#500000"
  accent-mid: "#600000"
  info: "oklch(46% 0.16 235)"
  info-deep: "oklch(32% 0.12 235)"
  info-soft: "oklch(85% 0.06 235)"
  info-wash: "oklch(95% 0.025 235)"
  info-on-dark: "oklch(78% 0.08 235)"
  success: "oklch(53% 0.13 150)"
  success-deep: "oklch(40% 0.10 150)"
  success-wash: "oklch(96% 0.022 150)"
  warning: "oklch(66% 0.14 74)"
  warning-deep: "oklch(47% 0.10 74)"
  warning-wash: "oklch(96% 0.035 74)"
  error: "oklch(54% 0.19 27)"
  error-deep: "oklch(42% 0.16 27)"
  error-wash: "oklch(96% 0.03 27)"
  premium: "oklch(50% 0.15 305)"
  premium-deep: "oklch(38% 0.13 305)"
  premium-wash: "oklch(96% 0.028 305)"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 3.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0"
    fontFeature: '"lnum", "tnum"'
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  prose:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.0625rem, 1.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
    fontFeature: '"onum", "kern", "liga"'
  label:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
  label-footnote:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  base: "0"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  xxxl: "64px"
  xxxxl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.bg}"
  link-dotted:
    textColor: "{colors.ink-3}"
    typography: "{typography.body}"
  link-dotted-hover:
    textColor: "{colors.accent}"
  chip-state:
    backgroundColor: "{colors.info-wash}"
    textColor: "{colors.info-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "4px 8px"
  fact-label:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.info-deep}"
    typography: "{typography.label}"
  fact-label-verified:
    textColor: "{colors.ink-3}"
    typography: "{typography.label-footnote}"
  section-card-num:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.ink-3}"
    typography: "{typography.display}"
  section-card-eyebrow:
    textColor: "{colors.accent}"
    typography: "{typography.title}"
  section-card-title:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  streamcard-cta-v1:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "4px 0"
  streamcard-cta-v1-hover:
    textColor: "{colors.accent-deep}"
  streamcard-cta-v2:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "10px 16px"
  streamcard-cta-v2-hover:
    textColor: "{colors.accent}"
  streamcard-cta-v3:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "12px 24px"
  streamcard-cta-v3-hover:
    backgroundColor: "{colors.accent-deep}"
    textColor: "{colors.bg}"
  tstrip-datebar:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "12px 56px"
  tstrip-chips:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.info-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "16px 56px"
  tstrip-stats:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "16px 56px"
---

# Design System: ABE Education

## 1. Overview

**Creative North Star: "The Government White Paper"**

ABE Education's surface should read as a document, not a marketing page. A cautious tradesperson visiting at 9pm after a long shift is trying to verify in under 30 seconds whether ABE is real, regulator-approved, and will issue a certificate their state accepts. That goal is served by document-grade legibility: dotted-rule separators, mono caps labels, a fixed 14rem meta column that holds the section number, and a wide right column that holds the prose. Every claim sits next to a `.gov.au` link, every reviewer has a name, every price is published. This is the visual register of a serious newspaper or a regulator's white paper.

The system is committed to a tinted near-neutral ground (cool slate, hue 240) with a single dominant accent (the locked `#800000` Document Maroon) used at roughly 7% of any given page. A second register of Regulator Blue carries verifiable evidence: regulator chips, verification labels, "Last verified DD MMM" stamps. A small, bounded register of semantic status colours (success, warning, error, premium) signals state on callouts and badges only, never on surfaces or body text. Body text and primary content sit in a five-tier ink palette tuned for long reading; coloured body text is explicitly forbidden. The only ornaments the design system owns are the 1px ink frame and the dotted rule. Sharp corners always.

Anti-references from the project record: no warm-paper-neutral backgrounds (rejected twice), no cream/tan answer capsules, no orange/yellow/peach accents anywhere, no marketing-style entrance cascades, no side-stripe borders, no gradient text, no glowing shadows, no rounded rectangles with drop shadows, no cyan-on-dark, no purple-to-blue gradients, no glassmorphism, no coloured body text outside the ink palette.

**Key Characteristics:**
- Editorial-publication register, not SaaS marketing
- Cool-slate ground tinted toward hue 240 across the entire neutral scale
- Single dominant maroon accent; small disciplined blue for verification
- Bounded semantic status colours (success/warning/error/premium) for signals only
- Five-tier ink palette doing all primary reading work
- Dotted rules and 1px ink frames are the only ornaments
- Sharp corners locked; no `border-radius` outside form controls
- Sticky 14rem meta column on every section
- Document-grade typography: four faces, six roles, clear hierarchical contrast

## 2. Colors

A near-neutral cool-slate ground (tinted toward brand hue 240) carries 60% of the surface. A single saturated maroon carries 7% as the action register. Q2 Regulator Blue carries 3% as the verification register. All other content lives in the ink palette.

### Primary

- **Document Maroon** (`#800000`): the locked brand accent. Used on call-to-action buttons, link-hover states, named-person reviewer bylines, the brand-mark dot, the section eyebrow word ("Courses", "Approvals"), action-prompt headings ("Find your stream", "Choose your state"). Approximately 7% of any rendered page. If clicking does something, or if it's a named person, it's Document Maroon.

- **Deep Burgundy** (`#500000`): the deeper maroon. Used for per-card stream brand words ("Owner Builder", "White Card", "CPD" in the streamcards) to sit visually below the section-level Document Maroon. A two-tier maroon hierarchy: brighter for top-level identifiers, deeper for per-card identifiers.

- **Auxiliary Burgundy** (`#600000`): intermediate maroon used for legacy `.sh__eyebrow` rendering in some sections. Treat as compatibility-only; new work should commit to Document Maroon or Deep Burgundy.

### Secondary

- **Regulator Blue** (`oklch(46% 0.16 235)` / `oklch(32% 0.12 235)` deep / `oklch(85% 0.06 235)` soft / `oklch(95% 0.025 235)` wash / `oklch(78% 0.08 235)` on-dark): the Q2 verification register. Used on regulator chips (state codes, RTO numbers), verification labels ("Last verified", "Source"), freshness stamps, active-state indicators, and inline verification-claim headers on approval cards. If it's evidence, verification, or current-state worth labelling, it's Regulator Blue. Never primary statistics, headings, or body text on dark plates (those go max-contrast per the Contrast-First Rule).

### Neutral

- **Newsprint Cream-1** (`oklch(98.2% 0.004 240)`): the near-white page ground. The lightest neutral, used as default body background. Tinted toward brand hue 240; never pure white.

- **Newsprint Cream-2** (`oklch(96.0% 0.006 240)`): the panel ground. Slightly deeper than Cream-1; used for a panel set inside a section (the StatPanel number row, the trust-stripe datebar), not as an alternating section background. Content sections share the single Cream-1 ground, separated by a 1px rule and spacing.

- **Newsprint Cream-3** (`oklch(93.5% 0.008 240)`): the deepest near-white. Used on cards nested inside `s.deep` sections so they remain visually distinct from the surrounding ground.

- **Document Ink** (`oklch(18% 0.020 240)`): primary type colour. Headings, fact values, body text, dark-plate backgrounds.

- **Document Ink-2** (`oklch(35% 0.018 240)`): secondary type colour. Description prose, sub-taglines, optical-detail copy that sits one tier quieter than primary.

- **Document Ink-3** (`oklch(50% 0.014 240)`): tertiary type colour. Mono caps labels, dotted-underline link default state, verification footnote text. The "structural label" tier.

- **Document Ink-4** (`oklch(62% 0.012 240)`): quaternary type colour. The big section number, streamcard numbers, disabled states.

- **Rule** (`oklch(85% 0.010 240)`): the colour used for dotted dividers between fact rows. One step lighter than the inks; reads as a hairline.

### Semantic status colours

A bounded **semantic register**, added 21 May 2026, for status signals only — callouts, badges, chips, and inline status icons. It is deliberately separate from the three core registers above: the Two-Accent Rule still governs the core UI, and the semantic colours never substitute for maroon, blue, or ink. They are usage-limited — permitted on 1px borders, mono caps labels, small icons, and pale `wash` fills on small signals, but never on page or section backgrounds and never on body text.

Five roles, each with three tiers: `base` (1px borders, mono labels, icons), `deep` (label and text strength, AA contrast on light grounds), and `wash` (a pale fill for a small signal).

- **Success** (`oklch(53% 0.13 150)` / `oklch(40% 0.10 150)` deep / `oklch(96% 0.022 150)` wash): a muted green. Confirmation, completion, and "approved" states.

- **Warning** (`oklch(66% 0.14 74)` / `oklch(47% 0.10 74)` deep / `oklch(96% 0.035 74)` wash): a muted amber, the one warm hue in the system. Caution and must-read constraints. A documented, bounded exception to the No Warm Tones Rule: permitted only as a small status signal, never as a surface.

- **Information** = **Regulator Blue**. The information role is filled by the existing `--color-info` token, not a new colour — verification and information are the same register. Use `--color-info` / `--color-info-deep` / `--color-info-wash`, or the `--color-information*` aliases, where a component calls for the "information" role.

- **Error** (`oklch(54% 0.19 27)` / `oklch(42% 0.16 27)` deep / `oklch(96% 0.03 27)` wash): a clear red. Failures, blocking problems, and destructive actions. It shares a hue neighbourhood with Document Maroon but sits much lighter and more saturated; never place a maroon action and an error signal where the two must be told apart at a glance with no other cue.

- **Premium** (`oklch(50% 0.15 305)` / `oklch(38% 0.13 305)` deep / `oklch(96% 0.028 305)` wash): a deep violet. Paid tiers, featured and prestige content. Chosen cool and violet rather than the conventional gold so it stays clear of the warning amber and needs no warm-tone exception.

All five are tuned to the system's low-chroma OKLCH palette — muted, document-grade, never neon. A semantic colour carrying a large fill or a heading has been mis-used; reach for the `wash` tier with a 1px border instead.

### Named Rules

**The Contrast-First Rule.** For display headings, body text, primary CTA labels, hero copy, and trust-bar statistics on dark plates, use the highest-contrast colour available (Document Ink on light, Newsprint Cream on dark). Chromatic signal is subordinate to legibility when the element IS the content. Coloured tokens are reserved for elements small or labelled enough that the contrast trade-off is negligible (chips, mono labels, active-state circles, link colour).

**The Two-Accent Rule.** Maroon = action and brand. Blue = verification and current-state. Ink = structure and default. Three registers, no overlap. If maroon appears on body text, the rule has been broken. If blue appears on a primary heading, the rule has been broken. This rule governs the three core registers; the semantic status register (see Semantic status colours) is a separate, usage-limited system for status signals and is held to its own constraints.

**The 60-30-10 Weight Rule.** Approximately 60% neutral surfaces and ink type, 30% secondary ink-2/ink-3 text and rule lines, 7% maroon, 3% blue. If blue exceeds 5% of any rendered page, an item that should be structural has been mis-tagged as a highlight.

**The No Warm Tones Rule.** Orange, yellow, peach, and cream-as-paper are forbidden as surfaces and decorative accents. Two attempts at warm-paper backgrounds were rolled back during the project; do not propose them again. The single bounded exception is the semantic `warning` colour, a muted amber, permitted only as a small status signal (a 1px border, a mono label, a pale wash fill on a callout or badge) and never as a page or section background. See Semantic status colours above.

## 3. Typography

**Display Font:** Archivo (Google Fonts, weights 500-900)
**Body Font:** Public Sans (Google Fonts, weights 400-700)
**Prose Font:** Source Serif 4 (Google Fonts, weights 400-700)
**Label/Mono Font:** Geist Mono (Google Fonts, weights 400-700) with `ui-monospace` system fallback

**Character:** Four faces, six roles. Archivo carries the titles (section eyebrows and H2s). Public Sans body carries the argument copy (fact values, sub-taglines). Source Serif 4 prose carries the answer capsules in an editorial register that signals "longform reading material." Geist Mono carries every label, verification footnote, and the big display numbers. Each face has exactly one job; the system never substitutes one for another.

### Hierarchy

- **Display** (Geist Mono 700, `clamp(2.25rem, 3.5vw, 3rem)`, line-height 0.9, tabular-nums): the big section number that anchors every section's left meta column. `min-height: 3rem` reserves vertical space so dotted dividers below align across all three section columns.
- **Headline** (Archivo 800, `clamp(1.3rem, 2vw, 1.9rem)`, line-height 1.1, tracking -0.015em): section H2s and streamcard titles. Uppercase when nested inside `.sh__meta` (which is every section's H2 now); sentence case in the §04 bento variant.
- **Headline-Small** (`.t-headline-sm`, Archivo 800, `clamp(1.125rem, 1.6vw, 1.375rem)`, line-height 1.2, sentence case, Ink): a quieter H2 variant for sections that want a calmer heading than the default uppercase Headline. Always sentence case (never uppercased), and snapped to the Title tier so it stays on the Five-Step Scale.
- **Title** (Archivo 800, `clamp(1.125rem, 1.6vw, 1.375rem)`, line-height 1.1, tracking -0.018em, sentence case): the section eyebrow word ("Courses", "By state", "Why ABE"). Always Document Maroon.
- **Body** (Public Sans 400-500, 15-16px, line-height 1.55, max-width 65-75ch on body prose): fact values, sub-taglines, default body copy.
- **Prose** (Source Serif 4 400, `clamp(1.0625rem, 1.2vw, 1.125rem)`, line-height 1.6, old-style figures): the answer capsule body. Used only inside `.qa__answer` and scoped to §02 in production. Carries the longform editorial register.
- **Label** (Geist Mono 500, 11px, tracking 0.1em, uppercase): all mono caps labels. Q2 blue when category-labelling primary facts; Document Ink-3 when structural; Document Maroon when action-prompting.
- **Label-Footnote** (Geist Mono 500, 10px, tracking 0.12em, uppercase): the verification register. Smaller than the standard label by one step; used on the verification family (VerificationNote, VerificationFootnote, SourceCitation) and the legacy `.streamcard__fact--verified` rows.

### Named Rules

**The Voice-Per-Face Rule.** Mono is the label voice. Display is the title voice. Body is the argument voice. Prose is the editorial-longform voice. Don't blend; don't substitute. Don't render titles in mono "for technical vibes." Don't render labels in display "for emphasis."

**The Five-Step Scale Rule.** The type scale has at least a 1.25 ratio between adjacent steps (Display 48px → Headline 30px → Title 22px → Body 16px → Label 11px). Don't introduce sizes between these steps. If you need emphasis at the body tier, use weight; if you need a quieter label, use the Label-Footnote variant.

## 4. Elevation

Flat by default. The system uses zero box-shadows. Depth and hierarchy are expressed through tonal layering (three near-white grounds: Cream-1 page, Cream-2 panel, Cream-3 nested-card), the 1px ink frame, and the dotted rule. Shadows do not appear at rest, on hover, or on focus. The Contrast-First Rule covers what shadow would have covered: when an element needs to feel "lifted," it gets a tonal background shift or a 1px ink border, not a drop shadow.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. No box-shadow tokens exist in the system; introducing one violates the doctrine. Hover states shift colour, translate elements 3px on the appropriate axis, or alter underline colour, never elevate.

**The Two-Ornament Rule.** The design system owns exactly two visual ornaments: the 1px solid ink frame, and the 1px dotted ink-3 rule. Anything else (gradient borders, glow rings, decorative dividers) is forbidden.

## 5. Components

### Buttons
- **Shape:** sharp corners (0 radius).
- **Primary:** Document Maroon (`#800000`) background, Newsprint Cream (`var(--bg)`) text, Geist Mono 11px uppercase label, padding 16px 32px. Used for the homepage primary CTA and any "do this" action.
- **Hover / Focus:** background shifts to Deep Burgundy (`#500000`); no scale, no shadow.

### Trust Stripe (volume ladder)

Documented variants of the at-a-glance trust stripe that sits between the hero and §01. **Variant C ships in production** (chosen 19 May 2026 from a three-way comparison set). The other two variants plus the original dark `.trustbar` marquee remain catalogued as opt-in alternatives. Each variant commits to a different primary axis (theme / structure / type-weight). Don't render more than one at a time; see The Stripe Singleton Rule.

| Variant | Class | Axis | Treatment |
|---|---|---|---|
| **C** ✅ (production) | `.tstrip-stats` | **Type-weight contrast** | Dark `--ink` plate, no animation. Four stat tiles with Geist Mono 700 24–32px numerals above 10px mono caps labels. Brand block on the left separated by a 1px frame border. Reads as a regulator-grade dashboard at the top of the page. |
| **C-blue** | `RegulatorBand` (Astro section) | **Colour register** | Same dashboard layout as Variant C, recoloured onto a saturated `--info-deep` Regulator Blue plate. Cream numerals (Contrast-First), `--info-on-dark` mono caps labels, 1px hairline dividers. The deliberate blue surface for breaking up an ink-heavy page while every tile stays verification/current-state. Subject to the Stripe Singleton Rule like the others. |
| **A** | `.tstrip-datebar` | **Theme flip** | Light Newsprint Cream-2 ground, ink text, mono caps labels, display brand. Static single line (no marquee). 1px ink top + bottom borders read as colophon frame. Reads as a newspaper masthead strip. |
| **B** | `.tstrip-chips` | **Structure** | Light Newsprint Cream-1 ground. Brand stamp on the left, five Regulator Blue chips (Q2 wash bg, deep text, soft border) carrying the verified stats. Reuses the existing chip token. Reads as a row of credentials. |
| **Base** | `.trustbar` | (legacy) | Dark `--ink` plate with horizontal marquee animation, lifted-slate mono caps text, duplicated group for seamless 60s scroll loop, mask-image edge fade. Was production before 19 May 2026. Honours `prefers-reduced-motion: reduce` by switching off animation and centering content. |

**Named Rule:** *The Stripe Singleton Rule.* Only one trust-stripe variant ships per page. The four documented alternatives are a comparison palette, not a stack. If multiple variants render simultaneously (e.g., during design review), the page is in temporary review state and the surplus must be removed before ship.

### Streamcard CTAs (volume ladder)

Three documented variants of the streamcard's "Browse {Stream}" action link, each committing to a different amplification axis. **Production currently uses Variant 2 across all three streamcards** ([`abe-homepage.html`](pages/abe-homepage.html) lines 2198, 2249, 2300). Variants 1 and 3 remain catalogued in CSS for future use.

Shared base (`.streamcard__cta`): inline-flex, baseline-aligned, mono caps 11px with 0.1em letter-spacing, `align-self: start` so the button hugs its label width, `::after` content `→` translating 3px right on hover (180ms `--ease-q`).

| Variant | Class modifier | Axis | Treatment |
|---|---|---|---|
| **v1** | `.streamcard__cta--v1` | **Colour amplification** | Maroon (`--accent`) text, weight 600, solid 1px maroon underline replacing the dotted register. No fill, no frame. Reads as "the active version of the text link". Hover deepens text + underline to `--accent-deep`. |
| **v2** | `.streamcard__cta--v2` | **Structural framing** (in production) | 1px solid Document Ink (`--ink`) frame, transparent background, ink label, maroon arrow. Padding 10px 16px, sharp corners. Reads as "a discrete framed action" without the visual mass of a fill. Hover flips frame + label to `--accent` maroon. |
| **v3** | `.streamcard__cta--v3` | **Full fill** | Solid `--accent` maroon background, `--bg` near-white label, padding 12px 24px. Identical register to the global `button-primary` token. The loudest of the three. Hover deepens background to `--accent-deep`. |

**Named Rule:** *The Volume Ladder Rule.* The three variants form one component family at three volumes, not three unrelated buttons. They share placement, typography, gap, and arrow grammar. When mixing them on a single surface (an A/B comparison), they read as the same action shown at three different intensities. When committing to one variant for production, choose by the surface's overall density: v1 for crowded editorial sections where a fill would compete with the body type, v2 for the default editorial register (current production choice), v3 for action-led pages where the button IS the focal point.

### Chips
- **State chip:** Regulator Blue Wash background (`oklch(95% 0.025 235)`), Regulator Blue Deep text, 1px Regulator Blue Soft border, mono 11px caps, padding 4px 8px. Sharp corners. Used for state codes (`NSW`, `QLD`, `WA`, `TAS`, `ACT`) and RTO numbers (`RTO 31193`, `RTO 91826`).
- **Active vs default:** chips are static labels by convention; no toggle state.
- **Premium badge (`PremiumBadge`):** the prestige sibling of the state chip, in the semantic `premium` colour: `premium-deep` text and a 1px `premium` violet border on a transparent background (an outlined tag, no fill), mono 11px caps, padding 4px 8px, sharp corners. Marks paid tiers and featured content. A label, never an action.

### Semantic callout family (`LegalCallout`, `ScopeLimitNote`, `InfoCallout`, `WarningCallout`, `ErrorCallout`, `SuccessCallout`)
A family of block-level notes that share one structure: a mono caps label naming the note, then Ink body copy inside a 1px-framed `<aside>`. None carry a fill; they differ only by frame and label colour, climbing from neutral to loud:

| Component | Frame | Fill | Label colour | Role |
|---|---|---|---|---|
| `LegalCallout` | 1px Rule | none | Ink-3 | Quiet contractual fine print (fee disclaimers, refund terms). |
| `ScopeLimitNote` | 1px Rule | none | Ink-3 | Honest scope limits (what ABE does not offer). An E-E-A-T signal. |
| `InfoCallout` | 1px `information` blue | none | `information-deep` | Neutral context or a helpful aside (good-to-know info that is not a caution or a verifiable claim). |
| `WarningCallout` | 1px `warning` amber | none | `warning-deep` | A caution the reader can still act through (location / eligibility constraints). |
| `ErrorCallout` | 1px `error` red | none | `error-deep` | A blocking problem (enrolments closed, course unavailable, failed action). |
| `SuccessCallout` | 1px `success` green | none | `success-deep` | A completed process outcome (enrolment confirmed, assessment passed). |

`LegalCallout` and `ScopeLimitNote` share the neutral rule frame; they are told apart by purpose and default label, not appearance.

Rules that bind the family: body copy stays Ink in every variant (semantic colours frame and label, never colour body text); the frame is always a full 1px border, never a left/right colour stripe; no callout carries a fill, so the family is distinguished by frame and label colour alone. Register boundaries hold: `InfoCallout` uses the blue `information` token (identical to Regulator Blue) for neutral asides only, leaving verifiable regulator claims to the verification family; `SuccessCallout` confirms a process outcome and never substitutes for the Regulator Blue regulator-approval signal; `ErrorCallout` red sits lighter and more saturated than Document Maroon and must not be placed where it could be mistaken for a maroon action with no other cue.

### Cards
- **Streamcard (§02 canonical):** transparent background (inherits section ground), three-column internal grid (14rem summary / 1fr body / 14rem nav at desktop), no perimeter border, no shadow. Each column carries a 1px dotted ink-3 top rule that aligns across all three columns to mark the card boundary.
- **Internal padding:** 32px top and bottom (`var(--spacing-xl) 0`).
- **Scroll margin:** 48px to clear the sticky meta column when anchor-jumped.
- **No nesting:** streamcards never contain other cards. The 1px-frame variant (action panel) is a sibling pattern, never nested inside the streamcard body.

### Comparison Table (`ComparisonTable` Astro section)
The document-grade way to present dense factual data: a grid where rows are attributes and columns are the options compared (state-by-state requirements, online-vs-in-person, plan tiers). Header row in Geist Mono 11px caps Ink-3 with a 1px solid ink underline; row labels in Public Sans 600 Ink; cells in Public Sans 400 Ink; rows separated by 1px Rule hairlines. No zebra fills, no shadow, sharp corners. First column hugs the section's left edge; tabular figures keep numeric columns aligned; horizontal scroll on small screens rather than reflow. Use it to replace "in NSW X, in QLD Y, in WA Z" prose with one scannable side-by-side.

### Pull-Quote / Key-Stat (`PullQuote` component)
A single high-contrast focal moment for breaking a long run of body text. One component, two variants. `variant="quote"` is a large statement in Source Serif 4 (the editorial-longform voice per the Voice-Per-Face Rule, contrasting the surrounding Public Sans body), with optional mono caps eyebrow and cite. `variant="stat"` is a big Geist Mono 700 numeral over a mono caps label, the light-ground sibling of a RegulatorBand tile. Both go max-contrast Ink (Contrast-First Rule, never maroon), framed by 1px solid ink hairlines top and bottom (the ink frame applied horizontally, never a left/right colour stripe). Emphasis only, not citation: pair a stat with a SourceCitation when the figure needs a `.gov.au` source. Use once or twice per page; it is punctuation, not body copy.

### Stats family (`RegulatorBand`, `StatPanel`, `PullQuote` stat)
Three presentations of headline numbers, chosen by tone. **`RegulatorBand`** is the saturated deep-blue band, a bold full-bleed credentials punctuation (Stripe Singleton Rule). **`StatPanel`** is the light "proof" section (the "Why choose ABE" pattern): a stacked header (optional number, heading, intro), a row of big-number stats on a Cream-2 panel with 1px Rule hairline dividers (the gap-grid technique), then a `Listed by` / `Verified` sources footer. **`PullQuote` (`variant="stat"`)** is a single figure inline. In all three the numeral is max-contrast Ink (Contrast-First Rule); only a small unit superscript (`+`, `%`, `/5`) carries Document Maroon. A coloured numeral, as on the live "Why choose" 95% tile, breaks Contrast-First and is corrected in `StatPanel`.

### Inputs / Fields
- **Form fields** are not currently in the public-facing surface. When added, follow: 1px ink border, sharp corners, no background, focus outline matches the global focus ring (`2px solid var(--ink); outline-offset: 3px`).

### Navigation
- **Section-header browse-streams nav** (`.sh__jump`): 3-row numbered link list in col 3 of the section header. Visible only at ≥1100px. Each link is a baseline-aligned grid of `[2.75rem number] [1fr name] [auto arrow]`. Number is Document Ink-3 mono; name is Document Ink-3 mono with dotted-underline; arrow is Document Maroon. On hover the number darkens to Document Ink, the name shifts to Document Maroon with maroon underline, the arrow stays maroon and translates 3px in its direction.
- **Streamcard state-list** (`.streamcard__list`): same visual grammar as `.sh__jump`, used inside col 3 of each streamcard for the per-state course links.

### Section Card Meta Block (signature component)
The narrow 14rem left column that identifies every section of the homepage. Three stacked typographic elements: the Display section number (Geist Mono 700, 36-48px, Ink-3), the Title eyebrow word (Archivo 800, 18-22px, Document Maroon, sentence case), and the Headline section H2 (Archivo 800, 21-30px, Ink, uppercase). The trio sits in a `position: sticky` 14rem column on desktop so the section identifier persists while the reader scrolls through the section body.

### Verification Family (signature components)
Three trust-signal components share one type register and one alignment so the page's evidence layer reads as a single voice. All three are right-aligned and share the verification register: Geist Mono caps labels, Public Sans values, a 1px Rule divider above, and multiple sources joined with a double-spaced `•` bullet (Document Ink-4). Label and value tiers are tuned per component as the evidence layer is refined. VerificationNote and VerificationFootnote set their labels in Document Ink-4 (so the labels recede behind the evidence) with 10px Ink-3 values (source links and date) on both VerificationNote and VerificationFootnote. Dates render uppercased on both (`11 MAY 2026`). SourceCitation keeps Document Ink-3 labels and 12px Ink-3 values. The free-form italic caption that earlier carried verification prose has been retired; verification now always renders as one of these three structured stamps.

- **VerificationNote** — the one-line stamp. Renders `VERIFIED AGAINST [source] VERIFIED ON [date]` on a single right-aligned line, both labels inline in Ink-4 (quieter than the Ink-3 source and date), the date uppercased to the stamp form (`11 APR 2026`). Sits directly under a BodyParagraph or inside a compact card body. This is the default verification component.
- **VerificationFootnote** — the stacked two-row footnote at the bottom of a streamcard or content card: row one `SOURCE [linked regulators]`, row two `VERIFIED ON [date]`. Right-aligned, separated from the primary facts above by a 1px solid Rule line + 16px breathing space, with no divider between the two paired rows. The size differential carries editorial intent: this is the citation backing the claims, not another fact in the same series.
- **SourceCitation** — the right-aligned `SOURCE [value]` pointer. Names the `.gov.au` or `training.gov.au` page backing a single body paragraph when no date stamp is needed. Lighter than VerificationFootnote: no top border, no `VERIFIED ON` row.

Pick by need: a source pointer with no date is SourceCitation; a one-line stamp with a date is VerificationNote; the stacked card-bottom citation is VerificationFootnote.

### Dotted-Underline Link Grammar (signature pattern)
Any inline link inside body prose, fact values, or list-item names renders with `text-decoration: underline dotted` in Document Ink-3 at 1px thickness, with `text-underline-offset: 3px` for body prose / `4px` for mono caps. On hover the colour shifts to Document Maroon and the underline matches. Never used for primary CTAs (those get the maroon button treatment). Never replaced with a solid underline (which would compete with the maroon CTA hierarchy).

## 6. Do's and Don'ts

### Do:
- **Do** anchor every regulatory claim with a `.gov.au` source link in the same eyeline. The verification family (VerificationNote one-line stamp, VerificationFootnote two-row footnote, SourceCitation source pointer) is the doctrine.
- **Do** use Document Maroon for action only: CTAs, link hover, named-person credits, action-prompt headings.
- **Do** use Regulator Blue for verification only: regulator chips, verification labels, freshness stamps.
- **Do** use the ink palette for everything else. Most of the page lives in ink; that's correct.
- **Do** keep sharp corners. No `border-radius` outside form input/button tokens.
- **Do** tint every neutral toward brand hue 240 (chroma 0.004-0.020). Pure neutrals look warmer than the rest of the palette and break cohesion.
- **Do** use OKLCH for new colour work. Reduce chroma as lightness approaches 0 or 100.
- **Do** maintain the 60-30-10 weight balance. Audit the rendered page; if maroon exceeds 10% or blue exceeds 5%, something has been mis-tagged.
- **Do** keep the sticky 14rem meta column on every section. The section identifier should persist while the reader scrolls the section body.
- **Do** use dotted rules and 1px ink frames as the only ornaments. Both are locked across the system.
- **Do** keep body prose under 65-75ch line length on the editorial answer capsules.
- **Do** use the streamcard CTA variants (v1 / v2 / v3) as a single component family at three volumes. Pick one for a given production surface; don't mix variants on the same page outside an A/B comparison or design-system showcase.

### Don't:
- **Don't** propose warm-paper-neutral palette shifts (cream, tan, peach grounds). Rejected twice; do not propose again.
- **Don't** use orange, yellow, or peach as surfaces or decorative accents. The only exception is the semantic `warning` amber, and only as a small status signal (1px border, mono label, pale wash) — never a background.
- **Don't** stretch the semantic status colours (success, warning, error, premium) onto body text, headings, or large fills. They are bounded to small status signals — 1px borders, mono caps labels, icons, and pale wash fills.
- **Don't** render body text in any colour outside the ink palette. Coloured body text is a smell. The semantic register does not change this — semantic colours label and frame, they never colour the body copy.
- **Don't** use `border-left` or `border-right` greater than 1px as a colour stripe. The single most recognisable AI design tell. Reach for full borders, leading numbers, or no indicator.
- **Don't** use gradient text (`background-clip: text` with a gradient). Forbidden.
- **Don't** use glassmorphism (blur effects, glass cards, glow borders) for decoration. Rare and purposeful, or nothing.
- **Don't** use box-shadows. The system is flat; depth comes from tonal layering and the 1px ink frame.
- **Don't** use rounded rectangles. Sharp corners always.
- **Don't** use cyan-on-dark, purple-to-blue gradients, or any 2024-era AI-slop palette. The colour discipline is the brand.
- **Don't** use entrance cascades or hero reveal animations. Motion is structural (CSS sticky, scroll-reveal 12px fade-up, hover lifts 2px), never decorative.
- **Don't** use modals as a first thought. Exhaust inline / progressive alternatives first.
- **Don't** render the same fact two ways (DESCRIPTION label + restated heading + lede paragraph all saying the same thing). Every word earns its place.
- **Don't** invent new fonts. The four-face system (Archivo / Public Sans / Source Serif 4 / Geist Mono) is locked.
- **Don't** introduce new colour tokens without a Q1/Q2/Q3 role assignment. New colours need a documented register, not a slot in a ramp.
- **Don't** use em dashes in body copy. Use commas, colons, semicolons, periods, or parentheses. Not `--` either.

## 7. Spacing & Layout

Spacing is structural here, not decorative. The Creative North Star asks the page to read as a government white paper, and a white paper is legible because it is *ordered*: a fixed measure, wide and regular gaps between sections, nothing crowded. The cautious tradesperson scanning at 9pm reads that order as competence. Crowded, uneven spacing reads as a marketing landing page; even spacing drawn from a single scale reads as a document. Spacing carries as much of the register as the typography and the ink palette.

### The spacing scale

Eight tokens on an 8px base, defined in the `spacing` block of this file's frontmatter and exposed in `global.css` as `--spacing-*`. Every margin, gap, and padding on the site is drawn from this scale; no pixel value is hard-coded outside it.

| Token | Value | Role |
|---|---|---|
| `xs` | 8px | Tight gaps inside a control; chip padding |
| `sm` | 12px | Gaps inside a compact component |
| `md` | 16px | Default gap between related elements; the mobile page gutter |
| `lg` | 24px | Header-block gaps; the space between a heading and its body |
| `xl` | 32px | The desktop page gutter; scroll-margin for anchored sections |
| `xxl` | 48px | A content section's own vertical padding; the mobile inter-section gap |
| `xxxl` | 64px | The gap between content sections on desktop |
| `xxxxl` | 96px | Page-foot padding, clearing the last section from the viewport edge |

### The page frame

Every archetype layout (Homepage, Hub, Course, Expert) is built on one frame:

- **Measure.** The content column is `max-width: 75rem`, centred with `margin: 0 auto`. The page never runs edge to edge; it holds a document-width measure on any screen.
- **Page gutter.** Desktop padding is `xl xl xxxxl` (32px top and sides, 96px foot). Below 720px it tightens to `lg md xxxl` (24px top, 16px sides, 64px foot).
- **Header block.** Breadcrumb, page heading, and any hero strip stack with an `lg` (24px) gap.
- **Inter-section gap.** The content column is a vertical flex stack with a `xxxl` (64px) gap between sections on desktop, `xxl` (48px) on mobile. This is the single most consequential spacing decision on the site: 64px between sections is what makes a page read as a white paper rather than a landing page.

### Section parameters

Two section patterns share the layout's `xxxl` inter-section gap.

**The ruled content section** is the default — a document-grade section (a heading with answer, body, table, or list). It marks itself off with three parameters on its `<section>` root, never a background fill:

- `border-top: 1px solid var(--color-rule)` — the hairline that opens the section.
- `padding: var(--spacing-xxl) 0` — 48px of vertical breathing room within the section, inside the rule.
- `scroll-margin-top: var(--spacing-xl)` — so an in-page anchor jump lands clear of the heading rather than flush against the viewport top.

Division of labour: the layout owns the `xxxl` gap *between* sections; each ruled section owns its top rule and its `xxl` internal padding. Nine sections reproduce these three parameters exactly — AnswerCapsuleSection, ComparisonTable, CourseShowcase, FAQSection, NumberedStepsSection, PricingTable, StatPanel, UnitOfCompetencyList, and WhyChooseList — and a new content section does the same. The first section on a page resets `border-top` to `0` so the page does not open with a stray rule; AnswerCapsuleSection, the standard course-page opener, carries that `:first-child` reset.

**The band / plate section** is the exception — a full-bleed feature band or a coloured plate, not a ruled document section. It carries no top rule and no vertical padding of its own; it is set apart from its neighbours by the layout gap alone, and owns its internal padding and, if coloured, its own ground. The dark RegulatorBand plate and the homepage feature bands (CourseStreams, FinalCTA, TrustBadgeGrid, StateNavigator, CEOQuoteBlock, InsuranceCrossSell) use this pattern. Two further components sit outside both patterns: HeroTrustBar is a slim credential strip framed by a 1px Rule line top and bottom with `sm` padding, and ScopeLimitNote is a callout `<aside>` with a full 1px frame, a member of the callout family rather than a rhythm section.

### Section background grounds

The page is **one continuous Newsprint Cream-1 ground**. Content sections do not alternate background colour; they are told apart by the 1px top rule and the spacing above them, never by a fill. This is deliberate and load-bearing: alternating grey-and-white bands are the visual signature of a marketing page, while a single uninterrupted ground divided by hairline rules is the signature of a printed document.

The two deeper Cream grounds are for *nested* use only, never as a section-wide background:

- **Cream-2 (`bg-alt`)** is a contained panel set *inside* a section to group related content: the StatPanel number row, the trust-stripe datebar. A panel within a section, not the section ground itself.
- **Cream-3 (`bg-deep`)** is a card nested inside a Cream-2 panel, one tone deeper so it stays distinct from the panel around it.
- **Document Ink** is the single dark plate, used full-bleed for the trust stripe and the RegulatorBand credentials band.

When a section needs visual separation, reach for the rule and the spacing first. A background fill is correct only for a contained panel *within* a section, never for the section itself.
