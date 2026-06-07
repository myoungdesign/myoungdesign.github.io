import { cn } from '@/utils';

type CalloutColumnProps = {
  children: React.ReactNode;
  className?: string;
};

export function CalloutColumn({ children, className }: CalloutColumnProps) {
  return <div className={cn('flex flex-1 flex-col gap-3', className)}>{children}</div>;
}
