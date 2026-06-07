import Image from 'next/image';
import { Fragment } from 'react';

import {
  Callout,
  CalloutColumn,
  CalloutColumns,
  CaseStudyCard,
  ConstraintCard,
  Flexible,
  Growth,
  Heart,
  ImpactRow,
  Link,
  NumberedSection,
  Page,
  PageContent,
  PageCover,
  PageHeader,
  PageKicker,
  PageMasthead,
  PageMeta,
  PageMetaItem,
  PageTitle,
  Rocket,
  Section,
  SectionHeader,
  SectionKicker,
  SectionTagline,
  SectionTitle,
  Separator,
  Star,
  Switch,
  Users,
  Velocity,
} from '@/components';

import { Overview } from '../components/Overview';

const CONSTRAINTS = [
  {
    icon: <Switch />,
    title: 'Make switching easy',
    body: 'Moving hosts is a real hassle, so setup and migration had to be simple enough for a non-technical owner to trust from day one.',
  },
  {
    icon: <Flexible />,
    title: 'Stay flexible',
    body: 'Ship the core product quickly without letting speed-driven choices block later iterations or a potential white-label resale.',
  },
  {
    icon: <Rocket />,
    title: 'Ship fast, build lean',
    body: 'The founders needed ROI on a tight deadline, so design had to surface and deliver the MVP that would meet it.',
  },
];

const IMPACTS = [
  {
    icon: <Velocity />,
    label: 'Velocity',
    outcome: 'The design system cut design-to-dev turnaround by 40%.',
  },
  {
    icon: <Users />,
    label: 'Adoption',
    outcome: '1,000+ sites hosted on Rapyd Cloud within 18 months.',
  },
  {
    icon: <Growth />,
    label: 'Growth',
    outcome: '10% MRR growth in Year 1; under 5% churn maintained since launch.',
  },
  {
    icon: <Heart />,
    label: 'Satisfaction',
    outcome: '80% average customer satisfaction score.',
  },
  {
    icon: <Star />,
    label: 'Advocacy',
    outcome: '4.9★ Trustpilot · 4.8★ G2',
  },
];

