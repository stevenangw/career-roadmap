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
import { ArrowRight, TrendingUp, Sparkles, Shield, Compass } from 'lucide-react';

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
      <div className="pf-dashboard-loading">
        <div className="pf-dash-header-loading">
          <SkeletonCard />
        </div>
        <div className="pf-dash-paths-loading">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <div className="pf-dashboard animate-fade-in">
      {/* Premium Glowing Header */}
      <div className="pf-dash-header glass">
        <div className="pf-header-left">
          <div className="pf-header-avatar-ring">
            <Compass size={22} className="pf-header-logo-icon" />
          </div>
          <div>
            <h1>Hello, {profile?.name || 'Steven'}.</h1>
            <p className="pf-dash-subtitle">{profile?.headline || 'Welcome to your career roadmap tracker repository'}</p>
          </div>
        </div>
        <div className="pf-header-right">
          <StreakCounter count={streakCount} />
        </div>
      </div>

      {/* Asymmetric 70/30 Main Grid */}
      <div className="pf-dash-layout">
        
        {/* Left Column (70%): Career Paths & Today's Focus */}
        <div className="pf-dash-main stagger-children">
          
          <div className="pf-section-header">
            <h2>Career Paths</h2>
            <span className="pf-section-tag">{paths.length} Active Tracks</span>
          </div>

          <div className="pf-dash-paths">
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
                  glow={path.color}
                >
                  <div className="pf-path-header">
                    <div className="pf-path-icon" style={{ background: `${path.color}15`, color: path.color }}>
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
                  
                  <div className="pf-path-progress-container">
                    <ProgressBar value={progress} color={path.color} size="sm" />
                  </div>

                  <div className="pf-path-footer">
                    <span className="pf-path-count">{doneCount}/{allPathNodes.length} tasks completed</span>
                    <span className="pf-path-cta" style={{ color: path.color }}>
                      Open Roadmap <ArrowRight size={14} className="pf-path-cta-arrow" />
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="pf-dash-section">
            <FocusToday nodes={allNodes} />
          </div>

        </div>

        {/* Right Column (30%): Stats, Motivation & Strengths */}
        <div className="pf-dash-sidebar stagger-children" style={{ animationDelay: '0.15s' }}>
          
          <div className="pf-section-header">
            <h2>Tracking Statistics</h2>
          </div>

          {/* Stats Column */}
          <div className="pf-sidebar-widget pf-stats-widget glass">
            <div className="pf-dash-stats-grid">
              <div className="pf-stat-item">
                <span className="pf-stat-val">{stats.total}</span>
                <span className="pf-stat-lbl">Total Tasks</span>
              </div>
              <div className="pf-stat-item">
                <span className="pf-stat-val" style={{ color: 'var(--color-accent-green)' }}>{stats.done}</span>
                <span className="pf-stat-lbl">Completed</span>
              </div>
              <div className="pf-stat-item">
                <span className="pf-stat-val" style={{ color: 'var(--color-accent-yellow)' }}>{stats.inProgress}</span>
                <span className="pf-stat-lbl">In Progress</span>
              </div>
              <div className="pf-stat-item">
                <span className="pf-stat-val" style={{ color: 'var(--color-accent-indigo)' }}>{stats.overallProgress}%</span>
                <span className="pf-stat-lbl">Progress</span>
              </div>
            </div>
            <div className="pf-stat-overall-progress">
              <ProgressBar value={stats.overallProgress} color="var(--color-accent-indigo)" size="xs" showLabel={false} />
            </div>
          </div>

          <div className="pf-sidebar-widget">
            <MotivationalQuote />
          </div>

          <div className="pf-sidebar-widget">
            <StrengthTags strengths={DEMO_STRENGTHS} />
          </div>

        </div>

      </div>

      <style>{`
        .pf-dashboard {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-bottom: 2rem;
        }

        /* Loading */
        .pf-dashboard-loading {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Header Card */
        .pf-dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.75rem 2rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-md);
        }
        .pf-header-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .pf-header-avatar-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          color: var(--color-accent-indigo);
          border: 1px solid rgba(99, 102, 241, 0.25);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.1);
        }
        .pf-header-left h1 {
          font-size: 1.65rem;
          letter-spacing: -0.025em;
        }
        .pf-dash-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
        }

        /* Layout Grid */
        .pf-dash-layout {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 2rem;
          align-items: start;
        }

        /* Headings */
        .pf-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          border-left: 3px solid var(--color-accent-indigo);
          padding-left: 0.75rem;
        }
        .pf-section-header h2 {
          font-size: 1.25rem;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }
        .pf-section-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Main paths grid */
        .pf-dash-main {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .pf-dash-paths {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1.25rem;
        }
        .pf-path-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          height: 100%;
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
          width: 44px;
          height: 44px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }
        .pf-path-title {
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .pf-path-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          flex: 1;
        }
        .pf-path-progress-container {
          margin: 0.5rem 0 0.25rem;
        }
        .pf-path-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border-primary);
          padding-top: 0.85rem;
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
          font-size: 0.825rem;
          font-weight: 600;
          transition: transform var(--transition-fast);
        }
        .pf-path-card:hover .pf-path-cta-arrow {
          transform: translateX(4px);
        }
        .pf-path-cta-arrow {
          transition: transform var(--transition-fast);
        }

        /* Sidebar content */
        .pf-dash-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-sidebar-widget {
          width: 100%;
        }
        .pf-stats-widget {
          padding: 1.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-md);
        }
        .pf-dash-stats-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1rem;
        }
        .pf-stat-item {
          text-align: center;
          padding: 0.85rem 0.5rem;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .pf-stat-val {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 700;
        }
        .pf-stat-lbl {
          font-size: 0.675rem;
          color: var(--color-text-tertiary);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 0.15rem;
          display: block;
        }
        .pf-stat-overall-progress {
          margin-top: 1rem;
        }

        /* Responsive Breakpoints (Mobile First) */
        @media (min-width: 480px) {
          .pf-dash-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 640px) {
          .pf-dash-paths {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }
        @media (min-width: 768px) {
          .pf-dash-layout {
            grid-template-columns: 7fr 3fr;
          }
        }
        @media (max-width: 640px) {
          .pf-dash-header { padding: 1.25rem 1.5rem; flex-direction: column; align-items: flex-start; gap: 1.25rem; }
          .pf-header-right { width: 100%; }
        }
      `}</style>
    </div>
  );
}
