'use client';

import { Maximize2 } from 'lucide-react';

import { cn } from '@/utils';

import { useExpandCard } from './ExpandCardContext';

type ExpandButtonProps = {
  className?: string;
  /** Accessible label for the trigger, e.g. "Expand Interview synthesis". */
  label?: string;
};

export function ExpandButton({ className, label }: ExpandButtonProps) {
  const { expand } = useExpandCard();

  return (
    <button
      type="button"
      onClick={expand}
      aria-label={label ?? 'Expand image'}
      className={cn(
        'absolute right-5 top-5 flex size-9 items-center justify-center rounded-sm border border-subtle bg-elevated text-fg-gentle shadow-xs transition-all hover:text-fg-muted hover:border-fg-muted cursor-pointer',
        className
      )}
    >
      <Maximize2 className="size-[18px]" strokeWidth={1.75} aria-hidden />
    </button>
  );
}
