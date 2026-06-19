'use client';

import Image from 'next/image';

import { Hero, HeroContent } from '@/components/Hero';

export function HomeHero() {
  return (
    <Hero fullScreen={false} hold={0} className="px-xl">
      <HeroContent>
        {/* Bottom band the capability strip bleeds up into — smaller on small screens. */}
        <div className="relative mx-auto w-full max-w-(--container-6xl) pt-2xl pb-8 md:pb-20 lg:min-h-[540px]">
          {/* Copy */}
          <div className="flex flex-col gap-8 md:gap-12 lg:max-w-[48%]">
            {/* Headline */}
            <h1 className="max-w-[34rem] font-serif text-[1.75rem] leading-normal tracking-tight font-medium text-white sm:text-[2rem] lg:text-5xl">
              Principal Product Designer{' '}
              <span className="font-light text-gray-90">
                making complex, data-heavy products feel simple
              </span>
              <span className="text-brand">.</span>
            </h1>

            {/* Stats + bio */}
            <div className="flex max-w-[560px] flex-col gap-6 sm:flex-row sm:gap-8">
              <div className="flex shrink-0 flex-col">
                <p className="font-serif text-[2rem] leading-none tracking-wide text-white tabular-nums">
                  15+
                </p>
                <p className="mt-1 text-sm uppercase tracking-wide text-gray-70">
                  Years experience
                </p>
              </div>

              <div className="h-px w-12 bg-gray-40 sm:h-auto sm:w-px sm:self-stretch" />

              <p className="text-md leading-7 text-gray-80">
                London-based, crafting cutting-edge enterprise and B2B software with early-stage to
                Series B startups.
              </p>
            </div>
          </div>

          {/* Portrait — in flow below the copy on small screens, larger and to the right on lg. */}
          <div className="pointer-events-none relative mt-4 aspect-[496/366] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:aspect-auto lg:w-[52%] lg:max-w-[680px]">
            <Image
              src="/images/home/mike-young.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-contain object-bottom lg:object-top"
            />
            {/* Left fade keeps the copy edge clean where the portrait meets it on lg. */}
            <div className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-gray-10 to-transparent lg:block" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-10 to-transparent" />
          </div>
        </div>
      </HeroContent>
    </Hero>
  );
}
