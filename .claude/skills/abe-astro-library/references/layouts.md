# Layout picker

Choose the right Astro layout for each page archetype.

| Page archetype | Example URLs | Layout | Content collection | Schema `@graph` |
|---|---|---|---|---|
| Homepage | `/` | `HomepageLayout` | `pages-homepage` | `WebSite` + `EducationalOrganization` + `SiteNavigationElement` |
| Hub | `/owner-builder`, `/white-card`, `/cpd` | `HubLayout` | `pages-hub` | `CollectionPage` (with `ItemList` `mainEntity`) + `BreadcrumbList` + `FAQPage` + `EducationalOrganization` |
| Course state (RTO-partnered) | `/owner-builder-nsw`, `/white-card-online-nsw` | `CoursePageLayout` | `pages-course-state` | `Course` + `FAQPage` + `BreadcrumbList` (+ `AggregateRating` + `reviewedBy` if present) |
| Course state (ABE direct) | `/owner-builder-qld`, `/owner-builder-wa`, `/owner-builder-tas`, `/owner-builder-act` | `CoursePageLayout` | `pages-course-state` | Same as RTO-partnered, but `provider` is ABE Education, not an RTO partner |
| Expert profile | `/experts/dominic-ogburn`, `/experts/warwick-smith` | `ExpertPageLayout` | `pages-expert` | `Person` + `BreadcrumbList` |

## Distinctive sections per archetype

### Homepage
- State navigator grid (5 states)
- CEO note (blockquote + link to expert)
- Insurance cross-sell strip (with AFSL disclosure)
- Hub-of-hubs final CTA

### Hub
- Hub-variant `HeroTrustBar` (regulator names only, NO ASQA disclosure)
- `StateNavigator` (table variant — state / regulator / course)
- `StateComparisonTable` (5-state threshold/pathway/cert/regulator comparison)
- `NumberedStepsSection` with 5 steps ("how to become an owner builder")
- Hub-level `ExpertReviewerCard` (blockquote variant)

### Course state
- Course-variant `HeroTrustBar` (short ASQA / SafeWork disclosure)
- `AboveFoldCTABox` (boxed session info + price + book button)
- `UnitOfCompetencyList`
- `RequirementsList`
- `PricingTable`
- `RoleSeparationTable` (ABE vs RTO partner — mandatory on RTO-partnered pages)
- Card-variant `ExpertReviewerCard`
- `ASQADisclosure` in all 4 variants (inline, near-cta, footer-legal, copyright-bar) — RTO-partnered pages only

### Expert profile
- `ExpertHeader` (avatar + name + credentials)
- `CredentialList`
- `CoursesDeveloped` / `PagesReviewed` lists (cross-references to course/hub pages)

## States not currently served

ABE does not deliver courses in:
- Victoria (VIC) — Victorian Building Authority handles Owner Builder permits directly
- South Australia (SA) — no formal course requirement
- Northern Territory (NT) — no current product

If a user requests a page for one of these states, push back and offer to use the `ScopeLimitNote` section on the relevant hub instead.
