import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/signature.png";
import ResumePDF from "../assets/Resume.pdf";
import CVPDF from "../assets/CV.pdf";

const navLinks = ["home", "about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease
        ${scrolled
          ? "bg-[#080c10]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]"
          : "bg-transparent border-b border-transparent"}
      `}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo */}
        <div className="font-mono text-lg tracking-tight">
          <motion.img
            src={logo}
            alt="logo"
            className="w-32 h-16 object-contain"
            style={{
              filter: "invert(1) sepia(1) saturate(5) hue-rotate(90deg)",
            }}
            animate={{
              filter: [
                "invert(1) sepia(1) saturate(5) hue-rotate(90deg) brightness(0.3)",  // dark green
                "invert(1) sepia(1) saturate(5) hue-rotate(90deg) brightness(1.2)",  // bright green
                "invert(1) sepia(1) saturate(5) hue-rotate(90deg) brightness(0.3)",  // back to dark
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 font-mono text-sm">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition-colors duration-200 ${active === item ? "text-[#00ff87]" : "text-[#8b949e] hover:text-[#00ff87]"
                }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Resume Button — outline style matching screenshots */}
        <div className="flex items-center gap-3">

          {/* Résumé Button — filled style matching "View Projects" */}
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-mono text-[0.9rem] font-medium
              px-6 py-2 rounded-[6px]
              bg-transparent
              border border-[#00ff87]
              text-[#00ff87]
              hover:bg-[#00ff87] hover:text-black
              transition duration-200 ease
              hover:opacity-85
              inline-block text-center
            "
          >
            Résumé
          </a>

          {/* CV Button — outline style matching "Contact Me" */}
          <a
            href={CVPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-mono text-[0.9rem] font-medium
              px-6 py-2 rounded-[6px]
              bg-transparent
              border border-[#00ff87]
              text-[#00ff87]
              hover:bg-[#00ff87] hover:text-black
              transition duration-200 ease
              hover:opacity-85
              inline-block text-center
            "
          >
            CV
          </a>

        </div>

      </div>
    </motion.nav>
  );
}
