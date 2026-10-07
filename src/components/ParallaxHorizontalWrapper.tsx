import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export type ParallaxDirection =
  | 'left'
  | 'right'
  | 'zoom-in'
  | 'zoom-out'
  | 'fade-zoom'
  | 'up'
  | 'slide-zoom-left'
  | 'slide-zoom-right';

interface ParallaxHorizontalWrapperProps {
  children: React.ReactNode;
  direction?: ParallaxDirection;
  distance?: number;
  className?: string;
  withRotate?: boolean;
  withScale?: boolean;
  enterExit?: boolean;
}

export const ParallaxHorizontalWrapper: React.FC<ParallaxHorizontalWrapperProps> = ({
  children,
  direction = 'left',
  distance = 220,
  className = '',
  withRotate = true,
  withScale = true,
  enterExit = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Offset calibrated for smooth enter and exit across the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: enterExit ? ['start 98%', 'end 2%'] : ['start 95%', 'start 45%'],
  });

  const isZoomIn = direction === 'zoom-in';
  const isZoomOut = direction === 'zoom-out';
  const isFadeZoom = direction === 'fade-zoom';
  const isUp = direction === 'up';
  const isSlideZoomLeft = direction === 'slide-zoom-left';
  const isSlideZoomRight = direction === 'slide-zoom-right';
  const isPureLateral = direction === 'left' || direction === 'right';

  // --- 1. PURE ZOOM-IN (Scales from 0.84 -> 1.0 -> 1.08 with transparent entry & exit) ---
  const zoomInScale = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    enterExit ? [0.84, 1.0, 1.0, 1.08] : [0.84, 1.0]
  );
  const zoomInOpacity = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.25, 0.75, 1] : [0, 0.45, 1],
    enterExit ? [0.05, 1, 1, 0.05] : [0.05, 0.7, 1]
  );
  const zoomInY = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    enterExit ? [50, 0, 0, -35] : [50, 0]
  );

  // --- 2. PURE LATERAL SLIDE (Left / Right) ---
  const sign = direction === 'left' || isSlideZoomLeft ? -1 : 1;
  const lateralX = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    enterExit ? [sign * distance, 0, 0, sign * -0.4 * distance] : [sign * distance, 0]
  );
  const lateralRotate = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    withRotate
      ? enterExit
        ? [sign * -3.5, 0, 0, sign * 1.5]
        : [sign * -3.5, 0]
      : [0, 0, 0, 0]
  );
  const lateralScale = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    withScale
      ? enterExit
        ? [0.92, 1.0, 1.0, 0.96]
        : [0.92, 1]
      : [1, 1, 1, 1]
  );
  const lateralOpacity = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.25, 0.75, 1] : [0, 0.45, 1],
    enterExit ? [0.05, 1, 1, 0.1] : [0.05, 0.65, 1]
  );

  // --- 3. HYBRID SLIDE + ZOOM (Lateral motion + Pronounced Zoom Scale forward) ---
  const hybridScale = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    enterExit ? [0.82, 1.0, 1.0, 1.05] : [0.82, 1.0]
  );
  const hybridRotate = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    withRotate
      ? enterExit
        ? [sign * -4, 0, 0, sign * 2]
        : [sign * -4, 0]
      : [0, 0, 0, 0]
  );

  // --- 4. FADE ZOOM ---
  const fadeZoomScale = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.3, 0.7, 1] : [0, 1],
    enterExit ? [0.88, 1.0, 1.0, 0.96] : [0.88, 1.0]
  );

  // --- 5. ZOOM OUT ---
  const zoomOutScale = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    enterExit ? [1.16, 1.0, 1.0, 0.92] : [1.16, 1.0]
  );

  // --- 6. UP TRANSLATION ---
  const rawUpY = useTransform(
    scrollYProgress,
    enterExit ? [0, 0.35, 0.7, 1] : [0, 1],
    enterExit ? [80, 0, 0, -50] : [80, 0]
  );

  // Springs for organic physics
  const smoothLateralX = useSpring(lateralX, { stiffness: 90, damping: 18, mass: 0.75 });
  const smoothLateralRotate = useSpring(lateralRotate, { stiffness: 90, damping: 20 });
  const smoothLateralScale = useSpring(lateralScale, { stiffness: 90, damping: 20 });
  const smoothLateralOpacity = useSpring(lateralOpacity, { stiffness: 90, damping: 20 });

  const smoothZoomInScale = useSpring(zoomInScale, { stiffness: 85, damping: 19, mass: 0.8 });
  const smoothZoomInOpacity = useSpring(zoomInOpacity, { stiffness: 85, damping: 19 });
  const smoothZoomInY = useSpring(zoomInY, { stiffness: 85, damping: 19 });

  const smoothHybridScale = useSpring(hybridScale, { stiffness: 85, damping: 19, mass: 0.8 });
  const smoothHybridRotate = useSpring(hybridRotate, { stiffness: 90, damping: 20 });

  const smoothFadeZoomScale = useSpring(fadeZoomScale, { stiffness: 85, damping: 19 });
  const smoothZoomOutScale = useSpring(zoomOutScale, { stiffness: 85, damping: 19 });
  const smoothUpY = useSpring(rawUpY, { stiffness: 90, damping: 18 });

  // HYBRID (Slide Left/Right + Zoom)
  if (isSlideZoomLeft || isSlideZoomRight) {
    return (
      <motion.div
        ref={ref}
        style={{
          x: smoothLateralX,
          scale: smoothHybridScale,
          rotate: smoothHybridRotate,
          opacity: smoothLateralOpacity,
        }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // PURE ZOOM-IN
  if (isZoomIn) {
    return (
      <motion.div
        ref={ref}
        style={{
          scale: smoothZoomInScale,
          opacity: smoothZoomInOpacity,
          y: smoothZoomInY,
        }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // ZOOM OUT
  if (isZoomOut) {
    return (
      <motion.div
        ref={ref}
        style={{
          scale: smoothZoomOutScale,
          opacity: smoothZoomInOpacity,
        }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // FADE ZOOM
  if (isFadeZoom) {
    return (
      <motion.div
        ref={ref}
        style={{
          scale: smoothFadeZoomScale,
          opacity: smoothZoomInOpacity,
        }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // VERTICAL UP
  if (isUp) {
    return (
      <motion.div
        ref={ref}
        style={{
          y: smoothUpY,
          scale: smoothFadeZoomScale,
          opacity: smoothZoomInOpacity,
        }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // PURE LATERAL (Left or Right)
  return (
    <motion.div
      ref={ref}
      style={{
        x: smoothLateralX,
        rotate: smoothLateralRotate,
        scale: smoothLateralScale,
        opacity: smoothLateralOpacity,
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
