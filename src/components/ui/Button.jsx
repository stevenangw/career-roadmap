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
          transition: all var(--transition-fast);
          white-space: nowrap;
          letter-spacing: -0.01em;
        }
        .pf-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .pf-btn-sm { padding: 0.375rem 0.75rem; font-size: 0.8125rem; }
        .pf-btn-md { padding: 0.5rem 1.25rem; font-size: 0.875rem; }
        .pf-btn-lg { padding: 0.75rem 1.75rem; font-size: 1rem; }

        .pf-btn-primary {
          background: var(--color-text-primary);
          color: var(--color-bg-primary);
        }
        .pf-btn-primary:hover:not(:disabled) {
          opacity: 0.9;
        }
        .pf-btn-secondary {
          background: var(--color-bg-elevated);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-secondary);
        }
        .pf-btn-secondary:hover:not(:disabled) {
          background: var(--color-bg-hover);
          border-color: var(--color-border-accent);
        }
        .pf-btn-ghost {
          background: transparent;
          color: var(--color-text-secondary);
        }
        .pf-btn-ghost:hover:not(:disabled) {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
        }
        .pf-btn-danger {
          background: rgba(239, 68, 68, 0.15);
          color: #EF4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        .pf-btn-danger:hover:not(:disabled) {
          background: rgba(239, 68, 68, 0.25);
        }
        .pf-btn-outline {
          background: transparent;
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-secondary);
        }
        .pf-btn-outline:hover:not(:disabled) {
          background: var(--color-bg-hover);
          border-color: var(--color-border-accent);
        }
      `}</style>
    </button>
  );
});

export default Button;
