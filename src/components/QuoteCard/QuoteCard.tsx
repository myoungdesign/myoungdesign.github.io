import Image from 'next/image';

import { cn } from '@/utils';

type QuoteCardProps = {
  /** Quote text, including any curly quotes. */
  quote: React.ReactNode;
  /** Name of the person quoted. */
  author: string;
  /** Image src for the author's avatar. */
  avatar: string;
  /** Company or platform the quote is from, e.g. "Trustpilot". */
  company: string;
  /** Path to the company logo SVG, rendered beside the company name. */
  logo?: string;
  className?: string;
};

/** A testimonial quote in a soft card, with an author avatar and company accreditation. */
export function QuoteCard({ quote, author, avatar, company, logo, className }: QuoteCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-6 overflow-clip rounded-lg bg-canvas p-8 md:p-16',
        className
      )}
    >
      <blockquote className="w-full max-w-148 text-center font-serif font-medium text-xl leading-[1.7] text-fg tracking-tight">
        {quote}
      </blockquote>
      <div className="flex items-center gap-5">
        <div className="relative size-13 shrink-0 overflow-clip rounded-sm border border-outline bg-surface">
          <Image src={avatar} alt={author} fill className="object-cover" />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-sans text-md font-medium whitespace-nowrap text-fg-emphasis">
            {author}
          </p>
          <div className="flex h-5 items-center gap-1.5">
            {logo && <img src={logo} alt="" width={18} height={18} />}
            <p className="font-sans font-medium text-2xs tracking-widest uppercase whitespace-nowrap text-fg-gentle pt-0.5">
              {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
