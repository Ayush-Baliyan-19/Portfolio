import { PropsWithChildren } from "react";

import { MotionDiv } from "./framer-motion";

import { siteConfig } from "@/lib/constant";

export const SectionExperience = ({ children }: PropsWithChildren) => {
  return (
    <section className="container mt-12 flex w-full max-w-3xl flex-col gap-4 p-6 pr-0 md:rounded-2xl">
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

export const SectionExperienceHeader = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export const SectionExperienceTitle = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="font-mono font-semibold text-neutral-800 dark:text-neutral-200">
      {children}
    </h3>
  );
};

export const SectionExperienceDescription = ({
  children,
}: PropsWithChildren) => {
  return (
    <p className="text-base text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
};

export const SectionExperienceContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg my-2 border-l-8">
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
