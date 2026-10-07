import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, TrendingUp, Palette, Building2, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';
import { VipCrestEmblem } from './BrandIcons';

export type ArchetypeKey = 'executive' | 'entrepreneur' | 'artist' | 'corporate';

interface ArchetypeData {
  id: ArchetypeKey;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  targetAudience: string;
  deliverables: string[];
  keyBenefit: string;
  ctaText: string;
}

const ARCHETYPES: Record<ArchetypeKey, ArchetypeData> = {
  executive: {
    id: 'executive',
    title: 'Executive',
    subtitle: 'C-Level Executives & Business Professionals',
    badge: 'MAXIMUM INSTITUTIONAL AUTHORITY',
    icon: Briefcase,
    description:
      'C-Level Executives, Business Professionals who are looking for a clean, consistent professional brand across all their media platforms.',
    targetAudience: 'CEOs, Board Members, VPs, and Global Executive Leaders.',
    deliverables: [
      'High-Impact Executive Credibility Card',
      'Institutional Profile & Banners for LinkedIn',
      'Editorial Studio Photography & Corporate Portraits',
      'Executive Leadership Introduction Video',
      'HTML Digital Signature for C-Suite Correspondence'
    ],
    keyBenefit: 'Consolidation of fiduciary reputation, strategic deal attraction, and board placement positioning.',
    ctaText: 'I am an Executive'
  },
  entrepreneur: {
    id: 'entrepreneur',
    title: 'Entrepreneur',
    subtitle: 'Business Owners & Founders',
    badge: 'CONVERSION & BUSINESS TRACTION',
    icon: TrendingUp,
    description:
      'Business Owners and Entrepreneurs who are the face of their business and want to sell more with less resistance with their digital presence.',
    targetAudience: 'Founders, Business Owners, Agency Principals, and High-Ticket Consultants.',
    deliverables: [
      'Cinematic Brand Launch Video (Brand in 2 Days)',
      'Interactive 360 Welcome Video for Sales Funnels',
      'Complete Social Media Kit (YouTube, X, LinkedIn, IG)',
      'Lock Screen QR for Frictionless Instant Networking',
      'Press Dossier & Authority Media Kit'
    ],
    keyBenefit: 'High-ticket sales with less friction, celebrity niche status, and undisputed market authority.',
    ctaText: 'I am an Entrepreneur'
  },
  artist: {
    id: 'artist',
    title: 'Artist',
    subtitle: 'Actors, Musicians & Creatives',
    badge: 'VISUAL IMPACT & GLOBAL EXPOSURE',
    icon: Palette,
    description:
      'Actors, Musicians, Photographers, Models and any Creative individuals who is looking to expand their online brand exposure.',
    targetAudience: 'Artists, Musicians, Actors, Photographers, Models, and Forward-Thinking Creators.',
    deliverables: [
      'Dynamic Motion GIFs & Animated Avatars',
      'Editorial Digital Haute-Couture Portfolio',
      'Visual Identity with Signature Typography & Color System',
      'Instagram & TikTok Highlight Covers Package',
      'Personal Brand Teaser Trailer'
    ],
    keyBenefit: 'Magnetic aesthetic presence, luxury brand deals, and organic audience expansion.',
    ctaText: 'I am an Artist'
  },
  corporate: {
    id: 'corporate',
    title: 'Corporate',
    subtitle: 'Company Branding & Multi-Member Teams',
    badge: 'SCALABILITY & BRAND COHESION',
    icon: Building2,
    description:
      'Comprehensive marketing branding that focuses on promoting the overall brand name and identity of a company for several different company members.',
    targetAudience: 'Executive Teams, Franchises, Investment Funds, and Multi-Location Enterprises.',
    deliverables: [
      'Multi-Profile Visual Identity System for Teams',
      'Business Spotlight Video for "About Us" and Investors',
      'Brand Guidelines Manual for the Entire Organization',
      'Corporate Pitch Decks & Presentation Templates',
      'Standardized Social Media Kits for Partners'
    ],
    keyBenefit: 'Absolute unification of corporate image across every team member and increased business valuation.',
    ctaText: 'I am a Corporate'
  }
};

