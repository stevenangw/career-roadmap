import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Check, Loader2, Circle } from 'lucide-react';
import { NODE_TYPES } from '../../lib/constants';

const statusIcons = {
  todo: Circle,
  in_progress: Loader2,
  done: Check,
};

function RoadmapNode({ data, selected }) {
  const nodeType = NODE_TYPES[data.type] || NODE_TYPES.action;
  const StatusIcon = statusIcons[data.status] || Circle;
  const TypeIcon = nodeType.icon;
  const isDone = data.status === 'done';
  const isInProgress = data.status === 'in_progress';

  return (
    <>
      <Handle type="target" position={Position.Left} className="pf-handle" />
      <div
        className={`pf-roadmap-node ${isDone ? 'done' : ''} ${isInProgress ? 'in-progress' : ''} ${selected ? 'selected' : ''}`}
        style={{
          '--node-color': nodeType.color,
          borderColor: isInProgress ? nodeType.color : undefined,
        }}
      >
        <div className="pf-node-header">
          <div className="pf-node-type-icon" style={{ background: nodeType.bgLight, color: nodeType.color }}>
            <TypeIcon size={14} />
          </div>
          <div className="pf-node-status" style={{ color: isDone ? '#10B981' : isInProgress ? '#F59E0B' : '#666' }}>
            <StatusIcon size={14} className={isInProgress ? 'animate-spin' : ''} />
          </div>
        </div>
        <div className="pf-node-label">{data.label}</div>
        <div className="pf-node-type-badge" style={{ color: nodeType.color, background: nodeType.bgLight }}>
          {nodeType.label}
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="pf-handle" />
      <style>{`
        .pf-handle {
          width: 8px !important;
          height: 8px !important;
          background: var(--color-border-accent) !important;
          border: 2px solid var(--color-bg-surface) !important;
        }
        .pf-roadmap-node {
          background: var(--color-bg-surface);
          border: 1.5px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          padding: 0.75rem 1rem;
          min-width: 220px;
          max-width: 280px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-roadmap-node:hover {
          border-color: var(--color-border-secondary);
        }
        .pf-roadmap-node.selected {
          border-color: var(--node-color);
          box-shadow: 0 0 0 1px var(--node-color);
        }
        .pf-roadmap-node.in-progress {
          border-color: var(--node-color);
        }
        .pf-roadmap-node.done {
          opacity: 0.55;
          background: var(--color-bg-primary);
        }
        .pf-node-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }
        .pf-node-type-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: var(--radius-md);
        }
        .pf-node-status { display: flex; align-items: center; }
        .pf-node-label {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-text-primary);
          line-height: 1.3;
          margin-bottom: 0.4rem;
        }
        .pf-node-type-badge {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-sm);
          display: inline-block;
        }
      `}</style>
    </>
  );
}

export default memo(RoadmapNode);
