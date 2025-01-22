'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/registry/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/registry/ui/card';

const features = [
  {
    number: '01',
    title: 'Beautiful Components',
    description:
      "Beautiful components built with React, TypeScript, and Tailwind CSS. From buttons to complex data tables, we've got you covered with our battle-tested designs.",
    image: '/picture_1.webp',
  },
  {
    number: '02',
    title: 'Ready-to-use Templates',
    description:
      "Landing pages, dashboards, and app templates ready for production. From marketing sites to admin panels, we've got everything you need to ship products faster.",
    image: '/picture_3.webp',
  },
  {
    number: '03',
    title: 'Ship Faster',
    description:
      'Focus on your product, not on building UI components. From startups to enterprises, our battle-tested designs help you convert visitors into happy customers.',
    image: '/picture_4.webp',
  },
  
];

function FeatureCard({
  number,
  title,
  description,
  image,
  index,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      <Card className='group relative flex min-h-[400px] flex-col overflow-hidden border-none'>
        {/* Background Image */}
        <div
          className='absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110'
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 to-black/90' />

        {/* Content */}
        <div className='relative z-10 flex h-full flex-col justify-between'>
          <CardHeader className='p-6 pb-0'>
            <div className='mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-medium text-white backdrop-blur-sm'>
              {number}
            </div>
            <CardTitle className=   'text-lg text-white'>{title}</CardTitle>
          </CardHeader>
          <CardContent className='mt-auto p-6 pt-4'>
            <p className='text-sm text-white/70'>{description}</p>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className='container relative py-20'>
      <div className='mb-9 text-start'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className='mb-4 text-xl tracking-tight sm:max-w-xl sm:text-xl'>
            Build stunning products faster.
          </h2>
        </motion.div>
      </div>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.number} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}