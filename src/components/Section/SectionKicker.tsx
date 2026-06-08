import { cn } from '@/utils';

type SectionKickerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionKicker({ children, className }: SectionKickerProps) {
  return (
    <div className={cn('flex flex-col gap-5 pb-4 md:pb-3', className)}>
      <span aria-hidden className="h-[2px] w-7 bg-border-subtle" />
      <h2 className="font-sans font-medium text-md leading-xs tracking-widest uppercase text-fg-gentle">
        {children}
      </h2>
    </div>
  );
}
