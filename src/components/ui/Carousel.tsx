'use client';

import { motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
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
  /** Wrap from the last slide back to the first (and vice versa). Defaults to true. */
  loop?: boolean;
};

/**
 * Single-slide image carousel. Compound component: assemble with CarouselContent,
 * CarouselSlide, and CarouselPrevious/CarouselNext. The root is a context provider
 * with no DOM of its own, so nav controls can live outside the framed viewport.
 */
export function Carousel({ children, loop = true }: CarouselProps) {
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
};

const SWIPE_THRESHOLD = 50;

/** Framed viewport holding the sliding track. Aspect ratio defaults to 16/9, override via className. */
export function CarouselContent({ children, className, expandable = true }: CarouselContentProps) {
  const { active, scrollNext, scrollPrev, setCount } = useCarousel();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const slides = Children.toArray(children).filter(isValidElement);
  const media = slides.map(slide => {
    const props = (slide as React.ReactElement<{ src?: string; alt?: string }>).props;
    return { src: props.src ?? '', alt: props.alt };
  });

  useEffect(() => {
    setCount(slides.length);
  }, [slides.length, setCount]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) scrollNext();
    else if (info.offset.x > SWIPE_THRESHOLD) scrollPrev();
  };

  const activeMedia = media[active];

  return (
    <div
      className={cn(
        'relative aspect-video overflow-clip rounded-lg border border-subtle bg-canvas shadow-xs',
        className
      )}
    >
      <motion.div
        className="flex h-full cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${active * 100}%` }}
        transition={{ type: 'spring', stiffness: 260, damping: 32, mass: 0.9 }}
      >
        {children}
      </motion.div>

      {expandable && activeMedia?.src && (
        <>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="Expand image"
            className="absolute right-5 bottom-5 flex size-9 items-center justify-center rounded-sm border border-subtle bg-elevated text-fg-gentle shadow-xs transition-all hover:border-fg-muted hover:text-fg-muted cursor-pointer"
          >
            <Maximize2 className="size-[18px]" strokeWidth={1.75} aria-hidden />
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
};

/** A single full-width slide. Renders a next/image from src, or arbitrary children. */
export function CarouselSlide({ src, alt, className, children }: CarouselSlideProps) {
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
          />
        ))}
    </div>
  );
}

type CarouselNavProps = {
  className?: string;
};

const navButtonClasses =
  'flex size-9 items-center justify-center rounded-full text-fg-gentle transition-all hover:text-fg disabled:cursor-default disabled:opacity-30 disabled:hover:text-fg-gentle cursor-pointer';

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
      <ChevronLeft className="size-6" strokeWidth={1.6} aria-hidden />
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
      <ChevronRight className="size-6" strokeWidth={1.6} aria-hidden />
    </button>
  );
}
