import type { Metadata } from 'next';
import Image from 'next/image';

import {
  Callout,
  CalloutColumn,
  CalloutColumns,
  Page,
  PageContent,
  PageCover,
  PageHeader,
  PageKicker,
  PageMasthead,
  PageMeta,
  PageMetaItem,
  PageTitle,
  ScrollSwap,
  ScrollSwapLabel,
  ScrollSwapLabels,
  ScrollSwapPanel,
  ScrollSwapPanels,
  Section,
  SectionHeader,
  SectionKicker,
  Stepper,
  StepperContent,
  StepperItem,
  StepperList,
  StepperPanel,
  StepperPanelItem,
  StepperTrigger,
} from '@/components';

import { Overview } from '../components/Overview';

type Story = {
  value: string;
  title: React.ReactNode;
  body: string;
  src: string;
  alt: string;
};

const UNDERSTAND: Story[] = [
  {
    value: 'ask-anything',
    title: (
      <>
        An assistant you
        <br />
        could ask anything
      </>
    ),
    body: "At first, we built an assistant that could answer questions about a customer's SAP system. Instead of reading custom code by hand, an analyst could ask what a process did or what a change would affect, and the assistant traced the answer down to the actual code and configuration behind it.",
    src: '/images/work/conduct/understand-01.png',
    alt: 'An assistant that traces answers down to the underlying SAP code and configuration',
  },
  {
    value: 'tuning-answers',
    title: (
      <>
        Tuning answers
        <br />
        to role and system
      </>
    ),
    body: 'Answers needed to match both the person asking and the system they were working in. We defined a set of user profiles that tuned the depth and focus of each response, and I built them into the prompt input alongside the connected system. First-time users were guided towards the right profile, and switching system or role never pulled them out of their current thread.',
    src: '/images/work/conduct/understand-02.png',
    alt: 'User profiles in the prompt input that tune the depth and focus of each response',
  },
  {
    value: 'revealing-reasoning',
    title: (
      <>
        Building trust by
        <br />
        revealing reasoning
      </>
    ),
    body: "Users found the assistant could be slow and prone to hallucinations so we decided to stream tool calls to expose the assistant's reasoning in real-time. I came up with a design that collapsed the calls on completion, keeping them visible only while relevant so they didn't impose extraneous load once a response was fully generated.",
    src: '/images/work/conduct/understand-03.png',
    alt: 'Streaming tool calls that expose the assistant reasoning and collapse on completion',
  },
  {
    value: 'feedback',
    title: (
      <>
        Turning feedback
        <br />
        into better answers
      </>
    ),
    body: 'A plain thumbs up or down went mostly unused, leaving the team with little signal on answer quality. I replaced it with an inline survey under each response: a "Did this answer your question?" prompt with structured reasons and a free-text fallback. When an answer was rated poorly, the assistant used that reason to generate an improved response and asked again, so a bad rating became a second attempt rather than a dead end.',
    src: '/images/work/conduct/understand-04.png',
    alt: 'An inline survey under each response that turns a poor rating into an improved answer',
  },
];

const OPERATE: Story[] = [
  {
    value: 'answers-to-outputs',
    title: (
      <>
        Moving from
        <br />
        answers to outputs
      </>
    ),
    body: 'Next, we moved the assistant from answering questions to producing the things teams actually needed. People were already using it to draft functional specs and run fit-gap checks against SAP standard, then pasting the results into Word to finish, so we built that work into the product itself.',
    src: '/images/work/conduct/operate-01.png',
    alt: 'The assistant producing functional specs and fit-gap checks directly in the product',
  },
  {
    value: 'business-processes',
    title: (
      <>
        Starting from
        <br />
        business processes
      </>
    ),
    body: 'Users start from a business process, not an artefact they could look up. They needed the assistant to connect business steps to technical execution, speeding up root cause analysis and catching downstream effects. So I designed an inline process flow that highlighted the relevant custom programs on each step, keeping technical detail in the context of the process.',
    src: '/images/work/conduct/operate-02.png',
    alt: 'An inline process flow that highlights the relevant custom programs on each step',
  },
  {
    value: 'document-editor',
    title: (
      <>
        A document
        <br />
        editor in the thread
      </>
    ),
    body: 'The specs and analyses the assistant produced still ended up in Word for editing, which broke the flow of work. We built a document editor directly into Conduct, powered by TipTap, which I themed and integrated alongside the chat. You could preview a document beside the chat, or open the full editor to work on it.',
    src: '/images/work/conduct/operate-03.png',
    alt: 'A TipTap-powered document editor integrated alongside the chat thread',
  },
];

