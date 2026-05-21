---
description: The homepage "what courses do we offer" section — an H2 over a 1px-hairline grid of plate Streamcards, one per course stream (Owner Builder, White Card, CPD), each linking to its hub.
---

# CourseStreams

The course-streams section from the homepage. An H2 heading over a responsive 1px-hairline grid of `plate` Streamcards, one per ABE course stream. Each card carries its stream number, eyebrow, title, a body paragraph, a CTA to the stream hub, and a mono caps credential footnote.

It composes the `Streamcard` component in its `plate` layout. Per-state course links belong to `StateNavigator`, not here — keep this section about the streams themselves.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Rendered by the component (decision #1). |
| `streams` | `Stream[]` | ✓ | — | The course streams, in display order. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `Stream` shape

| Field | Type | Notes |
|---|---|---|
| `num` | `string` | Two-digit stream number, e.g. `01`. |
| `eyebrow` | `string` | Short eyebrow line. |
| `title` | `string` | Stream title, e.g. `Owner Builder`. |
| `body` | `string` | One-paragraph description. |
| `ctaLabel` | `string` | CTA label. |
| `ctaHref` | `string` | CTA target — the stream hub. |
| `footnote` | `string` | Mono caps credential footnote. |

## When to use

- The "what courses do we offer" section on the homepage.

## When NOT to use

- For a single course stream — use the `Streamcard` component directly.
- For per-state course links — use `StateNavigator` (its `links` variant).

## Related

- `Streamcard` — the card this section composes, in its `plate` layout.
- `StateNavigator` — the by-state course navigator that follows it on the homepage.
