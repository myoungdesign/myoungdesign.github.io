import { ArrowUpRight } from '@/components/icons';

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function FooterLink({ href, children, external }: FooterLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-gray-80 md:text-md"
    >
      {children}
      <ArrowUpRight
        size={20}
        className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
