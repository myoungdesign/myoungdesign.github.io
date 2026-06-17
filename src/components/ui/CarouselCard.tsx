'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/utils';

import { CarouselCounter, useCarousel } from './Carousel';

type CarouselCardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Detail card for a Carousel — controls plus per-slide copy synced to the active
 * slide. Place as a sibling of CarouselContent inside a `relative` wrapper (never
 * inside it, where every child is treated as a slide). Stacks below the viewport
 * on mobile, overlays bottom-left from md up.
 */
export function CarouselCard({ children, className }: CarouselCardProps) {
  return (
    <div
      className={cn(
        'mt-4 flex flex-col gap-6 rounded-md border border-subtle bg-surface px-8 py-7 shadow-xs md:absolute md:bottom-7 md:left-7 md:mt-0 md:w-88',
        className
      )}
    >
      {children}
    </div>
  );
}

type CarouselCardControlsProps = {
  className?: string;
};

const cardNavButtonClasses =
  'flex size-6 items-center justify-center rounded-full text-fg-gentle transition-colors hover:not-disabled:text-fg-subtle disabled:cursor-default disabled:opacity-30 cursor-pointer';

/** Compact ghost-styled prev / counter / next row for use inside CarouselCard. */
export function CarouselCardControls({ className }: CarouselCardControlsProps) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
        className={cardNavButtonClasses}
      >
        <ChevronLeft className="size-4.5" strokeWidth={1.6} aria-hidden />
      </button>
      <CarouselCounter className="gap-0.5 text-xs tracking-widest" />
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
        className={cardNavButtonClasses}
      >
        <ChevronRight className="size-4.5" strokeWidth={1.6} aria-hidden />
      </button>
    </div>
  );
}

type CarouselCardItemProps = {
  children: React.ReactNode;
  className?: string;
  /** The slide this item describes — rendered only while that slide is active. */
  index: number;
};

/** Per-slide card copy. Only the item matching the active slide renders. */
export function CarouselCardItem({ children, className, index }: CarouselCardItemProps) {
  const { active } = useCarousel();
  const shouldReduceMotion = useReducedMotion();

  // Tracks where the carousel was before this navigation. Inactive items stay
  // mounted (rendering null), so this state survives to tell us the travel
  // direction when this item's turn comes — and whether any navigation has
  // happened at all (so the first paint doesn't animate). Adjusted during
  // render per https://react.dev/learn/you-might-not-need-an-effect.
  const [nav, setNav] = useState({ prev: active, navigated: false, direction: 1 });
  if (nav.prev !== active) {
    setNav({ prev: active, navigated: true, direction: active > nav.prev ? 1 : -1 });
  }

  if (index !== active) return null;

  return (
    <motion.div
      initial={shouldReduceMotion || !nav.navigated ? false : { opacity: 0, x: 20 * nav.direction }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
      className={cn('flex flex-col gap-2', className)}
    >
      {children}
    </motion.div>
  );
}
