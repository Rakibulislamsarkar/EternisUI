import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@/components/website/icons/github';
import { ChevronRight } from 'lucide-react';
import { Features } from '@/components/section/features';
import { MainFeatures } from '@/components/section/mainfeature';
import { ExamplesNav } from '@/components/section/examples-nav';

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
      <div className='px-6 py-4 pb-20'>
        <section className='flex h-full flex-col justify-center border-b pb-10 pt-10 dark:border-white/10'>
          <span className='mb-4 mt-2 text-start text-xs text-zinc-500 dark:text-zinc-400 md:text-sm'>
            Free regular updates and new components added.
          </span>
          <div className='flex w-full max-w-xl flex-col items-center justify-center text-start'>
            <h1 className='relative mb-4 text-4xl font-medium text-zinc-950 dark:text-zinc-50'>
              UI kit for faster creation of stunning, animated interfaces.
            </h1>
            <p className='text-start text-zinc-600 dark:text-zinc-200'>
              Beautiful components. Copy-paste ready, customizable, open-source,
              and designed for engineers and designers.
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
        <section>
          <Features />
        </section>
        <section>
        <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav className="[&>a:first-child]:text-primary" />
          </div>
        </div>
      </div>
        </section>

      </div>
    </>
  );
}
