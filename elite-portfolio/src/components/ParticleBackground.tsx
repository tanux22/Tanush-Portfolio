
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      shape: 'circle' | 'square' | 'triangle';
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.6 ? '#00f3ff' : Math.random() > 0.5 ? '#bc13fe' : '#333';
        const shapeRand = Math.random();
        this.shape = shapeRand > 0.7 ? 'square' : shapeRand > 0.4 ? 'triangle' : 'circle';
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.4;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        ctx.beginPath();
        if (this.shape === 'square') {
             ctx.rect(-this.size, -this.size, this.size * 2, this.size * 2);
        } else if (this.shape === 'triangle') {
             ctx.moveTo(0, -this.size * 1.5);
             ctx.lineTo(this.size, this.size);
             ctx.lineTo(-this.size, this.size);
             ctx.closePath();
        } else {
             ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Connections (only for close particles)
      for (let a = 0; a < particles.length; a++) {
          for (let b = a; b < particles.length; b++) {
              const dx = particles[a].x - particles[b].x;
              const dy = particles[a].y - particles[b].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                  ctx.strokeStyle = '#00f3ff';
                  ctx.lineWidth = 0.15;
                  ctx.globalAlpha = 1 - (distance / 120);
                  ctx.beginPath();
                  ctx.moveTo(particles[a].x, particles[a].y);
                  ctx.lineTo(particles[b].x, particles[b].y);
                  ctx.stroke();
              }
          }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;
