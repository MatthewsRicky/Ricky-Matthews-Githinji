"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	return (
		<section
			ref={ref}
			id="contacts"
		>
			Contact Me
		</section>
	);
}
