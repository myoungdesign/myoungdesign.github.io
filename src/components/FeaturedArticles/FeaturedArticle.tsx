import type { MediumPost } from '@/content/medium';
import { cn } from '@/utils';

type FeaturedArticleProps = {
  article: MediumPost;
  className?: string;
};

/**
 * A compact writings list item: serif title + excerpt with a small thumbnail.
 * Distinct from the bordered {@link Article} card used on the Writings page.
 */
export function FeaturedArticle({ article, className }: FeaturedArticleProps) {
  const linkProps = {
    href: article.url,
    target: '_blank' as const,
    rel: 'noopener noreferrer' as const,
  };

  return (
    <article
      className={cn(
        'flex flex-col gap-5 border-b border-subtle py-9 first:pt-0 last:border-b-0 last:pb-0 md:flex-row md:items-center md:justify-between md:gap-16',
        className
      )}
    >
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-serif font-medium text-xl tracking-tight text-fg-emphasis">
          <a {...linkProps} className="hover:underline underline-offset-4 decoration-1">
            {article.title}
          </a>
        </h3>
        <p className="text-md text-fg-subtle">{article.excerpt}</p>
      </div>
      <a
        {...linkProps}
        aria-label={article.title}
        className="relative block aspect-[176/126] w-full shrink-0 overflow-clip rounded-md bg-gray-90 md:aspect-auto md:h-[126px] md:w-44"
      >
        {article.image ? (
          // Medium hosts images on third-party CDNs — plain <img> avoids next/image remote config.
          <img
            src={article.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </a>
    </article>
  );
}
