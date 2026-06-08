import Image from 'next/image';

import { cn } from '@/utils';

type CaseStudyCardProps = {
  image?: string;
  imageAlt?: string;
  aspectRatio?: string;
  title: string;
  children?: React.ReactNode;
  bullets?: string[];
  className?: string;
};

export function CaseStudyCard({
  image,
  imageAlt = '',
  aspectRatio = '16/10',
  title,
  children,
  bullets,
  className,
}: CaseStudyCardProps) {
  return (
    <div className={cn('flex flex-col gap-7', className)}>
      <div className="relative w-full overflow-hidden bg-canvas" style={{ aspectRatio }}>
        {image ? <Image src={image} alt={imageAlt} fill className="object-cover" /> : null}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-xl text-fg">{title}</h3>
        {children && <p className="font-sans text-md text-fg">{children}</p>}
        {bullets && bullets.length > 0 && (
          <ul className="mt-2 flex flex-col gap-3 pt-2">
            {bullets.map(b => (
              <li key={b} className="flex items-start gap-4 pl-7 font-sans text-md text-fg">
                <span
                  aria-hidden
                  className="mt-[0.55em] inline-block size-1.5 shrink-0 rounded-full bg-fg"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
