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
  const stepsRef = useRef<string[]>([]);
  const activeValueRef = useRef(activeValue);

  useEffect(() => {
    activeValueRef.current = activeValue;
  }, [activeValue]);

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
      value={{ activeValue, setActiveValue, duration, registerStep, advanceStep }}
    >
      {children}
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
  const { registerStep } = useStepper();

  useEffect(() => {
    registerStep(value);
  }, [registerStep, value]);

  return (
    <StepperItemContext.Provider value={{ value }}>
      <Accordion.Item value={value} className={cn('border-b border-subtle', className)}>
        {children}
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
  const { activeValue, duration, advanceStep } = useStepper();
  const { value } = useStepperItem();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Accordion.Panel className={cn('overflow-hidden', className)}>
      <p className="pb-5 text-base leading-relaxed text-fg-soft">{children}</p>
      {value === activeValue && !shouldReduceMotion && (
        <motion.div
          key={activeValue}
          className="h-0.5 bg-fg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: duration / 1000, ease: 'linear' }}
          onAnimationComplete={() => advanceStep()}
          style={{ transformOrigin: 'left' }}
        />
      )}
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

  return (
    <AnimatePresence>
      {activeValue === value && (
        <motion.div
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={cn('absolute inset-0', className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
