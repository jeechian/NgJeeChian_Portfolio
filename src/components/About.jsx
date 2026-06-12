import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d1117] text-[#e2e8f0] px-6 md:px-16 py-24"
    >
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-[#00ff87]"
          >
            // ABOUT ME
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono font-bold text-[2.2rem] mt-5"
          >
            Who am I?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[0.95rem] text-[#8b949e] leading-[1.8] mt-8"
          >
            I'm{" "}
            <span className="text-[#e2e8f0] font-semibold">Ng Jee Chian</span>
            , a passionate CS student with a deep love for problem-solving and
            clean code. I thrive at the intersection of data analytics and
            creative thinking.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[0.95rem] text-[#8b949e] leading-[1.8] mt-5"
          >
            My journey started with C++, which sparked my curiosity and gave me the satisfaction of building things from scratch.
            Over time, this passion evolved into an interest in data analytics and machine learning,
            where I use various tools and techniques to analyze data, uncover insights, and solve real-world problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-[0.95rem] text-[#8b949e] leading-[1.8] mt-5"
          >
            Beyond academics, I am passionate about continuous learning and personal growth.
          </motion.p>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-10 font-mono">
            {[
              ["UNIVERSITY", "Asia Pacific University (APU)"],
              ["MAJOR", "Computer Science"],
              ["GPA", "3.65 / 4.0"],
              ["Expected Graduation", "2027"],
              ["LOCATION", "Petaling Jaya, Selangor"],
              ["Spoken Languages", "English, Malay, Chinese"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[#00ff87] text-[0.7rem] uppercase tracking-[0.12em]">
                  {label}
                </p>
                <p className="text-[#e2e8f0] text-[0.95rem] mt-1 font-mono">
                  {value}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE - PROFILE PICTURE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-start"
        >
          <div className="relative flex justify-center items-center w-full max-w-[480px] mx-auto">

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px rgba(0,255,135,0.1)",   // dark
                  "0 0 30px rgba(0,255,135,0.6)",   // bright green
                  "0 0 10px rgba(0,255,135,0.1)",   // back to dark
                ],
                borderColor: [
                  "rgba(0,255,135,0.3)",            // dark green
                  "rgba(0,255,135,1)",              // bright green
                  "rgba(0,255,135,0.3)",            // dark green
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full rounded-[14px] overflow-hidden z-10"
              style={{
                border: "1px solid #00ff87",
                margin: "3px",
              }}
            >
              <img
                src={profile}
                alt="Ng Jee Chian"
                className="w-full h-full object-cover object-top"
                style={{ display: "block", aspectRatio: "1 / 1.2" }}
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
