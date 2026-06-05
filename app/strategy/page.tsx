import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

import { AgentCard, CardSlider, Hero, HeroContent } from '@/components';

const STINGRAY_URL = 'https://www.boardofinnovation.com/blog/the-stingray-model/';
const DOUBLE_DIAMOND_URL = 'https://www.designcouncil.org.uk/our-resources/the-double-diamond/';

const PHASES = [
  {
    label: '01.  Train',
    title: 'Establish strong foundations to build upon',
    body: 'Defining clear goals and gathering the customer, market, and business intelligence the process will rely on.',
  },
  {
    label: '02. Develop',
    title: 'Simultaneously explore problems and solutions',
    body: 'Generating hypotheses and solutions simultaneously, enabling the exploration of multiple directions instead of a handful.',
  },
  {
    label: '03. Iterate',
    title: 'Validate concepts through continuous refinement',
    body: 'Cycling concepts through synthetic and human testing, pressure-tested against desirability, feasibility, and viability at once.',
  },
];

const CARDS: AgentCard[] = [
  {
    id: 'critic',
    title: 'The Meticulous Critic',
    tagline: 'Provides structured feedback on a design.',
    description:
      'Takes a screenshot or Figma file and returns a structured critique: strengths called out alongside problems, each framed by user impact, with specific changes to try and examples or data behind every call. Most effective during early review, when feedback is still cheap to act on.',
    image: '/images/strategy/cards/critic.png',
  },
  {
    id: 'scribe',
    title: 'The Tactful Scribe',
    tagline: 'Writes UX copy for a screen or flow.',
    description:
      'Takes a screenshot or Figma file and drafts the UX copy: labels, buttons, errors, empty states, confirmations. Pares to the essential words, optimises for both scanning and reading, leans on familiar mental models, and matches tone to the emotional weight of the moment.',
    image: '/images/strategy/cards/scribe.png',
  },
  {
    id: 'bard',
    title: 'The Insightful Bard',
    tagline: 'Synthesises user research into actionable themes.',
    description:
      'Reads transcripts, surveys, and tickets, or connects to a data source. Tags and organises the raw material, maps affinities across the set, drafts thematic titles, reframes patterns as insights, and outputs prioritised actions.',
    image: '/images/strategy/cards/bard.png',
  },
  {
    id: 'smith',
    title: 'The Studious Smith',
    tagline: 'Implements a Figma design system into code.',
    description:
      'Reads a Figma library via MCP and generates the Tailwind theme in my project: index.css with theme variables, dark mode and any other modes, utilities for applying the theme, custom or Google Fonts imports, and a theme provider component.',
    image: '/images/strategy/cards/smith.png',
  },
  {
    id: 'alchemist',
    title: 'The Sagacious Alchemist',
    tagline: 'Generates a prototype from a Figma design.',
    description:
      'Takes a Figma design and a brief, then builds a working prototype from a starter template. Inspects the design for missing details and asks for the rest, follows my design system rules, writes realistic mock data, and never adds elements outside the spec.',
    image: '/images/strategy/cards/alchemist.png',
  },
  {
    id: 'inquisitor',
    title: 'The Equitable Inquisitor',
    tagline: 'Runs a WCAG accessibility audit.',
    description:
      'Inspects a code project against established WCAG patterns: contrast, focus order, target sizes, ARIA roles, keyboard traps, and semantic markup. Returns a prioritised list of failures with line references and the fix for each.',
    image: '/images/strategy/cards/inquisitor.png',
  },
  {
    id: 'architect',
    title: 'The Methodical Architect',
    tagline: 'Scopes the information architecture of a product.',
    description:
      'Takes a brief and asks about the gaps: navigation depth, content growth, user types, and primary workflows. Outputs a FigJam with site map, navigation model, content hierarchy, user flows, and naming conventions.',
    image: '/images/strategy/cards/architect.png',
  },
];

