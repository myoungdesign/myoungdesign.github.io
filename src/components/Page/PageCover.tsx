'use client';

import { cn } from '@/utils';

import { usePageContext } from './context';

type PageCoverProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageCover({ children, className }: PageCoverProps) {
  const { overlap } = usePageContext('PageCover');
  return (
    <div className="relative z-[2]" style={{ marginTop: `calc(-1 * ${overlap})` }}>
      <div aria-hidden className="absolute inset-x-0 top-2/3 bottom-0 bg-surface" />
      <div className="relative mx-auto w-full max-w-(--container-6xl)">
        <div className={cn('overflow-hidden', className)}>{children}</div>
      </div>
    </div>
  );
}
