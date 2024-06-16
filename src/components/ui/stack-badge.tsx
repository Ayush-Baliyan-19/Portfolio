import { PropsWithChildren } from 'react';

import { Icons } from '@/components/icons';

type TStacktBadgeProps = PropsWithChildren<{
  icon: keyof typeof Icons;
}>;

export const StackBadge = ({ icon, children }: TStacktBadgeProps) => {
  const Icon = Icons[icon];

  return (
    <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <Icon className="mr-1 inline-flex size-3" />
      {children}
    </span>
  );
};
