// import { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import avatarImg from "../assets/avatar.jpg";

// const timelineEvents = [
//   {
//     year: "2026",
//     title: "B.Sc. Medical Laboratory Sciences",
//     description:
//       "Graduating from Murang'a University of Technology with core expertise in virology, clinical diagnostics, pathology, and laboratory informatics.",
//   },
//   {
//     year: "2025-2026",
//     title: "Hashi Medical Centre — Lab Technologist",
//     description:
//       "Managed STAT diagnostic testing, specimen collection, internal QC protocols, and pre/post-test patient counseling while supporting emergency care.",
//   },
//   {
//     year: "2025-Ongoing",
//     title: "Computational Healthtech & Research",
//     description:
//       "Initiated full-stack platforms and computer vision algorithms to automate laboratory diagnostics, genomic parsing, and scientific research workflows.",
//   },
//   {
//     year: "2025",
//     title: "KEMRI — Clinical & Research Attachment",
//     description:
//       "Executed specimen processing, infection control, and GCP compliance at KEMRI. Mapped SOPs, SERU ethical clearance, and data governance for health research projects.",
//   },
//   {
//     year: "2024-2025",
//     title: "Murang'a Level 5 Hospital — LIMS & EHR (Internal Attachment)",
//     description:
//       "Leveraged hospital LIMS, EHR, and KHIS systems to digitize diagnostic records, eliminate transcription errors, and aggregate monthly health statistics.",
//   },
//   {
//     year: "2022",
//     title: "Build mobile games and websites as a freelance",
//     description:
//       "Applied clinical insights to build full-stack web applications, automating manual lab worksheets and streamlining data pipelines using Python and SQL.",
//   },
//   {
//     year: "2021",
//     title: "First Line of code into production",
//     description:
//       "Engineered real-time trade performance tracking, playbook loggers, and time-series data infrastructure using FastAPI, React, and PostgreSQL.",
//   },
// ];
// const stats = [
//   { value: "4+", label: "YEARS AT THE BENCH" },
//   { value: "15+", label: "SYSTEMS SHIPPED" },
//   { value: "4", label: "LANGUAGES IN PROD" },
// ];

// export default function About() {
//   const containerRef = useRef(null);

//   // Track scroll inside the timeline container
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   // Smooth out the timeline line animation
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <section
//       id="lab"
//       className="w-full bg-[#090D12] text-[#D1D5DB] py-24 px-6 border-t border-[#1C2430]"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Top Header */}
//         <div className="mb-16">
//           <p className="text-xs font-mono tracking-widest text-[#E28743] uppercase mb-3">
//             THE LAB SIDE
//           </p>
//           <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Result accuracy is a UX problem too.
//           </h2>
//           <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans max-w-2xl leading-relaxed">
//             Years at the bench taught me what a delayed result costs and where
//             workflows quietly break. That’s the lens I bring to every interface,
//             database schema, and API I design.
//           </p>
//         </div>

//         {/* Grid Layout: Timeline Left | Photo & Stats Right */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
//           {/* Left Column: Scrolling Timeline */}
//           <div
//             ref={containerRef}
//             className="lg:col-span-6 relative pl-8 sm:pl-10"
//           >
//             {/* Background Line */}
//             <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-[2px] bg-[#1C2430]" />

//             {/* Animated Dynamic Progress Line */}
//             <motion.div
//               style={{ scaleY }}
//               className="absolute left-3 sm:left-4 top-2 bottom-2 w-[2px] bg-[#E28743] origin-top"
//             />

//             {/* Milestones */}
//             <div className="space-y-12">
//               {timelineEvents.map((event, idx) => (
//                 <div key={idx} className="relative group">
//                   {/* Timeline Dot */}
//                   <span className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-[#090D12] border-2 border-[#E28743] group-hover:bg-[#E28743] transition-colors" />

//                   {/* Date Badge */}
//                   <span className="text-xs font-mono font-bold text-[#E28743] tracking-wider block mb-1">
//                     {event.year}
//                   </span>

//                   {/* Title & Description */}
//                   <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF9B54] transition-colors">
//                     {event.title}
//                   </h3>
//                   <p className="mt-2 text-sm text-gray-400 font-sans leading-relaxed">
//                     {event.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Sticky Media Frame & Stat Cards */}
//           <div className="lg:col-span-6 lg:sticky lg:top-28">
//             {/* Main Avatar Image Container */}
//             <div className="relative rounded-2xl overflow-hidden border border-[#1C2430] bg-[#161C24] p-2 shadow-2xl">
//               <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden">
//                 <img
//                   src={avatarImg}
//                   alt="Lab Specialist"
//                   className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-transparent to-transparent opacity-60" />
//               </div>
//             </div>

