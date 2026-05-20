import { useState, useEffect, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

let toastId = 0;
let addToastFn = null;

// Global toast trigger
// eslint-disable-next-line react-refresh/only-export-components
export function toast(message, type = 'success') {
  if (addToastFn) addToastFn({ id: ++toastId, message, type });
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
};

const colors = {
  success: '#10B981',
  error: '#EF4444',
  info: '#3B82F6',
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((t) => {
    setToasts((prev) => [...prev, t]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== t.id));
    }, 3500);
  }, []);

  useEffect(() => {
    addToastFn = addToast;
    return () => { addToastFn = null; };
  }, [addToast]);

  function removeToast(id) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="pf-toast-container">
      {toasts.map((t) => {
        const Icon = icons[t.type] || icons.info;
        const color = colors[t.type] || colors.info;
        return (
          <div key={t.id} className="pf-toast animate-fade-in" style={{ '--toast-color': color }}>
            <Icon size={18} color={color} />
            <span>{t.message}</span>
            <button className="pf-toast-dismiss" onClick={() => removeToast(t.id)}>
              <X size={14} />
            </button>
          </div>
        );
      })}
      <style>{`
        .pf-toast-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: var(--z-toast);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 380px;
        }
        .pf-toast {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-secondary);
          border-left: 3px solid var(--toast-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          font-size: 0.875rem;
          color: var(--color-text-primary);
        }
        .pf-toast span { flex: 1; }
        .pf-toast-dismiss {
          display: flex;
          align-items: center;
          padding: 0.25rem;
          background: none;
          border: none;
          color: var(--color-text-tertiary);
          border-radius: var(--radius-sm);
          cursor: pointer;
        }
        .pf-toast-dismiss:hover {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
        }
        @media (max-width: 480px) {
          .pf-toast-container {
            bottom: 5rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
}
