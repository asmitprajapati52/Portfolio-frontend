import React from 'react';
import { skillCategories } from '../data/skillsData';

const Skills = () => {
  const floatClasses = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];

  return (
    <section 
      id='skills' 
      className='relative py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-dark-bg transition-colors duration-300 overflow-hidden scroll-mt-24'
      aria-label='Technical and Professional Skills'
    >
      
      {/* Background decoration orbs */}
      <div className='absolute top-1/3 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none'></div>
      
      <div className='max-w-7xl mx-auto relative z-10'>

        {/* Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Technical &amp; Professional <span className='text-gradient font-black'>Skills</span>
          </h2>
          <p className='mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed'>
            A comprehensive overview of programming languages, frameworks, developer tools, and core competencies.
          </p>
          <div className='h-1 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-5 sm:mt-6 rounded-full'></div>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {skillCategories.map((category, idx) => {
            const floatAnim = floatClasses[idx % floatClasses.length];
            return (
              <div 
                key={category.id}
                className={`p-6 sm:p-8 glass-card rounded-2xl border border-white/5 border-b-4 ${category.accentBorder} shadow-2xl flex flex-col justify-between ${floatAnim}`}
              >
                <div>
                  {/* Glowing icon wrapper */}
                  <div className='w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-xl sm:text-2xl mb-5 sm:mb-6 border border-indigo-500/20 shadow-lg shadow-indigo-500/5 select-none'> 
                    {category.icon}
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-2'>
                    {category.title}
                  </h3> 
                  <p className='text-xs sm:text-sm text-slate-400 mb-5 sm:mb-6 font-sans leading-relaxed'>
                    {category.description}
                  </p>

                  {/* Skills Badges Tag Cloud */}
                  <div className='flex flex-wrap gap-2 sm:gap-2.5 pt-1 sm:pt-2'>
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border transition-all duration-200 select-none hover:-translate-y-0.5 shadow-sm ${category.badgeBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
