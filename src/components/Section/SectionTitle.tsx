import { cn } from '@/utils';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return <h3 className={cn('text-emphasis', className)}>{children}</h3>;
}
