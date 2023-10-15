"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	return (
		<section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-slate-700 -mt-6">
				Please contact me directly at{" "}
				<a
					className="underline"
					href="matthewsrickypro@gmail.com"
				>
					matthewsricky@gmail.com
				</a>
				or through this form.
			</p>
			<form className="mt-10 flex flex-col">
				<input
					type="email"
					className="h-14 rounded-lg border borderBlack p-4"
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
					placeholder="Your Message"
				/>
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105"
				>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
				</button>
			</form>
		</section>
	);
}
