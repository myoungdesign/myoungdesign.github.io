'use client';

import { Hero, HeroContent } from '@/components/blocks/Hero';
import { cn } from '@/utils';

import { usePageContext } from './context';

type PageHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageHeader({ children, className }: PageHeaderProps) {
  const { hasCover, overlap, hold } = usePageContext('PageHeader');
  return (
    <Hero fullScreen={false} hold={hold} className="px-xl">
      <HeroContent>
        <div
          className={cn('mx-auto w-full max-w-(--container-5xl) pt-lg flex flex-col', className)}
          style={hasCover ? { paddingBottom: `calc(var(--spacing-lg) + ${overlap})` } : undefined}
        >
          {children}
        </div>
      </HeroContent>
    </Hero>
  );
}
