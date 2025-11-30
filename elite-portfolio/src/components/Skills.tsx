import React, { useEffect, useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import { getSkills } from '../services/api';
import type { SkillGroup } from '../types';
import Reveal from './ui/Reveal';

const Skills: React.FC = () => {
  const [skillGroups, setSkillGroups] = useState<SkillGroup[]>([]);

  useEffect(() => {
    getSkills().then(setSkillGroups);
  }, []);

  return (
    <section id="skills" className="py-32 px-[5%] lg:px-[8%] relative z-10">
      {/* Background Animation for Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://placehold.co/100x100/ffffff/000000.png?text=1+0&font=monospace')] bg-repeat animate-grid"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-purple/5 to-transparent"></div>
      </div>

      <Reveal>
        <SectionHeader number="02" title="TECH" highlight="ARSENAL" />
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => (
          <Reveal key={index} delay={index * 100} direction="up">
            <div className="bg-[#0b0b10]/80 backdrop-blur-sm border border-white/10 p-6 relative group hover:border-neon-cyan/50 transition-colors duration-500 h-full clip-hud">
                {/* Decoration Lines */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/5 group-hover:border-neon-cyan/30 transition-colors duration-500 rounded-tr-3xl"></div>
                
                {/* Animated Glow in Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <h3 className="text-xl font-display text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-2 relative z-10">
                    <span className="text-neon-cyan mr-2">//</span>
                    {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                    {group.items.map((skill, idx) => (
                        <div 
                            key={idx}
                            className={`
                                flex items-center gap-2 px-3 py-1.5 
                                bg-white/5 border border-white/10 
                                font-ui text-sm font-semibold tracking-wide
                                hover:bg-white/10 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300
                                ${skill.color}
                            `}
                        >
                            <i className={skill.icon}></i>
                            <span className="text-white/90">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;