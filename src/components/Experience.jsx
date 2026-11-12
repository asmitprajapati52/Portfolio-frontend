import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiExternalLink } from 'react-icons/fi';
import { experienceData } from '../data/experienceData';

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-20 bg-dark-bg transition-colors duration-300 overflow-hidden scroll-mt-24"
      aria-label="Professional Experience"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold uppercase tracking-widest text-[10px] sm:text-[11px] shadow-sm select-none mb-4">
            <FiBriefcase className="w-3.5 h-3.5 text-indigo-400" />
            MY JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work &amp; Leadership <span className="text-gradient font-black">Experience</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Practical internships, full-stack engineering training, and community hackathon organizing.
          </p>
          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-5 sm:mt-6 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central / Left Connecting Vertical Line */}
          <div
            className="absolute left-3.5 sm:left-6 md:left-8 top-3 bottom-6 w-[2px] bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experienceData.map((exp) => {
              return (
                <div
                  key={exp.id}
                  className="relative pl-9 sm:pl-16 md:pl-20 group"
                >
                  {/* Timeline Node Dot */}
                  <div
                    className="absolute left-3.5 sm:left-6 md:left-8 -translate-x-1/2 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-indigo-500/60 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:border-indigo-400 group-hover:scale-110 group-hover:shadow-indigo-500/40 transition-all duration-300 z-10"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                  </div>

                  {/* Experience Card */}
                  <article className="glass-card rounded-2xl p-5 sm:p-7 md:p-8 border border-white/5 shadow-2xl relative transition-all duration-300 group-hover:border-indigo-500/30">
                    {/* Top Header: Role, Organization & Badges */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2.5 sm:gap-4 pb-4 sm:pb-5 border-b border-white/5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-slate-300 text-xs sm:text-sm md:text-base font-semibold">
                          <span className="text-white font-extrabold tracking-wide">
                            {exp.organization}
                          </span>

                          {exp.event && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="text-purple-300 font-medium">
                                {exp.event}
                              </span>
                            </>
                          )}

                          {exp.location && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="inline-flex items-center gap-1 text-slate-400 text-xs sm:text-sm font-normal">
                                <FiMapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400" />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Metadata Chips: Duration & Type */}
                      <div className="flex flex-wrap md:flex-col md:items-end gap-1.5 sm:gap-2 shrink-0 pt-1 md:pt-0">
                        <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-sm select-none">
                          {exp.type}
                        </span>

                        {exp.duration && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-slate-400 bg-white/5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-white/5">
                            <FiCalendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                            {exp.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullet Points Description */}
                    <div className="mt-4 sm:mt-5 space-y-2">
                      <ul className="space-y-2 text-slate-300 text-xs sm:text-sm md:text-base font-sans leading-relaxed">
                        {exp.description.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 sm:gap-3">
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0 group-hover:scale-125 transition-transform"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Performance Achievement Callout (for IBM) */}
                    {exp.achievement && (
                      <div className="mt-5 sm:mt-6 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-transparent border border-emerald-500/30 flex items-start sm:items-center gap-2.5 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                          <FiAward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="text-xs sm:text-sm">
                          <span className="font-bold text-emerald-300 mr-1.5">
                            {exp.achievement.label}:
                          </span>
                          <span className="text-slate-300 font-medium">
                            {exp.achievement.detail}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Bottom Footer: Technologies and/or External Links */}
                    {(exp.technologies.length > 0 || exp.organizationLink) && (
                      <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                        {/* Tech Stack Chips */}
                        {exp.technologies.length > 0 ? (
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-slate-500 mr-1 select-none">
                              Tech:
                            </span>
                            {exp.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold px-2 sm:px-2.5 py-0.5 bg-indigo-500/10 text-indigo-300 rounded-md border border-indigo-500/20 select-none"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <div />
                        )}

                        {/* LinkedIn Organization Link (for DoraDAO) */}
                        {exp.organizationLink && (
                          <a
                            href={exp.organizationLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link ml-auto"
                            aria-label={`Visit ${exp.organization} on LinkedIn`}
                          >
                            <span>{exp.organizationLink.label}</span>
                            <FiExternalLink className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
