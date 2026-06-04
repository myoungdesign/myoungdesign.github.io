'use client';

import { createContext, useContext } from 'react';

export type PageContextValue = {
  hasCover: boolean;
  overlap: string;
  hold: number;
};

export const PageContext = createContext<PageContextValue | null>(null);

export function usePageContext(componentName: string) {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error(`<${componentName}> must be rendered inside <Page>.`);
  return ctx;
}
