import React from 'react';
import { Calendar, FolderGit2, Globe2, Cpu, Rocket } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { value: "12", label: "Weeks", sub: "Intensive Trainee Internship", icon: Calendar, color: "text-violet-400" },
    { value: "9", label: "Projects", sub: "End-to-End Applications", icon: FolderGit2, color: "text-cyan-400" },
    { value: "8+", label: "Deployed Applications", sub: "Live Production Environments", icon: Globe2, color: "text-sky-400" },
    { value: "1", label: "AI Project", sub: "Prescription OCR Analysis", icon: Cpu, color: "text-emerald-400" },
    { value: "1", label: "Full-Stack Journey", sub: "From Foundations to SaaS", icon: Rocket, color: "text-amber-400" },
  ];

  return (
    <section className="py-20 bg-[#070B14] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, _idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-[#0D1424]/90 border border-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center justify-center shadow-lg group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={20} className={stat.color} />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                  {stat.value}
                </div>

                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>

                <div className="text-[11px] text-slate-500 font-mono mt-1">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
