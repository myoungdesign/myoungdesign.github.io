'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { MobileMenu, MobileMenuButton } from '@/components/MobileMenu';
import { Navbar } from '@/components/Navbar';

import './Header.css';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileOpenRef = useRef(mobileOpen);
  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  });

  // Drive the header's exit translateY via a scroll listener that reads
  // --header-exit-by (px) off :root. Heroes publish this var: --header-exit-by
  // is when the navbar must be fully gone (halfway through the hero's slide-over
  // runway). The header hides as you scroll down and only reappears when scrollY
  // returns to the top, where it sits over the hero again. On pages without a
  // Hero, we fall back to half the viewport height for exitBy.
  useEffect(() => {
    const apply = () => {
      const el = headerRef.current;
      if (!el) return;
      if (mobileOpenRef.current) {
        el.style.transform = 'translateY(0%)';
        return;
      }
      const root = document.documentElement;
      const exitRaw = getComputedStyle(root).getPropertyValue('--header-exit-by').trim();
      const exitBy = exitRaw ? parseFloat(exitRaw) : window.innerHeight * 0.5;
      const startAt = exitBy * 0.2;
      const v = window.scrollY;
      if (v <= exitBy) {
        const t = v <= startAt ? 0 : v >= exitBy ? 1 : (v - startAt) / (exitBy - startAt);
        el.style.transform = `translateY(${-100 * t}%)`;
      } else {
        el.style.transform = 'translateY(-100%)';
      }
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
        className="sticky w-[100%] top-0 z-50 will-change-transform [transition:transform_240ms_cubic-bezier(0.16,1,0.3,1)]"
      >
        {/* Desktop */}
        <div className="hidden h-[var(--header-h-desktop)] items-center border-b border-gray-40 px-8 md:flex">
          <Navbar pathname={pathname} />
        </div>

        {/* Mobile */}
        <div className="flex h-[var(--header-h-mobile)] items-center justify-between bg-gray-10 pl-6 pr-4 md:hidden">
          <img src="/images/logo.svg" alt="Mike Young" className="h-5 w-auto" />
          <MobileMenuButton open={mobileOpen} onClick={() => setMobileOpen(v => !v)} />
        </div>
      </header>

      <MobileMenu open={mobileOpen} pathname={pathname} onClose={() => setMobileOpen(false)} />
    </>
  );
}
