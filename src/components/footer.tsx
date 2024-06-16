import { ExternalLink } from 'lucide-react';

import { Icons } from './icons';

import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="container mt-12 flex flex-col items-center gap-16 leading-7 text-neutral-500 dark:text-neutral-400">
      <Button className="w-min rounded-xl" asChild>
        <a href="https://github.com/aBgAmeuR" target="_blank">
          <Icons.github className="mr-2 size-4" /> Voir plus de projets{' '}
          <ExternalLink className="ml-2 size-4" />
        </a>
      </Button>

      <span>
        © {new Date().getFullYear()} by{' '}
        <Button variant="link" className="p-0" asChild>
          <a href="https://github.com/aBgAmeuR">Antoine JOSSET</a>
        </Button>
        . All rights reserved.
      </span>
    </footer>
  );
};
