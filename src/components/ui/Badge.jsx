import { NODE_TYPES } from '../../lib/constants';

export default function Badge({ type, status, children, color, className = '' }) {
  let bg, textColor, label;

  if (type && NODE_TYPES[type]) {
    const cfg = NODE_TYPES[type];
    bg = cfg.bgLight;
    textColor = cfg.color;
    label = children || cfg.label;
  } else if (status) {
    const statusColors = {
      todo: { bg: 'var(--surface-alt)', color: 'var(--muted)' },
      in_progress: { bg: 'var(--surface-alt)', color: 'var(--highlight)' },
      done: { bg: 'var(--surface-alt)', color: 'var(--success)' },
    };
    const cfg = statusColors[status] || statusColors.todo;
    bg = cfg.bg;
    textColor = cfg.color;
    label = children || status.replace('_', ' ');
  } else {
    bg = color ? `${color}20` : 'var(--color-bg-elevated)';
    textColor = color || 'var(--color-text-secondary)';
    label = children;
  }

  return (
    <span
      className={`pf-badge ${className}`}
      style={{ background: bg, color: textColor }}
    >
      {label}
      <style>{`
        .pf-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.2rem 0.6rem;
          font-size: 0.7rem;
          font-weight: 600;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }
      `}</style>
    </span>
  );
}
