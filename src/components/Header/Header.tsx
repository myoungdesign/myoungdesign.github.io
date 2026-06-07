'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Logo } from '@/components/Logo';
import { MobileMenu, MobileMenuButton } from '@/components/MobileMenu';
import { Navbar } from '@/components/Navbar';

import './Header.css';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileOpenRef = useRef(mobileOpen);
  const lastScrollYRef = useRef(0);
  const stickyModeRef = useRef(false);
  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  });

  // Drive the header's exit translateY via a scroll listener that reads
  // --header-exit-by and --header-reveal-after (px) off :root. Heroes publish
  // these vars: --header-exit-by is when the navbar must be fully gone
  // (halfway through the hero's slide-over runway); --header-reveal-after is
  // when the hero is fully out of viewport, past which scrolling up latches
  // the header into sticky mode. Sticky mode pins the header at the top
  // regardless of direction (even back over the hero) and only resets when
  // scrollY returns to 0. On pages without a Hero, we fall back to half the
  // viewport height for exitBy and double that for revealAfter.
  useEffect(() => {
    const DIRECTION_THRESHOLD = 4;
    const apply = () => {
      const el = headerRef.current;
      if (!el) return;
      if (mobileOpenRef.current) {
        el.style.transform = 'translateY(0%)';
        return;
      }
      const root = document.documentElement;
      const cs = getComputedStyle(root);
      const exitRaw = cs.getPropertyValue('--header-exit-by').trim();
      const revealRaw = cs.getPropertyValue('--header-reveal-after').trim();
      const exitBy = exitRaw ? parseFloat(exitRaw) : window.innerHeight * 0.5;
      const revealAfter = revealRaw ? parseFloat(revealRaw) : exitBy * 2;
      const startAt = exitBy * 0.2;
      const v = window.scrollY;
      const dy = v - lastScrollYRef.current;
      if (v <= 0) {
        stickyModeRef.current = false;
      } else if (!stickyModeRef.current && v > revealAfter && dy <= -DIRECTION_THRESHOLD) {
        stickyModeRef.current = true;
      }
      if (stickyModeRef.current) {
        el.style.transform = 'translateY(0%)';
      } else if (v <= exitBy) {
        const t = v <= startAt ? 0 : v >= exitBy ? 1 : (v - startAt) / (exitBy - startAt);
        el.style.transform = `translateY(${-100 * t}%)`;
      } else {
        el.style.transform = 'translateY(-100%)';
      }
      const nextSticky = stickyModeRef.current ? 'true' : 'false';
      if (el.dataset.sticky !== nextSticky) el.dataset.sticky = nextSticky;
      lastScrollYRef.current = v;
    };
    apply();
    window.addEventListener('scroll', apply, { passive: true });
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('scroll', apply);
      window.removeEventListener('resize', apply);
    };
  }, []);

  // When mobileOpen toggles, force-apply transform immediately (don't wait for next scroll).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    if (mobileOpen) {
      el.style.transform = 'translateY(0%)';
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        data-sticky="false"
        className="group sticky w-[100%] top-0 z-50 will-change-transform [transition:transform_240ms_cubic-bezier(0.16,1,0.3,1)]"
      >
        {/* Desktop */}
        <div className="hidden h-[var(--header-h-desktop)] items-center px-md md:flex group-data-[sticky=true]:bg-gray-10">
          <Navbar pathname={pathname} />
        </div>

        {/* Mobile */}
        <div className="flex h-[var(--header-h-mobile)] items-center justify-between bg-gray-10 px-xl md:hidden">
          <Logo className="h-13 w-auto text-gray-80" strokeWidth={0.9} />
          <MobileMenuButton open={mobileOpen} onClick={() => setMobileOpen(v => !v)} />
        </div>
      </header>

      <MobileMenu open={mobileOpen} pathname={pathname} onClose={() => setMobileOpen(false)} />
    </>
  );
}
