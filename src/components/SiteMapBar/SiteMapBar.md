---
description: A build-phase site-structure bar pinned to the top of every page. The slim strip shows build progress and a Styleguide link; opening it reveals the full page tree — built pages link, pages not yet built are muted.
---

# SiteMapBar

A slim dark bar pinned to the top of every page during the build phase. It gives a one-click route to any page on the site and an at-a-glance read of build progress.

The always-visible strip carries the build count (for example `7/26 pages built`) and a Styleguide link. Opening "All pages" reveals a panel with the whole site tree, grouped by stream — built pages are links, pages not yet built are muted with a `soon` tag. The current page is marked with a leading `›`.

It is rendered once in `BaseLayout` and once in `StyleguideLayout`, so it appears across every content page and the styleguide without per-page wiring.

## Props

None. The component is global chrome and takes no props.

## Site structure

The `groups` array at the top of `SiteMapBar.astro` is the single source of truth for the site structure. As each route ships, flip its `built` flag to `true` — the progress count updates on its own. Groups marked `tools: true` (the styleguide and other build aids) are excluded from the count.

## Layout

A slim dark bar, deliberately outside the site's own colour palette so it never reads as page content. It is `position: sticky` at the top of the viewport. The "All pages" panel overlays the page below the bar, so opening it never reflows the content.

## When to use

- Automatically, site-wide, during the build. No manual placement is needed.

## When NOT to use

- Public launch. This is build-phase chrome — remove the `<SiteMapBar />` line from `BaseLayout` and `StyleguideLayout` before the site goes live.

## Related

- `BaseLayout` — renders this bar for every content page.
- `StyleguideLayout` — renders this bar for the styleguide, which the bar links to.
