#!/usr/bin/env python3
"""
contrast_check.py — WCAG contrast and line-length helpers for the ABE readability audit.

The hard, error-prone parts of a readability audit are the colour-contrast sums
(especially from oklch tokens) and translating a column width into characters per
line. This script does both deterministically so the audit does not eyeball them.

Usage
-----
  # Run the ABE token pairs table (default):
  python contrast_check.py

  # Check one foreground/background pair (hex, rgb(), or oklch()):
  python contrast_check.py "#800000" "oklch(98.2% 0.004 240)"

  # Estimate characters-per-line for a column width and body size:
  python contrast_check.py --cpl 600 16

Accepts colours as hex (#rgb or #rrggbb), "rgb(r,g,b)", or
"oklch(L C H)" where L may be a percent (18%) or 0..1 (0.18).
"""

import math
import re
import sys


# ---------- colour parsing ----------

def _srgb_to_linear(c):
    c = c / 255.0
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def _oklch_to_linear_srgb(L, C, H):
    """Bjorn Ottosson's OKLab/OKLCH -> linear sRGB reference transform."""
    h = math.radians(H)
    a = C * math.cos(h)
    b = C * math.sin(h)

    l_ = L + 0.3963377774 * a + 0.2158037573 * b
    m_ = L - 0.1055613458 * a - 0.0638541728 * b
    s_ = L - 0.0894841775 * a - 1.2914855480 * b

    l, m, s = l_ ** 3, m_ ** 3, s_ ** 3

    r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s
    g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
    bl = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    # clamp out-of-gamut values into [0, 1]
    return tuple(min(1.0, max(0.0, v)) for v in (r, g, bl))


def parse_color_to_linear(s):
    """Return (R_lin, G_lin, B_lin) in 0..1 for any supported colour string."""
    s = s.strip()

    m = re.match(r"oklch\(\s*([0-9.]+%?)\s+([0-9.]+)\s+([0-9.]+)\s*\)", s, re.I)
    if m:
        Lraw, C, H = m.group(1), float(m.group(2)), float(m.group(3))
        L = float(Lraw[:-1]) / 100.0 if Lraw.endswith("%") else float(Lraw)
        return _oklch_to_linear_srgb(L, C, H)

    m = re.match(r"rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)", s, re.I)
    if m:
        return tuple(_srgb_to_linear(int(m.group(i))) for i in (1, 2, 3))

    if s.startswith("#"):
        h = s[1:]
        if len(h) == 3:
            h = "".join(ch * 2 for ch in h)
        r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
        return tuple(_srgb_to_linear(v) for v in (r, g, b))

    raise ValueError(f"Unrecognised colour: {s!r}")


# ---------- WCAG contrast ----------

def relative_luminance(linear_rgb):
    r, g, b = linear_rgb
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast_ratio(fg, bg):
    l1 = relative_luminance(parse_color_to_linear(fg))
    l2 = relative_luminance(parse_color_to_linear(bg))
    lighter, darker = max(l1, l2), min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)


def classify(ratio):
    """Return a compact pass/fail string for the four WCAG thresholds."""
    def mark(ok):
        return "PASS" if ok else "fail"
    return (
        f"AA-normal {mark(ratio >= 4.5)} | AA-large {mark(ratio >= 3.0)} | "
        f"AAA-normal {mark(ratio >= 7.0)} | AAA-large {mark(ratio >= 4.5)}"
    )


# ---------- ABE token palette (from the styleguide Conventions) ----------
# Update these if the tokens change; the audit reads current values from
# references/abe-baseline.md and these should match.

