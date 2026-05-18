// RunCard.jsx — single run card with variant rendering
function RunCard({ card, selected, onClick }) {
  const isSelected = selected;
  const tone = card.breach ? 'breach' : (card.complete ? 'complete' : (isSelected ? 'active' : 'idle'));

  return (
    <div className={`run-card tone-${tone}`} onClick={onClick}>
      <div className="run-head">
        <span className="run-id">{card.id}</span>
        {card.breach && <span className="breach-tag">⏱ 12m</span>}
        <span className="run-ago">{card.ago}</span>
      </div>

      <div className="run-title">{card.title}</div>

      {card.kv && (
        <div className="run-kv">
          {card.kv.map(([k, v], i) => (
            <div key={i} className="kv-row">
              <span className="kv-k">{k.toUpperCase()}</span>
              <span className="kv-v">
                {typeof v === 'object' && v.tag ? (
                  <span className={`kv-tag tone-${v.tone}`}>
                    <span className="kv-tag-dot" /> {v.tag}
                  </span>
                ) : typeof v === 'object' && typeof v.bar === 'number' ? (
                  <span className="kv-conf-row">
                    <span className="kv-conf-val">{v.bar}%</span>
                    <span className="kv-conf-bar"><span style={{ width: v.bar + '%' }} /></span>
                  </span>
                ) : v}
              </span>
            </div>
          ))}
        </div>
      )}

      {card.metrics && (
        <div className="run-metrics">
          {card.metrics.map(([k, v], i) => (
            <div key={i} className="metric">
              <span className="metric-k">{k.toUpperCase()}</span>
              <span className="metric-v">{v}</span>
            </div>
          ))}
        </div>
      )}

      {typeof card.conf === 'number' && (
        <div className="conf-bar">
          <span style={{ width: card.conf + '%' }} />
        </div>
      )}

      {card.complete && (
        <div className="complete-check">✓</div>
      )}

      {card.footer && (
        <div className={`run-footer tone-${card.footer.tone}`}>{card.footer.tag.toUpperCase()}</div>
      )}
    </div>
  );
}

window.RunCard = RunCard;