//             {/* Stat Cards Row */}
//             <div className="grid grid-cols-3 gap-4 mt-6">
//               {stats.map((stat, idx) => (
//                 <div
//                   key={idx}
//                   className="p-4 sm:p-5 rounded-xl bg-[#0E141D]/60 border border-[#1C2430] text-center flex flex-col justify-center items-center"
//                 >
//                   <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E28743]">
//                     {stat.value}
//                   </span>
//                   <span className="text-[10px] sm:text-xs font-mono tracking-wider text-gray-400 mt-1 uppercase">
//                     {stat.label}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import avatarImg from "../assets/avatar.jpg";

const timelineEvents = [
  {
    year: "2026",
    title: "B.Sc. Medical Laboratory Sciences",
    description:
      "Graduating from Murang'a University of Technology with specialized expertise in virology, clinical diagnostics, pathology, and healthcare informatics.",
  },
  {
    year: "2025 - 2026",
    title: "Hashi Medical Centre — Lab Technologist",
    description:
      "Managed STAT diagnostic testing, specimen processing, internal QC protocols, and pre/post-test patient counseling while supporting emergency medical care.",
  },
  {
    year: "2025 - Present",
    title: "Computational Healthtech & Research",
    description:
      "Architecting full-stack platforms and computer vision algorithms to automate clinical laboratory diagnostics, genomic parsing, and scientific research workflows.",
  },
  {
    year: "2025",
    title: "KEMRI — Clinical & Research Attachment",
    description:
      "Executed high-throughput specimen processing and GCP compliance at KEMRI. Mapped SOPs, SERU ethical clearance frameworks, and data governance for health research projects.",
  },
  {
    year: "2024 - 2025",
    title: "Murang'a Level 5 Hospital — Internal Attachment",
    description:
      "Gained practical clinical exposure to multi-department diagnostic benchwork while observing hospital EHR, LIMS, and KHIS systems for electronic record keeping.",
  },
  {
    year: "2022",
    title: "Freelance Engineering & Applications",
    description:
      "Engineered mobile games, responsive web platforms, and automated data pipelines using Python and SQL to eliminate manual paper workflows.",
  },
  {
    year: "2021",
    title: "First Production Systems Shipped",
    description:
      "Wrote and deployed first production systems, building real-time market data loggers, time-series infrastructure, and interactive analytics platforms using FastAPI, React, and PostgreSQL.",
  },
];

const stats = [
  { value: "4+", label: "YEARS AT THE BENCH" },
  { value: "15+", label: "SYSTEMS SHIPPED" },
  { value: "4", label: "LANGUAGES IN PROD" },
];

// Helper component to safely use hooks per milestone without violating React rules
function TimelineNode({ year, title, description }) {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, {
    margin: "-20% 0px -40% 0px",
    once: false,
  });

  return (
    <div ref={itemRef} className="relative group">
      {/* Animated Fill Dot */}
      <motion.span
        initial={false}
        animate={{
          backgroundColor: isInView ? "#E28743" : "#090D12",
          scale: isInView ? 1.25 : 1,
          borderColor: "#E28743",
        }}
        transition={{ duration: 0.3 }}
        className="absolute -left-[29px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full border-2 border-[#E28743] z-10"
      />

      {/* Date Badge */}
      <span className="text-xs font-mono font-bold text-[#E28743] tracking-wider block mb-1">
        {year}
      </span>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF9B54] transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-400 font-sans leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function About() {
  const containerRef = useRef(null);

  // Smooth scroll tracking relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section
      id="lab"
      className="w-full bg-[#090D12] text-[#D1D5DB] py-24 px-6 border-t border-[#1C2430]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-[#E28743] uppercase mb-3">
            THE LAB SIDE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Result accuracy is a UX problem too.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-sans max-w-2xl leading-relaxed">
            Years at the bench taught me what a delayed result costs and where
            workflows quietly break. That’s the lens I bring to every interface,
            database schema, and API I design.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Timeline */}
          <div
            ref={containerRef}
            className="lg:col-span-6 relative pl-8 sm:pl-10"
          >
            {/* Base Background Track Line */}
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-[2px] bg-[#1C2430]" />

            {/* Smooth Dynamic Progress Line */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-3 sm:left-4 top-2 bottom-2 w-[2px] bg-[#E28743] origin-top"
            />

            {/* Timeline Item List */}
            <div className="space-y-12">
              {timelineEvents.map((event, idx) => (
                <TimelineNode
                  key={idx}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Avatar & Stats */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden border border-[#1C2430] bg-[#161C24] p-2 shadow-2xl">
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={avatarImg}
                  alt="Lab Specialist & Software Engineer"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D12] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#0E141D]/60 border border-[#1C2430] text-center flex flex-col justify-center items-center"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#E28743]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono tracking-wider text-gray-400 mt-1 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
