'use client';

import { cn } from '@/utils';

/*
 * Conduct's agent response content, rebuilt for the case-study animations.
 * Colors, sizes, and fonts are the product's raw design values on purpose —
 * portfolio tokens are portfolio brand and must not leak in here.
 */

type PartProps = {
  children: React.ReactNode;
  className?: string;
};

export function AgentMessage({ children, className }: PartProps) {
  return (
    <div className={cn('flex w-full flex-col gap-[14px] px-[12px]', className)}>{children}</div>
  );
}

export function AgentMessageText({ children, className }: PartProps) {
  return (
    <p
      className={cn(
        'font-[family-name:Inter,sans-serif] text-[14px] leading-[28px] font-normal text-[#292b32]',
        className
      )}
    >
      {children}
    </p>
  );
}

export function AgentMessageHeading({ children, className }: PartProps) {
  return (
    <p
      className={cn(
        "font-[family-name:'DM_Sans',sans-serif] text-[18px] leading-[30px] font-medium tracking-[-0.5px] text-[#292b32]",
        className
      )}
    >
      {children}
    </p>
  );
}

export function AgentMessageLink({ children, className }: PartProps) {
  return (
    <p
      className={cn(
        "font-[family-name:'DM_Sans',sans-serif] text-[16px] leading-[24px] font-semibold tracking-[-0.25px] text-[#292b32] underline",
        className
      )}
    >
      {children}
    </p>
  );
}

export function AgentMessageList({ children, className }: PartProps) {
  return (
    <ul
      className={cn(
        'list-disc font-[family-name:Inter,sans-serif] text-[14px] leading-[28px] font-normal text-[#292b32]',
        className
      )}
    >
      {children}
    </ul>
  );
}
