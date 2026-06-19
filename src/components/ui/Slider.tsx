'use client';

import { Slider as BaseSlider } from '@base-ui/react/slider';

import { cn } from '@/utils';

type SliderProps = {
  value: number;
  onValueChange: (value: number) => void;
  onValueCommitted?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /** How the thumb aligns to the track ends. See Base UI Slider docs. */
  thumbAlignment?: 'center' | 'edge' | 'edge-client-only';
  'aria-label'?: string;
  className?: string;
};

/** Token-styled single-value slider wrapping Base UI's Slider. */
export function Slider({
  value,
  onValueChange,
  onValueCommitted,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  className,
  ...rest
}: SliderProps) {
  return (
    <BaseSlider.Root
      {...rest}
      value={value}
      onValueChange={next => onValueChange(next as number)}
      onValueCommitted={onValueCommitted ? next => onValueCommitted(next as number) : undefined}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={cn('relative flex w-full touch-none items-center select-none', className)}
    >
      <BaseSlider.Control className="flex w-full items-center">
        <BaseSlider.Track className="relative h-1 w-full rounded-full bg-black/10">
          <BaseSlider.Indicator className="rounded-full bg-black/20" />
          <BaseSlider.Thumb className="size-4.5 rounded-full border border-black/20 bg-white shadow-sm ring-black/8 hover:border-black/30 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-5 disabled:pointer-events-none disabled:opacity-50" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
