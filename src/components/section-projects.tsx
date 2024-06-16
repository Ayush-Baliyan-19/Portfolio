import { PropsWithChildren } from 'react';

import { MotionDiv } from './framer-motion';

import { siteConfig } from '@/lib/constant';

export const SectionProjects = ({ children }: PropsWithChildren) => {
  return (
    <section className="container mt-12 flex w-full max-w-3xl flex-col gap-4 bg-neutral-100 p-6 md:rounded-2xl dark:bg-neutral-900">
      {children}
    </section>
  );
};

export const SectionProjectsHeader = ({ children }: PropsWithChildren) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: siteConfig.animationDuration,
      }}
    >
      {children}
    </MotionDiv>
  );
};

export const SectionProjectsTitle = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="font-mono font-semibold text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  );
};

export const SectionProjectsDescription = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-base text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
};

export const SectionProjectsContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
  );
};
