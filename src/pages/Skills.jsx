import React from 'react'

const Skills = () => {
  const skillCategories=[
    {
      title: "The Foundation",
      description: "Core engineering and web fundamentals.",
      icon: "🏗️",
      skills: [
        {name: "C++ (OOPs & DSA)", level: "90%"},
        {name: "JavaScript (ES6+)", level: "85%"},
        {name: "HTML5 & CSS3", level: "95%"},
        {name: "C Programming", level: "75%"}
      ],
      color: "border-orange-500",
      barColor: "bg-orange-500"
    },

    {
      title: "MERN Stack",
      description: "Building scalable full-stack applications.",
      icon: "💻",
      skills: [
        { name: "React.js", level: "85%" },
        { name: "Node.js & Express", level: "80%" },
        { name: "MongoDB", level: "75%" },
        { name: "Tailwind CSS", level: "90%" }
      ],
      color: "border-indigo-600",
      barColor: "bg-indigo-600"
    },

    {
      title: "Tools & Scripting",
      description: "Environment and version control.",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: "85%" },
        { name: "Python (Basics)", level: "65%" },
        { name: "REST APIs", level: "85%" },
        { name: "Postman", level: "70%" }
      ],
      color: "border-emerald-500",
      barColor: "bg-emerald-500"
    }
  ];
  const floatClasses = ['animate-float-slow', 'animate-float-medium', 'animate-float-fast'];

  return (
    <section id='skills' className='relative py-20 px-6 md:px-20 bg-dark-bg transition-colors duration-300 overflow-hidden'>
      
      {/* Background decoration orbs */}
      <div className='absolute top-1/3 right-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none'></div>
      
      <div className='max-w-7xl mx-auto relative z-10'>

        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Technical <span className='text-gradient font-black'>Proficiency</span>
          </h2>
          <p className='mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-sans'>
            A blend of strong computer science fundamentals and modern web technologies.
          </p>
          <div className='h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {skillCategories.map((category, idx) => {
            const floatAnim = floatClasses[idx % floatClasses.length];
            return (
              <div 
                key={idx}
                className={`p-8 glass-card rounded-2xl border border-white/5 border-b-4 ${category.color} shadow-2xl flex flex-col justify-between ${floatAnim}`}
              >
                <div>
                  {/* Glowing icon wrapper */}
                  <div className='w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl mb-6 border border-indigo-500/20 shadow-lg shadow-indigo-500/5 select-none'> 
                    {category.icon}
                  </div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {category.title}
                  </h3> 
                  <p className='text-sm text-slate-400 mb-8 font-sans'>
                    {category.description}
                  </p>

                  <div className='space-y-6'>
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className='flex justify-between items-center mb-2'>
                          <span className='text-sm font-semibold text-slate-300 font-sans'>
                            {skill.name}
                          </span>
                          <span className='text-xs font-bold text-indigo-400 bg-indigo-500/15 border border-indigo-500/20 px-2 py-0.5 rounded-md'>
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className='w-full bg-slate-900/60 rounded-full h-2 overflow-hidden border border-white/5'>
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(99,102,241,0.2)] bg-gradient-to-r ${
                              category.barColor === 'bg-orange-500' 
                                ? 'from-orange-600 to-amber-500' 
                                : category.barColor === 'bg-indigo-600' 
                                ? 'from-indigo-600 to-purple-500' 
                                : 'from-emerald-600 to-teal-500'
                            }`}
                            style={{ width: skill.level }}
                          >
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills