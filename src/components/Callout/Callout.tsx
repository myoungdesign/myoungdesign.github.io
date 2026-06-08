import { cn } from '@/utils';

type CalloutProps = {
  children: React.ReactNode;
  className?: string;
};

export function Callout({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        'bg-gray-10 text-gray-80 px-10 py-12 md:p-12 -mx-xl md:-mx-0 md:rounded-lg',
        className
      )}
    >
      {children}
    </div>
  );
}
