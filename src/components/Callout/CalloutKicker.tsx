import { cn } from '@/utils';

type CalloutKickerProps = {
  children: React.ReactNode;
  className?: string;
};

export function CalloutKicker({ children, className }: CalloutKickerProps) {
  return (
    <p
      className={cn(
        'font-sans font-medium text-sm md:text-md uppercase tracking-widest text-gray-70 pb-6 md:pb-10',
        className
      )}
    >
      {children}
    </p>
  );
}
