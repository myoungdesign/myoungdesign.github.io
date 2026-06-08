import { Section } from '@/components';

type OverviewProps = {
  problem: React.ReactNode;
  solution: React.ReactNode;
};

export function Overview({ problem, solution }: OverviewProps) {
  return (
    <Section className="gap-6 md:gap-12">
      <h2 className="text-4xl md:text-5xl text-fg-emphasis">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-18">
        <div className="flex flex-col gap-5">
          <h3 className="font-sans font-medium text-xl text-fg tracking-normal leading-normal">
            The problem
          </h3>
          <p className="font-sans text-md text-fg">{problem}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-sans font-medium text-xl text-fg tracking-normal leading-normal">
            The solution
          </h3>
          <p className="font-sans text-md text-fg">{solution}</p>
        </div>
      </div>
    </Section>
  );
}
