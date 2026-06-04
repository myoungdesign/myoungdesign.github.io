'use client';

import { PageContext } from './context';

type PageProps = {
  children: React.ReactNode;
  /** Set true when a <PageCover> is included so <PageHeader> reserves a landing zone for it. */
  hasCover?: boolean;
  /** CSS length the PageCover bleeds up into the dark PageHeader band. Default `8rem`. */
  overlap?: string;
  /** Extra scroll runway after PageHeader before content slides over. Default 0. */
  hold?: number;
};

export function Page({ children, hasCover = false, overlap = '8rem', hold = 0 }: PageProps) {
  return (
    <PageContext.Provider value={{ hasCover, overlap, hold }}>{children}</PageContext.Provider>
  );
}
