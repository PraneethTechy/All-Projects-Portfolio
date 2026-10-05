import { ExternalLink, ArrowRight, Check, Lock, ShieldAlert } from 'lucide-react';
import ProjectWireframe from './ProjectWireframe';

export default function ProjectCard({ project, index, onSelect }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative group">
      <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}>
        
        {/* Project Visual / Wireframe Showcase (55% width on desktop) */}
        <div 
          onClick={() => onSelect(project)}
          className="w-full lg:w-[55%] cursor-pointer transform transition-all duration-300 group-hover:scale-[1.01]"
        >
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-violet-500/30 transition-colors">
            <ProjectWireframe type={project.visualType} />
            <div className="absolute inset-0 rounded-2xl bg-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            {/* Click to inspect overlay pill */}
            <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
              <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#0D1424]/90 text-cyan-300 border border-cyan-500/30 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                <span>View Architecture</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </div>
        </div>

        {/* Project Information Panel (45% width on desktop) */}
        <div className="w-full lg:w-[45%] space-y-4">
          
          {/* Micro Details: Index / Week / Category */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-500">{project.number} / 09</span>
            <span className="text-slate-700">·</span>
            <span className="px-2.5 py-0.5 rounded bg-violet-500/20 text-violet-300 font-semibold border border-violet-500/30">
              {project.week}
            </span>
            <span className="text-slate-700">·</span>
            <span className="text-cyan-400 font-medium uppercase tracking-wider">
              {project.shortCategory || project.category}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(project)}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-cyan-300 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0D1424] text-slate-300 border border-white/5 group-hover:border-violet-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-500 bg-white/[0.02]">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Special Auth Notice if Domo */}
          {project.requiresAuth && (
            <div className="text-[11px] font-mono text-amber-300/80 flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 w-fit">
              <Lock size={12} className="text-amber-400" />
              <span>{project.authNote}</span>
            </div>
          )}

          {/* AI Disclaimer tag if AI project */}
          {project.isAiProject && (
            <div className="text-[11px] font-mono text-cyan-300/80 flex items-center gap-1.5 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20 w-fit">
              <ShieldAlert size={12} className="text-cyan-400" />
              <span>AI-assisted prototype</span>
            </div>
          )}

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => onSelect(project)}
              className="px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Project Details</span>
              <ArrowRight size={14} />
            </button>

            {project.isSelf ? (
              <button
                onClick={() => onSelect(project)}
                className="text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
              >
                <span>CURRENT HUB</span>
                <Check size={14} />
              </button>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/link transition-colors"
              >
                <span>{project.buttonLabel || "LIVE PROJECT"}</span>
                <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
