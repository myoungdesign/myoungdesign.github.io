import { NAV_ITEMS } from '@/constants';

import { NavigationMenuItem } from './NavigationMenuItem';

type NavigationMenuProps = {
  pathname: string;
};

export function NavigationMenu({ pathname }: NavigationMenuProps) {
  return (
    <nav className="flex items-center p-0.5 border border-white/18 rounded-full gap-1">
      {NAV_ITEMS.map(({ href, text }) => (
        <NavigationMenuItem key={href} href={href} text={text} active={pathname === href} />
      ))}
    </nav>
  );
}
