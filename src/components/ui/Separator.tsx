import { Separator as BaseSeparator } from '@base-ui/react/separator';

import { cn } from '@/utils';

type SeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export function Separator({ orientation = 'horizontal', className }: SeparatorProps) {
  return (
    <BaseSeparator
      orientation={orientation}
      className={cn(
        orientation === 'horizontal' ? 'h-px w-full' : 'w-px self-stretch',
        'bg-gray-40',
        className,
      )}
    />
  );
}