ABE = {
    "bg": "oklch(98.2% 0.004 240)",        # Newsprint Cream-1, page ground
    "bg-alt": "oklch(96.0% 0.006 240)",    # Cream-2, alternating ground
    "bg-deep": "oklch(93.5% 0.008 240)",   # Cream-3, nested cards
    "ink": "oklch(18% 0.020 240)",         # Document Ink, primary type
    "ink-2": "oklch(35% 0.018 240)",       # descriptions
    "ink-3": "oklch(50% 0.014 240)",       # mono caps labels, dotted-link default
    "ink-4": "oklch(62% 0.012 240)",       # section numbers, disabled
    "accent": "#800000",                   # Document Maroon, CTAs / links
    "accent-deep": "#500000",
    "info": "oklch(46% 0.16 235)",         # Regulator Blue
    "info-deep": "oklch(32% 0.12 235)",
    "info-wash": "oklch(95% 0.025 235)",
    "info-on-dark": "oklch(78% 0.08 235)",
    "success-deep": "oklch(40% 0.10 150)",
    "success-wash": "oklch(96% 0.022 150)",
    "warning-deep": "oklch(47% 0.10 74)",
    "warning-wash": "oklch(96% 0.035 74)",
    "error-deep": "oklch(42% 0.16 27)",
    "error-wash": "oklch(96% 0.03 27)",
}

# (foreground, background, typical use, is this text usually small?)
PAIRS = [
    ("ink", "bg", "body text on page ground", False),
    ("ink", "bg-alt", "body text on alt ground", False),
    ("ink-2", "bg", "descriptions / sub-taglines", False),
    ("ink-3", "bg", "mono caps labels, dotted links (small)", True),
    ("ink-4", "bg", "section numbers / disabled (small)", True),
    ("accent", "bg", "maroon link / CTA text", False),
    ("accent", "bg-alt", "maroon link on alt ground", False),
    ("info-deep", "info-wash", "blue chip text on its wash", True),
    ("success-deep", "success-wash", "success label on its wash", True),
    ("warning-deep", "warning-wash", "warning label on its wash", True),
    ("error-deep", "error-wash", "error label on its wash", True),
    ("bg", "ink", "cream text on dark ink plate", False),
    ("info-on-dark", "ink", "blue label on dark ink plate", True),
]


def run_palette():
    print("ABE token contrast audit (WCAG 2.2)\n")
    print(f"{'foreground / background':<34}{'ratio':>7}   {'verdict (small text needs AA-normal 4.5:1)'}")
    print("-" * 100)
    for fg, bg, use, small in PAIRS:
        ratio = contrast_ratio(ABE[fg], ABE[bg])
        flag = ""
        if small and ratio < 4.5:
            flag = "  <-- small text below AA"
        elif not small and ratio < 4.5:
            flag = "  <-- below AA"
        print(f"{fg + ' / ' + bg:<34}{ratio:>6.2f}:1  {classify(ratio)}{flag}")
        print(f"{'    ' + use:<34}")
    print("\nNote: 'small text' rows carry labels/footnotes at 10-11px; treat AA-normal (4.5:1) as the bar.")


# ---------- characters per line ----------

def estimate_cpl(width_px, font_px, avg_advance_em=0.5):
    """Rough characters-per-line. Public Sans averages ~0.5em per glyph."""
    return width_px / (avg_advance_em * font_px)


def run_cpl(width_px, font_px):
    cpl = estimate_cpl(width_px, font_px)
    target = "ideal (60-66)" if 60 <= cpl <= 66 else \
             "comfortable (45-75)" if 45 <= cpl <= 75 else \
             "TOO WIDE (>75) — cap the column" if cpl > 75 else \
             "too narrow (<45)"
    print(f"Column {width_px:.0f}px at {font_px:.0f}px body  ->  ~{cpl:.0f} characters/line  [{target}]")
    if cpl > 75:
        ideal_w = 0.5 * font_px * 66
        print(f"  For ~66 characters, set max-width to about {ideal_w:.0f}px (~{ideal_w/16:.0f}rem, or use max-width: 66ch).")


# ---------- entry ----------

def main(argv):
    if len(argv) >= 3 and argv[0] == "--cpl":
        run_cpl(float(argv[1]), float(argv[2]))
        return
    if len(argv) >= 2:
        fg, bg = argv[0], argv[1]
        ratio = contrast_ratio(fg, bg)
        print(f"{fg}  on  {bg}")
        print(f"contrast {ratio:.2f}:1   {classify(ratio)}")
        return
    run_palette()


if __name__ == "__main__":
    main(sys.argv[1:])
