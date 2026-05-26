export default function ProgressBar({ value = 0, color = 'var(--accent)', size = 'md', showLabel = true, className = '' }) {
  const clamped = Math.min(100, Math.max(0, value));
  const heights = { sm: '4px', md: '8px', lg: '12px' };

  return (
    <div className={`pf-progress ${className}`}>
      <div className="pf-progress-track" style={{ height: heights[size] }}>
        <div
          className="pf-progress-fill"
          style={{
            width: `${clamped}%`,
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
          }}
        />
      </div>
      {showLabel && (
        <span className="pf-progress-label" style={{ color }}>
          {clamped}%
        </span>
      )}
      <style>{`
        .pf-progress {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
        }
        .pf-progress-track {
          flex: 1;
          background: var(--color-bg-hover);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .pf-progress-fill {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .pf-progress-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: shimmer 2s ease-in-out infinite;
          background-size: 200% 100%;
        }
        .pf-progress-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 2.5rem;
          text-align: right;
        }
      `}</style>
    </div>
  );
}
