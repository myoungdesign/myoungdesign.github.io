import { cn } from '@/utils';

type ImpactRowProps = {
  icon: React.ReactNode;
  label: string;
  outcome: React.ReactNode;
  className?: string;
};

export function ImpactRow({ icon, label, outcome, className }: ImpactRowProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-[auto_minmax(0,1fr)] md:grid-cols-[auto_minmax(0,10rem)_minmax(0,1fr)] gap-x-5 md:gap-x-8 gap-y-2 items-center py-5',
        className
      )}
    >
      <div className="text-fg [&_svg]:size-5">{icon}</div>
      <p className="font-sans text-md font-medium text-fg-emphasis">{label}</p>
      <p className="col-span-2 md:col-span-1 font-sans text-md text-fg">{outcome}</p>
    </div>
  );
}
