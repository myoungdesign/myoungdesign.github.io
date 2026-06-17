import Image from 'next/image';

import { StreamingToolCalls } from '@/animations';
import {
  Callout,
  CalloutColumn,
  CalloutColumns,
  Carousel,
  CarouselCard,
  CarouselCardControls,
  CarouselCardItem,
  CarouselContent,
  CarouselSlide,
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
  ResultsTable,
  ScrollSwap,
  ScrollSwapLabel,
  ScrollSwapLabels,
  ScrollSwapPanel,
  ScrollSwapPanels,
  Section,
  SectionHeader,
  SectionKicker,
  SectionTagline,
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

const PROCESS_IMAGES = [
  {
    value: 'setup-context',
    src: '/images/work/conduct/process/setup-content.png',
    width: 634,
    height: 480,
    alt: 'Setup Context — design tokens, branding guidelines, and UX requirements structured as agent context',
  },
  {
    value: 'align-thinking',
    src: '/images/work/conduct/process/align-thinking.png',
    width: 603,
    height: 460,
    alt: 'Align Thinking — wireframes and UX audits coordinated with engineers',
  },
  {
    value: 'identify-patterns',
    src: '/images/work/conduct/process/identify-patterns.png',
    width: 513,
    height: 429,
    alt: 'Identify Patterns — shared UX patterns extracted into reusable components',
  },
  {
    value: 'prototype-ideas',
    src: '/images/work/conduct/process/prototype-concepts.png',
    width: 539,
    height: 465,
    alt: 'Prototype Ideas — prototypes standardising customer terminology and mental models',
  },
  {
    value: 'measure-results',
    src: '/images/work/conduct/process/measure-results.png',
    width: 567,
    height: 395,
    alt: 'Measure Results — product data schema, events, and tracking in Mixpanel',
  },
];

const CONSTRAINTS = [
  {
    title: 'The assistant was often slow and prone to hallucinations.',
    body: "We surfaced tool calls that exposed the assistant's reasoning in real-time. To reduce the extraneous load they imposed, I designed them to collapse on completion.",
  },
  {
    title: 'The assistant’s responses sometimes missed the mark.',
    body: 'I embedded structured feedback loops into the assistant’s responses. When a response was rated negatively, the assistant would generate an improved response and ask again.',
  },
  {
    title: 'Relevant context was regularly hidden from users.',
    body: 'I added a dedicated tab revealing all sources relevant to a response and implemented hover cards that surfaced key information from a source’s documentation.',
  },
  {
    title: 'New topics dropped the assistant’s performance.',
    body: 'I designed thread-scoping cues that nudged users to start a new thread when they switched topic, keeping the context window for each thread scoped to a single request.',
  },
  {
    title: 'Users were working on many tasks simultaneously.',
    body: 'I added bookmarks to threads and surfaced recent threads on the homepage so users could resume long-running investigations without rebuilding context.',
  },
];

const ITERATIONS = [
  {
    value: 'user-profiles',
    title: 'User profiles',
    body: 'Users needed answers appropriate to the focus and technical specificity of their role. We defined these as a set of user profiles, which I implemented into the prompt input along with affordances to guide first-time users.',
  },
  {
    value: 'multi-system-support',
    title: 'Multi-system support',
    body: 'Changing systems mid-thread became a high-impact user request. To keep context visible when systems switched, I added markers between messages and attached system labels to responses.',
  },
  {
    value: 'file-uploads',
    title: 'File uploads',
    body: 'We added file uploads so users could attach external context to conversations, which I integrated as a drag-and-drop uploader built directly into the prompt input.',
  },
  {
    value: 'collapsible-prompt-input',
    title: 'Collapsible prompt input',
    body: 'We changed the prompt input default to collapse when idle, and I designed it to expand on focus because the thread needed visual breathing room without losing input discoverability.',
  },
  {
    value: 'document-editing',
    title: 'Document editing',
    body: 'We developed a native document editor (powered by TipTap) so users could create documents entirely in Conduct. I themed and integrated it into threads.',
  },
  {
    value: 'guided-workflows',
    title: 'Guided workflows',
    body: 'As usage matured, users wanted to repeat proven multi-step analyses without rebuilding prompts from scratch. We packaged these into guided workflows, which I designed as step-by-step flows any team member could launch and follow.',
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

        {/* Design Thesis */}
        <Section>
          <SectionHeader className="max-w-198">
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
        <Section className="my-6">
          <Stepper defaultValue="setup-context" duration={7000}>
            <div className="grid gap-8 md:min-h-168 md:grid-cols-[35%_1fr] md:grid-rows-[1fr_auto] md:gap-x-12">
              <SectionHeader className="md:col-start-1 md:row-start-1 md:max-w-84">
                <SectionKicker className="!pb-0">Process</SectionKicker>
                <SectionTitle className="!text-2xl leading-relaxed">
                  With tasks split across workstreams, I embedded UX as governance to raise the
                  quality of all outputs.
                </SectionTitle>
              </SectionHeader>
              <StepperPanel className="aspect-[4/3] overflow-clip rounded-lg bg-gentle/80 md:col-start-2 md:row-start-1 md:row-span-2 md:aspect-auto">
                {PROCESS_IMAGES.map(img => (
                  <StepperPanelItem key={img.value} value={img.value}>
                    <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </StepperPanelItem>
                ))}
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
                  <StepperTrigger>Prototype Concepts</StepperTrigger>
                  <StepperContent>
                    Customer collaboration drove the roadmap. As engineers shipped requests, I built
                    prototypes for standardising each customer's terminology, mental models, and
                    system configurations into one core UX.
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

        {/* Constraints */}
        <Section>
          <SectionHeader className="max-w-160">
            <SectionKicker>Constraints</SectionKicker>
            <SectionTitle className="!text-2xl leading-relaxed">
              At the start, we were bound by our limited technical capabilities and partial access
              to customers’ ERP systems.
            </SectionTitle>
            <SectionTagline>
              That focused my initial design effort on softening the impact of those constraints on
              the user experience, rather than chasing the long-term solution.
            </SectionTagline>
          </SectionHeader>

          <Carousel>
            <div className="relative">
              <CarouselContent
                expandable={false}
                className="aspect-[1152/748] border-0 bg-gentle/80 shadow-none"
              >
                {CONSTRAINTS.map((c, i) => (
                  <CarouselSlide key={c.title}>
                    {i === 0 ? <StreamingToolCalls /> : null}
                  </CarouselSlide>
                ))}
              </CarouselContent>
              <CarouselCard>
                <CarouselCardControls />
                {CONSTRAINTS.map((c, i) => (
                  <CarouselCardItem key={c.title} index={i}>
                    <h3 className="font-serif font-medium text-lg leading-relaxed tracking-tight text-fg-emphasis">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-normal text-fg-soft">{c.body}</p>
                  </CarouselCardItem>
                ))}
              </CarouselCard>
            </div>
          </Carousel>
        </Section>

        {/* Iterations */}
        <Section>
          <SectionHeader className="max-w-160">
            <SectionKicker>Iterations</SectionKicker>
            <SectionTitle className="!text-2xl leading-relaxed">
              Afterwards, user requests drove us towards building an assistant capable of performing
              more complex tasks.
            </SectionTitle>
            <SectionTagline>
              While the engineers were extending the assistant’s capabilities; my role was to reduce
              the friction each one added to the thread and surface the value behind it.
            </SectionTagline>
          </SectionHeader>

          <ScrollSwap defaultValue={ITERATIONS[0].value}>
            <ScrollSwapLabels>
              {ITERATIONS.map(item => (
                <ScrollSwapLabel key={item.value} value={item.value}>
                  <h3 className="font-serif text-xl tracking-[-1px] text-fg-emphasis">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[310px] text-md text-fg-subtle">{item.body}</p>
                </ScrollSwapLabel>
              ))}
            </ScrollSwapLabels>
            <ScrollSwapPanels>
              {ITERATIONS.map(item => (
                <ScrollSwapPanel key={item.value} value={item.value}>
                  <div className="flex flex-col gap-2 pb-4 md:hidden">
                    <h3 className="font-serif text-xl tracking-[-1px] text-fg-emphasis">
                      {item.title}
                    </h3>
                    <p className="text-md text-fg-subtle">{item.body}</p>
                  </div>
                  <div className="h-[400px] rounded-lg bg-canvas md:h-[640px]" />
                </ScrollSwapPanel>
              ))}
            </ScrollSwapPanels>
          </ScrollSwap>
        </Section>

        {/* Outcome */}
        <Section>
          <SectionHeader className="max-w-220">
            <SectionKicker>Outcome</SectionKicker>
            <SectionTitle className="!text-2xl leading-relaxed max-w-183">
              By the end, we&rsquo;d laid the groundwork for using Conduct to accelerate how long it
              takes to transform ERP systems.
            </SectionTitle>
            <SectionTagline>
              I had the lead UX of an AI assistant capable of performing system analysis, integrated
              iterations for performing more complex requests, and designed workflow concepts for
              guiding users through structured tasks.
            </SectionTagline>
          </SectionHeader>

          <div className="overflow-clip rounded-lg border border-subtle shadow-xs">
            <Image
              src="/images/work/conduct/screenshots/final-design.png"
              alt="Final design — Conduct AI assistant interface"
              width={2560}
              height={1664}
              className="w-full"
            />
          </div>
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
      </PageContent>
    </Page>
  );
}
