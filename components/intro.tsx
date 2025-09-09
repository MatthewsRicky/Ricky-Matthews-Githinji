// "use client";

// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
// import { FaGithubSquare } from "react-icons/fa";
// import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

// export default function Intro() {
//   const { ref } = useSectionInView("Home", 0.5);
//   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

//   return (
//     <section
//       ref={ref}
//       className="mb-28 max-w-[50rem] sm:mb-0 text-center scroll-mt-[100rem]"
//       id="home"
//     >
//       <div className="flex items-center justify-center">
//         <div className="relative">
//           <motion.div
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ type: "tween", duration: 0.2 }}
//           >
//             <Image
//               src="/me.JPG"
//               alt="Ricky Matthews Githinji"
//               height={192}
//               width={192}
//               quality={95}
//               priority={true}
//               className="rounded-full object-cover shadow-xl h-24 w-24 border-[0.35] border-white"
//             />
//           </motion.div>

//           <motion.span
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               type: "spring",
//               stiffness: 125,
//               delay: 0.1,
//               duration: 0.7,
//             }}
//             className="absolute bottom-0 right-0 text-4xl"
//           >
//             👋🏽
//           </motion.span>
//         </div>
//       </div>
//       <motion.p
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mb-10 mt-4 px-4 text-2xl font medium !leading-[1.5] sm:text-4xl"
//       >
//         Hi, I&apos;m <span className="text-[gold]">Ricky</span>{" "}
//         <span className="font-bold">
//           Full-stack web developer, app developer & Graphic Designer
//         </span>{" "}
//         based in Kenya. I enjoy building{" "}
//         <span className="italic">sites, apps & components</span>. My focus is{" "}
//         <span className="underline">React (Next.js) | ReactNative & Expo</span>
//       </motion.p>
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.15 }}
//         className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
//       >
//         <Link
//           href="#contact"
//           className=" group bg-slate-900 flex text-white px-7 items-center py-3 gap-3 rounded-full focus:scale-110 outline-none hover:scale-110 hover:bg-slate-950 active:scale-105 transition"
//           onClick={() => {
//             setActiveSection("Contact");
//             setTimeOfLastClick(Date.now());
//           }}
//         >
//           Contact me here{" "}
//           <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition " />
//         </Link>
//         <a
//           href="/CV.pdf"
//           download={true}
//           className="group bg-white flex px-7 items-center py-3 gap-3 rounded-full focus:scale-110 outline-none hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-slate-50/10 dark:text-slate-50/60"
//         >
//           Download CV{" "}
//           <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="blank"
//           className="group bg-white text-slate-700 flex p-4 items-center gap-3 rounded-full focus:scale-[1.15] outline-none hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition border border-black/10 dark:bg-slate-50/10 dark:text-slate-50/60"
//         >
//           <BsLinkedin />
//         </a>
//         <a
//           href="https://github.com"
//           target="blank"
//           className="group bg-white text-slate-700 flex p-4 items-center gap-3 rounded-full focus:scale-[1.15] outline-none hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition border border-black/10 dark:bg-slate-50/10 dark:text-slate-50/60"
//         >
//           <FaGithubSquare />
//         </a>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] sm:mb-0 text-center scroll-mt-[100rem]"
      id="home"
    >
      {/* Avatar with animation */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/me.JPG"
              alt="Ricky Matthews Githinji"
              height={192}
              width={192}
              quality={95}
              priority={true}
              className="rounded-full object-cover shadow-xl h-24 w-24 border-[0.35rem] border-white border-opacity-20 backdrop-blur-lg"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋🏽
          </motion.span>
        </div>
      </div>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
      >
        Hi, I&apos;m <span className="text-[gold]">Ricky</span>, a{" "}
        <span className="font-bold">full-stack web &amp; app developer</span>{" "}
        based in Kenya. I specialize in{" "}
        <span className="underline">React (Next.js)</span>,{" "}
        <span className="underline">React Native &amp; Expo</span>, with styling
        powered by <span className="italic">Tailwind &amp; NativeWind</span>. On
        the backend, I work with{" "}
        <span className="font-semibold">Appwrite, Supabase &amp; Prisma</span>.
        I love <span className="italic">creative problem-solving</span> and
        I&apos;m currently exploring{" "}
        <span className="font-semibold">
          Data Structures and Algorithms with Python
        </span>{" "}
        and <span className="font-semibold">game development</span>.
      </motion.p>

      {/* Call-to-action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-slate-900 flex text-white px-7 items-center py-3 gap-3 rounded-full focus:scale-110 outline-none hover:scale-110 hover:bg-slate-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white flex px-7 items-center py-3 gap-3 rounded-full focus:scale-110 outline-none hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-slate-50/10 dark:text-slate-50/60"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white text-slate-700 flex p-4 items-center gap-3 rounded-full focus:scale-[1.15] outline-none hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition border border-black/10 dark:bg-slate-50/10 dark:text-slate-50/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white text-slate-700 flex p-4 items-center gap-3 rounded-full focus:scale-[1.15] outline-none hover:scale-[1.15] hover:text-slate-950 active:scale-105 transition border border-black/10 dark:bg-slate-50/10 dark:text-slate-50/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
