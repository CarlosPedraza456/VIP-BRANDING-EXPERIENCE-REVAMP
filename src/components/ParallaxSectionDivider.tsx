import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { VipCrestEmblem } from './BrandIcons';

interface ParallaxSectionDividerProps {
  quote?: string;
  author?: string;
  direction?: 'left' | 'right' | '3d-popout' | 'zoom-3d' | 'zoom-in';
}

export const ParallaxSectionDivider: React.FC<ParallaxSectionDividerProps> = ({
  quote = "You will gain access to his lifestyle and learn the best-kept secrets to his success. Space is limited.",
  author = "REY PEREZ · GLOBAL BRANDING EXPERT",
  direction = '3d-popout',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end 10%'],
  });

  const is3D = direction === '3d-popout' || direction === 'zoom-3d';

  // --- 3D POP-OUT ZOOM PARALLAX (Clean & Proportional) ---
  // Starts slightly recessed (0.82), smoothly zooms & pops forward (1.08) at center, then fades
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    is3D ? [0.82, 1.08, 1.04, 0.9] : [0.88, 1, 1, 0.92]
  );

  // 3D Z-Depth: Pops out towards the screen without displacing the layout
  const rawZ = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    is3D ? [-80, 50, 25, -40] : [0, 0, 0, 0]
  );

  // Subtle 3D tilt
  const rawRotateX = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 1],
    is3D ? [10, 0, -3, -8] : [0, 0, 0, 0]
  );

  // Lateral shift if left/right
  const sign = direction === 'left' ? -1 : direction === 'right' ? 1 : 0;
  const rawX = useTransform(scrollYProgress, [0, 0.5, 1], [sign * 180, 0, sign * -40]);

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0.15, 1, 1, 0.2]
  );

  // Physics springs for natural smoothness
  const smoothScale = useSpring(rawScale, { stiffness: 90, damping: 19, mass: 0.75 });
  const smoothZ = useSpring(rawZ, { stiffness: 85, damping: 19 });
  const smoothRotateX = useSpring(rawRotateX, { stiffness: 90, damping: 20 });
  const smoothX = useSpring(rawX, { stiffness: 90, damping: 20 });
  const smoothOpacity = useSpring(rawOpacity, { stiffness: 90, damping: 20 });

  return (
    <div
      ref={containerRef}
      style={{ perspective: '1000px' }}
      className="relative py-24 overflow-hidden border-y border-[#DDA83B]/20 bg-gradient-to-b from-[#0B0B0B] via-[#14120F] to-[#0B0B0B]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[220px] bg-[#DDA83B]/15 blur-[120px] pointer-events-none" />

      <motion.div
        style={{
          x: sign !== 0 ? smoothX : 0,
          scale: smoothScale,
          z: smoothZ,
          rotateX: smoothRotateX,
          opacity: smoothOpacity,
          transformStyle: 'preserve-3d',
        }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center will-change-transform"
      >
        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#DDA83B] to-transparent shadow-[0_0_12px_rgba(221,168,59,0.8)]" />
          <VipCrestEmblem size={34} className="w-8 h-8 drop-shadow-[0_0_15px_rgba(221,168,59,0.5)] text-[#DDA83B]" />
          <div className="w-20 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#DDA83B] to-transparent shadow-[0_0_12px_rgba(221,168,59,0.8)]" />
        </div>

        <p className="font-serif-luxury text-xl sm:text-3xl italic tracking-wide text-white leading-relaxed max-w-3xl text-balance drop-shadow-md">
          "{quote}"
        </p>

        <span className="font-brand-sans text-xs uppercase tracking-[0.35em] text-[#DDA83B] font-bold mt-5 drop-shadow">
          {author}
        </span>
      </motion.div>
    </div>
  );
};

