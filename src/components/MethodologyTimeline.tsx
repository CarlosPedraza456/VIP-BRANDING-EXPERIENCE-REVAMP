import React from 'react';
import { ShieldCheck, Diamond, Sparkles, Compass } from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';

export const MethodologyTimeline: React.FC = () => {
  const steps = [
    {
      phase: 'Phase I',
      timeframe: 'Weeks 1 – 2',
      title: 'Archetype Extraction & Authority Audit',
      description:
        'In-depth strategic immersion with Rey Perez’s senior team. Extraction of your unique leadership narrative, analysis of competitive positioning, and design of your master brand manifesto.',
      icon: Compass,
      milestone: 'Master Positioning Manifesto & Archetype Synthesis',
    },
    {
      phase: 'Phase II',
      timeframe: 'Weeks 3 – 5',
      title: 'Haute Couture Visual System & Brand Guidelines',
      description:
        'Precision vector design: Primary monogram, stacked crest, and authority medallions. Calibration of the official chromatic palette (Obsidian, Charcoal, Signature VIP Gold) and comprehensive Brand Guidelines Book.',
      icon: Diamond,
      milestone: 'Full Vector Suite & Master Brand Guidelines Book',
    },
    {
      phase: 'Phase III',
      timeframe: 'Weeks 6 – 7',
      title: 'Sovereign Digital Architecture & Funnel Deployment',
      description:
        'Development of your ultra-luxury web ecosystem with sub-second performance, multi-layer parallax depth, and encrypted private application gateways with strict NDA compliance.',
      icon: Sparkles,
      milestone: 'Production-Ready Web Ecosystem & Deal Funnel',
    },
    {
      phase: 'Phase IV',
      timeframe: 'Weeks 8 – 9',
      title: 'Global Launch, PR Placement & Fiduciary Shield',
      description:
        'Official unveiling of your sovereign identity. Strategic media placement, activation of speaking dossiers, and deployment of 24/7 reputation monitoring protocols.',
      icon: ShieldCheck,
      milestone: 'Global Market Unveiling & Board Placement Rollout',
    },
  ];

  return (
    <section id="methodology" className="relative py-28 px-6 sm:px-8 bg-[#0B0B0B] overflow-hidden border-t border-[#DDA83B]/15">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric Header */}
        <ParallaxHorizontalWrapper direction="right" distance={60}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 pb-8 border-b border-white/10">
            <div className="lg:col-span-8">
              <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-semibold block mb-2">
                RIGOROUS 9-WEEK ROADMAP
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white">
                THE VIP ASCENSION <span className="gold-gradient-text">METHODOLOGY</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed font-light">
                A proven, confidential execution framework that elevates executive influence into institutional permanence.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* 4-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ParallaxHorizontalWrapper
                key={step.phase}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                distance={50 + idx * 10}
                className="h-full flex flex-col"
              >
                <div className="p-6 sm:p-7 rounded-sm border border-[#DDA83B]/20 bg-gradient-to-b from-[#141414] to-[#0D0D0D] flex flex-col justify-between h-full hover:border-[#DDA83B]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(221,168,59,0.12)]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-brand-sans text-[11px] uppercase tracking-widest text-[#DDA83B] font-bold">
                        {step.phase}
                      </span>
                      <span className="font-mono text-[10px] text-[#F7F4EF]/50">
                        {step.timeframe}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-sm bg-[#1A1815] border border-[#DDA83B]/30 flex items-center justify-center text-[#DDA83B] mb-4 group-hover:scale-110 group-hover:border-[#DDA83B] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif-luxury text-lg font-bold text-white mb-3 group-hover:text-gold-gradient transition-colors">
                      {step.title}
                    </h3>

                    <p className="font-body text-xs text-[#F7F4EF]/70 leading-relaxed font-light mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1E1E1E]">
                    <span className="text-[10px] font-brand-sans uppercase tracking-wider text-[#DDA83B] block font-bold mb-1">
                      Key Milestone:
                    </span>
                    <span className="text-[11px] font-body text-[#F7F4EF]/85 font-medium block">
                      {step.milestone}
                    </span>
                  </div>
                </div>
              </ParallaxHorizontalWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
