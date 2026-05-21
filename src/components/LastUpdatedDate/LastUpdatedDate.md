---
description: |
  Visible freshness signal under every H1. Reads ISO date from frontmatter, 
  formats in Australian locale ("Last updated: April 2026"). Real DOM text so crawlers see it.
---

# LastUpdatedDate

The small freshness line under every page's H1: a 10px mono caps `Last updated:` label (Ink-4) followed by the date as an all-caps Public Sans value (Ink-3). Reads the `lastUpdated` field from the page frontmatter and formats it as "Last updated: Month YYYY" in Australian English locale.

Per locked decision #6, this date always comes from frontmatter and is never derived from the git commit history. Only an explicit reviewer bump shifts the visible date, which keeps the freshness signal under reviewer control.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `date` | `string` (ISO `YYYY-MM-DD`) | ✓ | — | The ISO date from frontmatter. Validated against the Zod schema. |

## When to use

- Directly under every page H1, rendered by `PageHeading` automatically.
- Standalone on internal pages that need a visible freshness stamp without a full PageHeading.

## When NOT to use

- For section-level "last reviewed" timestamps (those use `BreadcrumbBar` with the reviewer prop instead).
- For arbitrary other dates (course start dates, application deadlines) — those use a plain `<time>` element, not this component.

## Example

```astro
---
import LastUpdatedDate from '@components/LastUpdatedDate/LastUpdatedDate.astro';
---

<LastUpdatedDate date="2026-04-28" />
```

Output (with date input `2026-04-28`):

```html
<p class="last-updated">
  <span class="last-updated__label t-label">Last updated:</span>
  <time class="last-updated__value" datetime="2026-04-28">APRIL 2026</time>
</p>
```

## Format

- Australian English locale (`en-AU`).
- Only month and year are shown, in all caps ("NOVEMBER 2026"), not the day. Daily granularity is too noisy for a freshness signal and invites stale-content audits.
- The full ISO date is preserved in the `<time datetime>` attribute for machine readers.

## Typography

- Label ("Last updated:") — Geist Mono caps (`.t-label`) at 10px, **Ink-4** (quieter).
- Value (the date) — Public Sans, 10px, **Ink-3**, all caps (e.g. `NOVEMBER 2026`).

## Related

- `PageHeading` — composes this component directly under the H1.
- `BreadcrumbBar` — has its own "reviewer · date" pattern for named reviewer credit.
