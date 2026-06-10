import { cn } from '@/utils';

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h3
      className={cn(
        'font-[500] text-xl md:text-3xl leading-relaxed tracking-tightest text-emphasis',
        className
      )}
    >
      {children}
    </h3>
  );
}
