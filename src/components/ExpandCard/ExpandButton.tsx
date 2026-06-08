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
        'absolute right-5 top-5 flex size-9 items-center justify-center rounded-sm border border-outline bg-elevated text-fg-muted shadow-xs transition-colors hover:text-fg-emphasis',
        className
      )}
    >
      <Maximize2 className="size-[18px]" strokeWidth={1.75} aria-hidden />
    </button>
  );
}
