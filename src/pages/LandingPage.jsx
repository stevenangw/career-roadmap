import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Compass, ArrowRight, CheckCircle, Map, Sparkles, Trophy, Calendar, Code, Heart } from 'lucide-react';
import Button from '../components/ui/Button';

const steps = [
  { icon: Sparkles, title: 'Identity Authentication', desc: 'Secure administrative access linked to custom developer scopes.' },
  { icon: Map, title: 'Dynamic Node Visualizer', desc: 'A node-graph canvas displaying clear dependencies, prerequisites, and milestone states.' },
  { icon: CheckCircle, title: 'Integrated Progress Metrics', desc: 'Granular habit logs, completion stats, and active streaks verified by data.' },
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
      {/* Premium Mesh Gradients */}
      <div className="pf-landing-glow g1" />
      <div className="pf-landing-glow g2" />

      {/* Modern High-Fidelity Navigation */}
      <nav className="pf-landing-nav glass animate-fade-in">
        <div className="pf-landing-nav-inner">
          <div className="pf-landing-brand">
            <div className="pf-landing-brand-glow">
              <Compass size={22} className="pf-landing-brand-icon" />
            </div>
            <span>STEVEN<span className="pf-brand-dot">.</span>JOURNEY</span>
          </div>
          <Button onClick={handleGetStarted} size="sm" className="pf-nav-cta">
            {user ? 'Dashboard' : 'Initialize App'}
          </Button>
        </div>
      </nav>

      {/* Asymmetrical Premium Hero Section */}
      <section className="pf-hero">
        <div className="pf-hero-content animate-fade-in-up">
          <div className="pf-hero-badge">
            <Sparkles size={12} className="text-accent-purple" />
            <span>Steven Ang's Technical Roadmap</span>
          </div>
          <h1 className="pf-hero-title">
            Architecting <br />
            <span className="pf-gradient-text">Professional growth</span> <br />
            through structure.
          </h1>
          <p className="pf-hero-desc">
            A responsive, premium personal hub engineered to map milestones, track skill hierarchies, and output progress telemetry in real time.
          </p>
          <div className="pf-hero-actions">
            <Button onClick={handleGetStarted} size="lg" icon={ArrowRight} className="pf-btn-primary">
              {user ? 'Open Dashboard' : 'Explore Platform'}
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/u/steven')} className="pf-btn-secondary">
              View Profile
            </Button>
          </div>
        </div>

        {/* High-Fidelity Asymmetric Graph Preview Mockup */}
        <div className="pf-hero-preview animate-fade-in">
          <div className="pf-preview-window glass">
            <div className="pf-preview-bar">
              <div className="pf-preview-dots">
                <span className="pf-dot red" /><span className="pf-dot yellow" /><span className="pf-dot green" />
              </div>
              <div className="pf-preview-title-bar">
                <Code size={12} />
                <span>steven_roadmap_manifest.json</span>
              </div>
            </div>
            <div className="pf-preview-body">
              <div className="pf-preview-sidebar">
                <div className="pf-preview-avatar" />
                <div className="pf-preview-sidebar-line" style={{ '--w': '70%' }} />
                <div className="pf-preview-sidebar-line" style={{ '--w': '50%' }} />
                <div className="pf-preview-sidebar-line" style={{ '--w': '60%' }} />
              </div>
              <div className="pf-preview-main">
                {/* Modern visual grid connecting blocks */}
                <div className="pf-grid-nodes">
                  <div className="pf-visual-node active" style={{ '--color': 'var(--color-accent-indigo)' }}>
                    <div className="pf-node-dot" />
                    <span>Next.js Engine</span>
                  </div>
                  <div className="pf-visual-node done" style={{ '--color': 'var(--color-accent-green)' }}>
                    <div className="pf-node-dot" />
                    <span>State Graph</span>
                  </div>
                  <div className="pf-visual-node active" style={{ '--color': 'var(--color-accent-purple)' }}>
                    <div className="pf-node-dot" />
                    <span>Supabase DB</span>
                  </div>
                  <div className="pf-visual-node pending" style={{ '--color': 'var(--color-accent-orange)' }}>
                    <div className="pf-node-dot" />
                    <span>Deployment</span>
                  </div>
                </div>
                <div className="pf-visual-vector v1" />
                <div className="pf-visual-vector v2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Density Features Section (Asymmetrical Grid) */}
      <section className="pf-features-section">
        <div className="pf-section-header">
          <div className="pf-section-tag">Telemetry & Framework</div>
          <h2 className="pf-section-title">Engineered to Map Complex Competencies</h2>
        </div>

        <div className="pf-features-asymmetric-grid">
          {/* Main feature highlight panel */}
          <div className="pf-feat-hero glass animate-fade-in">
            <div className="pf-feat-icon-box indigo">
              <Map size={24} />
            </div>
            <h3>Structured Multi-Path Timeline</h3>
            <p>
              Simultaneously tracks distinct specialized career disciplines such as Full-Stack Architecture, AI/ML Engineering, and Decentralized Networks without visual clutter or schema fragmentation.
            </p>
            <div className="pf-feat-meta">
              <Trophy size={14} />
              <span>Includes auto-calculated target checkpoints</span>
            </div>
          </div>

          {/* Side stack items */}
          <div className="pf-feat-stack">
            <div className="pf-feat-sub-card glass">
              <div className="pf-feat-icon-box orange">
                <Calendar size={18} />
              </div>
              <div>
                <h4>Consistency Telemetry</h4>
                <p>Gamified habits logging tracker designed to trigger streak systems and log daily contributions.</p>
              </div>
            </div>
            <div className="pf-feat-sub-card glass">
              <div className="pf-feat-icon-box green">
                <Code size={18} />
              </div>
              <div>
                <h4>Public Recruiter Scope</h4>
                <p>Generate highly aesthetic, responsive public resume URLs to distribute to active hiring managers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Walkthrough */}
      <section className="pf-how-section">
        <div className="pf-section-header center">
          <div className="pf-section-tag">User Flow</div>
          <h2 className="pf-section-title">Operational Workflow</h2>
        </div>
        <div className="pf-how-steps">
          {steps.map((step, i) => (
            <div key={i} className="pf-how-step glass">
              <div className="pf-how-header">
                <div className="pf-how-icon-wrapper">
                  <step.icon size={20} />
                </div>
                <span className="pf-how-number">0{i + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* High-Impact CTA Panel */}
      <section className="pf-cta-section">
        <div className="pf-cta-box glass">
          <div className="pf-cta-glow" />
          <h2>Ready to visualize professional progress?</h2>
          <p>Explore target benchmarks, technical certifications, and daily contribution streaks.</p>
          <div className="pf-cta-buttons">
            <Button onClick={handleGetStarted} size="lg" icon={ArrowRight} className="pf-btn-primary">
              Initialize Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pf-footer">
        <div className="pf-footer-inner">
          <div className="pf-footer-brand">
            <Compass size={18} className="text-accent-indigo" />
            <span>STEVEN<span className="pf-brand-dot">.</span>JOURNEY</span>
          </div>
          <p className="pf-footer-credits">
            © {new Date().getFullYear()} · Tailored for Steven Ang · Handcrafted with <Heart size={12} className="inline text-accent-red" />
          </p>
        </div>
      </footer>

      <style>{`
        .pf-landing {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          background-color: var(--color-bg-primary);
          color: var(--color-text-primary);
        }

        /* Ambient mesh design */
        .pf-landing-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(160px);
          opacity: 0.08;
          z-index: -1;
          pointer-events: none;
        }
        .pf-landing-glow.g1 {
          top: -200px;
          left: -150px;
          background: var(--color-accent-indigo);
        }
        .pf-landing-glow.g2 {
          top: 50%;
          right: -250px;
          background: var(--color-accent-purple);
        }

        /* Premium Nav */
        .pf-landing-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          border-bottom: 1px solid var(--color-border-primary);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }
        .pf-landing-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-landing-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.08em;
        }
        .pf-landing-brand-glow {
          background: color-mix(in srgb, var(--color-accent-indigo) 15%, transparent);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
        }
        .pf-landing-brand-icon {
          color: var(--color-accent-indigo);
        }
        .pf-brand-dot {
          color: var(--color-accent-purple);
        }

        /* Asymmetric Hero section */
        .pf-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10rem 1.5rem 6rem;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .pf-hero-content {
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .pf-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-primary);
          background: var(--color-bg-hover);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-full);
          margin-bottom: 2rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .pf-hero-title {
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          line-height: 1.1;
          font-weight: 800;
          margin-bottom: 1.75rem;
          letter-spacing: -0.04em;
        }
        .pf-gradient-text {
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pf-hero-desc {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          margin-bottom: 3rem;
          line-height: 1.6;
          max-width: 520px;
        }
        .pf-hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        /* Premium hero actions interaction states */
        .pf-btn-primary {
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple)) !important;
          color: white !important;
          border: none !important;
          padding: 0.75rem 1.75rem !important;
          border-radius: var(--radius-md) !important;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast) !important;
        }
        .pf-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
        }
        .pf-btn-primary:active {
          transform: translateY(0);
        }

        .pf-btn-secondary {
          border-radius: var(--radius-md) !important;
          padding: 0.75rem 1.75rem !important;
          transition: background-color var(--transition-fast) !important;
        }

        /* High-Fidelity Graph Preview Windows */
        .pf-hero-preview {
          perspective: 1000px;
          display: flex;
          justify-content: center;
        }
        .pf-preview-window {
          width: 100%;
          max-width: 440px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-border-primary);
        }
        .pf-preview-bar {
          padding: 0.75rem 1.25rem;
          border-bottom: 1px solid var(--color-border-primary);
          display: flex;
          align-items: center;
          position: relative;
          background: rgba(0, 0, 0, 0.2);
        }
        .pf-preview-dots {
          display: flex;
          gap: 0.4rem;
        }
        .pf-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .pf-dot.red { background: #ff5f56; }
        .pf-dot.yellow { background: #ffbd2e; }
        .pf-dot.green { background: #27c93f; }
        .pf-preview-title-bar {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .pf-preview-body {
          display: flex;
          height: 250px;
        }
        .pf-preview-sidebar {
          width: 80px;
          border-right: 1px solid var(--color-border-primary);
          padding: 1.25rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: rgba(0, 0, 0, 0.1);
        }
        .pf-preview-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          margin-bottom: 0.5rem;
        }
        .pf-preview-sidebar-line {
          height: 5px;
          border-radius: 3px;
          background: var(--color-border-secondary);
          width: var(--w);
        }
        .pf-preview-main {
          flex: 1;
          padding: 1.5rem;
          position: relative;
          background: rgba(0, 0, 0, 0.05);
        }
        .pf-grid-nodes {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          position: relative;
          z-index: 2;
        }
        .pf-visual-node {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-sm);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-primary);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .pf-visual-node:hover {
          border-color: var(--color);
          transform: translateX(4px);
        }
        .pf-node-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color);
          box-shadow: 0 0 8px var(--color);
        }

        /* Features Asymmetric Grid */
        .pf-features-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
        }
        .pf-section-header {
          margin-bottom: 4rem;
          text-align: left;
        }
        .pf-section-header.center {
          text-align: center;
        }
        .pf-section-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--color-accent-purple);
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .pf-section-title {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .pf-features-asymmetric-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1.5rem;
        }
        .pf-feat-hero {
          padding: 3rem;
          border-radius: var(--radius-xl);
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: border-color var(--transition-normal);
        }
        .pf-feat-hero:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }
        .pf-feat-icon-box {
          padding: 0.9rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pf-feat-icon-box.indigo { background: color-mix(in srgb, var(--color-accent-indigo) 12%, transparent); color: var(--color-accent-indigo); }
        .pf-feat-icon-box.orange { background: color-mix(in srgb, var(--color-accent-orange) 12%, transparent); color: var(--color-accent-orange); }
        .pf-feat-icon-box.green { background: color-mix(in srgb, var(--color-accent-green) 12%, transparent); color: var(--color-accent-green); }
        
        .pf-feat-hero h3 { font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700; }
        .pf-feat-hero p { color: var(--color-text-secondary); line-height: 1.6; font-size: 0.95rem; margin-bottom: 2rem; }
        .pf-feat-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--color-accent-purple);
        }

        .pf-feat-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-feat-sub-card {
          padding: 2rem;
          border-radius: var(--radius-xl);
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: transform var(--transition-fast);
        }
        .pf-feat-sub-card:hover {
          transform: translateY(-2px);
        }
        .pf-feat-sub-card h4 { font-size: 1.15rem; margin-bottom: 0.5rem; }
        .pf-feat-sub-card p { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5; }

        /* How it works */
        .pf-how-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
        }
        .pf-how-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .pf-how-step {
          padding: 2rem;
          border-radius: var(--radius-xl);
          transition: transform var(--transition-fast);
        }
        .pf-how-step:hover {
          transform: translateY(-4px);
        }
        .pf-how-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .pf-how-icon-wrapper {
          padding: 0.6rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-sm);
          color: var(--color-accent-purple);
        }
        .pf-how-number {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-tertiary);
        }
        .pf-how-step h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
        .pf-how-step p { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5; }

        /* Modern CTA section */
        .pf-cta-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
        }
        .pf-cta-box {
          border-radius: var(--radius-2xl);
          padding: 5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pf-cta-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 100px;
          background: radial-gradient(circle, color-mix(in srgb, var(--color-accent-purple) 25%, transparent) 0%, transparent 70%);
          pointer-events: none;
        }
        .pf-cta-box h2 { font-size: 2.25rem; font-weight: 800; margin-bottom: 0.75rem; }
        .pf-cta-box p { color: var(--color-text-secondary); margin-bottom: 2.5rem; font-size: 1.05rem; }
        
        /* Footer */
        .pf-footer {
          border-top: 1px solid var(--color-border-primary);
          padding: 3rem 1.5rem;
          background: rgba(0, 0, 0, 0.15);
        }
        .pf-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-footer-credits {
          font-size: 0.875rem;
          color: var(--color-text-tertiary);
        }

        /* Responsive Breakpoints Rules */
        @media (max-width: 1024px) {
          .pf-hero {
            grid-template-columns: 1fr;
            padding-top: 8rem;
            gap: 3rem;
            text-align: center;
          }
          .pf-hero-content {
            align-items: center;
            text-align: center;
          }
          .pf-hero-desc {
            margin-inline: auto;
          }
          .pf-features-asymmetric-grid {
            grid-template-columns: 1fr;
          }
          .pf-how-steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .pf-hero {
            padding-top: 7rem;
            padding-bottom: 4rem;
          }
          .pf-hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .pf-hero-actions button {
            width: 100%;
          }
          .pf-preview-body {
            height: 200px;
          }
          .pf-preview-sidebar {
            width: 64px;
            padding: 1rem 0.5rem;
          }
          .pf-feat-hero {
            padding: 2rem;
          }
          .pf-footer-inner {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

