import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-dark-bg/80 backdrop-blur-md py-8 px-6 sm:px-12 md:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-sm font-semibold text-slate-300">
            Asmit <span className="text-gradient font-black">Prajapati</span>
          </p>
          <p className="text-xs text-slate-500 mt-1 font-sans">
            Full-Stack Developer &amp; Computer Science Student.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/asmit-prajapati-a55177316"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/asmitprajapati52"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/u/Asmit007/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
          >
            <SiLeetcode className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-slate-500 font-sans">
          &copy; {new Date().getFullYear()} Asmit Prajapati. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

