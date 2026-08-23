// import { motion } from "framer-motion";
// import heroBg from "../assets/screenbackground.jpg";
// import avatarImg from "../assets/avatar.jpg";

// export default function Home() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   return (
//     <section
//       className="relative w-full h-[calc(100vh-73px)] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       {/* Dark Radial Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E11] via-[#0B0E11]/80 to-[#0B0E11]/60" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
//       >
//         <motion.div variants={itemVariants} className="relative mb-6">
//           <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-[#00C076] to-teal-200 opacity-70 blur-[2px]" />

//           <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#1E2329] bg-[#0B0E11] shadow-xl">
//             <img
//               src={avatarImg}
//               alt="Your Name"
//               className="w-full h-full object-cover object-center scale-105" // scale-105 ensures no gaps, object-center keeps face centered
//             />
//           </div>
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C076]/10 border border-[#00C076]/30 text-[#00C076] text-xs font-mono font-medium tracking-wider mb-6"
//         >
//           <span className="w-2 h-2 rounded-full bg-[#00C076] animate-pulse" />
//           SOFTWARE ENGINEER & LAB SPECIALIST
//         </motion.div>

//         <motion.h1
//           variants={itemVariants}
//           className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
//         >
//           Building Systems at the Edge of <br className="hidden sm:inline" />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#00C076] to-teal-200">
//             Medicine, Software & Research
//           </span>
//         </motion.h1>

//         <motion.p
//           variants={itemVariants}
//           className="mt-6 text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-3xl"
//         >
//           I engineer scalable production systems using{" "}
//           <span className="text-white font-semibold">
//             React, Node, Go, and Python
//           </span>
//           . Formally trained in medical laboratory diagnostics and virology, I
//           bring scientific precision to complex software engineering, medical
//           research, and data-driven discoveries. Driven by high-impact problems,
//           I explore challenges across healthtech, scientific research,
//           quantitative computing, and full-stack applications. Outside of
//           engineering, I am deeply inspired by fine art and pure mathematics.
//         </motion.p>

//         <motion.div
//           variants={itemVariants}
//           className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
//         >
//           <motion.a
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             href="#work"
//             className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#00C076] hover:bg-[#00a364] text-black font-semibold font-mono text-sm tracking-wider transition-colors duration-200 shadow-lg shadow-[#00C076]/20 text-center"
//           >
//             SEE THE WORK
//           </motion.a>{" "}
//           <motion.a
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             href="#lab"
//             className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#1E2329]/80 hover:bg-[#1E2329] border border-[#2A3038] text-white font-semibold font-mono text-sm tracking-wider transition-colors duration-200 text-center hover:border-[#00C076]/50"
//           >
//             RESEARCH & LAB
//           </motion.a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import heroBg from "../assets/screenbackground.jpg";
import avatarImg from "../assets/avatar.jpg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative w-full h-[calc(100vh-73px)] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Slate Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-[#090D12]/80 to-[#090D12]/60" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Avatar Ring */}
        <motion.div variants={itemVariants} className="relative mb-6">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#E28743] via-[#FF9B54] to-[#E28743] opacity-70 blur-[2px]" />

          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#252E3B] bg-[#090D12] shadow-xl">
            <img
              src={avatarImg}
              alt="Profile"
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
        </motion.div>

        {/* Top Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E28743]/10 border border-[#E28743]/30 text-[#E28743] text-xs font-mono font-medium tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#E28743] animate-pulse" />
          SOFTWARE ENGINEER & LAB SPECIALIST
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          Building Systems at the Edge of <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9B54] via-[#E28743] to-[#F5B070]">
            Medicine, Software & Research
          </span>
        </motion.h1>

        {/* Bio Paragraph */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-3xl"
        >
          I engineer scalable production systems using{" "}
          <span className="text-white font-semibold">
            React, Node, Go, and Python
          </span>
          . Formally trained in medical laboratory diagnostics and virology, I
          bring scientific precision to complex software engineering, medical
          research, and data-driven discoveries. Driven by high-impact problems,
          I explore challenges across healthtech, scientific research,
          quantitative computing, and full-stack applications. Outside of
          engineering, I am deeply inspired by fine art and pure mathematics.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#E28743] hover:bg-[#d17836] text-black font-semibold font-mono text-sm tracking-wider transition-colors duration-200 shadow-lg shadow-[#E28743]/20 text-center"
          >
            SEE THE WORK
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#lab"
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#161C24]/80 hover:bg-[#161C24] border border-[#252E3B] text-white font-semibold font-mono text-sm tracking-wider transition-colors duration-200 text-center hover:border-[#E28743]/50"
          >
            RESEARCH & LAB
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
