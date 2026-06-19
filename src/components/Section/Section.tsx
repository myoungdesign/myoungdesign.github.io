import { cn } from '@/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        'flex flex-col py-2 md:py-0 gap-6 md:gap-8 text-fg text-md leading-relaxed',
        className
      )}
    >
      {children}
    </section>
  );
}
