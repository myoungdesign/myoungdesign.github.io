import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/utils';

type ArticleProps = {
  title: string;
  url: string;
  excerpt: string;
  image: string | null;
  className?: string;
};

export function Article({ title, url, excerpt, image, className }: ArticleProps) {
  const externalProps = {
    href: url,
    target: '_blank' as const,
    rel: 'noopener noreferrer' as const,
  };

  return (
    <article
      className={cn(
        'flex flex-col md:flex-row-reverse border border-gray-90 bg-white shadow-xs text-fg md:p-13 md:gap-xl',
        className
      )}
    >
      <a
        {...externalProps}
        aria-label={title}
        className="group/image relative block w-full md:w-[35%] shrink-0 aspect-[4/3] bg-gray-90 overflow-hidden before:absolute before:inset-0 before:z-[1] before:bg-black/20 before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100"
      >
        {image ? (
          // Medium hosts images on third-party CDNs (cdn-images-1.medium.com, miro.medium.com).
          // Use a plain <img> to avoid having to configure next/image remote patterns.
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </a>

      <div className="flex flex-1 flex-col justify-center gap-4 md:gap-8 p-6 md:p-4">
        <a {...externalProps} className="group inline-block">
          <h2 className="font-serif font-medium text-2xl leading-snug tracking-tight text-fg-emphasis group-hover:underline underline-offset-4 decoration-1">
            {title}
          </h2>
        </a>
        <p className="font-sans text-md text-gray-50">{excerpt}</p>
        <a
          {...externalProps}
          className="inline-flex items-center gap-1 self-start text-md text-brand hover:underline underline-offset-4"
        >
          Read on Medium
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}
