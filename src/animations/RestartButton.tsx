'use client';

import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

import { cn } from '@/utils';

/*
 * Replay control for the constraint scenes. Unlike the MockChat primitives,
 * this is portfolio chrome on top of the slide, so it uses the site's tokens.
 * Position it from the consumer (it ships unpositioned).
 */
export function RestartButton({ onClick, className }: { onClick: () => void; className?: string }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'pointer-events-auto flex h-9 cursor-pointer items-center gap-1.5 rounded-md bg-black/30 px-3 font-sans text-sm font-medium text-white transition-colors hover:bg-black/40',
        className
      )}
    >
      <RotateCcw className="size-[18px]" aria-hidden />
      Restart
    </motion.button>
  );
}
