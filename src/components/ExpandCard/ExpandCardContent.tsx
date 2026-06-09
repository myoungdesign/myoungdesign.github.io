import { cn } from '@/utils';

type ExpandCardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function ExpandCardContent({ children, className }: ExpandCardContentProps) {
  return (
    <div className={cn('flex flex-col gap-2 p-6 text-md text-fg-subtle', className)}>
      {children}
    </div>
  );
}
