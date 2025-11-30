import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';
import ExperienceSection from './components/Experience';
import Education from './components/Education';
import Badges from './components/Badges';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import ParticleBackground from './components/ParticleBackground';
import BackgroundDecorations from './components/BackgroundDecorations';
import CyberGrid from './components/ui/CyberGrid';

const App: React.FC = () => {
  return (
    <div className="bg-void min-h-screen text-text-main font-body selection:bg-neon-cyan selection:text-black relative overflow-x-hidden">
      {/* VFX Layers */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9000] opacity-15 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px]"></div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[8999] bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.8)_100%)]"></div>
      
      <Cursor />
      <ParticleBackground />
      <CyberGrid />
      
      <Navbar />
      
      {/* Background 3D Decorations for the whole page */}
      <BackgroundDecorations />
      
      <main className="space-y-24 relative z-10">
        <Hero />
        <Skills />
        <Research />
        <Projects />
        <ExperienceSection />
        <Education />
        <Badges />
        <Contact />
      </main>

      <footer className="text-center py-16 border-t border-white/10 text-[#666] font-ui mt-24 relative z-10 bg-void flex flex-col items-center gap-6">
        <div className="max-w-md mx-auto relative px-8">
            <i className="fas fa-quote-left absolute -top-4 left-0 text-neon-purple/30 text-2xl"></i>
            <p className="font-display text-white text-lg tracking-wide uppercase leading-relaxed drop-shadow-md">
                "Any sufficiently advanced technology is indistinguishable from magic."
            </p>
            <i className="fas fa-quote-right absolute -bottom-4 right-0 text-neon-purple/30 text-2xl"></i>
            <p className="text-neon-cyan text-sm mt-2 font-bold">- Arthur C. Clarke</p>
        </div>
        <p className="text-sm tracking-widest opacity-60 mt-4">
            SYSTEM STATUS: ONLINE <span className="text-neon-cyan mx-2">//</span> &copy; 2026 ARAMATI TANUSH REDDY
        </p>
      </footer>
    </div>
  );
};

export default App;