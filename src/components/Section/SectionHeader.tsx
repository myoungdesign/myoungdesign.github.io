import { cn } from '@/utils';

type SectionHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeader({ children, className }: SectionHeaderProps) {
  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
}
