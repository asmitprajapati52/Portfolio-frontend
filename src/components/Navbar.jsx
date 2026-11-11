import React from 'react'
import { Link } from 'react-router-dom'
import resumePdf from '../assets/AsmitJobbb.pdf'

const Navbar = () => {
  return (
    <nav className='glass-nav sticky top-0 z-50 w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/5 transition-all duration-300'>

      {/* Brand Logo */}
      <Link to='/' className='text-xl md:text-2xl font-black tracking-wider text-gradient hover:opacity-90 transition-opacity'>
        PORTFOLIO
      </Link>

      {/* Navigation Links */}
      <div className='flex items-center gap-4 sm:gap-6 md:gap-10'>
        <Link
          to='/'
          className='text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300'
        >
          About
        </Link>
        <Link
          to='/projects'
          className='text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300'
        >
          Projects
        </Link>
        <Link
          to='/skills'
          className='text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300'
        >
          Skills
        </Link>
        <Link
          to='/contact'
          className='text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-300 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300'
        >
          Contact
        </Link>

        {/* Resume Button for Mobile screens */}
        <div className='block md:hidden'>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume PDF"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-1.5 text-xs font-bold text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-500/20 active:translate-y-0 cursor-pointer inline-flex items-center"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Resume Button for Desktop & Tablet screens */}
      <div className='hidden md:block'>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume PDF"
          className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center"
        >
          Resume
        </a>
      </div>

    </nav>
  )
}

export default Navbar
