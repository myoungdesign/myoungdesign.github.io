'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { MobileMenu, MobileMenuButton } from '@/components/MobileMenu';
import { Navbar } from '@/components/Navbar';

import './Header.css';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
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
      {/* The header sits in normal flow and scrolls away with the content
          beneath it — it is not sticky and never overlaps the page. */}
      <header className="relative z-50 w-full">
        {/* Desktop */}
        <div className="hidden h-[var(--header-h-desktop)] items-center border-b border-gray-40 px-8 md:flex">
          <Navbar pathname={pathname} />
        </div>

        {/* Mobile */}
        <div className="flex h-[var(--header-h-mobile)] items-center justify-between bg-gray-10 border-b border-gray-40 pl-6 pr-4 md:hidden">
          <img src="/images/logo.svg" alt="Mike Young" className="h-5 w-auto" />
          <MobileMenuButton open={mobileOpen} onClick={() => setMobileOpen(v => !v)} />
        </div>
      </header>

      <MobileMenu open={mobileOpen} pathname={pathname} onClose={() => setMobileOpen(false)} />
    </>
  );
}
