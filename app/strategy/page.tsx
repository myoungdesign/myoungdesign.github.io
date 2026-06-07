import Image from 'next/image';

import {
  AgentCard,
  CardSlider,
  Link,
  Page,
  PageContent,
  PageHeader,
  PageKicker,
  PageMasthead,
  PageTagline,
  PageTitle,
  Section,
  SectionHeader,
  SectionKicker,
  SectionTagline,
  SectionTitle,
  VisuallyHidden,
} from '@/components';

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
    <Page>
      <PageHeader>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2xl lg:gap-0 pb-20 overflow-x-clip">
          <PageMasthead className="relative z-10 lg:flex-1 gap-4 md:gap-5 lg:gap-6 !pb-0">
            <PageKicker>Strategy</PageKicker>
            <PageTitle className="md:text-6xl lg:text-[3.5rem] leading-normal lg:max-w-120">
              Beyond the Double Diamond
            </PageTitle>
            <PageTagline className="lg:max-w-116">
              Generative AI has compressed the product lifecycle, requiring we adopt fundamentally
              new approaches to problem-solving, collaboration, and testing.
            </PageTagline>
          </PageMasthead>

          <div className="relative w-full lg:flex-1 aspect-[16/9] lg:-mt-3">
            <Image
              src="/images/strategy/double-diamond.png"
              alt=""
              fill
              priority
              className="object-contain scale-[1.25] origin-center"
            />
          </div>
        </div>
      </PageHeader>

      <PageContent>
        <Section>
          <VisuallyHidden>
            <SectionHeader>
              <SectionKicker>Overview</SectionKicker>
            </SectionHeader>
          </VisuallyHidden>

          <p>
            For over 20 years,{' '}
            <Link href={DOUBLE_DIAMOND_URL} external>
              The Double Diamond
            </Link>{' '}
            has guided product teams towards designing the right things, and designing those things
            right. Its strength being in the way it balanced divergent thinking (what problems to
            solve) and convergent thinking (how to solve them).
          </p>
          <p>
            But with AI now compressing the time both take to perform — analysing data at scale,
            quickly generating solutions — a linear model starts to feel obsolete. It’s forcing us
            to reshape our approach to problem-solving.
          </p>
          <p>
            For those reasons, I’ve adopted{' '}
            <Link href={STINGRAY_URL} external>
              The Stingray Model
            </Link>{' '}
            as my preferred framework due to the way it delivers speed, scale, and non-linear
            problem-solving.
          </p>

          <div className="bg-bg-canvas flex flex-col mt-4 md:mt-6 lg:mt-8">
            <div className="relative w-full aspect-[2080/1056] p-8 md:p-10 lg:p-12">
              <Image
                src="/images/strategy/the-stingray-model.svg"
                alt="The Stingray Model — Train, Develop, Iterate"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 border-t border-border-subtle pt-lg">
                {PHASES.map(phase => (
                  <div key={phase.label} className="flex flex-col gap-6 lg:max-w-[18rem]">
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
        </Section>

        <Section>
          <SectionHeader>
            <SectionKicker>My Deck of AI Agents</SectionKicker>
            <SectionTitle>
              I use custom AI agents to accelerate different phases of my workflow.
            </SectionTitle>
            <SectionTagline>
              Instead of performing every task myself, I act as the orchestrator, guiding autonomous
              AI systems to handle user research, ideation, and prototyping.
            </SectionTagline>
          </SectionHeader>

          <CardSlider cards={CARDS} />
        </Section>
      </PageContent>
    </Page>
  );
}
