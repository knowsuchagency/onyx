// Footer.jsx — marketing site footer
function Footer() {
  return (
    <footer className="mkt-foot">
      <div className="foot-cols">
        <div className="foot-col">
          <div className="foot-brand">
            <div className="brand-mark" />
            <span>ONYX</span>
          </div>
          <p className="foot-tag">Orchestration OS for AI agents.</p>
        </div>
        <div className="foot-col">
          <div className="foot-h">PRODUCT</div>
          <a>Agent Ops</a><a>Runtime</a><a>Policies</a><a>Audit</a>
        </div>
        <div className="foot-col">
          <div className="foot-h">DEVELOPERS</div>
          <a>Docs</a><a>SDK</a><a>Status</a><a>Changelog</a>
        </div>
        <div className="foot-col">
          <div className="foot-h">COMPANY</div>
          <a>About</a><a>Contact</a><a>Security</a><a>Privacy</a>
        </div>
      </div>
      <div className="foot-bar">
        <span>© 2026 BEN.SYSTEMS · ALL RIGHTS RESERVED</span>
        <span>SECURE CHANNEL  TLS 1.3 🔒</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
