---
name: Kinetic Sheng
colors:
  surface: '#f1fcf1'
  surface-dim: '#d1ddd2'
  surface-bright: '#f1fcf1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ebf7eb'
  surface-container: '#e5f1e5'
  surface-container-high: '#e0ebe0'
  surface-container-highest: '#dae6da'
  on-surface: '#141e17'
  on-surface-variant: '#414942'
  inverse-surface: '#29332b'
  inverse-on-surface: '#e8f4e8'
  outline: '#717972'
  outline-variant: '#c0c9c0'
  surface-tint: '#33694a'
  primary: '#002f19'
  on-primary: '#ffffff'
  primary-container: '#0d472b'
  on-primary-container: '#7db591'
  inverse-primary: '#9ad3ad'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#4c1700'
  on-tertiary: '#ffffff'
  tertiary-container: '#702500'
  on-tertiary-container: '#ff8856'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b6f0c8'
  primary-fixed-dim: '#9ad3ad'
  on-primary-fixed: '#002110'
  on-primary-fixed-variant: '#195033'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#f1fcf1'
  on-background: '#141e17'
  surface-variant: '#dae6da'
typography:
  display:
    fontFamily: Sora
    fontSize: 3.5rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Sora
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Sora
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.35'
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is crafted for Kenyan youth navigating financial literacy, digital entrepreneurship, and peer-to-peer commerce. It repudiates sterile corporate banking conventions and dry textbook interfaces in favor of an energetic, editorial-meets-street aesthetic inspired by Nairobi’s dynamic matatu culture, modern African graphic novels, and contemporary fintech speed.

The visual style merges structured Neo-Editorial clarity with high-voltage accenting. Layouts celebrate content through punchy editorial framing, bold asymmetrical badge blocks, tactile simulation panels, and rhythmic micro-interactions. The interface communicates solidarity and agency: approachable, sharp, optimistic, and culturally rooted without drifting into cliché tropes.

## Colors

The palette grounds itself in Kenyan environmental and urban realities, blending stability with hyper-lucid energy:

- **Primary (`#0D472B`)**: Deep Kenyan Forest Green. Anchors navigation bars, structural typography, and primary interactive buttons. Communicates foundational trust, wealth creation, and heritage.
- **Secondary (`#10B981`)**: Electric Mint. Acts as a spark color for progress tracks, gamified badges, success states, and micro-rewards. It keeps the aesthetic vibrant and digitally native.
- **Tertiary (`#E06D3B`)**: Rift Terracotta. Utilized for interactive triggers, focus callouts, streak badges, warning states, and peer-to-peer action points.
- **Neutral (`#18221B`)**: Deep Charcoal Green. Provides readable, high-contrast text rendering without the stark sterility of pure `#000000`.
- **Canvas & Surface System**: The background canvas is a warm, unbleached oat tone (`#FBF9F5`), paired with nested card surfaces (`#FFFFFF`) and hairline container perimeter framing (`#E7E2D8`).

## Typography

The type scale combines the geometric punch of **Sora** for headings with the welcoming legibility of **Plus Jakarta Sans** for running body text and UI labels. 

Headings lean into heavy weights (700 and 800) with tight tracking to simulate youth-driven zine headlines, mission statements, and gamified milestones. Body text utilizes standard weights with generous line-heights to support effortless reading during interactive monetary calculations and scenarios. Monospace numerals in interactive slider modules must use tabular numeral variants (`tnum`) to keep dynamic shilling calculations perfectly aligned.

## Layout & Spacing

The layout model runs on a flexible 12-column grid on desktop and tablet, collapsing to a single or 2-column stacked flow on mobile screens. 

