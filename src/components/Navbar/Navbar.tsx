import { Logo } from '@/components/Logo';
import { NavigationMenu } from '@/components/NavigationMenu';

import { NavbarButton } from './NavbarButton';

type NavbarProps = {
  pathname: string;
};

export function Navbar({ pathname }: NavbarProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-1 items-center">
        <Logo className="h-12 w-auto text-gray-80" strokeWidth={0.9} />
      </div>

      <NavigationMenu pathname={pathname} />

      <div className="flex flex-1 items-center justify-end">
        <NavbarButton />
      </div>
    </div>
  );
}
