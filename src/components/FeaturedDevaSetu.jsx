import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Users, 
  Building2, 
  Settings, 
  CalendarCheck, 
  Database,
  Lock,
  Cloud
} from 'lucide-react';
import { getProjectById } from '../data/projects';

export default function FeaturedDevaSetu({ onSelectProject }) {
  const [activeRole, setActiveRole] = useState('devotee');
  const devasetuProject = getProjectById('devasetu');

  const roleDetails = {
    devotee: {
      title: "Devotee Portal",
      description: "Intuitive interface for discovering sacred temples, viewing availability, booking special darshan/seva passes, and managing devotional itineraries.",
      capabilities: ["Online Seva Booking", "Real-time Slot Verification", "Digital E-Pass Generation"]
    },
    authority: {
      title: "Temple Authority Console",
      description: "Dedicated dashboard for temple administration to configure pooja schedules, oversee priest allocations, manage queue capacities, and verify entry passes.",
      capabilities: ["Daily Darshan Capacity Limits", "Service Master Setup", "Pass Scanner & Validation"]
    },
    admin: {
      title: "Platform Super Admin",
      description: "Enterprise system controller governing platform-wide temple onboarding, financial settlement reconciliation, security logs, and role permissions.",
      capabilities: ["Multi-Temple Onboarding", "Role-Based Access Control", "Platform Telemetry & Audit"]
    }
  };

  return (
    <section id="featured" className="py-24 bg-gradient-to-b from-[#05070D] via-[#090D1C] to-[#05070D] relative border-t border-b border-white/10 overflow-hidden">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-amber-500/10 to-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cinematic Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase mb-4 shadow-sm">
            <Sparkles size={14} className="text-amber-400" />
            <span>WEEK 12 · CAPSTONE FEATURED PROJECT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            DevaSetu
          </h2>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium">
            “From individual application development to a multi-role full-stack platform.”
          </p>

          <p className="mt-2 text-sm text-slate-400 max-w-2xl mx-auto">
            A comprehensive MERN-stack temple service platform engineered to unite devotees, temple authorities, and administrators through structured digital workflows.
          </p>
        </div>

        {/* Cinematic Multi-Role Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Role Navigation & Dynamic Preview */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-1.5 rounded-xl bg-[#0D1424] border border-white/10 flex gap-2">
              <button
                onClick={() => setActiveRole('devotee')}
                className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeRole === 'devotee'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Users size={14} />
                <span>Devotee</span>
              </button>

              <button
                onClick={() => setActiveRole('authority')}
                className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeRole === 'authority'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 size={14} />
                <span>Temple Auth</span>
              </button>

              <button
                onClick={() => setActiveRole('admin')}
                className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeRole === 'admin'
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Settings size={14} />
                <span>Admin</span>
              </button>
            </div>

            {/* Active Role Content Card */}
            <div className="p-6 rounded-2xl bg-[#0D1424]/90 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={20} className="text-cyan-400" />
                  <span>{roleDetails[activeRole].title}</span>
                </h3>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Role-Guarded
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {roleDetails[activeRole].description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Core Workflows:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {roleDetails[activeRole].capabilities.map((cap, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Platform Role Progression Diagram */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-violet-300 font-semibold">Devotee</span>
              <span>↕</span>
              <span className="px-3 py-1 rounded bg-violet-500/20 text-white border border-violet-500/30">DevaSetu Platform</span>
              <span>↕</span>
              <span className="text-cyan-300 font-semibold">Temple Authority</span>
              <span>↕</span>
              <span className="text-amber-300 font-semibold">Admin</span>
            </div>

          </div>

          {/* Right: Technical Pillar Stack & Live CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "MERN Stack", desc: "MongoDB, Express, React, Node", icon: Database },
                { name: "Authentication", desc: "Secure Token Auth", icon: Lock },
                { name: "Role-Based Access", desc: "Granular Permissions", icon: ShieldCheck },
                { name: "Bookings", desc: "Atomic Schedule Slots", icon: CalendarCheck },
                { name: "Dashboards", desc: "Operational Telemetry", icon: Users },
                { name: "Cloud Deployment", desc: "Production Hosted", icon: Cloud },
              ].map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.name}
                    className="p-4 rounded-xl bg-[#0D1424]/70 border border-white/5 hover:border-violet-500/30 transition-all hover:-translate-y-0.5"
                  >
                    <Icon size={18} className="text-cyan-400 mb-2" />
                    <div className="font-semibold text-xs text-slate-100">{pillar.name}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{pillar.desc}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-950/40 to-cyan-950/30 border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-cyan-300 uppercase">Live SaaS Application</div>
                <div className="text-base font-bold text-white">Experience DevaSetu in Production</div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onSelectProject(devasetuProject)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-semibold tracking-wide transition-all border border-white/10 cursor-pointer"
                >
                  Architecture Details
                </button>

                <a
                  href="https://frontend-temple-saas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-semibold tracking-wide transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore DevaSetu</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
