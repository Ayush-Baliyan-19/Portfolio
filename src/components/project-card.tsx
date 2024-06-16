/* eslint-disable jsx-a11y/alt-text */
import React, { PropsWithChildren } from 'react';
import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';

import { MotionArticle } from './framer-motion';
import { buttonVariants } from './ui/button';
import { WobbleCard } from './ui/wobble-card';

import { siteConfig } from '@/lib/constant';
import { cn } from '@/lib/utils';

type TProjectCardProps = PropsWithChildren<{
  animDelay?: number;
}>;

export const ProjectCard = ({ animDelay, children }: TProjectCardProps) => {
  return (
    <MotionArticle
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'just',
        duration: siteConfig.animationDuration,
        ease: 'easeOut',
        delay: animDelay,
      }}
      className=""
    >
      <WobbleCard containerClassName="flex w-full flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-800">
        {children}
      </WobbleCard>
    </MotionArticle>
  );
};

export const ProjectCardImage = (props: ImageProps) => {
  return (
    <div className="h-32 w-full overflow-hidden rounded-xl object-fill">
      <Image {...props} />
    </div>
  );
};

export const ProjectCardContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-1 flex-col justify-between gap-3">{children}</div>
  );
};

export const ProjectCardTextContent = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export const ProjectCardTitle = ({ children }: PropsWithChildren) => {
  return (
    <h4 className="text-base font-medium text-neutral-800 dark:text-neutral-100">
      {children}
    </h4>
  );
};

export const ProjectCardDescription = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-sm text-neutral-500 dark:text-neutral-400">{children}</p>
  );
};

export const ProjectCardFooter = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

export const ProjectCardLinks = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

type TProjectCardLinkProps = LinkProps &
  PropsWithChildren & {
    variant?: 'primary' | 'secondary';
  };

export const ProjectCardLink = (props: TProjectCardLinkProps) => {
  return (
    <Link {...props}>
      {props.variant === 'secondary' ? (
        <p className="flex cursor-pointer items-center text-sm text-neutral-400 underline transition-colors duration-100 ease-in-out hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-300">
          {props.children}
        </p>
      ) : (
        <p className={cn(buttonVariants({ size: 'xs' }), 'flex items-center')}>
          {props.children}
        </p>
      )}
    </Link>
  );
};
