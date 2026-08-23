// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const skills = [
//   // Full-Production Software Engineering
//   "TypeScript",
//   "Medical Diagnostics",
//   "React",
//   "Node.js",
//   "Cell Culture & Slides",
//   "Go",
//   "Python",
//   "FastAPI",
//   "PostgreSQL",
//   "Docker",
//   "Tailwind CSS",
//   "REST APIs",
//   "CI/CD Pipelines",
//   "Alembic Migrations",

//   // Scientific Research & Health Tech

//   "Virology Assays",
//   "Clinical Laboratory Science",
//   "Data Analysis",
//   "Quantitative Modeling",
//   "Scientific Computing",
//   "Linear Algebra",
// ];

// export default function InfiniteSkillsScroll() {
//   const containerRef = useRef(null);

//   // Track page scroll progress relative to this section
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // Map vertical scroll (0 to 1) to horizontal translation (-30% to 0%)
//   const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
//   const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

//   return (
//     <section
//       ref={containerRef}
//       className="w-full bg-[#0B0E11] py-16 overflow-hidden border-y border-[#1E2329]"
//     >
//       <div className="flex flex-col gap-6">
//         {/* Row 1: Moves Left on Scroll */}
//         <motion.div
//           className="flex whitespace-nowrap gap-8"
//           style={{ x: xLeft }}
//         >
//           {[...skills, ...skills, ...skills].map((skill, index) => (
//             <div key={index} className="flex items-center gap-8">
//               <span className="text-3xl sm:text-5xl font-mono font-bold text-gray-400 hover:text-white transition-colors cursor-default select-none">
//                 {skill}
//               </span>
//               <span className="w-2.5 h-2.5 rounded-full bg-[#00C076]" />
//             </div>
//           ))}
//         </motion.div>

//         {/* Row 2: Moves Right on Scroll */}
//         <motion.div
//           className="flex whitespace-nowrap gap-8"
//           style={{ x: xRight }}
//         >
//           {[...skills, ...skills, ...skills].reverse().map((skill, index) => (
//             <div key={index} className="flex items-center gap-8">
//               <span className="text-3xl sm:text-5xl font-mono font-bold text-gray-500 hover:text-white transition-colors cursor-default select-none">
//                 {skill}
//               </span>
//               <span className="w-2.5 h-2.5 rounded-full bg-[#00C076]" />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  // Full-Production Software Engineering
  "TypeScript",
  "Medical Diagnostics",
  "React",
  "Node.js",
  "Cell Culture & Slides",
  "Go",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "REST APIs",
  "CI/CD Pipelines",
  "Alembic Migrations",

  // Scientific Research & Health Tech
  "Virology Assays",
  "Clinical Laboratory Science",
  "Data Analysis",
  "Quantitative Modeling",
  "Scientific Computing",
  "Linear Algebra",
];

export default function InfiniteSkillsScroll() {
  const containerRef = useRef(null);

  // Track page scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map vertical scroll (0 to 1) to horizontal translation (-30% to 0%)
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#090D12] py-16 overflow-hidden border-y border-[#1C2430]"
    >
      <div className="flex flex-col gap-6">
        {/* Row 1: Moves Left on Scroll */}
        <motion.div
          className="flex whitespace-nowrap gap-8"
          style={{ x: xLeft }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl font-mono font-bold text-gray-400 hover:text-white transition-colors cursor-default select-none">
                {skill}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E28743]" />
            </div>
          ))}
        </motion.div>

        {/* Row 2: Moves Right on Scroll */}
        <motion.div
          className="flex whitespace-nowrap gap-8"
          style={{ x: xRight }}
        >
          {[...skills, ...skills, ...skills].reverse().map((skill, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl font-mono font-bold text-gray-500 hover:text-white transition-colors cursor-default select-none">
                {skill}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E28743]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
