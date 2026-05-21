---
description: The homepage insurance cross-sell — an intro line, a grid of cover-by-trade cards linking to the insurance satellite pages, and a verbatim AFSL disclosure rider.
---

# InsuranceCrossSell

The "insurance for the work you're certified to do" section from analysis §2.2. A homepage cross-sell from training into the insurance satellite pages.

It renders an intro line, a 1px-hairline grid of cover-by-trade cards (each a link to its satellite page), and a verbatim AFSL disclosure rider.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | The section H2. Component renders the `<h2>` per decision #1. |
| `intro` | `string` | ✓ | — | Intro line under the heading. |
| `covers` | `Cover[]` | ✓ | — | The cover-by-trade cards. |
| `afslDisclosure` | `string` | ✓ | — | The verbatim AFSL disclosure rider. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override. |

### `Cover` shape

| Field | Type | Required | Notes |
|---|---|:-:|---|
| `title` | `string` | ✓ | Cover name. |
| `description` | `string` | ✓ | One line on what the cover includes. |
| `href` | `string` | ✓ | Link to the insurance satellite page. |

## Compliance note

`afslDisclosure` is financial-services compliance wording (the InsuranceTek / Ausure AFSL rider). Like the ASQA disclosure templates it must be supplied **verbatim** and never paraphrased — it is passed as a prop, not generated.

## When to use

- The homepage insurance cross-sell section.

## When NOT to use

- For the course-stream cards on the homepage — use `StateNavigator` or the streamcards.
- For an ASQA / RTO disclosure — use `ASQADisclosure`.

## Related

- `StateNavigator` — the sibling card-grid navigator.
- `ASQADisclosure` — the training-side verbatim disclosure counterpart.
