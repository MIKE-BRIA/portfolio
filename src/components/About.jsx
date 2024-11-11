// const techs = [
//   "React",
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "Nodejs",
//   "Expressjs",
//   "Tailwind CSS",
//   "Git/Github",
//   "Postman",
//   "Mongodb",
//   "Typescript",
// ];

// const About = () => {
//   return (
//     <>
//       <main
//         id="about"
//         className="max-w-large m-auto flex flex-col items-center "
//       >
//         <div className="flex flex-col md:flex-row mb-8 px-6 md:px-0 w-full md:w-12/12 m-auto items-center">
//           <div className="md:w-1/2 w-full mb-4 md:mb-0">
//             <img
//               src="/images/cool.jpg"
//               alt="Cool"
//               className="rounded-lg shadow-md object-cover w-full h-auto"
//             />
//           </div>
//           <div className="md:w-1/2 w-full md:pl-8">
//             <h1 className="text-xl font-bold mb-4">About Me</h1>
//             <p className="mb-4">
//               I am passionate about leveraging technology to solve complex
//               problems across various fields. With a strong foundation in both
//               scientific research and software development, I am driven to
//               create innovative solutions that address real-world challenges and
//               make a positive impact on society. My goal is to apply my
//               technical skills and interdisciplinary knowledge to develop
//               software products that enhance human well-being, drive progress,
//               and contribute to a better future. I am eager to bring my
//               expertise and dedication to a software engineering role where I
//               can continue to grow, learn, and make a meaningful difference
//               across multiple domains.
//             </p>

//             <p className="mb-4">
//               The following are the tech stacks that I use regularly:
//             </p>
//             <div>
//               <ul className="flex flex-wrap gap-3">
//                 {techs.map((tech) => (
//                   <li
//                     key="tech"
//                     className="bg-blue-400 text-white p-2 rounded-md shadow-md flex items-center"
//                   >
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mt-4">
//               <a
//                 href="/BrianMichaelresume.docx" // Ensure the path matches where the resume is located in the public folder
//                 download
//                 className="border-2 border-black p-2"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default About;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techs = [
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Nodejs",
  "Expressjs",
  "Tailwind CSS",
  "Git/Github",
  "Postman",
  "Mongodb",
  "Typescript",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <main
        id="about"
        className="max-w-large m-auto flex flex-col items-center mb-28"
      >
        <div className="flex flex-col-reverse gap-4 md:flex-row mb-8 px-6 md:px-0 w-full md:w-12/12 m-auto items-center">
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            {/* Image stays static, no animation */}
            <motion.img
              src="/images/cool.jpg"
              alt="Cool"
              className="rounded-lg shadow-md object-cover w-full h-auto"
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 50, duration: 0.6 }}
            />
          </div>
          <motion.div
            ref={ref}
            className="md:w-1/2 w-full md:pl-8"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 50, duration: 0.6 }}
          >
            <h1 className="text-xl font-bold mb-4">About Me</h1>
            <p className="mb-4 font-serif">
              I am passionate about leveraging technology to solve complex
              problems across various fields. With a strong foundation in both
              scientific research and software development, I am driven to
              create innovative solutions that address real-world challenges and
              make a positive impact on society. My goal is to apply my
              technical skills and interdisciplinary knowledge to develop
              software products that enhance human well-being, drive progress,
              and contribute to a better future. I am eager to bring my
              expertise and dedication to a software engineering role where I
              can continue to grow, learn, and make a meaningful difference
              across multiple domains.
            </p>

            <p className="mb-4 font-serif">
              The following are the tech stacks that I use regularly:
            </p>
            <div>
              <ul className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <li
                    key={tech}
                    className="bg-blue-400 text-white p-2 rounded-md shadow-md flex items-center justify-center"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="/BrianMichaelresume.docx" // Ensure the path matches where the resume is located in the public folder
                download
                className="border-2 border-blue-600 p-2"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default About;
