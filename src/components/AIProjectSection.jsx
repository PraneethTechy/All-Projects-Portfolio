import React from 'react';
import { 
  Cpu, 
  FileText, 
  Binary, 
  Pill, 
  ExternalLink, 
  ShieldAlert, 
  Sparkles, 
  Eye
} from 'lucide-react';
import { getProjectById } from '../data/projects';

export default function AIProjectSection({ onSelectProject }) {
  const aiProject = getProjectById('ai-prescription-scanner');

  const pipelineStages = [
    {
      title: "Prescription",
      desc: "Document image ingestion & pre-processing",
      icon: FileText,
      tag: "Raw Rx Ingestion"
    },
    {
      title: "AI Analysis",
      desc: "OCR extraction & optical token scanning",
      icon: Binary,
      tag: "Optical Parsing"
    },
    {
      title: "Structured Information",
      desc: "Entity recognition of medicine names & dosage",
      icon: Cpu,
      tag: "NLP Parsing"
    },
    {
      title: "Medicine Suggestions",
      desc: "Assisted dosage timing & cautionary advisory",
      icon: Pill,
      tag: "Workflow Engine"
    }
  ];

  return (
    <section id="ai-project" className="py-24 bg-[#05070D] bg-tech-grid relative border-b border-white/5">
      {/* Glow effects */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            <span>SPECIAL MILESTONE · AI EXPLORATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Exploring AI
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Prescription Scanner & Medicine Suggestion System
          </p>

          <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
            An AI-powered application designed to analyze prescriptions and provide medicine-related suggestions through an intelligent OCR processing workflow.
          </p>

          {/* Prototype disclaimer pill */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <ShieldAlert size={14} />
            <span>AI-assisted prototype · Demo for trainee evaluation · Not clinically validated</span>
          </div>
        </div>

        {/* Visual Pipeline Progression (Prescription → AI Analysis → Structured Information → Medicine Suggestions) */}
        <div className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={stage.title} className="relative group">
                  <div className="p-6 rounded-2xl bg-[#0D1424]/90 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col h-full shadow-lg group-hover:-translate-y-1">
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">STAGE 0{idx + 1}</span>
                    </div>

                    <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider mb-1">
                      {stage.tag}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed flex-1">
                      {stage.desc}
                    </p>

                    {/* Step indicator arrow */}
                    {idx < pipelineStages.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-cyan-400/60 font-bold text-base">
                        →
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight Architecture Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0D1424] via-cyan-950/30 to-[#0D1424] border border-cyan-500/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono uppercase text-cyan-300">Intelligent Health Tech Exploration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              End-to-End Prescription Ingestion & Parsing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Demonstrates practical AI integration into a web application: handles noisy input document images, coordinates optical character recognition, and maps extracted drug names to suggested dosage structures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onSelectProject(aiProject)}
              className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-semibold tracking-wide transition-all border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Inspect Workflow</span>
              <Eye size={14} />
            </button>

            <a
              href="https://frontend-ai-assessment-project.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white text-xs font-semibold tracking-wide transition-all shadow-lg shadow-cyan-600/25 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore AI Project</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
