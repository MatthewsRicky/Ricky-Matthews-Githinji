"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	return (
		<section
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
			<form className="mt-10">
				<input
					type="email"
					className="h-14 rounded-lg border border-black/10"
				/>
				<textarea />
				<button type="submit">
					Submit <FaPaperPlane />
				</button>
			</form>
		</section>
	);
}