const TRANSFORM: Story[] = [
  {
    value: 'full-change-cycle',
    title: (
      <>
        The full change
        <br />
        cycle, in one place
      </>
    ),
    body: 'Finally, we expanded the assistant to manage a change from end to end: plan, build, test, and deploy. IT teams were under pressure to compress their S/4HANA migration timelines, which meant comparing decades of custom code against SAP standard and clean core principles to decide what to keep, retire, or rebuild. We brought that whole cycle into Conduct so teams could run the analysis and act on it without leaving.',
    src: '/images/work/conduct/transform-01.png',
    alt: 'The full change cycle — plan, build, test, and deploy — brought into Conduct',
  },
  {
    value: 'workflow-for-every-analysis',
    title: (
      <>
        A workflow
        <br />
        for every analysis
      </>
    ),
    body: 'As new workflows were introduced, my role was to embed them into the dashboard so they were easy to find and move into, whether from the homepage or partway through a thread. This was the final step towards one platform that could accelerate an entire IT team, from asking a question to implementing the change. I designed the hand-off between them, so one user could pass their work to whoever owned the next step in the engineering process.',
    src: '/images/work/conduct/transform-02.png',
    alt: 'Workflows embedded into the dashboard with hand-offs between team members',
  },
];

const SOLUTION_STEPS = [
  {
    n: '01',
    title: 'Understand',
    body: 'Reading the actual custom code and configuration behind a system, so migrations, optimisations, and change requests started from fact, not guesswork.',
  },
  {
    n: '02',
    title: 'Operate',
    body: 'Turning that understanding into the outputs teams needed, specs, analyses, and process flows, produced in context and edited in the same thread.',
  },
  {
    n: '03',
    title: 'Transform',
    body: 'Running a change from end to end, plan, build, test, and deploy, with workflows that carry the work and its context across the team.',
  },
];

const CALLOUTS = {
  understand: {
    statTop: 'More than',
    stat: '80% faster',
    statBottom: 'manual system analysis',
    learnings:
      "The impact showed up first in speed: work that meant reading custom code by hand now took a fraction of the time. More telling was what people did with it. They weren't asking questions to understand the system, they were drafting specs, running fit-gap checks against SAP standard, and tracing processes, then pasting the results into Word to finish. The assistant had become a starting point for real outputs, and people worked forward from the business process rather than the artefact, which is what pushed Conduct from answering questions to producing the work itself.",
  },
  operate: {
    statTop: 'Reduced delivery time by',
    stat: '50%',
    statBottom: 'for new features',
    learnings:
      "The time savings were real and users felt them, but they stopped at the edges of what Conduct covered. Feedback made the gap clear: we were speeding up individual pieces of work without yet supporting the full software development process, so people still had to hand work off to external tools and colleagues, and important context was lost each time they did. That's what pushed us to bring the entire change cycle into Conduct, from analysis to deploy, so the work and the context around it stayed in one place.",
  },
  transform: {
    statTop: 'Saved up to',
    stat: '30%',
    statBottom: 'on large scale projects',
    learnings:
      "The further we took Conduct, the clearer it became that the value sat in the connections, not the individual features. A faster answer is enough for a small task; on a migration spanning decades of custom code, the cost lives in the hand-offs between steps and people, and that's where an end-to-end platform pays off. The lasting lesson for me was that the hardest design work was rarely a single screen, it was the seams between them: keeping context intact as work moved from one person and one workflow to the next.",
  },
};

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

