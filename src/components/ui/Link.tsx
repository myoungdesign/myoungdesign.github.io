import { ExternalLink } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  external?: boolean;
  children: ReactNode;
};

export function Link({ external, className, children, ...rest }: LinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a
      {...externalProps}
      {...rest}
      className={cn(
        'inline-flex items-baseline gap-1 underline underline-offset-4 decoration-1 decoration-border text-fg-soft hover:text-fg hover:decoration-fg transition-colors',
        className
      )}
    >
      {children}
      {external && <ExternalLink className="size-3.5 self-center" strokeWidth={1.5} />}
    </a>
  );
}
