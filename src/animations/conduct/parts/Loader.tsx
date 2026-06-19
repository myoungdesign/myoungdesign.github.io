'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/utils';

/*
 * Conduct's bar-stack glyph as an in-progress loader — an opacity wave loops
 * down the lines while the agent works. Raw product values on purpose —
 * portfolio tokens are portfolio brand and must not leak in here.
 */

const BARS = [
  'M15.91 0H6.35v1.22h9.56V0Z',
  'M11.93 3.04H2.06v1.22h9.87V3.04Z',
  'M9.87 6.09H0v1.22h9.87V6.09Z',
  'M11.8 9.13H2.03v1.22h9.77V9.13Z',
  'M16 12.17H6.23v1.22H16v-1.22Z',
];

/* Static fallback opacities, matching the product's idle glyph. */
const FADED = [0.6, 0.8, 0.7, 0.5, 0.3];

export function Loader({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 16 13.4"
      fill="none"
      className={cn('h-[13.4px] w-[16px] shrink-0', className)}
      aria-hidden
    >
      {BARS.map((d, i) =>
        shouldReduceMotion ? (
          <path key={d} d={d} opacity={FADED[i]} fill="#16171C" />
        ) : (
          <motion.path
            key={d}
            d={d}
            fill="#16171C"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 }}
          />
        )
      )}
    </svg>
  );
}
