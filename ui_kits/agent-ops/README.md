# Agent Ops — UI Kit

Pixel-faithful recreation of the Onyx Agent Ops console (the surface in `assets/reference-agent-ops.png`).

## Files

- `index.html` — entry. Loads React + Babel, mounts `<App/>`.
- `app.jsx` — top-level layout composition.
- `TopBar.jsx` — brand + command bar + status strip.
- `LeftRail.jsx` — Agent Roster + System Health.
- `OrchestrationBoard.jsx` — six-stage Kanban with dotted connections.
- `StageColumn.jsx` — single stage column (header + cards + "+ N more").
- `RunCard.jsx` — single run card (variants: intake / plan / execute / review / blocked / complete).
- `RightRail.jsx` — Run Inspector (selected run details, tools, logs, gate).
- `ParticleWave.jsx` — bottom canvas visualization with agent telemetry markers.
- `data.js` — mock state. Agents, runs, logs.

## Component coverage

- Top bar (brand mark · wordmark · command bar · metric pills · queue depth sparkline)
- Hero metric strip (AGENT OPS · ACTIVE RUNS · COMPLETED · BREACHES · TOKENS · COST)
- Stage column header (label · count · add)
- Run card states: idle, active, breach, complete, with confidence bar
- Dotted run-to-run connectors
- Agent roster row (mark · name · role · confidence)
- System health rail (CPU · memory · latency · error rate · uptime · logs button)
- Run inspector (id · agent/model · tokens/cost · context · tools · logs · next action · human gate)
- Bottom telemetry chart axis (agent ID · t/s rate)
- Crosshair board marks + footer chrome

## Interactions

- Click any run card → opens Run Inspector on the right with that run's details.
- Type in command bar → caret blinks; submit echoes a fake log line.
- "+ N more" footers expand a column to show the rest of its runs.
- The wave background animates continuously.
- Hover any card → border lifts to `--line-active`. No scale.

Built from a single render — no codebase or Figma. Visual fidelity is the goal; interaction is illustrative.
