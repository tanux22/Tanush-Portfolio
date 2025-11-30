import React, { useEffect, useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import { getProjects } from '../services/api';
import type { Project } from '../types';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section id="projects" className="py-40 px-[8%] relative z-10">
      {/* Background Schematic Animation */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] border border-neon-cyan/5 rounded-full animate-spin-ultra-slow">
            <div className="absolute inset-4 border border-dashed border-neon-cyan/10 rounded-full animate-reverse-spin"></div>
            <div className="absolute inset-[100px] border border-neon-green/5 rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-neon-cyan/10"></div>
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-neon-cyan/10"></div>
         </div>
      </div>

      <Reveal>
        <SectionHeader number="03" title="MISSION" highlight="LOG" highlightColor="text-neon-green" />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 100}>
            <TiltCard className="h-full">
                <div 
                    className="group h-full relative bg-[#0e0e14]/90 backdrop-blur-md border border-white/15 overflow-hidden transition-all duration-400 hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] flex flex-col clip-hud"
                >
                    {/* Image Area */}
                    <div className="h-48 overflow-hidden relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-black/70 border border-neon-cyan/50 p-2 rounded-full z-10">
                             <i className={`${project.icon} text-neon-cyan text-lg`}></i>
                        </div>
                        {/* Overlay Scanline */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,243,255,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow translate-z-20 bg-gradient-to-b from-[#0e0e14] to-[#050508]">
                        <p className="text-neon-cyan text-xs font-bold mb-2 uppercase tracking-wide flex items-center gap-2">
                             <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                             {project.category}
                        </p>

                        <h3 className="font-display text-2xl text-white drop-shadow-md mb-3 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                        
                        <p className="text-[#d4d4d4] text-sm leading-relaxed font-medium mb-6 drop-shadow-sm flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                            <span 
                                key={tech} 
                                className="text-xs border border-[#333] px-2 py-1 text-[#aaa] bg-black/40 font-semibold group-hover:border-neon-cyan group-hover:text-neon-cyan transition-colors"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;