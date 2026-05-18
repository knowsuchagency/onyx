# Onyx Design System

> Orchestration OS for AI agents — a control surface for operators running fleets of autonomous workers.

## What Onyx is

Onyx is an **agent orchestration platform**. Operators run, monitor, and intervene in pipelines of AI agents that plan, research, execute, review, and ship work. The product feels like a cross between a NASA mission-control board, a Kanban dashboard, and a Unix terminal — dense, technical, instrumented, and trustworthy.

The flagship surface is **Agent Ops** — a real-time Orchestration Board with stages (Intake → Plan → Execute → Review → Blocked → Complete), per-run inspectors, an agent roster, system-health telemetry, and a command bar driven by slash actions.

## Products / surfaces

| Surface | What it is |
|---|---|
| **Agent Ops Console** | The desktop control room. Orchestration Board, Run Inspector, command bar, system health. (Primary UI kit.) |
| **Onyx Marketing Site** | Public landing — what Onyx is, who it's for, pricing. (Secondary UI kit.) |

## Sources

The only source provided for this system is a single reference image:

- `uploads/Generated image 1.png` — full-bleed render of the Agent Ops Orchestration Board, captured at v1.0. Copied into `assets/reference-agent-ops.png`.

No codebase, no Figma file, no copy doc. **All tokens, components, and motion behavior in this system are extrapolated from that single render plus the product brief.** Where I had to fill gaps (microcopy, secondary screens, hover/press states, motion curves), I did so in keeping with the aesthetic and flagged the substitutions inline in `VISUAL_FOUNDATIONS` and `ICONOGRAPHY`.

## Index

Root files (read these first):

- `README.md` — this file. Brand context, content rules, visual foundations.
- `SKILL.md` — entry point if this folder is loaded as an Agent Skill.
- `colors_and_type.css` — design tokens (CSS custom properties) for color, type, spacing, radii, shadows, motion.
- `preset.json` — shadcn registry-item preset. Applies the Onyx tokens to any shadcn project.

Folders:

- `assets/` — logos, the reference image, any raster/SVG art.
- `fonts/` — webfont files (none vendored yet; system loads from Google Fonts CDN).
- `preview/` — small HTML cards rendered in the Design System tab.
- `ui_kits/agent-ops/` — Agent Ops console UI kit (React/JSX). `index.html` is the interactive entry point.
- `ui_kits/marketing/` — Marketing site UI kit.

## Using as a shadcn preset

