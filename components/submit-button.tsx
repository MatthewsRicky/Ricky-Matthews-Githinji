import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105"
		>
			{pending ? (
				<div></div>
			) : (
				<>
					Submit{" "}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
				</>
			)}
		</button>
	);
}
