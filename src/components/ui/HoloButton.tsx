import React from 'react';

interface HoloButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'cyan' | 'white';
}

const HoloButton: React.FC<HoloButtonProps> = ({ children, href, variant = 'cyan', className = '', ...props }) => {
  const baseClasses = "relative px-10 py-4 font-display font-bold tracking-[2px] uppercase no-underline transition-all duration-300 clip-hud inline-block";
  const variants = {
    cyan: "bg-[rgba(0,243,255,0.05)] border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black hover:shadow-[0_0_30px_#00f3ff]",
    white: "bg-transparent border border-white text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_white]"
  };

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default HoloButton;