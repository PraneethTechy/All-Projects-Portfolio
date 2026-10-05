import React from 'react';
import { 
  Monitor, 
  Atom, 
  Send, 
  Layers, 
  Lock, 
  Database, 
  BarChart, 
  Cpu, 
  CloudCheck,
  TrendingUp
} from 'lucide-react';

export default function JourneyIntro() {
  const progressionSteps = [
    { label: "FRONTEND", sub: "HTML & CSS", icon: Monitor, color: "from-sky-500/20 to-sky-500/5", border: "border-sky-500/30", text: "text-sky-300" },
    { label: "REACT", sub: "State & Components", icon: Atom, color: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-500/30", text: "text-cyan-300" },
    { label: "APIs", sub: "REST Integration", icon: Send, color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/30", text: "text-blue-300" },
    { label: "MERN", sub: "Stack Architecture", icon: Layers, color: "from-indigo-500/20 to-indigo-500/5", border: "border-indigo-500/30", text: "text-indigo-300" },
    { label: "AUTHENTICATION", sub: "JWT & Security", icon: Lock, color: "from-violet-500/20 to-violet-500/5", border: "border-violet-500/30", text: "text-violet-300" },
    { label: "DATABASES", sub: "MongoDB & Models", icon: Database, color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/30", text: "text-emerald-300" },
    { label: "DASHBOARDS", sub: "Analytics & Domo", icon: BarChart, color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/30", text: "text-amber-300" },
    { label: "AI", sub: "Intelligent Workflows", icon: Cpu, color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30", text: "text-purple-300" },
    { label: "DEPLOYMENT", sub: "Cloud Production", icon: CloudCheck, color: "from-teal-500/20 to-teal-500/5", border: "border-teal-500/30", text: "text-teal-300" },
  ];

  return (
    <section id="journey" className="py-24 bg-[#070B14] relative border-t border-b border-white/5">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase mb-4">
            <TrendingUp size={13} />
            <span>The Trainee Trajectory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Learning to Building
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Over 12 weeks, I worked through multiple full-stack development challenges, gradually moving from frontend fundamentals to real-world applications involving authentication, APIs, databases, dashboards, AI, deployment, and product-oriented development.
          </p>
        </div>

        {/* Visual Progression Pipeline */}
        <div className="relative">
          {/* Progression Line connecting items */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-violet-500 to-teal-400 -translate-y-1/2 z-0 opacity-30" />

          {/* Grid / Pipeline items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 relative z-10">
            {progressionSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="group relative flex flex-col items-center text-center p-3.5 rounded-xl bg-[#0D1424]/90 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/40"
                >
                  {/* Step counter */}
                  <div className="text-[10px] font-mono text-slate-500 mb-2">
                    0{idx + 1}
                  </div>

                  {/* Icon Circle */}
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-b ${step.color} border ${step.border} flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className={step.text} />
                  </div>

                  {/* Step Label */}
                  <div className="font-mono text-xs font-bold tracking-wider text-slate-100 uppercase">
                    {step.label}
                  </div>

                  {/* Subtext */}
                  <div className="text-[10px] text-slate-400 mt-1 truncate max-w-full">
                    {step.sub}
                  </div>

                  {/* Mobile Down Arrow for Flow */}
                  {idx < progressionSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-2.5 left-1/2 -translate-x-1/2 text-slate-600 z-20">
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Philosophy Summary Note */}
        <div className="mt-14 max-w-4xl mx-auto p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Continuous Iteration: Each milestone built on top of the architectural patterns of the last.</span>
          </div>
          <div className="text-cyan-400/80">
            12 Weeks · 9 Milestones
          </div>
        </div>

      </div>
    </section>
  );
}
