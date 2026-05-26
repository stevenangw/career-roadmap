import { Flame } from 'lucide-react';

export default function StreakCounter({ count = 0 }) {
  if (count <= 0) return null;

  return (
    <div className="pf-streak glass">
      <div className="pf-streak-flame">
        <Flame size={18} />
      </div>
      <div className="pf-streak-info">
        <span className="pf-streak-count">{count}</span>
        <span className="pf-streak-label">day streak</span>
      </div>
      <style>{`
        .pf-streak {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.45rem 1rem;
          background: var(--surface-alt) !important;
          border: 1px solid var(--border) !important;
          border-radius: var(--radius-full);
        }
        .pf-streak-flame {
          color: var(--highlight);
          display: flex;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .pf-streak-info {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }
        .pf-streak-count {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--highlight);
        }
        .pf-streak-label {
          font-size: 0.725rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}
