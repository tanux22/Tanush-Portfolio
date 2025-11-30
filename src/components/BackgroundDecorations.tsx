import React from 'react';

const BackgroundDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      
      {/* --- ZONE 1: SKILLS (Top Right) --- */}
      {/* Large Rotating Dashed Ring */}
      <div className="absolute top-[15%] -right-[10%] w-[600px] h-[600px] border-2 border-dashed border-neon-cyan/20 rounded-full animate-spin-ultra-slow shadow-[0_0_30px_rgba(0,243,255,0.1)]"></div>
      <div className="absolute top-[15%] -right-[10%] w-[600px] h-[600px] rounded-full border border-neon-purple/10 scale-75"></div>
      
      {/* Floating Cube Cluster */}
      <div className="absolute top-[18%] left-[5%] perspective-1000 hidden lg:block">
        <div className="w-24 h-24 border-2 border-neon-purple bg-neon-purple/10 animate-float-slow rotate-12 transform-style-3d shadow-[0_0_20px_rgba(188,19,254,0.3)]">
             <div className="absolute inset-0 border border-white/20 transform translate-z-10"></div>
        </div>
      </div>

      {/* --- ZONE 2: RESEARCH / PROJECTS (Middle Left) --- */}
      {/* Giant Cyber Pyramid */}
      <div className="absolute top-[35%] -left-[100px] w-0 h-0 border-l-[150px] border-r-[150px] border-b-[250px] border-l-transparent border-r-transparent border-b-neon-cyan/10 animate-float-medium rotate-45 blur-sm drop-shadow-[0_0_20px_rgba(0,243,255,0.2)]"></div>
      
      {/* Vertical Data Line */}
      <div className="absolute top-[30%] left-[10%] h-[800px] w-0.5 bg-gradient-to-b from-transparent via-neon-cyan/40 to-transparent hidden md:block"></div>
      <div className="absolute top-[32%] left-[10%] -translate-x-1/2 text-neon-cyan/60 text-xs font-display rotate-90 tracking-widest font-bold">
         SYSTEM_ARCH_V2.0 // DEPLOYED
      </div>

      {/* Extra floating bits */}
      <div className="absolute top-[40%] right-[20%] w-4 h-4 bg-neon-pink/40 animate-pulse rotate-45"></div>
      <div className="absolute top-[42%] right-[15%] w-2 h-2 bg-neon-cyan/40 animate-pulse delay-700"></div>

      {/* --- ZONE 3: EXPERIENCE (Middle Right) --- */}
      {/* Hexagonal Grid Overlay */}
      <div className="absolute top-[55%] right-0 w-[500px] h-[500px] opacity-15" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #0aff0a 2px, transparent 2px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      {/* 3D Floating Geometry */}
      <div className="absolute top-[50%] right-[10%] perspective-2000 hidden md:block">
         <div className="w-32 h-32 border-2 border-neon-gold/30 bg-neon-gold/5 animate-spin-slow rotate-x-12 rotate-y-12 shadow-[0_0_20px_rgba(255,215,0,0.2)]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-neon-gold/20 animate-pulse border border-neon-gold/40"></div>
      </div>

      {/* --- ZONE 4: EDUCATION / BADGES (Bottom) --- */}
      {/* Circuit Pattern SVG */}
      <svg className="absolute top-[75%] left-0 w-full h-[400px] opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
           <path d="M10 10 h80 v80 h-80 Z" fill="none" stroke="white" strokeWidth="1"/>
           <path d="M50 10 v80 M10 50 h80" fill="none" stroke="white" strokeWidth="0.5"/>
           <circle cx="50" cy="50" r="5" fill="white"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Bottom Fog */}
      <div className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-neon-purple/10 to-transparent pointer-events-none"></div>

      {/* --- GLOBAL SCATTERED PARTICLES --- */}
      <div className="absolute top-[25%] right-[25%] text-neon-pink/10 font-display text-9xl font-bold select-none rotate-12 blur-sm">01</div>
      <div className="absolute top-[65%] left-[15%] text-neon-cyan/10 font-display text-9xl font-bold select-none -rotate-12 blur-sm">XP</div>
      <div className="absolute top-[85%] right-[5%] text-neon-green/10 font-display text-9xl font-bold select-none rotate-90 blur-sm">DB</div>
      
      {/* More random shapes */}
      <div className="absolute top-[60%] left-[5%] w-12 h-1 bg-neon-green/20"></div>
      <div className="absolute top-[62%] left-[5%] w-8 h-1 bg-neon-green/20"></div>
      <div className="absolute top-[90%] left-[20%] w-20 h-20 border border-neon-cyan/10 rounded-full animate-ping"></div>

    </div>
  );
};

export default BackgroundDecorations;