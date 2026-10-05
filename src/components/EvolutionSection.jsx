import { Sparkles, Check } from 'lucide-react';

export default function EvolutionSection() {
  const evolutionStages = [
    {
      num: "01",
      title: "Foundations",
      badge: "Weeks 01 - 02",
      description: "Establishing bedrock engineering practices in responsive UI, semantic document structure, and modern browser standards.",
      skills: ["Frontend fundamentals", "Responsive layouts", "HTML", "CSS", "JavaScript"]
    },
    {
      num: "02",
      title: "Application Development",
      badge: "Weeks 02 - 04",
      description: "Transitioning from static pages to reactive, component-driven user interfaces and client-side lifecycle management.",
      skills: ["React", "Routing", "Reusable components", "State management", "APIs"]
    },
    {
      num: "03",
      title: "Full Stack",
      badge: "Weeks 04 - 08",
      description: "Bridging the client and server with transactional databases, token authorization, and resilient API contracts.",
      skills: ["Node.js", "Express", "MongoDB", "Authentication", "REST APIs"]
    },
    {
      num: "04",
      title: "Product Thinking",
      badge: "Weeks 09 - 12",
      description: "Engineering cohesive digital systems with enterprise analytics, multi-role SaaS access, cloud hosting, and AI prototypes.",
      skills: ["Dashboards", "Deployment", "AI", "Complex workflows", "Real-world applications"]
    }
  ];

  return (
    <section id="evolution" className="py-24 bg-[#05070D] bg-tech-grid relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            <span>GROWTH ARC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How I Evolved
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A 4-stage progression from web markup basics to enterprise-ready SaaS and AI-assisted application architecture.
          </p>
        </div>

        {/* 4 Evolutionary Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {evolutionStages.map((stage) => (
            <div
              key={stage.num}
              className="relative rounded-2xl bg-[#0D1424]/80 border border-white/10 hover:border-violet-500/40 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/30 group"
            >
              <div>
                {/* Header Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                    {stage.num}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {stage.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Skills checklist */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Key Capabilities:
                </div>
                <ul className="space-y-1.5">
                  {stage.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-xs text-slate-300">
                      <Check size={13} className="text-cyan-400 mr-2 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glowing accent border bottom */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-violet-500/0 to-transparent group-hover:via-violet-400 transition-all" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
