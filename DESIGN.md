---
version: alpha
name: Onyx
description: Dark-first agent-orchestration control surface — near-black canvas, indigo accent, achromatic structure, warm semantic colors reserved for status. Industrial, dense, instrument-panel aesthetic.
colors:
  primary: "#7B7FFF"
  primary-hover: "#9498FF"
  primary-pressed: "#5C61E6"
  bg: "#06070C"
  bg-1: "#0A0B12"
  bg-2: "#11131C"
  bg-vis: "#08091A"
  fg: "#F4F5FA"
  fg-1: "#B7BBC8"
  fg-2: "#6B7080"
  fg-3: "#3B3F4E"
  line: "#1F2230"
  line-hover: "#2A2D3D"
  line-active: "#3B3F5A"
  warn: "#F2B144"
  danger: "#F2545B"
  ok: "#4ADE9A"
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 96px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  h2:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  h3:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
  mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.14em
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 56px
  gutter: 12px
  card-padding: 16px
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-pressed}"
  button-secondary:
    backgroundColor: "{colors.bg-1}"
    textColor: "{colors.fg}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.md}"
    padding: 12px
  card:
    backgroundColor: "{colors.bg-1}"
    textColor: "{colors.fg}"
    rounded: "{rounded.md}"
    padding: 16px
  chip:
    backgroundColor: "{colors.bg-2}"
    textColor: "{colors.fg-1}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 4px
  input:
    backgroundColor: "{colors.bg-1}"
    textColor: "{colors.fg}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: 8px
---

# Onyx

## Overview

Onyx is the control surface for **agent orchestration** — operators running, monitoring, and intervening in pipelines of autonomous AI workers. The product feels like a cross between a NASA mission-control board, a Kanban dashboard, and a Unix terminal: dense, technical, instrumented, trustworthy.

**Personality.** Industrial, calm, observant. The product narrates what it sees — never sells, never decorates. Every pixel should feel earned by information. High data density is a feature; numbers, IDs, and timestamps are first-class content.

**Audience.** Operators who already know what a token is. Senior SREs, ML platform engineers, agent-systems builders. They want to read state at a glance and act with a keystroke.

**Atmosphere.** Cool, near-monochrome, blue-violet accent. Like an MRI scan or a long-exposure dark room — muted contrast, subtle grain, indigo cast. Never warm overall. Never playful. Never marketing.

## Colors

The palette is rooted in a near-black canvas, cool achromatic structure, a single indigo accent, and three semantic status colors. **No more than five hues should appear in normal use.**

