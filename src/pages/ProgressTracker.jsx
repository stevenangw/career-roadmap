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
    if (next === 'done') toast('Task selesai.', 'success');
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="pf-progress-page animate-fade-in">
      <h1>Progress Tracker</h1>
      <p className="pf-progress-subtitle">Semua task dari semua career path</p>

      {/* Overall progress */}
      <div className="pf-progress-overview">
        <ProgressBar value={stats.overallProgress} color="#6366F1" size="lg" />
        <div className="pf-progress-counts">
          <span><strong style={{ color: '#10B981' }}>{stats.done}</strong> selesai</span>
          <span><strong style={{ color: '#F59E0B' }}>{stats.inProgress}</strong> berjalan</span>
          <span><strong>{stats.todo}</strong> belum</span>
        </div>
      </div>

      {/* Filters */}
      <div className="pf-progress-filters">
        <div className="pf-filter-group">
          <Filter size={14} />
          <select value={filterPath} onChange={(e) => setFilterPath(e.target.value)}>
            <option value="all">Semua Path</option>
            {paths.map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">Semua Status</option>
            {Object.entries(STATUS_CONFIG).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">Semua Type</option>
            {Object.entries(NODE_TYPES).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
        <div className="pf-filter-group">
          <SortAsc size={14} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="status">Sort: Status</option>
            <option value="updated">Sort: Updated</option>
            <option value="path">Sort: Path</option>
          </select>
        </div>
      </div>

      {/* Task list */}
      <div className="pf-task-list">
        {filtered.length === 0 ? (
          <div className="pf-no-tasks">Tidak ada task yang cocok dengan filter.</div>
        ) : (
          filtered.map((node) => {
            const StatusIcon = statusIcons[node.status] || Circle;
            return (
              <div key={node.id} className={`pf-task-item ${node.status === 'done' ? 'done' : ''}`}>
                <button
                  className="pf-task-status-btn"
                  onClick={() => quickToggle(node.id, node.status)}
                  style={{ color: STATUS_CONFIG[node.status]?.color }}
                  title="Toggle status"
                >
                  <StatusIcon size={18} className={node.status === 'in_progress' ? 'animate-spin' : ''} />
                </button>
                <div className="pf-task-info">
                  <span className="pf-task-label">{node.label}</span>
                  <div className="pf-task-meta">
                    <div className="pf-task-path-dot" style={{ background: node.pathColor }} />
                    <span>{node.pathTitle}</span>
                    <span>·</span>
                    <span>{node.phaseTitle}</span>
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
          gap: 1.25rem;
        }
        .pf-progress-page h1 { font-size: 1.5rem; }
        .pf-progress-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: -0.75rem;
        }
        .pf-progress-overview {
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pf-progress-counts {
          display: flex;
          gap: 1.5rem;
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          font-family: var(--font-mono);
        }
        .pf-progress-filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .pf-filter-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-tertiary);
        }
        .pf-filter-group select {
          padding: 0.4rem 0.6rem;
          font-size: 0.8rem;
          font-family: var(--font-body);
          background: var(--color-bg-surface);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
        }
        .pf-task-list {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .pf-task-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
        }
        .pf-task-item:hover {
          background: var(--color-bg-elevated);
          border-color: var(--color-border-secondary);
        }
        .pf-task-item.done {
          opacity: 0.5;
        }
        .pf-task-status-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background var(--transition-fast);
          flex-shrink: 0;
        }
        .pf-task-status-btn:hover { background: var(--color-bg-hover); }
        .pf-task-info { flex: 1; min-width: 0; }
        .pf-task-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        .pf-task-meta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.2rem;
          font-size: 0.7rem;
          color: var(--color-text-tertiary);
          flex-wrap: wrap;
        }
        .pf-task-path-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pf-task-time {
          font-size: 0.7rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .pf-no-tasks {
          text-align: center;
          padding: 3rem;
          color: var(--color-text-tertiary);
          font-size: 0.875rem;
        }
        @media (max-width: 640px) {
          .pf-progress-filters { flex-direction: column; align-items: flex-start; }
          .pf-task-time { display: none; }
        }
      `}</style>
    </div>
  );
}
