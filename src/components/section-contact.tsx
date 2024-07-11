import { PropsWithChildren } from "react";

import { MotionDiv } from "./framer-motion";

import { siteConfig } from "@/lib/constant";

export const SectionContact = ({ children }: PropsWithChildren) => {
  return (
    <section className="container mt-12 flex w-full max-w-3xl flex-col gap-4 bg-neutral-100 p-6 md:rounded-2xl dark:bg-neutral-900">
      <MotionDiv
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: siteConfig.animationDuration,
        }}
      >
        {children}
      </MotionDiv>
    </section>
  );
};

export const SectionContactHeader = ({ children }: PropsWithChildren) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: siteConfig.animationDuration,
      }}
    >
      {children}
    </MotionDiv>
  );
};

export const SectionContactTitle = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="font-mono font-semibold text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  );
};

export const SectionContactDescription = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-base text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
};

export const SectionContactContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="my-2">
      <MotionDiv
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: siteConfig.animationDuration,
        }}
      >
        {children}
      </MotionDiv>
    </div>
  );
};