function ScrollStory({ kicker, items }: { kicker: string; items: Story[] }) {
  return (
    <Section>
      <ScrollSwap defaultValue={items[0].value}>
        <ScrollSwapLabels
          header={<SectionKicker className="pb-10 md:pb-10">{kicker}</SectionKicker>}
        >
          {items.map(item => (
            <ScrollSwapLabel key={item.value} value={item.value}>
              <h3 className="font-serif font-medium text-2xl leading-relaxed tracking-tighter text-fg-emphasis">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[310px] text-md text-fg-subtle">{item.body}</p>
            </ScrollSwapLabel>
          ))}
        </ScrollSwapLabels>
        <ScrollSwapPanels>
          {items.map(item => (
            <ScrollSwapPanel key={item.value} value={item.value}>
              <div className="flex flex-col gap-2 pb-4 md:hidden">
                <h3 className="font-serif font-medium text-2xl leading-relaxed tracking-tighter text-fg-emphasis">
                  {item.title}
                </h3>
                <p className="text-md text-fg-subtle">{item.body}</p>
              </div>
              <div className="relative h-[400px] overflow-clip rounded-lg bg-[#F7F7F8] md:h-[640px]">
                <Image src={item.src} alt={item.alt} fill className="object-contain p-6 md:p-10" />
              </div>
            </ScrollSwapPanel>
          ))}
        </ScrollSwapPanels>
      </ScrollSwap>
    </Section>
  );
}

function StatCallout({
  statTop,
  stat,
  statBottom,
  learnings,
}: {
  statTop: string;
  stat: string;
  statBottom: string;
  learnings: string;
}) {
  return (
    <Callout>
      <CalloutColumns className="lg:items-center">
        <CalloutColumn className="lg:max-w-[252px] lg:flex-none lg:gap-7">
          <p className="font-sans font-medium text-sm uppercase tracking-wider text-gray-70">
            {statTop}
          </p>
          <p className="font-serif font-medium text-6xl leading-tight tracking-tighter text-white">
            {stat}
          </p>
          <p className="font-sans font-medium text-sm uppercase tracking-wider text-gray-70">
            {statBottom}
          </p>
        </CalloutColumn>
        <CalloutColumn className="gap-4">
          <h3 className="font-serif font-medium text-xl tracking-tight text-white">
            Key learnings
          </h3>
          <p className="text-gray-80">{learnings}</p>
        </CalloutColumn>
      </CalloutColumns>
    </Callout>
  );
}

