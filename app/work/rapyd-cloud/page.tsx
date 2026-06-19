import type { Metadata } from 'next';
import Image from 'next/image';

import {
  Callout,
  CalloutColumn,
  CalloutColumns,
  CalloutKicker,
  Card,
  CardContent,
  CardCover,
  Carousel,
  CarouselContent,
  CarouselCounter,
  CarouselNext,
  CarouselPrevious,
  CarouselSlide,
  ChartLineUp,
  EightyTwenty,
  ExpandButton,
  ExpandCard,
  ExpandCardContent,
  ExpandCardCover,
  Link,
  Message,
  Page,
  PageContent,
  PageCover,
  PageHeader,
  PageKicker,
  PageMasthead,
  PageMeta,
  PageMetaItem,
  PageTitle,
  ProductRelease,
  QuoteCard,
  ResultsTable,
  Section,
  SectionHeader,
  SectionKicker,
  SectionTagline,
  SectionTitle,
  Sync,
  TimerBolt,
  UserAdd,
} from '@/components';

import { Overview } from '../components/Overview';

const CONSTRAINTS = [
  {
    icon: <Sync />,
    title: 'Make switching easy',
    body: 'Moving hosts is a real hassle, so setup had to be simple enough for a non-technical owner to trust from day one.',
  },
  {
    icon: <ProductRelease />,
    title: 'Stay flexible',
    body: 'Ship the core product quickly without letting speed-driven choices block later iterations or a potential white-label resale.',
  },
  {
    icon: <TimerBolt />,
    title: 'Ship fast, build lean',
    body: 'The founders needed ROI on a tight deadline, so design had to surface and deliver the MVP that would meet it.',
  },
];

const SCREENSHOTS = [
  { name: 'login', alt: 'Rapyd Cloud sign-up and login screen' },
  { name: 'user-onboarding', alt: 'User onboarding flow' },
  { name: 'ftue', alt: 'First-time user experience walkthrough' },
  { name: 'sites-directory', alt: 'Sites directory dashboard' },
  { name: 'manage-site', alt: 'Manage site dashboard' },
  { name: 'manage-domains', alt: 'Domain management screen' },
  { name: 'team-management', alt: 'Team management screen' },
  { name: 'billing', alt: 'Billing and subscription screen' },
].map(s => ({ src: `/images/work/rapyd-cloud/screenshots/${s.name}.png`, alt: s.alt }));

const IMPACTS = [
  {
    icon: <TimerBolt />,
    label: 'Velocity',
    value: 'The design system cut design-to-dev turnaround by 40%.',
  },
  {
    icon: <UserAdd />,
    label: 'Adoption',
    value: '1,000+ sites hosted on Rapyd Cloud within 18 months.',
  },
  {
    icon: <ChartLineUp />,
    label: 'Growth',
    value: '10% MRR growth in Year 1; under 5% churn maintained since launch.',
  },
  {
    icon: <EightyTwenty />,
    label: 'Satisfaction',
    value: '80% average customer satisfaction score.',
  },
  {
    icon: <Message />,
    label: 'Advocacy',
    value: '4.9★ Trustpilot · 4.8★ G2',
  },
];

