import { Children, Fragment } from 'react';

import { Separator } from '@/components/ui';
import { cn } from '@/utils';

type CalloutColumnsProps = {
  children: React.ReactNode;
  className?: string;
};

export function CalloutColumns({ children, className }: CalloutColumnsProps) {
  const items = Children.toArray(children);

  return (
    <div className={cn('flex flex-col lg:flex-row gap-3 md:gap-5', className)}>
      {items.map((child, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              <Separator className="lg:hidden my-8 bg-transparent bg-gradient-to-r from-[var(--callout-divider-edge,transparent)] via-[var(--callout-divider,var(--color-gray-45))] to-[var(--callout-divider-edge,transparent)]" />
              <Separator
                orientation="vertical"
                className="hidden lg:block mx-8 bg-transparent bg-gradient-to-b from-[var(--callout-divider-edge,transparent)] via-[var(--callout-divider,var(--color-gray-45))] to-[var(--callout-divider-edge,transparent)]"
              />
            </>
          )}
          {child}
        </Fragment>
      ))}
    </div>
  );
}
