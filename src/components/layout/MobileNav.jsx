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
    <nav className="pf-mobile-nav glass">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`pf-mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          <item.icon size={19} />
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
          border-top: 1px solid var(--color-border-primary);
          z-index: var(--z-dropdown);
          padding: 0.6rem 0 calc(0.6rem + env(safe-area-inset-bottom, 0px));
          justify-content: space-around;
          box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.04);
        }
        .pf-mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.4rem 1.25rem;
          font-size: 0.675rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-decoration: none;
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
        }
        .pf-mobile-nav-item:active {
          transform: scale(0.95);
        }
        .pf-mobile-nav-item.active {
          color: var(--color-accent-indigo);
          background: color-mix(in srgb, var(--color-accent-indigo) 10%, transparent);
        }
        @media (max-width: 768px) {
          .pf-mobile-nav { display: flex; }
        }
      `}</style>
    </nav>
  );
}
