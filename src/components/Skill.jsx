import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "C# (self-learned)", level: 70 },
      { name: "C", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 90 },
      { name: "R Language", level: 90 },
      { name: "SAS Language", level: 75 },
      { name: "NASM", level: 80 },
    ],
  },
  {
    title: "Web Dev & Frameworks",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "HTML & CSS", level: 75 },
      { name: "ASP.NET", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB (self-learned)", level: 70 },
      { name: "Supabase (self-learned)", level: 70 },
    ],
  },
  {
    title: "DevOps / Tools",
    skills: [
      { name: "Git", level: 80 },
      { name: "Visual Studio", level: 90 },
      { name: "PyCharm", level: 90 },
      { name: "NetBeans", level: 90 },
      { name: "Unity (self-learned)", level: 70 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 90 }
    ],
  },
];


const pillTags = [
  "React", "Next.js", "Node.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "ASP.NET", "R Language", "SAS Language", "MySQL", "MongoDB", "Supabase",
  "C++", "C#", "C", "Python", "Java", "NASM", "Git", "Unity"
];

const pillTags2 = [
  "Object-Oriented Programming", "Data Structures", "Algorithms", "Database Management", "Cybersecurity Fundamentals",
  "Machine Learning", "Data Analysis", "Software Development Lifecycle", "Multithreading & Concurrency"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#080c10] text-[#e2e8f0] px-6 md:px-16 py-24"
    >

      <div className="max-w-[1280px] mx-auto">
        {/* Centered section header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#00ff87] mb-4"
          >
            // TECHNICAL SKILLS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono font-bold text-[2.2rem]"
          >
            Tech Stack
          </motion.h2>
        </div>

        {/* 2-column grid of skill cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              className="
                bg-[#0d1117]
                border  border-[rgba(0,255,135,0.3)]
                rounded-[10px]
                p-6
              "
            >
              {/* Group title */}
              <h3 className="font-mono text-[#00ff87] text-[0.8rem] uppercase tracking-[0.12em] mb-6">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between font-sans text-[0.88rem] mb-1.5">
                      <span className="text-[#e2e8f0]">{skill.name}</span>
                      <span className="text-[#8b949e]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-[5px] bg-[rgba(255,255,255,0.07)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-[#00ff87] to-[#00e5a0]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee wrapper */}
        <div className="mt-14 overflow-hidden relative">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to right, #080c10, transparent)" }} />
          <div className="absolute right-0 top-0 h-full w-24 z-10"
            style={{ background: "linear-gradient(to left, #080c10, transparent)" }} />

          {/* Row 1 — left to right */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 w-max mb-3"
          >
            {[...pillTags, ...pillTags].map((tag, i) => (
              <span
                key={i}
                className="font-mono text-[0.8rem] text-[#8b949e] border  border-[rgba(0,255,135,0.3)] rounded-full px-4 py-1.5 bg-[rgba(255,255,255,0.03)] whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Row 2 — right to left */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 w-max"
          >
            {[...pillTags2, ...pillTags2].map((tag, i) => (
              <span
                key={i}
                className="font-mono text-[0.8rem] text-[#8b949e] border  border-[rgba(0,255,135,0.3)] rounded-full px-4 py-1.5 bg-[rgba(255,255,255,0.03)] whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
