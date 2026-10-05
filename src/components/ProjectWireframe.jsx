import React from 'react';
import { 
  ShoppingBag, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  Package, 
  Compass, 
  Calendar,
  Sparkles,
  Server
} from 'lucide-react';

export default function ProjectWireframe({ type, _interactive = false }) {
  // Browser frame container
  const renderBrowserFrame = (children, title, urlSlug) => (
    <div className="w-full h-full min-h-[260px] max-h-[340px] bg-[#070B14] rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative group">
      {/* Browser Bar */}
      <div className="bg-[#0A101E] px-3 py-2 border-b border-white/5 flex items-center justify-between text-xs select-none">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-[#05070D] border border-white/5 text-slate-400 px-3 py-0.5 rounded-md text-[11px] font-mono flex items-center space-x-1.5 truncate max-w-[200px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>https://{urlSlug}</span>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
          {title}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-4 flex-1 overflow-hidden relative font-sans text-xs">
        {children}
      </div>
    </div>
  );

  switch (type) {
    case 'portfolio':
      return renderBrowserFrame(
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-cyan-400 font-semibold tracking-wide">~/praneeth.dev</span>
            <div className="flex space-x-2 text-[10px] text-slate-400">
              <span>About</span>
              <span>Work</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="text-slate-400 text-[10px] font-mono">HELLO WORLD · B.TECH 2026</div>
            <div className="text-sm font-semibold text-slate-100 mt-1">Full Stack Developer</div>
            <div className="mt-2 flex gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 text-[10px] border border-violet-500/20">HTML/CSS</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] border border-cyan-500/20">JavaScript</span>
              <span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-300 text-[10px] border border-slate-500/20">Responsive</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="h-12 rounded border border-white/5 bg-white/[0.01] p-2 flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-violet-500/20 flex items-center justify-center text-violet-400"><Globe size={12} /></div>
              <div className="space-y-1">
                <div className="w-12 h-2 rounded bg-white/20" />
                <div className="w-8 h-1.5 rounded bg-white/10" />
              </div>
            </div>
            <div className="h-12 rounded border border-white/5 bg-white/[0.01] p-2 flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400"><Layers size={12} /></div>
              <div className="space-y-1">
                <div className="w-10 h-2 rounded bg-white/20" />
                <div className="w-6 h-1.5 rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>,
        'Frontend UI',
        'praneeth-portfolio.vercel.app'
      );

    case 'tracker':
      return renderBrowserFrame(
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-200 font-medium">GWC Progress Tracker</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Active Sprint</span>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-r from-violet-950/30 to-cyan-950/20 border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-mono">Completion Rate</div>
              <div className="text-lg font-bold text-white mt-0.5">100% Milestone</div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center font-mono text-[11px] text-cyan-300 font-bold">
              12w
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span className="text-slate-300 text-[11px]">Workflow State Engine</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Done</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.02] border border-white/5">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span className="text-slate-300 text-[11px]">Data Handling UI</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">Done</span>
            </div>
          </div>
        </div>,
        'Workflow State',
        'gwc-tracker.vercel.app'
      );

    case 'business':
      return renderBrowserFrame(
        <div className="space-y-2.5">
          <div className="flex justify-between items-center pb-1 border-b border-white/5">
            <span className="font-semibold text-slate-100 flex items-center gap-1.5">
              <Compass size={13} className="text-cyan-400" /> GP Tech Solutions
            </span>
            <span className="text-[10px] text-slate-400">Enterprise Services</span>
          </div>
          <div className="p-2.5 rounded bg-white/[0.02] border border-white/5 text-center">
            <div className="text-[10px] text-cyan-400 font-mono">SCALABLE ARCHITECTURE</div>
            <div className="text-xs font-semibold text-white mt-0.5">Modern Digital Transformation</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-center">
              <Server size={14} className="mx-auto text-violet-400 mb-1" />
              <div className="text-[10px] font-medium text-slate-300 truncate">Cloud Sys</div>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-center">
              <Layers size={14} className="mx-auto text-cyan-400 mb-1" />
              <div className="text-[10px] font-medium text-slate-300 truncate">SaaS Dev</div>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-center">
              <ShieldCheck size={14} className="mx-auto text-sky-400 mb-1" />
              <div className="text-[10px] font-medium text-slate-300 truncate">Security</div>
            </div>
          </div>
        </div>,
        'B2B Solutions',
        'gp-tech-solutions.vercel.app'
      );

    case 'marketplace':
      return renderBrowserFrame(
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <ShoppingBag size={14} className="text-violet-400" />
              <span>SellSpot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">JWT Verified</span>
              <div className="w-5 h-5 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] text-white">🛒</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="h-14 rounded bg-gradient-to-tr from-violet-950/40 to-slate-900 border border-white/5 flex items-center justify-center text-slate-600">
                <Package size={18} className="text-violet-400/80" />
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-200 font-medium">Mechanical Mech</span>
                <span className="text-cyan-400 font-mono">$120</span>
              </div>
              <div className="w-full py-1 text-center bg-violet-600/30 hover:bg-violet-600/40 text-[10px] rounded text-violet-200 font-medium border border-violet-500/30">
                Add to Cart
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="h-14 rounded bg-gradient-to-tr from-cyan-950/40 to-slate-900 border border-white/5 flex items-center justify-center text-slate-600">
                <Package size={18} className="text-cyan-400/80" />
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-200 font-medium">Ultra Display</span>
                <span className="text-cyan-400 font-mono">$340</span>
              </div>
              <div className="w-full py-1 text-center bg-cyan-600/30 hover:bg-cyan-600/40 text-[10px] rounded text-cyan-200 font-medium border border-cyan-500/30">
                Add to Cart
              </div>
            </div>
          </div>
        </div>,
        'MERN Marketplace',
        'sell-spot-frontend.vercel.app'
      );

    case 'inventory':
      return renderBrowserFrame(
        <div className="space-y-2.5">
          <div className="flex items-center justify-between pb-1 border-b border-white/5">
            <div className="flex items-center gap-1.5 font-semibold text-slate-200">
              <BarChart3 size={14} className="text-cyan-400" />
              <span>Inventory / Regions</span>
            </div>
            <div className="flex gap-1 text-[10px] font-mono">
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">North</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-slate-400">West</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-slate-400">South</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="p-2 rounded bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-300">Central Warehouse Stock</span>
                <span className="text-emerald-400 font-mono">8,420 units</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 w-[78%]" />
              </div>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-300">Regional Transit Dispatch</span>
                <span className="text-amber-400 font-mono">1,150 units</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-amber-400 w-[42%]" />
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1">
            <span>REST API Active</span>
            <span className="text-cyan-400">MongoDB Synced</span>
          </div>
        </div>,
        'Operations System',
        'inventory-management.vercel.app'
      );

    case 'domo':
      return renderBrowserFrame(
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-bold text-slate-200">
              <div className="w-2.5 h-2.5 rounded-sm bg-sky-400" />
              <span>Domo Enterprise App</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Privileged Role</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 rounded bg-white/[0.02] border border-white/5">
              <div className="text-[9px] text-slate-400 uppercase font-mono">Revenue KPI</div>
              <div className="text-sm font-bold text-white mt-0.5">$840K</div>
              <div className="text-[9px] text-emerald-400">↑ 14.2%</div>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/5">
              <div className="text-[9px] text-slate-400 uppercase font-mono">Exec Index</div>
              <div className="text-sm font-bold text-sky-400 mt-0.5">99.4</div>
              <div className="text-[9px] text-sky-300">Optimal</div>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/5">
              <div className="text-[9px] text-slate-400 uppercase font-mono">Instances</div>
              <div className="text-sm font-bold text-violet-400 mt-0.5">14</div>
              <div className="text-[9px] text-slate-400">Cluster</div>
            </div>
          </div>
          <div className="p-2.5 rounded bg-sky-950/20 border border-sky-500/20 flex items-center justify-between">
            <span className="text-[11px] text-slate-300 font-medium">Enterprise Analytics Telemetry</span>
            <span className="text-[10px] font-mono text-sky-400">Session Verified</span>
          </div>
        </div>,
        'Enterprise Analytics',
        'domoapps.prod5.domo.com'
      );

    case 'devasetu':
      return renderBrowserFrame(
        <div className="space-y-2.5">
          <div className="flex items-center justify-between pb-1 border-b border-white/5">
            <div className="flex items-center gap-1.5 font-bold text-violet-300">
              <Sparkles size={14} className="text-amber-400" />
              <span>DevaSetu SaaS</span>
            </div>
            <div className="flex gap-1 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-violet-500/30 text-violet-200 border border-violet-500/40">Devotee</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">Temple Auth</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">Admin</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-violet-950/40 to-slate-900 border border-violet-500/30 space-y-1.5">
            <div className="flex justify-between items-center">
              <div className="text-xs font-semibold text-white">Special Darshan & Seva Pass</div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">CONFIRMED</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-300 font-mono">
              <span className="flex items-center gap-1"><Calendar size={10} className="text-violet-400" /> Slot 09:30 AM</span>
              <span>Pass #DS-7829</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
              <ShieldCheck size={14} className="text-cyan-400" />
              <span className="text-slate-300">Role-Based JWT</span>
            </div>
            <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2">
              <Server size={14} className="text-violet-400" />
              <span className="text-slate-300">MongoDB Cloud</span>
            </div>
          </div>
        </div>,
        'Full-Stack SaaS',
        'frontend-temple-saas.vercel.app'
      );

    case 'ai':
      return renderBrowserFrame(
        <div className="space-y-2.5 relative overflow-hidden">
          {/* Laser scanning beam */}
          <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline z-10 opacity-70" />
          <div className="flex items-center justify-between pb-1 border-b border-white/5">
            <div className="flex items-center gap-1.5 font-bold text-cyan-300">
              <Cpu size={14} className="text-cyan-400" />
              <span>Rx Scanner & Analysis</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">AI Prototype</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-300">
              <FileText size={16} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-slate-400 font-mono">OCR EXTRACTION</div>
              <div className="text-xs font-semibold text-white">Prescription_Scan_042.pdf</div>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">Analyzed</span>
          </div>
          <div className="p-2 rounded bg-cyan-950/20 border border-cyan-500/20 space-y-1">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Detected Compounds & Schedules</div>
            <div className="flex gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] border border-cyan-500/30">Amoxicillin 500mg</span>
              <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 text-[10px] border border-violet-500/30">1 Tab / Post-Meal</span>
            </div>
          </div>
          <div className="text-[9px] text-slate-500 italic">
            * AI-assisted demo prototype. Not clinically validated.
          </div>
        </div>,
        'AI Assisted OCR',
        'frontend-ai-assessment.vercel.app'
      );

    case 'capstone':
    default:
      return renderBrowserFrame(
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-mono text-violet-400 font-semibold">~/portfolio-hub</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">Week 12 Capstone</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 font-mono uppercase">Timeline Universe</div>
              <div className="text-sm font-bold text-white mt-0.5">12 Weeks · 9 Projects</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-300">
              <Globe size={16} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
              <div className="text-slate-400 font-mono">3D Orbit</div>
              <div className="text-cyan-400 font-semibold">Three.js</div>
            </div>
            <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
              <div className="text-slate-400 font-mono">Engine</div>
              <div className="text-violet-400 font-semibold">React + Vite</div>
            </div>
            <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
              <div className="text-slate-400 font-mono">Styling</div>
              <div className="text-sky-400 font-semibold">Tailwind</div>
            </div>
          </div>
        </div>,
        'Interactive Hub',
        'portfolio-praneeth.vercel.app'
      );
  }
}
