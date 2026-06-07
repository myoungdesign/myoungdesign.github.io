'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

type HeroContextValue = {
  /** Returns current fade progress (0 = fully visible, 1 = fully faded). */
  getProgress: () => number;
  /** Subscribe to progress changes. Returns an unsubscribe function. */
  subscribe: (fn: (progress: number) => void) => () => void;
  fadeScale: number;
};

const HeroContext = createContext<HeroContextValue | null>(null);

function useHeroContext(componentName: string) {
  const ctx = useContext(HeroContext);
  if (!ctx) throw new Error(`<${componentName}> must be rendered inside <Hero>.`);
  return ctx;
}

type HeroProps = {
  children: React.ReactNode;
  /** When true, hero is `h-screen`. Otherwise, hero's height = its content height. */
  fullScreen?: boolean;
  /** Fraction of hero height where content begins fading. Default: 0.4 (fullScreen) / 0.1 (auto). */
  fadeStart?: number;
  /** Fraction of hero height where content is fully faded. Default: 1.0 (fullScreen) / 0.9 (auto). */
  fadeEnd?: number;
  /** Final scale applied to content at fadeEnd. Default 0.96. */
  fadeScale?: number;
  /** Extra scroll runway (as fraction of hero height) after the hero before the next section reaches the top. Default 0.3 (fullScreen) / 0 (auto). */
  hold?: number;
  /** Pixel scroll position at which the section below reaches the viewport top. Default: heroHeight * (1 + hold). */
  slideOverAt?: number;
  className?: string;
  /** Override the in-flow spacer's classes. Default `'bg-gray-10'`. Pass `'bg-transparent'` to let a Page wrapper's bg show through. */
  spacerClassName?: string;
};

const HEADER_OFFSET_CLASSES = 'pt-[var(--header-h-mobile)] md:pt-[var(--header-h-desktop)]';

