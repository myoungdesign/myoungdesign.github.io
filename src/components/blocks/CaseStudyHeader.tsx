import { PageHeader } from '@/components/Page';

type Meta = {
  label: string;
  value: string;
};

type CaseStudyHeaderProps = {
  tagline?: string;
  title: React.ReactNode;
  meta: Meta[];
};

export function CaseStudyHeader({ tagline = 'CASE STUDY', title, meta }: CaseStudyHeaderProps) {
  return (
    <PageHeader className="gap-9 my-6 md:my-0">
      <p className="font-sans text-xs font-medium tracking-[0.25em] text-gray-70 uppercase">
        {tagline}
      </p>
      <h1 className="font-serif font-[350] text-4xl lg:text-[3.25rem] leading-[1.15] tracking-tight text-white">
        {title}
        <span className="text-red-50">.</span>
      </h1>
      <dl className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-12">
        {meta.map((m) => (
          <div key={m.label} className="flex flex-col gap-2">
            <dt className="font-sans text-xs font-medium tracking-[0.2em] text-gray-70 uppercase">
              {m.label}
            </dt>
            <dd className="font-sans text-md text-white">{m.value}</dd>
          </div>
        ))}
      </dl>
    </PageHeader>
  );
}
