'use client';

import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';

import { cn } from '@/utils';

import { Lightbox } from './Lightbox';

type CarouselContextValue = {
  active: number;
  count: number;
  loop: boolean;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  setCount: (count: number) => void;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('Carousel parts must be used within <Carousel>.');
  }
  return context;
}

type CarouselProps = {
  children: React.ReactNode;
  /** Wrap from the last slide back to the first (and vice versa). Defaults to false. */
  loop?: boolean;
};

/**
 * Single-slide image carousel. Compound component: assemble with CarouselContent,
 * CarouselSlide, and CarouselPrevious/CarouselNext. The root is a context provider
 * with no DOM of its own, so nav controls can live outside the framed viewport.
 */
export function Carousel({ children, loop = false }: CarouselProps) {
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(0);

  const scrollTo = (index: number) => {
    if (count === 0) return;
    setActive(loop ? ((index % count) + count) % count : Math.max(0, Math.min(index, count - 1)));
  };

  const canScrollPrev = loop || active > 0;
  const canScrollNext = loop || active < count - 1;

  return (
    <CarouselContext.Provider
      value={{
        active,
        count,
        loop,
        canScrollPrev,
        canScrollNext,
        scrollPrev: () => scrollTo(active - 1),
        scrollNext: () => scrollTo(active + 1),
        scrollTo,
        setCount,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

type CarouselContentProps = {
  children: React.ReactNode;
  className?: string;
  /** Show the maximize button that opens the active slide in a lightbox. Defaults to true. */
  expandable?: boolean;
  /** Space between slides, in pixels. Defaults to 24. */
  gap?: number;
};

const SWIPE_THRESHOLD = 50;

/** Framed viewport holding the sliding track. Aspect ratio defaults to 16/9, override via className. */
export function CarouselContent({
  children,
  className,
  expandable = true,
  gap = 4,
}: CarouselContentProps) {
  const { active, scrollNext, scrollPrev, setCount } = useCarousel();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const slides = Children.toArray(children).filter(isValidElement);
  const media = slides.map(slide => {
    const props = (slide as React.ReactElement<{ src?: string; alt?: string }>).props;
    return { src: props.src ?? '', alt: props.alt };
  });
  // Inject each slide's position so it can eagerly preload itself when near the active slide.
  const items = slides.map((slide, index) =>
    cloneElement(slide as React.ReactElement<{ index?: number }>, { index })
  );

  useEffect(() => {
    setCount(slides.length);
  }, [slides.length, setCount]);

  // While the lightbox is open, arrow keys move between slides (no in-lightbox UI yet).
  // Changing `active` re-points both the carousel and the lightbox at the new slide.
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      // Capture phase + stopPropagation so the arrows reach us before the lightbox's
      // dialog focus management claims them (otherwise they just move focus).
      e.preventDefault();
      e.stopPropagation();
      if (e.key === 'ArrowRight') scrollNext();
      else scrollPrev();
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [lightboxOpen, scrollNext, scrollPrev]);

  // Lightweight pointer-based swipe (mouse + touch) — no library needed since the
  // track is positioned with a plain CSS transform.
  const swipeStartX = useRef<number | null>(null);
  const handlePointerDown = (e: ReactPointerEvent) => {
    swipeStartX.current = e.clientX;
  };
  const handlePointerUp = (e: ReactPointerEvent) => {
    if (swipeStartX.current === null) return;
    const dx = e.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (dx < -SWIPE_THRESHOLD) scrollNext();
    else if (dx > SWIPE_THRESHOLD) scrollPrev();
  };

  const activeMedia = media[active];

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className={cn(
        'relative aspect-video touch-pan-y overflow-clip rounded-lg border border-subtle bg-surface shadow-xs',
        className
      )}
    >
      <div
        className="flex h-full cursor-grab transition-transform duration-640 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform motion-reduce:transition-none active:cursor-grabbing"
        style={{ gap: `${gap}px`, transform: `translateX(calc(${-active} * (100% + ${gap}px)))` }}
      >
        {items}
      </div>

      {expandable && activeMedia?.src && (
        <>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="Expand image"
            className="absolute right-5 bottom-5 flex size-9 items-center justify-center rounded-sm border border-subtle bg-elevated text-fg-gentle shadow-xs transition-all hover:border-fg-muted hover:text-fg-muted cursor-pointer"
          >
            <Maximize2 className="size-4.5" strokeWidth={1.75} aria-hidden />
          </button>
          <Lightbox
            open={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            src={activeMedia.src}
            alt={activeMedia.alt}
          />
        </>
      )}
    </div>
  );
}

type CarouselSlideProps = {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  /** Injected by CarouselContent — this slide's position in the track. */
  index?: number;
};

/** A single full-width slide. Renders a next/image from src, or arbitrary children. */
export function CarouselSlide({ src, alt, className, children, index }: CarouselSlideProps) {
  const { active, count, loop } = useCarousel();

  // Eagerly load the active slide and its immediate neighbours (with wraparound when
  // looping) so navigating shows a decoded image rather than a blank pop-in.
  const linearDistance = index === undefined ? Infinity : Math.abs(index - active);
  const distance = loop ? Math.min(linearDistance, count - linearDistance) : linearDistance;
  const isActive = index === active;
  const eager = distance <= 1;

  return (
    <div className={cn('relative h-full w-full shrink-0', className)}>
      {children ??
        (src && (
          <Image
            src={src}
            alt={alt ?? ''}
            fill
            sizes="(min-width: 768px) 75vw, 100vw"
            className="object-cover select-none"
            draggable={false}
            priority={isActive}
            loading={isActive ? undefined : eager ? 'eager' : 'lazy'}
          />
        ))}
    </div>
  );
}

type CarouselNavProps = {
  className?: string;
};

const navButtonClasses =
  'flex size-9 items-center justify-center rounded-full border bg-elevated text-fg-gentle shadow-xs transition-all hover:not-disabled:border-fg-subtle hover:not-disabled:text-fg-subtle disabled:cursor-default disabled:opacity-40 cursor-pointer';

/** Previous-slide control. Place anywhere inside <Carousel>. */
export function CarouselPrevious({ className }: CarouselNavProps) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Previous slide"
      className={cn(navButtonClasses, className)}
    >
      <ChevronLeft className="size-5 -ml-px" strokeWidth={1.6} aria-hidden />
    </button>
  );
}

/** Next-slide control. Place anywhere inside <Carousel>. */
export function CarouselNext({ className }: CarouselNavProps) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Next slide"
      className={cn(navButtonClasses, className)}
    >
      <ChevronRight className="size-5 -mr-px" strokeWidth={1.6} aria-hidden />
    </button>
  );
}

/** Slide index counter, e.g. "01 / 08". Place anywhere inside <Carousel>. */
export function CarouselCounter({ className }: CarouselNavProps) {
  const { active, count } = useCarousel();
  return (
    <p
      className={cn(
        'flex items-center gap-1 font-sans font-medium text-md uppercase tracking-normal text-fg-gentle tabular-nums',
        className
      )}
    >
      <span>{String(active + 1).padStart(2, '0')}</span>
      <span>/</span>
      <span>{String(count).padStart(2, '0')}</span>
    </p>
  );
}
