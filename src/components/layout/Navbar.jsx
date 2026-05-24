import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Settings, LogOut, Compass } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/progress', label: 'Progress', icon: BarChart3 },
  { path: '/settings', label: 'Settings', icon: Settings },
];

export default function Navbar() {
  const { profile, signOut } = useAuth();
  const location = useLocation();

  return (
    <nav className="pf-navbar glass">
      <div className="pf-navbar-inner">
        <Link to="/dashboard" className="pf-navbar-brand">
          <Compass size={22} className="pf-navbar-logo animate-pulse" />
          <span>Steven's Journey</span>
        </Link>

        <div className="pf-navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`pf-nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon size={15} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="pf-navbar-actions">
          <ThemeToggle />
          {profile && (
            <div className="pf-navbar-user">
              <div className="pf-navbar-avatar">
                {profile.avatar_url ? (
                  <img src={profile.avatar_url} alt={profile.name} />
                ) : (
                  <span>{(profile.name || 'S')[0].toUpperCase()}</span>
                )}
              </div>
              <button className="pf-nav-logout" onClick={signOut} title="Logout">
                <LogOut size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .pf-navbar {
          position: sticky;
          top: 0;
          z-index: var(--z-dropdown);
          border-bottom: 1px solid var(--color-border-primary);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }
        .pf-navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .pf-navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--color-text-primary);
          text-decoration: none;
          letter-spacing: -0.025em;
        }
        .pf-navbar-logo {
          color: var(--color-accent-indigo);
        }
        .pf-navbar-links {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .pf-nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-decoration: none;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        .pf-nav-link:hover {
          color: var(--color-text-primary);
          background: var(--color-bg-hover);
        }
        .pf-nav-link.active {
          color: var(--color-text-inverse);
          background: var(--color-text-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pf-navbar-user {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .pf-navbar-avatar {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-size: 0.8rem;
          font-weight: 600;
          color: #fff;
          border: 1.5px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-navbar-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pf-nav-logout {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: var(--color-text-tertiary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-nav-logout:hover {
          background: rgba(239, 68, 68, 0.1);
          color: hsl(0, 84%, 60%);
        }
        @media (max-width: 768px) {
          .pf-navbar-links { display: none; }
        }
      `}</style>
    </nav>
  );
}
