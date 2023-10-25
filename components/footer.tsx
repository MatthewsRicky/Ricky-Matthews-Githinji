import React from "react";

export default function Footer() {
	return (
		<footer className="flex flex-col mb-10 px-4 text-center justify-center items-center text-slate-500">
			<small className="mb-2 block text-xs">
				&copy; 2023 Ricky Matthews Githinji. All rights reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website: </span>built with
				React & Next.js(App Router & Server Actions), Typscript, Tailwind CSS,
				Framer Motion, React Email & Resend, Vercel Hosting.
			</p>
		</footer>
	);
}
