// app.jsx — root composition
const { useState } = React;

function App() {
  const [selectedRun, setSelectedRun] = useState(window.OnyxData.inspector);
  const [logFlash, setLogFlash] = useState(null);

  function handleCardClick(card) {
    // Build a fake inspector record from the card, falling back to the default
    setSelectedRun({
      ...window.OnyxData.inspector,
      runId: card.id,
      title: card.title,
      state: card.complete ? 'COMPLETE' : card.breach ? 'BLOCKED' : 'EXECUTING',
    });
  }

  function handleCommand(cmd) {
    setLogFlash(cmd);
    setTimeout(() => setLogFlash(null), 1800);
  }

  return (
    <div className="onyx-app">
      <TopBar onCommand={handleCommand} />
      <div className="onyx-body">
        <LeftRail />
        <main className="onyx-main">
          <OrchestrationBoard
            selectedRunId={selectedRun?.runId}
            onCardClick={handleCardClick}
          />
        </main>
        <RightRail run={selectedRun} onClose={() => setSelectedRun(null)} />
      </div>
      <footer className="onyx-foot">
        <div className="foot-left">MADE WITH GPT FOR BEN</div>
        <div className="foot-mid">
          {logFlash && (
            <span className="cmd-echo">▸ <span className="echo-text">{logFlash}</span></span>
          )}
        </div>
        <div className="foot-right">SECURE CHANNEL  TLS 1.3 <span className="lock">🔒</span></div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
