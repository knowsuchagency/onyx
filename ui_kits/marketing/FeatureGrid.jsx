// FeatureGrid.jsx — three-up terminal-style feature row
function FeatureGrid() {
  const features = [
    { k: '01 / RUN', t: 'Every agent, instrumented', d: 'Tokens, cost, latency, and confidence — per agent, per step, per run. No telemetry left behind.' },
    { k: '02 / GATE', t: 'Humans on the loop, not in the way', d: 'Set policy thresholds. Onyx blocks the run, surfaces the diff, and waits for one click.' },
    { k: '03 / OPERATE', t: 'A control surface, not a black box', d: 'Slash-driven command bar. Live logs. Full audit trail. Built for operators who read the manual.' },
  ];
  return (
    <section className="features">
      <div className="feat-head">
        <span className="dot" /><span>FEATURES</span>
      </div>
      <div className="feat-grid">
        {features.map(f => (
          <div key={f.k} className="feat-card">
            <div className="feat-k">{f.k}</div>
            <div className="feat-t">{f.t}</div>
            <div className="feat-d">{f.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.FeatureGrid = FeatureGrid;
