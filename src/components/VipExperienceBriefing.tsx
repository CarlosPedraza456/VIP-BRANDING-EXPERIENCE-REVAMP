import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  X,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Crown,
  Film,
  Clock
} from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';
import { SectionSparkleCanvas } from './SectionSparkleCanvas';

interface VipExperienceBriefingProps {
  onOpenConsultation: () => void;
  onExplorePackages?: () => void;
}

export const VipExperienceBriefing: React.FC<VipExperienceBriefingProps> = ({
  onOpenConsultation,
  onExplorePackages
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="vip-experience-briefing" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-[#14120F] via-[#0E0E0E] to-[#0A0A0A] border-t border-b border-[#DDA83B]/20">
      {/* Animated luxury ambient sparkles / destellos background */}
      <SectionSparkleCanvas density="medium" glowIntensity="high" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header with Zoom/Fade Dynamics */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ParallaxHorizontalWrapper direction="fade-zoom">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#1A1815] border border-[#DDA83B]/30 text-[#DDA83B] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold mb-4 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#E6CA9E]" />
              <span>What You Should Know About</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              The VIP Branding <span className="text-gold-gradient italic">Experience</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#A8A095] font-light mt-3 max-w-xl mx-auto">
              An exclusive invitation reserved for elite entrepreneurs and industry icons ready to command supreme market authority.
            </p>
          </ParallaxHorizontalWrapper>
        </div>

        {/* Expanded Centered Cinema Showcase with Dynamic Zoom-In Towards User */}
        <ParallaxHorizontalWrapper direction="zoom-in" className="w-full">
          <div className="relative rounded-sm overflow-hidden border border-[#DDA83B]/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] group flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#181613] via-[#121212] to-[#0A0A0A] min-h-[500px] sm:min-h-[580px]">
            {/* Background Editorial Visual */}
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/vip_experience_immersion_villa_1791351134176.jpg"
                alt="VIP Branding Experience Private Mastermind"
                className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-[#0B0B0B]/30" />
            </div>

            {/* Top Overlay Badges (Sharper Architectural Corners) */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#0B0B0B]/90 border border-[#DDA83B]/40 backdrop-blur-md">
                <VipCrestEmblem className="w-4 h-4 text-[#DDA83B]" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">Private Orientation</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#0B0B0B]/90 border border-white/15 text-[10px] tracking-wider text-[#DDA83B] backdrop-blur-md">
                <Clock className="w-3.5 h-3.5" />
                <span>03:45 Masterclass Video</span>
              </div>
            </div>

            {/* Center Play Button with Golden Wave Pulse */}
            <div className="relative z-10 my-10 text-center flex flex-col items-center justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="relative group/btn flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-gradient text-black shadow-[0_0_50px_rgba(221,168,59,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Play Video with Rey Perez"
              >
                <span className="absolute inset-0 rounded-full border-2 border-white/60 animate-ping opacity-30" />
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </button>
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-white mt-4 drop-shadow-lg">
                Watch Briefing With Rey Perez
              </p>
              <span className="text-[11px] text-[#DDA83B] font-light mt-1">
                Global Branding Expert &amp; CEO of AMP Productions
              </span>
            </div>

            {/* Bottom Official Narrative Card + Action Controls (Crisp Sharp Borders) */}
            <div className="relative z-10 bg-[#0E0E0E]/95 border border-[#DDA83B]/40 rounded-sm p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <p className="text-xs sm:text-sm text-[#F7F4EF]/90 font-light leading-relaxed mb-6">
                <span className="font-semibold text-white">You are clearly a top performer otherwise you would not be here.</span>{' '}
                Before continuing please watch this short video from <span className="text-[#E6CA9E] font-medium">Global Branding Expert, Rey Perez</span> to learn more about this once in a lifetime event. After watching the video, if you would like to gain access to this exclusive private event, learn Rey's best kept secrets to success, take your results to the next level, and be part of a select group of elite, high-level achievers to indulge in a luxury lifestyle experience, then click the link below and apply now.
              </p>

              <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 text-xs text-[#DDA83B]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-medium">Strictly Confidential · NDA Protected Application</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onOpenConsultation}
                    className="btn-gold-luxury flex-1 sm:flex-initial py-3 px-6 rounded-sm font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      if (onExplorePackages) {
                        onExplorePackages();
                      } else {
                        const el = document.getElementById('archetypes') || document.getElementById('packages');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex-1 sm:flex-initial py-3 px-6 rounded-sm font-bold text-xs uppercase tracking-wider text-[#DDA83B] bg-[#1A1815] border border-[#DDA83B]/40 hover:border-[#DDA83B] hover:bg-[#221F1A] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Crown className="w-3.5 h-3.5" />
                    <span>View Packages</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ParallaxHorizontalWrapper>
      </div>

      {/* Video Modal Player (Sharp Corner Architectural Luxury) */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-xl"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#121212] border border-[#DDA83B]/50 rounded-sm overflow-hidden shadow-[0_0_80px_rgba(221,168,59,0.25)]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A] bg-[#161616]">
                <div className="flex items-center gap-3">
                  <VipCrestEmblem className="w-5 h-5 text-[#DDA83B]" />
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif tracking-wide">
                      VIP Branding Experience · Private Masterclass
                    </h3>
                    <p className="text-[10px] text-[#A8A095]">Presented by Rey Perez, Global Branding Expert</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-sm hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <div className="text-center p-8 max-w-lg">
                  <div className="w-16 h-16 rounded-sm bg-[#DDA83B]/15 border border-[#DDA83B]/40 flex items-center justify-center mx-auto mb-4 text-[#DDA83B]">
                    <Film className="w-8 h-8 animate-pulse" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-serif">
                    "If you are on this website you have been selected."
                  </h4>
                  <p className="text-xs text-[#B5ADA3] font-light leading-relaxed mb-6">
                    Rey Perez explains the exact blueprint used by elite executives, business icons, and celebrity creators to command premium market positioning and 10x their brand equity.
                  </p>
                  <button
                    onClick={() => {
                      setIsVideoModalOpen(false);
                      onOpenConsultation();
                    }}
                    className="btn-gold-luxury px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Apply for Upcoming Cohort</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
