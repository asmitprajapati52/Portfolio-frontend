import React from 'react';
import profilePic from '../assets/PIC.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-dark-bg transition-colors duration-300 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-gradient font-black">Me</span>
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Avatar / Profile Card */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl p-2 glass-card border border-white/10 shadow-2xl overflow-hidden group">
              <img
                src={profilePic}
                alt="Asmit Prajapati"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-7 space-y-5 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Hi, I'm <span className="text-indigo-400">Asmit Prajapati</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              I am a passionate Full-Stack Developer and B.Tech Computer Science student specializing in building scalable web applications with the MERN stack. I love transforming real-world problems into clean, high-performance, user-friendly digital solutions.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              Beyond full-stack engineering, I actively explore Cybersecurity, algorithmic problem solving on LeetCode, and open-source hackathons. I am currently preparing and available for 2026 internships.
            </p>

            {/* Quick stats or CTA links */}
            <div className="pt-3 flex flex-wrap gap-3.5 justify-center md:justify-start">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5"
              >
                Let's Talk
              </Link>
              <Link
                to="/projects"
                className="border border-white/10 hover:border-indigo-500/50 bg-white/5 hover:bg-white/10 px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
