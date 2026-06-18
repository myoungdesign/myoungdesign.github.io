'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

// ---- Context ----

type ScrollSwapContextValue = {
  activeValue: string;
  setActiveValue: (value: string) => void;
};

const ScrollSwapContext = createContext<ScrollSwapContextValue | null>(null);

function useScrollSwap() {
  const ctx = useContext(ScrollSwapContext);
  if (!ctx) throw new Error('ScrollSwap parts must be used within <ScrollSwap>.');
  return ctx;
}

// ---- ScrollSwap ----

interface ScrollSwapProps {
  children: React.ReactNode;
  defaultValue: string;
  className?: string;
}

export function ScrollSwap({ children, defaultValue, className }: ScrollSwapProps) {
  const [activeValue, setActiveValue] = useState(defaultValue);

  return (
    <ScrollSwapContext.Provider value={{ activeValue, setActiveValue }}>
      <div className={cn('relative flex w-full gap-8', className)}>{children}</div>
    </ScrollSwapContext.Provider>
  );
}

// ---- ScrollSwapLabels ----

interface ScrollSwapLabelsProps {
  children: React.ReactNode;
  /** Optional content rendered once, persistently, above the cross-fading labels. */
  header?: React.ReactNode;
  className?: string;
}

export function ScrollSwapLabels({ children, header, className }: ScrollSwapLabelsProps) {
  return (
    <div className={cn('hidden flex-1 md:block md:max-w-108', className)}>
      <div className="sticky top-36 flex flex-col">
        {header}
        <div className="grid">{children}</div>
      </div>
    </div>
  );
}

// ---- ScrollSwapLabel ----

interface ScrollSwapLabelProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function ScrollSwapLabel({ children, value, className }: ScrollSwapLabelProps) {
  const { activeValue } = useScrollSwap();
  const shouldReduceMotion = useReducedMotion();
  const isActive = value === activeValue;

  return (
    <motion.div
      initial={false}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
      aria-hidden={!isActive}
      className={cn('[grid-area:1/1]', !isActive && 'pointer-events-none', className)}
    >
      {children}
    </motion.div>
  );
}

// ---- ScrollSwapPanels ----

interface ScrollSwapPanelsProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollSwapPanels({ children, className }: ScrollSwapPanelsProps) {
  return (
    <div className={cn('flex min-w-0 flex-1 flex-col gap-10 md:gap-2.5', className)}>
      {children}
    </div>
  );
}

// ---- ScrollSwapPanel ----

interface ScrollSwapPanelProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function ScrollSwapPanel({ children, value, className }: ScrollSwapPanelProps) {
  const { setActiveValue } = useScrollSwap();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A panel becomes active when its top crosses a line ~40% down the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveValue(value);
      },
      { rootMargin: '-40% 0px -59% 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveValue, value]);

  return (
    <div ref={ref} className={cn('flex flex-col', className)}>
      {children}
    </div>
  );
}
