import { PropsWithChildren } from 'react';
import { ExternalLink } from 'lucide-react';

import { MotionA } from './framer-motion';
import { Icons } from './icons';

import { siteConfig } from '@/lib/constant';

type TLinkBtnProps = PropsWithChildren<{
  icon: keyof typeof Icons;
  label: string;
  link: string;
  animDelay?: number;
}>;

export const LinkBtn = ({
  icon,
  label,
  link,
  animDelay,
  children,
}: TLinkBtnProps) => {
  const Icon = Icons[icon];

  return (
    <MotionA
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: siteConfig.animationDuration,
        delay: animDelay,
      }}
      className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 text-sm font-medium shadow-sm outline-none transition-colors duration-100 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
      href={link}
      target="_blank"
      title={label}
    >
      <Icon className="size-4" />
      <span className="text-neutral-950 dark:text-neutral-50">{children}</span>
      <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">
        {label}
      </span>
      <ExternalLink className="size-3 text-neutral-400 dark:text-neutral-500" />
    </MotionA>
  );
};
