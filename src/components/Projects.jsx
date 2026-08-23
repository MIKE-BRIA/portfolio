const projectList = [
  {
    id: "01",
    title: "Edgehouse Journal & Engine",
    description:
      "Quantitative trading playbook and performance analytics platform. Features trade execution logging, strategy backtesting engine, and real-time metric tracking across FX and digital asset markets.",
    tags: ["PYTHON", "FASTAPI", "REACT", "POSTGRESQL", "DOCKER"],
    metric: "TIMESCALEDB ENGINE",
    year: "Ongoing",
    link: "#",
  },
  {
    id: "02",
    title: "Hemascope Cell Counter",
    description:
      "Computer vision service processing high-resolution peripheral blood smear and microscopy slides. Automates cell counting, morphology flagging, and pathology audit logging.",
    tags: ["PYTHON", "OPENCV", "SCIPY", "FASTAPI"],
    metric: "12K SLIDES ANALYZED",
    year: "2026",
    link: "#",
  },
  {
    id: "03",
    title: "PathoVariant Sequence Tracker",
    description:
      "Genomic sequence parsing pipeline analyzing FASTA data and virology assay outputs to detect viral mutations, lineage clades, and clinical variant distributions.",
    tags: ["BIOPYTHON", "PANDAS", "FASTAPI", "REACT"],
    metric: "CLADE MAPPING LIVE",
    year: "2025",
    link: "#",
  },
  {
    id: "04",
    title: "EpiSpread Disease Simulator",
    description:
      "Mathematical modeling engine using differential equations to simulate transmission dynamics across population densities, intervention factors, and epidemiological parameters.",
    tags: ["NUMPY", "SCIPY", "PLOTLY", "GO"],
    metric: "SEIR ODE SOLVER",
    year: "2025",
    link: "#",
  },
  {
    id: "05",
    title: "LabQC Westgard Engine",
    description:
      "Laboratory Information Middleware ingesting raw analyzer outputs, computing standard deviations, and enforcing Westgard rules to prevent out-of-spec diagnostic runs.",
    tags: ["NODE.JS", "TYPESCRIPT", "POSTGRESQL", "ALEMBIC"],
    metric: "99.9% ASSAY ACCURACY",
    year: "2025",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="w-full bg-[#090D12] text-[#D1D5DB] py-24 px-6 border-t border-[#1C2430] scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono tracking-widest text-[#E28743] uppercase mb-3">
            SELECTED WORK & RESEARCH
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Systems built where the clinic <br className="hidden sm:inline" />
            meets the codebase.
          </h2>
        </div>

        <div className="border-b border-[#1C2430]" />

        {/* Project List */}
        <div className="divide-y divide-[#1C2430]">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="group py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-[#0E141D]/50 transition-colors duration-200 px-2 sm:px-4 rounded-lg"
            >
              {/* ID Column */}
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-[#6B7280] group-hover:text-[#E28743] transition-colors">
                  {project.id}
                </span>
              </div>

              {/* Main Info Column */}
              <div className="md:col-span-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FF9B54] transition-colors">
                  <a href={project.link}>{project.title}</a>
                </h3>
                <p className="mt-3 text-sm text-[#9CA3AF] font-sans leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="md:col-span-3 flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[11px] font-mono tracking-wider rounded-full bg-[#161C24] border border-[#252E3B] text-[#9CA3AF]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metric & Year */}
              <div className="md:col-span-2 text-left md:text-right flex flex-col justify-between h-full pt-1">
                <span className="text-xs font-mono font-bold tracking-wider text-[#E28743]">
                  {project.metric}
                </span>
                <span className="text-xs font-mono text-[#4B5563] mt-2 md:mt-0">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
