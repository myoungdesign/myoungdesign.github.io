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
        <Logo className="h-14 w-auto text-gray-70" strokeWidth={0.85} />
      </div>

      <NavigationMenu pathname={pathname} />

      <div className="flex flex-1 items-center justify-end">
        <NavbarButton />
      </div>
    </div>
  );
}
