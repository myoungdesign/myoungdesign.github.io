import { Hero, HeroContent, Placeholder } from '@/components';

export default function HeroPageHeaderTestPage() {
  return (
    <>
      <Hero className="px-xl pb-md">
        <HeroContent className="mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl md:text-4xl font-[320] leading-tight tracking-tight text-white">
              Page title
            </h1>
            <p className="text-sm text-gray-70">This is a very cool page. Trust me.</p>
          </div>
        </HeroContent>
      </Hero>
      <Placeholder />
      <Placeholder />
    </>
  );
}
