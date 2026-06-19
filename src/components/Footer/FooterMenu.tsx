import Link from 'next/link';

import { LinkedIn } from '@/components/icons';
import { LINKEDIN_URL, NAV_ITEMS } from '@/constants';

export function FooterMenu() {
  return (
    <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {NAV_ITEMS.map(({ href, text }) => (
        <Link
          key={href}
          href={href}
          className="text-sm text-gray-70 transition-colors hover:text-white"
        >
          {text}
        </Link>
      ))}
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-70 transition-colors hover:text-white"
      >
        <LinkedIn size={18} />
      </a>
    </nav>
  );
}
