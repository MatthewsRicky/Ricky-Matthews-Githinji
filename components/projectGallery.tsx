"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectGalleryData } from "@/lib/data";

type GalleryItem =
  (typeof projectGalleryData)[keyof typeof projectGalleryData][number];

type ProjectGalleryProps = {
  projectTitle: string;
  onClose: () => void;
};

export default function ProjectGallery({
  projectTitle,
  onClose,
}: ProjectGalleryProps) {
  const galleryItems =
    projectGalleryData[projectTitle as keyof typeof projectGalleryData] ?? [];

  if (!galleryItems.length) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Project gallery
            </p>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              {projectTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        <div className="grid max-h-[75vh] gap-4 overflow-y-auto md:grid-cols-2">
          {galleryItems.map((item: GalleryItem, index: number) => (
            <div
              key={`${item.src}-${index}`}
              className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70"
            >
              {item.type === "video" ? (
                <video
                  className="h-64 w-full rounded-lg object-cover"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="h-64 w-full rounded-lg object-cover"
                />
              )}
              {item.caption ? (
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {item.caption}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
