import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ArrowRight, Sparkles, ShieldCheck, Video, Award, CheckCircle2 } from 'lucide-react';
import { VipCrestEmblem, LuxuryMonogram } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';

interface WhatYouShouldKnowProps {
  onOpenConsultation: () => void;
  onViewPackages?: () => void;
}

export const WhatYouShouldKnow: React.FC<WhatYouShouldKnowProps> = ({
  onOpenConsultation,
  onViewPackages,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePackagesClick = () => {
    if (onViewPackages) {
      onViewPackages();
    } else {
      const el = document.getElementById('archetypes') || document.getElementById('packages');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="what-you-should-know" className="py-28 bg-[#090909] relative overflow-hidden border-t border-b border-[#DDA83B]/25">
      {/* Background Watermark Crests & Ambient Radial Highlights */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden xl:block select-none">
        <VipCrestEmblem size={420} className="text-[#DDA83B]" />
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden xl:block select-none">
        <VipCrestEmblem size={420} className="text-[#DDA83B]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[#DDA83B]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ParallaxHorizontalWrapper direction="left" distance={60}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-brand-sans text-xs uppercase tracking-[0.35em] text-[#DDA83B] font-semibold block mb-2">
              What you should know about
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              THE VIP BRANDING <span className="gold-gradient-text">EXPERIENCE</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#DDA83B] to-transparent mx-auto mt-4" />
          </div>
        </ParallaxHorizontalWrapper>

        {/* Master Showcase Frame: Video Left + Authority Copy Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Mastermind Video Card with Red Play Button */}
          <div className="lg:col-span-7">
            <ParallaxHorizontalWrapper direction="left" distance={70}>
              <div className="relative group rounded-2xl overflow-hidden border border-[#DDA83B]/40 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-2">
                
                {/* Gold Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#DDA83B] z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#DDA83B] z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#DDA83B] z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#DDA83B] z-20 pointer-events-none" />

                <div 
                  onClick={() => setIsPlaying(true)}
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-[#141414] group/video flex items-center justify-center"
                >
                  <img
                    src="/src/assets/images/rey_perez_mastermind_workshop_1791351076494.jpg"
                    alt="Rey Perez Mastermind Workshop Session"
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover/video:scale-105 group-hover/video:brightness-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Red Signature YouTube-Style Play Button with Glow */}
                  <div className="relative z-10 w-20 h-14 sm:w-24 sm:h-16 rounded-2xl bg-[#E62117] group-hover/video:bg-[#FF0000] flex items-center justify-center shadow-[0_0_35px_rgba(230,33,23,0.7)] group-hover/video:scale-115 transition-all duration-300">
                    <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white ml-1.5" />
                  </div>

                  {/* Top Live Event Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-[#DDA83B]/30 text-[10px] font-mono text-[#DDA83B] uppercase tracking-wider font-semibold">
                    <Video className="w-3.5 h-3.5" />
                    <span>Rey Perez Live Event Briefing</span>
                  </div>

                  {/* Bottom Duration / Host Bar */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/90 font-medium">
                    <span className="drop-shadow">Brand in 2 Days Mastermind Session</span>
                    <span className="px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-[#DDA83B]">
                      Click to Watch (HD)
                    </span>
                  </div>
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          </div>

          {/* RIGHT: High-Converting Verbatim Text Dossier */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ParallaxHorizontalWrapper direction="right" distance={70}>
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#161616] via-[#121212] to-[#0A0A0A] border border-[#DDA83B]/35 shadow-2xl relative">
                
                {/* Top Subtle Emblem Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <VipCrestEmblem className="w-6 h-6 text-[#DDA83B]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
                    Exclusive Selection Brief
                  </span>
                </div>

                {/* Verbatim Paragraph from Official Website */}
                <p className="font-body text-sm sm:text-base text-[#F7F4EF]/90 leading-relaxed font-light mb-6">
                  You are clearly a top performer otherwise you would not be here. Before continuing please watch this short video from <strong className="text-white font-semibold">Global Branding Expert, Rey Perez</strong> to learn more about this once in a lifetime event.
                </p>

                <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed font-light mb-8">
                  After watching the video, if you would like to gain access to this exclusive private event, learn Rey's best kept secrets to success, take your results to the next level, and be part of a select group of elite, high-level achievers to indulge in a luxury lifestyle experience, then apply below.
                </p>

                {/* Bullet Proof Points */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10 text-xs text-[#F7F4EF]/85">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DDA83B] shrink-0" />
                    <span>Mastermind &amp; Marketing Seminars Across the Country</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DDA83B] shrink-0" />
                    <span>Socially Infuzed-Networking Events &amp; VIP Masterminds</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DDA83B] shrink-0" />
                    <span>High-Level Marketing Collaterals Delivered On-Site</span>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-4 px-6 rounded-md font-brand-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl flex items-center justify-center gap-2 cursor-pointer mb-3"
                >
                  <span>Apply for Private Event</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePackagesClick}
                  className="w-full py-3 px-6 rounded-md font-brand-sans font-semibold text-xs uppercase tracking-[0.18em] text-[#DDA83B] hover:text-white bg-black/40 hover:bg-[#1E1E1E] border border-[#DDA83B]/40 hover:border-[#DDA83B] transition-all duration-300 cursor-pointer text-center"
                >
                  View Branding Packages
                </button>
              </div>
            </ParallaxHorizontalWrapper>
          </div>

        </div>
      </div>

      {/* Interactive Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#121212] border border-[#DDA83B]/50 rounded-2xl max-w-4xl w-full p-6 relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <VipCrestEmblem className="w-6 h-6 text-[#DDA83B]" />
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    The VIP Branding Experience — Official Event Overview
                  </h3>
                  <p className="text-xs text-[#DDA83B]">
                    Featuring Global Branding Expert, Rey Perez
                  </p>
                </div>
              </div>

              {/* Video Player Frame */}
              <div className="aspect-video w-full rounded-xl bg-black border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
                <img
                  src="/src/assets/images/rey_perez_mastermind_workshop_1791351076494.jpg"
                  alt="Video background"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35]"
                />
                <div className="relative z-10 max-w-lg">
                  <div className="w-16 h-16 rounded-full bg-[#E62117] text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#E62117]/50 animate-pulse">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif mb-2">
                    "You are clearly a top performer otherwise you would not be here."
                  </h4>
                  <p className="text-xs text-[#F7F4EF]/80 mb-6 font-light">
                    Learn Rey's best-kept secrets to success, take your results to the next level, and join an exclusive group of top achievers.
                  </p>
                  <button
                    onClick={() => {
                      setIsPlaying(false);
                      onOpenConsultation();
                    }}
                    className="btn-gold-luxury px-8 py-3 rounded text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2"
                  >
                    <span>Apply for Private Event Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
