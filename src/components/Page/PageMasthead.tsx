import { cn } from '@/utils';

type PageMastheadProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageMasthead({ children, className }: PageMastheadProps) {
  return (
    <div
      className={cn('flex flex-col gap-6 md:gap-8 lg:gap-10 pb-10 md:pb-14 lg:pb-16', className)}
    >
      {children}
    </div>
  );
}
