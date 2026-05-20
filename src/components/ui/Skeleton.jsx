export default function Skeleton({ width = '100%', height = '20px', radius = 'var(--radius-md)', className = '' }) {
  return (
    <div
      className={`pf-skeleton ${className}`}
      style={{ width, height, borderRadius: radius }}
    >
      <style>{`
        .pf-skeleton {
          background: linear-gradient(90deg,
            var(--color-bg-elevated) 25%,
            var(--color-bg-hover) 50%,
            var(--color-bg-elevated) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="pf-skeleton-card">
      <Skeleton height="14px" width="40%" />
      <Skeleton height="24px" width="70%" />
      <Skeleton height="8px" width="100%" />
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
        <Skeleton height="24px" width="60px" radius="var(--radius-full)" />
        <Skeleton height="24px" width="80px" radius="var(--radius-full)" />
      </div>
      <style>{`
        .pf-skeleton-card {
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
}