- **Primary (#7B7FFF):** Indigo — the only non-neutral chrome. Used for live status, selected state, focus rings, primary actions, and the particle-wave dots. Reserve it: if everything is accent, nothing is.
- **Canvas (#06070C):** Deep charcoal page background. A single field spans the whole product — no gradients, no images, no texture overlays (except the particle wave at the bottom of the console).
- **Surface (#0A0B12 → #11131C):** Two near-black tiers above canvas for cards and hover/pressed surfaces. Cards never use shadows for elevation; they use line weight + line color.
- **Foreground (#F4F5FA / #B7BBC8 / #6B7080 / #3B3F4E):** A four-step cool gray scale from primary text down to near-disabled. Tracked uppercase labels live at `fg-2`.
- **Lines (#1F2230 → #3B3F5A):** Structural borders. Hover lifts to `line-hover`, selected/focused to `line-active`. All structural lines are 1px.
- **Warn (#F2B144):** Amber. Waiting, medium priority, queued.
- **Danger (#F2545B):** Red. SLA breach, error, high priority.
- **OK (#4ADE9A):** Green. Completion confirm — used sparingly; success is the default, so it rarely needs announcement.

## Typography

Three families, each with a strict role. Mixing roles is the most common way to make Onyx look wrong.

- **Display — Space Grotesk 700.** Wordmarks and hero numerals only (`AGENT OPS`, big metric numbers like `2.4M`, `$38.72`). Heavy, geometric, tight tracking.
- **Sans — Geist (IBM Plex Sans fallback).** Card titles, body, button labels, headings h2/h3. Modern, neutral, high legibility on dark.
- **Mono — JetBrains Mono.** Run IDs (`EXE-2026-0311`), timestamps (`2026-05-26 14:32:18 UTC`), log lines, table values, code, and all uppercase tracked labels (`RUN STATUS`, `QUEUE DEPTH`).

**Casing rules.**

- `UPPERCASE TRACKED` for section labels, status states, table headers — letter-spacing 0.08–0.14em, set in mono.
- `Sentence case` for short titles, card names, inline content.
- Never title case. Never marketing capitalization.

**Voice.** Imperative without pronouns. `Searching Crunchbase…`, `Review & approve`, `Type a command or / for actions…`. Reserve "you" for the marketing site only.

## Layout

Onyx uses a **fixed-frame, scrollable-center** layout, not a fluid grid. The chrome is rigid so the data isn't.

- **Top bar:** 56px tall — brand mark, command bar, status, UTC clock, queue depth.
- **Left rail:** 240px — agent roster + system health.
- **Right rail:** 320px slide-over — Run Inspector, surfaces only when a run is selected.
- **Center:** Orchestration Board — horizontally scrolling column of stages (Intake → Plan → Execute → Review → Blocked → Complete).
- **Footer:** 24px — quiet chrome that always says something true (`SECURE CHANNEL  TLS 1.3`).

Every fixed pane is separated from the center by a 1px border. **Spacing follows a strict 4px base.** Cards have 16px internal padding; stage columns have 12px gutters; dotted connector lines between cards are 1px stroke, 2px dash, 4px gap.

Faint structural texture is allowed at panel edges: a 24px dotted grid at ~6% opacity, plus 10px crosshair `+` glyphs at the four corners of the board. Both reinforce a "blueprint" feel without competing with data.

## Elevation & Depth

Hierarchy is conveyed by **line weight and line color, not shadow.** Cards have a thin 1px border in `line` and no drop shadow; hover lifts the border to `line-hover`; selected state lifts to `line-active` or `primary`. The whole system feels flat and engraved, not layered.

Two exceptions:

- **Inner glow** for active/live states only — `inset 0 0 0 1px primary` paired with a 1px outer fade `0 0 0 1px rgba(123,127,255,0.18)`. This is the *only* way "liveness" is signaled outside of color.
- **Overlay shadow** for the Run Inspector slide-over only — a soft drop (`0 24px 64px -16px rgba(0,0,0,0.6)`) paired with a 4px backdrop blur at 92% opacity. Nothing else in the system uses blur or drop shadow.

## Shapes

Almost flat. The shape language is **instrument panel, not consumer card**.

- `rounded.sm` (2px) — inputs, chips, status pills.
- `rounded.md` (4px) — cards, buttons, panels (this is the default; `--radius`).
- `rounded.lg` (6px) — command bar, major surfaces, overlay edges. **Nothing rounder than 6px.**
- `rounded.full` (9999px) — status dots only, never buttons.

Corners feel engineered, not soft. If a corner ever feels "cute," the radius is wrong.

## Components

Component atoms exist in two visual tiers: **chrome** (buttons, chips, inputs, dots) and **container** (cards, panels, the command bar).

- **Buttons.** Primary uses `primary` background on `bg` text; secondary uses `bg-1` background on `fg` text with a 1px `line` border. Both are set in `label-caps` (uppercase mono), `rounded.md`, 12px padding. Hover: shift to `primary-hover` / `line-hover`. Press: shift to `primary-pressed` / `bg-2`. **Never opacity hover. Never scale.**
- **Chips.** Compact status/filter chips. `bg-2` field, `fg-1` text, `label-caps`, `rounded.sm`. Selected chips swap to a `primary-fade` background with `primary` border.
- **Cards.** Thin 1px border, `rounded.md`, 16px padding, no shadow. Standard layout: header row with ID + timestamp in mono, then a sentence-case title, then a label/value grid (agent · model · tokens · cost · latency), then a 1px confidence bar at the footer.
- **Inputs.** `bg-1` field, `rounded.sm`, `mono` typography. Focused inputs show a 1px `primary` outline at 2px offset — same treatment as the global focus ring.
- **Status dots.** 6px filled circles in `primary` / `warn` / `danger` / `ok`. They **breathe** — 2s ease-in-out opacity 0.55 ↔ 1. The only animation on a static surface.
- **Command bar.** A single full-width input with `rounded.lg`, mono placeholder text (`Type a command or / for actions…`), and a 1px `line` border that lifts to `primary` on focus.

**Motion.** All transitions use `cubic-bezier(0.2, 0.7, 0.1, 1)` (a tight ease-out). Default duration 120ms. Confidence bars fill from left in 480ms. New cards slide in 8px from above with a one-frame `primary` border flash, then settle. **No bounces. No springs. No parallax. No page-load fanfares.**

## Do's and Don'ts

- Do reserve `primary` for live status, selected state, focus rings, and the single most important action per screen.
- Do show units on every number (`24.1K tokens`, `$0.18`, `1.2s latency`, `87%`).
- Do set all IDs, timestamps, and tracked labels in mono.
- Do use 1px borders and color shifts for hierarchy; the system has no shadow vocabulary for cards.
- Do keep ISO-8601 UTC for every timestamp (`2026-05-26 14:32:18 UTC`).
- Don't introduce a sixth hue. The five-color rule (canvas, fg, accent, warn/danger, ok) is the system.
- Don't use emoji — not in product, not in marketing, not in copy. Status is dots and uppercase labels.
- Don't use title case or marketing capitalization (`Cutting-Edge AI`). Sentence case or uppercase tracked only.
- Don't animate on hover with opacity or scale. Border-color only.
- Don't add drop shadows to cards. Don't add radii above 6px. Don't add gradients except the particle wave.
- Don't use decorative icons. Icons are wayfinders (Lucide, 1.5px stroke, 14–16px, `fg-2`); illustration is not part of the language.
- Don't use "you" outside the marketing site. The product narrates what it sees.
