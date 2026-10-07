import React from 'react';
import { Check, Sparkles, ArrowRight, Crown } from 'lucide-react';
import { VipCrestEmblem, LuxuryMonogram } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';

interface ExperienceTiersProps {
  onSelectTier: (tierName: string) => void;
}

export const ExperienceTiers: React.FC<ExperienceTiersProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      name: 'THE SOVEREIGN IDENTITY',
      tagline: 'For established leaders seeking to consolidate their visual and heraldic presence',
      investment: 'Private Consultation',
      timeframe: '5 Weeks',
      featured: false,
      features: [
        'Authority Archetype Extraction & Reputation Footprint Audit',
        'Primary Monogram, Stacked Crest & Heraldic Sub-Brand Suite',
        'Master Brand Guidelines Sheet (CMYK, RGB, HEX, Typography)',
        'Calibrated Color System (Obsidian Black, Charcoal, Signature VIP Gold)',
        'Brand Collateral Blueprint for Keynotes and Private Mobility Assets',
        'Executive Editorial Photography Direction & Wardrobe Styling',
      ],
      deliverables: 'Identity Manual + Master Vector Kit',
    },
    {
      name: 'THE EXECUTIVE LUMINARY',
      tagline: 'Our flagship signature program: Full identity architecture and sovereign digital ecosystem',
      investment: 'Signature Atelier',
      timeframe: '8 Weeks',
      featured: true,
      features: [
        'Everything included in The Sovereign Identity',
        'Ultra-Luxury Web Ecosystem with Multi-Depth Parallax & Micro-Interactions',
        'Sub-second performance engineering with fully responsive architecture',
        'Qualified Deal Intake & Lead Qualification Funnel with NDA Protocol',
        'Interactive Press Dossier & Media Room for Tier-1 Journalists',
        'On-Location Editorial Studio Photography & Video Direction',
        'Sovereign domain setup, enterprise SSL certificates & maximum data security',
      ],
      deliverables: 'Complete Identity + Master Web Platform + Media Kit',
    },
    {
      name: 'THE EMPIRE ECOSYSTEM',
      tagline: 'Year-round retainer for global founders and investors with international reach',
      investment: 'Annual Retainer',
      timeframe: '12 Continuous Months',
      featured: false,
      features: [
        'Everything included in The Executive Luminary',
        'Monthly 1-on-1 Strategic Advisory with Rey Perez & Senior Brand Directors',
        'Continuous Global Financial & Industry Media Placement Guidance',
        'Custom Keynote Presentation Decks for Global Economic Summits',
        '24/7 Reputation Shielding & Narrative Volatility Monitoring',
        'Priority Access to the Private VIP Syndicate & Investor Circle',
        'Unlimited Evolutionary Technical Upgrades and Web Maintenance',
      ],
      deliverables: 'Full Ecosystem Retainer + Quarterly Advisory Strategy',
    },
  ];

  return (
    <section id="packages" className="relative py-28 px-6 sm:px-8 bg-[#0B0B0B] overflow-hidden border-t border-[#DDA83B]/20">
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#C5A880]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ParallaxHorizontalWrapper direction="fade-zoom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10 mb-3">
                <Crown className="w-3.5 h-3.5 text-[#DDA83B]" />
                <span className="text-[10px] tracking-[0.25em] text-[#DDA83B] uppercase font-bold">
                  Exclusive Executive Membership
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
                Membership <span className="text-gold-gradient">Experiences &amp; VIP Programs</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs sm:text-sm text-[#F7F4EF]/70 font-light">
                We accept a strictly limited cohort of four clients per quarter to ensure bespoke craftsmanship.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <ParallaxHorizontalWrapper
              key={tier.name}
              direction="zoom-in"
              distance={60}
              className="h-full flex flex-col"
            >
              <div
                className={`relative rounded-sm flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 h-full ${
                  tier.featured
                    ? 'bg-gradient-to-b from-[#1C1914] via-[#151310] to-[#0E0E0E] border-2 border-[#DDA83B] shadow-[0_15px_50px_rgba(221,168,59,0.22)] -translate-y-2'
                    : 'bg-gradient-to-b from-[#161616] to-[#0E0E0E] border border-[#DDA83B]/30 hover:border-[#DDA83B]/60'
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-sm bg-gold-gradient text-[#0B0B0B] font-brand-sans font-bold text-[10px] uppercase tracking-widest shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Requested Signature Program</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-brand-sans text-[11px] uppercase tracking-widest text-[#DDA83B] font-bold">
                      {tier.timeframe}
                    </span>
                    {tier.featured ? (
                      <VipCrestEmblem size={28} className="w-7 h-7 text-[#DDA83B]" />
                    ) : (
                      <LuxuryMonogram size={24} className="w-6 h-6 opacity-60 text-[#DDA83B]" />
                    )}
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {tier.name}
                  </h3>
                  <p className="font-body text-xs text-[#F7F4EF]/65 leading-relaxed mb-6 min-h-[38px]">
                    {tier.tagline}
                  </p>

                  <div className="py-4 border-y border-[#DDA83B]/15 mb-6">
                    <span className="font-brand-sans text-[10px] uppercase tracking-widest text-[#F7F4EF]/50 block mb-1">
                      Admission Structure:
                    </span>
                    <span className="font-serif-luxury text-2xl font-bold text-gold-metallic">
                      {tier.investment}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="font-brand-sans text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold block mb-2">
                      Scope of Experience:
                    </span>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F7F4EF]/85">
                        <Check className="w-3.5 h-3.5 text-[#DDA83B] shrink-0 mt-0.5" />
                        <span className="font-body leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#DDA83B]/15">
                  <button
                    onClick={() => onSelectTier(tier.name)}
                    className="w-full py-4 px-6 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-[0.18em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply for this Program</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
