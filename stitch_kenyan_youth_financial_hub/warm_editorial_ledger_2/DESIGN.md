---
name: Warm Editorial Ledger
colors:
  surface: '#fdf9ef'
  surface-dim: '#dddad0'
  surface-bright: '#fdf9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3e9'
  surface-container: '#f1eee4'
  surface-container-high: '#ece8de'
  surface-container-highest: '#e6e2d8'
  on-surface: '#1c1c16'
  on-surface-variant: '#404944'
  inverse-surface: '#31312a'
  inverse-on-surface: '#f4f0e7'
  outline: '#707974'
  outline-variant: '#c0c9c2'
  surface-tint: '#306854'
  primary: '#003223'
  on-primary: '#ffffff'
  primary-container: '#0b4a37'
  on-primary-container: '#7fb9a0'
  inverse-primary: '#98d3b9'
  secondary: '#835400'
  on-secondary: '#ffffff'
  secondary-container: '#feb958'
  on-secondary-container: '#734a00'
  tertiary: '#561100'
  on-tertiary: '#ffffff'
  tertiary-container: '#7d1e00'
  on-tertiary-container: '#ff8e6f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4efd5'
  primary-fixed-dim: '#98d3b9'
  on-primary-fixed: '#002116'
  on-primary-fixed-variant: '#14503d'
  secondary-fixed: '#ffddb5'
  secondary-fixed-dim: '#feb958'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#852405'
  background: '#fdf9ef'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d8'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 34px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system pairs classic bookkeeping tactility with the elevated layout discipline of literary publications. It evokes the quiet, confident luxury of archival cream paper, bespoke debossing, ruled margins, and fountain pen ink. 

Designed for deliberate financial tracking, archival publishing, and curated wealth management, this system values permanence over novelty. The visual mood is grounded, studious, and unhurried. 

Stylistically, the aesthetic merges Warm Editorial with Tactile Ledger:
- Crisp rules (fine 1px ledger lines) acting as structural dividers.
- Dense data presented through spacious, rhythmically disciplined editorial typography.
- Deliberate use of creamy paper surfaces, preventing eye fatigue while imbuing every interaction with tactile depth.

## Colors
The palette is derived from classic bookbinding materials: rag paper, deep archival hunter ink, brass clasps, and wax seals.

- **Primary (`#0B4A37` / Deep Editorial Green):** The primary anchor used for definitive headlines, key action elements, dominant states, and grounding surfaces. Deep variant `#052A1E` provides high-contrast text rendering and solid headers.
- **Secondary (`#C4872A` / Ochre Gold):** Used for elevated highlights, active row indicators, focus rings, and secondary milestones. Subtle tint `#E8CB92` functions as delicate column washes, badge fills, and hover highlights.
- **Tertiary (`#C24F2E` / Coral Red):** Reserved strictly for debits, deficit notations, warnings, destructive triggers, and editorial errata notices.
- **Neutral Surface Palette:**
  - Base Sheet (`#FAF6EC`): Default canvas tone simulating heavy-stock unbleached vellum.
  - Recessed Sheet (`#F3EBDC`): Inset containers, data table headers, and sidebar fills.
  - Pristine Overlay (`#FFFDF8`): Elevating card faces, active ledger records, and modal backings.
- **Border & Rule Token:** Use `#E2D9C8` for standard ledger gridlines and `#C9BC9F` for definitive bounding borders.

## Typography
Typographic treatment balances the literature of finance with crisp digital legibility. 

- **Headlines (Newsreader):** Brings vintage editorial authority, optical refinement, and human warmth. It features soft transitional brackets that evoke ink pressing into paper. Always style titles and section leads in sentence case.
- **Body & Data (Inter):** Supplies neutral, objective precision. Tabular lining figures (`font-variant-numeric: tabular-nums`) must be enabled on all numeric, currency, date, and ledger rows to guarantee uniform vertical alignment.
- **Labels & Micro-copy:** Uppercase or tracking-boosted small caps configured with high letter spacing (`0.06em` to `0.08em`) to mirror archival section tabs and physical ledger stamps.

## Layout & Spacing
Layout architecture prioritizes strict tabular rhythm, rhythmic margins, and clear horizontal banding.

