---
description: The streamcard CTA pattern from DESIGN.md §5. One component, three volume tiers (v1 quiet underline, v2 framed default, v3 filled). Always carries a Maroon → arrow because it is a button, not a text link.
---

# CTAButton

The button-tier action component used as a "browse this stream" / "see this state" call. Implements the streamcard CTA pattern documented in DESIGN.md §5, with all three volume variants in one component per the Volume Ladder Rule.

**This is a button, not a text link.** It always carries the Maroon → arrow because it is an explicit action trigger. The site's other arrow rule (text links use ↑/↓ for in-page jumps and no arrow for cross-page navigation) doesn't apply here — buttons sit in a different visual register.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `href` | `string` | ✓ | — | Target URL. Relative or absolute. |
| `label` | `string` | ✓ | — | Visible button text. Clean text only — no trailing arrows. |
| `variant` | `'v1' \| 'v2' \| 'v3'` | — | `'v2'` | Volume tier. Defaults to v2 (production default — framed register). |

## Variants

### v1 — Colour amplification
Maroon text, weight 600, solid Maroon underline. No frame, no fill. The "active version of the text link" register. Use in crowded editorial sections where a fill would compete with the body type.

### v2 — Structural framing (production default)
1px solid Document Ink frame, transparent background, ink label, Maroon arrow. Padding 10px 16px. Sharp corners. Reads as "a discrete framed action" without the visual mass of a fill. Hover flips the frame and label to Maroon.

**This is the default.** Used on every streamcard in production.

### v3 — Full fill
Solid Document Maroon background, Newsprint Cream label, Maroon arrow shifted to Cream for contrast. Padding 12px 24px. The loudest of the three; identical register to the global primary-button token. Use on action-led pages where the button IS the focal point.

## When to use each variant

Per DESIGN.md §5 Volume Ladder Rule: **the three variants form one component family at three volumes, not three unrelated buttons.** Pick by the surface's overall density:

- **v1** for crowded editorial sections where a fill would compete with the body type.
- **v2** (default) for the standard editorial register — most streamcards, most "browse" actions.
- **v3** for action-led pages where the button IS the focal point — the page's primary CTA.

Don't mix variants on a single page outside an A/B comparison or the design-system showcase (Stripe Singleton Rule applies in spirit).

## Example — v2 (production default)

```astro
---
import CTAButton from '@components/CTAButton/CTAButton.astro';
---

<CTAButton href="/white-card" label="Browse White Card" />
```

## Example — v1 (quiet)

```astro
<CTAButton href="/cpd/nsw-builder" label="Browse Construction CPD" variant="v1" />
```

## Example — v3 (loud)

```astro
<CTAButton href="/enrol" label="Get certified today" variant="v3" />
```

## Label convention

Pass clean text. The component renders the arrow itself; do not include trailing ` →` in the label.

## Arrow grammar

Always `→`. Translates 3px right on hover (180ms ease). Maroon by default, except in v3 where the arrow flips to Newsprint Cream because the background is already Maroon.

## Related

- `CrossRefLink` — the cross-page text-link sibling (no arrow, no frame).
- `MicroCTA` — the in-page jump text-link sibling (↑/↓ arrow).
- `VerificationFootnote` — the structured trust-signal footnote that sits below CTAButtons on streamcards.
