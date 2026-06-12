import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from "../assets/Icon";

const roles = ["Bachelor of Computer Science", "Specializing in Artificial Intelligence","Asia Pacific University (APU)"];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    setText(current.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return text;
}


export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#080c10] text-[#e2e8f0] flex items-center px-6 md:px-16 py-24"
    >
      <div className="max-w-[960px] w-full">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#00ff87]"
        >
          &gt; HELLO, WORLD! I AM
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono font-bold text-[clamp(3rem,8vw,5.5rem)] mt-4 tracking-[-0.02em] leading-[1.1]"
        >
          Ng<br/>
          Jee Chian
        </motion.h1>

        {/* Typewriter role line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[1.1rem] md:text-[1.4rem] text-[#00ff87] mt-5 h-8 flex items-center"
        >
          <span className="mr-1">$</span>
          <span>{typed}</span>
          <span className="ml-0.5 inline-block w-[2px] h-[1.2em] bg-[#00ff87] animate-pulse" />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-[0.95rem] leading-[1.8] text-[#8b949e] mt-6 max-w-xl"
        >
          2rd-year Computer Science student at Asia Pacific University (APU). Building scalable web applications, 
          developing software systems, exploring machine learning models, 
          and leveraging data analytics to solve real-world problems. Currently seeking 
          <span className="text-[#00ff87]"> July 2026 internships</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mt-8 flex-wrap"
        >
          <a
            href="#projects"
            className="
              font-mono font-medium text-[0.9rem]
              px-7 py-3 rounded-[6px]
              bg-[#00ff87] text-[#080c10]
              transition-all duration-200 ease
              hover:bg-[#00ff87] hover:text-black hover:scale-[1.03]
              active:scale-[0.97]
              inline-block
            "
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="
              font-mono font-medium text-[0.9rem]
              px-7 py-3 rounded-[6px]
              bg-transparent
              border border-[#00ff87]
              text-[#00ff87]
              hover:bg-[#00ff87] hover:text-black hover:scale-[1.03]]
              transition duration-200 ease
              hover:opacity-85
              inline-block
            "
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social icon buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex gap-3 mt-10"
        >
          {[
            { icon: <GithubIcon />, href: "https://github.com/jeechian", label: "GitHub" },
            { icon: <LinkedinIcon />, href: "https://linkedin.com/in/jeechian", label: "LinkedIn" },
            { icon: <MailIcon />, href: "mailto:jeechian17@gmail.com", label: "Email" },
            { icon: <InstagramIcon />, href: "https://instagram.com/jeechian__", label: "Instagram" }
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="
                w-10 h-10 flex items-center justify-center
                border border-[rgba(255,255,255,0.12)]
                text-[#8b949e]
                rounded-[6px]
                transition duration-200
                hover:text-[#00ff87] hover:border-[rgba(0,255,135,0.4)]
              "
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-16 flex justify-center md:justify-start"
        >
          <a
            href="#about"
            className="text-[#8b949e] hover:text-[#00ff87] transition animate-bounce inline-block"
          >
            {/* <ChevronDown /> */}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
