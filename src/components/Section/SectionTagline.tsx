import { cn } from '@/utils';

type SectionTaglineProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTagline({ children, className }: SectionTaglineProps) {
  return <p className={cn('text-md md:text-lg text-subtle', className)}>{children}</p>;
}
