"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView("Skills");
	return (
		<section
			id="skills"
			ref={ref}
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
		>
			<SectionHeading>My Skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800">
				{skillsData.map((skill, index) => (
					<motion.li
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
						className="bg-white dark:bg-slate-50/10 dark:text-slate-50/80 borderBlack px-6 py-3 rounded-lg"
						key={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
