import { motion } from "framer-motion";

const timeline = [
  {
    type: "Education",
    title: "Bachelor of Computer Science in AI (Artificial Intelligence)",
    org: "Asia Pacific University (APU)",
    time: "Sep 2025 - Present",
    desc: "Studying core concepts in Artificial Intelligence and Computer Science, including machine learning, data structures, algorithms, and software development. Interested in data analytics and applying data-driven approaches to solve real-world problems.",
    tags: ["Degree","AI"],
    nodeColor: "#00ff87",
    orgColor: "#00ff87",
    badgeBg: "rgba(0,255,135,0.15)",
    badgeText: "#00ff87",
  },
  {
    type: "Experience",
    title: "APU Sustainability Hackathon 2026",
    org: "Asia Pacific University (APU)",
    time: "March 2026 - Apr 2026",
    desc: "Developed a prototype web platform to verify water source quality claims. Demonstrated strong critical thinking through idea generation, impact evaluation and feasibility analysis",
    tags: ["React", "Node Js", "Supabase"],
    nodeColor: "#60a5fa",
    orgColor: "#60a5fa",
    badgeBg: "rgba(96,165,250,0.15)",
    badgeText: "#60a5fa",
  },
  {
    type: "Experience",
    title: "Internship & Part-Time - Full Stack Web Developer",
    org: "BLNC Tech",
    time: "Jan 2025 - June 2025",
    desc: "Built a web-based e-commerce prototype during internship, enabling product browsing and checkout flow. Assisted in developing an admin dashboard for managing products, orders, and transactions in the AutoLab system. Continued as a part-time developer after internship to improve features, fix bugs, and support ongoing updates.",
    tags: ["Web Development", "React", "Node.js", "Supabase", "Internship", "Part-time"],
    nodeColor: "#60a5fa",
    orgColor: "#60a5fa",
    badgeBg: "rgba(96,165,250,0.15)",
    badgeText: "#60a5fa",
  },
  {
    type: "Experience",
    title: "Alumni Sharing Event Speaker",
    org: "INTI International College Subang",
    time: "Dec 2024",
    desc: "Invited by Ms. Norayu, Head of Program, to share insights and experiences with Certificate in Information Technology students.",
    tags: ["Speaking", "Mentoring"],
    nodeColor: "#60a5fa",
    orgColor: "#60a5fa",
    badgeBg: "rgba(96,165,250,0.15)",
    badgeText: "#60a5fa",
  },
  {
    type: "Experience",
    title: "Employer Project — BYOD Policy & SETA Program",
    org: "IP Server One",
    time: "Dec 2024",
    desc: "Collaborated with IP Server One to design a BYOD policy and SETA program, including the creation of awareness quizzes and specific real-world solutions for the company.",
    tags: ["Cybersecurity", "BYOD", "SETA"],
    nodeColor: "#60a5fa",
    orgColor: "#60a5fa",
    badgeBg: "rgba(96,165,250,0.15)",
    badgeText: "#60a5fa",
  },
    {
    type: "Education",
    title: "Diploma in Computer Science",
    org: "INTI International College Subang",
    time: "Apr 2023 - Aug 2025",
    desc: "Studied core computer science fundamentals including object-oriented programming, data structures, and software development principles. ",
    tags: ["Diploma", "Graduate"],
    nodeColor: "#00ff87",
    orgColor: "#00ff87",
    badgeBg: "rgba(0,255,135,0.15)",
    badgeText: "#00ff87",
  },
];

export default function Timeline() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#080c10] text-[#e2e8f0] px-6 md:px-16 py-24"
    >
      <div className="max-w-[1024px] mx-auto">

        {/* Centered header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#00ff87] mb-4"
          >
            // TIMELINE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono font-bold text-[2.2rem]"
          >
            Education &amp; Experience
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[1.15rem] top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.07)]" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Circular node */}
                <div
                  className="absolute left-[0.45rem] top-4 w-[1.4rem] h-[1.4rem] rounded-full border-2 bg-[#080c10] flex items-center justify-center"
                  style={{ borderColor: item.nodeColor }}
                >
                  <div
                    className="w-[8px] h-[8px] rounded-full"
                    style={{ backgroundColor: item.nodeColor }}
                  />
                </div>

                {/* Card */}
                <div className="
                  bg-[#0d1117]
                  border border-[rgba(255,255,255,0.07)]
                  rounded-[10px]
                  p-6
                  transition duration-200
                  hover:border-[rgba(255,255,255,0.14)]
                ">
                  {/* Type badge + time */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="font-mono text-[0.73rem] px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: item.badgeBg,
                        color: item.badgeText,
                      }}
                    >
                      {item.type}
                    </span>
                    <span className="font-mono text-[0.8rem] text-[#8b949e]">
                      {item.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-[1.05rem] font-semibold mt-3">
                    {item.title}
                  </h3>

                  {/* Org */}
                  <p
                    className="font-mono text-[0.85rem] mt-1"
                    style={{ color: item.orgColor }}
                  >
                    {item.org}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-[#8b949e] text-[0.88rem] leading-[1.7] mt-3">
                    {item.desc}
                  </p>

                  {/* Pill tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            font-mono text-[0.75rem] text-[#8b949e]
                            border border-[rgba(255,255,255,0.1)]
                            rounded-[4px]
                            px-2.5 py-0.5
                            bg-[rgba(255,255,255,0.03)]
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
