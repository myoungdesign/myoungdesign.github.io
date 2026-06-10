import { HomeHero } from './components/Hero';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="relative z-[2] min-h-screen bg-canvas p-xl">
        <p className="text-fg-muted font-sans text-md">Placeholder — work grid goes here</p>
      </section>
    </>
  );
}
