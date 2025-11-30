import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Use refs for animation loop values to avoid re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Direct update for the dot (instant)
      if (cursorRef.current) {
         cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isInteractive = 
            target.tagName === 'A' || 
            target.tagName === 'BUTTON' || 
            target.tagName === 'INPUT' || 
            target.tagName === 'TEXTAREA' ||
            target.closest('a') || 
            target.closest('button') ||
            target.closest('.group') || 
            window.getComputedStyle(target).cursor === 'pointer';
        
        setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    // Animation Loop for Smooth Ring
    let animationFrameId: number;
    const animateRing = () => {
      // Ease set to 1 for instant follow (no drag/lag) as requested
      const ease = 1; 
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-[10000] hidden md:block mix-blend-difference top-0 left-0"
      >
        <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isHovering ? 'bg-neon-red shadow-[0_0_15px_#ff2a2a,_0_0_30px_white]' : 'bg-neon-cyan shadow-[0_0_15px_#00f3ff,_0_0_30px_white]'}`}></div>
      </div>
      <div 
        ref={ringRef}
        className={`fixed pointer-events-none z-[9999] w-10 h-10 border-2 rounded-full opacity-80 hidden md:block top-0 left-0 transition-all duration-200 ${isHovering ? 'border-neon-red scale-125' : 'border-neon-cyan'}`}
      ></div>
    </>
  );
};

export default Cursor;