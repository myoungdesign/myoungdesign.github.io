import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  Callout,
  CalloutColumn,
  CalloutColumns,
  FeaturedArticles,
  PageContent,
  QuoteCard,
  SectionKicker,
  VisuallyHidden,
} from '@/components';
import { getFeaturedPosts } from '@/content/medium';

import { HomeHero } from './components/Hero';

type CaseStudy = {
  value: string;
  headline: string;
  excerpt: string;
  href: string;
  image: string;
  alt: string;
};

export const metadata: Metadata = {
  title: 'Mike Young — Senior Product Designer in London, UK',
  description:
    'Senior product designer making complex, data-heavy B2B products feel simple. 15+ years designing B2B, SaaS, and enterprise software.',
};

export const revalidate = 3600;

const CAPABILITIES = [
  {
    title: 'Versatile product strategy',
    body: 'Moving fast with AI to explore, prototype, and sharpen ideas while still leading by human judgment.',
  },
  {
    title: 'Complex workflow design',
    body: 'Turning multifaceted, data-rich systems into simple experiences users can repeat and rely on.',
  },
  {
    title: 'UX design as governance',
    body: 'Systems, standards, and decision rules that hold together as products and teams multiply.',
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    value: 'conduct',
    headline: 'Designing the AI Assistant Behind 5x Faster ERP Analysis',
    excerpt:
      'I designed an AI assistant that allowed enterprise IT teams to ask complex questions about their ERP systems, then shaped the patterns for automating their engineering workflows.',
    href: '/work/conduct',
    image: '/images/work/conduct/cover.jpg',
    alt: 'Conduct — AI assistant dashboard',
  },
  {
    value: 'rapyd-cloud',
    headline: 'Supercharged Hosting for WordPress Creators',
    excerpt:
      'I helped make complex, scalable hosting accessible by designing a dashboard simple enough for non-technical business owners to set up and trust.',
    href: '/work/rapyd-cloud',
    image: '/images/work/rapyd-cloud/cover.jpg',
    alt: 'Rapyd Cloud — hosting dashboard',
  },
];

function CaseStudies() {
  return (
    <section>
      <SectionKicker className="pb-8 md:pb-9">Case studies</SectionKicker>
      <div className="flex flex-col gap-8 md:gap-14">
        {CASE_STUDIES.map(study => (
          <article key={study.value} className="flex flex-col md:flex-row md:items-center">
            <Link
              href={study.href}
              aria-label={study.headline}
              className="group relative block aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg bg-canvas md:w-[48%]"
            >
              <Image
                src={study.image}
                alt={study.alt}
                fill
                sizes="(min-width: 768px) 52vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </Link>
            <div className="md:flex-1 pt-8 md:p-10 lg:p-12">
              <h3 className="text-2xl leading-relaxed text-fg-emphasis">
                <Link href={study.href} className="hover:underline underline-offset-4 decoration-1">
                  {study.headline}
                </Link>
              </h3>
              <p className="mt-5 text-md text-fg-subtle">{study.excerpt}</p>
              <Link
                href={study.href}
                className="mt-6 inline-flex items-center gap-1 text-md font-medium text-brand hover:underline underline-offset-4"
              >
                Read case study
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default async function HomePage() {
  const featured = await getFeaturedPosts();

  return (
    <>
      <HomeHero />

      {/* Capability strip — a cover that straddles the dark hero / white body seam. */}
      <div className="relative z-[2] px-xl -mt-8 md:-mt-20">
        <div aria-hidden className="absolute inset-x-0 top-[50%] bottom-0 bg-surface" />
        <div className="relative mx-auto w-full max-w-(--container-6xl)">
          <Callout variant="subtle" className="!p-12">
            <VisuallyHidden as="h2">Capabilities</VisuallyHidden>
            <CalloutColumns>
              {CAPABILITIES.map(cap => (
                <CalloutColumn key={cap.title}>
                  <h3 className="font-serif font-semibold text-lg tracking-tight text-fg">
                    {cap.title}
                  </h3>
                  <p className="text-md text-fg-subtle">{cap.body}</p>
                </CalloutColumn>
              ))}
            </CalloutColumns>
          </Callout>
        </div>
      </div>

      <PageContent className="!gap-16 md:gap-16 lg:gap-20 py-6 md:py-0">
        <CaseStudies />

        <QuoteCard
          quote={
            <>
              “Mike is easily the best UX/UI designer I have ever worked with. He has the ability to
              take a lot of complex and interconnected ideas, and convert them into a working
              interface that is simple for the user to understand.”
            </>
          }
          author="Michael Eisenwasser"
          company="Founder of Rapyd Cloud"
          avatar="/images/home/michael-eisenwasser.jpg"
        />

        <FeaturedArticles articles={featured} />
      </PageContent>
    </>
  );
}
