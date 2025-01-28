import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@/components/website/icons/github';
import { ChevronRight } from 'lucide-react';
import { Features } from '@/components/section/features';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/registry/ui/card';
import { SubscribeBottom } from '@/components/section/subscribe-form';

type TestimonialProps = {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
};

const testimonials: TestimonialProps[] = [
  {
    name: 'Sarah Chen',
    role: 'Senior Developer',
    content:
      'This UI library has saved me countless hours. The components are well-designed and the documentation is excellent.',
    avatarUrl: '/avatar/01.png',
  },
  {
    name: 'Alex Thompson',
    role: 'Tech Lead',
    content:
      'The accessibility features are top-notch. Every component works perfectly with screen readers and keyboard navigation.',
    avatarUrl: '/avatar/02.png',
  },
  {
    name: 'Maria Garcia',
    role: 'Frontend Engineer',
    content:
      'The customization options are incredible. I can easily match our brand guidelines without sacrificing functionality.',
    avatarUrl: '/avatar/03.png',
  },
];

function TestimonialCard({ name, role, content, avatarUrl }: TestimonialProps) {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-4'>
          <img
            alt={`${name}'s avatar`}
            className='rounded-full'
            height='40'
            src={avatarUrl || '/avatar/01.png'}
            width='40'
          />
          <div className='flex flex-col'>
            <CardTitle className='text-base'>{name}</CardTitle>
            <p className='text-zinc-500 dark:text-zinc-400 text-xs'>{role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className='text-sm'>{content}</CardContent>
    </Card>
  );
}

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
          <div className='container-wrapper'>
            <div className='container py-6'>
              <section className='bg-background overflow-hidden rounded-lg border shadow-md md:hidden md:shadow-xl'>
                <Image
                  src='/examples/cards-light.png'
                  width={1280}
                  height={1214}
                  alt='Cards'
                  className='block dark:hidden'
                />
                <Image
                  src='/examples/cards-dark.png'
                  width={1280}
                  height={1214}
                  alt='Cards'
                  className='hidden dark:block'
                />
              </section>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className='container py-8 md:py-1 lg:py-2'>
          <div className='flex flex-col  justify-center gap-4'>
            <h2 className='font-heading text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-6xl'>
              Loved by developers
            </h2>
            <p className='max-w-[85%] leading-normal sm:text-base sm:leading-7'>
              Here's what our community has to say about our components.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4 py-8 md:grid-cols-3 md:gap-8'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        <SubscribeBottom />
      </div>
    </>
  );
}
