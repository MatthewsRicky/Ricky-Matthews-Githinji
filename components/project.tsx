"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			style={{
				scale: scaleProgress,
				opacity: scrollYProgress,
			}}
			ref={ref}
			className="mb-3 sm:mb-8 last:mb-0 group"
		>
			<section className="bg-slate-100 hover:bg-slate-200 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] rounded-lg relative group-even:pl-8 transition mb-28 dark:bg-slate-50/20 dark:hover:bg-slate-50/30 dark:text-slate-50">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-50/70">
						{description}
					</p>
					<ul className="flex flex-wrap mt-4 gap-2">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 text-[0.7] uppercase tracking-wider text-white rounded-full flex flex-row flex-wrap mt-4 gap-2 sm:mt-auto dark:text-slate-50/70"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<Image
					className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] hover:scale-[1.05] rounded-t-lg shadow-2xl dark:shadow-slate-500/70 group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 transition group-hover:group-even:translate-x-3 group-hover:group-even:translate-y-3 group-hover:group-even:rotate-2"
					src={imageUrl}
					alt="project I worked on"
					quality={95}
				/>
			</section>
		</motion.div>
	);
}
