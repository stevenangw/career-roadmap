import { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Loader2, ExternalLink, BookOpen, Lock } from 'lucide-react';
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
        toast('Milestone completed. Awesome!', 'success');
      } else if (newStatus === 'done') {
        toast('Task completed.', 'success');
      } else if (newStatus === 'in_progress') {
        toast('Task started.', 'info');
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
      <div className="pf-timeline-loading">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (!path) {
    return (
      <div className="pf-timeline-error">
        <h2>Roadmap not found</h2>
        <Button onClick={() => navigate('/dashboard')} variant="secondary" style={{ marginTop: '1rem' }}>
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const allNodes = getAllNodesFromPath(path);
  const progress = calculateProgress(allNodes);

  return (
    <div className="pf-roadmap-view animate-fade-in">
      {/* Header card with glass */}
      <div className="pf-roadmap-header glass">
        <div className="pf-roadmap-header-left">
          <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>
          <div className="pf-roadmap-info">
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
          <div className="pf-no-phases">No phases in this roadmap yet.</div>
        ) : (
          <div className="pf-timeline-track-wrapper" style={{ '--path-color': path.color }}>
            {path.phases.map((phase, phaseIdx) => {
              const phaseNodes = phase.nodes || [];
              const phaseDoneCount = phaseNodes.filter((n) => n.status === 'done').length;
              const isPhaseDone = phaseNodes.length > 0 && phaseDoneCount === phaseNodes.length;
              const isPhaseInProgress = phaseNodes.some((n) => n.status === 'in_progress' || n.status === 'done') && !isPhaseDone;

              return (
                <div key={phase.id} className={`pf-timeline-phase ${isPhaseDone ? 'done' : ''} ${isPhaseInProgress ? 'in-progress' : ''}`}>
                  {/* Phase Milestone Marker */}
                  <div className="pf-phase-marker-row">
                    <div 
                      className={`pf-phase-dot ${isPhaseDone ? 'done' : ''} ${isPhaseInProgress ? 'in-progress' : ''}`} 
                      style={{ 
                        backgroundColor: isPhaseDone ? 'var(--color-accent-green)' : isPhaseInProgress ? 'var(--color-accent-yellow)' : 'var(--color-bg-hover)',
                        color: isPhaseDone || isPhaseInProgress ? 'var(--color-bg-primary)' : 'var(--color-text-tertiary)',
                        border: `2px solid ${isPhaseDone ? 'var(--color-accent-green)' : isPhaseInProgress ? 'var(--color-accent-yellow)' : 'var(--color-border-primary)'}`,
                        boxShadow: isPhaseDone ? '0 0 15px rgba(16, 185, 129, 0.4)' : isPhaseInProgress ? '0 0 15px rgba(245, 158, 11, 0.4)' : 'none'
                      }}
                    >
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
                          className={`pf-timeline-node-card glass ${node.status} ${isDone ? 'done' : ''} ${isInProgress ? 'in-progress' : ''}`}
                          style={{
                            '--node-border': path.color,
                          }}
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
                              <Loader2 size={14} className="animate-spin" />
                            ) : (
                              <Lock size={14} />
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

      {/* Node detail drawer with beautiful glassmorphism */}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Task Details">
        {selectedNode && (
          <div className="pf-node-detail animate-fade-in">
            <div className="pf-detail-header-badge">
              <Badge type={selectedNode.type} />
            </div>
            
            <h2 className="pf-node-detail-label">{selectedNode.label}</h2>

            {selectedNode.detail && (
              <p className="pf-node-detail-text">{selectedNode.detail}</p>
            )}

            {/* Clickable resource links */}
            {selectedNode.links && selectedNode.links.length > 0 && (
              <div className="pf-node-detail-section">
                <span className="pf-node-detail-section-title">
                  <BookOpen size={13} style={{ marginRight: '0.35rem', display: 'inline' }} />
                  References & Learning Resources
                </span>
                <div className="pf-links-list">
                  {selectedNode.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pf-resource-link"
                    >
                      <div className="pf-resource-link-info">
                        <span className="pf-resource-link-title">{link.title}</span>
                        <ExternalLink size={12} className="pf-resource-link-icon" />
                      </div>
                      <span className={`pf-resource-tag ${link.tag === 'Financial Aid' ? 'financial-aid' : 'free'}`}>
                        {link.tag}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="pf-node-detail-section">
              <span className="pf-node-detail-section-title">Progress Status</span>
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
                Last updated: {timeAgo(selectedNode.updated_at)}
              </div>
            )}
          </div>
        )}
      </Drawer>

      <style>{`
        .pf-roadmap-view {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 860px;
          margin: 0 auto;
          padding-bottom: 4rem;
        }

        .pf-timeline-loading, .pf-timeline-error {
          padding: 2rem;
          text-align: center;
        }

        /* Header Card styling */
        .pf-roadmap-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          gap: 1.5rem;
          flex-wrap: wrap;
          box-shadow: var(--shadow-md);
        }
        .pf-roadmap-header-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .pf-roadmap-info {
          display: flex;
          flex-direction: column;
        }
        .pf-roadmap-header-left h1 {
          font-size: 1.45rem;
          letter-spacing: -0.025em;
        }
        .pf-roadmap-desc {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
          line-height: 1.5;
        }
        .pf-roadmap-header-right {
          min-width: 260px;
          flex-shrink: 0;
        }

        /* Timeline Checklist Layout */
        .pf-timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .pf-no-phases {
          text-align: center;
          padding: 3rem;
          color: var(--color-text-tertiary);
          border: 1.5px dashed var(--color-border-primary);
          border-radius: var(--radius-xl);
          font-size: 0.875rem;
        }
        .pf-timeline-track-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        /* Vertical track connection lines */
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
          gap: 1.25rem;
          z-index: 1;
        }
        .pf-phase-marker-row {
          display: flex;
          align-items: center;
          gap: 1.15rem;
        }
        .pf-phase-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          z-index: 2;
          box-shadow: 0 0 0 6px var(--color-bg-primary);
          transition: all var(--transition-normal);
        }
        .pf-phase-info {
          display: flex;
          align-items: baseline;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .pf-phase-info h2 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-text-primary);
          letter-spacing: -0.015em;
        }
        .pf-phase-duration {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: var(--color-bg-hover);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-primary);
        }

        /* Phase lists cards */
        .pf-phase-nodes-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-left: 3.25rem; /* Indent under phase header */
        }
        .pf-timeline-node-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.15rem 1.25rem;
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          border: 1.5px solid var(--border);
          box-sizing: border-box;
          max-width: 100%;
        }
        
        .pf-timeline-node-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        
        /* State Milestone Visual Styling */
        .pf-timeline-node-card.todo {
          background: var(--surface-alt);
          border-color: var(--border);
          color: var(--text-secondary);
        }
        .pf-timeline-node-card.in-progress {
          background: var(--surface);
          border-color: var(--accent);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04), 0 0 0 1px var(--accent);
        }
        .pf-timeline-node-card.done {
          background: var(--surface);
          border-color: var(--success);
          opacity: 0.85;
        }
        
        /* Left button indicator & Touch Target Expansion */
        .pf-node-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          background: var(--surface-alt);
          color: var(--muted);
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
          position: relative;
        }
        /* Touch target minimum 48x48px via invisible pseudo-element */
        .pf-node-toggle-btn::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
        }
        .pf-node-toggle-btn:hover {
          background: var(--surface);
          color: var(--text-primary);
          border-color: var(--border);
        }
        .pf-node-toggle-btn.done {
          background: var(--success);
          border-color: var(--success);
          color: var(--surface);
        }
        .pf-node-toggle-btn.in_progress {
          border-color: var(--accent);
          background: var(--surface);
          color: var(--accent);
        }
        .pf-node-toggle-btn.todo {
          border-color: var(--border);
          background: var(--surface-alt);
          color: var(--muted);
        }

        .pf-node-card-body {
          flex: 1;
          min-width: 0;
        }
        .pf-node-card-title {
          font-family: var(--font-heading);
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          font-weight: 600;
          color: var(--text-primary);
          display: block;
        }
        .pf-timeline-node-card.done .pf-node-card-title {
          text-decoration: line-through;
          color: var(--text-secondary);
        }
        .pf-node-card-preview {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 0.3rem;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pf-node-card-right {
          flex-shrink: 0;
        }

        /* Slide Panel drawer details styling */
        .pf-node-detail {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-detail-header-badge {
          align-self: flex-start;
        }
        .pf-node-detail-label {
          font-family: var(--font-heading);
          font-size: var(--h2-clamp);
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .pf-node-detail-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          padding: 1.25rem;
          background: var(--surface-alt);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
        }
        .pf-node-detail-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pf-node-detail-section-title {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--muted);
          display: flex;
          align-items: center;
        }
        .pf-status-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .pf-status-btn {
          flex: 1;
          min-height: 48px; /* Touch target size */
          padding: 0.7rem;
          font-size: 0.825rem;
          font-weight: 600;
          font-family: var(--font-heading);
          border: 1.5px solid var(--border);
          background: var(--surface);
          color: var(--text-secondary);
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
          box-shadow: 0 4px 12px color-mix(in srgb, var(--sb-color) 15%, transparent);
        }
        .pf-node-detail-meta {
          font-size: 0.75rem;
          color: var(--muted);
          font-family: var(--font-mono);
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        /* Resource Links */
        .pf-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pf-resource-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem 1rem;
          background: var(--surface-alt);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
          cursor: pointer;
          min-height: 48px; /* Touch target size */
        }
        .pf-resource-link:hover {
          border-color: var(--accent);
          background: color-mix(in srgb, var(--accent) 6%, var(--surface-alt));
          transform: translateX(4px);
        }
        .pf-resource-link-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
          flex: 1;
        }
        .pf-resource-link-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--accent);
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pf-resource-link-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .pf-resource-tag {
          flex-shrink: 0;
          font-size: 0.65rem;
          font-family: var(--font-mono);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }
        .pf-resource-tag.free {
          background: rgba(74, 124, 89, 0.12);
          color: var(--success);
        }
        .pf-resource-tag.financial-aid {
          background: rgba(200, 169, 110, 0.12);
          color: var(--highlight);
        }

        /* Mobile specific layouts */
        @media (max-width: 768px) {
          .pf-roadmap-view {
            padding-inline: 1.25rem; /* Consistently 20px padding */
          }
          .pf-roadmap-header {
            flex-direction: column;
            align-items: stretch;
            padding: 1.25rem;
            gap: 1rem;
          }
          .pf-roadmap-header-right {
            width: 100%;
            min-width: unset;
          }
          .pf-phase-nodes-list {
            margin-left: 0; /* Remove timeline card indentation */
          }
          .pf-timeline-track-wrapper::before {
            display: none; /* Hide vertical track lines on mobile */
          }
        }

        @media (max-width: 480px) {
          .pf-timeline-node-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1.25rem;
          }
          .pf-node-card-body {
            width: 100%;
          }
          .pf-node-card-right {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
}
