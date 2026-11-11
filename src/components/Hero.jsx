import React from 'react'
import profilePic from '../assets/PIC.jpg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { useNavigate, useLocation } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToExperience = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const experienceElement = document.getElementById('experience');
        if (experienceElement) {
          experienceElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const experienceElement = document.getElementById('experience');
      if (experienceElement) {
        experienceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className='relative min-h-[85vh] flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 md:px-20 py-16 md:py-24 bg-dark-bg overflow-hidden transition-colors duration-300'>

      {/* Background Orbs */}
      <div className='absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow'></div>
      <div className='absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow'></div>

      {/* Decorative Grid Lines */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none'></div>

      {/* Left Content */}
      <div className='md:w-1/2 space-y-8 z-10 text-center md:text-left flex flex-col items-center md:items-start'>

        {/* Status Badge */}
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold uppercase tracking-widest text-[11px] shadow-sm select-none'>
          <span className='w-2 h-2 rounded-full bg-emerald-400 animate-ping'></span>
          Available For job
        </div>

        {/* Hero Headline */}
        <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight'>
          Hey, I'm <span className='text-gradient font-black'>Asmit Prajapati</span>
        </h1>

        {/* Hero Paragraph */}
        <p className='text-base sm:text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-sans'>
          A Full-Stack Developer and B.Tech CSE student specializing in the MERN stack.
          I build scalable web applications like <span className='font-medium text-slate-200 border-b border-indigo-500/30 pb-0.5'>Sahyata SOS</span> and explore Cyber Security.
        </p>

        {/* CTA Button & Social Profile Icons */}
        <div className='flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-4 w-full justify-center md:justify-start'>
          {/* Primary & Only CTA: View My Experience */}
          <button 
            type='button'
            onClick={handleScrollToExperience}
            className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer'
          >
            View My Experience
          </button>

          {/* Social Profiles Container: 1. LinkedIn, 2. GitHub, 3. LeetCode */}
          <div className='flex items-center gap-3'>
            {/* 1. LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/asmit-prajapati-a55177316"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn profile"
              className='border border-white/10 hover:border-indigo-500/50 bg-white/5 hover:bg-white/10 px-5 py-3.5 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/10'
            >
              <FaLinkedin className='text-xl text-indigo-400' />
              <span>LinkedIn</span>
            </a>

            {/* 2. GitHub Button */}
            <a
              href="https://github.com/asmitprajapati52"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile"
              className='border border-white/10 hover:border-purple-500/50 bg-white/5 hover:bg-white/10 px-5 py-3.5 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/10'
            >
              <FaGithub className='text-xl text-purple-400' />
              <span>GitHub</span>
            </a>

            {/* 3. LeetCode Button */}
            <a
              href="https://leetcode.com/u/Asmit007/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LeetCode profile"
              className='border border-white/10 hover:border-amber-500/50 bg-white/5 hover:bg-white/10 px-5 py-3.5 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-black/10'
            >
              <SiLeetcode className='text-xl text-amber-400' />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className='md:w-1/2 mt-16 md:mt-0 flex justify-center z-10 w-full'>
        {/* Antigravity floating card */}
        <div className='relative w-64 h-64 md:w-80 md:h-80 bg-indigo-950/20 rounded-2xl rotate-3 flex items-center justify-center border border-white/10 overflow-hidden shadow-2xl shadow-black/60 backdrop-blur-sm animate-float-slow'>
          <img
            src={profilePic}
            alt="Asmit Prajapati"
            className='w-full h-full object-cover -rotate-3 scale-110'
          />
          {/* Accent border glow effect overlay */}
          <div className='absolute inset-0 border border-white/15 rounded-2xl pointer-events-none'></div>
          <div className='absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-lg border border-indigo-500/30 -rotate-3 shadow-lg'>
            <p className='font-mono text-xs font-extrabold text-indigo-400 tracking-wide'>
              &lt;Code /&gt; &amp; Security
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
