import { motion } from "framer-motion";

const projects = [
  {
    img: "/images/threads.png",
    title: "threads clone",
    parag:
      "This is a clone of threads that is also almost familiar to twitter. This project helped me understand socket.io and more other things",
    tech: [
      "react",
      "nodejs",
      "chakra-ui",
      "javascript",
      "Git/Github",
      "socket.io",
      "tailwind css",
      "mongodb",
    ],
    link: "https://threads-m0a4.onrender.com",
    github: "https://github.com/MIKE-BRIA/threads",
  },
  {
    img: "/projectimages/dashboo.png",
    title: "Saas Landing Page",
    parag:
      "This is a Landing page for a Saas company that deals in building custom dashboard for their users at an affordable price",
    tech: ["React", "Tailwind css", "Git/Github", "Javascript"],
    link: "https://dashland.web.app/",
    github:
      "https://github.com/MIKE-BRIA/projects/tree/master/portfolioprojects/dashlandingpage",
  },
  {
    img: "/images/funiturestore.png",
    title: "Funiture store",
    parag:
      "This is an ecommerce platform for selling funiture items. The funiture are grouped into category and one can search an item by name",
    tech: [
      "react",
      "nodejs",
      "chakra-ui",
      "javascript",
      "Git/Github",
      "tailwind css",
      "mongodb",
      "postman",
      "redux",
    ],
    link: "https://funiturestore.onrender.com",
    github: "https://github.com/MIKE-BRIA/funiturestore",
  },
];

const Projects = () => {
  return (
    <>
      <main
        id="projects"
        className="max-w-large px-4 md:px-0 m-auto flex flex-col items-center mb-28"
      >
        <h1 className="text-4xl font-bold mb-16 font-serif">Projects</h1>
        <div className="flex flex-col gap-10 w-full md:w-12/12">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="flex flex-col md:flex-row gap-5 p-0 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: "50",
                damping: 20,
                duration: 0.5,
              }}
              viewport={{ amount: 0.3 }} // Triggers animation when 30% of element is in view
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="rounded-t-lg w-full h-96 object-cover"
                whileHover={{ scale: 1.1 }} // Adds scale effect on hover
                transition={{ duration: 0.3 }} // Smooth animation
              />
              <div className="p-4">
                <h2 className="text-2xl text-center font-bold mb-2">
                  {project.title}
                </h2>
                <p className="mb-4 text-center ">{project.parag}</p>
                <h3 className="text-lg text-center font-semibold mb-2">
                  Technology Used:
                </h3>
                <ul className="flex flex-wrap gap-2 text-center mb-4 justify-center">
                  {project.tech.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-blue-400 text-white p-2 rounded-md shadow-md flex items-center"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 text-white px-2 py-2 w-full hover:bg-blue-900">
                      View Live Demo
                    </button>
                  </a>
                  <a href={project.github}>
                    <button className="bg-gray-600 text-white px-4 py-2 w-full hover:bg-gray-900">
                      View Code on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
