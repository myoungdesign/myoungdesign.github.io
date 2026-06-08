'use client';

import { createContext, useContext } from 'react';

type ExpandCardContextValue = {
  expand: () => void;
};

export const ExpandCardContext = createContext<ExpandCardContextValue | null>(null);

export function useExpandCard() {
  const context = useContext(ExpandCardContext);
  if (!context) {
    throw new Error('ExpandCard parts must be used within <ExpandCard>.');
  }
  return context;
}
