'use client';

import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

import { useCarouselSlide } from '@/components/ui';
import { cn } from '@/utils';

import { RestartButton } from '../RestartButton';
import { usePhases } from '../usePhases';

import {
  AgentMessage,
  AgentMessageHeading,
  AgentMessageLink,
  AgentMessageList,
  AgentMessageText,
} from './parts/AgentMessage';
import {
  ToolCalls,
  ToolCallsItem,
  ToolCallsList,
  ToolCallsSeparator,
  ToolCallsSummary,
} from './parts/ToolCalls';
import { UserMessage } from './parts/UserMessage';

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* Response copy as module constants so the stream duration derives from the word count. */
const PARAGRAPH =
  "The decision to reorder (replenish) a material stored in random bins in Horsch's SAP system is managed primarily by the custom program";
const PARAGRAPH_CODE = 'ZWM_NACHSCHUB_PUFFER';
const HEADING = 'Here is how the process works:';
const LINK = '1. Replenishment Trigger Logic';
const ITEM_BINS =
  'The system evaluates each storage bin in a warehouse storage type configured for random bin management.';
const ITEM_STOCK = 'For each bin/material combination, it calculates the available stock as the sum of:';
const SUB_ITEMS = [
  'Current stock in the bin',
  'Open putaway quantities',
  'Open transfer requirements (TRs)',
  'Open transfer orders (TOs)',
];
const ITEM_PARAMS =
  'The program retrieves replenishment parameters (minimum, maximum, and replenishment quantities) from the material master for the relevant warehouse and storage type.';
const ITEM_THRESHOLD =
  'If the available stock in a bin falls below the minimum threshold (as defined in the material master), the bin is flagged for replenishment.';

const WORD_INTERVAL = 0.045; // seconds per streamed word
const TOTAL_WORDS = [
  PARAGRAPH,
  PARAGRAPH_CODE,
  HEADING,
  LINK,
  ITEM_BINS,
  ITEM_STOCK,
  ...SUB_ITEMS,
  ITEM_PARAMS,
  ITEM_THRESHOLD,
]
  .join(' ')
  .split(/\s+/).length;

/*
 * Phases: 1 user message · 2 "Searching for…" runs · 3 "Analyzing
 * enhancements…" runs · 4 "Generating response" while the answer streams in ·
 * 5 (final) tool calls collapsed to summary.
 */
const PHASE_DURATIONS = [
  700,
  2200,
  2200,
  Math.round(TOTAL_WORDS * WORD_INTERVAL * 1000) + 800,
] as const;

