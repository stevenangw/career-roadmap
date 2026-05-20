import { Flame } from 'lucide-react';

export default function StreakCounter({ count = 0 }) {
  if (count <= 0) return null;

  return (
    <div className="pf-streak">
      <div className="pf-streak-flame">
        <Flame size={20} />
      </div>
      <div className="pf-streak-info">
        <span className="pf-streak-count">{count}</span>
        <span className="pf-streak-label">hari berturut-turut</span>
      </div>
      <style>{`
        .pf-streak {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.8rem;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.2);
          border-radius: var(--radius-full);
        }
        .pf-streak-flame {
          color: #F97316;
          display: flex;
          animation: pulse 1.5s ease-in-out infinite;
        }
        .pf-streak-info {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
        }
        .pf-streak-count {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #F97316;
        }
        .pf-streak-label {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }
      `}</style>
    </div>
  );
}
