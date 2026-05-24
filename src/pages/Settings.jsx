import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { DEMO_STRENGTHS } from '../lib/constants';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { toast } from '../components/ui/Toast';
import { User, Globe, Tag, Download, LogOut, X, Plus } from 'lucide-react';

export default function Settings() {
  const { profile, updateProfile, signOut } = useAuth();
  const [name, setName] = useState(profile?.name || '');
  const [headline, setHeadline] = useState(profile?.headline || '');
  const [isPublic, setIsPublic] = useState(profile?.is_public || false);
  const [slug, setSlug] = useState(profile?.public_slug || '');
  const [saving, setSaving] = useState(false);
  const [strengths, setStrengths] = useState(DEMO_STRENGTHS);
  const [newStrength, setNewStrength] = useState('');

  async function handleSave() {
    setSaving(true);
    await updateProfile({ name, headline, is_public: isPublic, public_slug: slug });
    setSaving(false);
    toast('Profile saved successfully!', 'success');
  }

  function handleExport() {
    const data = { profile: { name, headline, isPublic, slug }, strengths };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'steven-journey-export.json';
    a.click();
    URL.revokeObjectURL(url);
    toast('Data exported successfully!', 'success');
  }

  function addStrength() {
    if (!newStrength.trim()) return;
    setStrengths((prev) => [...prev, { id: `s-${Date.now()}`, label: newStrength.trim() }]);
    setNewStrength('');
  }

  function removeStrength(id) {
    setStrengths((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="pf-settings animate-fade-in">
      <div className="pf-settings-header">
        <h1>Settings</h1>
        <p className="pf-settings-subtitle">Configure your profile, public branding, and core strengths</p>
      </div>

      {/* Profile */}
      <Card hover={false} className="pf-settings-section glass">
        <div className="pf-settings-section-header">
          <User size={16} />
          <h2>Profile</h2>
        </div>
        <div className="pf-form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" />
        </div>
        <div className="pf-form-group">
          <label>Headline</label>
          <input type="text" value={headline} onChange={(e) => setHeadline(e.target.value)} placeholder="e.g. Data Engineer · AI Enthusiast" />
        </div>
        <div className="pf-form-actions">
          <Button onClick={handleSave} loading={saving} size="sm">Save Changes</Button>
        </div>
      </Card>

      {/* Public Profile */}
      <Card hover={false} className="pf-settings-section glass">
        <div className="pf-settings-section-header">
          <Globe size={16} />
          <h2>Public Profile</h2>
        </div>
        <div className="pf-form-row">
          <label className="pf-toggle-label">
            <input type="checkbox" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />
            <span>Public profile active (Visible to others)</span>
          </label>
        </div>
        {isPublic && (
          <div className="pf-form-group animate-fade-in-up">
            <label>Public URL Slug</label>
            <div className="pf-slug-input">
              <span className="pf-slug-prefix">/u/</span>
              <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="username" />
            </div>
          </div>
        )}
      </Card>

      {/* Strengths */}
      <Card hover={false} className="pf-settings-section glass">
        <div className="pf-settings-section-header">
          <Tag size={16} />
          <h2>Strengths</h2>
        </div>
        <div className="pf-strengths-list">
          {strengths.map((s) => (
            <span key={s.id} className="pf-editable-tag">
              {s.label}
              <button onClick={() => removeStrength(s.id)}><X size={11} /></button>
            </span>
          ))}
        </div>
        <div className="pf-add-strength">
          <input type="text" value={newStrength} onChange={(e) => setNewStrength(e.target.value)} placeholder="Add new core strength..." onKeyDown={(e) => e.key === 'Enter' && addStrength()} />
          <Button variant="secondary" size="sm" icon={Plus} onClick={addStrength}>Add</Button>
        </div>
      </Card>

      {/* Actions */}
      <Card hover={false} className="pf-settings-section glass">
        <div className="pf-settings-actions">
          <Button variant="outline" icon={Download} onClick={handleExport}>Export Data (JSON)</Button>
          <Button variant="danger" icon={LogOut} onClick={signOut}>Logout</Button>
        </div>
      </Card>

      <style>{`
        .pf-settings {
          max-width: 660px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-bottom: 3rem;
        }
        .pf-settings-header h1 {
          font-size: 1.55rem;
          letter-spacing: -0.025em;
        }
        .pf-settings-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
        }
        .pf-settings-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-settings-section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-primary);
          border-left: 2.5px solid var(--color-accent-indigo);
          padding-left: 0.6rem;
        }
        .pf-settings-section-header h2 {
          font-size: 1rem;
          margin: 0;
          letter-spacing: -0.015em;
        }
        .pf-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .pf-form-group label {
          font-size: 0.725rem;
          font-weight: 700;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-tertiary);
        }
        .pf-form-group input[type="text"],
        .pf-add-strength input {
          padding: 0.65rem 0.85rem;
          font-size: 0.875rem;
          font-family: var(--font-body);
          background: var(--color-bg-primary);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          outline: none;
          transition: all var(--transition-fast);
        }
        .pf-form-group input:focus,
        .pf-add-strength input:focus {
          border-color: var(--color-accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        .pf-form-actions {
          margin-top: 0.25rem;
        }
        .pf-toggle-label {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.875rem;
          cursor: pointer;
          color: var(--color-text-secondary);
        }
        .pf-toggle-label input[type="checkbox"] {
          accent-color: var(--color-accent-indigo);
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .pf-slug-input {
          display: flex;
          align-items: center;
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--color-bg-primary);
        }
        .pf-slug-prefix {
          padding: 0.65rem 0.75rem;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          background: var(--color-bg-elevated);
          border-right: 1px solid var(--color-border-primary);
          pointer-events: none;
        }
        .pf-slug-input input {
          border: none !important;
          border-radius: 0 !important;
          flex: 1;
          background: transparent !important;
        }
        .pf-slug-input:focus-within {
          border-color: var(--color-accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        .pf-strengths-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pf-editable-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem 0.35rem 0.85rem;
          font-size: 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: var(--color-accent-indigo);
          border-radius: var(--radius-full);
          font-weight: 500;
        }
        .pf-editable-tag button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.15rem;
          border: none;
          background: transparent;
          color: inherit;
          opacity: 0.5;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }
        .pf-editable-tag button:hover { opacity: 1; background: rgba(99, 102, 241, 0.2); }
        .pf-add-strength {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .pf-add-strength input { flex: 1; }
        .pf-settings-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
