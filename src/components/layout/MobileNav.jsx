import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Settings } from 'lucide-react';

const items = [
  { path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { path: '/progress', label: 'Progress', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="pf-mobile-nav">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`pf-mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </Link>
      ))}
      <style>{`
        .pf-mobile-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--color-bg-surface);
          border-top: 1px solid var(--color-border-primary);
          z-index: var(--z-dropdown);
          padding: 0.5rem 0 calc(0.5rem + env(safe-area-inset-bottom, 0px));
          justify-content: space-around;
        }
        .pf-mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          padding: 0.4rem 1rem;
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--color-text-tertiary);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: color var(--transition-fast);
        }
        .pf-mobile-nav-item.active {
          color: var(--color-accent-indigo);
        }
        @media (max-width: 768px) {
          .pf-mobile-nav { display: flex; }
        }
      `}</style>
    </nav>
  );
}
