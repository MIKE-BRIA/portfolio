const toolkitData = [
  {
    category: "FRONTEND",
    items: [
      "React 19",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "BACKEND",
    items: ["Python", "FastAPI", "Go", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    category: "INFRA & TOOLS",
    items: [
      "Docker",
      "TimescaleDB",
      "Alembic",
      "Git / Linux",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "DIAGNOSTICS",
    items: [
      "Virology Assays",
      "Hematology",
      "Microbiology",
      "Westgard QC",
      "LIMS Middleware",
    ],
  },
  {
    category: "RESEARCH & SCIENCE",
    items: [
      "Genomic Parsing",
      "Quantitative Modeling",
      "Differential Equations",
      "Linear Algebra",
      "Data Visualization",
    ],
  },
];

export default function Toolkit() {
  return (
    <section
      id="stack"
      className="w-full bg-[#090D12] text-[#D1D5DB] py-24 px-6 border-t border-[#1C2430]"
    >
      {/* Container aligned to max-w-7xl matching the Nav bar */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-[#E28743] uppercase mb-3">
            TOOLKIT & CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Fluent in two vocabularies.
          </h2>
        </div>

        {/* Bounded Grid Box */}
        <div className="rounded-xl border border-[#1C2430] bg-[#0E141D]/40 overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1C2430]">
          {toolkitData.map((col, idx) => (
            <div key={idx} className="p-6 sm:p-8 flex flex-col">
              {/* Column Category Title */}
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#E28743] uppercase mb-6">
                {col.category}
              </h3>

              {/* Skill List */}
              <ul className="space-y-4">
                {col.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="text-sm font-sans text-[#9CA3AF] hover:text-white transition-colors duration-150 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
