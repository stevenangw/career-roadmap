import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Compass, ArrowRight, CheckCircle, Map, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

const steps = [
  { icon: Sparkles, title: 'Sign In', desc: 'Login dengan Google dalam 1 klik' },
  { icon: Map, title: 'Build Roadmap', desc: 'Buat career path yang personal' },
  { icon: CheckCircle, title: 'Track Progress', desc: 'Tandai milestone, lihat progress' },
];

export default function LandingPage() {
  const { user, signInWithGoogle, isDemo } = useAuth();
  const navigate = useNavigate();

  async function handleGetStarted() {
    if (user) {
      navigate('/dashboard');
    } else {
      await signInWithGoogle();
      if (isDemo) {
        navigate('/dashboard');
      }
    }
  }

  return (
    <div className="pf-landing">
      {/* Navbar */}
      <nav className="pf-landing-nav">
        <div className="pf-landing-nav-inner">
          <div className="pf-landing-brand">
            <Compass size={24} />
            <span>PathForge</span>
          </div>
          <Button onClick={handleGetStarted} size="sm">
            {user ? 'Dashboard' : 'Get Started'}
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pf-hero">
        <div className="pf-hero-content animate-fade-in-up">
          <div className="pf-hero-badge">
            <Sparkles size={14} />
            <span>Career Roadmap Tracker</span>
          </div>
          <h1 className="pf-hero-title">
            Your career roadmap.
            <br />
            <span>Built by you. Tracked by data.</span>
          </h1>
          <p className="pf-hero-desc">
            Bangun peta karier visual, lacak progress setiap skill dan milestone,
            dan bagikan perjalananmu ke dunia.
          </p>
          <div className="pf-hero-actions">
            <Button onClick={handleGetStarted} size="lg" icon={ArrowRight}>
              {user ? 'Go to Dashboard' : 'Mulai Sekarang'}
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/u/steven')}>
              Lihat Demo
            </Button>
          </div>
        </div>

        {/* Preview mock */}
        <div className="pf-hero-preview animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="pf-preview-window">
            <div className="pf-preview-bar">
              <div className="pf-preview-dots">
                <span /><span /><span />
              </div>
            </div>
            <div className="pf-preview-body">
              <div className="pf-preview-sidebar">
                <div className="pf-preview-item active" style={{ '--c': '#3B82F6' }} />
                <div className="pf-preview-item" style={{ '--c': '#8B5CF6' }} />
                <div className="pf-preview-item" style={{ '--c': '#10B981' }} />
              </div>
              <div className="pf-preview-main">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="pf-preview-node" style={{ animationDelay: `${i * 0.1 + 0.5}s` }} />
                ))}
                <div className="pf-preview-edge e1" />
                <div className="pf-preview-edge e2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pf-how">
        <h2>Bagaimana cara kerjanya?</h2>
        <div className="pf-how-steps stagger-children">
          {steps.map((step, i) => (
            <div key={i} className="pf-how-step">
              <div className="pf-how-icon">
                <step.icon size={24} />
              </div>
              <div className="pf-how-number">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="pf-features">
        <h2>Kenapa PathForge?</h2>
        <div className="pf-features-grid stagger-children">
          {[
            { title: 'Visual Roadmap', desc: 'Node-based flowchart untuk setiap career path', color: '#3B82F6' },
            { title: 'Multi-Path', desc: 'Track beberapa jalur karier sekaligus', color: '#8B5CF6' },
            { title: 'Progress Tracking', desc: 'Tandai task, lihat persentase selesai', color: '#10B981' },
            { title: 'Public Profile', desc: 'Bagikan roadmap via URL unik', color: '#F97316' },
            { title: 'Streak & Gamifikasi', desc: 'Motivasi harian dengan streak counter', color: '#EF4444' },
            { title: 'Real-time Sync', desc: 'Data tersimpan aman di cloud', color: '#EC4899' },
          ].map((f, i) => (
            <div key={i} className="pf-feature-card" style={{ '--fc': f.color }}>
              <div className="pf-feature-dot" />
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta">
        <h2>Siap memulai perjalanan?</h2>
        <p>Gratis. Tidak perlu kartu kredit.</p>
        <Button onClick={handleGetStarted} size="lg" icon={ArrowRight}>
          Buat Roadmap Sekarang
        </Button>
      </section>

      {/* Footer */}
      <footer className="pf-footer">
        <div className="pf-footer-inner">
          <div className="pf-footer-brand">
            <Compass size={18} />
            <span>PathForge</span>
          </div>
          <p>Built by Steven</p>
        </div>
      </footer>

      <style>{`
        .pf-landing {
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Nav */
        .pf-landing-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border-primary);
          background: color-mix(in srgb, var(--color-bg-primary) 80%, transparent);
        }
        .pf-landing-nav-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-landing-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--color-accent-indigo);
        }

        .pf-hero {
          position: relative;
          padding: 8rem 1.5rem 4rem;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .pf-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-secondary);
          border-radius: var(--radius-full);
          margin-bottom: 1.5rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .pf-hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .pf-hero-desc {
          font-size: 1.1rem;
          color: var(--color-text-secondary);
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        .pf-hero-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Preview window */
        .pf-hero-preview {
          margin-top: 3rem;
          perspective: 1000px;
        }
        .pf-preview-window {
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }
        .pf-preview-bar {
          padding: 0.6rem 0.8rem;
          border-bottom: 1px solid var(--color-border-primary);
        }
        .pf-preview-dots {
          display: flex;
          gap: 0.35rem;
        }
        .pf-preview-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-border-accent);
        }
        .pf-preview-body {
          display: flex;
          height: 200px;
        }
        .pf-preview-sidebar {
          width: 60px;
          border-right: 1px solid var(--color-border-primary);
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pf-preview-item {
          height: 8px;
          border-radius: 4px;
          background: var(--c);
          opacity: 0.3;
        }
        .pf-preview-item.active { opacity: 1; }
        .pf-preview-main {
          flex: 1;
          padding: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: flex-start;
          position: relative;
        }
        .pf-preview-node {
          width: 80px;
          height: 40px;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-secondary);
          border-radius: var(--radius-md);
          opacity: 0;
          animation: fadeIn 0.4s ease-out forwards;
        }
        .pf-preview-edge {
          position: absolute;
          height: 2px;
          background: var(--color-border-accent);
          border-radius: 1px;
        }
        .pf-preview-edge.e1 { width: 30px; top: 38px; left: 112px; }
        .pf-preview-edge.e2 { width: 30px; top: 38px; left: 224px; }

        /* How */
        .pf-how {
          padding: 4rem 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .pf-how h2 {
          font-size: 1.75rem;
          margin-bottom: 2.5rem;
        }
        .pf-how-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .pf-how-step {
          padding: 1.5rem;
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-xl);
          text-align: center;
        }
        .pf-how-icon {
          display: inline-flex;
          padding: 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          color: var(--color-accent-indigo);
          border-radius: var(--radius-lg);
          margin-bottom: 0.75rem;
        }
        .pf-how-number {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-text-tertiary);
          margin-bottom: 0.4rem;
        }
        .pf-how-step h3 { font-size: 1rem; margin-bottom: 0.3rem; }
        .pf-how-step p { font-size: 0.8rem; color: var(--color-text-secondary); }

        /* Features */
        .pf-features {
          padding: 4rem 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .pf-features h2 {
          font-size: 1.75rem;
          margin-bottom: 2.5rem;
        }
        .pf-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
        }
        .pf-feature-card {
          text-align: left;
          padding: 1.25rem;
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-xl);
          transition: all var(--transition-normal);
        }
        .pf-feature-card:hover {
          border-color: var(--fc);
        }
        .pf-feature-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--fc);
          margin-bottom: 0.75rem;
        }
        .pf-feature-card h4 { font-size: 0.95rem; margin-bottom: 0.3rem; }
        .pf-feature-card p { font-size: 0.8rem; color: var(--color-text-secondary); }

        /* CTA */
        .pf-cta {
          padding: 5rem 1.5rem;
          text-align: center;
        }
        .pf-cta h2 { font-size: 2rem; margin-bottom: 0.5rem; }
        .pf-cta p { color: var(--color-text-tertiary); margin-bottom: 1.5rem; }

        /* Footer */
        .pf-footer {
          border-top: 1px solid var(--color-border-primary);
          padding: 1.5rem;
        }
        .pf-footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-footer-brand {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }
        .pf-footer p { font-size: 0.8rem; color: var(--color-text-tertiary); }

        @media (max-width: 640px) {
          .pf-hero { padding: 6rem 1rem 2rem; }
          .pf-hero-desc { font-size: 0.95rem; }
          .pf-footer-inner { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </div>
  );
}
