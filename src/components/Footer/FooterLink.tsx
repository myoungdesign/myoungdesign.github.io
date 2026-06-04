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
      className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white transition-colors hover:underline md:text-md"
    >
      {children}
      <ArrowUpRight size={20} className="transition-transform duration-200 ease-out" />
    </a>
  );
}
