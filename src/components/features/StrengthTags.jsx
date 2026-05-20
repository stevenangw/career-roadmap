import { Award } from 'lucide-react';

export default function StrengthTags({ strengths = [] }) {
  if (strengths.length === 0) return null;

  return (
    <div className="pf-strengths">
      <h3 className="pf-strengths-title">
        <Award size={16} />
        <span>Kekuatanmu</span>
      </h3>
      <div className="pf-strengths-tags">
        {strengths.map((s) => (
          <span key={s.id} className="pf-strength-tag">
            {s.label}
          </span>
        ))}
      </div>
      <style>{`
        .pf-strengths-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }
        .pf-strengths-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pf-strength-tag {
          padding: 0.3rem 0.7rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        .pf-strength-tag:hover {
          background: rgba(99, 102, 241, 0.2);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
