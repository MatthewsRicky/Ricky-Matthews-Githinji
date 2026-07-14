import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import potassium from "@/public/potassium.jpg";
import milestonePreview from "@/public/milestonevid2.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  // 	name: "Experience",
  // 	hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

const flickerGallery = [
  {
    type: "image" as const,
    src: "/flickermoods.jpg",
    alt: "Flicker Light mood board",
    caption: "Mood board for the candle-light themes and color palette.",
  },
  {
    type: "image" as const,
    src: "/flickersettings.jpg",
    alt: "Flicker Light settings screen",
    caption: "Settings flow for adjusting the flame behavior and intensity.",
  },
  {
    type: "image" as const,
    src: "/flickerwarm.jpg",
    alt: "Flicker Light warm mood preview",
    caption: "Warm lighting preview created for the experience.",
  },
  {
    type: "video" as const,
    src: "/flickervid1.mp4",
    alt: "Flicker Light demo video one",
    caption: "A short demo showing the candle flicker animation.",
  },
  {
    type: "video" as const,
    src: "/flickervid2.mp4",
    alt: "Flicker Light demo video two",
    caption: "A second demo highlighting different flame styles.",
  },
] as const;

const milestonesGallery = [
  {
    type: "image" as const,
    src: "/Screenshot_2026-07-07-20-16-20-858_com.mvnk.milestones.jpg",
    alt: "Milestones dashboard preview",
    caption: "Dashboard overview of the Milestones experience.",
  },
  {
    type: "image" as const,
    src: "/Screenshot_2026-07-07-20-16-28-072_com.mvnk.milestones.jpg",
    alt: "Milestones task creation flow",
    caption: "Task creation and milestone planning UI.",
  },
  {
    type: "image" as const,
    src: "/Screenshot_2026-07-07-20-18-12-102_com.mvnk.milestones.jpg",
    alt: "Milestones progress tracking view",
    caption: "Progress tracking view for staying on top of team goals.",
  },
  {
    type: "video" as const,
    src: "/milestonevid1.mp4",
    alt: "Milestones demo video one",
    caption: "Walkthrough of the planner and milestone workflow.",
  },
  {
    type: "video" as const,
    src: "/milestonevid2.mp4",
    alt: "Milestones demo video two",
    caption: "A second showcase of the task and journal experience.",
  },
  {
    type: "video" as const,
    src: "/milestonevid3.mp4",
    alt: "Milestones demo video three",
    caption: "A quick preview of the app's progress tracking flow.",
  },
] as const;

export const projectsData = [
  {
    title: "Flicker Light",
    description:
      "I built a Flicker Light application to mimmick the flickering of a candle flame based on different elemental properties.",
    tags: ["React", "ReactNative", "Expo", "Tailwind", "Typscript"],
    imageUrl: potassium,
    galleryItems: flickerGallery,
  },
  {
    title: "Milestones",
    description:
      "High level organizer application that allows users to create and manage milestones for their projects. It provides a visual representation of progress and helps teams stay on track. Includes features such as task assignment, due dates, journal, tasks and progress tracking.",
    tags: ["ReactNative", "TypeScript", "Expo", "firebase"],
    imageUrl: milestonePreview,
    galleryItems: milestonesGallery,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactNative",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;

export const projectGalleryData = {
  "Flicker Light": flickerGallery,
  Milestones: milestonesGallery,
} as const;
