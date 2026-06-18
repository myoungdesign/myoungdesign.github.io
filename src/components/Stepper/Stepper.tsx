'use client';

import { Accordion } from '@base-ui/react/accordion';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

import { cn } from '@/utils';

// ---- Contexts ----

type StepperContextValue = {
  activeValue: string;
  setActiveValue: (value: string) => void;
  duration: number;
  registerStep: (value: string) => void;
  advanceStep: () => void;
  /** True once the stepper has scrolled into view; gates the auto-advance timer. */
  isInView: boolean;
};

const StepperContext = createContext<StepperContextValue | null>(null);

function useStepper() {
  const ctx = useContext(StepperContext);
  if (!ctx) throw new Error('Stepper parts must be used within <Stepper>.');
  return ctx;
}

type StepperItemContextValue = { value: string };
const StepperItemContext = createContext<StepperItemContextValue | null>(null);

function useStepperItem() {
  const ctx = useContext(StepperItemContext);
  if (!ctx) throw new Error('Stepper item parts must be used within <StepperItem>.');
  return ctx;
}

// ---- Stepper ----

interface StepperProps {
  children: React.ReactNode;
  defaultValue: string;
  duration?: number;
}

export function Stepper({ children, defaultValue, duration = 7000 }: StepperProps) {
  const [activeValue, setActiveValue] = useState(defaultValue);
  const [isInView, setIsInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<string[]>([]);
  const activeValueRef = useRef(activeValue);

  useEffect(() => {
    activeValueRef.current = activeValue;
  }, [activeValue]);

  // Hold the auto-advance timer until the stepper scrolls into view, so steps
  // don't silently advance while it's still below the fold.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const registerStep = useCallback((value: string) => {
    if (!stepsRef.current.includes(value)) {
      stepsRef.current = [...stepsRef.current, value];
    }
  }, []);

  const advanceStep = useCallback(() => {
    const steps = stepsRef.current;
    const idx = steps.indexOf(activeValueRef.current);
    setActiveValue(steps[(idx + 1) % steps.length]);
  }, []);

  return (
    <StepperContext.Provider
      value={{ activeValue, setActiveValue, duration, registerStep, advanceStep, isInView }}
    >
      <div ref={rootRef}>{children}</div>
    </StepperContext.Provider>
  );
}

// ---- StepperList ----

interface StepperListProps {
  children: React.ReactNode;
  className?: string;
}

export function StepperList({ children, className }: StepperListProps) {
  const { activeValue, setActiveValue } = useStepper();

  return (
    <Accordion.Root
      value={[activeValue]}
      onValueChange={next => {
        if (next.length > 0) setActiveValue(next[0] as string);
      }}
      className={cn('flex flex-col', className)}
    >
      {children}
    </Accordion.Root>
  );
}

// ---- StepperItem ----

interface StepperItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function StepperItem({ children, value, className }: StepperItemProps) {
  const { activeValue, duration, advanceStep, registerStep, isInView } = useStepper();
  const shouldReduceMotion = useReducedMotion();
  const isActive = value === activeValue;

  useEffect(() => {
    registerStep(value);
  }, [registerStep, value]);

  return (
    <StepperItemContext.Provider value={{ value }}>
      <Accordion.Item value={value} className={className}>
        {children}
        <div className="relative h-0.5 overflow-hidden rounded-full bg-fg/5">
          {isActive && isInView && !shouldReduceMotion && (
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-fg"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
              onAnimationComplete={advanceStep}
              style={{ willChange: 'width' }}
            />
          )}
        </div>
      </Accordion.Item>
    </StepperItemContext.Provider>
  );
}

// ---- StepperTrigger ----

interface StepperTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function StepperTrigger({ children, className }: StepperTriggerProps) {
  const { activeValue } = useStepper();
  const { value } = useStepperItem();

  return (
    <Accordion.Header className="[letter-spacing:normal]">
      <Accordion.Trigger
        className={cn(
          'flex w-full cursor-pointer items-center justify-between py-4 text-left',
          'font-sans font-medium text-sm transition-colors focus-visible:outline-none',
          value === activeValue ? 'text-fg-emphasis' : 'text-fg-soft',
          className
        )}
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

// ---- StepperContent ----

interface StepperContentProps {
  children: React.ReactNode;
  className?: string;
}

export function StepperContent({ children, className }: StepperContentProps) {
  return (
    <Accordion.Panel
      className={cn(
        'h-[var(--accordion-panel-height)] overflow-hidden',
        'transition-[height,opacity] duration-400 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]',
        'data-[starting-style]:h-0 data-[starting-style]:opacity-0',
        'data-[ending-style]:h-0 data-[ending-style]:opacity-0',
        'motion-reduce:transition-none',
        className
      )}
    >
      <p className="pb-5 text-base leading-relaxed text-fg-soft">{children}</p>
    </Accordion.Panel>
  );
}

// ---- StepperPanel ----

interface StepperPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function StepperPanel({ children, className }: StepperPanelProps) {
  return <div className={cn('relative', className)}>{children}</div>;
}

// ---- StepperPanelItem ----

interface StepperPanelItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function StepperPanelItem({ children, value, className }: StepperPanelItemProps) {
  const { activeValue } = useStepper();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {activeValue === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn('absolute inset-0', className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
