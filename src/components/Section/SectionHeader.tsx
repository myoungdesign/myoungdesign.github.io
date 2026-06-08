import { cn } from '@/utils';

type SectionHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeader({ children, className }: SectionHeaderProps) {
  return <div className={cn('flex flex-col gap-5 md:gap-6 pb-2', className)}>{children}</div>;
}
