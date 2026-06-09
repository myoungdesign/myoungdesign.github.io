'use client';

import { useState } from 'react';

import { cn } from '@/utils';

import { Lightbox } from '../ui';

import { ExpandCardContext } from './ExpandCardContext';

type ExpandCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Full-size image shown in the lightbox. Omit to render no lightbox. */
  expandedImage?: string;
  /** Accessible alt text for the lightbox image. */
  expandedAlt?: string;
};

export function ExpandCard({ children, className, expandedImage, expandedAlt }: ExpandCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <ExpandCardContext.Provider value={{ expand: () => setOpen(true) }}>
      <div
        className={cn(
          'flex flex-col overflow-clip rounded-lg border border-subtle bg-surface',
          className
        )}
      >
        {children}
      </div>

      {expandedImage && (
        <Lightbox
          open={open}
          onClose={() => setOpen(false)}
          src={expandedImage}
          alt={expandedAlt}
        />
      )}
    </ExpandCardContext.Provider>
  );
}
