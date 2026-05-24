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
          background: rgba(249, 115, 22, 0.1) !important;
          border: 1px solid rgba(249, 115, 22, 0.25) !important;
          border-radius: var(--radius-full);
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.1);
        }
        .pf-streak-flame {
          color: #F97316;
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
          color: #F97316;
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
