import Image from 'next/image';
import { Fragment } from 'react';

import {
  Communication,
  Counter,
  EightyTwenty,
  FormFunction,
  IconCard,
  LongGame,
  Page,
  PageContent,
  PageCover,
  PageHeader,
  Separator,
} from '@/components';

const STATS = [
  {
    label: 'Years of experience',
    value: 15,
    suffix: '+',
    description: 'Over a decade and a half of outcome-driven design for startups of various sizes.',
  },
  {
    label: 'Products designed',
    value: 50,
    suffix: '+',
    description:
      'From prototypes to full redesigns and product launches — across B2B and Enterprise software.',
  },
  {
    label: 'Design systems built',
    value: 6,
    suffix: '',
    description:
      'Scalable foundations built to help each product ship fast without losing consistency.',
  },
];

export default function AboutPage() {
  return (
    <Page hasCover>
      <PageHeader className="gap-9 my-6 md:my-0">
        <p className="font-sans text-xl tracking-widest text-gray-70 uppercase">About</p>
        <h1 className="font-serif font-[350] text-4xl lg:text-[3.25rem] leading-normal tracking-tight text-white">
          Designing Human-Centered Experiences in the AI-Era
          <span className="text-red-50">.</span>
        </h1>
      </PageHeader>
      <PageCover>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-90">
          <Image src="/images/about.jpg" alt="Mike Young" fill className="object-cover" priority />
        </div>
      </PageCover>
      <PageContent>
        <div className="font-sans text-md text-fg space-y-7">
          <p>Howdy, I'm Mike — a Lead Product Designer based in London.</p>
          <p>
            With 15 years across content and product design, at companies large and small, I've
            developed a clear sense for where products lose the people they're built for. I'm driven
            to help businesses close these gap, and align what they promise and what with the
            product actually delivers.
          </p>
          <p>
            As building products becomes more accessible with no-code and AI, so too does the
            pressure to stand out. While it's easier to ship a product, earning trust and loyalty
            still takes a human touch.
          </p>
          <p>
            My design process is about finding what makes a product invaluable to its users, then
            investing design time to make these impossible to miss.
          </p>
          <p>
            I believe it's the designer's responsibility to cut through the noise in the AI-era.
          </p>
        </div>

        {/* Stats box */}
        <div className="flex flex-col md:flex-row p-8 gap-0 md:gap-2 bg-gray-10">
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && (
                <>
                  <Separator className="md:hidden my-8 bg-transparent bg-gradient-to-r from-transparent via-gray-45 to-transparent" />
                  <Separator
                    orientation="vertical"
                    className="hidden md:block mx-8 bg-transparent bg-gradient-to-b from-transparent via-gray-45 to-transparent"
                  />
                </>
              )}
              <div className="flex flex-1 flex-col gap-8 md:gap-10">
                <p className="font-sans font-medium text-xs uppercase tracking-widest text-white">
                  {stat.label}
                </p>
                <div className="flex flex-col gap-1">
                  <Counter
                    to={stat.value}
                    duration={1}
                    suffix={stat.suffix}
                    className="block font-serif font-medium text-[3.25rem] leading-none text-white tabular-nums"
                  />
                  <p className="text-gray-80">{stat.description}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        {/* Playbook */}
        <div className="flex flex-col gap-6 pb-4 md:pb-0">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-tight text-fg-emphasis">
            My Playbook
          </h2>
          <div className="space-y-7 font-sans text-md text-fg">
            <p>
              A great product wins by shipping quality at speed, release after release. It’s
              critical to know what to fight for, what to cut, and how to keep the product moving
              towards the goal line without losing momentum.
            </p>
            <p>
              From 0 → 1 builds to post-launch iterations, here are four plays I run during every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
            <IconCard icon={<Communication />} title="Continual Alignment">
              Constant communication drives innovation and hastens execution. Know when to design,
              and when to huddle.
            </IconCard>
            <IconCard icon={<EightyTwenty />} title="The 80/20 rule">
              Focus on solving the 20% of problems that will deliver the biggest impact. Prioritize
              outcomes, not output.
            </IconCard>
            <IconCard icon={<FormFunction />} title="Form after function">
              Prioritize performance and usability first. Find what works, then find the sharpest
              way to express it.
            </IconCard>
            <IconCard icon={<LongGame />} title="Play the long game">
              Introduce systems that scale, and introduce them early. Short-term thinking leads to
              long-term debt.
            </IconCard>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}
