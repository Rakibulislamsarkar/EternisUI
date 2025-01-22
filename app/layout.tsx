import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';
import { SiteFooter } from '@/components/website/site-footer';
import MainNav from '@/components/website/main-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EternisUI',
  description:
    'UI kit to make beautiful, animated interfaces, faster. Open-source and customizable.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang='en' suppressHydrationWarning>
      {!isDev ? (
        <Script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='17e8fc96-321d-43a6-94e7-d571c4c66a04'
        />
      ) : null}
      <body
        className={`${inter.className} ${GeistMono.variable} bg-white dark:bg-zinc-950`}
      >
        <ThemeProvider attribute='class'>
          <div data-wrapper='' className='border-grid flex flex-1 flex-col'>
            <MainNav />
            <main className='flex flex-1 flex-col'>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
