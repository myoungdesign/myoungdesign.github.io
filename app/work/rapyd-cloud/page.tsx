import Image from 'next/image';
import { Fragment } from 'react';

import {
  CaseStudyCard,
  CaseStudyHeader,
  ConstraintCard,
  Communication,
  Flexible,
  Growth,
  Heart,
  ImpactRow,
  NumberedSection,
  Page,
  PageContent,
  PageCover,
  Rocket,
  Separator,
  Star,
  Switch,
  Users,
  Velocity,
} from '@/components';

const META = [
  { label: 'Product', value: 'Rapyd Cloud' },
  { label: 'My role', value: 'Principal Product Designer' },
  { label: 'Timeline', value: '9 months' },
];

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
    outcome: '1,500+ signups to Rapyd Cloud in 18 months.',
  },
  {
    icon: <Growth />,
    label: 'Growth',
    outcome:
      '67% MRR growth in Year 1, a hair 5% above market expansion for similar SaaS launches.',
  },
  {
    icon: <Heart />,
    label: 'Satisfaction',
    outcome: '90% average customer satisfaction score.',
  },
  {
    icon: <Star />,
    label: 'Advocacy',
    outcome: '4.7★ Trustpilot · 4.8★ G2',
  },
];

export default function RapydCloudPage() {
  return (
    <Page hasCover>
      <CaseStudyHeader
        title={<>Supercharged Hosting for WordPress Creators</>}
        meta={META}
      />

      <PageCover>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-20">
          <Image
            src="/images/work/rapyd-cloud/cover.jpg"
            alt="Rapyd Cloud dashboard on a laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </PageCover>

      <PageContent>
        {/* Overview */}
        <section className="flex flex-col gap-8">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-tight text-fg-emphasis">
            Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-xs font-medium tracking-[0.2em] text-soft uppercase">
                The problem
              </h3>
              <p className="font-sans text-md text-fg">
                While building <em>BuddyBoss</em>, we surfaced a growing problem: WordPress hosts
                weren’t optimised for high-engagement sites such as eLearning, e-commerce, and
                social communities. Site owners were being charged high-traffic premiums to support
                high concurrent user activity.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-sans text-xs font-medium tracking-[0.2em] text-soft uppercase">
                The solution
              </h3>
              <p className="font-sans text-md text-fg">
                I helped put Rapyd Cloud’s scalable infrastructure behind a dashboard that made
                fast, reliable hosting accessible to non-technical creators, educators, and sellers
                with interactive WordPress sites.
              </p>
            </div>
          </div>
        </section>

        {/* Project Constraints */}
        <section className="bg-fg-emphasis text-white p-8 md:p-10 flex flex-col gap-8">
          <h2 className="font-sans text-md font-medium uppercase tracking-[0.2em] text-white">
            Project Constraints
          </h2>
          <div className="flex flex-col md:flex-row gap-0">
            {CONSTRAINTS.map((c, i) => (
              <Fragment key={c.title}>
                {i > 0 && (
                  <>
                    <Separator className="md:hidden my-2 bg-gray-80" />
                    <Separator
                      orientation="vertical"
                      className="hidden md:block bg-gray-80"
                    />
                  </>
                )}
                <div className="flex-1">
                  <ConstraintCard icon={c.icon} title={c.title}>
                    {c.body}
                  </ConstraintCard>
                </div>
              </Fragment>
            ))}
          </div>
        </section>

        {/* My Strategy */}
        <section className="flex flex-col gap-8">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-tight text-fg-emphasis">
            My Strategy
          </h2>
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-10 flex items-center justify-center">
            <Image
              src="/images/work/rapyd-cloud/strategy-diagram.svg"
              alt="From Problem to Product — a structured path from an untapped opportunity to a viable solution"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* 01 Define the Problem */}
        <NumberedSection
          number="01"
          title="Define the Problem"
          intro="I conducted user interviews and reviewed user feedback to define the problems."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CaseStudyCard
              image="/images/work/rapyd-cloud/stakeholder-inquiry.jpg"
              imageAlt="Stakeholder inquiry"
              title="Stakeholder inquiry"
            >
              Canvassed prospective customers and industry leaders to surface pain points.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/interview-synthesis.jpg"
              imageAlt="Interview synthesis"
              title="Interview synthesis"
            >
              Analysed raw interview data to identify common themes, patterns, and insights.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/persona-development.jpg"
              imageAlt="Persona development"
              title="Persona development"
            >
              Distributed company-wide to build empathy as governance from the start.
            </CaseStudyCard>
          </div>
        </NumberedSection>

        {/* 02 Build the Proposition */}
        <NumberedSection
          number="02"
          title="Build the Proposition"
          intro="I developed a value proposition and mapped the customer journey to define what to ship."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <CaseStudyCard
              image="/images/work/rapyd-cloud/value-proposition.jpg"
              imageAlt="Value proposition fit"
              title="Value proposition fit"
              bullets={[
                'Developed fits for all customer segments',
                'Illuminated customer pains, gains, and jobs-to-be-done',
                'Proposed solutions for the product to offer',
              ]}
            >
              Aligned our offering with our target customers needs and desires.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/journey-mapping.jpg"
              imageAlt="Journey mapping"
              title="Journey mapping"
              bullets={[
                'Mapped from first contact to becoming a loyal customer',
                'Connected user actions to business outcomes',
                'Flagged opportunities to reduce friction and build trust',
              ]}
            >
              Highlighted customers’ emotions, pain points, and unmet needs.
            </CaseStudyCard>
          </div>
        </NumberedSection>

        {/* 03 Establish the Foundations */}
        <NumberedSection
          number="03"
          title="Establish the Foundations"
          intro="I unified fragmented early-builds into a governed system that aligned design and engineering."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CaseStudyCard
              image="/images/work/rapyd-cloud/design-tokens.jpg"
              imageAlt="Design tokens"
              title="Design tokens"
              bullets={[
                'Applied instead of hardcoded values',
                'Maintained experience across devices',
                'Integrated with MUI’s theme provider',
              ]}
            >
              Created a single source of truth between design and engineering.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/component-library.jpg"
              imageAlt="Component library"
              title="Component library"
              bullets={[
                'Standardised UI across UX flows',
                'Delivered with production-ready specs',
                'Cut design-to-dev handoff time',
              ]}
            >
              Built a library of reusable UI patterns to reuse across the dashboard screens.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/information-architecture.jpg"
              imageAlt="Information architecture"
              title="Information architecture"
              bullets={[
                'Avoided use of tech-jargon',
                'Optimised to reduce cognitive load',
                'Ensured no “dead-ends”',
              ]}
            >
              Structured hand-holding to guide users from initial setup to ongoing maintenance.
            </CaseStudyCard>
          </div>
        </NumberedSection>

        {/* 04 Design the Experience */}
        <NumberedSection
          number="04"
          title="Design the Experience"
          intro="I designed the core flows end to end, from low-fi wireframes to production-ready screens."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <CaseStudyCard
              image="/images/work/rapyd-cloud/low-fi.jpg"
              imageAlt="Low-fidelity wireframes"
              title="Low-fidelity wireframes"
              bullets={[
                'Kept focus on user needs, not visuals',
                'Surfaced flaws in user journeys early',
                'Allowed fast iteration before commit',
              ]}
            >
              Mapped the core UX flows as wireframes to quickly validate assumptions before
              committing real design time.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/high-fi.jpg"
              imageAlt="High-fidelity design"
              title="High-fidelity design"
              bullets={[
                'Brought every screen to handoff-ready quality',
                'Stress-tested every corner of the flow',
                'Refined motion, timing, and visual hierarchy',
              ]}
            >
              Brought every core flow to fidelity, accounting for all edge cases and using motion to
              direct focus.
            </CaseStudyCard>
          </div>
        </NumberedSection>

        {/* 05 Create Feedback Loops */}
        <NumberedSection
          number="05"
          title="Create Feedback Loops"
          intro="I collaborated with the customer-facing team to measure impact and keep learning from users after launch."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CaseStudyCard
              image="/images/work/rapyd-cloud/in-app-surveys.jpg"
              imageAlt="In-app surveys"
              title="In-app surveys"
            >
              A lightweight survey delivered in context at key moments in the journey for fast
              casual signal.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/public-feedback.jpg"
              imageAlt="Public feedback portal"
              title="Public feedback portal"
            >
              Provided easy ingest of the final output, where users could vote on roadmap, send in
              ideas, and follow up with their teams.
            </CaseStudyCard>
            <CaseStudyCard
              image="/images/work/rapyd-cloud/evidence-based.jpg"
              imageAlt="Evidence-based decisions"
              title="Evidence-based decisions"
            >
              From a feedback dragnet into the relevant roadmap, themed and tied to the impact of
              release. We collected it all and pulled prioritising from there.
            </CaseStudyCard>
          </div>
        </NumberedSection>

        {/* Final Outputs */}
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl lg:text-3xl tracking-tight text-fg-emphasis">
              Final Outputs
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-xl px-xl">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative shrink-0 snap-start w-[85%] sm:w-[60%] md:w-[55%] aspect-[16/10] overflow-hidden bg-fg-emphasis"
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
        </section>

        {/* The Impact */}
        <section className="flex flex-col gap-8">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-tight text-fg-emphasis">
            The Impact
          </h2>
          <p className="font-sans text-md text-fg">
            Ships outcome 14-month deadline, with growth that held well past launch.
          </p>

          <div className="flex flex-col">
            <div className="hidden md:grid grid-cols-[auto_minmax(0,10rem)_minmax(0,1fr)] gap-x-8 pb-4 border-b border-gray-30">
              <span />
              <p className="font-sans text-xs font-medium tracking-[0.2em] text-soft uppercase">
                Verbal
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
        </section>

        {/* Testimonial */}
        <section className="flex flex-col items-center text-center gap-8 py-10 md:py-16">
          <blockquote className="font-serif text-xl md:text-2xl text-fg max-w-(--container-3xl) leading-relaxed">
            “Rapyd Cloud is a rare player in the crowded WordPress hosting market with a relief
            offering great support and easy-to-use dashboard. It’s like they looked at all
            competitors and picked the best aspects from each.”
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="relative size-10 overflow-hidden rounded-full bg-gray-20" />
            <div className="flex flex-col items-start">
              <p className="font-sans text-md font-medium text-fg-emphasis">Lawrence Ladomery</p>
              <p className="font-sans text-sm text-soft">Trustpilot</p>
            </div>
          </div>
        </section>
      </PageContent>
    </Page>
  );
}
