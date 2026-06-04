import Image from 'next/image';

import { Hero, HeroContent, Placeholder } from '@/components';

export default function HeroClassicTestPage() {
  return (
    <>
      <Hero className="px-xl">
        <HeroContent className="mx-auto">
          <div className="flex flex-col items-center gap-xl md:flex-row">
            <div className="flex flex-1 min-w-0 flex-col items-start justify-center gap-7 pb-md">
              <h1 className="font-serif text-5xl md:text-[56px] font-[320] leading-[1.4] tracking-tight text-white">
                Hello,
              </h1>
              <p className="max-w-132 md:text-mg lg:text-lg xl:text-xl text-gray-80">
                {`I'm `}
                <span className="font-medium text-white">Mike Young</span>
                {` — a product design lead based in London, passionate about helping startups connect their promises with meaningful product experiences.`}
              </p>
            </div>

            <div className="flex flex-1 min-w-0 items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-h-[600px]">
                <Image
                  src="/images/home-hero.jpg"
                  alt="Mike Young"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </HeroContent>
      </Hero>
      <Placeholder />
      <Placeholder />
    </>
  );
}
