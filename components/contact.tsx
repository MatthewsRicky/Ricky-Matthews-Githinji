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
			<p>
				Please contact me directly at
				<a
					className="undeerline"
					href="matthewsrickypro@gmail.com"
				>
					matthewsricky@gmail.com
				</a>
				or through this form.
			</p>
			<form className="mt-10 flex flex-col">
				<input
					type="email"
					className="h-14 rounded-lg border borderBlack"
				/>
				<textarea className="h-52 my-3 rounded-lg borderBlack p-4" />
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all"
				>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
				</button>
			</form>
		</section>
	);
}
