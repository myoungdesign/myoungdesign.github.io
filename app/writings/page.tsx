import { ArrowUpRight } from 'lucide-react';

import { Article, Hero, HeroContent } from '@/components';
import { getMediumPosts, MEDIUM_PROFILE_URL } from '@/content/medium';

export const revalidate = 3600;

export default async function WritingsPage() {
  const posts = await getMediumPosts();

  return (
    <>
      <Hero className="px-xl">
        <HeroContent>
          <div className="mx-auto w-full max-w-(--container-5xl) pt-md pb-xl flex flex-col gap-9 my-6 md:mt-0">
            <p className="font-sans text-xl tracking-widest text-gray-70 uppercase">Writings</p>
            <h1 className="font-serif font-[350] text-5xl md:text-[3.2rem] leading-snug tracking-tight text-white">
              Thoughts on Design &amp; Storytelling<span className="text-red-50">.</span>
            </h1>
            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-1 gap-1 self-start font-400 font-lg text-gray-90 hover:text-gray-70 transition-colors"
            >
              <span className="underline underline-offset-6 decoration-1">Subscribe on Medium</span>
              <ArrowUpRight className="size-5" aria-hidden strokeWidth={1.5} />
            </a>
          </div>
        </HeroContent>
      </Hero>

      <section className="relative z-[2] bg-bg-canvas p-xl">
        <div className="mx-auto w-full max-w-(--container-5xl) flex flex-col gap-6 md:gap-10">
          {posts.length === 0 ? (
            <p className="font-sans text-md text-gray-50">
              Articles are temporarily unavailable. Visit{' '}
              <a
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline underline-offset-4"
              >
                Medium
              </a>{' '}
              to read the latest.
            </p>
          ) : (
            posts.map(post => (
              <Article
                key={post.url}
                title={post.title}
                url={post.url}
                excerpt={post.excerpt}
                image={post.image}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}
