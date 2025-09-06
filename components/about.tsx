"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import SectionDivider from "./section-divider";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");
	return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having taken a few courses early on, I decided to pursue my passion for
        programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">
          full-stack web development and App development with reacNative
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, ReactNative, Next.js, Node.js, and MongoDB/Prisma/Appwrite
        </span>
        I develop using typscript as well as tailwind for the wbe development
        and native wind for the ReactNative app development. I Expo as well. I
        am always looking to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as an app
        developer or web developer.
      </p>
      <p>
        <span className="italic">When I`&apos;`m not coding</span>, I enjoy
        cycling, I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          playing guitar and the occasional gaming
        </span>{" "}
        (My interest in gaming also extends to the gaming industry being an
        adjacent technology.).
      </p>
      <motion.div
        initial={{ scale: 0.5, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.18,
        }}
        className="flex w-[50%] justify-between mx-auto items-center"
      >
        <SectionDivider />
        <SectionDivider />
      </motion.div>
    </motion.section>
  );
}
