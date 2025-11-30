import React from 'react';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-[5%] lg:px-[8%] relative z-10">
      {/* Background Perspective Floor */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-neon-cyan/5 to-transparent opacity-30"></div>
          <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'bottom'
          }}></div>
      </div>

      <Reveal>
        <SectionHeader number="05" title="ACADEMIC" highlight="RECORDS" highlightColor="text-neon-cyan" />
      </Reveal>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px] relative z-10">
          <thead>
            <tr className="border-b border-white/20">
              <th className="py-6 px-4 font-display text-neon-cyan text-lg tracking-widest uppercase">Degree / Certificate</th>
              <th className="py-6 px-4 font-display text-neon-cyan text-lg tracking-widest uppercase">Institute / Board</th>
              <th className="py-6 px-4 font-display text-neon-cyan text-lg tracking-widest uppercase">Score</th>
              <th className="py-6 px-4 font-display text-neon-cyan text-lg tracking-widest uppercase text-right">Year</th>
            </tr>
          </thead>
          <tbody>
            {EDUCATION_DATA.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300 group"
              >
                <td className="py-6 px-4 font-display text-white text-xl font-bold group-hover:text-neon-cyan transition-colors">
                    {item.degree}
                </td>
                <td className="py-6 px-4 font-ui text-text-muted text-lg">
                    {item.institute}
                </td>
                <td className="py-6 px-4">
                    <span className={`
                        inline-block px-3 py-1 text-sm font-bold border 
                        ${item.color === 'cyan' ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10 shadow-[0_0_10px_rgba(0,243,255,0.2)]' : 
                          item.color === 'purple' ? 'border-neon-purple text-neon-purple bg-neon-purple/10 shadow-[0_0_10px_rgba(188,19,254,0.2)]' : 
                          item.color === 'gold' ? 'border-neon-gold text-neon-gold bg-neon-gold/10 shadow-[0_0_10px_rgba(255,215,0,0.2)]' :
                          'border-neon-green text-neon-green bg-neon-green/10 shadow-[0_0_10px_rgba(10,255,10,0.2)]'}
                    `}>
                        {item.score}
                    </span>
                </td>
                <td className="py-6 px-4 font-ui text-white font-bold text-lg text-right tracking-wider">
                    {item.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Education;