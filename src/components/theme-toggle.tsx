'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="size-[34px] rounded p-2 text-neutral-800 dark:text-neutral-400"
    >
      <Sun
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        size={20}
        strokeWidth={1.5}
      />
      <Moon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={20}
        strokeWidth={1.5}
      />
    </Button>
  );
};
