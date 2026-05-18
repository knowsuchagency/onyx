// StageColumn.jsx — single Kanban column
function StageColumn({ stage, selectedRunId, onCardClick }) {
  const dotColor = stage.color === 'warn' ? 'var(--warn)' : stage.color === 'ok' ? 'var(--ok)' : 'var(--accent)';

  return (
    <div className="stage-col">
      <div className="stage-head">
        <span className="stage-label">
          <span className="dot" style={{ background: dotColor }} />
          <span>{stage.label.toUpperCase()}</span>
          <span className="stage-count">{stage.count}</span>
        </span>
        <button className="stage-plus">+</button>
      </div>

      <div className="stage-cards">
        {stage.cards.map((card, idx) => (
          <React.Fragment key={card.id}>
            <RunCard
              card={card}
              selected={card.id === selectedRunId || card.selected}
              onClick={() => onCardClick?.(card)}
            />
            {idx < stage.cards.length - 1 && <div className="connector" />}
          </React.Fragment>
        ))}
        {stage.more ? (
          <div className="stage-more">+ {stage.more} more</div>
        ) : null}
      </div>
    </div>
  );
}

window.StageColumn = StageColumn;
