---
description: A featured course over a hairline-separated grid of supporting courses. The ABE-register adaptation of the shadcn "casestudy-5" block — mono caps category tag, Archivo title with an Ink-2 continuation, and a maroon "Browse →" action per entry, the whole entry a stretched link to the hub. Two featured-media variants — an on-brand "at a glance" fact panel (default) or a framed photo.
---

# CourseShowcase

A promotional section that leads with one **featured course** (large, two-column) above a **hairline-separated grid of supporting courses**. Each entry pairs a mono caps category tag with an Archivo title and a quieter Ink-2 continuation line, closing on a maroon "Browse →" action; the whole entry is a stretched link to the course hub.

It is the ABE-register translation of the shadcn `casestudy-5` marketing block. Built for the homepage "one featured stream + the rest" pattern (Owner Builder featured, White Card and CPD supporting), it also suits a hub leading with one state-page over the others.

## Featured-media variants

The featured entry has a focal slot where the source block placed a photo. Pick with `featuredMedia`:

- **`panel`** (default) — an on-brand "at a glance" fact panel: a Cream-2 panel inside a 1px ink frame, with Regulator Blue state chips and a dotted-rule fact grid. Keeps the document-grade, imagery-light register. Drive it with `featured.states` and `featured.facts`.
- **`image`** — a real framed photo (1px ink frame, 14/9, lazy-loaded). Closer to the source block; reach for it when a page wants warmth over restraint. Drive it with `featured.image`.

## Props

| Prop | Type | Required | Default | Notes |
|---|---|:-:|---|---|
| `heading` | `string` | ✓ | — | Section H2. |
| `intro` | `string` | — | — | Optional one-line intro under the heading. |
| `featured` | `FeaturedItem` | ✓ | — | The large featured entry. |
| `items` | `CourseItem[]` | ✓ | — | Supporting entries. Tuned for two (the 1 + 2 = 3 stream IA). |
| `featuredMedia` | `'panel' \| 'image'` | — | `'panel'` | Featured focal slot treatment. |
| `anchorId` | `string` | — | `slugify(heading)` | Anchor override (locked decision #7). |

### Types

```ts
interface Fact {
  label: string; // mono caps label
  value: string; // Public Sans value
}

interface CourseItem {
  num?: string;          // optional two-digit number, e.g. "01"
  tag: string;           // mono caps category eyebrow
  title: string;         // entry title (rendered <h3>)
  continuation?: string; // quieter Ink-2 continuation of the title
  ctaLabel: string;      // mono caps action label, e.g. "Browse Owner Builder"
  href: string;          // course hub link
}

interface FeaturedItem extends CourseItem {
  states?: string[];                  // Regulator Blue state chips (panel variant)
  facts?: Fact[];                     // dotted-rule fact grid (panel variant)
  image?: { src: string; alt: string }; // photo (image variant)
}
```

## Design notes

Three deliberate departures from the source `casestudy-5` block hold the locked design rules:

- **No radial-dot texture columns.** The Two-Ornament Rule (DESIGN.md §4) gives the system only the 1px ink frame and the 1px dotted rule; a decorative dot field is neither. Cell separation uses the hairline-grid technique instead.
- **No hover image-scale or background-fill shift.** The Flat-By-Default Rule keeps hover to a colour shift and a 3px arrow translate, never a lift.
- **The title continuation is Ink-2, not a tinted accent.** No coloured body text; maroon stays the action register (the "Browse →" line only).

Sharp corners throughout; flat; the section owns its 1px top rule + `xxl` padding + scroll-margin like every other section.

## When to use

- The homepage "what courses do we offer" surface when you want to lead with one stream rather than show three equal plates (the equal-weight pattern is `CourseStreams`).
- A hub that wants to feature one state's course page above the others.

## When NOT to use

- Three (or more) equal-weight course plates with no featured item — use `CourseStreams`.
- A dense state-by-state comparison — use `ComparisonTable` or `StateNavigator`.
- A single course's key facts and price near the hero — use `AboveFoldCTABox`.

## Example — panel variant (default, homepage)

```astro
---
import CourseShowcase from '@sections/CourseShowcase/CourseShowcase.astro';
---

<CourseShowcase
  heading="Our courses"
  intro="Three nationally recognised pathways, each built and reviewed by named industry experts and delivered fully online."
  featured={{
    num: '01',
    tag: 'Owner builder permits / 5 states',
    title: 'Become a licensed owner builder.',
    continuation: 'Build or renovate your own home legally, with the certificate your state permit authority accepts.',
    ctaLabel: 'Browse Owner Builder',
    href: '/owner-builder',
    states: ['NSW', 'QLD', 'WA', 'TAS', 'ACT'],
    facts: [
      { label: 'Delivery', value: '100% online, self-paced' },
      { label: 'Recognition', value: 'RTO 91826 plus four state regulators' },
      { label: 'Start', value: 'Enrol and begin today' },
    ],
  }}
  items={[
    {
      num: '02',
      tag: 'Construction induction / nationally recognised',
      title: 'Get your White Card online.',
      continuation: 'The CPCWHS1001 induction every site requires, issued same day.',
      ctaLabel: 'Browse White Card',
      href: '/white-card',
    },
    {
      num: '03',
      tag: 'Continuing professional development',
      title: 'Keep your builder licence current.',
      continuation: 'Regulator-aligned CPD points, completed in an evening.',
      ctaLabel: 'Browse CPD',
      href: '/cpd',
    },
  ]}
/>
```

## Example — image variant

```astro
<CourseShowcase
  heading="Our courses"
  featuredMedia="image"
  featured={{
    num: '01',
    tag: 'Owner builder permits / 5 states',
    title: 'Become a licensed owner builder.',
    continuation: 'Build or renovate your own home legally, in five states.',
    ctaLabel: 'Browse Owner Builder',
    href: '/owner-builder',
    image: {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
      alt: 'Builders in hi-vis and hard hats on a concrete slab over a steel-reinforced residential foundation.',
    },
  }}
  items={[ /* White Card, CPD as above */ ]}
/>
```

## Related

- `CourseStreams` — three equal-weight stream plates, no featured item.
- `Streamcard` — the card the equal-weight grid composes.
- `AboveFoldCTABox` — single-course key facts + price near the hero.
- `CTAButton` — the standalone three-volume action used outside card surfaces.
