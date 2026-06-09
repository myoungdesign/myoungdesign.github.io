import { cn } from '@/utils';

type PageTaglineProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageTagline({ children, className }: PageTaglineProps) {
  return <p className={cn('font-sans text-lg text-gray-80', className)}>{children}</p>;
}
