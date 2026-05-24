import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

const variants = {
  primary: 'pf-btn-primary',
  secondary: 'pf-btn-secondary',
  ghost: 'pf-btn-ghost',
  danger: 'pf-btn-danger',
  outline: 'pf-btn-outline',
};

const sizes = {
  sm: 'pf-btn-sm',
  md: 'pf-btn-md',
  lg: 'pf-btn-lg',
};

const Button = forwardRef(function Button(
  { children, variant = 'primary', size = 'md', loading = false, disabled = false, icon: Icon, className = '', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`pf-btn ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : Icon ? (
        <Icon size={16} />
      ) : null}
      {children && <span>{children}</span>}

      <style>{`
        .pf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 500;
          border: none;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: transform var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast), opacity var(--transition-fast);
          white-space: nowrap;
          letter-spacing: -0.01em;
          box-shadow: var(--shadow-sm);
        }
        .pf-btn:active:not(:disabled) {
          transform: scale(0.97);
        }
        .pf-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          box-shadow: none;
        }
        .pf-btn-sm { padding: 0.4rem 0.85rem; font-size: 0.8rem; border-radius: var(--radius-md); }
        .pf-btn-md { padding: 0.55rem 1.35rem; font-size: 0.875rem; border-radius: var(--radius-lg); }
        .pf-btn-lg { padding: 0.75rem 1.85rem; font-size: 0.95rem; border-radius: var(--radius-xl); }

        .pf-btn-primary {
          background: var(--color-accent-indigo);
          color: #ffffff;
        }
        .pf-btn-primary:hover:not(:disabled) {
          background: hsl(243, 75%, 64%);
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
        }
        .pf-btn-secondary {
          background: var(--color-bg-elevated);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
        }
        .pf-btn-secondary:hover:not(:disabled) {
          background: var(--color-bg-hover);
          border-color: var(--color-border-secondary);
        }
        .pf-btn-ghost {
          background: transparent;
          color: var(--color-text-secondary);
          box-shadow: none;
        }
        .pf-btn-ghost:hover:not(:disabled) {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
        }
        .pf-btn-danger {
          background: rgba(239, 68, 68, 0.12);
          color: hsl(0, 84%, 60%);
          border: 1px solid rgba(239, 68, 68, 0.25);
        }
        .pf-btn-danger:hover:not(:disabled) {
          background: rgba(239, 68, 68, 0.2);
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.15);
        }
        .pf-btn-outline {
          background: rgba(255, 255, 255, 0.02);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
        }
        [data-theme="light"] .pf-btn-outline {
          background: rgba(0, 0, 0, 0.01);
        }
        .pf-btn-outline:hover:not(:disabled) {
          background: var(--color-bg-hover);
          border-color: var(--color-border-secondary);
        }
      `}</style>
    </button>
  );
});

export default Button;
