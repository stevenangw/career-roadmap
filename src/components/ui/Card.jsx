export default function Card({ children, className = '', hover = true, glow, onClick, style = {} }) {
  return (
    <div
      className={`pf-card ${hover ? 'pf-card-hover' : ''} ${glow ? 'pf-card-glow' : ''} ${className}`}
      onClick={onClick}
      style={{
        '--glow-color': glow || 'transparent',
        ...style,
      }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
      <style>{`
        .pf-card {
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }
        .pf-card-hover:hover {
          border-color: var(--color-border-secondary);
          background: var(--color-bg-elevated);
        }
        .pf-card-glow:hover {
          border-color: var(--glow-color);
        }
        .pf-card[role="button"] {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