- **Grid Parameters**: Outer margins range from `1rem` on mobile (prioritizing screen real estate on budget smartphones) to `3rem` on desktop viewport caps (max container width: `1240px`). Gutters remain tight (`1rem` on mobile, scaling to `1.5rem` on desktop) to retain an athletic, card-rich interface density.
- **Rhythm**: Element spacing follows an intentional 4px base increment. Generous vertical spacing (`space-xl`) between lesson blocks prevents cognitive exhaustion, while simulator controls stay grouped with compact gap spacing (`space-sm` and `space-md`).
- **Mobile First Adaptation**: Interactive elements stack vertically on narrow devices, with full-width bottom sheet drawers taking priority over nested desktop modals.

## Elevation & Depth

Visual hierarchy rejects fuzzy, diffused corporate shadows in favor of crisp, tangible surface mechanics:

- **Border-Anchored Layering**: Cards, buttons, and simulator trays employ a structural `1px` or `1.5px` border in `#E7E2D8` or `#18221B`.
- **Offset Pop Elevation**: Active badges, floating calculator widgets, and focused cards project a distinct directional drop-offset (2px to 4px) rendered in solid forest green (`#0D472B`) with zero blur. This gives components a tangible, comic-book-inspired physical presence.
- **Tonal Stepping**: Secondary cards and scenario step-containers sit on an elevated pure `#FFFFFF` fill to lift cleanly against the `#FBF9F5` base canvas. Glassmorphic frosted overlays are reserved exclusively for fixed mobile bottom-navigation menus, blurred at `12px` over `#FBF9F5` with 85% opacity.

## Shapes

The design system employs a grounded, medium-rounded profile (`roundedness: 2`). Base interactive elements (buttons, inputs, and lesson units) receive `0.5rem` (8px) corner rounding, signaling friendliness and safety.

Large simulator pods, parent containers, and lesson cards expand to `1rem` (16px) or `1.5rem` (24px) for prominent modularity. Gamification pills, status badges, and quick-filter chips utilize full pill geometries (`rounded-full`) to differentiate metadata tags from clickable primary action cards.

## Components

### Buttons & Interactive Controls
- **Primary Action**: Forest Green (`#0D472B`) background with crisp white typography, 12px vertical and 24px horizontal padding, and a firm 2px offset border in deep charcoal. Micro-interaction: Depresses 2px downward on press.
- **Secondary Action**: Warm white background with a `#0D472B` border and typography.
- **Accent Trigger (Streaks / Quizzes)**: Terracotta (`#E06D3B`) fill with high-contrast white text, used for high-velocity user actions like "Bonga Sim", "Submit Budget", or "Start Challenge".

### Simulator Containers & Calculation Cards
- Built on a pure white `#FFFFFF` surface with an `#E7E2D8` hairline border and rounded-xl perimeter.
- Header bars are tinted with a subtle mint wash (`#10B981` at 8% opacity) housing live currency readouts formatted in heavy Sora display numerals (`KES 2,500`).
- Sliders use oversized, finger-friendly track handles with `#0D472B` thumb fills and dynamic electric mint progress tracks.

### Chips & Badges
- Pill-shaped (`rounded-full`), rendered in uppercase or title-case `label-md`.
- Category badges feature low-saturation pastel fills with high-contrast text (e.g., Terracotta-tinted background with `#E06D3B` text for "Side Hustle", and Mint-tinted background with `#0D472B` text for "M-Pesa Ledger").

### Input Fields
- Built with `0.5rem` corner radius, `#FFFFFF` interior fill, and `#E7E2D8` inactive borders.
- Active focus state introduces a solid `2px` ring in `#10B981` accompanied by a crisp label snap transition.

### Checkboxes & Radio Switches
- Large 22px target boundaries for thumb accuracy on mobile devices.
- Checked state activates a rich `#0D472B` fill with a high-contrast `#10B981` tick icon.

### Peer Feed & Milestone Cards
- Asymmetrical split layout: Top header shows peer progress or interactive dialogue bubble, bottom tray houses decision chips ("Save", "Lend", "Invest"). Cards maintain consistent `space-md` inner padding.