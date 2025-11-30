import React, { useEffect, useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import { getExperiences } from '../services/api';
import type { Experience } from '../types';
import Reveal from './ui/Reveal';

const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    getExperiences().then(setExperiences);
  }, []);

  const getTextColor = (color: string) => {
      switch (color) {
        case 'cyan': return 'text-neon-cyan';
        case 'green': return 'text-neon-green';
        case 'purple': return 'text-neon-purple';
        case 'gold': return 'text-neon-gold';
        default: return 'text-white';
    }
  }

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'cyan': return 'border-neon-cyan';
      case 'green': return 'border-neon-green';
      case 'purple': return 'border-neon-purple';
      case 'gold': return 'border-neon-gold';
      default: return 'border-white';
    }
  }

  return (
    <section id="experience" className="py-32 px-[5%] relative z-10 overflow-hidden">
      {/* Background Scanner Effect */}
      <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent animate-[gridMove_8s_linear_infinite]"></div>
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5"></div>
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5"></div>
      </div>

      <Reveal>
         <SectionHeader number="04" title="XP" highlight="TIMELINE" highlightColor="text-neon-purple" />
      </Reveal>

      <div className="relative max-w-6xl mx-auto">
        {/* Central Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>
        
        {/* Left Line (Mobile) */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

        {experiences.map((xp, index) => {
            const isLeft = index % 2 === 0;
            return (
                <div key={xp.id} className="relative w-full mb-16 md:mb-24 last:mb-0">
                    {/* Desktop Flex Container */}
                    <div className={`flex flex-col md:flex-row items-start w-full ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                        
                        {/* Content Side */}
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                            <Reveal delay={index * 100} direction={isLeft ? 'left' : 'right'}>
                                <div className={`
                                    relative p-6 bg-[#0b0b10]/90 backdrop-blur-md border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 clip-hud group
                                    shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]
                                `}>
                                    {/* Card Background Glitch Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[url('https://placehold.co/100x100/ffffff/000000.png?text=DATA&font=monospace')] pointer-events-none transition-opacity duration-300 mix-blend-overlay"></div>

                                    {/* Decorative Connector Line (Desktop Only) */}
                                    <div className={`hidden md:block absolute top-8 h-[1px] w-16 bg-white/20 ${isLeft ? '-right-16' : '-left-16'}`}></div>
                                    
                                    {/* Card Content */}
                                    <span className={`block font-ui font-extrabold text-sm tracking-widest mb-2 ${getTextColor(xp.color)}`}>
                                        {xp.period}
                                    </span>
                                    <h3 className="font-display text-2xl md:text-3xl text-white mb-1 drop-shadow-md">
                                        {xp.role}
                                    </h3>
                                    <span className="block text-[#b0c4de] italic text-lg mb-6">{xp.company}</span>
                                    <ul className="list-none">
                                        {xp.description.map((item, i) => (
                                            <li key={i} className={`text-[#d1d5db] mb-2 text-sm md:text-base leading-relaxed relative ${isLeft ? 'md:pl-0' : 'pl-0'}`}>
                                                {/* Bullet logic - handled inline for simplicity in alternating layout */}
                                                <span className={`inline-block text-neon-cyan font-bold mr-2 ${isLeft ? 'md:hidden' : ''}`}>&gt;</span>
                                                {item}
                                                <span className={`hidden md:inline-block text-neon-cyan font-bold ml-2 ${isLeft ? '' : 'hidden'}`}>&lt;</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>

                        {/* Marker (Absolute Positioned) */}
                        <div className={`
                            absolute left-6 md:left-1/2 top-8 -translate-x-1/2 
                            w-5 h-5 rotate-45 bg-void border-2 z-20 
                            transition-all duration-300 group hover:scale-125
                            ${getBorderColor(xp.color)}
                        `}>
                             <div className={`absolute inset-0 m-0.5 opacity-50 ${xp.color === 'cyan' ? 'bg-neon-cyan' : xp.color === 'green' ? 'bg-neon-green' : xp.color === 'purple' ? 'bg-neon-purple' : 'bg-neon-gold'} animate-pulse`}></div>
                        </div>

                        {/* Spacer Side (Desktop only) */}
                        <div className="hidden md:block w-1/2"></div>
                    </div>
                </div>
            );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;