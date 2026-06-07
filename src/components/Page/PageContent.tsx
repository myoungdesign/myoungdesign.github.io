import { cn } from '@/utils';

type PageContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageContent({ children, className }: PageContentProps) {
  return (
    <section className="relative z-[2] bg-bg-surface p-xl pb-2xl">
      <div className={cn('flex flex-col gap-xl mx-auto w-full max-w-(--container-6xl)', className)}>
        {children}
      </div>
    </section>
  );
}
