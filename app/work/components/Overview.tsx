import { Section } from '@/components';

type OverviewProps = {
  problem: React.ReactNode;
  solution: React.ReactNode;
};

export function Overview({ problem, solution }: OverviewProps) {
  return (
    <Section>
      <h2 className="font-serif text-2xl lg:text-3xl tracking-tight text-fg-emphasis">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs font-medium tracking-[0.2em] text-soft uppercase">
            The problem
          </h3>
          <p className="font-sans text-md text-fg">{problem}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-xs font-medium tracking-[0.2em] text-soft uppercase">
            The solution
          </h3>
          <p className="font-sans text-md text-fg">{solution}</p>
        </div>
      </div>
    </Section>
  );
}
