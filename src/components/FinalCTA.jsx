import React, { useState } from 'react';
import { ArrowRight, Mail, Sparkles, Check, Copy } from 'lucide-react';

export default function FinalCTA() {
  const [copied, setCopied] = useState(false);
  const email = "ganithala.praneeth@gwcdata.ai";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-[#05070D] to-[#080C18] relative overflow-hidden text-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-violet-600/15 to-cyan-500/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase mb-6">
          <Sparkles size={14} className="text-cyan-400" />
          <span>BEYOND THE INTERNSHIP</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          The Journey Doesn't End at Week 12.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          “Every project added another layer to my understanding of building real-world software.”
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-violet-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0D1424] hover:bg-[#151f38] text-slate-200 hover:text-white border border-white/10 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail size={16} className="text-cyan-400" />
            <span>{copied ? "Copied Email Address!" : "Connect With Me"}</span>
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={14} className="text-slate-500" />}
          </button>
        </div>

        {copied && (
          <div className="mt-3 text-xs font-mono text-emerald-400 animate-in fade-in">
            {email} copied to clipboard
          </div>
        )}

      </div>
    </section>
  );
}