`preset.json` packages the Onyx tokens as a shadcn [registry-item](https://ui.shadcn.com/schema/registry-item.json) (Tailwind v4). To apply it to any shadcn-initialized project:

```bash
npx shadcn@latest add https://raw.githubusercontent.com/knowsuchagency/onyx/main/preset.json
```

What lands in your project:
- `:root` / `.dark` CSS variables — `--background`, `--foreground`, `--primary`, `--border`, `--radius`, `--chart-1..5`, etc. mapped to Onyx's near-black canvas + indigo accent. Dark is the canonical theme; a respectful light inverse is included so shadcn's theme toggle keeps working in consumer projects.
- An `@theme inline` block exposing the full Onyx palette as Tailwind utilities — `bg-onyx-bg`, `text-onyx-fg`, `border-onyx-line`, `bg-onyx-accent`, `bg-onyx-warn`, `text-onyx-danger`, `bg-onyx-ok`, `font-display`, `font-mono`, `ease-onyx`, and friends.
- Default `--radius: 0.25rem` (4px — Onyx's `--radius-md`). `radius-sm/md/lg/xl` cascade off `--radius`; opt into precise 2 / 4 / 6px via `rounded-onyx-sm` / `rounded-onyx-md` / `rounded-onyx-lg`.
- `::selection` and `:focus-visible` overrides that match the operator-tool accessibility defaults — indigo selection, 1px indigo focus ring at 2px offset.

**Fonts are not bundled.** The preset declares `font-display` / `font-sans` / `font-mono` families but does not load the webfonts. Add the imports to your project's `globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

Prerequisites: a project with `components.json` (run `npx shadcn@latest init` if needed) and Tailwind v4.

## Content fundamentals

Onyx copy is the voice of an instrument, not a salesperson. Short, declarative, technically literal.

**Tone.** Direct, calm, observant. Sounds like a senior SRE writing log lines: no hype, no exclamations, no flourish. The product narrates what it sees. The reader is an operator who already knows what a token is.

**Casing.**

- **UPPERCASE TRACKED** for section labels, status states, table headers, and column titles in the console. Examples: `RUN STATUS`, `ACTIVE`, `QUEUE DEPTH`, `AGENT ROSTER`, `SYSTEM HEALTH`. Letter-spacing ≈ 0.08–0.14em.
- **Sentence case** for short titles, card names, and inline content. Examples: `Market analysis plan`, `Search funding data`, `Need API access for Crunchbase`.
- **Display heavy caps** for product wordmarks and hero numerals: `AGENT OPS`, big metric numbers (`2.4M`, `$38.72`).
- Never title case. Never marketing capitalization (`Cutting-Edge AI`).

**Pronouns.** Generally avoid both *I* and *you*. The product names the thing happening (`Searching Crunchbase…`, `Aggregating funding data…`). When the user must act, use imperative second person without the pronoun (`Review & approve`, `Type a command or / for actions…`). Reserve "you" for marketing only.

**Vibe.** Industrial. Quiet. High-information density is a feature. Numbers, IDs, timestamps, and metrics are first-class content — they should never be apologized for or hidden.

**Specific examples (lifted from the reference render):**

- `RUN STATUS  •  ACTIVE` — single-word state, dot + uppercase.
- `2026-05-26 14:32:18 UTC` — ISO-8601, UTC, always.
- `EXE-2026-0311` — `<STAGE>-<YEAR>-<SEQUENCE>` run IDs. Stages: `INT`, `PLN`, `EXE`, `REV`, `BLK`, `CMP`.
- `Searching Crunchbase…` / `Retrieved 120 results` / `Filtering by date range…` — present continuous, terminal-style, no period before the ellipsis.
- `This step requires human approval.` — full sentence with period, used for gating prompts.
- `MADE WITH GPT FOR BEN` / `SECURE CHANNEL  TLS 1.3` — footer chrome, uppercase mono.

**Emoji.** Never. Status is communicated with colored dots, glyph chips, and uppercase labels. The only "pictographic" element you'll see is a tiny ⚠ for SLA breaches and ✓ for completion — and even these are sparing.

**Numbers.** Show units. `24.1K tokens`, `$0.18`, `1.2s latency`, `87%`. Abbreviate large numbers with K/M only; don't write "thousand."

## Visual foundations

**Color vibe.** Near-black canvas, cool blue-violet primary, achromatic grays for structure, warm amber/red exclusively for risk states. Never warm overall — Onyx is cold light on dark glass.

**Background.** Single deep-charcoal field (`--bg`, ~#06070C) across the whole product. Bottom of the console fades into a particle wave visualization (`--bg-vis`, slightly lifted #0A0C18) — a soft, generative pattern of indigo dots forming a 3D wave. No images. No gradients except the wave. No skeuomorphism. No texture overlays.

**Type.** Three families:

- `--font-display` — Space Grotesk 700. Big numerals, wordmarks, hero titles.
- `--font-sans` — Geist (or IBM Plex Sans fallback). Card titles, body, button labels.
- `--font-mono` — JetBrains Mono. Run IDs, log lines, tracked uppercase labels, table values, code.

*Substitution note: original render's display face is unidentifiable from a single image. Closest free match is Space Grotesk 700. Flagged for the user to confirm or supply the real face.*

**Spacing.** 4px base unit. Cards have 16–20px internal padding. Stage columns have 12px gutters. Dotted-line connections between cards are exactly 1px stroke, 2px dash, 4px gap.

**Borders.** All structural lines are **1px**, near-monochrome (`--line`, ~#1F2230). Selected/hovered state lifts to indigo (`--line-active`, ~#3B3F5A) — no other change. Cards never use shadows for elevation; they use line weight + line color.

**Radii.** Almost flat. `--radius-sm: 2px` for inputs/chips, `--radius-md: 4px` for cards, `--radius-lg: 6px` for the command bar and major panels. Nothing rounder than 6px. The aesthetic is "instrument panel," not "consumer card."

**Shadows.** None for elevation. The system uses **inner glow** sparingly for active/live states (`box-shadow: inset 0 0 0 1px var(--accent), 0 0 0 1px var(--accent-fade)`). Reserve drop shadows for the Run Inspector overlay only.

**Cards.** Thin 1px border, no radius beyond 4px, 16px padding, no shadow. Header row with ID + timestamp in mono, then a sentence-case title, then a label/value grid of agent · model · tokens · cost · latency. Footer row with a horizontal "confidence" bar (1px tall, indigo on neutral). Cards are connected by dotted lines (CSS `border-image` or inline SVG).

**Backgrounds & textures.**

- **Dotted grid** at large panel edges (3px × 3px dots, 24px grid, ~6% opacity) — used as a faint corner texture, not a full overlay.
- **Crosshair marks** at the four corners of the orchestration board (small `+` glyphs, 10px), for "blueprint" feel.
- **Particle wave** at the bottom of the console (canvas/SVG). Indigo dots forming a soft 3D landscape.
- No photographs. No illustrations. No gradients other than the wave fade.

**Animation.**

- All transitions on `cubic-bezier(0.2, 0.7, 0.1, 1)` (a tight ease-out). Default duration `120ms`.
- Status dots **breathe**: 2s ease-in-out opacity 0.6 ↔ 1.
- Confidence bars **fill from left** on mount, 480ms.
- New cards **slide in 8px from above with a 1-frame indigo border flash**, then settle.
- Numbers in the metric strip **tick** (no flip animation; just `transition: color 120ms` with a 1-frame indigo highlight on change).
- No bounces. No springy easings. No parallax. No page-load fanfares.

**Hover.** Only border-color change to `--line-active` and an optional `--fg` text bump from `--fg-2` to `--fg`. Never opacity. Never scale.

**Press / active.** Background tint to `--bg-2` (one notch lighter charcoal). No scale, no shadow shift.

**Focus.** 1px indigo outline at 2px offset, always visible — this is an operator tool; accessibility wins.

**Selection.** Indigo at 30% opacity for text selection.

**Transparency & blur.** Used only for the Run Inspector panel sliding over the board — `backdrop-filter: blur(4px) saturate(120%)` over a 92%-opaque charcoal. Nothing else in the system uses blur.

**Imagery vibe.** Cool, near-monochrome, blue-violet accent. If photography is ever used (marketing site), it should feel like an MRI scan or a long-exposure dark room: muted contrast, subtle grain, indigo cast. No warm tones.

**Layout rules.**

- Fixed top bar (56px) with brand, command, status, time, queue depth.
- Fixed left rail (240px) with agent roster + system health.
- Fixed right rail (320px, slide-over) with Run Inspector when a run is selected.
- Center is the Orchestration Board — horizontally scrolling column of stages.
- Footer (24px) with footnote chrome.
- Every fixed pane has a 1px right/left/bottom border separating it from the center.

**Voice of the chrome.** Even non-functional chrome speaks. The footer always says something true (`SECURE CHANNEL  TLS 1.3`). Empty states explain in one short line (`No runs blocked.`).

## Iconography

See dedicated section at the bottom of this README for full rules. Short version: **no decorative icons.** Onyx uses tiny status glyphs (dots, `+`, `→`, `✓`, `⚠`, crosshair `⌖`) drawn as SVG primitives or unicode. For the few utility icons needed (search, plus, close, chevron, external-link, copy), we use **Lucide** at 1.5px stroke, sized 14–16px, in `--fg-2`. Never filled, never colored.

---

## ICONOGRAPHY

**Approach.** Iconography in Onyx is **structural, not decorative**. Icons are wayfinders, not garnish. The system contains:

1. **Status glyphs** (drawn primitively, ~10–14px):
   - `•` filled dot — state indicator (color carries meaning: indigo = live, amber = waiting, red = breach, gray = idle)
   - `+` plus — add affordances (column add-card)
   - `✓` check — complete
   - `⚠` warning — SLA breach
   - `→` arrow — flow direction
   - `⌖` crosshair — board corner marks
   - `↗` external — opens new view

2. **Utility icons (Lucide, CDN-linked)** — used for affordances in the command bar, run inspector, and any future settings/marketing surfaces. Settings: stroke 1.5, size 14–16px, color `--fg-2` default / `--fg` on hover.
   - Reasoning: no proprietary icon set was provided. Lucide is the closest match for the system's hairline-stroke, geometric aesthetic. **Substitution flagged.**

3. **Brand glyph** — a 16×16 indigo square mark (`■`) prefixing `BEN.SYSTEMS` in the top bar and used as the favicon and section bullets in the left rail. This is the **only** brand mark in the product. It is rendered as CSS, not SVG: `width: 12px; height: 12px; background: var(--accent);` — no image asset is required.

**Emoji.** Never. Not in product, not in marketing, not in copy.

**Unicode glyphs.** Used freely for the status glyph set above. Should be set in `--font-mono` so glyph widths stay consistent with surrounding labels.

**SVGs.** Custom illustration is not part of the language. If you find yourself reaching for an illustration, instead: increase information density, show a real chart, or show real data.

**File-system assets** (in `assets/`):

- `logo.svg` — Onyx wordmark (text-only).
- `mark.svg` — the indigo square brand mark.
- `reference-agent-ops.png` — original render, kept for visual reference.
