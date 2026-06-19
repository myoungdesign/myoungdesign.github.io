import { cn } from '@/utils';

export type CalloutVariant = 'brand' | 'subtle';

// Each variant sets its divider via custom properties that CalloutColumns'
// separators read (cascades down, no context). --callout-divider is the centre
// colour; --callout-divider-edge is the gradient's ends — transparent (default)
// fades to a hairline, equal to the centre makes a flat solid line.
const VARIANT: Record<CalloutVariant, string> = {
  brand: 'bg-gray-10 text-gray-90 [--callout-divider:var(--color-gray-45)]',
  subtle:
    'bg-canvas text-fg-subtle shadow-xs [--callout-divider:var(--color-border-subtle)] [--callout-divider-edge:var(--color-border-subtle)]',
};

type CalloutProps = {
  children: React.ReactNode;
  variant?: CalloutVariant;
  className?: string;
};

export function Callout({ children, variant = 'brand', className }: CalloutProps) {
  return (
    <div
      className={cn(
        'px-10 py-12 md:p-10 -mx-xl md:-mx-0 md:rounded-lg',
        VARIANT[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
