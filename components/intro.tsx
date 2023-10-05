"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] sm:mb-0 text-center">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.2 }}
					>
						<Image
							src="/me.jpg"
							alt="Ricky Matthews Githinji"
							height={192}
							width={192}
							quality={95}
							priority={true}
							className="rounded-full object-cover shadow-xl h-24 w-24 border-[0.35] border-white"
						/>
					</motion.div>

					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
						className="absolute bottom-0 right-0 text-4xl"
					>
						👋🏽
					</motion.span>
				</div>
			</div>

			<p className="mb-10 mt-4 px-4 text-2xl font medium !leading-[1.5] sm:text-4xl">
				<span className="font-bold">Hi, I'm Ricky,</span> a{" "}
				<span className="font-bold">
					Front-end Developer & Graphic Designer
				</span>
				based in Kenya. I enjoy building{" "}
				<span className="italic">sites & apps</span>. My focus is{" "}
				<span className="underline">React (Next.js)</span>
			</p>
		</section>
	);
}
