import React from 'react';

// 1. Import your project images from your assets folder
import sahayataImg from '../assets/Sahayata.png';
import lifelineImg from '../assets/Lifeline360.png';
import CancerImg from '../assets/skinCancer.png';

const Projects = () => {
  const projectData = [
    {
      title: "Sahayata SOS",
      image: sahayataImg,
      description: "An anonymous reporting platform focused on user privacy and secure data handling during emergencies.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "https://sahayata-sos.netlify.app/",
      github: "https://github.com/asmitprajapati52/SOS-Crime-Report",
    },
    {
      title: "Lifeline360",
      image: lifelineImg,
      description: "Real-time digital platform designed to reduce delays in medical emergencies by coordinating patients and ambulances.",
      tech: ["MERN Stack", "Socket.io", "Google Maps API"],
      link: "https://lifeline360-app.netlify.app/",
      github: "https://github.com/asmitprajapati52/Lifeline360",
    },
    {
      title: "Skin Cancer Classifier",
      image: CancerImg,
      description: "A CNN model trained on the HAM10000 dataset to classify skin lesions with high accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "Flask"],
      link: "https://cancer-detection-lime.vercel.app",
      github: "https://github.com/asmitprajapati52/Cancer-Detection",
    },
  ];

  const animations = ['animate-float-medium', 'animate-float-slow', 'animate-float-fast'];

  return (
    <section id='projects' className='relative py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-dark-bg transition-colors duration-300 overflow-hidden'>

      {/* Ambient background glows */}
      <div className='absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-1/4 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none'></div>

      <div className='text-center mb-12 sm:mb-16 relative z-10'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white'>
          Featured <span className='text-gradient font-black'>Projects</span>
        </h2>
        <div className='h-1 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto relative z-10'>
        {projectData.map((project, index) => {
          const floatAnim = animations[index % animations.length];
          return (
            <div
              key={index}
              className={`group glass-card rounded-2xl overflow-hidden shadow-2xl relative border border-white/5 flex flex-col justify-between ${floatAnim}`}
            >
              <div>
                {/* Project Image Section */}
                <div className='h-48 sm:h-52 overflow-hidden bg-indigo-950/20 relative border-b border-white/5'>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  ) : (
                    <div className='flex items-center justify-center h-full text-indigo-400 font-extrabold text-lg sm:text-xl tracking-wider bg-gradient-to-br from-indigo-950/40 to-purple-950/40'>
                      {project.title}
                    </div>
                  )}
                  {/* Subtle Overlay on Hover */}
                  <div className='absolute inset-0 bg-indigo-950/20 group-hover:bg-transparent transition-colors duration-300'></div>
                </div>

                <div className='p-6 sm:p-8 pb-0'>
                  <h3 className='text-xl sm:text-2xl font-bold mb-2.5 sm:mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <p className='text-slate-400 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed line-clamp-3 font-sans'>
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6'>
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className='text-[10px] uppercase tracking-wider font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20 select-none'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='p-6 sm:p-8 pt-0'>
                <div className='flex justify-between items-center pt-4 border-t border-white/5'>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-xs sm:text-sm group/btn'
                  >
                    View Project
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  {/* GitHub Icon Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${project.title}`}
                    className='text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer p-1.5'
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
