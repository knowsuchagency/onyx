// Hero.jsx — marketing landing hero
function Hero() {
  return (
    <section className="hero-mkt">
      <Crosshair pos="tl" /><Crosshair pos="tr" />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> ORCHESTRATION OS · v1.0</div>
          <h1 className="hero-h1">Mission control for AI agents.</h1>
          <p className="hero-p">
            Onyx runs fleets of agents end-to-end — planning, executing, reviewing, shipping. Every step is instrumented. Every breach is surfaced. Operators stay in the loop without being in the way.
          </p>
          <div className="hero-cta">
            <button className="mkt-btn primary">Start a run <span>→</span></button>
            <button className="mkt-btn ghost">Read the docs</button>
          </div>
          <div className="hero-trust">
            <span className="trust-k">TRUSTED BY OPERATORS AT</span>
            <span className="trust-list">
              <span>BEN.SYSTEMS</span><span>·</span>
              <span>NORTH STAR</span><span>·</span>
              <span>LADDER LABS</span><span>·</span>
              <span>HALCYON</span>
            </span>
          </div>
        </div>
        <div className="hero-demo">
          <ConsoleDemo />
        </div>
      </div>
    </section>
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

window.Hero = Hero;
