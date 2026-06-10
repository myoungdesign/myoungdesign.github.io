import Image from 'next/image';

import {
  Callout,
  CalloutColumn,
  CalloutColumns,
  ChartLineUp,
  EightyTwenty,
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
  QuoteCard,
  ResultsTable,
  Section,
  SectionHeader,
  SectionKicker,
  SectionTitle,
  Stepper,
  StepperContent,
  StepperItem,
  StepperList,
  StepperPanel,
  StepperPanelItem,
  StepperTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TimerBolt,
  UserAdd,
} from '@/components';

import { Overview } from '../components/Overview';

const SIGNALS = [
  {
    label: 'User Signal 01',
    title: 'Users start their workflows from a process, not an artefact they could look up.',
    body: 'An assistant could trace custom configurations and dependencies from a business process.',
  },
  {
    label: 'User Signal 02',
    title: 'The type of output a user expects is heavily influenced by the role they perform. ',
    body: "An assistant could tailor output to a user's role: business analyst, functional analyst, developer, or beyond.",
  },
  {
    label: 'User Signal 03',
    title: 'IT teams are under pressure to compress their S/4HANA migration timelines.',
    body: 'An assistant could perform analysis comparing custom code against SAP standard and clean core principles.',
  },
];

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

export default function ConductPage() {
  return (
    <Page hasCover>
      <PageHeader>
        <PageMasthead>
          <PageKicker>Case study</PageKicker>
          <PageTitle className="sm:max-w-[80%]">
            Designing the AI Assistant Behind 5x Faster ERP Analysis
          </PageTitle>
          <PageMeta>
            <PageMetaItem label="Product" value="Conduct" />
            <PageMetaItem label="My role" value="Founding Designer" />
            <PageMetaItem label="Timeline" value="6 months" />
          </PageMeta>
        </PageMasthead>
      </PageHeader>

      <PageCover>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas">
          <Image
            src="/images/work/conduct/cover.jpg"
            alt="Conduct dashboard on a laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </PageCover>

      <PageContent className="gap-16 md:gap-20 lg:gap-24 pt-sm">
        {/* Overview */}
        <Overview
          problem="Decades of custom SAP code left enterprises running ERP systems nobody fully understood: before any migration, entire teams of analysts read that code by hand to map what it did. Each pass ran weeks and burned expensive specialist hours."
          solution="I designed the UX flows for an AI assistant that allowed IT teams to ask complex questions about those systems, then shaped the patterns for automating each step of their software development in Conduct."
        />

        {/* Screenshots */}
        <Section>
          <Tabs defaultValue="v0">
            <TabsList>
              <TabsTrigger value="v0">v0 Prototype</TabsTrigger>
              <TabsTrigger value="rollout">Initial Rollout</TabsTrigger>
              <TabsTrigger value="final">Final design</TabsTrigger>
            </TabsList>
            <TabsContent value="v0">
              <div className="overflow-clip rounded-lg border border-subtle shadow-xs">
                <Image
                  src="/images/work/conduct/screenshots/v0-prototype.png"
                  alt="v0 Prototype — Conduct AI assistant interface"
                  width={2560}
                  height={1664}
                  className="w-full"
                />
              </div>
            </TabsContent>
            <TabsContent value="rollout">
              <div className="overflow-clip rounded-lg border border-subtle shadow-xs">
                <Image
                  src="/images/work/conduct/screenshots/initial-rollout.png"
                  alt="Initial Rollout — Conduct AI assistant interface"
                  width={2560}
                  height={1664}
                  className="w-full"
                />
              </div>
            </TabsContent>
            <TabsContent value="final">
              <div className="overflow-clip rounded-lg border border-subtle shadow-xs">
                <Image
                  src="/images/work/conduct/screenshots/final-design.png"
                  alt="Final design — Conduct AI assistant interface"
                  width={2560}
                  height={1664}
                  className="w-full"
                />
              </div>
            </TabsContent>
          </Tabs>
        </Section>

        {/* Strategy */}
        <Section>
          <SectionHeader className="max-w-235">
            <SectionKicker>Design Thesis</SectionKicker>
            <SectionTitle>
              We believed an AI assistant could speed up ERP upgrades by accelerating how fast users
              understood the underlying custom code.
            </SectionTitle>
            <div className="flex flex-col gap-6 text-lg text-subtle">
              <p>
                Conduct was born as a documentation tool, but early user signals suggested an AI
                assistant would be more effective tool for understanding everything from custom code
                to affected business processes.{' '}
              </p>
              <p>
                From this, we hypothesised that a faster understanding would cut the time required
                to implement changes.
              </p>
            </div>
          </SectionHeader>

          {/* User Signals */}
          <Callout>
            <CalloutColumns>
              {SIGNALS.map(c => (
                <CalloutColumn key={c.title}>
                  <div className="flex flex-col gap-4.5">
                    <p className="font-sans font-medium text-sm uppercase tracking-widest text-gray-60 pb-2.5">
                      {c.label}
                    </p>
                    <h3 className="font-medium text-lg tracking-tight text-white">{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </CalloutColumn>
              ))}
            </CalloutColumns>
          </Callout>
        </Section>

        {/* Process */}
        <Section className="my-8">
          <Stepper defaultValue="setup-context" duration={7000}>
            <div className="grid gap-8 md:min-h-172 md:grid-cols-[35%_1fr] md:grid-rows-[1fr_auto] md:gap-x-12">
              <SectionHeader className="md:col-start-1 md:row-start-1 md:max-w-84">
                <SectionKicker>Process</SectionKicker>
                <SectionTitle className="!text-2xl leading-relaxed">
                  With tasks split across workstreams, I embedded UX as governance to raise the
                  quality of all outputs.
                </SectionTitle>
              </SectionHeader>
              <StepperPanel className="aspect-[4/3] overflow-clip rounded-lg bg-canvas md:col-start-2 md:row-start-1 md:row-span-2 md:aspect-auto">
                <StepperPanelItem value="setup-context">
                  <div className="h-full w-full bg-canvas" />
                </StepperPanelItem>
                <StepperPanelItem value="align-thinking">
                  <div className="h-full w-full bg-canvas" />
                </StepperPanelItem>
                <StepperPanelItem value="identify-patterns">
                  <div className="h-full w-full bg-canvas" />
                </StepperPanelItem>
                <StepperPanelItem value="prototype-ideas">
                  <div className="h-full w-full bg-canvas" />
                </StepperPanelItem>
                <StepperPanelItem value="measure-results">
                  <div className="h-full w-full bg-canvas" />
                </StepperPanelItem>
              </StepperPanel>
              <StepperList className="md:col-start-1 md:row-start-2">
                <StepperItem value="setup-context">
                  <StepperTrigger>Setup Context</StepperTrigger>
                  <StepperContent>
                    Instead, I structured context for our AI workflows like I would a design system,
                    providing agents with the design tokens, branding guidelines, and UX
                    requirements to follow.
                  </StepperContent>
                </StepperItem>
                <StepperItem value="align-thinking">
                  <StepperTrigger>Align Thinking</StepperTrigger>
                  <StepperContent>
                    I coordinated with engineers to develop the wireframes for each flow before they
                    started, then performed UX audits on their PRs: immediate fixes for usability
                    and accessibility, improvements queued for subsequent iterations.
                  </StepperContent>
                </StepperItem>
                <StepperItem value="identify-patterns">
                  <StepperTrigger>Identify Patterns</StepperTrigger>
                  <StepperContent>
                    As workstreams shipped new flows, I spotted shared UX patterns and submitted PRs
                    to add each as a reusable component. Every pattern raised the floor for what the
                    agents could build.
                  </StepperContent>
                </StepperItem>
                <StepperItem value="prototype-ideas">
                  <StepperTrigger>Prototype Ideas</StepperTrigger>
                  <StepperContent>
                    Customer collaboration drove the roadmap. As engineers shipped requests, I built
                    prototypes for standardising each customer&apos;s terminology, mental models,
                    and system configurations into one core UX.
                  </StepperContent>
                </StepperItem>
                <StepperItem value="measure-results">
                  <StepperTrigger>Measure Results</StepperTrigger>
                  <StepperContent>
                    End-user feedback was often filtered through a single representative, obscuring
                    unbiased user pain points. I pushed for us to balance anecdotal evidence with
                    product data and built the schema, events, and tracking in Mixpanel.
                  </StepperContent>
                </StepperItem>
              </StepperList>
            </div>
          </Stepper>
        </Section>

        {/* Impact */}
        <Section>
          <SectionHeader>
            <SectionKicker>Impact</SectionKicker>
            <SectionTitle className="max-w-180">
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
