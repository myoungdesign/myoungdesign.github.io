'use client';

import { Hero, HeroContent } from '@/components/Hero';
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
          className={cn('mx-auto w-full max-w-(--container-6xl) pt-2xl flex flex-col', className)}
          style={hasCover ? { paddingBottom: `${overlap}` } : undefined}
        >
          {children}
        </div>
      </HeroContent>
    </Hero>
  );
}
