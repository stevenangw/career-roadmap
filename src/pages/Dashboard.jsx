import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { usePaths } from '../hooks/usePaths';
import { useStreak } from '../hooks/useStreak';
import { DEMO_STRENGTHS, getAllNodesFromPath, calculateProgress } from '../lib/constants';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';
import Badge from '../components/ui/Badge';
import { SkeletonCard } from '../components/ui/Skeleton';
import StreakCounter from '../components/features/StreakCounter';
import MotivationalQuote from '../components/features/MotivationalQuote';
import FocusToday from '../components/features/FocusToday';
import StrengthTags from '../components/features/StrengthTags';
import { ArrowRight, TrendingUp, Sparkles, Shield } from 'lucide-react';

const pathIcons = {
  'trending-up': TrendingUp,
  'sparkles': Sparkles,
  'shield': Shield,
};

export default function Dashboard() {
  const { profile } = useAuth();
  const { paths, loading, getAllNodes, getStats } = usePaths();
  const { streakCount } = useStreak();
  const navigate = useNavigate();

  const allNodes = getAllNodes();
  const stats = getStats();

  if (loading) {
    return (
      <div className="pf-dashboard">
        <div className="pf-dash-header">
          <h1>Loading...</h1>
        </div>
        <div className="pf-dash-paths">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <div className="pf-dashboard animate-fade-in">
      {/* Header */}
      <div className="pf-dash-header">
        <div>
          <h1>Halo, {profile?.name || 'User'}.</h1>
          <p className="pf-dash-subtitle">{profile?.headline || 'Selamat datang di PathForge'}</p>
        </div>
        <StreakCounter count={streakCount} />
      </div>

      {/* Quote */}
      <MotivationalQuote />

      {/* Overall stats */}
      <div className="pf-dash-stats">
        <div className="pf-stat">
          <span className="pf-stat-value">{stats.total}</span>
          <span className="pf-stat-label">Total Task</span>
        </div>
        <div className="pf-stat">
          <span className="pf-stat-value" style={{ color: '#10B981' }}>{stats.done}</span>
          <span className="pf-stat-label">Selesai</span>
        </div>
        <div className="pf-stat">
          <span className="pf-stat-value" style={{ color: '#F59E0B' }}>{stats.inProgress}</span>
          <span className="pf-stat-label">Berjalan</span>
        </div>
        <div className="pf-stat">
          <span className="pf-stat-value">{stats.overallProgress}%</span>
          <span className="pf-stat-label">Progress</span>
        </div>
      </div>

      {/* Path cards */}
      <h2 className="pf-section-title">Career Paths</h2>
      <div className="pf-dash-paths stagger-children">
        {paths.map((path) => {
          const allPathNodes = getAllNodesFromPath(path);
          const progress = calculateProgress(allPathNodes);
          const inProgressCount = allPathNodes.filter((n) => n.status === 'in_progress').length;
          const doneCount = allPathNodes.filter((n) => n.status === 'done').length;
          const IconComp = pathIcons[path.icon] || TrendingUp;

          return (
            <Card
              key={path.id}
              onClick={() => navigate(`/roadmap/${path.id}`)}
              className="pf-path-card"
            >
              <div className="pf-path-header">
                <div className="pf-path-icon" style={{ background: `${path.color}20`, color: path.color }}>
                  <IconComp size={20} />
                </div>
                <div className="pf-path-badges">
                  {inProgressCount > 0 && (
                    <Badge status="in_progress">{inProgressCount} active</Badge>
                  )}
                </div>
              </div>
              <h3 className="pf-path-title">{path.title}</h3>
              {path.description && <p className="pf-path-desc">{path.description}</p>}
              <ProgressBar value={progress} color={path.color} size="sm" />
              <div className="pf-path-footer">
                <span className="pf-path-count">{doneCount}/{allPathNodes.length} tasks</span>
                <span className="pf-path-cta">
                  Buka Roadmap <ArrowRight size={14} />
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Focus Today */}
      <div className="pf-dash-section">
        <FocusToday nodes={allNodes} />
      </div>

      {/* Strengths */}
      <div className="pf-dash-section">
        <StrengthTags strengths={DEMO_STRENGTHS} />
      </div>

      <style>{`
        .pf-dashboard {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-dash-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .pf-dash-header h1 {
          font-size: 1.5rem;
        }
        .pf-dash-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.2rem;
        }

        .pf-dash-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }
        .pf-stat {
          text-align: center;
          padding: 1rem;
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
        }
        .pf-stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
        }
        .pf-stat-label {
          font-size: 0.7rem;
          color: var(--color-text-tertiary);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .pf-section-title {
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }

        .pf-dash-paths {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
        }
        .pf-path-card {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pf-path-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-path-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-lg);
        }
        .pf-path-title {
          font-size: 1.05rem;
        }
        .pf-path-desc {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          line-height: 1.4;
        }
        .pf-path-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.25rem;
        }
        .pf-path-count {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
        }
        .pf-path-cta {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
        }
        .pf-dash-section {
          margin-top: 0.5rem;
        }

        @media (max-width: 640px) {
          .pf-dash-stats { grid-template-columns: repeat(2, 1fr); }
          .pf-dash-paths { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
