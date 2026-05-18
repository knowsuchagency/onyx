// OrchestrationBoard.jsx — hero strip + stage columns + bottom telemetry
function OrchestrationBoard({ selectedRunId, onCardClick }) {
  const m = window.OnyxData.metrics;
  const stages = window.OnyxData.stages;
  const tel = window.OnyxData.telemetry;

  return (
    <div className="board">
      {/* corner crosshairs */}
      <Crosshair pos="tl" /><Crosshair pos="tr" /><Crosshair pos="bl" /><Crosshair pos="br" />

      <div className="hero">
        <div className="hero-left">
          <div className="hero-title">
            AGENT OPS<span className="reg">®</span>
          </div>
          <div className="hero-sub">ORCHESTRATION BOARD</div>
        </div>
        <div className="hero-metrics">
          <div className="hm-grid">
            <div className="hm">
              <div className="hm-k">ACTIVE RUNS</div>
              <div className="hm-v">{m.activeRuns}</div>
            </div>
            <div className="hm">
              <div className="hm-k">COMPLETED (24H)</div>
              <div className="hm-v">{m.completed}</div>
            </div>
            <div className="hm">
              <div className="hm-k">SLA BREACHES</div>
              <div className="hm-v alert">{m.breaches} <span className="warn-glyph">⚠</span></div>
            </div>
            <div className="hm">
              <div className="hm-k">TOKENS (24H)</div>
              <div className="hm-v">{m.tokens}</div>
            </div>
            <div className="hm">
              <div className="hm-k">EST. COST (24H)</div>
              <div className="hm-v">{m.cost}</div>
            </div>
            <div className="hm"></div>
          </div>
        </div>
        <div className="hero-radar">
          <Radar />
        </div>
      </div>

      <div className="stages">
        {stages.map(stage => (
          <StageColumn
            key={stage.id}
            stage={stage}
            selectedRunId={selectedRunId}
            onCardClick={onCardClick}
          />
        ))}
      </div>

      <div className="telemetry">
        <div className="tel-bg"><ParticleWave /></div>
        <div className="tel-ticks">
          {tel.map(t => (
            <div key={t.id} className="tel-tick">
              <div className="tel-id">{t.id}</div>
              <div className="tel-rate">{t.rate}</div>
              <div className="tel-mark">+</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Crosshair({ pos }) {
  return (
    <svg className={`crosshair ch-${pos}`} viewBox="0 0 24 24" width="20" height="20">
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1"/>
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
}

function Radar() {
  // crosshair + dot grid
  return (
    <svg viewBox="0 0 160 80" width="160" height="80" className="radar-svg">
      <defs>
        <pattern id="radar-dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="rgba(123,127,255,0.5)"/>
        </pattern>
      </defs>
      <rect width="160" height="80" fill="url(#radar-dots)"/>
      <line x1="80" y1="20" x2="80" y2="60" stroke="rgba(123,127,255,0.6)" strokeWidth="0.6"/>
      <line x1="60" y1="40" x2="100" y2="40" stroke="rgba(123,127,255,0.6)" strokeWidth="0.6"/>
      <circle cx="80" cy="40" r="10" fill="none" stroke="rgba(123,127,255,0.6)" strokeWidth="0.6"/>
      <circle cx="80" cy="40" r="3" fill="rgba(123,127,255,0.4)"/>
    </svg>
  );
}

window.OrchestrationBoard = OrchestrationBoard;
