'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/utils';

/**
 * Initial-load gate. Renders an opaque gray-10 overlay that is present in the
 * first painted HTML (so the brief "white content covers viewport, then drops"
 * reflow — caused by the Hero's JS-measured spacer starting at 0 — happens
 * underneath it and is never seen). Fades out once fonts + layout have settled.
 *
 * Sits at z-40: above page content (z-[2]) and the hero (z-[1]) but below the
 * Header (z-50), so the navbar stays visible over the gray background.
 *
 * Mounted once in the persistent root layout, so it only gates the initial hard
 * load — not client-side navigations (where the layout, and this state, persist).
 */
export function PageLoadOverlay() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    let cancelled = false;

    const reveal = () => {
      if (!cancelled) setReady(true);
    };

    // Safety net: never leave content hidden if fonts/rAF stall.
    const timeout = setTimeout(reveal, 1500);

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    fontsReady.then(() => {
      // Two rAF ticks let the Hero's useLayoutEffect measurement + reflow
      // commit before we reveal, so nothing shifts during/after the fade.
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(reveal);
      });
    });

    return () => {
      cancelled = true;
      clearTimeout(timeout);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={cn(
        'fixed inset-0 z-40 bg-gray-10 transition-opacity duration-300 ease-out',
        ready ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    />
  );
}
