import { cn } from '@/utils';

type SectionKickerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionKicker({ children, className }: SectionKickerProps) {
  return (
    <div className={cn('flex flex-col gap-3 md:gap-2 pb-2 md:pb-2', className)}>
      <span aria-hidden className="h-[1.5px] w-7 bg-border-subtle" />
      <h2 className="font-sans font-medium text-sm leading-xs tracking-widest uppercase text-fg-gentle">
        {children}
      </h2>
    </div>
  );
}
