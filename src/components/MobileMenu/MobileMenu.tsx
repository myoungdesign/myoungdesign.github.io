'use client';

import Link from 'next/link';

import { NavbarButton } from '@/components/Navbar';
import { NAV_ITEMS } from '@/constants';
import { cn } from '@/utils';

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  return (
    <div
      aria-hidden={!open}
      style={{ transform: open ? 'translateY(0)' : 'translateY(-100%)' }}
      className={cn(
        'fixed inset-x-0 bottom-0 top-[var(--header-h-mobile)] z-40 flex flex-col bg-gray-10 touch-none transition-transform duration-300 ease-out md:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <nav className="flex flex-1 flex-col items-center gap-9 px-8 py-12">
        <div className="flex w-full max-w-52 flex-col items-center gap-4">
          {NAV_ITEMS.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                'flex h-10 w-full items-center justify-center rounded-full px-3 text-center text-sm font-medium transition-colors',
                pathname === href ? 'text-white' : 'text-gray-70 hover:text-white'
              )}
            >
              {text}
            </Link>
          ))}
        </div>
        <NavbarButton className="w-full max-w-56" />
      </nav>
    </div>
  );
}
