import { useParams } from 'react-router-dom';
import { DEMO_PROFILE, DEMO_PATHS, DEMO_STRENGTHS, getAllNodesFromPath, calculateProgress } from '../lib/constants';
import ProgressBar from '../components/ui/ProgressBar';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { toast } from '../components/ui/Toast';
import { Share2, User } from 'lucide-react';

export default function PublicProfile() {
  const { slug } = useParams();

  // For demo, use hardcoded data. In production, fetch from Supabase by slug.
  const profile = slug === 'steven' ? DEMO_PROFILE : null;
  const paths = slug === 'steven' ? DEMO_PATHS : [];
  const strengths = slug === 'steven' ? DEMO_STRENGTHS : [];

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    toast('URL copied successfully!', 'success');
  }

  if (!profile) {
    return (
      <div className="pf-public-404 glass">
        <h1>Profile not found</h1>
        <p>User with slug "{slug}" does not exist or is not public.</p>
      </div>
    );
  }

  return (
    <div className="pf-public animate-fade-in">
      {/* Profile header glass card */}
      <div className="pf-public-header glass animate-fade-in-up">
        <div className="pf-public-avatar">
          {profile.avatar_url ? (
            <img src={profile.avatar_url} alt={profile.name} />
          ) : (
            <User size={30} style={{ color: '#fff' }} />
          )}
        </div>
        <div className="pf-public-info">
          <h1>{profile.name}</h1>
          <p>{profile.headline}</p>
        </div>
        <Button variant="outline" size="sm" icon={Share2} onClick={handleShare}>
          Share Profile
        </Button>
      </div>

      {/* Strengths */}
      {strengths.length > 0 && (
        <div className="pf-public-strengths glass">
          {strengths.map((s) => (
            <span key={s.id} className="pf-public-tag">{s.label}</span>
          ))}
        </div>
      )}

      {/* Paths */}
      <div className="pf-public-paths stagger-children">
        {paths.map((path) => {
          const allNodes = getAllNodesFromPath(path);
          const progress = calculateProgress(allNodes);
          const doneCount = allNodes.filter((n) => n.status === 'done').length;

          return (
            <Card key={path.id} hover={false} className="pf-public-path glass" glow={path.color}>
              <div className="pf-public-path-header">
                <div className="pf-public-path-color" style={{ background: path.color }} />
                <h3>{path.title}</h3>
              </div>
              {path.description && <p className="pf-public-path-desc">{path.description}</p>}
              
              <div className="pf-public-progress-wrapper">
                <ProgressBar value={progress} color={path.color} size="sm" />
              </div>
              
              <span className="pf-public-path-count">{doneCount}/{allNodes.length} tasks completed</span>

              {/* Phase list */}
              <div className="pf-public-phases">
                {(path.phases || []).map((phase) => (
                  <div key={phase.id} className="pf-public-phase">
                    <h4>{phase.title}</h4>
                    <div className="pf-public-nodes">
                      {(phase.nodes || []).map((node) => {
                        return (
                          <div key={node.id} className={`pf-public-node ${node.status} glass`}>
                            <Badge type={node.type} />
                            <span className="pf-public-node-label">{node.label}</span>
                            <Badge status={node.status} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <style>{`
        .pf-public {
          max-width: 860px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-public-404 {
          text-align: center;
          padding: 4rem 1.5rem;
          max-width: 600px;
          margin: 4rem auto;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
        }
        .pf-public-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem 2rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          flex-wrap: wrap;
          box-shadow: var(--shadow-md);
        }
        .pf-public-avatar {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-public-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .pf-public-info { flex: 1; min-width: 200px; }
        .pf-public-info h1 { font-size: 1.55rem; letter-spacing: -0.025em; }
        .pf-public-info p { font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem; }
        
        .pf-public-strengths {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-public-tag {
          padding: 0.35rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: var(--radius-full);
        }
        
        .pf-public-paths {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-public-path {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pf-public-path-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .pf-public-path-color {
          width: 5px;
          height: 20px;
          border-radius: var(--radius-sm);
          flex-shrink: 0;
        }
        .pf-public-path-header h3 {
          font-size: 1.2rem;
          letter-spacing: -0.015em;
        }
        .pf-public-path-desc {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }
        .pf-public-progress-wrapper {
          margin: 0.25rem 0;
        }
        .pf-public-path-count {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .pf-public-phases {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--color-border-primary);
          padding-top: 1rem;
        }
        .pf-public-phase h4 {
          font-size: 0.95rem;
          margin-bottom: 0.65rem;
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
        }
        .pf-public-nodes {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pf-public-node {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-primary);
          transition: all var(--transition-fast);
        }
        .pf-public-node.done { opacity: 0.6; }
        .pf-public-node-label {
          flex: 1;
          font-size: 0.875rem;
          color: var(--color-text-primary);
        }
        .pf-public-node.done .pf-public-node-label {
          text-decoration: line-through;
          color: var(--color-text-tertiary);
        }
      `}</style>
    </div>
  );
}
