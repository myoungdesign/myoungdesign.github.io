'use client';

import { Dialog } from '@base-ui/react/dialog';
import { X } from 'lucide-react';
import { useRef, useState } from 'react';
import {
  TransformComponent,
  TransformWrapper,
  type ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';

import { cn } from '@/utils';

import { Slider } from './Slider';

const MAX_SCALE = 4;

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  className?: string;
};

/**
 * Full-screen image lightbox: a Base UI Dialog shell (focus-trap, ESC,
 * scroll-lock, portal) wrapping a react-zoom-pan-pinch viewer with an
 * overlaid close button and zoom slider. Scroll/pinch to zoom, drag to pan.
 */
export function Lightbox({ open, onClose, src, alt, className }: LightboxProps) {
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={next => {
        if (!next) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[100] bg-surface" />
        <Dialog.Popup
          ref={popupRef}
          initialFocus={popupRef}
          tabIndex={-1}
          data-lenis-prevent
          aria-label={alt ?? 'Expanded image'}
          className={cn(
            'fixed inset-0 z-[100] flex items-center justify-center outline-none',
            className
          )}
        >
          <TransformWrapper
            ref={transformRef}
            minScale={1}
            maxScale={MAX_SCALE}
            centerOnInit
            doubleClick={{ mode: 'toggle' }}
            wheel={{ step: 0.04 }}
            panning={{ velocityDisabled: true }}
            onTransform={(_, state) => setScale(state.scale)}
          >
            <TransformComponent
              wrapperClass="!h-full !w-full !items-center !justify-center"
              contentClass="!items-center !justify-center"
            >
              {/* plain <img>: rzpp needs an intrinsic-sized element; Article.tsx
                  sets the precedent for <img> when next/image fights the use case */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt ?? ''}
                draggable={false}
                className="max-h-[80vh] max-w-[85vw] object-contain select-none"
              />
            </TransformComponent>
          </TransformWrapper>

          <Dialog.Close
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-gentle/80 text-fg-gentle backdrop-blur-sm transition-colors hover:text-fg-soft cursor-pointer"
          >
            <X className="size-6" aria-hidden />
          </Dialog.Close>

          <div className="absolute bottom-6 left-1/2 z-10 flex h-11 w-52 -translate-x-1/2 items-center rounded-full bg-gentle/80 px-6 backdrop-blur-sm">
            <Slider
              aria-label="Zoom"
              thumbAlignment="edge"
              min={1}
              max={MAX_SCALE}
              step={0.01}
              value={scale}
              onValueChange={s => {
                setScale(s);
                transformRef.current?.centerView(s, 0);
              }}
            />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
