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
  return (
    <section id='skills' className='py-20 px-6 md:px-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto'>

        {/* Header */}

        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight'>
            Technical <span className='text-indigo-600'>
              Proficiency
            </span>
          </h2>
          <p className='mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
            A blend of strong computer science fundamentals and modern web technologies.
          </p>

          <div className='h-1.5 w-24 bg-indigo-600 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {skillCategories.map((category, idx)=>(
            <div 
            key={idx}
            className={`p-8 bg-white dark:bg-slate-900 rounded-2xl border-b-4 ${category.color} shadow-xl hover:shadow-2xl
            hover:-translate-y-2 transition-all duration-300`}>
              <div className='text-4xl mb-4'> 
                {category.icon}
              </div>
              <h3 className='text-2xl font-bold text-slate-800 dark:text-white mb-2'>
                {category.title}
              </h3> 
              <p className='text-sm text-slate-500 dark:text-slate-400 mb-8'>
                {category.description}
              </p>

              <div className='space-y-6'>
                {category.skills.map((skill, i)=>(
                  <div key={i}>
                    <div className='flex justify-between items-center mb-2'>

                      <span className='text-sm font-semibold text-slate-700 dark:text-slate-300'>
                        {skill.name}
                      </span>
                      <span className='text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded'>
                        {skill.level}
                      </span>
                    </div>

                    {/* progress bar container */}
                    <div className='w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden'>
                      <div
                      className={`${category.barColor} h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{width:skill.level}}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills