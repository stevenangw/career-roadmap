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
    toast('URL berhasil disalin!', 'success');
  }

  if (!profile) {
    return (
      <div className="pf-public-404">
        <h1>Profil tidak ditemukan</h1>
        <p>User dengan slug "{slug}" tidak ada atau belum publik.</p>
      </div>
    );
  }

  return (
    <div className="pf-public animate-fade-in">
      {/* Profile header */}
      <div className="pf-public-header">
        <div className="pf-public-avatar">
          {profile.avatar_url ? (
            <img src={profile.avatar_url} alt={profile.name} />
          ) : (
            <User size={40} />
          )}
        </div>
        <div className="pf-public-info">
          <h1>{profile.name}</h1>
          <p>{profile.headline}</p>
        </div>
        <Button variant="secondary" size="sm" icon={Share2} onClick={handleShare}>
          Share
        </Button>
      </div>

      {/* Strengths */}
      {strengths.length > 0 && (
        <div className="pf-public-strengths">
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
            <Card key={path.id} hover={false} className="pf-public-path">
              <div className="pf-public-path-header">
                <div className="pf-public-path-color" style={{ background: path.color }} />
                <h3>{path.title}</h3>
              </div>
              {path.description && <p className="pf-public-path-desc">{path.description}</p>}
              <ProgressBar value={progress} color={path.color} />
              <span className="pf-public-path-count">{doneCount}/{allNodes.length} tasks completed</span>

              {/* Phase list */}
              <div className="pf-public-phases">
                {(path.phases || []).map((phase) => (
                  <div key={phase.id} className="pf-public-phase">
                    <h4>{phase.title}</h4>
                    <div className="pf-public-nodes">
                      {(phase.nodes || []).map((node) => (
                        <div key={node.id} className={`pf-public-node ${node.status}`}>
                          <Badge type={node.type} />
                          <span className="pf-public-node-label">{node.label}</span>
                          <Badge status={node.status} />
                        </div>
                      ))}
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
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-public-404 {
          text-align: center;
          padding: 4rem 1.5rem;
        }
        .pf-public-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .pf-public-avatar {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          overflow: hidden;
          flex-shrink: 0;
        }
        .pf-public-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .pf-public-info { flex: 1; }
        .pf-public-info h1 { font-size: 1.5rem; }
        .pf-public-info p { font-size: 0.875rem; color: var(--color-text-secondary); }
        .pf-public-strengths {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .pf-public-tag {
          padding: 0.3rem 0.7rem;
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
          gap: 1rem;
        }
        .pf-public-path {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pf-public-path-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .pf-public-path-color {
          width: 6px;
          height: 24px;
          border-radius: 3px;
          flex-shrink: 0;
        }
        .pf-public-path-desc {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }
        .pf-public-path-count {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
        }
        .pf-public-phases {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .pf-public-phase h4 {
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-secondary);
        }
        .pf-public-nodes {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .pf-public-node {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: var(--color-bg-primary);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-primary);
        }
        .pf-public-node.done { opacity: 0.5; }
        .pf-public-node-label {
          flex: 1;
          font-size: 0.8rem;
          color: var(--color-text-primary);
        }
      `}</style>
    </div>
  );
}
