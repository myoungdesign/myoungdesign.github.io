import Link from 'next/link';

import { cn } from '@/utils';

type NavigationMenuItemProps = {
  href: string;
  text: string;
  active?: boolean;
};

export function NavigationMenuItem({ href, text, active }: NavigationMenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex h-7 items-center justify-center whitespace-nowrap rounded-full px-3 text-sm tracking-wide font-medium transition-colors',
        active ? 'text-white' : 'text-gray-70 hover:text-white'
      )}
    >
      {text}
    </Link>
  );
}
