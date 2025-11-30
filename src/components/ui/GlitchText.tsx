import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  colorClass?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", colorClass = "text-white" }) => {
  return (
    <span className={`relative inline-block font-bold ${colorClass} ${className} group`}>
      <span className="relative z-10">{text}</span>
      <span 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-full h-full text-neon-cyan opacity-80 -z-10 animate-glitch-1 group-hover:block hidden"
      >
        {text}
      </span>
      <span 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-full h-full text-neon-pink opacity-80 -z-20 animate-glitch-2 group-hover:block hidden"
      >
        {text}
      </span>
      {/* Force animation on load for hero title */}
       <span 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-full h-full text-neon-cyan opacity-80 -z-10 animate-glitch-1 block"
      >
        {text}
      </span>
       <span 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-full h-full text-neon-pink opacity-80 -z-20 animate-glitch-2 block"
      >
        {text}
      </span>
    </span>
  );
};

export default GlitchText;