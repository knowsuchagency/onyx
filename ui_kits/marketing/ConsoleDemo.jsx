// ConsoleDemo.jsx — static, simplified preview of the Agent Ops board
function ConsoleDemo() {
  const cards = [
    { stage: 'PLAN', id: 'PLN-2026-0187', title: 'Market analysis plan', agent: 'Strategist' },
    { stage: 'EXECUTE', id: 'EXE-2026-0311', title: 'Search funding data', agent: 'Researcher', active: true },
    { stage: 'REVIEW', id: 'REV-2026-0091', title: 'Review analysis', agent: 'Reviewer' },
  ];
  return (
    <div className="demo-frame">
      <div className="demo-chrome">
        <span className="demo-dot" /> AGENT OPS · LIVE
        <span className="demo-time">14:32:18 UTC</span>
      </div>
      <div className="demo-body">
        {cards.map(c => (
          <div key={c.id} className={`demo-card ${c.active ? 'on' : ''}`}>
            <div className="demo-card-head">
              <span className="demo-stage">{c.stage}</span>
              <span className="demo-id">{c.id}</span>
            </div>
            <div className="demo-title">{c.title}</div>
            <div className="demo-meta"><span className="k">AGENT</span> <span className="v">{c.agent}</span></div>
            <div className="demo-bar"><span style={{width: c.active ? '65%' : '90%'}}/></div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.ConsoleDemo = ConsoleDemo;
