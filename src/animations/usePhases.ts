'use client';

import { useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

/**
 * Steps a scene through its choreography while its carousel slide is active.
 *
 * Phases are 1-indexed: phase 1 begins `startDelay` ms after activation, phase
 * k+1 begins `durations[k-1]` ms after phase k, and the final phase
 * (`durations.length + 1`) holds until the slide deactivates, which snaps the
 * scene back to phase 0 so the next activation replays from the start.
 * Reduced-motion users always get the final phase — a static end state.
 *
 * `durations` must be referentially stable (a module-level constant).
 *
 * Returns the current phase and a `restart` callback that replays the
 * choreography from phase 0 (a no-op for reduced-motion users).
 */
export function usePhases(
  active: boolean,
  durations: readonly number[],
  startDelay = 450
): [number, () => void] {
  const finalPhase = durations.length + 1;
  const [phase, setPhase] = useState(0);
  const [run, setRun] = useState(0);
  const [prevActive, setPrevActive] = useState(active);
  const shouldReduceMotion = useReducedMotion();

  // Render-time reset (instead of an effect) so a deactivated slide never
  // paints a stale phase before snapping back to 0.
  if (prevActive !== active) {
    setPrevActive(active);
    if (!active) setPhase(0);
  }

  const restart = useCallback(() => {
    setPhase(0);
    setRun(r => r + 1);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || !active) return;
    let timer: ReturnType<typeof setTimeout>;
    const advance = (next: number) => {
      setPhase(next);
      if (next < finalPhase) {
        timer = setTimeout(() => advance(next + 1), durations[next - 1]);
      }
    };
    timer = setTimeout(() => advance(1), startDelay);
    return () => clearTimeout(timer);
  }, [active, durations, finalPhase, run, shouldReduceMotion, startDelay]);

  return [shouldReduceMotion ? finalPhase : phase, restart];
}
