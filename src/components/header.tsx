"use client";
import { PropsWithChildren } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { MotionHeader } from "./framer-motion";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

import { siteConfig } from "@/lib/constant";
import { cn } from "@/lib/utils";

type THeaderProps = PropsWithChildren<{
  themeToggle?: boolean;
}>;

export const Header = ({ themeToggle = false, children }: THeaderProps) => {
  const { theme } = useTheme();
  return (
    <MotionHeader
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: siteConfig.animationDuration, ease: "easeOut" }}
      className="container mb-8 flex w-full max-w-3xl items-center justify-between"
    >
      {/* <Icons.logo className="size-16 overflow-visible rounded-full border p-2 text-neutral-500 dark:text-neutral-400" /> */}
      <div className="flex items-center gap-4">
        <Image
          src={
            theme === "light" ? "/images/Me-Light.webp" : "/images/Me-Dark.webp"
          }
          className="h-auto w-16 rounded-full border p-2 text-neutral-500 dark:text-neutral-400"
          width={64}
          height={64}
          alt="Myself"
        />
        {/* <Icons.logo className="h-auto w-16 overflow-visible text-neutral-700 dark:text-neutral-300" /> */}

        <div className="flex flex-col">{children}</div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            window.open("/Resume.pdf", "_blank");
          }}
          className="flex items-center justify-center gap-2 rounded p-2 text-neutral-800 dark:text-neutral-400"
        >
          <Icons.resume className=" text-neutral-500 dark:text-neutral-400" />
          Resume
        </Button>
        {themeToggle ? <ThemeToggle /> : null}
      </div>
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
        "flex font-mono text-2xl font-semibold leading-6 tracking-tight text-neutral-900 dark:text-neutral-100",
        className,
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
        "text-sm font-medium text-neutral-500 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
};
