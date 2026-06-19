import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { cn } from '@/utils';

type VisuallyHiddenProps = ComponentPropsWithoutRef<'span'> & {
  /** Element to render. Defaults to `span`; use e.g. `h2` for a hidden heading. */
  as?: ElementType;
};

export function VisuallyHidden({ as: Tag = 'span', className, ...props }: VisuallyHiddenProps) {
  return <Tag {...props} className={cn('sr-only', className)} />;
}