export default function RapydCloudPage() {
  return (
    <Page hasCover>
      <PageHeader>
        <PageMasthead>
          <PageKicker>Case study</PageKicker>
          <PageTitle className="sm:max-w-[75%]">
            Supercharged Hosting for WordPress Creators
          </PageTitle>
          <PageMeta>
            <PageMetaItem label="Product" value="Rapyd Cloud" />
            <PageMetaItem label="My role" value="Principal Product Designer" />
            <PageMetaItem label="Timeline" value="9 months" />
          </PageMeta>
        </PageMasthead>
      </PageHeader>

      <PageCover>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-canvas">
          <Image
            src="/images/work/rapyd-cloud/cover.png"
            alt="Rapyd Cloud dashboard on a laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </PageCover>

      <PageContent>
        {/* Overview */}
        <Overview
          problem={
            <>
              While building{' '}
              <Link href="https://www.buddyboss.com" external>
                BuddyBoss
              </Link>
              , we surfaced a growing problem: WordPress hosts weren’t optimised for
              high-engagement sites such as eLearning, e-commerce, and social communities. Site
              owners were being charged high-traffic premiums to support high concurrent user
              activity.
            </>
          }
          solution="I helped put Rapyd Cloud’s scalable infrastructure behind a dashboard that made fast, reliable hosting accessible to non-technical creators, educators, and sellers with interactive WordPress sites."
        />

        {/* Project Goals */}
        <Callout>
          <h2 className="font-sans font-medium text-xs uppercase tracking-widest text-gray-70 pb-6 md:pb-10">
            Project Goals
          </h2>
          <CalloutColumns>
            {CONSTRAINTS.map(c => (
              <CalloutColumn key={c.title}>
                <ConstraintCard icon={c.icon} title={c.title}>
                  {c.body}
                </ConstraintCard>
              </CalloutColumn>
            ))}
          </CalloutColumns>
        </Callout>

        {/* Strategy */}
        <Section className="!gap-xl">
          <SectionHeader>
            <SectionKicker>Strategy</SectionKicker>
            <SectionTitle>From Problem to Product</SectionTitle>
            <SectionTagline>
              My strategy was built upon following a structured path from an untapped opportunity to
              a viable solution.
            </SectionTagline>
          </SectionHeader>
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-bg-canvas flex items-center justify-center">
            <Image
              src="/images/work/rapyd-cloud/rapyd-cloud-strategy.svg"
              alt="From Problem to Product — a structured path from an untapped opportunity to a viable solution"
              fill
              className="object-contain"
            />
          </div>

          {/* 01 Define the Problem */}
          <NumberedSection
            number="01"
            title="Define the Problem"
            intro="I started by conducting user interviews and reviewing user feedback to fully define the problems."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <CaseStudyCard
                image="/images/work/rapyd-cloud/user-interviews.png"
                imageAlt="Stakeholder inquiry"
                title="Stakeholder inquiry"
              >
                I canvassed prospective customers and industry leaders to surface pain points.
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/interview-synthesis.png"
                imageAlt="Interview synthesis"
                title="Interview synthesis"
              >
                I analysed raw interview data to identify common themes, patterns, and insights.
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/user-persona.png"
                imageAlt="Persona development"
                title="Persona development"
              >
                I distributed the personas company-wide to build empathy as governance from the
                start.
              </CaseStudyCard>
            </div>
          </NumberedSection>

          {/* 02 Build the Proposition */}
          <NumberedSection
            number="02"
            title="Build the Proposition"
            intro="I then developed a value proposition and mapped the customer journey to define what to ship."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <CaseStudyCard
                image="/images/work/rapyd-cloud/value-proposition-fit.png"
                imageAlt="Value proposition fit"
                title="Value proposition fit"
                bullets={[
                  'Develop fits for all customer segments',
                  'Illuminate customer pains, gains, and jobs-to-be-done',
                  'Propose solutions for the product to offer',
                ]}
              >
                I aligned our offering with our target customers needs and desires in order to:
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/customer-journey-map.png"
                imageAlt="Journey mapping"
                title="Journey mapping"
                bullets={[
                  'Mapped from first contact to becoming a loyal customer',
                  'Connecting user actions to business outcomes',
                  'Flagging opportunities to reduce friction and build trust',
                ]}
              >
                I highlighted customers’ emotions, pain points, and unmet needs by:
              </CaseStudyCard>
            </div>
          </NumberedSection>

          {/* 03 Establish the Foundations */}
          <NumberedSection
            number="03"
            title="Establish the Foundations"
            intro="Next, I unified fragmented early-builds into a governed system that aligned design and engineering."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <CaseStudyCard
                image="/images/work/rapyd-cloud/design-tokens.png"
                imageAlt="Design tokens"
                title="Design tokens"
                bullets={[
                  'Applied instead of hardcoded values',
                  'Maintained experience across devices',
                  'Integrated with MUI’s theme provider',
                ]}
              >
                I developed a single source of truth between design and engineering that:
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/component-library.png"
                imageAlt="Component library"
                title="Component library"
                bullets={[
                  'Standardised UI across UX flows',
                  'Delivered with production-ready specs',
                  'Cut design-to-dev handoff time',
                ]}
              >
                I built a library of reusable UI patterns to reuse across the dashboard screens
                that:
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/information-architecture.png"
                imageAlt="Information architecture"
                title="Information architecture"
                bullets={[
                  'Avoiding use of tech-jargon',
                  'Optimising to reduce cognitive load',
                  'Ensuring no “dead-ends”',
                ]}
              >
                I designed a structure to seamlessly guide users from initial setup to ongoing
                maintenance by:
              </CaseStudyCard>
            </div>
          </NumberedSection>

          {/* 04 Design the Experience */}
          <NumberedSection
            number="04"
            title="Design the Experience"
            intro="I then designed the core flows end to end, from low-fi wireframes to production-ready screens."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <CaseStudyCard
                image="/images/work/rapyd-cloud/lo-fi-wireframes.png"
                imageAlt="Low-fidelity wireframes"
                title="Low-fidelity wireframes"
                bullets={[
                  'Keeping the initial focus on user needs, not visuals',
                  'Surfacing flaws in user journeys early',
                  'Acting as common language across all teams',
                ]}
              >
                I mapped the core UX flows as wireframes to quickly validate assumptions before
                committing real design time by:
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/visual-design.png"
                imageAlt="High-fidelity designs"
                title="High-fidelity designs"
                bullets={[
                  'Applied the design system end to end',
                  'Annotated every screen and flow for smooth dev handoff',
                  'Maintained version history to note changes during engineering',
                ]}
              >
                I brought every core flow to full fidelity, accounting for all edge cases and empty
                states in a way that:
              </CaseStudyCard>
            </div>
          </NumberedSection>

          {/* 05 Create Feedback Loops */}
          <NumberedSection
            number="05"
            title="Create Feedback Loops"
            intro="Lastly, I collaborated with the customer-facing teams to measure impact and keep learning from users after launch."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <CaseStudyCard
                image="/images/work/rapyd-cloud/in-app-surveys.png"
                imageAlt="In-app surveys"
                title="In-app surveys"
              >
                We setup short surveys to be delivered by Intercom at key moments in the journey,
                from how easy setup felt to how likely users were to recommend us.
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/public-feedback-portal.png"
                imageAlt="Public feedback portal"
                title="Public feedback portal"
              >
                We funnelled every request into Featurebase, where users could track the roadmap,
                submit and vote on ideas, and follow each new release.
              </CaseStudyCard>
              <CaseStudyCard
                image="/images/work/rapyd-cloud/evidence-based-iterations.png"
                imageAlt="Evidence-based iterations"
                title="Evidence-based iterations"
              >
                We fed real feedback straight into the internal roadmap, tracked how the impact of
                release, using the evidence to cut underperforming features.
              </CaseStudyCard>
            </div>
          </NumberedSection>
        </Section>

        {/* Final Output */}
        <Section>
          <SectionHeader>
            <SectionKicker>Final Output</SectionKicker>
            <SectionTitle>Rapyd Cloud became our users’ reliable sidekick.</SectionTitle>
          </SectionHeader>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-xl px-xl">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="relative shrink-0 snap-start w-[85%] sm:w-[60%] md:w-[55%] aspect-[16/10] overflow-hidden bg-bg-canvas"
              >
                <Image
                  src={`/images/work/rapyd-cloud/final-output-${i}.jpg`}
                  alt={`Final output ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>

        {/* Impact */}
        <Section>
          <SectionHeader>
            <SectionKicker>Impact</SectionKicker>
            <SectionTitle>
              The product shipped before the 9-month deadline, with growth that held well past
              launch.
            </SectionTitle>
          </SectionHeader>

          <div className="flex flex-col">
            <div className="hidden md:grid grid-cols-[auto_minmax(0,10rem)_minmax(0,1fr)] gap-x-8 pb-4 border-b border-gray-30">
              <span />
              <p className="font-sans text-xs font-medium tracking-[0.2em] text-soft uppercase">
                Vertical
              </p>
              <p className="font-sans text-xs font-medium tracking-[0.2em] text-soft uppercase">
                Outcome
              </p>
            </div>
            {IMPACTS.map((row, i) => (
              <Fragment key={row.label}>
                {i > 0 && <Separator className="bg-gray-30" />}
                <ImpactRow icon={row.icon} label={row.label} outcome={row.outcome} />
              </Fragment>
            ))}
          </div>
        </Section>

        {/* Testimonial */}
        <Section className="items-center text-center">
          <blockquote className="font-serif text-xl md:text-2xl text-fg max-w-(--container-3xl) leading-relaxed">
            “Rapyd Cloud is a new player in the crowded WordPress hosting market with a solid
            offering, great support and easy to use dashboard. It’s like they looked at all
            competitors and picked the best aspects from each.”
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="relative size-10 overflow-hidden rounded-full bg-gray-20" />
            <div className="flex flex-col items-start">
              <p className="font-sans text-md font-medium text-fg-emphasis">Lawrence Ladomery</p>
              <p className="font-sans text-sm text-soft">Trustpilot</p>
            </div>
          </div>
        </Section>
      </PageContent>
    </Page>
  );
}
