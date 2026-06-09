import { cn } from '@/utils';

type SectionTaglineProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTagline({ children, className }: SectionTaglineProps) {
  return <p className={cn('text-lg md:text-xl text-subtle', className)}>{children}</p>;
}
