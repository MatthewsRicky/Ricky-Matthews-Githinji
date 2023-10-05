import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Ricky Matthews Githinji",
	description: "Frontend Developer, Graphic Designer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-slate-50 text-slate-950 relative h-[5000px] pt-28 sm:pt-32`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.35rem] sm:w-[65.75rem] rounded-full blur-[10rem]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] sm:w-[65.75rem] rounded-full blur-[10rem] md:left[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<Header />
				{children}
			</body>
		</html>
	);
}
