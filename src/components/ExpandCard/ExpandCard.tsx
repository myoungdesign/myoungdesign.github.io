'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { X } from 'lucide-react';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import { cn } from '@/utils';

import { ExpandCardContext } from './ExpandCardContext';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });

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
          close={() => setOpen(false)}
          slides={[{ src: expandedImage, alt: expandedAlt }]}
          plugins={[Zoom]}
          controller={{ closeOnBackdropClick: true }}
          carousel={{ finite: true }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
            iconClose: () => <X className="size-6" aria-hidden />,
          }}
          styles={{
            root: {
              '--yarl__color_backdrop': 'rgba(0, 0, 0, 0.9)',
              '--yarl__color_button': 'rgba(255, 255, 255, 0.7)',
              '--yarl__color_button_active': 'rgb(255, 255, 255)',
            },
          }}
        />
      )}
    </ExpandCardContext.Provider>
  );
}