function Rise({
  show,
  children,
  className,
}: {
  show: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  if (!show) return null;
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Eases its own height open so the tool-calls card grows smoothly. The -10px
   margin offsets the list's row gap while collapsed. */
function Grow({
  show,
  children,
  className,
}: {
  show: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  if (!show) return null;
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { height: 0, opacity: 0, marginTop: -10 }}
      animate={{ height: 'auto', opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className={cn('w-full overflow-clip', className)}
    >
      {children}
    </motion.div>
  );
}

export function StreamingToolCalls() {
  const { isActive } = useCarouselSlide();
  const shouldReduceMotion = useReducedMotion();
  // Slides are "active" from mount, so also wait until the carousel is
  // actually on screen before starting the choreography.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [phase, restart] = usePhases(isActive && inView, PHASE_DURATIONS);
  const collapsed = phase >= 5;

  // Word-by-word streaming: a render-scoped counter hands out sequential
  // delays in document order. Helpers are called inline (not as components)
  // so counting follows source order; re-renders recompute identical delays.
  const counter = { i: 0 };
  const streamWords = (text: string) =>
    text.split(' ').map((word, j) => (
      <motion.span
        key={j}
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, delay: counter.i++ * WORD_INTERVAL }}
      >
        {word}{' '}
      </motion.span>
    ));
  const streamChunk = (node: React.ReactNode) => (
    <motion.span
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, delay: counter.i++ * WORD_INTERVAL }}
    >
      {node}
    </motion.span>
  );
  // The bullet marker fades in with the item's first word; `kids` is a thunk
  // so nested lists count their words after the item's own text.
  const streamItem = (text: string, kids?: () => React.ReactNode) => {
    const start = counter.i;
    const words = streamWords(text);
    const children = kids?.();
    return (
      <motion.li
        key={text.slice(0, 24)}
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: start * WORD_INTERVAL }}
      >
        {words}
        {children}
      </motion.li>
    );
  };

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* On md+ the CarouselCard overlay sits bottom-left (ends 400px in), so keep the scene right of it. */}
      <div
        aria-hidden
        className="mx-auto flex h-full w-[min(580px,82%)] flex-col items-stretch gap-[48px] pt-[44px] select-none md:mr-[6%] md:ml-auto md:w-[min(580px,calc(100%_-_500px))] md:pt-[64px]"
      >
        <Rise show={phase >= 1} className="flex w-full justify-end">
          <UserMessage>
            How does the production order planning process in plant Munich deviate from SAP
            standard?
          </UserMessage>
        </Rise>

        <div className="flex w-full flex-col items-start gap-[24px]">
          <Rise show={phase >= 2} className="w-full">
            <ToolCalls>
              <AnimatePresence initial={false}>
                {!collapsed && (
                  <motion.div
                    key="list"
                    className="w-full overflow-clip"
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <ToolCallsList>
                      <ToolCallsItem status={phase >= 3 ? 'done' : 'running'}>
                        {phase >= 3 ? 'Searched for' : 'Searching for'} “production order planning
                        Munich plan...”
                      </ToolCallsItem>
                      <Grow show={phase >= 3} className="flex flex-col gap-[10px]">
                        <ToolCallsSeparator />
                        <ToolCallsItem status={phase >= 4 ? 'done' : 'running'}>
                          {phase >= 4 ? 'Analyzed enhancements' : 'Analyzing enhancements'} “What
                          enhancements exist for production plann...”
                        </ToolCallsItem>
                      </Grow>
                      <Grow show={phase >= 4} className="flex flex-col gap-[10px]">
                        <ToolCallsSeparator />
                        <ToolCallsItem status="running">Generating response</ToolCallsItem>
                      </Grow>
                    </ToolCallsList>
                  </motion.div>
                )}
                {collapsed && (
                  <motion.div
                    key="summary"
                    className="w-full overflow-clip"
                    initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.35, ease: EASE, delay: 0.15 }}
                  >
                    <ToolCallsSummary count={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </ToolCalls>
          </Rise>

          {phase >= 4 && (
            <div className="w-full">
              <AgentMessage>
                <AgentMessageText>
                  {streamWords(PARAGRAPH)}
                  {streamChunk(
                    <>
                      <span className="font-medium underline">{PARAGRAPH_CODE}</span>.
                    </>
                  )}
                </AgentMessageText>
                <AgentMessageHeading>{streamWords(HEADING)}</AgentMessageHeading>
                <AgentMessageLink>{streamWords(LINK)}</AgentMessageLink>
                <AgentMessageList className="ms-[21px]">
                  {streamItem(ITEM_BINS)}
                  {streamItem(ITEM_STOCK, () => (
                    <AgentMessageList className="ms-[21px]">
                      {SUB_ITEMS.map(item => streamItem(item))}
                    </AgentMessageList>
                  ))}
                  {streamItem(ITEM_PARAMS)}
                  {streamItem(ITEM_THRESHOLD)}
                </AgentMessageList>
              </AgentMessage>
            </div>
          )}
        </div>
      </div>

      {/* Fades the long response out beneath the CarouselCard overlay. */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--color-bg-gentle)] to-transparent md:h-40" />

      <AnimatePresence>
        {collapsed && !shouldReduceMotion && (
          <RestartButton key="restart" onClick={restart} className="absolute right-8 bottom-9" />
        )}
      </AnimatePresence>
    </div>
  );
}
