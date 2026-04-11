import React from 'react'
import profilePic from '../assets/PIC.jpg'
// 1. Import the icons from the FontAwesome (fa) collection
import { FaLinkedin, FaGithub } from 'react-icons/fa' 

const Hero = () => {
  return (
    <section className='min-h-[80vh] flex flex-col md:flex-row justify-between items-center px-10 md:px-20 py-10 bg-white dark:bg-slate-900'>

        {/* left content */}
        <div className='md:w-1/2 space-y-10'>
            <h2 className='text-indigo-600 font-semibold tracking-wide uppercase text-sm'>
                Available For Internship 2026
            </h2>

            <h1 className='text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight'>
                Hey, I'm <span className='text-indigo-700'>Asmit Prajapati</span>
            </h1>
            <p className='text-lg text-slate-600 dark:text-slate-400 max-w-lg'>
                A Full-Stack Developer and B.Tech CSE student specializing in the MERN stack.
                I build scalable web applications like <span className='font-medium text-slate-800 dark:text-slate-200'>Sahyata SOS</span> and explore Cyber Security.
            </p>

            <div className='flex flex-wrap gap-4 pt-4'>
                <button className='bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-200'>
                    View Projects
                </button>

                {/* LinkedIn Button */}
                <a 
                    href="https://www.linkedin.com/in/asmit-prajapati-a55177316" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='border-2 border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-white transition-all flex items-center gap-2'
                >
                    LinkedIn <FaLinkedin className='text-xl' />
                </a>

                {/* Github Button*/}
                <a 
                    href="https://github.com/asmitprajapati52" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='border-2 border-slate-500 dark:border-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:text-white dark:text-white dark:hover:bg-slate-200 dark:hover:text-black transition-all flex items-center gap-2'
                >
                    Github <FaGithub className='text-xl' />
                </a>
            </div>
        </div>

        {/* Right Content */}
        <div className='md:w-1/2 mt-12 md:mt-0 flex justify-center'>
            <div className='relative w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-2xl rotate-3 flex items-center justify-center border-2 border-indigo-700 overflow-hidden shadow-2xl'>
                <img 
                    src={profilePic} 
                    alt="Asmit Prajapati" 
                    className='w-full h-full object-cover -rotate-3 scale-110' 
                />
                <div className='absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-lg border border-indigo-700 -rotate-3 shadow-lg'>
                    <p className='font-mono text-xs font-bold text-indigo-700'>
                        &lt;Code /&gt; &amp; Security
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero