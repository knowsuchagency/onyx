---
name: onyx-design
description: Use this skill to generate well-branded interfaces and assets for Onyx, the AI agent orchestration platform. Contains essential design guidelines, color tokens, type system, fonts, brand assets, and React UI kit components for prototyping the Agent Ops console, marketing surfaces, or any other Onyx-flavored artifact.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `ui_kits/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, single-page demos), copy assets out of `assets/` and the relevant `ui_kits/*/` folder, then create static HTML files for the user to view. Always link or `@import` `colors_and_type.css` so tokens stay consistent.

If working on production code, copy the assets and read the rules here to become an expert in designing with this brand. The CSS variables in `colors_and_type.css` are the source of truth — copy them into the production codebase or map them to whatever token system is in use.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few focused questions (audience, surface, fidelity, constraints), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Defaults to remember:
- Onyx is dark-first. There is no light theme by default.
- The accent color is a single indigo. Don't introduce new colors.
- Type is Space Grotesk (display) / Geist (body) / JetBrains Mono (labels & IDs). The display face is a substitution — flag this if the user cares.
- Voice is terminal-honest: short, declarative, no exclamations, no emoji.
- Iconography is structural: status dots, mono glyphs, Lucide for utility. Never illustrative.
- Borders, not shadows. Almost-flat radii (max 6px). Motion is tight ease-out, no bounce.