export function Hero({
  children,
  fullScreen = false,
  fadeStart,
  fadeEnd,
  fadeScale = 0.98,
  hold,
  slideOverAt,
  className,
  spacerClassName = 'bg-gray-10',
}: HeroProps) {
  const resolvedFadeStart = fadeStart ?? (fullScreen ? 0.4 : 0.1);
  const resolvedFadeEnd = fadeEnd ?? (fullScreen ? 1.0 : 0.9);
  const resolvedHold = hold ?? (fullScreen ? 0.3 : 0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  // Refs hold the latest values for the scroll listener to read fresh each event.
  const heightRef = useRef(0);
  const startFracRef = useRef(resolvedFadeStart);
  const endFracRef = useRef(resolvedFadeEnd);
  useEffect(() => {
    heightRef.current = heroHeight;
    startFracRef.current = resolvedFadeStart;
    endFracRef.current = resolvedFadeEnd;
  });

  useEffect(() => {
    if (fullScreen) {
      const update = () => setHeroHeight(window.innerHeight);
      update();
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }
    const el = sectionRef.current;
    if (!el) return;
    const update = () => setHeroHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [fullScreen]);

  // Progress = 0 (visible) → 1 (faded). Driven by rAF polling window.scrollY,
  // which is robust against any scroll-event suppression from libraries like Lenis.
  const progressRef = useRef(0);
  const subscribersRef = useRef<Set<(p: number) => void>>(new Set());

  useEffect(() => {
    const update = () => {
      const h = heightRef.current;
      let next = 0;
      if (h > 0) {
        const s = h * startFracRef.current;
        const e = h * endFracRef.current;
        const v = window.scrollY;
        if (v <= s) next = 0;
        else if (v >= e) next = 1;
        else next = (v - s) / (e - s);
      }
      if (next !== progressRef.current) {
        progressRef.current = next;
        subscribersRef.current.forEach(fn => fn(next));
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // When heroHeight changes (e.g. ResizeObserver fires after mount), recompute progress.
  useEffect(() => {
    if (heroHeight <= 0) return;
    const h = heroHeight;
    const s = h * resolvedFadeStart;
    const e = h * resolvedFadeEnd;
    const v = window.scrollY;
    const next = v <= s ? 0 : v >= e ? 1 : (v - s) / (e - s);
    if (next !== progressRef.current) {
      progressRef.current = next;
      subscribersRef.current.forEach(fn => fn(next));
    }
  }, [heroHeight, resolvedFadeStart, resolvedFadeEnd]);

  // Spacer height = the resolved slide-over scroll position.
  const resolvedSlideOverAt = slideOverAt ?? heroHeight * (1 + resolvedHold);

  // Publish the scroll position by which Header must be fully gone.
  // Halfway through the slide-over scroll = comfortable buffer.
  // Also publish the scroll position past which the hero is fully out of
  // viewport, so the Header knows when to switch from progressive-hide to
  // direction-based show/hide (scroll up to reveal).
  useEffect(() => {
    if (resolvedSlideOverAt <= 0) return;
    const root = document.documentElement;
    root.style.setProperty('--header-exit-by', `${resolvedSlideOverAt * 0.5}px`);
    root.style.setProperty('--header-reveal-after', `${resolvedSlideOverAt}px`);
    return () => {
      root.style.removeProperty('--header-exit-by');
      root.style.removeProperty('--header-reveal-after');
    };
  }, [resolvedSlideOverAt]);

  const ctx: HeroContextValue = {
    getProgress: () => progressRef.current,
    subscribe: fn => {
      subscribersRef.current.add(fn);
      return () => subscribersRef.current.delete(fn);
    },
    fadeScale,
  };

  return (
    <HeroContext.Provider value={ctx}>
      <section
        ref={sectionRef}
        className={cn(
          'fixed inset-x-0 top-0 z-[1] overflow-hidden bg-gray-10',
          HEADER_OFFSET_CLASSES,
          fullScreen && 'flex h-screen items-start lg:items-center',
          className
        )}
      >
        {children}
      </section>
      {/* Spacer that reserves scroll room equal to the hero's visual height.
          Negative margin pulls it up to compensate for the sticky Header that
          sits before us in flow — so the placeholder starts exactly at the
          hero's bottom edge, not header-height below it. */}
      <div
        aria-hidden
        style={{ height: `${resolvedSlideOverAt}px` }}
        className={cn(
          'w-full -mt-[var(--header-h-mobile)] md:-mt-[var(--header-h-desktop)]',
          spacerClassName
        )}
      />
    </HeroContext.Provider>
  );
}

type HeroBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  /** Transform origin for the scale animation. Default 'center'. */
  origin?: 'center' | 'top' | 'bottom' | 'left' | 'right';
};

export function HeroBackground({ children, className, origin = 'center' }: HeroBackgroundProps) {
  const { subscribe, getProgress, fadeScale } = useHeroContext('HeroBackground');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const apply = (p: number) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = String(1 - p);
      el.style.transform = `scale(${1 - (1 - fadeScale) * p})`;
    };
    apply(getProgress());
    return subscribe(apply);
  }, [subscribe, getProgress, fadeScale]);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ transformOrigin: origin, willChange: 'opacity, transform' }}
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
    >
      {children}
    </div>
  );
}

type HeroContentProps = {
  children: React.ReactNode;
  className?: string;
  /** Transform origin for the scale animation. Default 'center'. */
  origin?: 'center' | 'top' | 'bottom' | 'left' | 'right';
};

export function HeroContent({ children, className, origin = 'center' }: HeroContentProps) {
  const { subscribe, getProgress, fadeScale } = useHeroContext('HeroContent');
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const apply = (p: number) => {
      const el = ref.current;
      if (!el) return;
      const opacity = 1 - p;
      const scale = 1 - (1 - fadeScale) * p;
      el.style.opacity = String(opacity);
      el.style.transform = `scale(${scale})`;
      el.style.pointerEvents = p > 0.99 ? 'none' : 'auto';
    };
    apply(getProgress());
    return subscribe(apply);
  }, [subscribe, getProgress, fadeScale]);

  return (
    <div
      ref={ref}
      style={{ transformOrigin: origin, willChange: 'opacity, transform' }}
      className={cn('relative z-[1] w-full', className)}
    >
      {children}
    </div>
  );
}
