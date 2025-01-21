import { XIcon } from 'lucide-react';
import React from 'react';
import ThemeSwitch from './theme-switch';
import GitHubIcon from './icons/github';
import { EternisLogo } from './icons/eternisUI-logo';

const MainNav = () => {
  return (
    <header className='relative top-0 z-10 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0'>
      <div className='flex w-full items-center justify-between'>
        <a href='/' className='relative flex items-center space-x-2'>
          <EternisLogo className='h-6 w-auto' />
          <div className='text-sm font-medium text-zinc-950 dark:text-white'>
            eternisUI
          </div>
          <span className='mb-4 ml-2 select-none rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50'>
            beta
          </span>
        </a>
        <nav className='flex items-center'>
          <a
            href='https://github.com/Rakibulislamsarkar/EternisUI'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-9 w-9 items-center justify-center'
          >
            <GitHubIcon className='h-4 w-4 fill-zinc-950 dark:fill-white' />
          </a>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default MainNav;
