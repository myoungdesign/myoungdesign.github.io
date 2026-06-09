import { cn } from '@/utils';

import { CardCover } from '../ui';

type ExpandCardCoverProps = {
  children: React.ReactNode;
  className?: string;
};

export function ExpandCardCover({ children, className }: ExpandCardCoverProps) {
  return <CardCover className={cn('aspect-video', className)}>{children}</CardCover>;
}
