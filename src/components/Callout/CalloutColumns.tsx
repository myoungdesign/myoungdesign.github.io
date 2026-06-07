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
    <div className={cn('flex flex-col md:flex-row gap-2 md:gap-6', className)}>
      {items.map((child, i) => (
        <Fragment key={i}>
          {i > 0 && (
            <>
              <Separator className="md:hidden my-8 bg-transparent bg-gradient-to-r from-transparent via-gray-45 to-transparent" />
              <Separator
                orientation="vertical"
                className="hidden md:block mx-8 bg-transparent bg-gradient-to-b from-transparent via-gray-45 to-transparent"
              />
            </>
          )}
          {child}
        </Fragment>
      ))}
    </div>
  );
}
