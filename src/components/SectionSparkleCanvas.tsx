import React, { useEffect, useRef } from 'react';

interface SparkleParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  isStar: boolean;
  starRotation: number;
  starRotSpeed: number;
  swayOffset: number;
  swaySpeed: number;
}

interface SectionSparkleCanvasProps {
  density?: 'subtle' | 'medium' | 'high';
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export const SectionSparkleCanvas: React.FC<SectionSparkleCanvasProps> = ({
  density = 'medium',
  className = '',
  glowIntensity = 'medium',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);

    // Mouse coordinates relative to this section
    let mouse = { x: -1000, y: -1000, radius: 180, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
      } else {
        mouse.active = false;
        mouse.x = -1000;
        mouse.y = -1000;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Calculate count based on section area and density
    const particleMultiplier = density === 'high' ? 0.00007 : density === 'medium' ? 0.000045 : 0.000028;
    const targetCount = Math.max(25, Math.min(85, Math.floor(width * height * particleMultiplier)));

    const particles: SparkleParticle[] = [];

    for (let i = 0; i < targetCount; i++) {
      const isStar = Math.random() > 0.68;
      const maxOpacity = Math.random() * 0.7 + 0.25;
      particles.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        size: isStar ? Math.random() * 3.2 + 2.0 : Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -(Math.random() * 0.45 + 0.15), // Gentle upward drift
        opacity: Math.random() * maxOpacity,
        maxOpacity,
        pulseSpeed: Math.random() * 0.02 + 0.007,
        isStar,
        starRotation: Math.random() * Math.PI * 2,
        starRotSpeed: (Math.random() - 0.5) * 0.02,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.008,
      });
    }

    let frame = 0;

    // Helper to draw a luxury 4-point diamond sparkle star
    const drawStar = (x: number, y: number, r: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Outer soft glow
      const radialGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.8);
      radialGlow.addColorStop(0, `rgba(255, 243, 209, ${opacity * 0.9})`);
      radialGlow.addColorStop(0.3, `rgba(221, 168, 59, ${opacity * 0.6})`);
      radialGlow.addColorStop(1, 'rgba(221, 168, 59, 0)');
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // 4-Point Star Core
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.95})`;
      ctx.beginPath();
      const points = 4;
      const innerR = r * 0.28;
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? r * 1.6 : innerR;
        const angle = (i * Math.PI) / points;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Subtle constellation linkages between close destellos
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.16 * Math.min(particles[i].opacity, particles[j].opacity);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(221, 168, 59, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and render each sparkle destello
      particles.forEach((p) => {
        // Natural floating upward drift + horizontal sine sway
        p.swayOffset += p.swaySpeed;
        p.x += p.speedX + Math.sin(p.swayOffset) * 0.25;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse hover interaction: sparkles softly scatter and brighten
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
            p.opacity = Math.min(0.95, p.opacity + 0.05 * force);
          }
        }

        // Twinkle and pulse
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.06) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        p.starRotation += p.starRotSpeed;

        if (p.isStar) {
          drawStar(p.x, p.y, p.size, p.opacity, p.starRotation);
        } else {
          // Circular radiant gold particle
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.2);
          gradient.addColorStop(0, `rgba(255, 248, 231, ${p.opacity})`);
          gradient.addColorStop(0.35, `rgba(221, 168, 59, ${p.opacity * 0.85})`);
          gradient.addColorStop(1, 'rgba(221, 168, 59, 0)');

          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Background ambient radial gold lighting glows */}
      <div
        className={`absolute -top-32 left-1/4 w-[600px] h-[400px] bg-[#DDA83B]/10 rounded-full blur-[140px] animate-pulse ${
          glowIntensity === 'high' ? 'opacity-100' : 'opacity-80'
        }`}
      />
      <div className="absolute -bottom-24 right-10 w-[550px] h-[380px] bg-[#8C704B]/12 rounded-full blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#DDA83B]/5 rounded-full blur-[150px]" />

      {/* Subtle luxury dot matrix texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#DDA83B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035]" />

      {/* Top and bottom subtle gradient hairline borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDA83B]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDA83B]/30 to-transparent" />

      {/* Interactive destellos / sparkles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