function Solution() {
  return (
    <section className="relative overflow-clip -mx-xl md:-mx-0 md:rounded-lg bg-[#F7F7F8] p-10 md:p-10 lg:p-14">
      <div className="flex flex-col gap-8 lg:gap-14">
        {/* Heading — spans the full width */}
        <div className="flex flex-col gap-4 md:gap-4">
          <h2 className="text-fg-emphasis gap-3 md:gap-0 font-serif font-medium text-xl md:text-2xl leading-[1.6] tracking-tighter max-w-176">
            We set out to build a solution that accelerated an entire IT team.
            <span className="text-fg-soft"> From asking questions to implementing changes.</span>
          </h2>
          <p className="max-w-[488px] md:text-lg text-fg-subtle">
            Our objective was to develop a single AI layer for understanding, operating, and
            transforming ERP systems.
          </p>
        </div>

        {/* Steps — left column; the mockup sits to their right on desktop */}
        <ol className="flex flex-col lg:max-w-[358px]">
          {SOLUTION_STEPS.map((step, i) => (
            <li key={step.n} className="relative flex gap-6 pb-10 last:pb-0">
              {i < SOLUTION_STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-5 top-12 bottom-2 w-px -translate-x-1/2 bg-border-subtle"
                />
              )}
              <span className="relative z-[1] flex size-10 shrink-0 items-center justify-center rounded-full bg-fg-emphasis font-sans font-medium text-md tracking-wider text-white">
                {step.n}
              </span>
              <div className="flex flex-col gap-2 pt-1.5">
                <h3 className="font-serif font-semibold text-lg leading-snug tracking-tight text-fg-emphasis">
                  {step.title}
                </h3>
                <p className="text-md text-fg-subtle">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Mockup — stacks below on mobile/tablet, bleeds into the bottom-right corner on desktop */}
      <div className="mt-4 lg:absolute lg:right-4 lg:bottom-4 lg:mt-0 lg:w-[58%]">
        <Image
          src="/images/work/conduct/solution.png"
          alt="Conduct's three-phase approach — understand, operate, and transform ERP systems"
          width={1484}
          height={1340}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: 'Conduct Case Study — Mike Young Design',
  description:
    'An AI workspace that helps IT teams understand and modernise tangled SAP and ERP systems. How dense enterprise data became a workflow people trust.',
};

export default function ConductPage() {
  return (
    <Page hasCover>
      <PageHeader>
        <PageMasthead>
          <PageKicker>Case study</PageKicker>
          <PageTitle className="sm:max-w-200">
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

        {/* Solution */}
        <Solution />

        {/* Understand */}
        <ScrollStory kicker="Understand" items={UNDERSTAND} />
        <StatCallout {...CALLOUTS.understand} />

        {/* Operate */}
        <ScrollStory kicker="Operate" items={OPERATE} />
        <StatCallout {...CALLOUTS.operate} />

        {/* Transform */}
        <ScrollStory kicker="Transform" items={TRANSFORM} />
        <StatCallout {...CALLOUTS.transform} />

        {/* Process */}
        <Section className="my-6">
          <Stepper defaultValue="setup-context" duration={7000}>
            <div className="grid gap-8 md:min-h-168 md:grid-cols-[35%_1fr] md:grid-rows-[1fr_auto] md:gap-x-12">
              <SectionHeader className="md:col-start-1 md:row-start-1 md:max-w-84">
                <SectionKicker className="!pb-0">Process</SectionKicker>
                <h3 className="font-serif font-medium text-2xl leading-relaxed tracking-tighter text-fg-emphasis">
                  With work split across workstreams, I embedded UX as governance to raise the
                  quality of all outputs.
                </h3>
              </SectionHeader>
              <StepperPanel className="aspect-[4/3] overflow-clip rounded-lg bg-[#F7F7F8] md:col-start-2 md:row-start-1 md:row-span-2 md:aspect-auto">
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
                  <StepperTrigger>Prototype Ideas</StepperTrigger>
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

        {/* Impact */}
        <Section>
          <SectionHeader>
            <SectionKicker>Impact</SectionKicker>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
              <h3 className="flex-1 font-serif font-medium text-xl leading-relaxed tracking-tighter text-fg-emphasis md:max-w-[420px]">
                By the end, the assistant was automating entire software development workflows,
                carrying Conduct towards a $60M Series A.
              </h3>
              <p className="flex-1 text-md text-fg-subtle">
                ERP analysis had been made about five times faster, delivery time for new features
                had been halved, and customers were saving up to 30% on large-scale projects. The
                end-to-end capability opened the door to long-term partnerships with enterprises
                like DHL, Daimler Truck, and Heidelberg Materials, organisations that don&rsquo;t
                open their core systems to software lightly.
              </p>
            </div>
          </SectionHeader>

          <div className="overflow-clip rounded-lg border border-subtle shadow-xs mt-2">
            <Image
              src="/images/work/conduct/screenshots/final-design.png"
              alt="Final design — Conduct AI assistant interface"
              width={2560}
              height={1664}
              className="w-full"
            />
          </div>
        </Section>
      </PageContent>
    </Page>
  );
}
