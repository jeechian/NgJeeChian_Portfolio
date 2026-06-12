import { motion } from "framer-motion";
import { GithubIcon } from "../assets/Icon";

export default function Footer() {
    return (
        <footer className="bg-[#080c10] border-t border-[rgba(255,255,255,0.06)] py-6 px-6 md:px-16">
            <div className="max-w-[1100px] mx-auto flex justify-center">
                <p className="font-mono text-[0.78rem] text-[#8b949e]">
                    © 2026 Ng Jee Chian — Built with React + Tailwind ·{" "}
                    <a
                        href="https://github.com/jeechian/NgJeeChian_Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00ff87] transition inline-flex items-center gap-1 ml-1"
                    >
                        view source <GithubIcon />
                    </a>
                </p>
            </div>
        </footer>
    );
}