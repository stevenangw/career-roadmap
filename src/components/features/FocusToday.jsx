import { ArrowRight, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Badge from '../ui/Badge';
import { NODE_TYPES } from '../../lib/constants';

export default function FocusToday({ nodes = [] }) {
  const navigate = useNavigate();
  // Get up to 3 in_progress or todo nodes
  const focus = nodes
    .filter((n) => n.status === 'in_progress' || n.status === 'todo')
    .sort((a, b) => (a.status === 'in_progress' ? -1 : b.status === 'in_progress' ? 1 : 0))
    .slice(0, 3);

  if (focus.length === 0) return null;

  return (
    <div className="pf-focus">
      <h3 className="pf-focus-title">
        <Target size={16} />
        <span>Fokus Hari Ini</span>
      </h3>
      <div className="pf-focus-list stagger-children">
        {focus.map((node) => {
          const typeConfig = NODE_TYPES[node.type] || NODE_TYPES.action;
          return (
            <div
              key={node.id}
              className="pf-focus-item"
              onClick={() => navigate(`/roadmap/${node.pathId}`)}
              style={{ '--item-color': typeConfig.color }}
            >
              <div className="pf-focus-color" style={{ background: node.pathColor }} />
              <div className="pf-focus-content">
                <span className="pf-focus-label">{node.label}</span>
                <div className="pf-focus-meta">
                  <Badge type={node.type} />
                  <span className="pf-focus-path">{node.pathTitle}</span>
                </div>
              </div>
              <ArrowRight size={16} className="pf-focus-arrow" />
            </div>
          );
        })}
      </div>
      <style>{`
        .pf-focus-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }
        .pf-focus-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pf-focus-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-focus-item:hover {
          background: var(--color-bg-elevated);
          border-color: var(--color-border-secondary);
          transform: translateX(4px);
        }
        .pf-focus-color {
          width: 4px;
          height: 32px;
          border-radius: var(--radius-full);
          flex-shrink: 0;
        }
        .pf-focus-content {
          flex: 1;
          min-width: 0;
        }
        .pf-focus-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pf-focus-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.2rem;
        }
        .pf-focus-path {
          font-size: 0.7rem;
          color: var(--color-text-tertiary);
          font-family: var(--font-mono);
        }
        .pf-focus-arrow {
          color: var(--color-text-tertiary);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}
