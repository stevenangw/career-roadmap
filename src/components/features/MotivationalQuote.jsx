import { Quote } from 'lucide-react';
import { getTodayQuote } from '../../lib/constants';

export default function MotivationalQuote() {
  const quote = getTodayQuote();

  return (
    <div className="pf-quote glass">
      <Quote size={15} className="pf-quote-icon" />
      <blockquote>
        <p>"{quote.text}"</p>
        <cite>— {quote.author}</cite>
      </blockquote>
      <style>{`
        .pf-quote {
          display: flex;
          gap: 0.85rem;
          padding: 1.15rem 1.35rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          border-left: 3.5px solid var(--color-accent-indigo);
          box-shadow: var(--shadow-sm);
        }
        .pf-quote-icon {
          color: var(--color-accent-indigo);
          flex-shrink: 0;
          margin-top: 0.15rem;
          opacity: 0.8;
        }
        .pf-quote blockquote {
          margin: 0;
        }
        .pf-quote p {
          font-size: 0.875rem;
          font-style: italic;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0 0 0.35rem;
        }
        .pf-quote cite {
          font-size: 0.725rem;
          color: var(--color-text-tertiary);
          font-style: normal;
          font-family: var(--font-mono);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
