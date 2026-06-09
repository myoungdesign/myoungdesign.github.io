'use client';

import { useState } from 'react';

import { Card, Lightbox } from '../ui';

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
      <Card className={className}>{children}</Card>

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
