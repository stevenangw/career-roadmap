import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="pf-404">
      <div className="pf-404-content glass animate-fade-in-up">
        <div className="pf-404-icon">
          <Compass size={56} className="animate-spin" style={{ animationDuration: '6s' }} />
        </div>
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" style={{ marginTop: '0.5rem' }}>
          <Button size="md">Back to Home</Button>
        </Link>
      </div>
      <style>{`
        .pf-404 {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 75vh;
          text-align: center;
          padding: 2rem;
        }
        .pf-404-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          padding: 3rem 4rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-xl);
          max-width: 440px;
          width: 100%;
        }
        .pf-404-icon {
          color: var(--color-accent-indigo);
          opacity: 0.85;
          margin-bottom: 0.5rem;
        }
        .pf-404 h1 {
          font-size: 4rem;
          line-height: 1;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pf-404 p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        @media (max-width: 480px) {
          .pf-404-content { padding: 2rem 1.5rem; }
        }
      `}</style>
    </div>
  );
}
