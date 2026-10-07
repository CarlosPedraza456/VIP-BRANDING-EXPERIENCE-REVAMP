import React, { useState } from 'react';
import {
  Code,
  Sparkles,
  Layers,
  ArrowRight,
  Copy,
  Check,
  Play,
  Cpu,
  Monitor,
  Zap,
  Sliders,
  FileCode,
  Palette,
  ShieldCheck,
  MousePointer,
  HelpCircle,
  ExternalLink,
  Eye,
  Activity,
  Flame,
  Sun,
  Stars
} from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';
import { SectionSparkleCanvas } from './SectionSparkleCanvas';

export const AnimationsTutorials: React.FC<{ onBackToOfficial: () => void }> = ({
  onBackToOfficial
}) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'backgrounds' | 'css' | 'js' | 'guide' | 'demo'>('backgrounds');
  const [copied, setCopied] = useState<string | null>(null);
  const [demoState, setDemoState] = useState<'slide-left' | 'slide-right' | 'zoom-in' | 'hybrid-left' | 'hybrid-right' | '3d-popout'>('3d-popout');
  const [demoTriggerKey, setDemoTriggerKey] = useState(0);
  const [sparkleDensityDemo, setSparkleDensityDemo] = useState<'subtle' | 'medium' | 'high'>('medium');
  const [flareSpeedDemo, setFlareSpeedDemo] = useState<'normal' | 'fast' | 'slow'>('normal');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  // ==========================================
  // BACKGROUND 1: HEARTBEAT FLARE SNIPPETS
  // ==========================================
  const heartbeatCssSnippet = `/* ==========================================================================
   BACKGROUND 1: FLARE PULSANTE CON LATIDO (HEARTBEAT FLARE)
   Pega esto en: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. Asigna esta clase a tu Sección en GoHighLevel */
.bg-flare-heartbeat,
.ghl-heartbeat-section {
  position: relative !important;
  overflow: hidden !important;
  background-color: #0B0B0B !important;
}

/* 2. Capa de resplandor / Flare radial con latido orgánico */
.heartbeat-flare-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 480px;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.22) 0%, rgba(200, 149, 43, 0.08) 45%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  animation: heartbeatPulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* 3. Anillo de onda expansiva secundaria del latido */
.heartbeat-flare-layer::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 360px;
  height: 360px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(253, 230, 138, 0.28) 0%, rgba(221, 168, 59, 0.12) 40%, transparent 70%);
  filter: blur(40px);
  animation: heartbeatRing 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* 4. Animación de doble latido cardíaco sutil (Systole + Diastole) */
@keyframes heartbeatPulse {
  0%   { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
  14%  { transform: translate(-50%, -50%) scale(1.18); opacity: 0.95; }
  28%  { transform: translate(-50%, -50%) scale(0.95); opacity: 0.60; }
  42%  { transform: translate(-50%, -50%) scale(1.12); opacity: 0.90; }
  70%  { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
  100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
}

@keyframes heartbeatRing {
  0%   { transform: translate(-50%, -50%) scale(0.70); opacity: 0.30; }
  14%  { transform: translate(-50%, -50%) scale(1.30); opacity: 0.80; }
  28%  { transform: translate(-50%, -50%) scale(0.90); opacity: 0.40; }
  42%  { transform: translate(-50%, -50%) scale(1.20); opacity: 0.75; }
  70%  { transform: translate(-50%, -50%) scale(0.70); opacity: 0.30; }
  100% { transform: translate(-50%, -50%) scale(0.70); opacity: 0.30; }
}`;

  const heartbeatHtmlSnippet = `<!-- ==============================================================
     OPCIÓN RÁPIDA EN GHL: Elemento "Custom Code" (HTML/JS)
     Arrastra un elemento Custom JS/HTML dentro de tu Sección en GHL y pega:
     ============================================================== -->
<div class="heartbeat-flare-layer"></div>
<style>
.heartbeat-flare-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 480px;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.22) 0%, rgba(200, 149, 43, 0.08) 45%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  animation: heartbeatPulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.heartbeat-flare-layer::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 360px;
  height: 360px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(253, 230, 138, 0.28) 0%, rgba(221, 168, 59, 0.12) 40%, transparent 70%);
  filter: blur(40px);
  animation: heartbeatRing 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}
@keyframes heartbeatPulse {
  0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
  14% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.95; }
  28% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.6; }
  42% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
  70% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
  100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
}
@keyframes heartbeatRing {
  0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0.3; }
  14% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.8; }
  28% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.4; }
  42% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.75; }
  70% { transform: translate(-50%, -50%) scale(0.7); opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(0.7); opacity: 0.3; }
}
</style>`;

  // ==========================================
  // BACKGROUND 2: MOVING SPARKLES & STARS CANVAS SNIPPETS
  // ==========================================
  const sparklesJsSnippet = `<script>
/**
 * ==========================================================================
 * BACKGROUND 2: DESTELLOS MÓVILES & ESTRELLAS DORADAS (CANVAS ENGINE)
 * Pega esto en: Page Settings -> Tracking Code -> Footer Tracking Code
 * O en un elemento Custom Code dentro de la sección.
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".ghl-sparkles-bg, .bg-sparkles, [data-bg='sparkles']");
  
  sections.forEach(function (section) {
    if (section.querySelector(".ghl-sparkles-canvas")) return; // Evitar duplicar
    
    section.style.position = "relative";
    section.style.overflow = "hidden";
    
    const canvas = document.createElement("canvas");
    canvas.className = "ghl-sparkles-canvas";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";
    section.insertBefore(canvas, section.firstChild);
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let width = 0, height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    function resize() {
      const rect = section.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);
    
    // Mouse coords relativos a la sección
    let mouse = { x: -1000, y: -1000, active: false };
    section.addEventListener("mousemove", function (e) {
      const rect = section.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });
    section.addEventListener("mouseleave", function () {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    });
    
    // Generar destellos y estrellas
    const count = Math.max(30, Math.min(80, Math.floor(width * height * 0.000045)));
    const particles = [];
    
    for (let i = 0; i < count; i++) {
      const isStar = Math.random() > 0.65;
      const maxOpacity = Math.random() * 0.7 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isStar ? Math.random() * 3.2 + 2.0 : Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -(Math.random() * 0.45 + 0.15), // Ascenso suave
        opacity: Math.random() * maxOpacity,
        maxOpacity: maxOpacity,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        isStar: isStar,
        starRotation: Math.random() * Math.PI * 2,
        starRotSpeed: (Math.random() - 0.5) * 0.02,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.008
      });
    }
    
    function drawStar(x, y, r, opacity, rotation) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Resplandor radial exterior
      const radialGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.8);
      radialGlow.addColorStop(0, "rgba(255, 243, 209, " + (opacity * 0.9) + ")");
      radialGlow.addColorStop(0.35, "rgba(221, 168, 59, " + (opacity * 0.6) + ")");
      radialGlow.addColorStop(1, "rgba(221, 168, 59, 0)");
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.8, 0, Math.PI * 2);
      ctx.fill();
      
      // Estrella de 4 puntas de diamante
      ctx.fillStyle = "rgba(255, 255, 255, " + (opacity * 0.95) + ")";
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
    }
    
    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      frame++;
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.swayOffset += p.swaySpeed;
        p.x += p.speedX + Math.sin(p.swayOffset) * 0.22;
        p.y += p.speedY;
        
        // Reposicionar al salir de la pantalla
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        
        // Titilar
        p.opacity += Math.sin(frame * p.pulseSpeed + p.swayOffset) * 0.015;
        p.opacity = Math.max(0.1, Math.min(p.maxOpacity, p.opacity));
        
        // Efecto imán / proximidad de cursor
        let effectiveOpacity = p.opacity;
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            effectiveOpacity = Math.min(1, p.opacity + (1 - dist / 160) * 0.6);
            p.x -= (dx / dist) * 0.4;
            p.y -= (dy / dist) * 0.4;
          }
        }
        
        if (p.isStar) {
          p.starRotation += p.starRotSpeed;
          drawStar(p.x, p.y, p.size, effectiveOpacity, p.starRotation);
        } else {
          // Destello circular con halo dorado
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
          g.addColorStop(0, "rgba(255, 243, 209, " + (effectiveOpacity * 0.95) + ")");
          g.addColorStop(0.4, "rgba(221, 168, 59, " + (effectiveOpacity * 0.7) + ")");
          g.addColorStop(1, "rgba(221, 168, 59, 0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  });
});
</script>`;

  // ==========================================
  // 1. PURE VANILLA CSS FOR GOHIGHLEVEL (GHL)
  // ==========================================
  const ghlCssSnippet = `/* ==========================================================================
   VIP BRANDING EXPERIENCE - MASTER CSS FOR GOHIGHLEVEL (GHL)
   Add this entire code into: Page Settings -> Custom Code -> Custom CSS
   ========================================================================== */

/* 1. TYPOGRAPHY & GOLD GRADIENTS FOR HEADINGS */
.gold-gradient-text,
.text-gold-gradient {
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF3D1 18%, #F0CA68 45%, #DDA83B 70%, #AA771C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-weight: 700;
}

.text-gold-metallic {
  background: linear-gradient(135deg, #FFF8E7 0%, #FCE394 22%, #E5B842 50%, #C8952B 75%, #8B5C0F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.font-serif-luxury {
  font-family: 'Cinzel', 'Playfair Display', 'Didot', 'Cinzel Decorative', serif !important;
  letter-spacing: -0.01em;
}

/* 2. HIGH-IMPACT LUXURY GOLD BUTTONS */
.btn-gold-luxury {
  position: relative;
  background: linear-gradient(135deg, #FDE68A 0%, #E5B842 35%, #DDA83B 65%, #966817 100%) !important;
  color: #0B0B0B !important;
  font-weight: 800 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.18em !important;
  font-size: 11px !important;
  border-radius: 2px !important;
  padding: 14px 28px !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  box-shadow: 0 10px 30px rgba(197, 168, 128, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.7) !important;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  overflow: hidden !important;
  cursor: pointer !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  text-decoration: none !important;
}

/* Laser Shine Flare Sweep on Button Hover */
.btn-gold-luxury::before {
  content: '';
  position: absolute;
  top: 0;
  left: -120%;
  width: 80%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.85), transparent);
  transform: skewX(-25deg);
  transition: all 0.75s ease;
}

.btn-gold-luxury:hover::before {
  left: 140%;
}

.btn-gold-luxury:hover {
  transform: translateY(-2px) scale(1.02) !important;
  background: linear-gradient(135deg, #FFF0A8 0%, #F5CA58 35%, #E5B842 65%, #AA771C 100%) !important;
  box-shadow: 0 16px 40px rgba(197, 168, 128, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.9) !important;
  filter: brightness(1.08);
}

.btn-gold-luxury:active {
  transform: translateY(1px) scale(0.99) !important;
}

/* Secondary Gold-Outline Button */
.btn-gold-secondary {
  position: relative;
  background: #141414 !important;
  color: #DDA83B !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.16em !important;
  font-size: 11px !important;
  border-radius: 2px !important;
  padding: 13px 26px !important;
  border: 1px solid rgba(197, 168, 128, 0.45) !important;
  transition: all 0.3s ease !important;
  cursor: pointer !important;
  text-decoration: none !important;
}

.btn-gold-secondary:hover {
  border-color: #DDA83B !important;
  background: #1C1914 !important;
  color: #FFFFFF !important;
  box-shadow: 0 0 25px rgba(197, 168, 128, 0.25) !important;
}

/* 3. LUXURY CARDS & HOVER SHIMMER EFFECTS */
.luxury-card {
  position: relative;
  background: linear-gradient(180deg, #161616 0%, #101010 100%) !important;
  border: 1px solid rgba(197, 168, 128, 0.3) !important;
  border-radius: 2px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.85) !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
  overflow: hidden;
}

.luxury-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(197, 168, 128, 0.8), transparent);
}

.luxury-card:hover {
  border-color: #DDA83B !important;
  transform: translateY(-4px) !important;
  box-shadow: 0 25px 60px rgba(197, 168, 128, 0.18), 0 0 30px rgba(197, 168, 128, 0.1) !important;
}

/* 4. ANIMATED BACKGROUNDS (LATIDO & DESTELLOS) */
.bg-flare-heartbeat,
.ghl-heartbeat-section {
  position: relative !important;
  overflow: hidden !important;
}

.heartbeat-flare-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 480px;
  background: radial-gradient(circle, rgba(221, 168, 59, 0.22) 0%, rgba(200, 149, 43, 0.08) 45%, transparent 70%);
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
  animation: heartbeatPulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.heartbeat-flare-layer::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 360px;
  height: 360px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(253, 230, 138, 0.28) 0%, rgba(221, 168, 59, 0.12) 40%, transparent 70%);
  filter: blur(40px);
  animation: heartbeatRing 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

@keyframes heartbeatPulse {
  0%   { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
  14%  { transform: translate(-50%, -50%) scale(1.18); opacity: 0.95; }
  28%  { transform: translate(-50%, -50%) scale(0.95); opacity: 0.60; }
  42%  { transform: translate(-50%, -50%) scale(1.12); opacity: 0.90; }
  70%  { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
  100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.45; }
}

@keyframes heartbeatRing {
  0%   { transform: translate(-50%, -50%) scale(0.70); opacity: 0.30; }
  14%  { transform: translate(-50%, -50%) scale(1.30); opacity: 0.80; }
  28%  { transform: translate(-50%, -50%) scale(0.90); opacity: 0.40; }
  42%  { transform: translate(-50%, -50%) scale(1.20); opacity: 0.75; }
  70%  { transform: translate(-50%, -50%) scale(0.70); opacity: 0.30; }
  100% { transform: translate(-50%, -50%) scale(0.70); opacity: 0.30; }
}

.ghl-sparkles-bg,
.bg-sparkles {
  position: relative !important;
  overflow: hidden !important;
}

/* 5. PURE CSS PARALLAX ON SCROLL CLASSES */
.ghl-parallax,
.parallax-left,
.parallax-right,
.parallax-zoom,
.parallax-zoom-in,
.parallax-fade-zoom,
.parallax-hybrid-left,
.parallax-hybrid-right,
.parallax-3d-popout,
.ghl-parallax-left,
.ghl-parallax-right,
.ghl-parallax-zoom,
.ghl-parallax-fade-zoom,
.ghl-parallax-hybrid-left,
.ghl-parallax-hybrid-right,
.ghl-parallax-3d-popout {
  opacity: 0;
  will-change: transform, opacity;
  transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* 1. PARALLAX DESDE LA IZQUIERDA */
.parallax-left,
.ghl-parallax-left,
.ghl-parallax[data-parallax="slide-left"] {
  transform: translateX(-120px) rotate(-3deg) scale(0.94);
}

/* 2. PARALLAX DESDE LA DERECHA */
.parallax-right,
.ghl-parallax-right,
.ghl-parallax[data-parallax="slide-right"] {
  transform: translateX(120px) rotate(3deg) scale(0.94);
}

/* 3. PARALLAX ZOOM */
.parallax-zoom,
.parallax-zoom-in,
.ghl-parallax-zoom,
.ghl-parallax[data-parallax="zoom-in"] {
  transform: scale(0.82) translateY(50px);
}

/* 4. PARALLAX FADE ZOOM */
.parallax-fade-zoom,
.ghl-parallax-fade-zoom,
.ghl-parallax[data-parallax="fade-zoom"] {
  transform: scale(0.88);
}

/* 5. PARALLAX HÍBRIDO IZQUIERDA */
.parallax-hybrid-left,
.ghl-parallax-hybrid-left,
.ghl-parallax[data-parallax="hybrid-left"] {
  transform: translateX(-140px) scale(0.8) rotate(-4deg);
}

/* 6. PARALLAX HÍBRIDO DERECHA */
.parallax-hybrid-right,
.ghl-parallax-hybrid-right,
.ghl-parallax[data-parallax="hybrid-right"] {
  transform: translateX(140px) scale(0.8) rotate(4deg);
}

/* 7. PARALLAX 3D POP-OUT (EFECTO CINE 3D) */
.parallax-3d-popout,
.ghl-parallax-3d-popout,
.ghl-parallax[data-parallax="3d-popout"] {
  transform: perspective(1000px) translateZ(-120px) scale(0.76) rotateX(14deg);
  opacity: 0.08;
}

/* Active In-View State */
.ghl-parallax.is-inview,
.parallax-left.is-inview,
.parallax-right.is-inview,
.parallax-zoom.is-inview,
.parallax-zoom-in.is-inview,
.parallax-fade-zoom.is-inview,
.parallax-hybrid-left.is-inview,
.parallax-hybrid-right.is-inview,
.parallax-3d-popout.is-inview,
.ghl-parallax-left.is-inview,
.ghl-parallax-right.is-inview,
.ghl-parallax-zoom.is-inview,
.ghl-parallax-fade-zoom.is-inview,
.ghl-parallax-hybrid-left.is-inview,
.ghl-parallax-hybrid-right.is-inview,
.ghl-parallax-3d-popout.is-inview {
  opacity: 1 !important;
  transform: perspective(1000px) translateZ(40px) scale(1.05) rotateX(0deg) translateY(0) rotate(0deg) !important;
}

/* 6. DYNAMIC HEADER SCROLL & BOTTOM TRANSPARENCY */
.ghl-custom-header,
.ghl-header,
.custom-header,
.luxury-header,
#ghl-custom-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.ghl-custom-header.header-top,
.ghl-header.header-top,
.custom-header.header-top,
.luxury-header.header-top,
#ghl-custom-header.header-top {
  background: linear-gradient(180deg, rgba(11, 11, 11, 0.9) 0%, rgba(11, 11, 11, 0.4) 60%, transparent 100%);
  border-bottom: 1px solid transparent;
  padding: 18px 0;
}

.ghl-custom-header.header-scrolled,
.ghl-header.header-scrolled,
.custom-header.header-scrolled,
.luxury-header.header-scrolled,
#ghl-custom-header.header-scrolled {
  background: rgba(11, 11, 11, 0.92) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(221, 168, 59, 0.3) !important;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.9) !important;
  padding: 10px 0 !important;
}

.ghl-custom-header.header-at-bottom,
.ghl-header.header-at-bottom,
.custom-header.header-at-bottom,
.luxury-header.header-at-bottom,
#ghl-custom-header.header-at-bottom {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
  opacity: 0.85;
}`;

  // ==========================================
  // 2. PURE VANILLA JAVASCRIPT FOR GOHIGHLEVEL
  // ==========================================
  const ghlJsSnippet = `<script>
/**
 * ==========================================================================
 * VIP BRANDING EXPERIENCE - PURE JS SCROLL, MOTION & SPARKLE ENGINE FOR GHL
 * Add this script into: Page Settings -> Tracking Code -> Footer Tracking Code
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", function () {
  
  // -------------------------------------------------------------
  // 1. DYNAMIC HEADER SCROLL & END-OF-PAGE TRANSPARENCY DETECTOR
  // -------------------------------------------------------------
  const header = document.querySelector(".ghl-custom-header, .ghl-header, .custom-header, .luxury-header, #ghl-custom-header, header");

  function handleHeaderScroll() {
    if (!header) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    // Check if user has reached the bottom 100px of the page
    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 100);

    if (isAtBottom) {
      header.classList.remove("header-scrolled", "header-top");
      header.classList.add("header-at-bottom");
    } else if (scrollTop > 30) {
      header.classList.remove("header-top", "header-at-bottom");
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled", "header-at-bottom");
      header.classList.add("header-top");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run on init

  // -------------------------------------------------------------
  // 2. PARALLAX ON SCROLL ENGINE (INTERSECTION OBSERVER)
  // -------------------------------------------------------------
  const parallaxSelector = [
    ".ghl-parallax",
    ".parallax-left",
    ".parallax-right",
    ".parallax-zoom",
    ".parallax-zoom-in",
    ".parallax-fade-zoom",
    ".parallax-hybrid-left",
    ".parallax-hybrid-right",
    ".parallax-3d-popout",
    ".ghl-parallax-left",
    ".ghl-parallax-right",
    ".ghl-parallax-zoom",
    ".ghl-parallax-fade-zoom",
    ".ghl-parallax-hybrid-left",
    ".ghl-parallax-hybrid-right",
    ".ghl-parallax-3d-popout",
    "[data-parallax]"
  ].join(", ");

  const parallaxElements = document.querySelectorAll(parallaxSelector);

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -5% 0px",
      threshold: [0, 0.15, 0.5, 0.85]
    };

    const parallaxObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
        }
      });
    }, observerOptions);

    parallaxElements.forEach(function (el) {
      parallaxObserver.observe(el);
    });
  } else {
    parallaxElements.forEach(function (el) {
      el.classList.add("is-inview");
    });
  }

  // -------------------------------------------------------------
  // 3. AUTO FLOATING SPARKLES CANVAS FOR SECTIONS
  // -------------------------------------------------------------
  const sparkleContainers = document.querySelectorAll(".ghl-sparkles-bg, .bg-sparkles, [data-bg='sparkles']");
  sparkleContainers.forEach(function (sec) {
    if (sec.querySelector(".ghl-sparkles-canvas")) return;
    
    sec.style.position = "relative";
    sec.style.overflow = "hidden";
    
    const canvas = document.createElement("canvas");
    canvas.className = "ghl-sparkles-canvas";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";
    sec.insertBefore(canvas, sec.firstChild);
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    function resize() {
      const rect = sec.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);
    
    let mouse = { x: -1000, y: -1000, active: false };
    sec.addEventListener("mousemove", function (e) {
      const rect = sec.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });
    sec.addEventListener("mouseleave", function () {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    });
    
    const count = Math.max(25, Math.min(75, Math.floor(w * h * 0.000045)));
    const pts = [];
    for (let i = 0; i < count; i++) {
      const isStar = Math.random() > 0.65;
      const maxOp = Math.random() * 0.7 + 0.25;
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: isStar ? Math.random() * 3.2 + 2.0 : Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -(Math.random() * 0.45 + 0.15),
        opacity: Math.random() * maxOp,
        maxOp: maxOp,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        isStar: isStar,
        rot: Math.random() * Math.PI * 2,
        rotSpd: (Math.random() - 0.5) * 0.02,
        sway: Math.random() * Math.PI * 2,
        swaySpd: Math.random() * 0.02 + 0.008
      });
    }
    
    function drawStar(x, y, r, opacity, rotation) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 2.8);
      g.addColorStop(0, "rgba(255, 243, 209, " + (opacity * 0.9) + ")");
      g.addColorStop(0.35, "rgba(221, 168, 59, " + (opacity * 0.6) + ")");
      g.addColorStop(1, "rgba(221, 168, 59, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, r * 2.8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = "rgba(255, 255, 255, " + (opacity * 0.95) + ")";
      ctx.beginPath();
      const ptsCount = 4;
      const innerR = r * 0.28;
      for (let i = 0; i < ptsCount * 2; i++) {
        const radius = i % 2 === 0 ? r * 1.6 : innerR;
        const angle = (i * Math.PI) / ptsCount;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    
    let f = 0;
    function loop() {
      ctx.clearRect(0, 0, w, h);
      f++;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.sway += p.swaySpd;
        p.x += p.speedX + Math.sin(p.sway) * 0.22;
        p.y += p.speedY;
        if (p.y < -20) { p.y = h + 20; p.x = Math.random() * w; }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        
        p.opacity += Math.sin(f * p.pulseSpeed + p.sway) * 0.015;
        p.opacity = Math.max(0.1, Math.min(p.maxOp, p.opacity));
        
        let op = p.opacity;
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            op = Math.min(1, p.opacity + (1 - dist / 160) * 0.6);
            p.x -= (dx / dist) * 0.4;
            p.y -= (dy / dist) * 0.4;
          }
        }
        
        if (p.isStar) {
          p.rot += p.rotSpd;
          drawStar(p.x, p.y, p.size, op, p.rot);
        } else {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
          g.addColorStop(0, "rgba(255, 243, 209, " + (op * 0.95) + ")");
          g.addColorStop(0.4, "rgba(221, 168, 59, " + (op * 0.7) + ")");
          g.addColorStop(1, "rgba(221, 168, 59, 0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(loop);
    }
    loop();
  });

  console.log("VIP Branding Experience Motion & Sparkles Engine Initialized for GHL.");
});
</script>`;

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#0A0A0A] text-[#FDFBF7]">
      {/* Top Banner Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#1C1813] via-[#141414] to-[#101010] border border-[#DDA83B]/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#DDA83B]/15 text-[#DDA83B] text-[10px] uppercase tracking-widest font-bold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>GoHighLevel (GHL) Master Integration Kit</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white font-serif">
              Animations, Backgrounds &amp; Motion Architecture
            </h1>
            <p className="text-xs sm:text-sm text-[#FDFBF7]/75 font-light mt-1 max-w-2xl">
              Construye tus páginas en GoHighLevel con el constructor visual y añade estos fondos (latido y destellos móviles), parallax on scroll, encabezados dinámicos y estilos dorados premium con CSS y JavaScript.
            </p>
          </div>

          <button
            onClick={onBackToOfficial}
            className="btn-gold-luxury px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Back to Official Web</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Selector Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-sm bg-[#141414] border border-[#DDA83B]/30 shadow-lg">
          <button
            onClick={() => setActiveCodeTab('backgrounds')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'backgrounds'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. Background FX Tutorials (Latido &amp; Destellos)</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('css')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'css'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>2. Master CSS (GHL Code)</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('js')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'js'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>3. Footer Tracking JS (GHL Engine)</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('guide')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'guide'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>4. Guía Paso a Paso GHL</span>
          </button>

          <button
            onClick={() => setActiveCodeTab('demo')}
            className={`px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeCodeTab === 'demo'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>5. Live Parallax &amp; UI Demo</span>
          </button>
        </div>

        {/* ========================================================
            TAB: BACKGROUND FX TUTORIALS (LATIDO & DESTELLOS)
            ======================================================== */}
        {activeCodeTab === 'backgrounds' && (
          <div className="space-y-12">
            {/* Header intro */}
            <div className="p-6 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-[#DDA83B]/20 flex items-center justify-center text-[#DDA83B]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
                  Tutoriales de Fondos VIP: Destellos Flotantes y Flare con Latido
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#A8A095] font-light max-w-3xl">
                Aprende cómo agregar los 2 fondos animados característicos de la web en cualquier sección de GoHighLevel (GHL): el <strong>Fondo de Flare Pulsante con Latido Cardíaco</strong> y el <strong>Fondo de Destellos Móviles y Estrellas en Canvas con interacción al mouse</strong>.
              </p>
            </div>

            {/* TUTORIAL 1: BACKGROUND FLARE CON LATIDO */}
            <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-[#262626] bg-[#161616] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#DDA83B]/30 to-[#966817]/20 flex items-center justify-center text-[#DDA83B] border border-[#DDA83B]/40">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B]">Fondo Animado 1</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                      Background Flare con Latido Orgánico (Heartbeat Pulse)
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleCopy(heartbeatCssSnippet, 'hb-css')}
                    className="btn-gold-luxury px-3.5 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {copied === 'hb-css' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied === 'hb-css' ? '¡CSS Copiado!' : 'Copiar CSS del Latido'}</span>
                  </button>

                  <button
                    onClick={() => handleCopy(heartbeatHtmlSnippet, 'hb-html')}
                    className="btn-gold-secondary px-3.5 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-[#DDA83B] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied === 'hb-html' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Code className="w-3.5 h-3.5" />}
                    <span>{copied === 'hb-html' ? '¡HTML Copiado!' : 'Copiar Bloque Custom Code GHL'}</span>
                  </button>
                </div>
              </div>

              {/* Live Preview Sandbox for Heartbeat */}
              <div className="p-6 bg-[#080808] border-b border-[#222]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#DDA83B]" />
                    <span className="text-xs uppercase font-bold tracking-wider text-white">Vista Previa en Vivo (Sandbox)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#A8A095]">Velocidad de Latido:</span>
                    {(['slow', 'normal', 'fast'] as const).map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setFlareSpeedDemo(spd)}
                        className={`px-2.5 py-1 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                          flareSpeedDemo === spd
                            ? 'bg-[#DDA83B] text-black'
                            : 'bg-[#181818] text-[#A8A095] hover:text-white border border-[#2D2D2D]'
                        }`}
                      >
                        {spd === 'slow' ? 'Lento (6s)' : spd === 'normal' ? 'Normal (4s)' : 'Rápido (2.5s)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Heartbeat preview container */}
                <div className="relative h-64 sm:h-80 w-full rounded-sm bg-[#0A0A0A] border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-6">
                  {/* The Heartbeat Flare */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] sm:w-[650px] sm:h-[400px] rounded-full bg-gradient-radial from-[#DDA83B]/30 via-[#DDA83B]/10 to-transparent blur-[70px] pointer-events-none"
                    style={{
                      animation: `heartbeatPulse ${
                        flareSpeedDemo === 'slow' ? '6s' : flareSpeedDemo === 'fast' ? '2.5s' : '4s'
                      } cubic-bezier(0.4, 0, 0.2, 1) infinite`
                    }}
                  />

                  {/* Ripple Ring */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-gradient-radial from-[#FDE68A]/35 via-[#DDA83B]/15 to-transparent blur-[35px] pointer-events-none"
                    style={{
                      animation: `heartbeatRing ${
                        flareSpeedDemo === 'slow' ? '6s' : flareSpeedDemo === 'fast' ? '2.5s' : '4s'
                      } cubic-bezier(0.25, 1, 0.5, 1) infinite`
                    }}
                  />

                  {/* Sample Content overlay */}
                  <div className="relative z-10 text-center max-w-md p-5 rounded-sm bg-[#121212]/80 backdrop-blur-md border border-[#DDA83B]/30 shadow-2xl">
                    <VipCrestEmblem className="w-8 h-8 text-[#DDA83B] mx-auto mb-2" />
                    <h4 className="text-base sm:text-lg font-bold text-white font-serif uppercase tracking-wider">
                      Atelier Studio &amp; Extended Suite
                    </h4>
                    <p className="text-xs text-[#A8A095] mt-1 font-light leading-relaxed">
                      El flare dorado respira en segundo plano simulando un latido sístole-diástole para generar alta sofisticación visual sin entorpecer el contenido.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions and Code Accordion */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#DDA83B]" />
                    <span>¿Cómo implementarlo en GoHighLevel (GHL)?</span>
                  </h4>
                  <ol className="space-y-3 text-xs text-[#A8A095] font-light leading-relaxed list-decimal list-inside">
                    <li>
                      <strong>Método A (Recomendado - Clases CSS)</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        1. Pega el código de la pestaña <strong>2. Master CSS</strong> en <em>Page Settings → Custom CSS</em>.
                        <br />
                        2. Selecciona la Sección deseada en el editor de GHL.
                        <br />
                        3. En la pestaña <strong>Advanced</strong>, agrega la clase <code className="text-[#DDA83B] font-mono font-bold">bg-flare-heartbeat</code>.
                        <br />
                        4. Agrega un elemento <em>Custom JS/HTML</em> adentro de la sección con <code className="text-[#DDA83B] font-mono">&lt;div class="heartbeat-flare-layer"&gt;&lt;/div&gt;</code>.
                      </p>
                    </li>
                    <li>
                      <strong>Método B (Auto-contenido en 1 solo paso)</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        Arrastra un elemento <strong>Custom JS/HTML</strong> al inicio de tu sección y pega directamente el bloque de <em>Custom Code GHL</em> que tienes arriba.
                      </p>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#DDA83B]" />
                    <span>Código CSS Puro (Snippet Completo)</span>
                  </h4>
                  <pre className="overflow-x-auto p-4 rounded-sm bg-[#080808] text-[11px] font-mono text-[#FDE08A] leading-relaxed max-h-56 select-all border border-[#222]">
                    <code>{heartbeatCssSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* TUTORIAL 2: BACKGROUND DESTELLOS MÓVILES (SPARKLES CANVAS) */}
            <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-[#262626] bg-[#161616] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#DDA83B]/30 to-[#966817]/20 flex items-center justify-center text-[#DDA83B] border border-[#DDA83B]/40">
                    <Stars className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#DDA83B]">Fondo Animado 2</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                      Background de Destellos Móviles y Estrellas (Canvas Reactivo)
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleCopy(sparklesJsSnippet, 'sp-js')}
                    className="btn-gold-luxury px-3.5 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider text-black inline-flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {copied === 'sp-js' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied === 'sp-js' ? '¡Script Copiado!' : 'Copiar Script de Destellos JS'}</span>
                  </button>
                </div>
              </div>

              {/* Live Preview Sandbox for Sparkles Canvas */}
              <div className="p-6 bg-[#080808] border-b border-[#222]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#DDA83B]" />
                    <span className="text-xs uppercase font-bold tracking-wider text-white">Vista Previa Interactiva (Mueve el mouse sobre el recuadro)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#A8A095]">Densidad de Destellos:</span>
                    {(['subtle', 'medium', 'high'] as const).map((dns) => (
                      <button
                        key={dns}
                        onClick={() => setSparkleDensityDemo(dns)}
                        className={`px-2.5 py-1 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer ${
                          sparkleDensityDemo === dns
                            ? 'bg-[#DDA83B] text-black'
                            : 'bg-[#181818] text-[#A8A095] hover:text-white border border-[#2D2D2D]'
                        }`}
                      >
                        {dns === 'subtle' ? 'Sutil' : dns === 'medium' ? 'Medio' : 'Alta Densidad'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real Canvas Live Component Preview */}
                <div className="relative h-72 sm:h-96 w-full rounded-sm bg-[#090909] border border-[#2D2D2D] overflow-hidden flex items-center justify-center p-6 cursor-crosshair">
                  <SectionSparkleCanvas density={sparkleDensityDemo} glowIntensity="medium" />

                  <div className="relative z-10 text-center max-w-lg p-6 rounded-sm bg-[#121212]/85 backdrop-blur-md border border-[#DDA83B]/30 shadow-2xl pointer-events-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B] text-[10px] uppercase tracking-widest font-bold mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Meet the Global Branding Expert / VIP Experience</span>
                    </div>
                    <h4 className="text-base sm:text-xl font-bold text-white font-serif uppercase tracking-wider">
                      Destellos Dorados &amp; Diamantes de Luz
                    </h4>
                    <p className="text-xs text-[#A8A095] mt-2 font-light leading-relaxed">
                      Flotación ascendente con oscilación senoidal natural, estrellas de 4 puntas que giran a velocidad diferenciada e iluminación por proximidad del cursor.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#DDA83B]">
                      <MousePointer className="w-3.5 h-3.5" />
                      <span>Prueba mover tu cursor alrededor de esta tarjeta</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions and Code Accordion */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#DDA83B]" />
                    <span>¿Cómo activarlo en cualquier sección de GHL?</span>
                  </h4>
                  <ol className="space-y-3 text-xs text-[#A8A095] font-light leading-relaxed list-decimal list-inside">
                    <li>
                      <strong>Paso 1 - Agregar el Script Motor</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        Copia el <strong>Script de Destellos JS</strong> con el botón superior y pégalo en <em>Page Settings → Tracking Code → Footer Tracking Code</em>.
                      </p>
                    </li>
                    <li>
                      <strong>Paso 2 - Asignar la Clase en GHL</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        En el constructor de GHL, haz clic en cualquier Sección (por ejemplo la de <em>Meet the Global Branding Expert</em> o <em>VIP Packages</em>).
                      </p>
                    </li>
                    <li>
                      <strong>Paso 3 - Campo Custom Class</strong>:
                      <p className="pl-4 pt-1 text-[11px]">
                        En la barra derecha <strong>Advanced</strong>, agrega en <strong>Custom Class</strong> la clase <code className="text-[#DDA83B] font-mono font-bold">ghl-sparkles-bg</code>. El script generará y animará automáticamente el canvas dentro de esa sección.
                      </p>
                    </li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#DDA83B]" />
                    <span>Motor JavaScript Puro para GHL</span>
                  </h4>
                  <pre className="overflow-x-auto p-4 rounded-sm bg-[#080808] text-[11px] font-mono text-[#DDA83B] leading-relaxed max-h-56 select-all border border-[#222]">
                    <code>{sparklesJsSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: GHL CUSTOM CSS
            ======================================================== */}
        {activeCodeTab === 'css' && (
          <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
            <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-[#262626] bg-[#161616]">
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-[#DDA83B]" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                    GoHighLevel Master Custom CSS
                  </h3>
                  <p className="text-[11px] text-[#A8A095]">
                    Copy and paste into GHL: <strong>Page Settings → Custom Code → Custom CSS</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(ghlCssSnippet, 'css')}
                className="btn-gold-luxury px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2 cursor-pointer shadow-lg mt-2 sm:mt-0"
              >
                {copied === 'css' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>CSS Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy All CSS Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="overflow-x-auto p-6 bg-[#080808] text-xs font-mono text-[#FDE08A] leading-relaxed max-h-[600px] select-all">
              <code>{ghlCssSnippet}</code>
            </pre>
          </div>
        )}

        {/* ========================================================
            TAB 3: GHL FOOTER TRACKING JS
            ======================================================== */}
        {activeCodeTab === 'js' && (
          <div className="rounded-sm bg-[#121212] border border-[#DDA83B]/35 overflow-hidden shadow-2xl">
            <div className="flex flex-wrap items-center justify-between p-4 sm:p-6 border-b border-[#262626] bg-[#161616]">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-[#DDA83B]" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                    GoHighLevel Pure JavaScript Motion Engine
                  </h3>
                  <p className="text-[11px] text-[#A8A095]">
                    Copy and paste into GHL: <strong>Page Settings → Tracking Code → Footer Tracking Code</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(ghlJsSnippet, 'js')}
                className="btn-gold-luxury px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2 cursor-pointer shadow-lg mt-2 sm:mt-0"
              >
                {copied === 'js' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>JS Script Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Pure JS Engine</span>
                  </>
                )}
              </button>
            </div>

            <pre className="overflow-x-auto p-6 bg-[#080808] text-xs font-mono text-[#DDA83B] leading-relaxed max-h-[600px] select-all">
              <code>{ghlJsSnippet}</code>
            </pre>
          </div>
        )}

        {/* ========================================================
            TAB 4: HOW TO APPLY IN GHL BUILDER
            ======================================================== */}
        {activeCodeTab === 'guide' && (
          <div className="space-y-8">
            {/* Step by Step GHL Walkthrough */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl space-y-4">
              <h3 className="text-xl font-bold text-white font-serif">
                ¿Cómo agregar las animaciones y estilos en GoHighLevel (Paso a Paso)?
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A095] font-light leading-relaxed">
                Una vez que hayas pegado el código de la pestaña <strong>Master CSS</strong> en los ajustes de la página y el de <strong>Footer Tracking JS</strong> en el Footer Tracking Code, solo debes asignar clases CSS a cualquier elemento desde el constructor visual de GHL:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-2">1</span>
                  <h4 className="text-sm font-bold text-white mb-1">Selecciona el elemento</h4>
                  <p className="text-[11px] text-[#A8A095]">Haz clic sobre el Botón, Tarjeta, Sección, Columna, Imagen o Título en el editor de GHL.</p>
                </div>
                <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-2">2</span>
                  <h4 className="text-sm font-bold text-white mb-1">Abre la pestaña "Advanced"</h4>
                  <p className="text-[11px] text-[#A8A095]">En la barra lateral derecha, ve a la pestaña <strong>Advanced</strong> y busca el campo <strong>Custom Class</strong>.</p>
                </div>
                <div className="p-4 rounded-sm bg-[#0A0A0A] border border-[#262626]">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient text-black font-extrabold text-xs flex items-center justify-center mb-2">3</span>
                  <h4 className="text-sm font-bold text-white mb-1">Escribe la clase deseada</h4>
                  <p className="text-[11px] text-[#A8A095]">Escribe la clase de animación, fondo o estilo (por ejemplo: <code className="text-[#DDA83B]">parallax-zoom</code>, <code className="text-[#DDA83B]">ghl-sparkles-bg</code> o <code className="text-[#DDA83B]">btn-gold-luxury</code>) y guarda.</p>
                </div>
              </div>
            </div>

            {/* Parallax Classes Table / Cards */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Clases de Animación Parallax on Scroll (Elige según el efecto)
                  </h3>
                  <p className="text-xs text-[#A8A095] font-light">
                    Solo copia la clase y pégala en el campo <strong>Custom Class</strong> del elemento en GHL:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Zoom */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Zoom Frontal</span>
                      <button
                        onClick={() => handleCopy('parallax-zoom', 'p-zoom')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-zoom' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-zoom' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-zoom</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Emerge con zoom frontal hacia el usuario y desvanecimiento suave al entrar en viewport.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Tarjetas centrales, Video cinema, Grilla de fotos.</span>
                </div>

                {/* 2. Slide Left */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Desde la Izquierda</span>
                      <button
                        onClick={() => handleCopy('parallax-left', 'p-left')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-left' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-left' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-left</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Se desliza suavemente desde la izquierda con leve inclinación 3D y se acopla en su lugar.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Títulos de columna izquierda, retratos, dossieres.</span>
                </div>

                {/* 3. Slide Right */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Desde la Derecha</span>
                      <button
                        onClick={() => handleCopy('parallax-right', 'p-right')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-right' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-right' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-right</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Se desliza desde la derecha con leve ángulo 3D y se fija suavemente.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Formularios en columna derecha, detalles de paquetes.</span>
                </div>

                {/* 4. Hybrid Left */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Híbrido Izquierda</span>
                      <button
                        onClick={() => handleCopy('parallax-hybrid-left', 'p-hleft')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-hleft' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-hleft' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-hybrid-left</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Combina traslación desde la izquierda + zoom hacia adelante al mismo tiempo.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Citas destacadas de testimonios, tarjetas VIP de alto impacto.</span>
                </div>

                {/* 5. Hybrid Right */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Híbrido Derecha</span>
                      <button
                        onClick={() => handleCopy('parallax-hybrid-right', 'p-hright')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-hright' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-hright' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-hybrid-right</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Combina traslación desde la derecha + zoom hacia adelante al mismo tiempo.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Tarjeta de precios VIP, blueprint interactivo.</span>
                </div>

                {/* 6. Fade Zoom */}
                <div className="p-5 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B] transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#DDA83B]/20 text-[#DDA83B]">Fade Zoom Suave</span>
                      <button
                        onClick={() => handleCopy('parallax-fade-zoom', 'p-fzoom')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer"
                      >
                        {copied === 'p-fzoom' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-fzoom' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FFF] font-bold block mb-2">parallax-fade-zoom</code>
                    <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                      Aparición sutil mediante escala menor (0.88) y opacidad progresiva.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B]/80 mt-3 pt-2 border-t border-white/5">Ideal para: Bloques de texto explicativo, subtítulos, badges.</span>
                </div>

                {/* 7. 3D Pop-Out Cinema */}
                <div className="p-5 rounded-sm bg-gradient-to-br from-[#1A1610] to-[#0E0E0E] border border-[#DDA83B]/60 shadow-[0_0_20px_rgba(221,168,59,0.15)] hover:border-[#DDA83B] transition-colors flex flex-col justify-between md:col-span-2 lg:col-span-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-sm bg-[#DDA83B] text-black shadow-[0_0_10px_#DDA83B]">Efecto 3D Pop-Out Cinema (Sale de la Pantalla)</span>
                      <button
                        onClick={() => handleCopy('parallax-3d-popout', 'p-3d')}
                        className="text-xs text-[#A8A095] hover:text-[#DDA83B] flex items-center gap-1 cursor-pointer font-bold"
                      >
                        {copied === 'p-3d' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied === 'p-3d' ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                    <code className="text-sm font-mono text-[#FDE08A] font-bold block mb-2">parallax-3d-popout</code>
                    <p className="text-xs text-[#E5E0D8] font-light leading-relaxed">
                      Efecto de proyección cinematográfica en 3D: el elemento surge desde la profundidad del fondo, se proyecta hacia adelante rompiendo el plano visual de la pantalla (translateZ + scale 1.18x + sombras 3D multicapa) y gira sutilmente según la inclinación.
                    </p>
                  </div>
                  <span className="text-[10px] text-[#DDA83B] font-bold mt-3 pt-2 border-t border-[#DDA83B]/20">Ideal para: La sección de Cita VIP ("You will gain access to his lifestyle..."), Banners de Impacto y Logros Exclusivos.</span>
                </div>
              </div>
            </div>

            {/* Other Classes: Buttons, Cards, Gradients, Header, Backgrounds */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-serif mb-2">
                Clases de Estilos, Botones, Tarjetas y Fondos para GHL
              </h3>
              <p className="text-xs text-[#A8A095] font-light mb-6">
                Puedes combinar estas clases con las de parallax agregando un espacio (ej: <code className="text-[#DDA83B]">luxury-card parallax-zoom</code>):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.ghl-sparkles-bg</code>
                    <p className="text-xs text-[#A8A095] font-light">Agrega el canvas animado de destellos y estrellas doradas a cualquier sección.</p>
                  </div>
                  <button onClick={() => handleCopy('ghl-sparkles-bg', 'c-spk')} className="text-xs text-[#A8A095] hover:text-white p-1 cursor-pointer">
                    {copied === 'c-spk' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.bg-flare-heartbeat</code>
                    <p className="text-xs text-[#A8A095] font-light">Asigna el resplandor de respiración y flare con latido a la sección.</p>
                  </div>
                  <button onClick={() => handleCopy('bg-flare-heartbeat', 'c-hb')} className="text-xs text-[#A8A095] hover:text-white p-1 cursor-pointer">
                    {copied === 'c-hb' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.btn-gold-luxury</code>
                    <p className="text-xs text-[#A8A095] font-light">Botón de oro con brillo láser en hover, sombra 3D y bordes biselados.</p>
                  </div>
                  <button onClick={() => handleCopy('btn-gold-luxury', 'c-btn')} className="text-xs text-[#A8A095] hover:text-white p-1">
                    {copied === 'c-btn' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.luxury-card</code>
                    <p className="text-xs text-[#A8A095] font-light">Tarjeta obsidiana con borde dorado fino, línea superior de brillo y halo hover.</p>
                  </div>
                  <button onClick={() => handleCopy('luxury-card', 'c-card')} className="text-xs text-[#A8A095] hover:text-white p-1">
                    {copied === 'c-card' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.gold-gradient-text</code>
                    <p className="text-xs text-[#A8A095] font-light">Degradado metálico de oro de 4 paradas para cualquier encabezado o texto.</p>
                  </div>
                  <button onClick={() => handleCopy('gold-gradient-text', 'c-txt')} className="text-xs text-[#A8A095] hover:text-white p-1">
                    {copied === 'c-txt' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-sm bg-[#0E0E0E] border border-[#222] flex items-start justify-between gap-3">
                  <div>
                    <code className="text-xs font-mono text-[#DDA83B] font-bold block mb-1">.ghl-custom-header</code>
                    <p className="text-xs text-[#A8A095] font-light">Clase para el Header en GHL. Cambia a vidrio oscuro al scroll y transparente al fondo.</p>
                  </div>
                  <button onClick={() => handleCopy('ghl-custom-header', 'c-hdr')} className="text-xs text-[#A8A095] hover:text-white p-1 cursor-pointer">
                    {copied === 'c-hdr' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 5: LIVE COMPONENT & MOTION DEMO
            ======================================================== */}
        {activeCodeTab === 'demo' && (
          <div className="space-y-10">
            {/* Visual Buttons & Hover Playground */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-serif mb-2">
                Live Buttons &amp; Hover Effects Sandbox
              </h3>
              <p className="text-xs text-[#A8A095] font-light mb-6">
                Hover over the buttons below to test the laser shine sweep flare and ripple wave pulse:
              </p>

              <div className="flex flex-wrap items-center gap-6 p-6 rounded-sm bg-[#090909] border border-[#222]">
                {/* Primary Button */}
                <button className="btn-gold-luxury">
                  <span>Apply For Private Event</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button */}
                <button className="btn-gold-secondary">
                  <span>View Full Portfolio</span>
                </button>

                {/* Video Play Button Pulse */}
                <div className="flex items-center gap-3">
                  <div className="play-button-pulse cursor-pointer">
                    <Play className="w-7 h-7 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-[#DDA83B] font-bold">
                    Watch Briefing
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Card Hover Sandbox */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-serif mb-2">
                Luxury Card Hover &amp; Gold Glow
              </h3>
              <p className="text-xs text-[#A8A095] font-light mb-6">
                Test the razor-sharp border elevation and gold halo hover effect:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="luxury-card p-6 cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-[#DDA83B]/15 flex items-center justify-center text-[#DDA83B] mb-4">
                    <VipCrestEmblem className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    Executive Mastermind
                  </h4>
                  <p className="text-xs text-[#DDA83B] font-medium mb-3">
                    2-Day Private Immersion
                  </p>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    Exclusive luxury villa retreat with turnkey Hollywood-grade media asset creation.
                  </p>
                </div>

                <div className="luxury-card p-6 cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-[#DDA83B]/15 flex items-center justify-center text-[#DDA83B] mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    Credibility Card
                  </h4>
                  <p className="text-xs text-[#DDA83B] font-medium mb-3">
                    Digital Omnipresence
                  </p>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    High-impact digital authority profile with integrated QR for frictionless deal flow.
                  </p>
                </div>

                <div className="luxury-card p-6 cursor-pointer">
                  <div className="w-10 h-10 rounded-sm bg-[#DDA83B]/15 flex items-center justify-center text-[#DDA83B] mb-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    Million Dollar Moments
                  </h4>
                  <p className="text-xs text-[#DDA83B] font-medium mb-3">
                    Time Condensation
                  </p>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    Rey Perez's proven decision matrix to command 7-8 figure personal brand equity.
                  </p>
                </div>
              </div>
            </div>

            {/* Parallax Motion Simulation */}
            <div className="p-6 sm:p-8 rounded-sm bg-[#121212] border border-[#DDA83B]/35 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">
                    Parallax Trigger Simulation
                  </h3>
                  <p className="text-xs text-[#A8A095] font-light">
                    Simulate how elements react when scrolling into view:
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: 'slide-left', label: 'Slide Left' },
                    { id: 'slide-right', label: 'Slide Right' },
                    { id: 'zoom-in', label: 'Zoom In' },
                    { id: 'hybrid-left', label: 'Hybrid Left' },
                    { id: '3d-popout', label: '3D Pop-Out' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setDemoState(m.id as any);
                        setDemoTriggerKey((k) => k + 1);
                      }}
                      className={`px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        demoState === m.id
                          ? 'bg-gold-gradient text-black font-extrabold shadow-md'
                          : 'bg-[#181818] text-[#FDFBF7]/70 hover:text-white border border-[#2A2A2A]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-sm bg-[#090909] border border-[#222] flex items-center justify-center min-h-[260px] overflow-hidden">
                <div
                  key={demoTriggerKey}
                  className={`luxury-card p-6 max-w-sm w-full text-center transition-all duration-700 ${
                    demoState === 'slide-left'
                      ? 'animate-in fade-in slide-in-from-left duration-700'
                      : demoState === 'slide-right'
                      ? 'animate-in fade-in slide-in-from-right duration-700'
                      : demoState === 'zoom-in'
                      ? 'animate-in fade-in zoom-in-75 duration-700'
                      : demoState === '3d-popout'
                      ? 'animate-in fade-in zoom-in-50 duration-700 scale-105 shadow-[0_0_50px_rgba(221,168,59,0.35)]'
                      : 'animate-in fade-in slide-in-from-left zoom-in-75 duration-700'
                  }`}
                >
                  <VipCrestEmblem className="w-8 h-8 text-[#DDA83B] mx-auto mb-3" />
                  <span className="text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold block mb-1">
                    Simulated GHL Element
                  </span>
                  <h4 className="text-lg font-bold text-white font-serif mb-2 uppercase">
                    {demoState.replace('-', ' ')}
                  </h4>
                  <p className="text-xs text-[#A8A095] font-light leading-relaxed">
                    Smoothly interpolated using vanilla CSS classes and the IntersectionObserver engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
