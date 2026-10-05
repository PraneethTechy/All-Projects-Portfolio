import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ShieldAlert, 
  Lock, 
  Sparkles,
  Code2
} from 'lucide-react';
import ProjectWireframe from './ProjectWireframe';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#05070D]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl bg-[#0A0F1C] border border-white/10 rounded-2xl shadow-2xl shadow-violet-950/30 overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D1424]/60">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
              {project.week}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Main Title & Description */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-slate-500">PROJECT {project.number}</span>
              {project.highlightBadge && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {project.highlightBadge}
                </span>
              )}
              {project.isAiProject && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  AI-assisted prototype
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Abstract Wireframe Interactive Visual */}
          <div className="py-2">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Code2 size={13} className="text-violet-400" />
              <span>Architectural Interface Wireframe</span>
            </div>
            <ProjectWireframe type={project.visualType} interactive />
          </div>

          {/* What I Built */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>What I Built</span>
            </h3>
            <ul className="space-y-2">
              {project.whatIBuilt.map((point, index) => (
                <li key={index} className="flex items-start text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 mr-3 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Focus */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers size={16} className="text-cyan-400" />
              <span>Development Focus</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.developmentFocus.map((focus, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#0D1424] text-slate-200 border border-white/10"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
              <Sparkles size={16} className="text-violet-400" />
              <span>Technologies</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-950/40 text-violet-200 border border-violet-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Domo Notice or AI Disclaimer if applicable */}
          {project.requiresAuth && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200">
              <Lock size={16} className="shrink-0 mt-0.5 text-amber-400" />
              <div>
                <span className="font-semibold">{project.authNote}</span>
                <p className="text-amber-200/80 mt-0.5">
                  This enterprise application resides in the private GWC Data.ai Domo workspace. The query parameters provide session context.
                </p>
              </div>
            </div>
          )}

          {project.isAiProject && project.disclaimer && (
            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-start gap-3 text-xs text-cyan-200">
              <ShieldAlert size={16} className="shrink-0 mt-0.5 text-cyan-400" />
              <div>
                <span className="font-semibold">Healthcare Prototype Disclaimer:</span>
                <p className="text-cyan-200/80 mt-0.5">
                  {project.disclaimer}
                </p>
              </div>
            </div>
          )}

          {/* Live Action CTA Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              Status: <span className="text-emerald-400 font-semibold">Production Deployed</span>
            </div>

            {project.isSelf ? (
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-600/30 cursor-pointer"
              >
                <span>You are currently exploring this platform</span>
                <CheckCircle2 size={16} />
              </button>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-600/25 group cursor-pointer"
              >
                <span>{project.buttonLabel || "Open Live Project"}</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
