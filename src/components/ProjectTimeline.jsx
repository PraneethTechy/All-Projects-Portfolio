import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Milestone } from 'lucide-react';

export default function ProjectTimeline({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const categories = ['ALL', 'FULL STACK', 'MERN', 'ENTERPRISE', 'AI'];

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'MERN') return project.category.includes('MERN');
    if (selectedFilter === 'FULL STACK') return project.category.includes('Full Stack') || project.category.includes('MERN');
    if (selectedFilter === 'ENTERPRISE') return project.category.includes('Management') || project.category.includes('Dashboard') || project.category.includes('Business');
    if (selectedFilter === 'AI') return project.isAiProject;
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#05070D] bg-tech-grid relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase mb-3">
              <Milestone size={13} />
              <span>Digital Engineering Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              The 12-Week Build Journey
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Chronological progression through all 9 full-stack applications, from foundational interfaces to production SaaS systems.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap bg-[#0D1424] p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Timeline Wrapper */}
        <div className="relative">
          
          {/* Vertical Central Progression Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-8 w-px bg-gradient-to-b from-violet-500/60 via-cyan-400/40 to-emerald-400/60 -translate-x-1/2 z-0" />

          {/* Project Items along the timeline */}
          <div className="space-y-20 lg:space-y-32">
            {filteredProjects.map((project, idx) => {
              return (
                <div key={project.id} className="relative z-10">
                  
                  {/* Central Timeline Milestone Node Indicator (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -top-6 -translate-x-1/2 flex-col items-center z-20">
                    <div className="px-3 py-1 rounded-full bg-[#05070D] border border-cyan-400/40 text-[11px] font-mono text-cyan-300 font-semibold shadow-lg shadow-cyan-950/50 flex items-center gap-1.5 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span>{project.week}</span>
                    </div>
                  </div>

                  {/* Mobile Milestone Badge */}
                  <div className="lg:hidden mb-4 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20" />
                    <span className="font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      {project.week} Milestone
                    </span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  {/* Project Card */}
                  <ProjectCard
                    project={project}
                    index={idx}
                    onSelect={onSelectProject}
                  />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
