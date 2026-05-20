import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Skeleton from '../ui/Skeleton';

export default function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <Skeleton width="48px" height="48px" radius="var(--radius-full)" className="mx-auto" />
          <Skeleton width="120px" height="16px" className="mt-4 mx-auto" />
        </div>
      </div>
    );
  }

  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="pf-app-layout">
      <Navbar />
      <main className="pf-main">
        <div className="page-enter">
          <Outlet />
        </div>
      </main>
      <MobileNav />
      <style>{`
        .pf-app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .pf-main {
          flex: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem 1.5rem 5rem;
          width: 100%;
        }
        @media (max-width: 768px) {
          .pf-main { padding: 1.25rem 1rem 6rem; }
        }
      `}</style>
    </div>
  );
}
