import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { MotionArticle } from "./framer-motion";
import { IconItem, IconsList } from "./ui/icons-list";

import { siteConfig } from "@/lib/constant";
interface ModalInterface {
  img: string | StaticImport;
  companyName: string;
  role: string;
  description: string | descriptionType;
  timePeriod: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tech: any[];
}
type descriptionType = {
  [key: string]: string;
};
const ExpCard: React.FC<ModalInterface> = ({
  img,
  companyName,
  role,
  description,
  timePeriod,
  tech,
}) => {
  return (
    <MotionArticle
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "just",
        duration: siteConfig.animationDuration,
        ease: "easeOut",
        delay: 0.1,
      }}
      className="relative right-8 my-5 flex w-[93vw] text-xs lg:w-full"
    >
      <Image
        src={img}
        height={100}
        width={100}
        alt="ll"
        className="size-14 rounded-full border-4 bg-[#f5f5f5] dark:bg-[#1e1e1f]"
      />
      <div className="ml-3 flex w-full flex-col rounded-xl bg-[#d8d8d8] px-2 py-4 lg:px-6 dark:bg-[#262627]">
        <div className="my-2 flex justify-between">
          <div className="flex w-7/12 flex-col">
            <div className="flex flex-wrap gap-3">
              <h1 className="text-lg font-[700]">{companyName}</h1>
              <IconsList>
                {tech.length > 0 &&
                  tech.map((techItem, index) => {
                    return <IconItem icon={techItem} key={index} />;
                  })}
              </IconsList>
            </div>
            <h2 className="text-sky-600 lg:font-[600] lg:tracking-[0.3px] dark:text-sky-500">
              {role}
            </h2>
          </div>
          <p className="flex items-center ">
            {timePeriod.length > 1
              ? `${timePeriod[0]}-${timePeriod[1]}`
              : timePeriod[0]}
          </p>
        </div>

        {typeof description === "object" ? (
          <>
            {Object.keys(description).map((key: string, index) => {
              return (
                <div key={index}>
                  <h1 className="font-[700]">{key}</h1>
                  <p className="px-2 tracking-[0.5px] text-gray-700 dark:text-gray-400">
                    {description[key]}
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <p className="px-2 tracking-[0.5px] text-gray-700 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    </MotionArticle>
  );
};

export default ExpCard;
