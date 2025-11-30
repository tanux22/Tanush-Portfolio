import React from 'react';

const Research: React.FC = () => {
  return (
    <section className="py-20 px-[8%] relative z-10">
      <div className="bg-[#0b0b10]/80 backdrop-blur-md border border-[rgba(255,0,85,0.5)] p-12 relative overflow-hidden clip-hud shadow-[0_0_30px_rgba(255,0,85,0.15)] group hover:shadow-[0_0_50px_rgba(255,0,85,0.3)] transition-shadow duration-500">
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-transparent to-neon-pink/5 animate-pulse-glow pointer-events-none"></div>
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,0,85,0.1)_0%,transparent_50%)] animate-spin-slow pointer-events-none opacity-50"></div>

        <div className="flex flex-wrap gap-4 mb-4 relative z-10">
            <span className="text-neon-pink border border-neon-pink px-3 py-1 text-xs font-bold bg-[rgba(255,0,85,0.1)] shadow-[0_0_10px_rgba(255,0,85,0.3)]">AICSET'25 PUBLICATION</span>
            <span className="text-neon-pink border border-neon-pink px-3 py-1 text-xs font-bold bg-[rgba(255,0,85,0.1)] shadow-[0_0_10px_rgba(255,0,85,0.3)]">MARRAKECH, MOROCCO</span>
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow-[0_0_10px_rgba(255,0,85,0.5)] relative z-10">
            ROBUST-VIBES: Virtual Human Balance Evaluation
        </h2>
        
        <p className="text-text-muted max-w-3xl mb-8 text-lg relative z-10">
            Developed an AI-powered balance assessment system using <strong className="text-white">MediaPipe, OpenCV, Flask, and FFmpeg</strong>, 
            achieving <strong className="text-white">92.32% accuracy</strong> across 30+ test subjects. Designed algorithms to compute Center of Gravity (COG) 
            and Base of Support (BOS) deviations for real-time instability detection.
        </p>

        <div className="flex flex-wrap gap-4 relative z-10">
            {['Computer Vision', 'Flask', 'Algorithms'].map(tag => (
                <div key={tag} className="px-4 py-2 bg-white/5 border border-white/20 text-xs font-bold text-white clip-chip hover:bg-neon-pink/20 hover:border-neon-pink transition-colors cursor-default">
                    {tag}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Research;