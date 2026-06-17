'use client';

import { cn } from '@/utils';

/*
 * Conduct's user message bubble, rebuilt for the case-study animations.
 * Colors, sizes, and fonts are the product's raw design values on purpose —
 * portfolio tokens are portfolio brand and must not leak in here.
 */
export function UserMessage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex w-[380px] max-w-full flex-col items-end justify-center overflow-clip rounded-[12px] bg-[#e6e6e6] px-[20px] py-[12px]',
        className
      )}
    >
      <p className="w-full font-[family-name:'Noto_Sans',sans-serif] text-[14px] leading-[24px] font-normal text-[#4f5054]">
        {children}
      </p>
    </div>
  );
}
