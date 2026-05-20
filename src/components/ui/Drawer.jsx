import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function Drawer({ isOpen, onClose, title, children, width = '420px' }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      // #region agent log
      requestAnimationFrame(() => {
        const el = drawerRef.current;
        const rect = el?.getBoundingClientRect();
        fetch('http://127.0.0.1:7309/ingest/dcccb5c6-39ce-49f0-91a7-ac3032c790c1',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'70b669'},body:JSON.stringify({sessionId:'70b669',hypothesisId:'B',location:'Drawer.jsx:open',message:'drawer opened',data:{innerWidth:window.innerWidth,innerHeight:window.innerHeight,drawerHeight:rect?.height,drawerTop:rect?.top,drawerBottom:rect?.bottom,overflowsViewport:rect ? rect.bottom > window.innerHeight || rect.top < 0 : null},timestamp:Date.now()})}).catch(()=>{});
      });
      // #endregion
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="pf-drawer-overlay" onClick={onClose} />
      <div
        ref={drawerRef}
        className="pf-drawer animate-slide-in-right"
        style={{ width }}
      >
        <div className="pf-drawer-header">
          <h3>{title}</h3>
          <button className="pf-drawer-close" onClick={onClose} aria-label="Close drawer">
            <X size={20} />
          </button>
        </div>
        <div className="pf-drawer-body">
          {children}
        </div>
      </div>
      <style>{`
        .pf-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: var(--z-drawer);
          animation: fadeIn 0.2s ease-out;
        }
        .pf-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          max-width: 100vw;
          background: var(--color-bg-surface);
          border-left: 1px solid var(--color-border-primary);
          z-index: calc(var(--z-drawer) + 1);
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
        }
        .pf-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border-primary);
        }
        .pf-drawer-header h3 {
          font-size: 1.1rem;
          font-family: var(--font-heading);
          color: var(--color-text-primary);
          margin: 0;
        }
        .pf-drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: var(--color-text-tertiary);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }
        .pf-drawer-close:hover {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
        }
        .pf-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }
        @media (max-width: 480px) {
          .pf-drawer { width: 100% !important; }
        }
      `}</style>
    </>,
    document.body
  );
}
