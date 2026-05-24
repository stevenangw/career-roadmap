import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Compass, ArrowRight, CheckCircle, Map, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

const steps = [
  { icon: Sparkles, title: 'Secure Authentication', desc: 'One-click administrative Google sign-in' },
  { icon: Map, title: 'Visual Roadmap', desc: 'Structured and highly personalized career path mapping' },
  { icon: CheckCircle, title: 'Progress Tracking', desc: 'Log daily learning habits and track specific skill sets' },
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
      {/* Background Mesh Gradients */}
      <div className="pf-landing-glow g1" />
      <div className="pf-landing-glow g2" />

      {/* Navbar */}
      <nav className="pf-landing-nav glass animate-fade-in">
        <div className="pf-landing-nav-inner">
          <div className="pf-landing-brand">
            <Compass size={22} className="pf-landing-brand-icon" />
            <span>Steven's Journey</span>
          </div>
          <Button onClick={handleGetStarted} size="sm">
            {user ? 'Dashboard' : 'Sign In'}
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pf-hero">
        <div className="pf-hero-content animate-fade-in-up">
          <div className="pf-hero-badge">
            <Sparkles size={13} />
            <span>Steven's Career Journey</span>
          </div>
          <h1 className="pf-hero-title">
            My career roadmap.
            <br />
            <span>Built by me. Tracked by data.</span>
          </h1>
          <p className="pf-hero-desc">
            A visual, personal career roadmap to track milestones, skill progress,
            and map out my professional future transparently.
          </p>
          <div className="pf-hero-actions">
            <Button onClick={handleGetStarted} size="lg" icon={ArrowRight}>
              {user ? 'Open Dashboard' : 'Start Exploring'}
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/u/steven')}>
              View Public Profile
            </Button>
          </div>
        </div>

        {/* Preview mock */}
        <div className="pf-hero-preview animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="pf-preview-window glass">
            <div className="pf-preview-bar">
              <div className="pf-preview-dots">
                <span /><span /><span />
              </div>
              <div className="pf-preview-title-bar">steven-career-roadmap.json</div>
            </div>
            <div className="pf-preview-body">
              <div className="pf-preview-sidebar">
                <div className="pf-preview-item active" style={{ '--c': 'var(--color-accent-indigo)' }} />
                <div className="pf-preview-item" style={{ '--c': 'var(--color-accent-purple)' }} />
                <div className="pf-preview-item" style={{ '--c': 'var(--color-accent-green)' }} />
              </div>
              <div className="pf-preview-main">
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const colors = ['var(--color-accent-indigo)', 'var(--color-accent-purple)', 'var(--color-accent-green)', 'var(--color-accent-yellow)', 'var(--color-accent-orange)', 'var(--color-accent-pink)'];
                  return (
                    <div 
                      key={i} 
                      className="pf-preview-node" 
                      style={{ 
                        animationDelay: `${i * 0.15 + 0.4}s`,
                        '--node-c': colors[i],
                      }} 
                    />
                  );
                })}
                <div className="pf-preview-edge e1" />
                <div className="pf-preview-edge e2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pf-how">
        <h2>How does it work?</h2>
        <div className="pf-how-steps stagger-children">
          {steps.map((step, i) => (
            <div key={i} className="pf-how-step glass">
              <div className="pf-how-icon">
                <step.icon size={22} />
              </div>
              <div className="pf-how-number">0{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="pf-features">
        <h2>Why Steven's Journey?</h2>
        <div className="pf-features-grid stagger-children">
          {[
            { title: 'Visual Roadmap', desc: 'Interactive timeline and structured system for every career path.', color: 'var(--color-accent-indigo)' },
            { title: 'Multi-Path', desc: 'Track multiple focus areas simultaneously (Data Engineering, AI, Blockchain).', color: 'var(--color-accent-purple)' },
            { title: 'Progress Tracking', desc: 'Log completed sub-tasks for real-time progress calculations.', color: 'var(--color-accent-green)' },
            { title: 'Public Profile', desc: 'Share your career map with recruiters or the public via custom URLs.', color: 'var(--color-accent-orange)' },
            { title: 'Streak Tracker', desc: 'Daily gamification to spark consistent learning habits.', color: 'var(--color-accent-red)' },
            { title: 'Integrated Resources', desc: 'Direct links to high-quality learning resources and credentials.', color: 'var(--color-accent-pink)' },
          ].map((f, i) => (
            <div key={i} className="pf-feature-card glass" style={{ '--fc': f.color }}>
              <div className="pf-feature-dot" />
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pf-cta animate-fade-in">
        <div className="pf-cta-box glass">
          <h2>Explore My Career Journey</h2>
          <p>View my career targets, technical accomplishments, and recent portfolio.</p>
          <Button onClick={handleGetStarted} size="lg" icon={ArrowRight}>
            Open Dashboard
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="pf-footer animate-fade-in">
        <div className="pf-footer-inner">
          <div className="pf-footer-brand">
            <Compass size={18} />
            <span>Steven's Journey</span>
          </div>
          <p>© {new Date().getFullYear()} · Specially designed for Steven Ang</p>
        </div>
      </footer>

      <style>{`
        .pf-landing {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient background glow dots */
        .pf-landing-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.12;
          z-index: -1;
          pointer-events: none;
        }
        .pf-landing-glow.g1 {
          top: -100px;
          left: -100px;
          background: var(--color-accent-indigo);
        }
        .pf-landing-glow.g2 {
          top: 40%;
          right: -200px;
          background: var(--color-accent-purple);
        }

        /* Nav */
        .pf-landing-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          border-bottom: 1px solid var(--color-border-primary);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        .pf-landing-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 60px;
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
          color: var(--color-text-primary);
          letter-spacing: -0.025em;
        }
        .pf-landing-brand-icon {
          color: var(--color-accent-indigo);
        }

        /* Hero */
        .pf-hero {
          position: relative;
          padding: 9rem 1.5rem 5rem;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        .pf-hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pf-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 1.1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          background: var(--color-bg-hover);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-full);
          margin-bottom: 1.75rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          box-shadow: var(--shadow-sm);
        }
        .pf-hero-title {
          font-size: clamp(2.25rem, 6vw, 4rem);
          line-height: 1.15;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }
        .pf-hero-title span {
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pf-hero-desc {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          max-width: 580px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
        }
        .pf-hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Preview window */
        .pf-hero-preview {
          perspective: 1200px;
          max-width: 780px;
          margin: 0 auto;
          width: 100%;
        }
        .pf-preview-window {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }
        .pf-preview-bar {
          padding: 0.75rem 1.25rem;
          border-bottom: 1px solid var(--color-border-primary);
          display: flex;
          align-items: center;
          position: relative;
        }
        .pf-preview-dots {
          display: flex;
          gap: 0.4rem;
        }
        .pf-preview-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .pf-preview-dots span:nth-child(1) { background: #FF5F56; }
        .pf-preview-dots span:nth-child(2) { background: #FFBD2E; }
        .pf-preview-dots span:nth-child(3) { background: #27C93F; }
        .pf-preview-title-bar {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
        }
        .pf-preview-body {
          display: flex;
          height: 240px;
        }
        .pf-preview-sidebar {
          width: 70px;
          border-right: 1px solid var(--color-border-primary);
          padding: 1.25rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pf-preview-item {
          height: 6px;
          border-radius: 3px;
          background: var(--c);
          opacity: 0.25;
        }
        .pf-preview-item.active { opacity: 0.95; }
        .pf-preview-main {
          flex: 1;
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1.5rem;
          position: relative;
        }
        .pf-preview-node {
          background: var(--color-bg-elevated);
          border: 1.5px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          opacity: 0;
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: all var(--transition-fast);
          position: relative;
        }
        .pf-preview-node::after {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--node-c);
          box-shadow: 0 0 10px var(--node-c);
        }
        .pf-preview-node:hover {
          border-color: var(--node-c);
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        /* How */
        .pf-how {
          padding: 5rem 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        .pf-how h2 {
          font-size: 2rem;
          margin-bottom: 3.5rem;
          letter-spacing: -0.025em;
        }
        .pf-how-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .pf-how-step {
          padding: 2rem;
          border-radius: var(--radius-xl);
          text-align: center;
          transition: transform var(--transition-normal);
        }
        .pf-how-step:hover {
          transform: translateY(-4px);
        }
        .pf-how-icon {
          display: inline-flex;
          padding: 0.9rem;
          background: color-mix(in srgb, var(--color-accent-indigo) 12%, transparent);
          color: var(--color-accent-indigo);
          border-radius: var(--radius-xl);
          margin-bottom: 1.25rem;
        }
        .pf-how-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .pf-how-step h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
        .pf-how-step p { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5; }

        /* Features */
        .pf-features {
          padding: 5rem 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        .pf-features h2 {
          font-size: 2rem;
          margin-bottom: 3.5rem;
          letter-spacing: -0.025em;
        }
        .pf-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .pf-feature-card {
          text-align: left;
          padding: 1.75rem;
          border-radius: var(--radius-xl);
          transition: all var(--transition-normal);
        }
        .pf-feature-card:hover {
          border-color: var(--fc);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px -10px color-mix(in srgb, var(--fc) 20%, transparent);
        }
        .pf-feature-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--fc);
          margin-bottom: 1rem;
          box-shadow: 0 0 8px var(--fc);
        }
        .pf-feature-card h4 { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .pf-feature-card p { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5; }

        /* CTA */
        .pf-cta {
          padding: 6rem 1.5rem;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .pf-cta-box {
          border-radius: var(--radius-2xl);
          padding: 4rem 2rem;
        }
        .pf-cta h2 { font-size: 2.25rem; margin-bottom: 0.75rem; letter-spacing: -0.025em; }
        .pf-cta p { color: var(--color-text-secondary); margin-bottom: 2rem; font-size: 1.05rem; }

        /* Footer */
        .pf-footer {
          border-top: 1px solid var(--color-border-primary);
          padding: 2rem 1.5rem;
          margin-top: 4rem;
        }
        .pf-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-text-secondary);
        }
        .pf-footer p { font-size: 0.85rem; color: var(--color-text-tertiary); }

        @media (max-width: 768px) {
          .pf-hero { padding: 7rem 1rem 3rem; gap: 2rem; }
          .pf-hero-desc { font-size: 1rem; }
          .pf-footer-inner { flex-direction: column; gap: 0.75rem; }
          .pf-preview-body { height: 180px; }
          .pf-preview-sidebar { width: 50px; padding: 1rem 0.5rem; }
          .pf-preview-main { padding: 1rem; }
          .pf-cta-box { padding: 3rem 1.5rem; }
        }
      `}</style>
    </div>
  );
}
