import { cn } from '@/utils';

type ConstraintCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ConstraintCard({ icon, title, children, className }: ConstraintCardProps) {
  return (
    <div className={cn('flex flex-col gap-6 p-7 md:p-8', className)}>
      <div className="text-white [&_svg]:size-10">{icon}</div>
      <div className="flex flex-col gap-3">
        <h3 className="font-sans text-md font-medium uppercase tracking-[0.1em] text-white">
          {title}
        </h3>
        <p className="font-sans text-md text-gray-70">{children}</p>
      </div>
    </div>
  );
}
