"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmails";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{
				duration: 1,
			}}
			viewport={{ once: true }}
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
					matthewsricky@gmail.com{""}
				</a>
				or through this form.
			</p>
			<form
				className="mt-10 flex flex-col"
				action={async (formData) => {
					console.log("Running on client");
					console.log(formData.get("senderEmail"));
					console.log(formData.get("senderMessage"));

					await sendEmail(formData);
				}}
			>
				<input
					id="email"
					type="email"
					name="senderEmail"
					className="h-14 rounded-lg border borderBlack p-4"
					required
					maxLength={500}
					placeholder="Your email"
				/>
				<textarea
					id="text"
					name="senderMessage
					"
					className="h-52 my-3 rounded-lg borderBlack p-4"
					placeholder="Your Message"
					required
					maxLength={500}
				/>
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105"
				>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
				</button>
			</form>
		</motion.section>
	);
}
