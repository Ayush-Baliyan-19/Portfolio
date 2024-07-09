import React, { PropsWithChildren } from "react";

import { MotionH3, MotionP } from "./framer-motion";

import { siteConfig } from "@/lib/constant";

export const SectionAPropos = ({ children }: PropsWithChildren) => {
  return (
    <section className="container flex w-full max-w-3xl flex-col gap-4">
      {children}
    </section>
  );
};

export const SectionAProposTitle = ({ children }: PropsWithChildren) => {
  return (
    <MotionH3
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "just",
        duration: siteConfig.animationDuration,
        ease: "easeOut",
      }}
      className="font-mono font-semibold text-neutral-800 dark:text-neutral-200"
    >
      {children}
    </MotionH3>
  );
};

type TSectionAProposTextProps = PropsWithChildren<{
  animDirection?: "left" | "right";
}>;

export const SectionAProposText = ({
  animDirection,
  children,
}: TSectionAProposTextProps) => {
  return (
    <MotionP
      initial={{ opacity: 0, x: animDirection === "left" ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "just",
        duration: siteConfig.animationDuration,
        ease: "easeOut",
      }}
      className="flex flex-col gap-3 leading-7 text-neutral-500 dark:text-neutral-400"
    >
      {children}
    </MotionP>
  );
};

export const SectionAProposLinks = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {children}
    </div>
  );
};
