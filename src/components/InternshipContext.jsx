import React from 'react';
import { weeklyTimeline } from '../data/timeline';
import { Building } from 'lucide-react';
import { getProjectById } from '../data/projects';

export default function InternshipContext({ onSelectProject }) {
  return (
    <section className="py-24 bg-[#070B14] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase mb-4">
            <Building size={14} className="text-cyan-400" />
            <span>FULL STACK DEVELOPMENT TRAINEE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            12 Weeks at GWC Data.ai
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            12 weeks of structured development, experimentation, problem solving, and project-based learning.
          </p>
        </div>

        {/* 12-Week Interactive Timeline Tracker with active projects and inactive weeks */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1424]/80 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">
              Weekly Progression Radar
            </span>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-slate-300">Active Deployed Project</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="text-slate-500">Training & Exploration Week</span>
              </div>
            </div>
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {weeklyTimeline.map((item) => {
              const project = item.projectId ? getProjectById(item.projectId) : null;
              return (
                <div
                  key={item.week}
                  onClick={() => project && onSelectProject(project)}
                  className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    item.hasProject
                      ? 'bg-white/[0.03] border-cyan-500/30 hover:border-violet-400 hover:bg-white/[0.07] cursor-pointer group shadow-md'
                      : 'bg-white/[0.01] border-white/5 opacity-55 cursor-default'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${item.hasProject ? 'text-cyan-300' : 'text-slate-500'}`}>
                      {item.week}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${item.hasProject ? 'bg-cyan-400 group-hover:bg-violet-400' : 'bg-slate-700'}`} />
                  </div>

                  <div className="my-1">
                    <div className={`text-xs font-semibold truncate ${item.hasProject ? 'text-white group-hover:text-cyan-300' : 'text-slate-400'}`}>
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                      {item.phase}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5 text-[10px] font-mono flex items-center justify-between">
                    <span className={item.hasProject ? 'text-emerald-400' : 'text-slate-600'}>
                      {item.hasProject ? 'Milestone' : 'Exploration'}
                    </span>
                    {item.hasProject && (
                      <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 font-mono">
            * Inactive dots reflect intensive core curriculum, backend database modeling, and architecture sprints without a separate standalone web delivery.
          </div>
        </div>

      </div>
    </section>
  );
}
