import { PropsWithChildren } from 'react';

import { MotionHeader } from './framer-motion';
import { Icons } from './icons';
import { ThemeToggle } from './theme-toggle';

import { siteConfig } from '@/lib/constant';
import { cn } from '@/lib/utils';

type THeaderProps = PropsWithChildren<{
  themeToggle?: boolean;
}>;

export const Header = ({ themeToggle = false, children }: THeaderProps) => {
  return (
    <MotionHeader
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: siteConfig.animationDuration, ease: 'easeOut' }}
      className="container mb-8 flex items-center justify-between"
    >
      {/* <Icons.logo className="size-16 overflow-visible rounded-full border p-2 text-neutral-500 dark:text-neutral-400" /> */}
      <div className="flex items-center gap-4">
        <Icons.logo className="h-auto w-16 overflow-visible text-neutral-700 dark:text-neutral-300" />

        <div className="flex flex-col">{children}</div>
      </div>
      {themeToggle ? <ThemeToggle /> : null}
    </MotionHeader>
  );
};

export const HeaderHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        'flex font-mono text-2xl font-semibold leading-6 tracking-tight text-neutral-900 dark:text-neutral-100',
        className
      )}
      {...props}
    />
  );
};

export const HeaderDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <p
      className={cn(
        'text-sm font-medium text-neutral-500 dark:text-neutral-400',
        className
      )}
      {...props}
    />
  );
};
