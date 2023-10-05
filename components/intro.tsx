"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
	return (
		<section>
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
		</section>
	);
}