- **Grid Architecture:** Desktop screens utilize a 12-column fluid grid framed within a maximum container width of `1280px`. Breakpoint transitions occur at `768px` (tablet) and `480px` (mobile).
- **Ledger Rule System:** Layout boundaries rely on razor-thin borders (`1px solid #E2D9C8`) rather than wide white space. Horizontal division lines separate sections systematically, evoking classic bound logbooks.
- **Rhythm & Safe Insets:** Page margins drop from `2.5rem` down to `1rem` on mobile. Component nesting follows steady 8px increments (`space-sm`, `space-md`, `space-lg`), keeping information dense, scannable, and orderly.

## Elevation & Depth
The system rejects blurred, synthetic floating shadows. Depth is achieved via paper tiers, ruled borders, and subtle stamped indentations.

- **Tonal Layers:** The primary depth mechanic. Background starts at `#FAF6EC`. Surface modules (sheets, cards, dialogs) sit on `#FFFDF8`. Recessed or read-only panels settle back to `#F3EBDC`.
- **Low-Contrast Outlines & Rules:** Every elevated surface features a defined boundary: `1px solid #E2D9C8`. Floating states do not expand with large drop shadows; instead, borders shift toward the accent tone (`#C4872A`) or deep green (`#0B4A37`).
- **Tactile Insets:** Input fields, dropdown triggers, and empty ledger states employ an inner offset trace (`inset 0 1px 2px rgba(11, 74, 55, 0.05)`) mimicking a fine letterpress indentation on thick paper.

## Shapes
Geometry is restrained, crisp, and bookish. Soft corners (`roundedness: 1` — 4px base radius) soften the sharp industrialism without introducing juvenile bubbly forms.

- **Base Radius (0.25rem / 4px):** Applied to inputs, buttons, chips, and small table cells.
- **Container Radius (0.5rem / 8px):** Applied to primary cards, modal sheets, and journal entry blocks.
- **Dividers & Badges:** Badges maintain the 4px curvature. Pill shapes and circular components are explicitly avoided, except for user profile emblems or compact iconography.

## Components

### Buttons
- **Primary:** Background in Deep Editorial Green (`#0B4A37`), text in `#FFFDF8`. Crisp 4px border radius. Hover shifts to `#052A1E` with an imperceptible inward outline tint.
- **Secondary / Outline:** Background in transparent paper tone, border `1px solid #0B4A37`, text `#0B4A37`. Hover fills with `#FAF6EC`.
- **Tertiary / Journal Action:** Borderless button with underlined Newsreader or tracking-spaced Inter Label styling, accompanied by small glyphs.

### Chips & Badges
- **Status Badges:** Small padding (`0.25rem 0.5rem`), uppercase `label-sm` font.
  - Balanced/Settled: Surface `#FAF6EC`, text `#0B4A37`, border `1px solid #0B4A37`.
  - Pending/Accrual: Surface `#F3EBDC`, text `#C4872A`, border `1px solid #E8CB92`.
  - Discrepancy/Alert: Surface `#FAF6EC`, text `#C24F2E`, border `1px solid #C24F2E`.

### Ledger Tables & Lists
- Table headers use `#F3EBDC` backgrounds with uppercase tracked micro-labels (`label-md`) and a definitive bottom border (`2px solid #0B4A37`).
- Alternating rows keep to `#FFFDF8` and transparent tones. Row hover triggers a subtle Ochre border highlight (`#C4872A`).
- All numeric data aligns flush right with active tabular figures.

### Form Inputs & Selectors
- Constructed with `#FFFDF8` backgrounds, framed with `1px solid #E2D9C8`.
- Focus states apply a double-rule illusion: a crisp ring of `1px solid #0B4A37` accented with an outer glow of `2px solid rgba(196, 135, 42, 0.25)`.
- Labels sit outside the field in uppercase medium Inter. Helper texts utilize italicized body-sm.

### Checkboxes & Radio Elements
- Checkboxes use square frames with 2px corner radius, drawn with `1.5px solid #0B4A37`. Checked fill utilizes Deep Editorial Green with an unbleached cotton checkmark `#FFFDF8`.
- Radios feature concentric circular rings with matching forest-green fill.

### Cards & Ledger Folios
- Outlined panels layered over `#FAF6EC` with `#FFFDF8` paper backdrops.
- Headers are separated from content with fine horizontal rules (`1px solid #E2D9C8`).
- Footer actions maintain deliberate breathing room, grounding cards like balance-sheet summaries.