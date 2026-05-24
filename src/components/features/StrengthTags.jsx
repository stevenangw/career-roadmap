import { Award } from 'lucide-react';

export default function StrengthTags({ strengths = [] }) {
  if (strengths.length === 0) return null;

  return (
    <div className="pf-strengths">
      <h3 className="pf-strengths-title">
        <Award size={15} />
        <span>Core Strengths</span>
      </h3>
      <div className="pf-strengths-tags stagger-children">
        {strengths.map((s) => (
          <span key={s.id} className="pf-strength-tag glass">
            {s.label}
          </span>
        ))}
      </div>
      <style>{`
        .pf-strengths-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }
        .pf-strengths-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pf-strength-tag {
          padding: 0.4rem 0.85rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
          background: rgba(99, 102, 241, 0.08) !important;
          border: 1px solid rgba(99, 102, 241, 0.22) !important;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }
        .pf-strength-tag:hover {
          background: rgba(99, 102, 241, 0.16) !important;
          border-color: rgba(99, 102, 241, 0.35) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        }
      `}</style>
    </div>
  );
}
