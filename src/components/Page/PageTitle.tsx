import { cn } from '@/utils';

type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
  hidePeriod?: boolean;
};

export function PageTitle({ children, className, hidePeriod }: PageTitleProps) {
  return (
    <h1 className={cn('text-white font-[400]', className)}>
      {children}
      {!hidePeriod && <span className="text-red-50">.</span>}
    </h1>
  );
}