export const BrandArchetypeSelector: React.FC<{ onSelectArchetype: (type: string) => void }> = ({
  onSelectArchetype
}) => {
  const [activeTab, setActiveTab] = useState<ArchetypeKey>('executive');
  const current = ARCHETYPES[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="archetypes" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DDA83B]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading, Context, and Selector Tabs */}
          <div className="lg:col-span-5">
            <ParallaxHorizontalWrapper direction="slide-zoom-left" distance={70}>
              <div className="sticky top-28 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10">
                  <VipCrestEmblem className="w-4 h-4 text-[#DDA83B]" />
                  <span className="text-[10px] tracking-[0.25em] text-[#DDA83B] uppercase font-bold">
                    Personalized Archetype Selector
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif leading-[1.15]">
                  Before you view our branding packages,{' '}
                  <span className="text-gold-gradient block mt-1">which brand type are you?</span>
                </h2>

                <p className="text-xs sm:text-sm text-[#F7F4EF]/70 font-light leading-relaxed">
                  Every executive profile requires a distinct authority approach and specific deliverables. Select your archetype to review your tailored blueprint:
                </p>

                {/* 4 Archetype Selector Tabs (Sharp Borders) */}
                <div className="space-y-2.5 pt-2">
                  {(Object.keys(ARCHETYPES) as ArchetypeKey[]).map((key) => {
                    const item = ARCHETYPES[key];
                    const ItemIcon = item.icon;
                    const isActive = activeTab === key;

                    return (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-sm text-left transition-all duration-300 border cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-[#1E1E1E] to-[#141414] border-[#DDA83B] text-white shadow-lg shadow-[#DDA83B]/15 translate-x-1'
                            : 'bg-[#121212] border-[#222] text-[#F7F4EF]/60 hover:text-white hover:border-[#DDA83B]/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${isActive ? 'bg-[#DDA83B]/20 text-[#DDA83B]' : 'bg-white/5 text-white/40'}`}>
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-sm font-bold font-serif uppercase tracking-wide">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-[#F7F4EF]/50 truncate max-w-[200px] block">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>

                        <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#DDA83B] translate-x-0.5' : 'text-white/20'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          </div>

          {/* Right Column: Detailed Blueprint Display with Dynamic Slide-Zoom */}
          <div className="lg:col-span-7">
            <ParallaxHorizontalWrapper direction="slide-zoom-right" distance={70}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="bg-gradient-to-br from-[#181818] via-[#121212] to-[#0D0D0D] border border-[#DDA83B]/40 rounded-sm p-8 sm:p-10 shadow-2xl relative overflow-hidden"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DDA83B] to-transparent opacity-90" />

                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-sm bg-[#DDA83B]/10 border border-[#DDA83B]/30 flex items-center justify-center text-[#DDA83B]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold block">
                          {current.badge}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                          {current.title} Blueprint
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Official Website Verbatim Quote */}
                  <div className="p-4 bg-black/50 border-l-2 border-[#DDA83B] rounded-sm mb-6">
                    <p className="text-sm sm:text-base text-[#F7F4EF]/90 italic font-light leading-relaxed">
                      "{current.description}"
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-widest text-[#DDA83B] font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Key Authority Deliverables</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {current.deliverables.map((deliv, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2.5 p-3 rounded-sm bg-black/40 border border-white/5"
                        >
                          <Check className="w-4 h-4 text-[#DDA83B] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#F7F4EF]/85 leading-snug">
                            {deliv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategic Impact Box */}
                  <div className="p-4 rounded-sm bg-[#DDA83B]/10 border border-[#DDA83B]/20 mb-8 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#DDA83B] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#DDA83B] font-bold mb-0.5">
                        Strategic Key Outcome:
                      </span>
                      <p className="text-xs sm:text-sm text-[#F7F4EF]/85 font-light">
                        {current.keyBenefit}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button (Sharp Corners) */}
                  <button
                    onClick={() => onSelectArchetype(current.title)}
                    className="w-full py-4 px-8 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-[0.22em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <span>{current.ctaText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </ParallaxHorizontalWrapper>
          </div>

        </div>
      </div>
    </section>
  );
};
