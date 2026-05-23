# Readability Standards (the audit benchmark)

The evidence-based targets every ABE page is measured against. These come from the typography and readability research, not from the current build. Use them as the bar; where a page or token differs, that is a finding, not a precedent.

## Contents
1. Line length (measure)
2. Font size
3. Line spacing (leading)
4. Paragraph structure and indentation
5. Columns
6. Letter and word spacing
7. Typeface and hierarchy
8. Alignment
9. Contrast and colour
10. Whitespace, chunking and scanning
11. Accessibility (WCAG 2.2)
12. Reading medium

---

## 1. Line length (measure)
- **Target: 45 to 75 characters per line, about 60 to 66 ideal.** On screen, treat 50 to 75 as comfortable and flag anything consistently above 75.
- **Why:** lines longer than ~75 characters make the eye lose the start of the next line; readers perceive long-line text as a wall and skip it (Bringhurst; Baymard Institute). Readers can technically read faster at ~100 CPL, but comprehension and preference favour the shorter band (Dyson).
- **Fix when too wide:** cap the text column. `max-width: 66ch` is self-correcting across body sizes; in px it is roughly 0.5 x font-size x characters (so ~528px for 66 chars at 16px). Use the `--cpl` mode of `scripts/contrast_check.py` to convert a measured column width into CPL.
- Mobile: 30 to 45 CPL is the realistic band on a phone.

## 2. Font size
- **Target: body 16 to 18px on screen; 17 to 18px increasingly preferred for reading-heavy pages.** 16px is the floor (below it iOS auto-zooms and low-vision readers struggle).
- **Why:** larger body size lowers fatigue over long reading sessions, which is the relevant case for long compliance pages.
- Smallest text: keep meaningful information at 12px or larger. 10 to 11px is borderline, especially for low vision; reserve it for genuinely redundant or decorative labels.

## 3. Line spacing (leading)
- **Target: 1.4 to 1.6 x font size for body; tighter (1.0 to 1.3) for large display headings.**
- **Why:** leading scales with line length and x-height; longer lines and taller x-heights need more space to find the next line. WCAG requires content to survive a user-set 1.5 line-height.

## 4. Paragraph structure and indentation
- **Use either a first-line indent OR space between paragraphs, never both.** On screen, a blank-line gap is standard.
- Keep paragraphs short, one idea each. The first paragraph of a section is not indented.

## 5. Columns
- **Single column for all running prose.** Multiple columns only for tables, badge grids, and card rows.
- **Why:** multi-column prose on screen forces the reader to scroll back up to reach the next column.
- Grids must stack to one column on mobile in a sensible order; gutters narrower than the outer margins so columns read as a group.
- Wide tables need a real narrow-screen strategy (stacked key-value cards usually beat horizontal scroll, which hides columns).

## 6. Letter and word spacing
- **Body: leave tracking at the type designer's default.**
- **All-caps and small-caps: add 5 to 12% letter-spacing** (caps are drawn to sit beside lowercase, so set solid they look cramped). Keep caps strings short (about 2 to 4 words); long all-caps runs are hard to read.

## 7. Typeface and hierarchy
- Serif vs sans-serif is largely a wash on modern screens; choose by x-height, openness, and quality, not category.
- **Limit the number of faces and give each one job.** Each step of the type scale should be visibly distinct by size or weight; two roles sharing a size and differing only by colour is a hierarchy collision.
- Avoid setting every heading at maximum weight; that flattens hierarchy.
- Tabular figures for aligned numbers and prices; old-style figures for inline prose.

## 8. Alignment
- **Left-aligned (ragged right) is the default.** Do not justify body text on screen (it creates rivers and is a WCAG AAA failure); never centre or right-align running text.

## 9. Contrast and colour
- **WCAG AA: 4.5:1 for normal text, 3:1 for large text** (large = 24px, or 18.66px bold). **AAA: 7:1 and 4.5:1.**
- **Avoid pure #000 on pure #FFF** for long reading; a near-black ink on a soft off-white reduces glare and halation (helpful for the ~40% of adults with astigmatism) while clearing AA easily.
- Check small chromatic elements (label colours on their washes, link colours, text on dark plates) individually; do not assume they pass because body text does. Run `scripts/contrast_check.py`.
- Never carry meaning by colour alone; pair it with text or an icon.

## 10. Whitespace, chunking and scanning
- People scan before they read (about 79% scan; readers consume ~20 to 28% of words on a page). Support the F-pattern: frequent headings (every ~200 to 300 words), short paragraphs, parallel items in lists, key facts left-aligned as scan handles.
- Front-load the answer in each section (direct answer first), which suits scanners and wins AI Overviews and voice snippets.
- Do not restate the same fact across eyebrow, heading and lede.

## 11. Accessibility (WCAG 2.2)
- 1.4.3 Contrast (AA): 4.5:1 / 3:1. 1.4.6 (AAA): 7:1 / 4.5:1.
- 1.4.4 Resize text to 200% without loss; 1.4.10 Reflow at 320px with no horizontal scroll.
- 1.4.12 Text Spacing: layout must survive line-height 1.5, paragraph 2x, letter 0.12em, word 0.16em. Fixed-height text boxes are the usual failure.
- Tap targets about 44 to 48px on mobile. One H1, headings in order. Visible focus ring. Link text meaningful out of context.

## 12. Reading medium
- The differences between print, desktop, mobile and e-ink are smaller than assumed; fatigue over a long session, not raw speed, is the limiting factor. Design long pages for sustained reading: capped measure, comfortable size and leading, generous chunking, and wayfinding (an on-page jump index).
