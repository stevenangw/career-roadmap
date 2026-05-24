import { useState, useMemo } from 'react';
import { usePaths } from '../hooks/usePaths';
import { NODE_TYPES, STATUS_CONFIG, timeAgo } from '../lib/constants';
import ProgressBar from '../components/ui/ProgressBar';
import Badge from '../components/ui/Badge';
import { SkeletonCard } from '../components/ui/Skeleton';
import { toast } from '../components/ui/Toast';
import { useStreak } from '../hooks/useStreak';
import { Filter, SortAsc, Check, Loader2, Circle } from 'lucide-react';

const statusIcons = { todo: Circle, in_progress: Loader2, done: Check };

export default function ProgressTracker() {
  const { paths, loading, getAllNodes, updateNodeStatus, getStats } = usePaths();
  const { recordActivity } = useStreak();
  const [filterPath, setFilterPath] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('status');

  const allNodes = getAllNodes();
  const stats = getStats();

  const filtered = useMemo(() => {
    let result = [...allNodes];
    if (filterPath !== 'all') result = result.filter((n) => n.pathId === filterPath);
    if (filterStatus !== 'all') result = result.filter((n) => n.status === filterStatus);
    if (filterType !== 'all') result = result.filter((n) => n.type === filterType);

    if (sortBy === 'status') {
      const order = { in_progress: 0, todo: 1, done: 2 };
      result.sort((a, b) => (order[a.status] ?? 1) - (order[b.status] ?? 1));
    } else if (sortBy === 'updated') {
      result.sort((a, b) => new Date(b.updated_at || 0) - new Date(a.updated_at || 0));
    } else if (sortBy === 'path') {
      result.sort((a, b) => a.pathTitle.localeCompare(b.pathTitle));
    }

    return result;
  }, [allNodes, filterPath, filterStatus, filterType, sortBy]);

  async function quickToggle(nodeId, currentStatus) {
    const nextMap = { todo: 'in_progress', in_progress: 'done', done: 'todo' };
    const next = nextMap[currentStatus] || 'todo';
    await updateNodeStatus(nodeId, next);
    recordActivity();
    if (next === 'done') toast('Task completed.', 'success');
  }

  if (loading) {
    return (
      <div className="pf-progress-loading">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="pf-progress-page animate-fade-in">
      <div className="pf-progress-header">
        <h1>Progress Tracker</h1>
        <p className="pf-progress-subtitle">All sub-tasks across all career roadmaps</p>
      </div>

      {/* Overall progress block */}
      <div className="pf-progress-overview glass">
        <div className="pf-progress-overview-text">
          <span>Overall Progress</span>
          <span className="pf-progress-percent">{stats.overallProgress}%</span>
        </div>
        <ProgressBar value={stats.overallProgress} color="var(--color-accent-indigo)" size="md" showLabel={false} />
        <div className="pf-progress-counts">
          <span><strong style={{ color: 'var(--color-accent-green)' }}>{stats.done}</strong> completed</span>
          <span><strong style={{ color: 'var(--color-accent-yellow)' }}>{stats.inProgress}</strong> in progress</span>
          <span><strong>{stats.todo}</strong> to do</span>
        </div>
      </div>

      {/* Filters */}
      <div className="pf-progress-filters glass">
        <div className="pf-filter-group">
          <Filter size={13} className="pf-filter-icon" />
          <div className="pf-select-wrapper">
            <select value={filterPath} onChange={(e) => setFilterPath(e.target.value)}>
              <option value="all">All Paths</option>
              {paths.map((p) => (
                <option key={p.id} value={p.id}>{p.title}</option>
              ))}
            </select>
          </div>
          <div className="pf-select-wrapper">
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Statuses</option>
              {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>
          <div className="pf-select-wrapper">
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All Types</option>
              {Object.entries(NODE_TYPES).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="pf-filter-group">
          <SortAsc size={13} className="pf-filter-icon" />
          <div className="pf-select-wrapper">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="status">Sort: Status</option>
              <option value="updated">Sort: Recent</option>
              <option value="path">Sort: Path</option>
            </select>
          </div>
        </div>
      </div>

      {/* Task list */}
      <div className="pf-task-list stagger-children">
        {filtered.length === 0 ? (
          <div className="pf-no-tasks glass">No tasks match the current filters.</div>
        ) : (
          filtered.map((node) => {
            const StatusIcon = statusIcons[node.status] || Circle;
            const isDone = node.status === 'done';
            const isInProgress = node.status === 'in_progress';

            return (
              <div 
                key={node.id} 
                className={`pf-task-item glass ${isDone ? 'done' : ''} ${isInProgress ? 'in-progress' : ''}`}
                style={{
                  '--item-border': node.pathColor,
                }}
              >
                <button
                  className={`pf-task-status-btn ${node.status}`}
                  onClick={() => quickToggle(node.id, node.status)}
                  style={{ 
                    color: isDone ? 'var(--color-accent-green)' : isInProgress ? 'var(--color-accent-yellow)' : 'var(--color-text-tertiary)' 
                  }}
                  title="Toggle status"
                >
                  <StatusIcon size={16} className={isInProgress ? 'animate-spin' : ''} />
                </button>
                <div className="pf-task-info">
                  <span className="pf-task-label">{node.label}</span>
                  <div className="pf-task-meta">
                    <div className="pf-task-path-dot" style={{ background: node.pathColor }} />
                    <span className="pf-task-path-title">{node.pathTitle}</span>
                    <span>·</span>
                    <span className="pf-task-phase-title">{node.phaseTitle}</span>
                    <Badge type={node.type} />
                  </div>
                </div>
                {node.updated_at && (
                  <span className="pf-task-time">{timeAgo(node.updated_at)}</span>
                )}
              </div>
            );
          })
        )}
      </div>

      <style>{`
        .pf-progress-page {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          padding-bottom: 3rem;
        }

        .pf-progress-header h1 {
          font-size: 1.55rem;
          letter-spacing: -0.025em;
        }
        .pf-progress-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
        }

        /* Overview glass card */
        .pf-progress-overview {
          border-radius: var(--radius-2xl);
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-md);
        }
        .pf-progress-overview-text {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
        }
        .pf-progress-percent {
          font-size: 1.25rem;
          color: var(--color-accent-indigo);
        }
        .pf-progress-counts {
          display: flex;
          gap: 1.5rem;
          font-size: 0.775rem;
          color: var(--color-text-secondary);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-top: 1px solid var(--color-border-primary);
          padding-top: 0.85rem;
        }

        /* Filters Bar */
        .pf-progress-filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-filter-group {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .pf-filter-icon {
          color: var(--color-text-tertiary);
          margin-right: 0.15rem;
        }
        .pf-select-wrapper {
          position: relative;
        }
        .pf-filter-group select {
          padding: 0.45rem 1.5rem 0.45rem 0.75rem;
          font-size: 0.825rem;
          font-family: var(--font-body);
          background: var(--color-bg-elevated);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          appearance: none;
          outline: none;
          min-width: 120px;
        }
        .pf-filter-group select:hover {
          border-color: var(--color-border-secondary);
        }
        .pf-filter-group select:focus {
          border-color: var(--color-accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        .pf-select-wrapper::after {
          content: '↓';
          font-size: 0.65rem;
          position: absolute;
          right: 0.65rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-tertiary);
          pointer-events: none;
        }

        /* Task Items list */
        .pf-task-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pf-task-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }
        .pf-task-item:hover {
          transform: translateX(3px);
          border-color: var(--item-border);
          background: color-mix(in srgb, var(--item-border) 3%, var(--color-bg-surface));
          box-shadow: var(--shadow-md);
        }
        .pf-task-item.in-progress {
          border-color: var(--color-accent-yellow);
        }
        .pf-task-item.done {
          opacity: 0.55;
        }

        .pf-task-status-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: var(--color-bg-elevated);
          border-radius: 50%;
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
          border: 1px solid var(--color-border-primary);
        }
        .pf-task-status-btn:hover {
          background: var(--color-bg-hover);
        }
        .pf-task-status-btn.done {
          background: rgba(16, 185, 129, 0.1);
          border-color: var(--color-accent-green);
        }
        .pf-task-status-btn.in_progress {
          border-color: var(--color-accent-yellow);
          background: rgba(245, 158, 11, 0.08);
        }

        .pf-task-info {
          flex: 1;
          min-width: 0;
        }
        .pf-task-label {
          display: block;
          font-size: 0.925rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        .pf-task-item.done .pf-task-label {
          text-decoration: line-through;
          color: var(--color-text-tertiary);
        }
        .pf-task-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.3rem;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          flex-wrap: wrap;
        }
        .pf-task-path-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pf-task-path-title {
          font-weight: 600;
        }
        .pf-task-time {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .pf-no-tasks {
          text-align: center;
          padding: 4rem;
          color: var(--color-text-tertiary);
          font-size: 0.9rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
        }

        @media (max-width: 768px) {
          .pf-progress-filters { flex-direction: column; align-items: flex-start; padding: 1rem; }
          .pf-filter-group { width: 100%; flex-wrap: wrap; }
          .pf-select-wrapper select { width: 100%; }
          .pf-task-time { display: none; }
        }
      `}</style>
    </div>
  );
}
