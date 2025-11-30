import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  highlight: string;
  highlightColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, highlight, highlightColor = 'text-neon-cyan' }) => {
  // Helper to convert text color class to background color class
  const bgClass = highlightColor.replace('text-', 'bg-');
  // const borderClass = highlightColor.replace('text-', 'border-');

  return (
    <div className="relative mb-20 pt-10">
      {/* Background Watermark Number - Increased Opacity */}
      <div className="absolute -top-10 -left-6 md:-left-10 text-[8rem] md:text-[10rem] font-display font-black text-white/[0.08] select-none z-0 leading-none">
        {number}
      </div>
      
      {/* Background Cyber Shape */}
      <div className="absolute top-0 left-0 w-full md:w-2/3 h-full -z-10">
         <div className="w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] skew-x-[-12deg] origin-left border-l border-white/5 opacity-50"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-start md:items-end gap-6 relative z-10 pl-2">
        
        {/* Vertical Accent Bar */}
        <div className={`hidden md:block w-1.5 h-16 bg-gradient-to-b from-white to-transparent ${bgClass}`}></div>

        <div>
            {/* Small System Label */}
            <div className="flex items-center gap-3 mb-1">
                <span className={`h-px w-8 ${bgClass}`}></span>
                <span className="font-ui font-bold tracking-[0.3em] text-xs text-text-muted uppercase">System Module // {number}</span>
            </div>

            {/* Main Title */}
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-none text-white drop-shadow-md">
                {title} <span className={`${highlightColor} relative inline-block`}>
                    {highlight}
                    {/* Subtle underline SVG */}
                    <svg className="absolute w-full h-3 -bottom-2 left-0 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>
            </h2>
        </div>

        {/* Horizontal Tech Line */}
        <div className="flex-grow h-px bg-gradient-to-r from-white/20 to-transparent relative self-end mb-3 w-full md:w-auto mt-4 md:mt-0">
             <div className="absolute left-0 -top-0.5 w-1 h-1 bg-white"></div>
             {/* Tech bits on the line */}
             <div className={`absolute left-[10%] -top-1 w-12 h-[3px] ${bgClass} opacity-50`}></div>
             <div className="absolute left-[30%] -top-1 w-2 h-[3px] bg-white/20"></div>
             <div className="absolute right-0 -top-1.5 w-3 h-3 border border-white/20 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;