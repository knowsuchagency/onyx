// LeftRail.jsx — Agent Roster + System Health
function LeftRail({ onAgentClick }) {
  const agents = window.OnyxData.agents;
  const health = window.OnyxData.health;

  return (
    <aside className="left-rail">
      <Section title="AGENT ROSTER">
        <div className="roster">
          {agents.map(a => (
            <button key={a.id} className={`agent-row ${a.active ? 'on' : 'off'}`} onClick={() => onAgentClick?.(a)}>
              <div className={`agent-mark ${a.active ? 'on' : ''}`} />
              <div className="agent-meta">
                <div className="agent-name">{a.name}</div>
                <div className="agent-role">{a.role}</div>
              </div>
              <div className={`agent-conf ${a.alert ? 'alert' : ''}`}>{a.confidence.toFixed(2)}</div>
              <div className="agent-bar">
                <div style={{ width: (a.confidence * 100) + '%', background: a.alert ? 'var(--danger)' : 'var(--accent)' }} />
              </div>
            </button>
          ))}
        </div>
      </Section>

      <Section title="SYSTEM HEALTH">
        <div className="health">
          {health.map((h, i) => (
            <div key={i} className="health-row">
              <span className="health-k">{h.k}</span>
              {h.pct !== null && (
                <span className="health-bar">
                  <span style={{ width: h.pct + '%' }} />
                </span>
              )}
              <span className="health-v">{h.v}</span>
            </div>
          ))}
        </div>
      </Section>

      <button className="logs-btn">VIEW SYSTEM LOGS <span className="logs-arrow">›</span></button>
    </aside>
  );
}

function Section({ title, children }) {
  return (
    <div className="rail-section">
      <div className="rail-title">
        <span className="dot" /><span>{title}</span>
      </div>
      {children}
    </div>
  );
}

window.LeftRail = LeftRail;
