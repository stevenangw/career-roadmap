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
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal), background-color var(--transition-normal);
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .pf-card-hover:hover {
          transform: translateY(-4px);
          border-color: var(--color-border-secondary);
          background: var(--color-bg-elevated);
          box-shadow: var(--shadow-lg);
        }
        .pf-card-glow:hover {
          border-color: var(--glow-color);
          box-shadow: 0 8px 30px -4px color-mix(in srgb, var(--glow-color) 25%, transparent);
        }
        .pf-card[role="button"] {
          cursor: pointer;
        }
        .pf-card[role="button"]:active {
          transform: translateY(-1px) scale(0.995);
        }
      `}</style>
    </div>
  );
}
