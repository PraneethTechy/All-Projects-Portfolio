import React from 'react';
import { Terminal, GitBranch, Wrench, CloudUpload, Globe, ShieldCheck } from 'lucide-react';

export default function DeploymentWall() {
  const pipeline = [
    { step: "CODE", icon: Terminal, desc: "React, Node.js & MERN Clean Architecture" },
    { step: "GITHUB", icon: GitBranch, desc: "Version Control & Branch Management" },
    { step: "BUILD", icon: Wrench, desc: "Vite Bundler & Production Artifacts" },
    { step: "DEPLOY", icon: CloudUpload, desc: "Automated CI/CD Edge Pipelines" },
    { step: "LIVE APPLICATION", icon: Globe, desc: "Global CDN & Production Domains" },
  ];

  return (
    <section className="py-24 bg-[#05070D] bg-tech-grid relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase mb-4">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>PRODUCTION ENGINEERING PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Code to Production
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            These were not merely local coding exercises. Each application was architected, built, and continuously deployed to live production environments.
          </p>
        </div>

        {/* Pipeline Progression Steps */}
        <div className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative">
            {pipeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="p-5 rounded-2xl bg-[#0D1424]/90 border border-white/10 hover:border-emerald-500/30 transition-all text-center flex flex-col items-center justify-between h-full group hover:-translate-y-1 shadow-lg">
                    
                    <div className="text-[10px] font-mono text-slate-500 mb-2">
                      STAGE 0{idx + 1}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>

                    <div className="font-mono text-xs font-bold text-white tracking-wider uppercase mb-1">
                      {item.step}
                    </div>

                    <div className="text-[11px] text-slate-400 leading-snug">
                      {item.desc}
                    </div>

                  </div>

                  {/* Flow Arrow */}
                  {idx < pipeline.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-emerald-400/50 font-bold">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Verified Deployment Badges */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-[#0D1424]/70 border border-white/10 flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-sm">
              ▲
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">Vercel Edge Platform</div>
              <div className="text-xs text-slate-400">8 Web Applications Hosted</div>
            </div>
          </div>

          <div className="w-px h-8 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-mono font-bold text-sm">
              DOMO
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm">Domo Cloud Workspace</div>
              <div className="text-xs text-slate-400">Enterprise Dashboard Platform</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
