import React, { useState } from 'react';
import { technologies } from '../data/technologies';
import { projects } from '../data/projects';
import { Network, Layers } from 'lucide-react';

export default function TechConstellation({ onSelectProject }) {
  const [selectedTech, setSelectedTech] = useState(technologies[0]);

  // Find all projects that use the selected tech
  const connectedProjects = projects.filter((p) =>
    selectedTech.projects.includes(p.id)
  );

  return (
    <section id="stack" className="py-24 bg-[#070B14] relative border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase mb-4">
            <Network size={14} className="text-cyan-400" />
            <span>INTERACTIVE ARCHITECTURE GRAPH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies I Worked With
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Interactive constellation connecting technical proficiencies to project implementations across the 12-week internship.
          </p>
        </div>

        {/* Constellation Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Technology Node Pills Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-white/5">
              <Layers size={14} className="text-cyan-400" />
              <span>Select Technology Node</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const isSelected = selectedTech.name === tech.name;
                return (
                  <button
                    key={tech.name}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold shadow-lg shadow-violet-600/25 border border-cyan-400/40 scale-105'
                        : 'bg-[#0D1424] text-slate-300 hover:text-white hover:bg-[#131d33] border border-white/10'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-cyan-400'}`} />
                    <span>{tech.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-500'}`}>
                      {tech.projects.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Tech Metadata Summary */}
            <div className="p-5 rounded-2xl bg-[#0D1424]/80 border border-white/10 space-y-2 mt-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400 uppercase font-semibold">{selectedTech.category}</span>
                <span className="text-slate-400">{selectedTech.level}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {selectedTech.name}
              </h3>
              <p className="text-xs text-slate-400">
                Connected into {selectedTech.projects.length} project milestones during the training curriculum.
              </p>
            </div>
          </div>

          {/* Right: Connected Projects Tree Graph (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D1424]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-sm text-white font-semibold">
                  {selectedTech.name} Connection Tree
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {connectedProjects.length} Projects Linked
              </span>
            </div>

            {/* Visual Tree Mapping */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-violet-950/30 border border-violet-500/30 text-violet-200 font-bold flex items-center justify-between">
                <span>{selectedTech.name} (Source Node)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/30 text-white">ACTIVE ROOT</span>
              </div>

              <div className="pl-4 border-l-2 border-dashed border-cyan-500/30 space-y-3 mt-3">
                {connectedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onSelectProject(p)}
                    className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-cyan-400 font-bold">├──</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                            {p.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.2 rounded bg-white/5 text-slate-400">
                            {p.week}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                          {p.category}
                        </div>
                      </div>
                    </div>

                    <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium flex items-center gap-1">
                      <span>Inspect</span>
                      <span>→</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="pt-3 border-t border-white/5 text-xs text-slate-400 flex items-center justify-between">
              <span>* Derived strictly from actual project repository builds</span>
              <span className="font-mono text-cyan-400">Verified GWC Trainee Stack</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
