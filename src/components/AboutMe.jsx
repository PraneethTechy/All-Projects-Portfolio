import { User, GraduationCap, Code2, Database, Sparkles } from 'lucide-react';

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-[#05070D] bg-tech-grid relative border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1424]/90 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient corner accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-violet-600/10 via-cyan-500/5 to-transparent pointer-events-none rounded-bl-full" />

          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase mb-6">
            <User size={14} />
            <span>Developer Profile</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            About Me
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
            “I’m Praneeth, a 2026 B.Tech Computer Science graduate focused on Full Stack Development. During my Full Stack Development Trainee Internship at GWC Data.ai, I worked across frontend development, backend APIs, databases, authentication, dashboards, deployment, and AI-assisted applications.”
          </p>

          {/* Professional Credentials Bar */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-sm text-cyan-300">
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-violet-400" />
              <span>2026 B.Tech Graduate</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <Code2 size={16} className="text-cyan-400" />
              <span>Full Stack Development</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <Database size={16} className="text-emerald-400" />
              <span>MERN</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-amber-400" />
              <span>AI Exploration</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
