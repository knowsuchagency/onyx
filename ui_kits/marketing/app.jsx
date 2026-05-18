// app.jsx — marketing landing composition
function App() {
  return (
    <div className="mkt">
      <header className="mkt-nav">
        <div className="mkt-brand">
          <div className="brand-mark" />
          <span>ONYX</span>
        </div>
        <nav className="mkt-links">
          <a>Product</a>
          <a>Docs</a>
          <a>Customers</a>
          <a>Pricing</a>
        </nav>
        <div className="mkt-nav-cta">
          <button className="mkt-btn ghost small">Sign in</button>
          <button className="mkt-btn primary small">Start a run →</button>
        </div>
      </header>

      <Hero />
      <FeatureGrid />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
