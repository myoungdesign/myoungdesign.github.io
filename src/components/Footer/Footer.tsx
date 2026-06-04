import { LINKEDIN_URL } from '@/constants';

import { FooterButton } from './FooterButton';
import { FooterLink } from './FooterLink';
import { FooterMenu } from './FooterMenu';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-[2] w-full bg-gray-10 px-xl py-xl text-white">
      <div className="mx-auto w-full space-y-8 md:space-y-12">
        <div className="flex flex-col py-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col max-w-96 gap-6 md:gap-8">
            <p className="text-md uppercase tracking-widest text-gray-60 md:text-lg">
              Let&rsquo;s connect
            </p>
            <p className="max-w-[640px] font-serif text-3xl leading-[1.25] tracking-tight text-gray-95 md:text-5xl">
              Interested in working together?
            </p>
          </div>
          <div className="flex items-center gap-6 pt-7 md:pt-12 md:gap-8">
            <FooterButton href="/resume.pdf" download>
              Download My Resume
            </FooterButton>
            <FooterLink href={LINKEDIN_URL} external>
              Connect on LinkedIn
            </FooterLink>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between border-t border-gray-35 gap-6 pt-8 md:pt-12 md:flex-row md:items-center">
          <p className="text-sm text-gray-60">© {year} Mike Young</p>
          <FooterMenu />
        </div>
      </div>
    </footer>
  );
}
