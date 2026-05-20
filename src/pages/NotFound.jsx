import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="pf-404">
      <div className="pf-404-content animate-fade-in-up">
        <div className="pf-404-icon animate-float">
          <Compass size={64} />
        </div>
        <h1>404</h1>
        <p>Halaman yang kamu cari tidak ditemukan.</p>
        <Link to="/">
          <Button>Kembali ke Home</Button>
        </Link>
      </div>
      <style>{`
        .pf-404 {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
          text-align: center;
          padding: 2rem;
        }
        .pf-404-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .pf-404-icon {
          color: var(--color-accent-indigo);
          opacity: 0.5;
        }
        .pf-404 h1 {
          font-size: 4rem;
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pf-404 p {
          color: var(--color-text-secondary);
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
