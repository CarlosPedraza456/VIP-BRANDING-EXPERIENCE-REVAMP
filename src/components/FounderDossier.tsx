import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Heart, Mic, Tv, ArrowRight, Linkedin, Instagram, Twitter, Facebook, Play, X } from 'lucide-react';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';
import { VipCrestEmblem } from './BrandIcons';
import { SectionSparkleCanvas } from './SectionSparkleCanvas';

export const FounderDossier: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="founder" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-b border-[#DDA83B]/20">
      {/* Animated luxury ambient sparkles / destellos background */}
      <SectionSparkleCanvas density="medium" glowIntensity="high" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Section Header with Fade-Zoom */}
        <ParallaxHorizontalWrapper direction="fade-zoom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10 mb-3">
                <Award className="w-3.5 h-3.5 text-[#DDA83B]" />
                <span className="text-[10px] tracking-[0.25em] text-[#DDA83B] uppercase font-bold">
                  Founder &amp; Authority Dossier
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
                Meet the <span className="text-gold-gradient">Global Branding Expert</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs sm:text-sm text-[#F7F4EF]/70 font-light">
                Over two decades creating celebrity brands for top-tier leaders and business owners worldwide.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* Main Dossier Grid: Portrait Left + Bio & Actions Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Portrait Column with Sharp Borders and Fade-Zoom */}
          <div className="lg:col-span-5">
            <ParallaxHorizontalWrapper direction="fade-zoom" distance={80}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#DDA83B]/40 via-[#8C704B]/20 to-[#DDA83B]/60 rounded-sm blur-sm group-hover:blur-md transition-all duration-500 opacity-80" />

                <div className="relative bg-[#141414] border border-[#DDA83B]/40 rounded-sm overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5] relative bg-gradient-to-b from-[#1C1C1C] via-[#121212] to-[#0A0A0A] flex flex-col items-center justify-center p-8 overflow-hidden">
                    <img 
                      src="/src/assets/images/executive_portrait_boardroom_1791321344990.jpg" 
                      alt="Rey Perez - Global Branding Expert" 
                      className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

                    {/* Bottom Floating Badge */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-black/85 backdrop-blur-md border border-[#DDA83B]/40 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white font-serif tracking-tight">Rey Perez</h3>
                          <p className="text-xs text-[#DDA83B] tracking-wider uppercase font-medium">CEO &amp; Founder, AMP Productions</p>
                        </div>
                        <VipCrestEmblem className="w-8 h-8 text-[#DDA83B]" />
                      </div>
                    </div>
                  </div>

                  {/* Metrics Strip */}
                  <div className="grid grid-cols-3 divide-x divide-white/10 bg-[#0E0E0E] p-4 text-center border-t border-[#DDA83B]/20">
                    <div>
                      <span className="block text-lg font-bold text-[#DDA83B] font-serif">15+</span>
                      <span className="text-[10px] text-[#F7F4EF]/60 uppercase tracking-wider">Years Exp.</span>
                    </div>
                    <div>
                      <span className="block text-lg font-bold text-[#DDA83B] font-serif">1,000s</span>
                      <span className="text-[10px] text-[#F7F4EF]/60 uppercase tracking-wider">Brands Built</span>
                    </div>
                    <div>
                      <span className="block text-lg font-bold text-[#DDA83B] font-serif">20+</span>
                      <span className="text-[10px] text-[#F7F4EF]/60 uppercase tracking-wider">Years Enterprise</span>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          </div>

          {/* Right Detailed Bio Column with Dynamic Zoom-In to User */}
          <div className="lg:col-span-7 space-y-6">
            <ParallaxHorizontalWrapper direction="zoom-in" distance={80}>
              <div className="bg-[#121212]/90 border border-[#DDA83B]/35 rounded-sm p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
                
                {/* Official Bio Paragraph */}
                <div className="prose prose-invert max-w-none space-y-4">
                  <p className="text-base sm:text-lg text-[#F7F4EF]/90 leading-relaxed font-light">
                    <strong className="text-white font-semibold">Rey Perez</strong> is CEO &amp; Founder of Multimedia Marketing &amp; Event Promotions Company, <strong className="text-[#DDA83B]">AMP Productions</strong>. Rey is a National Speaker, Successful Entrepreneur, Philanthropist, Talk Show Host and Elite Business Coach who leads Masterminds, Marketing Seminars and Socially Infuzed-Networking Events across the country.
                  </p>

                  <p className="text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed font-light">
                    Leveraging over 15 years of sales and marketing experience Rey and his team create world-class celebrity brands for top entrepreneurs and professionals who want to dominate their niche or industry. Rey is a self-made entrepreneur with a tenacious drive and work ethic. He built multiple successful companies over the last 2 decades.
                  </p>

                  <p className="text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed font-light">
                    He has worked with thousands of entrepreneurs and business owners to achieve next level success with their brands. Rey’s true passion is leading high achievers and elite entrepreneurs to their greatest victories. He and his companies support multiple Charities and Foundations focused on <em className="text-[#DDA83B] font-medium not-italic">Empowering Today's Youth To Find Their Passion, Purpose and Pursue Their Entrepreneurial Dreams</em>.
                  </p>
                </div>

                {/* Role Badges (Sharp Architectural Styling) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-6 pt-6 border-t border-white/10">
                  <div className="p-2.5 bg-[#1A1A1A] border border-white/5 rounded-sm flex items-center gap-2">
                    <Mic className="w-3.5 h-3.5 text-[#DDA83B] shrink-0" />
                    <span className="text-[11px] text-[#F7F4EF]/80 font-medium">National Speaker</span>
                  </div>
                  <div className="p-2.5 bg-[#1A1A1A] border border-white/5 rounded-sm flex items-center gap-2">
                    <Tv className="w-3.5 h-3.5 text-[#DDA83B] shrink-0" />
                    <span className="text-[11px] text-[#F7F4EF]/80 font-medium">Talk Show Host</span>
                  </div>
                  <div className="p-2.5 bg-[#1A1A1A] border border-white/5 rounded-sm flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#DDA83B] shrink-0" />
                    <span className="text-[11px] text-[#F7F4EF]/80 font-medium">Elite Coach</span>
                  </div>
                  <div className="p-2.5 bg-[#1A1A1A] border border-white/5 rounded-sm flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 text-[#DDA83B] shrink-0" />
                    <span className="text-[11px] text-[#F7F4EF]/80 font-medium">Philanthropist</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="flex-1 py-3.5 px-5 rounded-sm bg-[#1C1C1C] hover:bg-[#252525] border border-[#DDA83B]/50 hover:border-[#DDA83B] text-xs font-bold uppercase tracking-wider text-white inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <Play className="w-4 h-4 text-[#DDA83B] fill-[#DDA83B]" />
                    <span>Watch Video with Rey Perez</span>
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="flex-1 py-3.5 px-5 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-[0.18em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply With Rey Perez</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Social Connect Strip */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold">
                    Get Socially Connected With Rey:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-sm bg-[#181818] border border-white/10 hover:border-[#DDA83B] text-[#F7F4EF]/70 hover:text-[#DDA83B] transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-sm bg-[#181818] border border-white/10 hover:border-[#DDA83B] text-[#F7F4EF]/70 hover:text-[#DDA83B] transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-sm bg-[#181818] border border-white/10 hover:border-[#DDA83B] text-[#F7F4EF]/70 hover:text-[#DDA83B] transition-colors"
                      title="Twitter"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-sm bg-[#181818] border border-white/10 hover:border-[#DDA83B] text-[#F7F4EF]/70 hover:text-[#DDA83B] transition-colors"
                      title="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </ParallaxHorizontalWrapper>
          </div>
        </div>
      </div>

      {/* Video Modal with Rey Perez Introduction */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="bg-[#141414] border border-[#DDA83B]/50 rounded-sm max-w-3xl w-full p-6 relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <VipCrestEmblem className="w-6 h-6 text-[#DDA83B]" />
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">
                    Rey Perez — Global Branding Expert
                  </h3>
                  <p className="text-xs text-[#DDA83B]">
                    What you should know about The VIP Branding Experience
                  </p>
                </div>
              </div>

              <div className="aspect-video w-full rounded-sm bg-black border border-white/10 relative overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
                <img
                  src="/src/assets/images/hero_executive_private_jet_1791321323222.jpg"
                  alt="Video background"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35]"
                />
                <div className="relative z-10 max-w-lg">
                  <div className="w-16 h-16 rounded-full bg-[#DDA83B] text-black flex items-center justify-center mx-auto mb-4 shadow-xl shadow-[#DDA83B]/30 animate-pulse">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif mb-2">
                    "You are clearly a top performer otherwise you would not be here."
                  </h4>
                  <p className="text-xs text-[#F7F4EF]/80 mb-4 font-light">
                    Learn Rey Perez's best-kept secrets and how to multiply the fiduciary value of your personal brand in an exclusive private weekend experience.
                  </p>
                  <button
                    onClick={() => {
                      setIsVideoModalOpen(false);
                      onOpenConsultation();
                    }}
                    className="btn-gold-luxury px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Apply for the Next Private Event</span>
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
