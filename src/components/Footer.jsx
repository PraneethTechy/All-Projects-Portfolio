import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#05070D] border-t border-white/10 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white">
              <Terminal size={14} />
            </div>
            <div>
              <span className="font-bold text-white tracking-wider">PRANEETH</span>
              <span className="text-slate-500 mx-2">·</span>
              <span className="text-slate-400">GWC Data.ai Trainee Assessment</span>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-[11px] text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Hero</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#stack" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0D1424] border border-white/10 hover:border-violet-400 text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            aria-label="Back to top"
          >
            <span className="text-[11px]">Top</span>
            <ArrowUp size={14} />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            12 Weeks · 9 Projects · One Full-Stack Journey
          </div>
          <div>
            Designed & Engineered with React, Three.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
