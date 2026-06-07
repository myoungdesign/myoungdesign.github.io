import { cn } from '@/utils';

type PageKickerProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageKicker({ children, className }: PageKickerProps) {
  return (
    <p
      className={cn(
        'font-sans text-lg md:text-xl leading-[1.0] tracking-widest uppercase text-fg-soft pb-2',
        className
      )}
    >
      {children}
    </p>
  );
}
