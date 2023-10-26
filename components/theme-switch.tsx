"use client";

import React, { useState } from "react";
import { BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState("light");

	return (
		<button
			className="fixed bottom-10 right-10 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all"
			onAuxClickCapture={() => {}}
		>
			<BsSun />
		</button>
	);
}
