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
			<body className={`${inter.className} bg-slate-50 text-slate-950`}>
				<div className="bg-[#fbe2e3] absolute"></div>
				<div></div>

				{children}
			</body>
		</html>
	);
}
