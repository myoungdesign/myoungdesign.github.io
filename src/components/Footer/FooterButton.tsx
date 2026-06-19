type FooterButtonProps = {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  external?: boolean;
};

export function FooterButton({ href, children, download, external }: FooterButtonProps) {
  return (
    <a
      href={href}
      {...(download ? { download: true } : null)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      className="flex h-12 items-center gap-3 whitespace-nowrap rounded-full border border-gray-45 px-5 text-sm font-medium tracking-wide text-white hover:bg-white transition-all hover:text-gray-10 md:h-14 md:text-md md:px-6"
    >
      {children}
    </a>
  );
}
