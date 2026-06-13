import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MailIcon, PinIcon, SendIcon, GithubIcon, LinkedinIcon, InstagramIcon } from "../assets/Icon";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cxkptdk",
        "template_9m086sf",
        form,
        "VBtNgqcN5X_ARFdE4"
      )
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => console.error("Email send error:", err));
  };

  return (
    <section className="min-h-screen bg-[#080c10] text-[#e2e8f0] px-6 md:px-16 py-24"
      id="contact">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-[#00ff87] mb-5">// CONTACT</p>
          <h2 className="font-mono font-bold text-[2.2rem]">Get In Touch</h2>
          <p className="font-sans text-[0.95rem] text-[#8b949e] leading-[1.8] mt-5 max-w-sm">
            I'm open to internship opportunities and interesting collaborations. My inbox is open.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center border border-[rgba(0,255,135,0.3)] rounded-[6px] text-[#00ff87] flex-shrink-0">
                <MailIcon />
              </span>
              <a href="mailto:jeechian17@gmail.com" className="font-sans text-[0.9rem] text-[#e2e8f0] hover:text-[#00ff87] transition">
                jeechian17@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center border border-[rgba(0,255,135,0.3)] rounded-[6px] text-[#00ff87] flex-shrink-0">
                <PinIcon />
              </span>
              <span className="font-sans text-[0.9rem] text-[#e2e8f0]">Petaling Jaya, Malaysia</span>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            {[
              { icon: <GithubIcon />, href: "https://github.com/jeechian", label: "GitHub" },
              { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/ng-jee-chian-850449416/", label: "LinkedIn" },
              { icon: <InstagramIcon />, href: "https://instagram.com/jeechian__", label: "Instagram" }
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                 className="w-10 h-10 flex items-center justify-center border border-[rgba(255,255,255,0.12)] text-[#8b949e] rounded-[6px] transition duration-200 hover:text-[#00ff87] hover:border-[rgba(0,255,135,0.4)]">
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text" placeholder="Name" required
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 bg-[#0d1117] border border-[rgba(255,255,255,0.1)] rounded-[8px] text-[#e2e8f0]"
            />

            <input
              type="email" placeholder="Email" required
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 bg-[#0d1117] border border-[rgba(255,255,255,0.1)] rounded-[8px] text-[#e2e8f0]"
            />

            <textarea
              placeholder="Message" required rows="6"
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3.5 bg-[#0d1117] border border-[rgba(255,255,255,0.1)] rounded-[8px] text-[#e2e8f0] resize-none"
            />

            <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00ff87] text-[#080c10] rounded-[8px] hover:opacity-90 hover:scale-[1.01] active:scale-[0.98] transition duration-200">
              <SendIcon /> {sent ? "Message Sent ✓" : "Send"}
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}