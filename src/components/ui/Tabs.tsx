'use client';

import { Tabs as BaseTabs } from '@base-ui/react/tabs';

import { cn } from '@/utils';

export function Tabs({ className, ...props }: React.ComponentProps<typeof BaseTabs.Root>) {
  return <BaseTabs.Root className={cn('flex flex-col gap-8 md:gap-10', className)} {...props} />;
}

export function TabsList({ className, ...props }: React.ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      className={cn('mx-auto flex w-fit items-center border-b border-outline', className)}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      className={cn(
        'flex h-10 cursor-pointer items-center justify-center overflow-clip px-4',
        'font-sans text-sm font-medium',
        '-mb-px border-b-2 border-transparent',
        'text-fg-gentle transition-colors',
        'aria-selected:border-fg-muted aria-selected:text-fg-muted',
        'focus-visible:outline-none',
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: React.ComponentProps<typeof BaseTabs.Panel>) {
  return <BaseTabs.Panel className={cn(className)} {...props} />;
}
