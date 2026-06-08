import { cn } from '@/utils';

type IconCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  bullets?: string[];
  className?: string;
};

export function IconCard({ icon, title, children, bullets, className }: IconCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 bg-elevated border border-gray-90 bg-white p-6 md:p-8 text-fg rounded-lg',
        className
      )}
    >
      <div className="text-fg [&_svg]:size-9">{icon}</div>
      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-md font-medium uppercase tracking-[0.1em] text-fg">
          {title}
        </h3>
        <p className="font-sans text-md text-soft">{children}</p>
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 flex flex-col gap-3">
            {bullets.map(b => (
              <li
                key={b}
                className="flex items-start gap-3 font-sans text-md text-fg before:mt-[0.65em] before:size-1 before:shrink-0 before:rounded-full before:bg-fg"
              >
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
