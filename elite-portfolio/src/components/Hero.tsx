
import React, { useRef, useState } from 'react';
import GlitchText from './ui/GlitchText';
import HoloButton from './ui/HoloButton';
import Reveal from './ui/Reveal';
// CyberGrid removed here, moved to App.tsx

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <header id="about" className="min-h-[110vh] relative overflow-hidden flex items-center justify-center pt-24 pb-12 px-[5%]">
      
      {/* 3D Wireframe Globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-neon-cyan/10 rounded-full animate-spin-ultra-slow pointer-events-none -z-10">
          <div className="absolute inset-0 border border-neon-purple/10 rounded-full scale-75 animate-reverse-spin"></div>
          <div className="absolute inset-0 border-t border-b border-neon-cyan/20 rounded-full animate-pulse"></div>
      </div>

      {/* Floating Geometry - Enhanced Visibility */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Cube 1 */}
          <div className="absolute top-[15%] left-[10%] w-24 h-24 border-2 border-neon-purple bg-neon-purple/5 animate-spin-slow opacity-80 shadow-[0_0_20px_rgba(188,19,254,0.3)]"></div>
          
          {/* Pyramid-ish */}
          <div className="absolute bottom-[20%] right-[5%] w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-neon-cyan/60 animate-float-medium filter drop-shadow-[0_0_10px_#00f3ff]"></div>
          
          {/* Cube 2 (Small) */}
          <div className="absolute top-[30%] right-[20%] w-12 h-12 border border-neon-gold bg-neon-gold/5 animate-float-fast opacity-70 rotate-45"></div>

          {/* Grid lines */}
          <div className="absolute top-[40%] right-[15%] w-48 h-1 bg-neon-pink/60 animate-pulse rotate-45 shadow-[0_0_15px_#ff0055]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-7xl relative z-10">
        
        {/* LEFT COLUMN: Profile Image (Gamer Style) */}
        <Reveal direction="left" className="order-2 lg:order-1 flex justify-center lg:justify-end">
             <div 
                className="relative w-full max-w-md aspect-[4/5] perspective-1000 group"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
             >
                <div 
                    ref={cardRef}
                    className="w-full h-full preserve-3d transition-transform duration-100 ease-out"
                    style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
                >
                    {/* Main Frame */}
                    <div className="absolute inset-0 border-2 border-neon-cyan/50 bg-black/40 clip-hud backdrop-blur-sm">
                        {/* Corner Accents */}
                        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-neon-cyan"></div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-neon-cyan"></div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-neon-pink"></div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-neon-pink"></div>

                        {/* Image Placeholder */}
                        <div className="absolute inset-4 clip-hud overflow-hidden bg-[#050505] group-hover:shadow-[0_0_50px_rgba(0,243,255,0.2)] transition-shadow duration-500">
                             <img 
                                src="/profile.jpg" 
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x500/050505/00f3ff?text=UPLOAD+PROFILE.JPG&font=orbitron";
                                }}
                                alt="Aramati Tanush Reddy" 
                                className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-700"
                             />
                             {/* Scanline Overlay - Reduced opacity for better visibility of the photo */}
                             <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none"></div>
                        </div>

                        {/* HUD Elements */}
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-z-20">
                            <div>
                                <div className="text-neon-cyan text-xs font-bold tracking-[0.2em] mb-1">STATUS</div>
                                <div className="text-white font-display text-lg">ONLINE</div>
                            </div>
                            <i className="fas fa-fingerprint text-3xl text-neon-pink/80 animate-pulse"></i>
                        </div>
                    </div>
                    
                    {/* Floating Elements behind/front */}
                    <div className="absolute -inset-4 border border-neon-purple/30 clip-hud translate-z-[-20px] scale-105 pointer-events-none"></div>
                    <div className="absolute -right-8 top-20 text-neon-cyan font-ui text-xs rotate-90 origin-left tracking-widest translate-z-10">SYSTEM_ID: ATR-2026</div>
                </div>
             </div>
        </Reveal>

        {/* RIGHT COLUMN: Text Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
            <Reveal delay={200} direction="right">
                <div className="inline-block px-4 py-1 border border-neon-green text-neon-green font-ui font-bold bg-[rgba(10,255,10,0.1)] mb-6 clip-chip shadow-[0_0_10px_rgba(10,255,10,0.2)] animate-pulse mx-auto lg:mx-0">
                    SYSTEM ONLINE
                </div>
            </Reveal>

            <Reveal delay={300} direction="right">
                <h1 className="font-display text-5xl md:text-7xl leading-[1.1] uppercase mb-6 drop-shadow-[2px_2px_0_black]">
                    HI, I'M <br />
                    <GlitchText text="ARAMATI" /> <br />
                    <GlitchText text="TANUSH REDDY" colorClass="text-neon-cyan" />
                </h1>
            </Reveal>

            <Reveal delay={400} direction="right">
                <p className="text-xl text-[#e0e0e0] max-w-[550px] mb-12 border-l-4 border-neon-cyan pl-6 bg-gradient-to-r from-[rgba(0,243,255,0.05)] to-transparent py-2 mx-auto lg:mx-0">
                    FULL STACK DEVELOPER | ML ENGINEER | DIGITAL ARCHITECT<br />
                    Building scalable web systems and robust AI pipelines with AAA precision.
                </p>
            </Reveal>

            <Reveal delay={500} direction="right">
                <div className="flex flex-wrap gap-12 mb-12 justify-center lg:justify-start">
                <div className="text-center lg:text-left group cursor-none">
                    <h3 className="font-display text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:text-neon-gold transition-colors">
                    300<span className="text-neon-gold group-hover:text-white">+</span>
                    </h3>
                    <p className="font-ui text-text-muted uppercase text-sm tracking-widest font-semibold">LeetCode Solved</p>
                </div>
                <div className="text-center lg:text-left group cursor-none">
                    <h3 className="font-display text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:text-neon-green transition-colors">
                    92<span className="text-neon-green group-hover:text-white">%</span>
                    </h3>
                    <p className="font-ui text-text-muted uppercase text-sm tracking-widest font-semibold">Model Accuracy</p>
                </div>
                <div className="text-center lg:text-left group cursor-none">
                    <h3 className="font-display text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:text-neon-purple transition-colors">7.6</h3>
                    <p className="font-ui text-text-muted uppercase text-sm tracking-widest font-semibold">CGPA @ IIIT Sri City</p>
                </div>
                </div>
            </Reveal>

            <Reveal delay={600} direction="right">
                <div className="flex gap-6 justify-center lg:justify-start">
                    <HoloButton href="#projects">INITIALIZE</HoloButton>
                    <HoloButton href="#contact" variant="white">CONTACT</HoloButton>
                </div>
            </Reveal>
        </div>

      </div>
    </header>
  );
};

export default Hero;
