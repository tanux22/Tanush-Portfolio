import React from 'react';
import SectionHeader from './ui/SectionHeader';

const Badges: React.FC = () => {
  const badges = [
    { name: "Oracle GenAI Professional '25", icon: "fas fa-certificate" },
    { name: "Oracle AI Foundations '25", icon: "fas fa-certificate" },
    { name: "IBM Python for Data Science", icon: "fab fa-ibm" }
  ];

  return (
    <section className="pb-32 px-[8%] relative z-10">
       <SectionHeader number="05" title="UNLOCKED" highlight="BADGES" highlightColor="text-neon-gold" />
       
       <div className="flex flex-wrap gap-6 justify-center">
            {badges.map((badge, index) => (
                <div 
                    key={index} 
                    className="relative px-8 py-4 bg-black/50 border border-neon-gold/50 backdrop-blur-md text-neon-gold font-ui font-bold uppercase tracking-wider clip-chip transition-all hover:bg-neon-gold/10 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] cursor-none"
                >
                    <i className={`${badge.icon} mr-2`}></i> {badge.name}
                </div>
            ))}
       </div>
    </section>
  );
};

export default Badges;