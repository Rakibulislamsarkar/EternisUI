import Link from 'next/link';
import React from 'react';
import { MorphingDialogBasicOne } from '@/app/docs/morphing-dialog/morphing-dialog-basic-1';
import GitHubIcon from '@/components/website/icons/github';
import Popover from '@/components/core/popover';
import { ChevronRight } from 'lucide-react';
import { CardExampleLanding } from '@/components/website/card-example-landing';
import { AnimatedGroupPreset } from '@/app/docs/animated-group/animated-group-preset';
import { InViewImagesGrid } from '@/app/docs/in-view/in-view-images-grid';
import { InfiniteSliderHoverSpeed } from '@/app/docs/infinite-slider/infinite-slider-hover-speed';
import { Cursor1 } from '@/app/docs/cursor/cursor-1';
import { SegmentedControl } from '@/app/docs/animated-background/segmented-control';
import { TextLoopBasic } from './docs/text-loop/text-loop-basic';
import { TextShimmerBasic } from './docs/text-shimmer/text-shimmer-basic';
import { BorderTrailCard1 } from './docs/border-trail/border-trail-card-1';
import { TextEffectSpeed } from './docs/text-effect/text-effect-speed';
import { TextScrambleBasic } from './docs/text-scramble/text-scramble-basic';
import MainNav from '@/components/website/main-nav';

function Button({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const buttonVariants = {
    primary:
      'bg-zinc-50 border border-zinc-100 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-50 dark:border-zinc-900',
    secondary:
      'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950',
  };

  return (
    <button
      className={`inline-flex items-center rounded-md px-2.5 py-1.5 text-sm ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}

export default function Motion() {
  return (
    <>
      <MainNav />
      <div className='px-6 py-4 pb-20'>
        <section className='flex h-full flex-col justify-center pt-10'>
          <span className='mb-4 mt-2 text-start text-xs text-zinc-500 dark:text-zinc-400 md:text-sm'>
          Free regular updates and new components added.
          </span>
          <div className='flex w-full max-w-xl flex-col items-center justify-center text-start'>
            <h1 className='relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50'>
            UI kit for faster creation of stunning, animated interfaces.
            </h1>
            <p className='text-start text-zinc-600 dark:text-zinc-200'>
            Beautiful components. Copy-paste ready, customizable, open-source, and designed for engineers and designers.
            </p>
          </div>
          <div className='flex items-center space-x-4 py-6'>
            <Link href='/docs'>
              <Button>
                Explore Docs
                <ChevronRight className='ml-1.5 h-4 w-4' />
              </Button>
            </Link>
            <a
              href='https://github.com/Rakibulislamsarkar/EternisUI'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant='secondary'>
                <GitHubIcon className='mr-1.5 h-4 w-4 fill-white dark:fill-zinc-950' />
                Star on GitHub
              </Button>
            </a>
          </div>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <MorphingDialogBasicOne />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding hasReTrigger>
            <AnimatedGroupPreset />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding
            className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'
            hasReTrigger
          >
            <TextEffectSpeed />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding hasReTrigger>
            <InViewImagesGrid />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding className='px-0'>
            <InfiniteSliderHoverSpeed />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <Cursor1 />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'>
            <TextLoopBasic />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'>
            <TextShimmerBasic />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding
            className='px-8 md:px-20 [&>div]:h-52 [&>div]:justify-start'
            hasReTrigger
          >
            <TextScrambleBasic />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <Popover />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <BorderTrailCard1 />
          </CardExampleLanding>
        </section>
        <section className='mx-auto max-w-3xl py-32'>
          <CardExampleLanding>
            <SegmentedControl />
          </CardExampleLanding>
        </section>
        <div className='text-center text-sm text-zinc-500 dark:text-zinc-400'>
          <Link href='/docs'>and more...</Link>
        </div>
      </div>
    </>
  );
}
