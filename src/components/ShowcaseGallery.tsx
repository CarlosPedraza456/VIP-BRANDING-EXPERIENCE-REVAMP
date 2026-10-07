import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, ExternalLink, Award, Globe, TrendingUp } from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  image: string;
  quote: string;
  narrative: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export const ShowcaseGallery: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [selectedCase, setSelectedCase] = useState<ShowcaseItem | null>(null);

  const cases: ShowcaseItem[] = [
    {
      id: 'private-aviation',
      title: 'Private Aviation & Global Mobility',
      category: 'Tech Founder & Family Office',
      clientType: 'Ultra-High-Net-Worth Founder',
      image: '/src/assets/images/hero_executive_private_jet_1791321323222.jpg',
      quote: 'Our personal identity now mirrors the true scale of our international operations.',
      narrative: 'Comprehensive personal brand design for the founder of a private infrastructure consortium. Developed an understated visual identity with custom embossing for private aircraft and a confidential investor syndicate portal.',
      metrics: [
        { label: 'Capital Raised', value: '$85M' },
        { label: 'Tier-1 Press', value: '14 Covers' },
        { label: 'Deal Velocity', value: '-45%' },
      ],
      deliverables: ['Personal Heraldic Monogram', 'Private Co-Investor Portal', 'Aerial Cinematography Direction'],
    },
    {
      id: 'luxury-architecture',
      title: 'Ultra-Luxury Residential Development',
      category: 'Real Estate Investor & Hospitality Principal',
      clientType: 'Real Estate Visionary',
      image: '/src/assets/images/executive_architectural_villa_1791321334527.jpg',
      quote: 'We stopped competing on price and created buyer waiting lists across Monaco and Miami.',
      narrative: 'Repositioning of a prominent ultra-luxury architectural estate developer. Crafted a biographical narrative highlighting contemporary architectural patronage, turning each project into a signature collector asset.',
      metrics: [
        { label: 'Average Asset Price', value: '$22M+' },
        { label: 'VIP Waitlist', value: '42 Families' },
        { label: 'Conversion Rate', value: '88%' },
      ],
      deliverables: ['Linen & Gold Foil Printed Dossier', 'Parallax 3D Web Platform', 'Architectural Digest Feature Strategy'],
    },
    {
      id: 'boardroom-governance',
      title: 'Corporate Leadership & Venture Capital',
      category: 'Managing Partner & Board Member',
      clientType: 'Venture Capital Partner',
      image: '/src/assets/images/executive_portrait_boardroom_1791321344990.jpg',
      quote: 'The new brand positioning doubled my advisory invitations on listed company boards.',
      narrative: 'Transformed the public posture of a chief executive into a global authority on tech governance and fiduciary leadership. Designed definitive white papers and a high-restraint digital profile.',
      metrics: [
        { label: 'Board Seats Secured', value: '3 New' },
        { label: 'Verified Exec Audience', value: '120k+' },
        { label: 'Keynote Fee', value: '3.5x' },
      ],
      deliverables: ['200pp Executive Brand Guidelines', 'Minimalist Personal Portal', 'Thought Leadership Publishing Engine'],
    },
    {
      id: 'tarmac-lifestyle',
      title: 'Digital Sovereignty & Serial Venture Capital',
      category: 'International Holding & Biotech',
      clientType: 'Serial Biotech Entrepreneur',
      image: '/src/assets/images/executive_tarmac_lifestyle_1791321354279.jpg',
      quote: 'A formidable personal brand is the single most defensible asset a founder can build.',
      narrative: 'Strategic brand architecture for a multinational biotech entrepreneur. The unified digital ecosystem and media assets facilitated a nine-figure cross-border acquisition with zero traditional intermediary friction.',
      metrics: [
        { label: 'M&A Valuation', value: '$130M' },
        { label: 'Investor Confidence', value: '99.8%' },
        { label: 'Global Network Reach', value: 'Top 0.1%' },
      ],
      deliverables: ['Sovereign Comms Ecosystem', 'Cinematic Micro-Documentary', 'Digital Signature Monogram'],
    },
  ];

  return (
    <section id="showcase" className="relative py-28 px-6 sm:px-8 bg-[#0E0E0E] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#DDA83B]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ParallaxHorizontalWrapper direction="left" distance={140}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-semibold block mb-3">
                CONFIDENTIAL CASE STUDIES
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                PORTFOLIO OF <span className="text-gold-gradient">EXECUTIVE IMPACT</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#F7F4EF]/70 max-w-md">
              Private commissions developed under strict non-disclosure agreements for visionaries reshaping global markets.
            </p>
          </div>
        </ParallaxHorizontalWrapper>

        {/* 2x2 Editorial Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <ParallaxHorizontalWrapper
              key={item.id}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              distance={220}
              className="h-full flex flex-col"
            >
              <div
                onClick={() => setSelectedCase(item)}
                className="group cursor-pointer rounded-sm border border-[#DDA83B]/20 bg-[#141414] overflow-hidden transition-all duration-500 hover:border-[#DDA83B] hover:shadow-[0_15px_40px_rgba(221,168,59,0.18)] flex flex-col h-full"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#0A0A0A]/90 border border-[#DDA83B]/40 text-[#DDA83B] text-[10px] uppercase tracking-widest font-brand-sans font-semibold backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-[#0A0A0A] shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Case Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#DDA83B] transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="font-serif-luxury italic text-[#DDA83B] text-sm mb-4">
                      "{item.quote}"
                    </p>
                    <p className="font-body text-xs text-[#F7F4EF]/75 line-clamp-3 leading-relaxed">
                      {item.narrative}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] uppercase font-brand-sans text-[#A39A8E] tracking-wider mb-1">
                          {m.label}
                        </div>
                        <div className="text-base font-bold font-serif-luxury text-white">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#141414] border border-[#DDA83B]/40 rounded-sm overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0E0E0E]">
                <div className="flex items-center space-x-3">
                  <VipCrestEmblem className="w-5 h-5 text-[#DDA83B]" />
                  <span className="font-brand-sans text-xs uppercase tracking-[0.2em] text-[#DDA83B]">
                    CONFIDENTIAL CASE FILE · {selectedCase.clientType}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 overflow-y-auto space-y-8">
                <div className="relative aspect-video rounded-sm overflow-hidden bg-black border border-white/10">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif-luxury text-3xl font-bold text-white mb-3">
                    {selectedCase.title}
                  </h3>
                  <p className="font-serif-luxury text-lg italic text-[#DDA83B] mb-6">
                    "{selectedCase.quote}"
                  </p>
                  <p className="font-body text-sm text-[#F7F4EF]/85 leading-relaxed">
                    {selectedCase.narrative}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-sm bg-[#0E0E0E] border border-[#DDA83B]/20">
                  {selectedCase.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xs uppercase font-brand-sans text-[#A39A8E] tracking-wider mb-1">
                        {m.label}
                      </div>
                      <div className="text-2xl font-bold font-serif-luxury text-white">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest font-brand-sans text-[#DDA83B] font-semibold mb-4">
                    Key Deliverables &amp; Brand Assets
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-3 text-xs text-[#F7F4EF]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DDA83B]" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedCase(null);
                      onOpenConsultation();
                    }}
                    className="btn-gold-luxury px-8 py-3 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-wider text-[#0A0A0A] cursor-pointer"
                  >
                    Apply for Custom Architecture
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
