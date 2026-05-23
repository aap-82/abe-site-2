---
name: abe-readability-audit
description: Audit ABE Education web pages (course, hub, homepage, expert) for readability, layout, and typographic quality against evidence-based standards, then return a scored report with ranked, specific fix recommendations. Use whenever the user wants to review, audit, critique, score, or improve the design, layout, typography, font sizes, line length or measure, line spacing, columns, grids, contrast, or readability of an ABE page or the ABE Astro component library, including casual phrasings like "is this readable", "improve the layout", "are my font sizes right", "check the contrast", "this is a wall of text", "review this page's design", or "audit the styleguide", or when the user pastes an abeeducation.edu.au or workers.dev URL and asks for design feedback. Also use to check whether a proposed token, CSS, or layout change meets the standards, or to compare two pages. Not for SEO or keyword work (use abe-seo-content-engine), AI-writing detection (ai-detector), or final proofreading (final-check).
---

# ABE Readability Audit

Audit an ABE page against evidence-based readability and typographic standards and hand back a scored report with ranked, concrete fixes. The standards are the benchmark; the current design is the subject under review, never the authority. The point is to improve the pages, so lead with what to change and why, not with what already conforms.

## When to reach for the references
- `references/readability-standards.md` is the benchmark: the targets and the reasoning, by dimension. Read it to know what "good" is.
- `references/abe-baseline.md` is the current state: ABE's type roles, colour tokens, component patterns, measured contrast, and the known issues. Read it to judge concretely and to avoid recommending fixes that break ABE's house rules.
- `scripts/contrast_check.py` does the contrast sums and the line-length conversion. Run it rather than estimating.

## Workflow

### 1. Get the page
If given a URL, fetch it (and the styleguide or conventions page if the design system itself is in question). If given HTML, a screenshot, or pasted copy, work from that. If nothing concrete is supplied, ask which page or page type to audit rather than auditing in the abstract. Note the page type (course, hub, homepage, expert), since the expected structure differs.

### 2. Establish the facts before judging
- **Measure the line length.** This is the highest-impact variable and the one ABE has not locked. Find the content column's rendered width and convert it: `python scripts/contrast_check.py --cpl <width_px> <body_px>`. Anything consistently above 75 characters is a finding.
- **Check the type settings** in use against the role table in `abe-baseline.md`: body size and leading, prose size and leading, the smallest text on the page, and whether the heading levels are visibly distinct.
- **Run the contrast check:** `python scripts/contrast_check.py` for the token table, or pass a specific pair. Report real ratios, not impressions. ink-4 and the 10 to 11px labels are the usual weak points.
- **Inspect columns and grids:** confirm running text is single-column, grids stack on mobile, and wide tables have a narrow-screen plan.
- **Walk the accessibility basics:** WCAG 1.4.12 spacing survivability, reflow at 320px, 200% zoom, tap-target size, heading order, focus ring.

### 3. Judge each dimension
Score each of these as **Pass / Flag / Fail** against `readability-standards.md`:
1. Line length (measure)
2. Font size and smallest text
3. Line spacing and vertical rhythm
4. Hierarchy and type roles
5. Columns and grids
6. Alignment and paragraph structure
7. Contrast and colour
8. Accessibility (spacing survivability, reflow, tap targets, headings, focus)
9. Scanning and chunking
10. Long-page wayfinding (course/hub pages)

- **Pass:** meets the target.
- **Flag:** within tolerance but weaker than ideal, or a judgement call worth raising.
- **Fail:** misses a target that affects readability or accessibility (a measure over ~85 CPL, body under 16px, contrast under AA, justified body text, multi-column prose).

### 4. Recommend fixes
For every Flag and Fail, give a specific fix: the change, a concrete value where possible (a `max-width`, a px size, a token swap), and one line of why. Then rank all fixes by impact. Respect ABE's house rules in `abe-baseline.md`: a fix that breaks the flat aesthetic, the Two-Accent colour discipline, Australian English, or the no-warm-surfaces rule is not a valid fix. Suggest design solutions freely, but flag anything that would need a token or component change versus a per-page tweak.

### 5. Stay balanced
Close with a short "already working" note so the audit reads as a refinement of a sound base, not a teardown. ABE already gets left-alignment, leading, non-pure-black contrast, caps tracking, and question-led chunking right; say so.

## Output template
Use this structure every time:

```
# Readability audit: [page name / URL]
Page type: [course / hub / homepage / expert]   |   Audited: [date]

## Verdict
[2 to 3 sentences: the headline state and the single most important fix.]

## Scorecard
| Dimension | Verdict | One-line note |
| --- | --- | --- |
| Line length (measure) | Pass/Flag/Fail | ~N CPL at the body size |
| ... (all 10 dimensions) | | |

## Top fixes (ranked by impact)
1. [Fix] — [concrete value] — [why]. [per-page tweak | token/component change]
2. ...

## Detailed findings
[Dimension by dimension: what was measured, the target, the gap, the fix.]

## Already working (leave alone)
[Short list of what is sound.]
```

## Notes on tone
Write in Australian English. Do not use the word "comprehensive". Avoid em dashes in the report body. Give the model reasons, not edicts: a recommendation lands better when the reader understands why a 95-character line or a 3.45:1 label is a problem. Be specific (`max-width: 66ch`, `.t-body` to 17px, retire `ink-4` from small text) rather than general ("improve readability").
