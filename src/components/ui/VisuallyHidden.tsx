import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

type VisuallyHiddenProps = ComponentPropsWithoutRef<'span'>;

export function VisuallyHidden({ className, ...props }: VisuallyHiddenProps) {
  return <span {...props} className={cn('sr-only', className)} />;
}
