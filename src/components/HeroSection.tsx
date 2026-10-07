import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { VipCrestEmblem, LuxuryMonogram } from './BrandIcons';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreBrand: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreBrand,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for multi-layer depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '42%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.24]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '65%']);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const floatingBadgeY = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);
  const floatingBadgeRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] lg:min-h-[105vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Image with Cinematic Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 origin-center pointer-events-none"
      >
        <img
          src="/src/assets/images/hero_executive_private_jet_1791321323222.jpg"
          alt="VIP Executive Aviation & Personal Branding"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.18]"
        />
        {/* Luxury Vignette & Scrim Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B0B0B]/40 to-[#0B0B0B]" />
        {/* Gold Glow Highlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[#C5A880]/15 blur-[140px] rounded-full pointer-events-none" />
      </motion.div>

      {/* Floating Monogram Decorative Insignia */}
      <motion.div
        style={{ y: floatingBadgeY, rotate: floatingBadgeRotate }}
        className="hidden xl:block absolute right-12 top-36 z-10 pointer-events-none opacity-60 hover:opacity-95 transition-opacity"
      >
        <div className="p-6 border border-[#DDA83B]/35 rounded-sm backdrop-blur-md animate-float-slow gold-glow">
          <LuxuryMonogram size={78} />
        </div>
      </motion.div>

      {/* Hero Foreground Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center mt-6"
      >
        {/* Top VIP Selection Badge with Sharp Luxury Styling */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm border border-[#DDA83B]/40 bg-[#141414]/90 backdrop-blur-md mb-6 transition-transform hover:scale-105 duration-300 shadow-xl">
          <VipCrestEmblem size={20} className="w-5 h-5 text-[#DDA83B]" />
          <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
            VIP BRANDING EXPERIENCE
          </span>
          <span className="w-1 h-1 rounded-full bg-[#DDA83B]" />
          <span className="font-brand-sans text-[11px] uppercase tracking-widest text-[#FDFBF7]/80">
            BEST OF THE BEST
          </span>
        </div>

        {/* Main Title with Gradient and Cinzel Font */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] text-balance mb-6 max-w-4xl">
          <span className="block text-[#FFFFFF] drop-shadow-sm">
            ELITE ENTREPRENEUR &amp;
          </span>
          <span className="text-gold-gradient block mt-1">
            BUSINESS LEADERSHIP BRANDING
          </span>
        </h1>

        {/* Official Website Selection Paragraph (Crisp Sharp Borders) */}
        <div className="max-w-3xl mx-auto mb-8 p-6 rounded-sm bg-black/50 border border-[#DDA83B]/35 backdrop-blur-md shadow-2xl">
          <p className="font-body text-sm sm:text-base text-[#FDFBF7]/90 font-light leading-relaxed">
            If you are on this website you have been <strong className="text-[#DDA83B] font-semibold">selected</strong> to be part of an exclusive group of <span className="text-white font-semibold">ELITE Entrepreneurs and Business Professionals</span> who want a full service, custom tailored VIP experience delivered for their personal brand. Join a small group of top achievers and indulge in a luxury lifestyle experience while creating the most high-level marketing collaterals.
          </p>
        </div>

        {/* Action Button: View The Experience */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={() => {
              const el = document.getElementById('archetypes');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-[0.22em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-2xl cursor-pointer"
          >
            <span>View The Experience</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Direct Link to Founder */}
        <div className="flex items-center justify-center gap-6 text-xs text-[#FDFBF7]/60 font-mono">
          <button
            onClick={() => {
              const el = document.getElementById('founder');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#DDA83B] underline underline-offset-4 transition-colors cursor-pointer"
          >
            Meet Global Branding Expert Rey Perez →
          </button>
        </div>
      </motion.div>
    </section>
  );
};
