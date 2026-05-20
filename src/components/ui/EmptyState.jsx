import { FolderOpen } from 'lucide-react';
import Button from './Button';

export default function EmptyState({
  icon: Icon = FolderOpen,
  title = 'Belum ada data',
  description = 'Mulai dengan membuat item pertamamu.',
  actionLabel,
  onAction,
  className = '',
}) {
  return (
    <div className={`pf-empty ${className}`}>
      <div className="pf-empty-icon animate-float">
        <Icon size={48} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} style={{ marginTop: '0.75rem' }}>
          {actionLabel}
        </Button>
      )}
      <style>{`
        .pf-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 3rem 1.5rem;
          min-height: 300px;
        }
        .pf-empty-icon {
          color: var(--color-text-tertiary);
          margin-bottom: 1rem;
          opacity: 0.6;
        }
        .pf-empty h3 {
          font-size: 1.125rem;
          color: var(--color-text-primary);
          margin-bottom: 0.5rem;
        }
        .pf-empty p {
          font-size: 0.875rem;
          color: var(--color-text-tertiary);
          max-width: 300px;
        }
      `}</style>
    </div>
  );
}
