import { CardContent } from '../ui';

type ExpandCardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function ExpandCardContent({ children, className }: ExpandCardContentProps) {
  return <CardContent className={className}>{children}</CardContent>;
}
