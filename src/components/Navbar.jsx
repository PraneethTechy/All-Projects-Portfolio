import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'journey', 'projects', 'stack', 'evolution', 'about'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Journey', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stack', href: '#stack' },
    { label: 'Evolution', href: '#evolution' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070D]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Left */}
          <a
            href="#hero"
            className="flex items-center space-x-2 text-white font-bold tracking-wider group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
              <Terminal size={16} />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-widest font-extrabold text-white">
                PRANEETH
              </span>
              <span className="text-[9px] font-mono text-cyan-400 -mt-1 tracking-wider uppercase">
                GWC DATA.AI TRAINEE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 border border-white/10 rounded-full px-4 py-1.5 bg-[#0D1424]/70 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-violet-600/30 text-white font-semibold border border-violet-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Quick CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#featured"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all flex items-center gap-1.5"
            >
              <span>Featured: DevaSetu</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F1C] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#featured"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-mono text-cyan-400 bg-cyan-950/30 rounded-lg border border-cyan-500/20 mt-2"
          >
            Featured: DevaSetu Platform →
          </a>
        </div>
      )}
    </nav>
  );
}
