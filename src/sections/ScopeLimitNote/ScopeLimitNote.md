---
description: The honest scope-limit callout, the "📋 NOTE Not in this list = not currently offered" block placed after a state or service list to state plainly what ABE does not offer. A neutral member of the callout family, a 1px rule frame with no fill.
---

# ScopeLimitNote

The honest scope-limit callout from analysis §2.2. Placed straight after a state or service list to state plainly what ABE does **not** offer, and to point the reader at the relevant external authority instead. Reusable wherever a list excludes states or services.

A neutral member of the callout family, sharing the rule frame with `LegalCallout`. The family is distinguished by frame colour: neutral rule (`LegalCallout`, `ScopeLimitNote`) → blue (`InfoCallout`) → amber (`WarningCallout`) → red (`ErrorCallout`), with green `SuccessCallout` on a separate axis. No member carries a fill.

Filed under `sections/` because it sits directly under a layout as its own block, but it has no question heading; it renders as an `<aside>`.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `label` | `string` | — | `Note` | The mono caps label naming the callout. Rendered uppercase by CSS. |
| `anchorId` | `string` | — | — | Optional anchor id. The note carries no heading, so there is no slug to auto-generate (decision #7); set this only if the note must be a jump target. |

The body is a `<slot>` so the note can link out to the external regulator it defers to.

## When to use

- Immediately after a `StateNavigator` grid or table, to make clear that states not listed are not currently served.
- After any list that deliberately excludes options, where staying silent would read as an oversight.

## When NOT to use

- For contractual fine print — use `LegalCallout`.
- For a must-read eligibility or location constraint — use `WarningCallout`.
- For a neutral helpful aside — use `InfoCallout`.
- For the verbatim ASQA / AFSL regulator wording — use `ASQADisclosure`.

## Design notes

The "📋" emoji from the content drafts is dropped — the design system owns no icon set (Two-Ornament Rule, DESIGN.md §4). The `NOTE` mono caps label names the callout. Stating scope honestly is itself an E-E-A-T signal, so the note earns a visible block: a 1px rule frame with no fill, matching the rest of the callout family. Because `ScopeLimitNote` and `LegalCallout` now share the neutral rule frame, they are told apart by purpose and default label rather than by appearance.

## Example

```astro
---
import ScopeLimitNote from '@sections/ScopeLimitNote/ScopeLimitNote.astro';
---

<ScopeLimitNote>
  Not in this list = not currently offered. ABE does not deliver Owner
  Builder training in Victoria, South Australia, or the Northern Territory.
  Victoria's permit is handled by the
  <a href="https://www.vba.vic.gov.au/owner-builders" class="link-dotted" rel="external">
    Victorian Building Authority</a>, and South Australia does not currently
  require a formal course.
</ScopeLimitNote>
```

## Related

- `LegalCallout`, `InfoCallout`, `WarningCallout`, `ErrorCallout`, `SuccessCallout` — the other members of the callout family.
- `StateNavigator` — the state list this note most often follows.
- `link-dotted` — the inline-link grammar used inside the body slot.
