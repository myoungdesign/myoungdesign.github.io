import Image from 'next/image';

import {
  Callout,
  CalloutColumn,
  CalloutColumns,
  CalloutKicker,
  Communication,
  EightyTwenty,
  FormFunction,
  IconCard,
  LongGame,
  Page,
  PageContent,
  PageCover,
  PageHeader,
  PageKicker,
  PageMasthead,
  PageTitle,
  Section,
  SectionHeader,
  SectionKicker,
  SectionTagline,
  SectionTitle,
  VisuallyHidden,
} from '@/components';

const STATS = [
  {
    label: 'Years of experience',
    value: 15,
    suffix: '+',
    description:
      'Over a decade and a half of leading outcome-driven design for startups of various sizes.',
  },
  {
    label: 'Products designed',
    value: 50,
    suffix: '+',
    description:
      'From prototypes to full redesigns and product launches — across B2B, SaaS, and Enterprise software.',
  },
  {
    label: 'Design systems built',
    value: 3,
    suffix: '',
    description:
      'Scalable foundations built to help each product ship fast without losing consistency.',
  },
];

export default function AboutPage() {
  return (
    <Page hasCover>
      <PageHeader>
        <PageMasthead>
          <PageKicker>Hi, I'm Mike Young</PageKicker>
          <PageTitle className="lg:max-w-[90%] xl:max-w-[75%]">
            A Lead Product Designer with 15+ Years of Experience
          </PageTitle>
        </PageMasthead>
      </PageHeader>
      <PageCover>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-90">
          <Image
            src="/images/about/mike-young.jpg"
            alt="Mike Young"
            fill
            className="object-cover"
            priority
          />
        </div>
      </PageCover>
      <PageContent>
        <Section>
          <SectionHeader>
            <VisuallyHidden>
              <SectionKicker>Biography</SectionKicker>
            </VisuallyHidden>
            <SectionTitle> I love helping products live up to their promise.</SectionTitle>
          </SectionHeader>
          <p>
            With over a decade across content and product design, at companies large and small, I've
            developed a clear sense for where products lose the people they're built for.
          </p>
          <p>
            And now, as building products becomes more accessible with no-code and AI, so too does
            the pressure to stand out. It's easier to ship a product, but earning trust and loyalty
            still takes a human touch. User advocacy is more important than ever.
          </p>
          <p>
            My design thinking is centred around finding what makes a product invaluable to its
            users, then investing design time to make these impossible to miss.
          </p>
          <p>
            I believe it's the designer's responsibility to make a product cut through the noise.
          </p>
        </Section>
        <Callout>
          <CalloutColumns>
            {STATS.map(stat => (
              <CalloutColumn key={stat.label}>
                <CalloutKicker>{stat.label}</CalloutKicker>
                <p className="block font-serif font-medium text-[3.25rem] leading-none text-white tabular-nums">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p>{stat.description}</p>
              </CalloutColumn>
            ))}
          </CalloutColumns>
        </Callout>

        <Section>
          <SectionHeader>
            <SectionKicker>My Playbook</SectionKicker>
            <SectionTitle>
              {' '}
              I run these four plays to ship quality at speed, release after release.
            </SectionTitle>
            <SectionTagline>
              From 0 → 1 builds to post-launch iterations, it's critical I know what to fight for,
              what to cut, and how to keep the product moving towards the goal line without losing
              momentum.
            </SectionTagline>
          </SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-3">
            <IconCard icon={<Communication />} title="Continual Alignment">
              Constant communication drives innovation and hastens execution. There's a time for
              Figma, and a time for huddles.
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
        </Section>
      </PageContent>
    </Page>
  );
}
