import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeIcon, ExternalLinkIcon ,CertificateIcon} from "../assets/Icon";
import certificate from "../assets/certificate.pdf";
const projectsData = [
  {
    title: "Waking Demon",
    date: "June 2026",
    type: "Game Dev",
    desc: "WAKING DEMON is a 2D side-scrolling action game where the player battles a beast in a forest, with gameplay driven by a timed event system. It features ranged and melee combat, a rage transformation mechanic, and multiple endings.",
    tags: ["Python", "Special Effects", "Pygame"],
    github: "https://github.com/vixwoke/ise_assignment",
    live: null,
  },
  {
    title: "TunePilot",
    date: "June 2026",
    type: "Web App",
    desc: "TunePilot is a web-based Learning Management System (LMS) for music education, designed to provide accessible and structured online learning for students. Built using ASP.NET Web Forms and Microsoft SQL Server LocalDB.",
    tags: ["ASP.NET", "C#", "MSSQL"],
    github: "https://github.com/vixwoke/TunePilot",
    live: null,
  },
  {
    title: "TrueFlow",
    date: "March 2026",
    type: "Web App",
    desc: "Developed a prototype web platform to verify water source quality claims. Demonstrated strong critical thinking through idea generation, impact evaluation and feasibility analysis ",
    tags: ["Hackathon", "Supabase", "React", "Node Js"],
    github: "https://github.com/williamjonathanliem/trueflow",
    live: "https://trueflow-flo.vercel.app/",
    cert:certificate,
  },
  {
    title: "Data Analysis (UNSW-NB15)",
    date: "Jan 2026",
    type: "Data Analysis",
    desc: "Investigated SloSS and DloSS to detect network attacks using statistical and machine learning techniques including logistic regression and Apriori analysis.",
    tags: ["Machine Learning", "Data Analysis", "R Language"],
    github: "https://github.com/jeechian/data-analysis-UNSW-NB15-",
    live: null,
  },
  {
    title: "AutoLab - Client",
    date: "May 2025",
    type: "Web App",
    desc: "Web-based e-commerce client prototype built during internship allowing users to browse products and complete checkout.",
    tags: ["HTML/CSS", "JavaScript", "Supabase", "Internship"],
    github: "https://github.com/jeechian/AutoLabClient",
    live: "https://auto-lab-client.vercel.app",
  },
  {
    title: "AutoLab - Admin",
    date: "May 2025",
    type: "Web App",
    desc: "Admin dashboard for managing products, orders, and transactions in AutoLab e-commerce system.",
    tags: ["HTML/CSS", "JavaScript", "Supabase", "Internship"],
    github: "https://github.com/jeechian/AutoLabAdmin",
    live: "https://auto-lab-admin.vercel.app",
  },
  {
    title: "LumberJack Blues",
    date: "Nov 2024",
    type: "Game Dev",
    desc: "2D Unity game where players chop trees, earn money, upgrade attributes, and unlock skills using C# mechanics.",
    tags: ["Unity", "C#", "FYP"],
    github: "https://drive.google.com/file/d/1tsvGXspLOTvEO9Eo9t6mpPKxJUEY5u53/view?usp=sharing",
    live: null,
  },
];

const filters = ["All", "Game Dev", "Web App", "Data Analysis"];

const typeColors = {
  "Game Dev": {
    bg: "bg-[rgba(251,191,36,0.12)]",
    text: "text-[#fbbf24]",
  },
  "Web App": {
    bg: "bg-[rgba(96,165,250,0.12)]",
    text: "text-[#60a5fa]",
  },
  "Data Analysis": {
    bg: "bg-[rgba(167,139,250,0.12)]",
    text: "text-[#a78bfa]",
  },
};



export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === active);

  return (
    <section className="min-h-screen bg-[#080c10] text-[#e2e8f0] px-6 md:px-16 py-24"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Centered header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#00ff87] mb-4"
          >
            // PROJECTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono font-bold text-[2.2rem]"
          >
            Things I've Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[0.95rem] text-[#8b949e] mt-4 max-w-lg mx-auto leading-relaxed"
          >
            A selection of personal projects and hackathon builds.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-mono border transition
                ${active === f
                  ? "bg-[#00ff87] text-black border-[#00ff87]"
                  : "border-white/20 text-[#8b949e] hover:border-[#00ff87] hover:text-white"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const color = typeColors[project.type] || {
                bg: "bg-white/10",
                text: "text-white",
              };

              return (
                <motion.div
                  key={`${project.title}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-[#0d1117] border border-white/10 rounded-lg p-6 flex flex-col hover:border-[#00ff87]/30 transition"
                >
                  {/* Type */}
                  <span className={`text-xs px-2 py-1 rounded-full w-fit ${color.bg} ${color.text}`}>
                    {project.type}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 font-mono text-lg font-semibold">
                    {project.title}
                  </h3>

                  {/* Date */}
                  <p className="text-xs text-[#8b949e] mb-3">
                    {project.date}
                  </p>

                  {/* Desc */}
                  <p className="text-sm text-[#8b949e] flex-1">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs border border-white/10 px-2 py-0.5 rounded bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-5 text-sm">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white text-[#8b949e]">
                        <CodeIcon /> Code
                      </a>
                    )}

                    {project.live && project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#00ff87] hover:text-white">
                        <ExternalLinkIcon /> Live
                      </a>
                    )}

                    {project.cert && project.cert !== "#" && (
                      <a
                        href={project.cert}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#fbbf24] hover:text-white"
                      >
                        <CertificateIcon /> Certificate
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}