import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // "Azure Future Tech" Palette
    const bgBase = '#234594';
    const bgDark = '#1a3370';
    
    const particles: { x: number; y: number; vx: number; vy: number; size: number, color: string }[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        color: Math.random() > 0.8 ? '#fe8a0e' : '#9db3e5', // Orange highlight or Soft Blue
      });
    }

    const draw = () => {
      // Create subtle gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, bgBase);
      grad.addColorStop(1, bgDark);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = 'rgba(157, 179, 229, 0.15)'; // Soft blue low opacity
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      
      // Floating data grid effect at bottom
      const gridHeight = height * 0.15;
      const gridY = height - gridHeight;
      const gridGrad = ctx.createLinearGradient(0, gridY, 0, height);
      gridGrad.addColorStop(0, 'rgba(35, 69, 148, 0)');
      gridGrad.addColorStop(1, 'rgba(157, 179, 229, 0.1)');
      ctx.fillStyle = gridGrad;
      ctx.fillRect(0, gridY, width, gridHeight);

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Background;