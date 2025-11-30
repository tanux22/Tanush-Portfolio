
import React from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-[5%] py-6 flex justify-between items-center bg-panel backdrop-blur-md border-b border-white/10">
      <div className="font-display text-2xl font-extrabold tracking-widest drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
        ARAMATI <span className="text-neon-cyan">//</span> REDDY
      </div>
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-text-muted font-ui font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_#00f3ff]"
          >
            <span className="mr-1 opacity-50">{item.number}.</span> {item.label}
          </a>
        ))}
        
        {/* Resume Download Button */}
        <a 
            href="/resume.pdf" 
            download="Aramati_Tanush_Reddy_Resume.pdf"
            className="ml-4 px-6 py-2 border border-neon-cyan text-neon-cyan font-display font-bold text-xs uppercase tracking-widest hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_20px_#00f3ff] transition-all duration-300 clip-hud"
        >
            RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
