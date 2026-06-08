import { cn } from '@/utils';

type ExpandCardCoverProps = {
  children: React.ReactNode;
  className?: string;
};

export function ExpandCardCover({ children, className }: ExpandCardCoverProps) {
  return (
    <div
      className={cn(
        'relative aspect-video overflow-clip border-b border-subtle bg-canvas',
        className
      )}
    >
      {children}
    </div>
  );
}
