// TopBar.jsx — brand mark, command bar, status strip
const { useState } = React;

function TopBar({ onCommand }) {
  const [val, setVal] = useState('');
  const meta = window.OnyxData.meta;

  return (
    <div className="topbar">
      <div className="brand">
        <div className="brand-mark" />
        <span className="brand-name">BEN.SYSTEMS</span>
        <span className="brand-sep">·</span>
        <span className="brand-tag">ORCHESTRATION OS v1.0</span>
      </div>

      <div className="command">
        <span className="cmd-label">COMMAND</span>
        <span className="cmd-sep">|</span>
        <input
          className="cmd-input"
          placeholder="Type a command or / for actions…"
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && val.trim()) { onCommand?.(val); setVal(''); }}}
        />
        <button className="cmd-go" onClick={() => { if (val.trim()) { onCommand?.(val); setVal(''); }}}>→</button>
      </div>

      <div className="status-strip">
        <div className="ss-item">
          <span className="ss-k">RUN STATUS</span>
          <span className="ss-v"><span className="dot" /> {meta.runStatus}</span>
        </div>
        <div className="ss-item">
          <span className="ss-k">SYSTEM TIME</span>
          <span className="ss-v mono">{meta.systemTime}</span>
        </div>
        <div className="ss-item">
          <span className="ss-k">QUEUE DEPTH</span>
          <span className="ss-v">{meta.queueDepth} <Sparkline /></span>
        </div>
      </div>
    </div>
  );
}

function Sparkline() {
  // tiny inline bar histogram
  const bars = [3, 5, 4, 6, 5, 8, 9, 7, 10, 9, 11, 9, 10, 12, 11, 13, 12, 14, 13, 15];
  return (
    <span className="spark">
      {bars.map((b, i) => (
        <span key={i} className="spark-bar" style={{ height: b + 'px' }} />
      ))}
    </span>
  );
}

window.TopBar = TopBar;