export default function StrategyPage() {
  return (
    <>
      <Hero className="px-xl">
        <HeroContent>
          <div className="relative mx-auto w-full max-w-(--container-6xl) pt-md pb-xl flex flex-col gap-6 my-6 md:mt-0">
            {/* Hero image — anchored to the right of the 6xl content container; bleeds slightly past the right edge */}
            <div
              aria-hidden
              className="hidden lg:block absolute -right-8 xl:-right-24 top-1/2 -translate-y-1/2 h-[508px] w-[813px] max-w-[67%] pointer-events-none"
            >
              <Image
                src="/images/strategy/hero.png"
                alt=""
                fill
                priority
                className="object-contain object-right"
              />
            </div>
            <p className="relative font-sans text-xl tracking-widest text-gray-70 uppercase pt-2">
              Strategy
            </p>
            <div className="relative flex flex-col gap-5 pb-4">
              <h1 className="text-white">
                Beyond the
                <br /> Double Diamond<span className="text-red-50">.</span>
              </h1>
              <p className="font-sans text-lg leading-[1.7] text-gray-80 max-w-[31.5rem]">
                Generative AI has compressed the product lifecycle — forcing faster iterations and
                parallel exploration, requiring a fundamentally new approach to problem-solving,
                collaboration, and testing.
              </p>
            </div>
          </div>
        </HeroContent>
      </Hero>

      <section className="relative z-[2] bg-bg-surface px-xl pt-lg pb-2xl">
        <div className="mx-auto w-full max-w-(--container-6xl) flex flex-col gap-lg">
          {/* Intro paragraphs */}
          <div className="flex flex-col gap-9 font-sans text-md text-fg leading-[1.9]">
            <p>
              For over 20 years,{' '}
              <a
                href={DOUBLE_DIAMOND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-1 underline underline-offset-4 decoration-1 decoration-border text-fg-soft hover:text-fg hover:decoration-fg transition-colors"
              >
                The Double Diamond
                <ExternalLink className="size-3.5 self-center" strokeWidth={1.5} />
              </a>{' '}
              has guided product teams towards designing the right things, and designing those
              things right. Its strength being in the way it balanced divergent thinking (what
              problems to solve) and convergent thinking (how to solve them).
            </p>
            <p>
              But with AI now compressing the time both take to perform — analysing data at scale,
              quickly generating solutions — a linear model starts to feel obsolete. It’s forcing us
              to reshape our approach to problem-solving.
            </p>
            <p>
              For those reasons, I’ve adopted{' '}
              <a
                href={STINGRAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-1 underline underline-offset-4 decoration-1 decoration-border text-fg-soft hover:text-fg hover:decoration-fg transition-colors"
              >
                The Stingray Model
                <ExternalLink className="size-3.5 self-center" strokeWidth={1.5} />
              </a>{' '}
              as my preferred framework due to the way it delivers speed, scale, and non-linear
              problem-solving.
            </p>
          </div>

          {/* Stingray model card — gray on white page */}
          <div className="bg-bg-canvas flex flex-col">
            <div className="relative w-full aspect-[2080/1056] p-2xs">
              <Image
                src="/images/strategy/the-stingray-model.svg"
                alt="The Stingray Model — Train, Develop, Iterate"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-md pt-2xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 border-t border-border-subtle pt-lg">
                {PHASES.map(phase => (
                  <div key={phase.label} className="flex flex-col gap-6 max-w-[18rem]">
                    <p className="font-sans font-medium text-xs tracking-widest uppercase text-gray-70 whitespace-pre">
                      {phase.label}
                    </p>
                    <div className="flex flex-col gap-3">
                      <h4 className="font-serif font-medium text-xl leading-[1.6] tracking-tight text-fg-emphasis">
                        {phase.title}
                      </h4>
                      <p className="font-sans text-md text-fg leading-normal">{phase.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Agents section */}
          <div className="flex flex-col gap-sm pt-lg">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div aria-hidden className="h-0.5 w-7 bg-border-subtle" />
                <p className="font-sans font-medium text-xs tracking-widest uppercase text-gray-70">
                  My Deck of AI Agents
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-serif font-medium text-3xl leading-[1.3] tracking-tighter text-fg-emphasis">
                  I use custom AI agents to accelerate different phases of my workflow.
                </h2>
                <p className="font-sans text-lg leading-[1.55] text-fg-subtle">
                  Instead of performing every task myself, I act as the orchestrator, guiding
                  autonomous AI systems to handle user research, ideation, and prototyping.
                </p>
              </div>
            </div>

            <CardSlider cards={CARDS} className="pt-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
