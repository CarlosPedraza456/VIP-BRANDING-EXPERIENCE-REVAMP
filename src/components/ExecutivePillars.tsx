import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Crown, Sparkles, Compass, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VipCrestEmblem, LuxuryMonogram } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';

export const ExecutivePillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      number: '01',
      title: 'Strategic Authority Architecture',
      tagline: 'High-Level Positioning & Institutional Stature',
      icon: Crown,
      description:
        'We construct an impregnable narrative of leadership. We position your profile before institutional boards, sovereign wealth funds, and tier-1 media, transforming your background into undisputed market value.',
      deliverables: [
        'Executive Archetype Extraction & Strategic Positioning Dossier',
        'Keynote & Tier-1 Global Media Speaking Strategy',
        'Board of Directors Nomination Placement Playbook',
        'Fiduciary Trust Narrative & Reputation Architecture',
      ],
      impact: '+300% inbound speaking & high-level deal flow invitation velocity',
    },
    {
      number: '02',
      title: 'Haute Couture Visual Identity',
      tagline: 'Vector Heraldry & Executive Colorimetrics',
      icon: Sparkles,
      description:
        'Directly applying the Brand Guidelines: Custom primary monograms, stacked crests, and heraldic medallions in Signature VIP Gold with calibrated Obsidian Black and Luxury Charcoal foundations.',
      deliverables: [
        'Primary Monogram, Stacked Seal & Circular Crest Vectors',
        'Editorial Print & Digital Brand Guidelines Book',
        'Curated Typography System (Cinzel, Montserrat, Inter)',
        'Bespoke Stationery for Diplomatic & Private Jet Collateral',
      ],
      impact: 'Immediate recognition of executive distinction across all touchpoints',
    },
    {
      number: '03',
      title: 'Sovereign Digital Ecosystem',
      tagline: 'Sub-Second Web & Private Admission Funnels',
      icon: Compass,
      description:
        'A high-performance digital presence designed with multi-depth parallax, animated canvas particle backgrounds, and discreet application gateways under strict non-disclosure agreements.',
      deliverables: [
        'Ultra-Luxury Web Presence with Cinematic Micro-Interactions',
        'Frictionless Private Deal Intake & Qualified Application System',
        'Interactive Brand Equity & Deal Multiplier Diagnostics',
        'Encrypted Cloud Architecture with Maximum Data Privacy',
      ],
      impact: 'Sub-second performance with zero friction in high-ticket introductions',
    },
    {
      number: '04',
      title: 'Omnipresent Reputation Armor',
      tagline: 'Crisis Prevention & Fiduciary Shielding',
      icon: ShieldAlert,
      description:
        'We protect your reputation capital against asymmetric market volatility. 24/7 narrative monitoring and proactive placement ensure your legacy remains untarnished.',
      deliverables: [
        'Real-Time Fiduciary Reputation Shield & Search Engine Governance',
        'Quarterly Media & Boardroom Positioning Strategy',
        'Curated Thought-Leadership Publishing Blueprint',
        'Direct Access to the VIP Syndicate & Mastermind Network',
      ],
      impact: 'Absolute safeguarding of personal and corporate valuation multiples',
    },
  ];

  return (
    <section id="pillars" className="relative py-28 px-6 sm:px-8 bg-[#0E0E0E] overflow-hidden border-t border-[#DDA83B]/15">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetric Header */}
        <ParallaxHorizontalWrapper direction="left" distance={60}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-8">
              <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-semibold block mb-2">
                EXECUTIVE PERSONAL BRANDING
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white">
                THE 4 PILLARS OF <span className="gold-gradient-text">SOVEREIGN AUTHORITY</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed font-light">
                A multi-dimensional approach designed exclusively for visionary founders, chairs, and industry pioneers.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* 2-Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Pillar Selectors */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activePillar === idx;
              return (
                <ParallaxHorizontalWrapper
                  key={pillar.number}
                  direction="left"
                  distance={40 + idx * 10}
                >
                  <button
                    onClick={() => setActivePillar(idx)}
                    className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start justify-between cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#1C1A16] to-[#121212] border-[#DDA83B] shadow-[0_4px_25px_rgba(221,168,59,0.15)] translate-x-2'
                        : 'bg-[#141414]/70 border-[#1E1E1E] hover:border-[#DDA83B]/40 hover:bg-[#181818]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-serif-luxury text-xl font-bold text-[#DDA83B] tabular-nums mt-0.5">
                        {pillar.number}
                      </span>
                      <div>
                        <h3 className="font-serif-luxury text-lg font-bold text-white mb-1">
                          {pillar.title}
                        </h3>
                        <p className="font-brand-sans text-xs text-[#F7F4EF]/60 font-medium">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>
                    <Icon
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        isActive ? 'text-[#DDA83B]' : 'text-[#F7F4EF]/30'
                      }`}
                    />
                  </button>
                </ParallaxHorizontalWrapper>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Card */}
          <div className="lg:col-span-7">
            <ParallaxHorizontalWrapper direction="right" distance={70} className="h-full">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="h-full p-8 sm:p-10 rounded-sm border border-[#DDA83B]/30 bg-gradient-to-b from-[#181614] via-[#121110] to-[#0A0A0A] flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <VipCrestEmblem size={220} className="w-56 h-56 text-[#DDA83B]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-serif-luxury text-3xl font-bold text-[#DDA83B]">
                      {pillars[activePillar].number}
                    </span>
                    <div className="h-4 w-[1px] bg-[#DDA83B]/40" />
                    <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#F7F4EF]/70 font-semibold">
                      {pillars[activePillar].tagline}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                    {pillars[activePillar].title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-[#F7F4EF]/85 leading-relaxed mb-8 font-light">
                    {pillars[activePillar].description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="font-brand-sans text-[11px] uppercase tracking-widest text-[#DDA83B] font-bold block mb-2">
                      Master Key Deliverables:
                    </span>
                    {pillars[activePillar].deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F7F4EF]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#DDA83B] shrink-0 mt-0.5" />
                        <span className="font-body">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 border-t border-[#DDA83B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs font-brand-sans">
                    <span className="text-[#DDA83B] font-bold block">Measured Market Impact:</span>
                    <span className="text-[#F7F4EF]/80 font-medium">
                      {pillars[activePillar].impact}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-brand-sans font-semibold text-[#DDA83B]">
                    <span>Atelier Protocol Active</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </ParallaxHorizontalWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
