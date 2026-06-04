'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
  /** Skip the in-view check and fire on mount. Use for above-the-fold counters. */
  triggerOnMount?: boolean;
};

export function Counter({
  to,
  duration = 0.5,
  delay = 0,
  suffix = '',
  className,
  triggerOnMount = false,
}: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const shouldRun = triggerOnMount || inView;

  useEffect(() => {
    if (!shouldRun) return;
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.55, 0.08, 0.68, 0.53],
      onUpdate: latest => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [shouldRun, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
