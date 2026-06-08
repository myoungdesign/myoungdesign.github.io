import { cn } from '@/utils';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h3 className={cn('text-[1.75rem] md:text-[2rem] text-emphasis', className)}>{children}</h3>
  );
}
