import React from 'react';

// 1. Import your project images from your assets folder
// Replace these filenames with your actual image files
import sahayataImg from '../assets/Sahayata.png';
import lifelineImg from '../assets/Lifeline360.png';
const Projects = () => {
  const projectData = [
    {
      title: "Sahayata SOS",
      image: sahayataImg,
      description: "An anonymous reporting platform focused on user privacy and secure data handling during emergencies.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "https://sahayata-sos.netlify.app/",
    },
    {
      title: "Lifeline360",
      image: lifelineImg,
      description: "Real-time digital platform designed to reduce delays in medical emergencies by coordinating patients and ambulances.",
      tech: ["MERN Stack", "Socket.io", "Google Maps API"],
      link: "https://lifeline360-app.netlify.app/",
    },
    {
      title: "Skin Cancer Classifier",
      description: "A CNN model trained on the HAM10000 dataset to classify skin lesions with high accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "Flask"],
      link: "https://github.com/yourusername/skin-cancer-classifier", // Updated with a placeholder link
    },
  ];

  return (
    <section id='projects' className='py-20 px-10 md:px-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-6xl font-bold text-slate-900 dark:text-white'>
          Featured <span className='text-indigo-600'>Projects</span>
        </h2>
        <div className='h-1.5 w-24 bg-indigo-600 mx-auto mt-4 rounded-full'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className='group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700'
          >
            {/* Project Image Section */}
            <div className='h-52 overflow-hidden bg-indigo-100 dark:bg-slate-700 relative'>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              ) : (
                <div className='flex items-center justify-center h-full text-indigo-700 dark:text-indigo-300 font-extrabold text-xl'>
                  {project.title}
                </div>
              )}
              {/* Subtle Overlay on Hover */}
              <div className='absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-300'></div>
            </div>

            <div className='p-8'>
              <h3 className='text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors'>
                {project.title}
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3'>
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className='flex flex-wrap gap-2 mb-8'>
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className='text-[11px] uppercase tracking-wider font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-md dark:bg-slate-900 dark:text-indigo-300 border border-transparent dark:border-slate-700'
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className='flex justify-between items-center pt-4 border-t border-slate-50 dark:border-slate-700'>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-800 dark:hover:text-white transition-colors flex items-center gap-1 text-sm'
                >
                  View Project 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                {/* Optional Github Icon Placeholder */}
                <div className='text-slate-300 dark:text-slate-600'>
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;