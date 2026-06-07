import { ArrowUpRight } from 'lucide-react';

import { Article, Page, PageHeader, PageKicker, PageMasthead, PageTitle } from '@/components';
import { getMediumPosts, MEDIUM_PROFILE_URL } from '@/content/medium';

export const revalidate = 3600;

export default async function WritingsPage() {
  const posts = await getMediumPosts();

  return (
    <Page>
      <PageHeader className="pb-4">
        <PageMasthead>
          <PageKicker>Writings</PageKicker>
          <PageTitle>Thoughts on Design &amp; Storytelling</PageTitle>
          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-1 gap-1 self-start text-md text-gray-90 hover:text-gray-70 transition-colors"
          >
            <span className="underline underline-offset-6 decoration-1">Subscribe on Medium</span>
            <ArrowUpRight className="size-5" aria-hidden strokeWidth={1.5} />
          </a>
        </PageMasthead>
      </PageHeader>

      <section className="relative z-[2] bg-bg-canvas p-xl">
        <div className="mx-auto w-full max-w-(--container-6xl) flex flex-col gap-6 md:gap-14 py-xs">
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
    </Page>
  );
}
