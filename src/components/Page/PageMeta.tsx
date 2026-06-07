import { cn } from '@/utils';

type PageMetaProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageMeta({ children, className }: PageMetaProps) {
  return (
    <dl
      className={cn(
        'flex flex-wrap items-start gap-x-8 md:gap-x-14 gap-y-6 md:gap-y-10 mb-3 ',
        className
      )}
    >
      {children}
    </dl>
  );
}

type PageMetaItemProps = {
  label: string;
  value: React.ReactNode;
  className?: string;
};

export function PageMetaItem({ label, value, className }: PageMetaItemProps) {
  return (
    <div className={cn('flex flex-col gap-1 border-l border-gray-40 px-4 py-1', className)}>
      <dt className="font-sans text-sm md:text-md font-medium text-gray-70">{label}</dt>
      <dd className="font-sans text-md md:text-lg text-white">{value}</dd>
    </div>
  );
}
