import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-evenly items-center py-5 px-5 sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80  w-full'>

      <div className='text-xl font-extrabold text-indigo-700 text-shadow-indigo-100'>PORTFOLIO</div>

      <div className='flex  gap-15'>
        <Link to='/' className='text-sm font-medium hover:text-indigo-600 transition-colors'>About</Link>
        <Link to='/projects' className='text-sm font-medium hover:text-indigo-600 transition-colors'>Projects</Link>
        <Link to='/skills'className='text-sm font-medium hover:text-indigo-600 transition-colors'>Skills</Link>
        <Link to='/contact' className='text-sm font-medium hover:text-indigo-600 transition-colors'>Contact</Link>
      </div>
      
      <div className='p-2'>
        <button className="hidden rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-all md:block">
        Resume
        </button> 
        </div>

    </nav>
  )
}

export default Navbar