import { cn } from '@/utils';

type NumberedSectionProps = {
  number: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  className?: string;
};

export function NumberedSection({
  number,
  title,
  intro,
  children,
  className,
}: NumberedSectionProps) {
  return (
    <section className={cn('flex flex-col gap-10', className)}>
      <div className="flex flex-col gap-6">
        <h2 className="font-serif text-2xl lg:text-3xl tracking-tight text-fg-emphasis">
          {number}. {title}
        </h2>
        {intro && <p className="font-sans text-md text-fg max-w-(--container-3xl)">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
