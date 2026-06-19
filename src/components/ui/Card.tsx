import { cn } from '@/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/** Card surface — bg, border, and radius. Compose with CardCover and CardContent. */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col overflow-clip rounded-lg border border-subtle bg-surface',
        className
      )}
    >
      {children}
    </div>
  );
}

/** Optional media area at the top of a Card. Pass an aspect ratio via className. */
export function CardCover({ children, className }: CardProps) {
  return (
    <div className={cn('relative overflow-clip border-b border-subtle bg-canvas', className)}>
      {children}
    </div>
  );
}

/** Padded body of a Card. */
export function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn('flex flex-col gap-2 p-7 text-md text-fg-subtle', className)}>
      {children}
    </div>
  );
}
