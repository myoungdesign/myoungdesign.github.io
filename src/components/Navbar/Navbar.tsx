import { NavigationMenu } from '@/components/NavigationMenu';

import { NavbarButton } from './NavbarButton';

type NavbarProps = {
  pathname: string;
};

export function Navbar({ pathname }: NavbarProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-1 items-center">
        <img src="/images/logo.svg" alt="Logo" className="h-[56px] w-[46px]" />
      </div>

      <NavigationMenu pathname={pathname} />

      <div className="flex flex-1 items-center justify-end">
        <NavbarButton />
      </div>
    </div>
  );
}
