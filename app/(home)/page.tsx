import type { Metadata } from 'next';

import { HomeHero } from './components/Hero';

export const metadata: Metadata = {
  title: 'Mike Young — Principal Product Designer, London',
  description:
    'Principal product designer making complex, data-heavy B2B products feel simple. 15+ years across SaaS, enterprise, and design systems. Available now.',
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="relative z-[2] min-h-screen bg-canvas p-xl">
        <p className="text-fg-muted font-sans text-md">Placeholder — work grid goes here</p>
      </section>
    </>
  );
}
