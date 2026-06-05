'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { cn } from '@/utils';

export type AgentCard = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
};

type CardSliderProps = {
  cards: AgentCard[];
  className?: string;
};

// All y values include a +30 vertical offset that shifts the deck down so the
// visual bounding box (top-back card up to active-card bottom) is centered in
// the stage. Relative arrangement is unchanged.
const POSITIONS: Record<
  number,
  { x: number; y: number; rotate: number; scale: number; zIndex: number; opacity: number }
> = {
  0: { x: 0, y: 30, rotate: 0, scale: 1, zIndex: 50, opacity: 1 },
  1: { x: 110, y: 20, rotate: 10, scale: 0.8, zIndex: 30, opacity: 1 },
  2: { x: -6, y: -70, rotate: 2, scale: 0.8, zIndex: 20, opacity: 1 },
  6: { x: -110, y: 20, rotate: -10, scale: 0.8, zIndex: 30, opacity: 1 },
  5: { x: 0, y: 90, rotate: -2, scale: 0.78, zIndex: 15, opacity: 0 },
  3: { x: 40, y: 20, rotate: 6, scale: 0.7, zIndex: 5, opacity: 0 },
  4: { x: -40, y: 20, rotate: -6, scale: 0.7, zIndex: 5, opacity: 0 },
};

const CARD_W = 292;
const CARD_H = 401;

export function CardSlider({ cards, className }: CardSliderProps) {
  const [active, setActive] = useState(0);
  const total = cards.length;

  const advance = useCallback(
    (dir: 1 | -1) => {
      setActive(i => (i + dir + total) % total);
    },
    [total]
  );

  const activeCard = cards[active];

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-7 pt-20', className)}>
      {/* Deck */}
      <div
        className="relative mx-auto w-full max-w-[548px] aspect-[548/470] overflow-clip [container-type:inline-size]"
        style={{ perspective: 1200 }}
        aria-roledescription="carousel"
      >
        <div
          className="absolute left-1/2 top-1/2 h-[520px] w-[548px] origin-center -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ scale: 'min(1, calc(100cqw / 548px))' }}
        >
          {cards.map((card, i) => {
            const offset = (i - active + total) % total;
            const pos = POSITIONS[offset] ?? POSITIONS[3];
            const isActive = offset === 0;

            return (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${card.title}`}
                aria-current={isActive}
                tabIndex={isActive ? 0 : -1}
                className={cn(
                  'absolute bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-2xl',
                  isActive ? 'cursor-default' : 'cursor-pointer'
                )}
                style={{ width: CARD_W, height: CARD_H, willChange: 'transform' }}
                initial={false}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  rotate: pos.rotate,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 28,
                  mass: 0.9,
                  opacity: { duration: 0.35, ease: 'easeOut' },
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 292px, 60vw"
                  className="object-contain pointer-events-none select-none"
                  draggable={false}
                  priority={isActive}
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 max-w-[508px] p-md">
        {/* Controls */}
        <div className="flex items-center gap-3.5 h-9">
          <button
            type="button"
            aria-label="Previous card"
            onClick={() => advance(-1)}
            className="flex size-8 items-center justify-center rounded-full cursor-pointer border text-fg-gentle transition-all hover:border-fg-subtle hover:text-fg-subtle"
          >
            <ChevronLeft className="size-5 -ml-px" strokeWidth={1.6} />
          </button>
          <p className="flex items-center gap-1 font-sans font-medium text-md tracking-tightest uppercase text-gray-70 tabular-nums">
            <span>{String(active + 1).padStart(2, '0')}</span> /{' '}
            <span>{String(total).padStart(2, '0')}</span>
          </p>
          <button
            type="button"
            aria-label="Next card"
            onClick={() => advance(1)}
            className="flex size-8 items-center justify-center rounded-full cursor-pointer border text-fg-gentle transition-all hover:border-fg-subtle hover:text-fg-subtle"
          >
            <ChevronRight className="size-5 -mr-px" strokeWidth={1.6} />
          </button>
        </div>

        {/* Description (crossfade between cards) */}
        <div className="flex flex-col gap-3 pt-3 pl-1.5 pb-md">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-serif text-2xl tracking-tighter text-fg-emphasis leading-[1.3]">
                {activeCard.title}
              </h3>
              <p className="font-sans font-medium text-lg leading-[1.55] text-fg">
                {activeCard.tagline}
              </p>
              <p className="font-sans text-md text-fg leading-[1.625]">{activeCard.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