export const metadata: Metadata = {
  title: 'Rapyd Cloud Case Study — Mike Young Design',
  description:
    'Affordable cloud hosting built for WordPress creators. Turning infrastructure complexity into a setup that feels approachable from the first click.',
};

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
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas">
          <Image
            src="/images/work/rapyd-cloud/cover.png"
            alt="Rapyd Cloud dashboard on a laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </PageCover>

      <PageContent className="gap-12 md:gap-16 lg:gap-20 pt-sm">
        {/* Overview */}
        <Overview
          problem={
            <>
              While building{' '}
              <Link href="https://www.buddyboss.com" external>
                BuddyBoss
              </Link>
              , we surfaced a growing problem: WordPress hosts weren’t optimised for high-engagement
              sites such as eLearning, e-commerce, and social communities. Site owners were being
              charged high-traffic premiums to support high concurrent user activity.
            </>
          }
          solution="I helped put Rapyd Cloud’s scalable infrastructure behind a dashboard that made fast, reliable hosting accessible to non-technical creators, educators, and sellers with interactive WordPress sites."
        />

        {/* Project Goals */}
        <Callout>
          <CalloutKicker>Project Goals</CalloutKicker>
          <CalloutColumns>
            {CONSTRAINTS.map(c => (
              <CalloutColumn key={c.title} className="md:pb-1">
                <div className="flex flex-col gap-3">
                  <div className="text-gray-95 [&_svg]:size-12 pb-4">{c.icon}</div>
                  <h3 className="font-normal text-2xl text-white">{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </CalloutColumn>
            ))}
          </CalloutColumns>
        </Callout>

        {/* Strategy */}
        <Section className="gap-8 md:gap-10">
          <SectionHeader className="items-center text-center justify-center !gap-3">
            <SectionTitle className="text-center text-3xl md:text-4xl">
              From Problem to Product
            </SectionTitle>
            <SectionTagline className="text-center max-w-128 mx-auto">
              My strategy was built upon following a structured path from an untapped opportunity to
              a viable solution.
            </SectionTagline>
          </SectionHeader>

          <div className="bg-canvas px-sm py-md rounded-lg">
            <div className="relative w-full aspect-[21/9] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/work/rapyd-cloud/rapyd-cloud-strategy.svg"
                alt="From Problem to Product — a structured path from an untapped opportunity to a viable solution"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeader>
            <SectionKicker>Problem</SectionKicker>
            <SectionTitle className="max-w-172">
              I collected qualitative and quantitative insights, then analysed them to fully define
              the problems faced by users.
            </SectionTitle>
          </SectionHeader>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="relative w-full overflow-hidden rounded-lg bg-canvas md:col-span-2">
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src="/images/work/rapyd-cloud/user-interviews.jpg"
                  alt="Stakeholder inquiry"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/90 to-transparent p-7">
                <h3 className="font-serif text-2xl text-white">Stakeholder inquiry</h3>
                <p className="max-w-90 text-gray-95">
                  I canvassed prospective customers and surveyed industry leaders to surface pain
                  points.
                </p>
              </div>
            </div>

            <ExpandCard
              expandedImage="/images/work/rapyd-cloud/interview-synthesis.png"
              expandedAlt="Interview synthesis"
            >
              <ExpandCardCover>
                <Image
                  src="/images/work/rapyd-cloud/thumbs/interview-synthesis.png"
                  alt="Interview synthesis"
                  fill
                  className="object-cover"
                />
                <ExpandButton label="Open interview synthesis" />
              </ExpandCardCover>
              <ExpandCardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">Interview synthesis</h3>
                <p className="text-fg-subtle">
                  I analysed the raw interview and survey data to identify common themes, patterns,
                  and insights. What mattered most was clear: low-maintenance sites that stayed fast
                  at peak engagement.
                </p>
              </ExpandCardContent>
            </ExpandCard>

            <ExpandCard
              expandedImage="/images/work/rapyd-cloud/user-persona.png"
              expandedAlt="User persona"
            >
              <ExpandCardCover>
                <Image
                  src="/images/work/rapyd-cloud/thumbs/persona-development.png"
                  alt="Persona development"
                  fill
                  className="object-cover"
                />
                <ExpandButton label="Open persona profile" />
              </ExpandCardCover>
              <ExpandCardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">Persona development</h3>
                <p className="text-fg-subtle">
                  Developing personas put faces to the customers we were building for. Then
                  distributing them company-wide built empathy as governance from the start.
                </p>
              </ExpandCardContent>
            </ExpandCard>
          </div>
        </Section>

        <Section>
          <SectionHeader>
            <SectionKicker>Proposition</SectionKicker>
            <SectionTitle className="max-w-172">
              With the research in hand, I plotted a course from the customer problems to the
              offering that would solve them.
            </SectionTitle>
          </SectionHeader>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <ExpandCard
              expandedImage="/images/work/rapyd-cloud/value-proposition-fit.png"
              expandedAlt="Value proposition fit"
            >
              <ExpandCardCover>
                <Image
                  src="/images/work/rapyd-cloud/thumbs/value-proposition-fit.png"
                  alt="Proposition canvas"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <ExpandButton label="Open value proposition fit" />
              </ExpandCardCover>
              <ExpandCardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">Proposition canvas</h3>
                <p className="text-fg-subtle">
                  I identified a value proposition fit for each customer segment, surfacing the
                  pains, gains, and jobs-to-be-done that defined the solution we'd need to build.
                </p>
              </ExpandCardContent>
            </ExpandCard>

            <ExpandCard
              expandedImage="/images/work/rapyd-cloud/customer-journey-map.png"
              expandedAlt="Journey mapping"
            >
              <ExpandCardCover>
                <Image
                  src="/images/work/rapyd-cloud/thumbs/journey-mapping.png"
                  alt="Journey mapping"
                  fill
                  className="object-cover"
                />
                <ExpandButton label="Open customer journey map" />
              </ExpandCardCover>
              <ExpandCardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">Journey mapping</h3>
                <p className="text-fg-subtle">
                  By mapping the journey from first contact to loyalty, I connected user actions to
                  business outcomes and flagged the friction, emotions, and unmet needs to design
                  around.
                </p>
              </ExpandCardContent>
            </ExpandCard>
          </div>
        </Section>

        {/* Foundations */}
        <Section>
          <SectionHeader>
            <SectionKicker>Foundations</SectionKicker>
            <SectionTitle className="max-w-156">
              I unified fragmented early-builds into a single governed system that aligned design
              and engineering.
            </SectionTitle>
          </SectionHeader>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
            <div className="flex flex-col gap-10 lg:w-[32rem] lg:shrink-0">
              <Card className="relative flex-row items-center bg-elevated">
                <CardContent className="sm:max-w-[62%]">
                  <h3 className="font-serif text-xl tracking-tight text-fg">Design tokens</h3>
                  <p className="text-fg-subtle">
                    Tokens helped maintain a quality experience across devices and provided a single
                    source of truth between design and engineering.
                  </p>
                </CardContent>
                <Image
                  src="/images/work/rapyd-cloud/design-tokens.png"
                  alt="Rapyd brand design tokens defined in Figma variables"
                  width={206}
                  height={177}
                  className="pointer-events-none absolute right-0 top-6 hidden h-auto w-[206px] sm:block"
                />
              </Card>

              <Card className="relative bg-elevated">
                <CardContent className="pb-1">
                  <h3 className="font-serif text-xl tracking-tight text-fg">Component library</h3>
                  <p className="text-fg-subtle">
                    I delivered a library of reusable UI patterns with production-ready specs that
                    standardised UI across UX flows and cut design-to-dev handoff time.
                  </p>
                </CardContent>
                <Image
                  src="/images/work/rapyd-cloud/component-library.png"
                  alt="Rapyd Cloud component library shown in the Figma assets panel"
                  width={491}
                  height={218}
                  className="pointer-events-none w-full max-w-none object-cover object-top"
                />
              </Card>
            </div>

            <ExpandCard
              expandedImage="/images/work/rapyd-cloud/information-architecture.jpg"
              expandedAlt="Information architecture map of Rapyd Cloud"
              className="lg:flex-1"
            >
              <ExpandCardCover className="lg:aspect-auto lg:flex-1">
                <Image
                  src="/images/work/rapyd-cloud/thumbs/information-architecture.png"
                  alt="Information architecture map"
                  width={1596}
                  height={950}
                  className="absolute bottom-0 right-0 h-auto w-full max-w-none"
                />
                <ExpandButton label="Open information architecture" />
              </ExpandCardCover>
              <ExpandCardContent className="shrink-0">
                <h3 className="font-serif text-xl tracking-tight text-fg">
                  Information architecture
                </h3>
                <p className="text-fg-subtle">
                  In collaboration with engineering, I mapped every object, action, and relationship
                  across five top-level areas, building a structure that guides users from setup to
                  maintenance without jargon, cognitive overload, or dead-ends.
                </p>
                <p className="text-fg-subtle">
                  By mapping this early, we grounded every decision in shipping a product that was
                  simple to use and easy to scale.
                </p>
              </ExpandCardContent>
            </ExpandCard>
          </div>
        </Section>

        {/* Design */}
        <Section>
          <SectionHeader>
            <SectionKicker>Design</SectionKicker>
            <SectionTitle className="max-w-180">
              I designed the core flows end to end, from low-fidelity wireframes to production-ready
              screens ready for handoff.
            </SectionTitle>
          </SectionHeader>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <ExpandCard
              expandedImage="/images/work/rapyd-cloud/lo-fi-wireframes.png"
              expandedAlt="Low-fidelity wireframes"
            >
              <ExpandCardCover>
                <Image
                  src="/images/work/rapyd-cloud/thumbs/lo-fi-wireframes.png"
                  alt="Low-fidelity wireframes"
                  fill
                  className="object-cover"
                />
                <ExpandButton label="Open low-fidelity wireframes" />
              </ExpandCardCover>
              <ExpandCardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">
                  Low-fidelity wireframes
                </h3>
                <p className="text-fg-subtle">
                  The wireframes I provided developed a shared language between design and
                  engineering. We were able to validate our assumptions before any visual design,
                  surfacing journey flows early and keeping the initial focus on user needs over
                  visuals.
                </p>
              </ExpandCardContent>
            </ExpandCard>

            <ExpandCard
              expandedImage="/images/work/rapyd-cloud/add-domain-flow.png"
              expandedAlt="Developer handoff"
            >
              <ExpandCardCover>
                <Image
                  src="/images/work/rapyd-cloud/thumbs/developer-handoff.png"
                  alt="Developer handoff"
                  fill
                  className="object-cover"
                />
                <ExpandButton label="Open developer handoff" />
              </ExpandCardCover>
              <ExpandCardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">Developer handoff</h3>
                <p className="text-fg-subtle">
                  I brought every core flow to full fidelity, accounting for edge cases and empty
                  states, applying the design system end to end, annotating every screen for smooth
                  dev handoff, and tracking version history through engineering.
                </p>
              </ExpandCardContent>
            </ExpandCard>
          </div>
        </Section>

        {/* Feedback */}
        <Section>
          <SectionHeader>
            <SectionKicker>Feedback</SectionKicker>
            <SectionTitle className="max-w-172">
              Lastly, I collaborated with the customer-facing teams to implement the feedback loops
              we’d use to measure impact.
            </SectionTitle>
          </SectionHeader>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <Card>
              <CardCover className="aspect-[3/2]">
                <Image
                  src="/images/work/rapyd-cloud/in-app-surveys.png"
                  alt="In-app NPS survey delivered through Intercom"
                  fill
                  className="object-cover"
                />
              </CardCover>
              <CardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">In-app surveys</h3>
                <p className="text-fg-subtle">
                  We setup short surveys to be delivered by Intercom at key moments in the journey,
                  from how easy setup felt to how likely users were to recommend us.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardCover className="aspect-[3/2]">
                <Image
                  src="/images/work/rapyd-cloud/public-feedback-portal.png"
                  alt="Rapyd Cloud public feedback portal built in Featurebase"
                  fill
                  className="object-cover"
                />
              </CardCover>
              <CardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">
                  Public feedback portal
                </h3>
                <p className="text-fg-subtle">
                  We funnelled every request into Featurebase, where users could track the roadmap,
                  submit and vote on ideas, and follow each new release.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardCover className="aspect-[3/2]">
                <Image
                  src="/images/work/rapyd-cloud/evidence-based-iterations.png"
                  alt="Now/Next/Later roadmap fed by real user feedback"
                  fill
                  className="object-cover"
                />
              </CardCover>
              <CardContent>
                <h3 className="font-serif text-xl tracking-tight text-fg">
                  Evidence-based iterations
                </h3>
                <p className="text-fg-subtle">
                  We fed real feedback straight into the internal roadmap to track the impact of
                  each release, using the evidence to cut or change underperforming features.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Final Output */}
        <Section>
          <Carousel>
            <div className="relative">
              <SectionHeader>
                <SectionKicker>Final designs</SectionKicker>
                <SectionTitle className="max-w-156">
                  Simple workflows hid the complexity, finally putting fast, reliable hosting within
                  our customers' reach.
                </SectionTitle>
              </SectionHeader>
              <div className="mt-5 flex items-center justify-center gap-5 lg:absolute lg:right-0 lg:bottom-10">
                <CarouselPrevious />
                <CarouselCounter />
                <CarouselNext />
              </div>
            </div>
            <CarouselContent className="aspect-[1152/748]">
              {SCREENSHOTS.map(s => (
                <CarouselSlide key={s.src} src={s.src} alt={s.alt} />
              ))}
            </CarouselContent>
          </Carousel>
        </Section>

        {/* Impact */}
        <Section>
          <SectionHeader>
            <SectionKicker>Impact</SectionKicker>
            <SectionTitle className="max-w-148">
              The product shipped before the 9-month deadline, with growth that held well past
              launch.
            </SectionTitle>
          </SectionHeader>

          <ResultsTable columns={['Vertical', 'Outcome']} rows={IMPACTS} />
        </Section>

        {/* Testimonial */}
        <Section>
          <QuoteCard
            quote="“Rapyd Cloud is a new player in the crowded WordPress hosting market with a solid offering, great support and easy to use dashboard. It’s like they looked at all competitors and picked the best aspects from each.”"
            author="Lawrence Ladomery"
            avatar="/images/work/rapyd-cloud/testimonial.webp"
            company="Trustpilot"
            logo="/images/logos/trustpilot.svg"
          />
        </Section>
      </PageContent>
    </Page>
  );
}
