import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import resumePdf from '../assets/AsmitJobbb.pdf'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className='glass-nav sticky top-0 z-50 w-full py-3.5 sm:py-4 px-4 sm:px-8 md:px-12 flex justify-between items-center border-b border-white/5 transition-all duration-300'>

      {/* Brand Logo */}
      <Link 
        to='/' 
        onClick={closeMobileMenu}
        className='text-xl sm:text-2xl font-black tracking-wider text-gradient hover:opacity-90 transition-opacity'
      >
        PORTFOLIO
      </Link>

      {/* Desktop Navigation Links */}
      <div className='hidden md:flex items-center gap-6 lg:gap-10'>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors duration-300 relative py-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-indigo-500 after:transition-all after:duration-300 ${
                isActive 
                  ? 'text-white after:w-full' 
                  : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Desktop Resume Button */}
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

      {/* Mobile Controls: Resume button + Hamburger Toggle */}
      <div className='flex md:hidden items-center gap-2.5 sm:gap-3'>
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Resume PDF"
          className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-1.5 text-xs font-bold text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-500/20 active:translate-y-0 cursor-pointer inline-flex items-center"
        >
          Resume
        </a>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 focus:outline-none transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-2'>
          <div className='flex flex-col space-y-3.5'>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`text-base font-semibold py-2 px-3 rounded-xl transition-all ${
                    isActive 
                      ? 'text-white bg-indigo-500/15 border border-indigo-500/30' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar
