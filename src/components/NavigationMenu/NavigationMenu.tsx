import { NAV_ITEMS } from '@/constants';

import { NavigationMenuItem } from './NavigationMenuItem';

type NavigationMenuProps = {
  pathname: string;
};

export function NavigationMenu({ pathname }: NavigationMenuProps) {
  return (
    <nav className="flex items-center gap-4">
      {NAV_ITEMS.map(({ href, text }) => (
        <NavigationMenuItem key={href} href={href} text={text} active={pathname === href} />
      ))}
    </nav>
  );
}
