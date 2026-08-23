// import { useState } from "react";
// import { ArrowUpRight, Copy, Check } from "lucide-react";

// export default function Contact() {
//   const [copied, setCopied] = useState(false);
//   const email = "michaelbrian466@gmail.com"; //[cite: 1]

//   const handleCopy = () => {
//     navigator.clipboard.writeText(email);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const contactLinks = [
//     {
//       label: "GITHUB",
//       value: "github.com/brianotieno", // replace with your handle if different
//       href: "https://github.com",
//     },
//     {
//       label: "LINKEDIN",
//       value: "linkedin.com/in/brianotieno", // replace with your handle if different
//       href: "https://linkedin.com",
//     },
//   ];

//   return (
//     <footer
//       id="contact"
//       className="w-full bg-[#090D12] text-[#D1D5DB] py-24 px-6 border-t border-[#1C2430]"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Tag */}
//         <p className="text-xs font-mono tracking-widest text-[#E28743] uppercase mb-4">
//           GET IN TOUCH
//         </p>

//         {/* Dynamic Heading */}
//         <div className="max-w-3xl mb-16">
//           <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
//             Building something in health, data, or dev tools?{" "}
//             <span className="text-[#E28743]">Let’s talk.</span>
//           </h2>
//         </div>

//         {/* Main Grid Card Container */}
//         <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-[#1C2430] bg-[#0D1219]/50 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#1C2430]">
//           {/* Interactive Email Box */}
//           <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#121822]/80 transition-colors">
//             <div className="flex items-center justify-between mb-8">
//               <span className="text-xs font-mono text-gray-400 tracking-wider">
//                 EMAIL
//               </span>
//               <button
//                 onClick={handleCopy}
//                 className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#E28743] transition-colors"
//                 title="Copy email to clipboard"
//               >
//                 {copied ? (
//                   <>
//                     <Check className="w-3.5 h-3.5 text-[#E28743]" />
//                     <span className="text-[#E28743]">COPIED</span>
//                   </>
//                 ) : (
//                   <>
//                     <Copy className="w-3.5 h-3.5" />
//                     <span>COPY</span>
//                   </>
//                 )}
//               </button>
//             </div>
//             <a
//               href={`mailto:${email}`}
//               className="text-base sm:text-lg font-mono text-white group-hover:text-[#E28743] transition-colors truncate"
//             >
//               {email}
//             </a>
//           </div>

//           {/* Social Links */}
//           {contactLinks.map((link, idx) => (
//             <a
//               key={idx}
//               href={link.href}
//               target="_blank"
//               rel="noreferrer"
//               className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#121822]/80 transition-colors"
//             >
//               <div className="flex items-center justify-between mb-8">
//                 <span className="text-xs font-mono text-gray-400 tracking-wider">
//                   {link.label}
//                 </span>
//                 <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#E28743] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
//               </div>
//               <span className="text-base sm:text-lg font-mono text-white group-hover:text-[#E28743] transition-colors truncate">
//                 {link.value}
//               </span>
//             </a>
//           ))}
//         </div>

//         {/* Footer Bottom Bar */}
//         <div className="mt-20 pt-8 border-t border-[#1C2430]/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
//           <p>© {new Date().getFullYear()} BRIAN MICHAEL</p> {/*[cite: 1] */}
//           <p className="tracking-widest uppercase text-[11px]">
//             ENGINEER · MEDICAL LABORATORY SPECIALIST
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";

const domains = [
  "healthtech",
  "software engineering",
  "lab diagnostics",
  "scientific research",
  "quantitative systems",
  "developer tools",
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [index, setIndex] = useState(0);
  const email = "michaelbrian466@gmail.com";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % domains.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: "GITHUB",
      value: "https://github.com/MIKE-BRIA",
      href: "https://github.com",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/brian-michael-097880270/",
      href: "https://linkedin.com",
    },
  ];

  return (
    <footer
      id="contact"
      className="w-full bg-[#090D12] text-[#D1D5DB] py-24 px-6 border-t border-[#1C2430]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <p className="text-xs font-mono tracking-widest text-[#E28743] uppercase mb-4">
          GET IN TOUCH
        </p>

        {/* Animated Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Building something in{" "}
            <span className="inline-block relative overflow-hidden h-[1.25em] align-bottom text-[#E28743]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={domains[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="block"
                >
                  {domains[index]}?
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
          <p className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s <span className="text-[#E28743]">talk.</span>
          </p>
        </div>

        {/* Main Grid Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-[#1C2430] bg-[#0D1219]/50 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#1C2430]">
          {/* Interactive Email Box */}
          <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#121822]/80 transition-colors">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono text-gray-400 tracking-wider">
                EMAIL
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#E28743] transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#E28743]" />
                    <span className="text-[#E28743]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${email}`}
              className="text-base sm:text-lg font-mono text-white group-hover:text-[#E28743] transition-colors truncate"
            >
              {email}
            </a>
          </div>

          {/* Social Links */}
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#121822]/80 transition-colors"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono text-gray-400 tracking-wider">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#E28743] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <span className="text-base sm:text-lg font-mono text-white group-hover:text-[#E28743] transition-colors truncate">
                {link.value}
              </span>
            </a>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#1C2430]/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} BRIAN MICHAEL</p>
          <p className="tracking-widest uppercase text-[11px]">
            ENGINEER · MEDICAL LABORATORY SPECIALIST
          </p>
        </div>
      </div>
    </footer>
  );
}
