import React from 'react';

const CyberGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden flex items-end justify-center -z-20 perspective-1000">
      <div 
        className="w-[200vw] h-[100vh] origin-bottom animate-grid"
        style={{
            background: `
                linear-gradient(transparent 0%, #bc13fe 1%, transparent 2%),
                linear-gradient(90deg, transparent 0%, #00f3ff 1%, transparent 2%)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 40%)', // Adjusted mask to fade out earlier at the top
            opacity: 0.12
        }}
      ></div>
      {/* Horizon Glow */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-neon-purple/10 to-transparent"></div>
    </div>
  );
};

export default CyberGrid;