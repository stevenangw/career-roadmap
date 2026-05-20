import { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Loader2, Circle } from 'lucide-react';
import { usePaths } from '../hooks/usePaths';
import { useStreak } from '../hooks/useStreak';
import { STATUS_CONFIG, calculateProgress, getAllNodesFromPath, timeAgo } from '../lib/constants';
import Button from '../components/ui/Button';
import Drawer from '../components/ui/Drawer';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import { SkeletonCard } from '../components/ui/Skeleton';
import { fireConfetti } from '../components/ui/ConfettiEffect';
import { toast } from '../components/ui/Toast';

export default function RoadmapView() {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const { getPath, updateNodeStatus, loading } = usePaths();
  const { recordActivity } = useStreak();
  const [selectedNode, setSelectedNode] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const path = getPath(pathId);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    setDrawerOpen(true);
  }, []);

  const handleStatusChange = async (nodeId, newStatus) => {
    const { error } = await updateNodeStatus(nodeId, newStatus);

    if (!error) {
      // Sync selected node state if it's currently open in drawer
      if (selectedNode && selectedNode.id === nodeId) {
        setSelectedNode((prev) => ({
          ...prev,
          status: newStatus,
          updated_at: new Date().toISOString(),
        }));
      }
      
      recordActivity();

      const node = allNodes.find((n) => n.id === nodeId);
      const nodeType = node?.type || 'action';

      if (newStatus === 'done' && nodeType === 'milestone') {
        fireConfetti();
        toast('Milestone selesai. Luar biasa!', 'success');
      } else if (newStatus === 'done') {
        toast('Task selesai.', 'success');
      } else if (newStatus === 'in_progress') {
        toast('Task dimulai.', 'info');
      }
    }
  };

  const handleQuickToggle = async (e, node) => {
    e.stopPropagation(); // Prevent opening drawer
    const nextMap = { todo: 'in_progress', in_progress: 'done', done: 'todo' };
    const nextStatus = nextMap[node.status] || 'todo';
    await handleStatusChange(node.id, nextStatus);
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem' }}>
        <SkeletonCard />
      </div>
    );
  }

  if (!path) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Path tidak ditemukan</h2>
        <Button onClick={() => navigate('/dashboard')} variant="secondary" style={{ marginTop: '1rem' }}>
          Kembali ke Dashboard
        </Button>
      </div>
    );
  }

  const allNodes = getAllNodesFromPath(path);
  const progress = calculateProgress(allNodes);

  return (
    <div className="pf-roadmap-view animate-fade-in">
      {/* Header */}
      <div className="pf-roadmap-header">
        <div className="pf-roadmap-header-left">
          <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>
          <div>
            <h1 style={{ color: path.color }}>{path.title}</h1>
            {path.description && <p className="pf-roadmap-desc">{path.description}</p>}
          </div>
        </div>
        <div className="pf-roadmap-header-right">
          <ProgressBar value={progress} color={path.color} size="md" />
        </div>
      </div>

      {/* Checklist Timeline View */}
      <div className="pf-timeline-container">
        {path.phases && path.phases.length === 0 ? (
          <div className="pf-no-phases">Belum ada fase dalam roadmap ini.</div>
        ) : (
          <div className="pf-timeline-track-wrapper">
            {path.phases.map((phase, phaseIdx) => {
              const phaseNodes = phase.nodes || [];
              return (
                <div key={phase.id} className="pf-timeline-phase">
                  {/* Phase Milestone Marker */}
                  <div className="pf-phase-marker-row">
                    <div className="pf-phase-dot" style={{ backgroundColor: path.color }}>
                      {phaseIdx + 1}
                    </div>
                    <div className="pf-phase-info">
                      <h2>{phase.title}</h2>
                      {phase.duration_label && (
                        <span className="pf-phase-duration">{phase.duration_label}</span>
                      )}
                    </div>
                  </div>

                  {/* Nodes list inside phase */}
                  <div className="pf-phase-nodes-list">
                    {phaseNodes.map((node) => {
                      const isDone = node.status === 'done';
                      const isInProgress = node.status === 'in_progress';

                      return (
                        <div
                          key={node.id}
                          className={`pf-timeline-node-card ${isDone ? 'done' : ''} ${isInProgress ? 'in-progress' : ''}`}
                          onClick={() => handleNodeClick(node)}
                        >
                          {/* Left status interactive toggle indicator */}
                          <button
                            className={`pf-node-toggle-btn ${node.status}`}
                            onClick={(e) => handleQuickToggle(e, node)}
                            title={`Status: ${STATUS_CONFIG[node.status]?.label}. Klik untuk mengubah.`}
                          >
                            {isDone ? (
                              <Check size={14} strokeWidth={3} />
                            ) : isInProgress ? (
                              <Loader2 size={14} className="animate-spin" style={{ color: '#CA8A04' }} />
                            ) : (
                              <Circle size={14} />
                            )}
                          </button>

                          {/* Center info */}
                          <div className="pf-node-card-body">
                            <span className="pf-node-card-title">{node.label}</span>
                            {node.detail && (
                              <p className="pf-node-card-preview">{node.detail}</p>
                            )}
                          </div>

                          {/* Right side type badge */}
                          <div className="pf-node-card-right">
                            <Badge type={node.type} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Node detail drawer */}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Detail Task">
        {selectedNode && (
          <div className="pf-node-detail">
            <Badge type={selectedNode.type} />
            <h2 className="pf-node-detail-label">{selectedNode.label}</h2>

            {selectedNode.detail && (
              <p className="pf-node-detail-text">{selectedNode.detail}</p>
            )}

            {/* Clickable resource links */}
            {selectedNode.links && selectedNode.links.length > 0 && (
              <div className="pf-node-detail-section">
                <span className="pf-node-detail-section-title">📚 Sumber Belajar & Referensi</span>
                <div className="pf-links-list">
                  {selectedNode.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-resource-link"
                    >
                      <span className="pf-resource-link-title">{link.title}</span>
                      <span className={`pf-resource-tag ${link.tag === 'Financial Aid' ? 'financial-aid' : 'free'}`}>
                        {link.tag}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="pf-node-detail-section">
              <span className="pf-node-detail-section-title">Status</span>
              <div className="pf-status-buttons">
                {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                  <button
                    key={key}
                    className={`pf-status-btn ${selectedNode.status === key ? 'active' : ''}`}
                    style={{
                      '--sb-color': cfg.color,
                      '--sb-bg': cfg.bg,
                    }}
                    onClick={() => handleStatusChange(selectedNode.id, key)}
                  >
                    {cfg.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedNode.updated_at && (
              <div className="pf-node-detail-meta">
                Terakhir diupdate: {timeAgo(selectedNode.updated_at)}
              </div>
            )}
          </div>
        )}
      </Drawer>

      <style>{`
        .pf-roadmap-view {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
          padding-bottom: 4rem;
        }
        .pf-roadmap-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .pf-roadmap-header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .pf-roadmap-header-left h1 {
          font-size: 1.5rem;
        }
        .pf-roadmap-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin-top: 0.2rem;
        }
        .pf-roadmap-header-right {
          min-width: 240px;
        }

        /* Timeline Checklist Styling */
        .pf-timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .pf-no-phases, .pf-no-phases-nodes {
          text-align: center;
          padding: 2.5rem;
          color: var(--color-text-tertiary);
          border: 1px dashed var(--color-border-primary);
          border-radius: var(--radius-lg);
          font-size: 0.875rem;
        }
        .pf-timeline-track-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        /* Vertical track line */
        .pf-timeline-track-wrapper::before {
          content: '';
          position: absolute;
          top: 1.5rem;
          bottom: 1.5rem;
          left: 17px;
          width: 2px;
          background: var(--color-border-primary);
          z-index: 0;
          pointer-events: none;
        }
        .pf-timeline-phase {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 1;
        }
        .pf-phase-marker-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .pf-phase-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          z-index: 2;
          box-shadow: 0 0 0 6px var(--color-bg-primary);
        }
        .pf-phase-info {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .pf-phase-info h2 {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        .pf-phase-duration {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Phase nodes card lists */
        .pf-phase-nodes-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-left: 3.25rem; /* Indent under phase header */
        }
        .pf-timeline-node-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-timeline-node-card:hover {
          background: var(--color-bg-elevated);
          border-color: var(--color-border-secondary);
        }
        .pf-timeline-node-card.in-progress {
          border-color: #CA8A04;
        }
        .pf-timeline-node-card.done {
          opacity: 0.55;
        }
        .pf-node-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid var(--color-border-primary);
          background: transparent;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }
        .pf-node-toggle-btn:hover {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
          border-color: var(--color-border-secondary);
        }
        .pf-node-toggle-btn.done {
          background: var(--color-accent-green);
          border-color: var(--color-accent-green);
          color: #ffffff;
        }
        .pf-node-toggle-btn.in_progress {
          border-color: #CA8A04;
        }
        .pf-node-card-body {
          flex: 1;
          min-width: 0;
        }
        .pf-node-card-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-primary);
          display: block;
        }
        .pf-timeline-node-card.done .pf-node-card-title {
          text-decoration: line-through;
          color: var(--color-text-tertiary);
        }
        .pf-node-card-preview {
          font-size: 0.775rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pf-node-card-right {
          flex-shrink: 0;
        }

        /* Side Node Detail Drawer Styles */
        .pf-node-detail {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .pf-node-detail-label {
          font-size: 1.25rem;
          line-height: 1.3;
          font-weight: 500;
        }
        .pf-node-detail-text {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          padding: 1rem;
          background: var(--color-bg-elevated);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-primary);
        }
        .pf-node-detail-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pf-node-detail-section-title {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--color-text-tertiary);
        }
        .pf-status-buttons {
          display: flex;
          gap: 0.5rem;
        }
        .pf-status-btn {
          flex: 1;
          padding: 0.6rem;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-heading);
          border: 1.5px solid var(--color-border-primary);
          background: var(--color-bg-surface);
          color: var(--color-text-secondary);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-status-btn:hover {
          border-color: var(--sb-color);
          color: var(--sb-color);
        }
        .pf-status-btn.active {
          background: var(--sb-bg);
          border-color: var(--sb-color);
          color: var(--sb-color);
        }
        .pf-node-detail-meta {
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
          font-family: var(--font-mono);
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-primary);
        }

        /* Resource Links */
        .pf-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .pf-resource-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .pf-resource-link:hover {
          border-color: var(--color-accent-indigo);
          background: rgba(99, 102, 241, 0.06);
          transform: translateX(3px);
        }
        .pf-resource-link-title {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
          line-height: 1.3;
          min-width: 0;
          flex: 1;
        }
        .pf-resource-tag {
          flex-shrink: 0;
          font-size: 0.65rem;
          font-family: var(--font-mono);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }
        .pf-resource-tag.free {
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }
        .pf-resource-tag.financial-aid {
          background: rgba(139, 92, 246, 0.15);
          color: #8B5CF6;
        }

        @media (max-width: 640px) {
          .pf-roadmap-header { flex-direction: column; align-items: flex-start; }
          .pf-roadmap-header-right { width: 100%; min-width: 0; }
          .pf-phase-nodes-list { margin-left: 0; }
          .pf-timeline-track-wrapper::before { display: none; }
          .pf-timeline-node-card { padding: 0.875rem; }
        }
      `}</style>
    </div>
  );
}
