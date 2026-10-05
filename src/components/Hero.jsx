import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import HeroScene from '../3d/HeroScene';

export default function Hero({ onSelectProject }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#05070D] bg-tech-grid"
    >
      {/* 3D Background Universe */}
      <HeroScene onSelectProject={onSelectProject} />

      {/* Radial depth light gradient overlays (non-blocking) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070D]/40 via-transparent to-[#05070D] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-600/10 to-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        
        {/* Small Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 pointer-events-auto shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-slate-300 uppercase">
            GWC DATA.AI · FULL STACK DEVELOPMENT TRAINEE
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] sm:leading-[1.1] mb-6">
          <span className="block text-slate-100">12 Weeks.</span>
          <span className="block bg-gradient-to-r from-violet-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            9 Projects.
          </span>
          <span className="block text-slate-200">One Full-Stack Journey.</span>
        </h1>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
          An interactive showcase of everything I built during my 12-week Full Stack Development Trainee Internship at <span className="text-white font-medium">GWC Data.ai</span>.
        </p>

        {/* Profile metadata badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-cyan-300/90 mb-10 px-4 py-2 rounded-xl bg-[#0D1424]/70 border border-white/10 backdrop-blur-md pointer-events-auto">
          <span>2026 B.Tech Graduate</span>
          <span className="text-slate-600">·</span>
          <span>Full Stack Developer</span>
          <span className="text-slate-600">·</span>
          <span className="text-violet-300">MERN Stack</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
          <a
            href="#journey"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-violet-600/20 hover:shadow-violet-600/35 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore My Journey</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0D1424]/90 hover:bg-[#131d33] text-slate-200 hover:text-white border border-white/10 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Projects (9)</span>
          </a>
        </div>

        {/* 3D Interaction Tip */}
        <div className="mt-12 text-[11px] font-mono text-slate-500 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span>Interactive 3D universe: move cursor to tilt scene · click nodes to inspect</span>
        </div>
      </div>

      {/* Down arrow scroll prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-auto opacity-70 hover:opacity-100 transition-opacity">
        <a href="#journey" className="p-2 rounded-full border border-white/10 bg-[#0D1424]/50 text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Scroll down">
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
