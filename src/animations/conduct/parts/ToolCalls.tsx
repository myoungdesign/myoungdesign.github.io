'use client';

import { cn } from '@/utils';

import { Loader } from './Loader';

/*
 * Conduct's tool-call UI, rebuilt for the case-study animations. Colors,
 * sizes, and fonts are the product's raw design values on purpose — portfolio
 * tokens are portfolio brand and must not leak in here.
 */

type PartProps = {
  children: React.ReactNode;
  className?: string;
};

/** The bordered card holding the tool calls — both the running list and the collapsed summary. */
export function ToolCalls({ children, className }: PartProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-start rounded-[12px] border border-[#d9d9da] p-[20px]',
        className
      )}
    >
      {children}
    </div>
  );
}

/** Row container for the running state. */
export function ToolCallsList({ children, className }: PartProps) {
  return (
    <div className={cn('flex w-full flex-col items-start gap-[10px] px-[4px] py-[8px]', className)}>
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="flex size-[16px] shrink-0 items-center justify-center rounded-full bg-[#4f5054]">
      <svg viewBox="0 0 10 10" fill="none" className="size-[10px]" aria-hidden>
        <path
          d="M8.33333 2.5L3.75 7.08333L1.66667 5"
          stroke="white"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* Conduct's bar-stack glyph (static; the animated variant is parts/Loader). */
function StreamGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 13.4"
      fill="none"
      className={cn('h-[13.4px] w-[16px] shrink-0', className)}
      aria-hidden
    >
      <path d="M15.91 0H6.35v1.22h9.56V0Z" fill="#16171C" />
      <path d="M11.93 3.04H2.06v1.22h9.87V3.04Z" fill="#16171C" />
      <path d="M9.87 6.09H0v1.22h9.87V6.09Z" fill="#16171C" />
      <path d="M11.8 9.13H2.03v1.22h9.77V9.13Z" fill="#16171C" />
      <path d="M16 12.17H6.23v1.22H16v-1.22Z" fill="#16171C" />
    </svg>
  );
}

export function ToolCallsItem({
  status,
  children,
  className,
}: PartProps & { status: 'running' | 'done' }) {
  return (
    <div className={cn('flex h-[16px] w-full items-center gap-[12px]', className)}>
      {status === 'done' ? <CheckIcon /> : <Loader className="opacity-[0.82]" />}
      <p
        className={cn(
          "min-w-0 flex-1 truncate font-[family-name:'Noto_Sans',sans-serif] text-[12px] leading-[16px] font-medium",
          status === 'done' ? 'text-[#16171c]' : 'animate-thinking text-[#6f7074]'
        )}
      >
        {children}
      </p>
    </div>
  );
}

/* Timeline-rail connector between tool-call items, aligned under the icons.
   The line slightly overflows its slot, matching the Figma inset. */
export function ToolCallsSeparator({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 10"
      fill="none"
      className={cn('h-[10px] w-[16px] shrink-0 overflow-visible', className)}
      aria-hidden
    >
      <line x1="8" y1="-2" x2="8" y2="12" stroke="#d9d9d9" strokeWidth="2" />
    </svg>
  );
}

/** The collapsed state shown inside the card once all tool calls complete. */
export function ToolCallsSummary({ count, className }: { count: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-[10px]', className)}>
      <span className="flex size-[18px] shrink-0 items-center justify-center">
        <StreamGlyph />
      </span>
      <span className="flex items-center gap-[8px]">
        <p className="font-[family-name:'Noto_Sans',sans-serif] text-[13px] leading-[16px] font-semibold whitespace-nowrap text-[#4f5054]">
          {count} tool calls completed
        </p>
        <span className="flex items-center gap-[4px]">
          <span className="font-[family-name:'Noto_Sans',sans-serif] text-[12px] leading-[16px] font-semibold whitespace-nowrap text-[#8f9198]">
            Show
          </span>
          <svg viewBox="0 0 12 12" fill="none" className="size-[12px]" aria-hidden>
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="#8F9198"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </div>
  );
}
