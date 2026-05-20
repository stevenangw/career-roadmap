import { Quote } from 'lucide-react';
import { getTodayQuote } from '../../lib/constants';

export default function MotivationalQuote() {
  const quote = getTodayQuote();

  return (
    <div className="pf-quote">
      <Quote size={16} className="pf-quote-icon" />
      <blockquote>
        <p>"{quote.text}"</p>
        <cite>— {quote.author}</cite>
      </blockquote>
      <style>{`
        .pf-quote {
          display: flex;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          border-left: 3px solid var(--color-accent-indigo);
        }
        .pf-quote-icon {
          color: var(--color-accent-indigo);
          flex-shrink: 0;
          margin-top: 0.15rem;
          opacity: 0.7;
        }
        .pf-quote blockquote {
          margin: 0;
        }
        .pf-quote p {
          font-size: 0.875rem;
          font-style: italic;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin: 0 0 0.25rem;
        }
        .pf-quote cite {
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
          font-style: normal;
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  );
}
