"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import ProjectGallery from "./projectGallery";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
      <motion.div
        style={{
          scale: scaleProgress,
          opacity: scrollYProgress,
        }}
        ref={ref}
        className="mb-3 sm:mb-8 last:mb-0 group"
      >
        <section
          role="button"
          tabIndex={0}
          onClick={() => setIsGalleryOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsGalleryOpen(true);
            }
          }}
          className="relative mb-28 max-w-[42rem] cursor-pointer overflow-hidden rounded-lg border border-black/5 bg-slate-100 transition hover:bg-slate-200 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8 dark:bg-slate-50/20 dark:text-slate-50 dark:hover:bg-slate-50/30"
        >
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-50/70">
              {description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  className="mt-4 flex flex-row flex-wrap gap-2 rounded-full bg-black/[0.7] px-3 text-[0.7] uppercase tracking-wider text-white sm:mt-auto dark:text-slate-50/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsGalleryOpen(true);
              }}
              className="mt-4 inline-flex w-fit items-center rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              View gallery
            </button>
          </div>

          <Image
            className="absolute top-8 -right-40 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition hover:scale-[1.05] group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:group-even:translate-x-3 group-hover:group-even:translate-y-3 group-hover:group-even:rotate-2 dark:shadow-slate-500/70 sm:block"
            src={imageUrl}
            alt={`${title} preview`}
            quality={95}
          />
        </section>
      </motion.div>

      {isGalleryOpen ? (
        <ProjectGallery
          projectTitle={title}
          onClose={() => setIsGalleryOpen(false)}
        />
      ) : null}
    </>
  );
}
