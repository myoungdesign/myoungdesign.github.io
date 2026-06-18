import { NavigationMenu } from '@/components/NavigationMenu';

import { NavbarButton } from './NavbarButton';

type NavbarProps = {
  pathname: string;
};

export function Navbar({ pathname }: NavbarProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-1 items-center">
        <img src="/images/logo.svg" alt="Mike Young" className="h-5.5 w-auto" />
      </div>

      <NavigationMenu pathname={pathname} />

      <div className="flex flex-1 items-center justify-end">
        <NavbarButton />
      </div>
    </div>
  );
}
