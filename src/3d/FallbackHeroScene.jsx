import React from 'react';
import { projects } from '../data/projects';

export default function FallbackHeroScene({ onSelectProject }) {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#7C3AED]/20 to-[#06B6D4]/15 blur-3xl" />
      
      {/* Central animated orbital rings */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: '40s' }}>
        <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '28s' }} />
        <div className="absolute inset-12 rounded-full border border-violet-400/30 animate-pulse" />
        
        {/* Core center icon */}
        <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-violet-500/30">
          <div className="w-8 h-8 rounded-full bg-[#05070D] flex items-center justify-center text-xs font-mono font-bold text-cyan-400">
            GWC
          </div>
        </div>

        {/* 9 Orbital Node dots */}
        {projects.map((proj, idx) => {
          const angle = (idx / projects.length) * 360;
          return (
            <button
              key={proj.id}
              onClick={() => onSelectProject && onSelectProject(proj)}
              style={{
                transform: `rotate(${angle}deg) translate(145px) rotate(-${angle}deg)`,
              }}
              className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-[#0D1424] border border-cyan-400/60 hover:border-violet-400 hover:scale-125 transition-transform flex items-center justify-center pointer-events-auto shadow-md shadow-cyan-500/30 group"
              title={`${proj.week}: ${proj.title}`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-violet-400" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
