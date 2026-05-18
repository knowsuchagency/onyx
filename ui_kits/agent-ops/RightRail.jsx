// RightRail.jsx — Run Inspector
function RightRail({ run, onClose }) {
  if (!run) return null;

  return (
    <aside className="right-rail">
      <div className="ri-head">
        <span className="ri-head-title">
          <span className="dot" /><span>RUN INSPECTOR</span>
        </span>
        <div className="ri-head-actions">
          <button className="ri-min" title="Minimize">—</button>
          <button className="ri-close" onClick={onClose}>✕</button>
        </div>
      </div>

      <div className="ri-id-row">
        <div className="ri-id">{run.runId}</div>
        <div className="ri-live"><span className="dot" /> LIVE</div>
      </div>
      <div className="ri-sub">{run.title}</div>

      <span className={`ri-state state-${run.state.toLowerCase()}`}>{run.state}</span>

      <div className="ri-grid">
        <KV k="AGENT" v={run.agent} />
        <KV k="MODEL" v={run.model} />
        <KV k="STARTED" v={run.started} />
        <KV k="ELAPSED" v={run.elapsed} />
        <KV k="CONFIDENCE" v={
          <span className="kv-conf-row">
            <span>{run.confidence}%</span>
            <span className="kv-conf-bar"><span style={{ width: run.confidence + '%' }} /></span>
          </span>
        } />
      </div>

      <Subsection title="CONTEXT & MEMORY">
        <KV k="SHORT TERM" v={run.shortTerm} />
        <KV k="LONG TERM"  v={run.longTerm} />
      </Subsection>

      <Subsection title="TOOLS">
        {run.tools.map((t, i) => (
          <div key={i} className="tool-row">
            <span className="tool-k">{t.k}</span>
            <span className={`tool-led ${t.on ? 'on' : 'off'}`} />
          </div>
        ))}
      </Subsection>

      <Subsection title="LATEST LOGS">
        <div className="ri-logs">
          {window.OnyxData.logs.map((l, i) => (
            <div key={i} className="log-line">
              <span className="log-t">{l.t}</span>
              <span className={`log-m ${l.tone === 'active' ? 'active' : ''}`}>{l.m}</span>
            </div>
          ))}
          <button className="full-log-btn">VIEW FULL LOG <span className="arrow">→</span></button>
        </div>
      </Subsection>

      <Subsection title="NEXT ACTION">
        <div className="next-action">{run.nextAction}</div>
        <div className="next-meta">
          <span>EST. <b>{run.est}</b></span>
          <span>COST <b>{run.cost}</b></span>
          <span>TOKENS <b>{run.tokens}</b></span>
        </div>
      </Subsection>

      {run.humanGate && (
        <Subsection title="HUMAN GATE">
          <div className="gate-text">This step requires human approval.</div>
          <button className="gate-btn">REVIEW &amp; APPROVE</button>
        </Subsection>
      )}
    </aside>
  );
}

function KV({ k, v }) {
  return (
    <div className="kv-line">
      <span className="kv-k">{k}</span>
      <span className="kv-v">{v}</span>
    </div>
  );
}

function Subsection({ title, children }) {
  return (
    <div className="ri-section">
      <div className="ri-section-title">{title}</div>
      {children}
    </div>
  );
}

window.RightRail = RightRail;
