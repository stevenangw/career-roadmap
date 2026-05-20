import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Clock } from 'lucide-react';

function PhaseHeader({ data }) {
  return (
    <>
      <Handle type="target" position={Position.Left} className="pf-handle" style={{ opacity: 0 }} />
      <div className="pf-phase-header">
        <span className="pf-phase-title">{data.label}</span>
        {data.duration && (
          <span className="pf-phase-duration">
            <Clock size={11} />
            {data.duration}
          </span>
        )}
      </div>
      <Handle type="source" position={Position.Right} className="pf-handle" style={{ opacity: 0 }} />
      <style>{`
        .pf-phase-header {
          background: linear-gradient(135deg, var(--color-bg-elevated), var(--color-bg-surface));
          border: 1px dashed var(--color-border-secondary);
          border-radius: var(--radius-lg);
          padding: 0.5rem 1rem;
          min-width: 200px;
          text-align: center;
        }
        .pf-phase-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
        }
        .pf-phase-duration {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--color-text-tertiary);
          margin-top: 0.2rem;
        }
      `}</style>
    </>
  );
}

export default memo(PhaseHeader);
