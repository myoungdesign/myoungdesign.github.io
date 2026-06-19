import { SectionKicker } from '@/components/Section';
import { MEDIUM_PROFILE_URL, type MediumPost } from '@/content/medium';
import { cn } from '@/utils';

import { FeaturedArticle } from './FeaturedArticle';

type FeaturedArticlesProps = {
  /** Articles to display, in order. The consumer decides which to feature. */
  articles: MediumPost[];
  /** Kicker label above the list. Default "Featured writings". */
  kicker?: React.ReactNode;
  className?: string;
};

/** A reusable writings section: a kicker over a compact list of articles. */
export function FeaturedArticles({
  articles,
  kicker = 'Featured writings',
  className,
}: FeaturedArticlesProps) {
  return (
    <section className={cn('flex flex-col gap-6', className)}>
      <SectionKicker>{kicker}</SectionKicker>
      {articles.length === 0 ? (
        <p className="text-md text-fg-subtle">
          Articles are temporarily unavailable. Visit{' '}
          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-4"
          >
            Medium
          </a>{' '}
          to read the latest.
        </p>
      ) : (
        <div className="flex flex-col">
          {articles.map(article => (
            <FeaturedArticle key={article.url} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
