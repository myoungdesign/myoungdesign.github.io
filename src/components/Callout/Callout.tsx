import { cn } from '@/utils';

type CalloutProps = {
  children: React.ReactNode;
  className?: string;
};

export function Callout({ children, className }: CalloutProps) {
  return <div className={cn('bg-gray-10 text-gray-90 p-8 md:p-10', className)}>{children}</div>;
}
