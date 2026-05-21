---
description: Cross-page navigation link to another ABE page. Mono caps label in Ink-3 with dotted underline, hover shifts to Maroon. No arrow — arrows are reserved for in-page jumps (MicroCTA).
---

# CrossRefLink

The cross-page navigation link that points readers at another ABE page. Hub-to-spoke ("Browse the NSW Owner Builder course"), spoke-to-hub ("View all Owner Builder states"), or cross-category ("Find the White Card for your state").

**Arrows on this site are reserved for in-page anchor jumps** (`MicroCTA` ↑/↓). A cross-page link is a navigation to elsewhere on the site, so it carries no arrow — the dotted-underline mono caps register is enough to mark it as an action link. This keeps the reader's mental model tight: arrow on a link = scrolling within this page; no arrow = navigating to a new page.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `href` | `string` | ✓ | — | Target URL. Relative (`/owner-builder-nsw`) or absolute (`https://...`). |
| `label` | `string` | ✓ | — | Visible link text. Clean text only — no leading/trailing arrows. |

## When to use

- Hub pages linking down to spoke pages ("Browse the NSW Owner Builder course").
- Spoke pages linking up to hub pages ("View all Owner Builder states").
- Cross-category links ("Find the White Card for your state").
- Anywhere a styled link should navigate to another page within the ABE site.

## When NOT to use

- For in-page anchor jumps. Use `MicroCTA` with the appropriate `direction` prop. An in-page jump deserves the ↑/↓ visual cue.
- Inside FAQ answers (quality-gate rule: no inline CTAs in FAQ answers).
- For the primary final CTA on a page (use `PrimaryCTAButton`).
- For external (non-ABE) links — use a plain `.link-dotted` anchor inline in prose.

## Example — hub to spoke

```astro
---
import CrossRefLink from '@components/CrossRefLink/CrossRefLink.astro';
---

<CrossRefLink href="/owner-builder-nsw" label="Browse the NSW Owner Builder course" />
```

Renders as: `BROWSE THE NSW OWNER BUILDER COURSE` with a dotted underline.

## Example — spoke to hub

```astro
<CrossRefLink href="/owner-builder" label="View all Owner Builder states" />
```

## Example — cross-category

```astro
<CrossRefLink href="/white-card" label="Find the White Card for your state" />
```

## Visual treatment

- Label: Geist Mono 500, 11px, tracking 0.1em, uppercase (`.t-label` class).
- Label colour: Ink-3 default; shifts to Maroon on hover (180ms ease).
- Underline: dotted, 1px, offset 4px from baseline.
- Block margin: `var(--spacing-lg)` (24px) above and below — sits on its own paragraph.

## Related

- `MicroCTA` — in-page anchor jump sibling. Uses ↑/↓ arrow to signal scroll direction.
- `link-dotted` — the inline-link grammar for prose-embedded links. Same colour and underline but no block-level paragraph wrapper.
- `PrimaryCTAButton` — the louder filled-button register for the page's primary action.
