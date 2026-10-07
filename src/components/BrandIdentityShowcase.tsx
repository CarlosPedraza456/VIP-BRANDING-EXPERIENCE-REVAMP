import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Sparkles, Layers, Shield, Eye } from 'lucide-react';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';
import {
  VipCrestEmblem,
  LuxuryMonogram,
  MedallionExecutive,
  MedallionEquity,
  MedallionBriefcase,
  MedallionAuthority,
} from './BrandIcons';

export const BrandIdentityShowcase: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const colors = [
    {
      name: 'OBSIDIAN BLACK',
      hex: '#0B0B0B',
      cmyk: '10 8 0 80',
      rgb: '11, 11, 11',
      bgClass: 'bg-[#0B0B0B]',
      textClass: 'text-white',
      borderClass: 'border-[#1E1E1E]',
      role: 'Canvas & Dominant Depth (60%)',
    },
    {
      name: 'LUXURY CHARCOAL',
      hex: '#1E1E1E',
      cmyk: '110 8 0 70',
      rgb: '30, 30, 30',
      bgClass: 'bg-[#1E1E1E]',
      textClass: 'text-white',
      borderClass: 'border-[#333333]',
      role: 'Surfaces & Structural Cards (30%)',
    },
    {
      name: 'SIGNATURE VIP GOLD',
      hex: '#DDA83B',
      cmyk: '16 36 80 0',
      rgb: '197, 168, 128',
      bgClass: 'bg-[#DDA83B]',
      textClass: 'text-[#0B0B0B]',
      borderClass: 'border-[#E6CFAB]',
      role: 'Authority Accents & Action Buttons (10%)',
    },
    {
      name: 'CHAMPAGNE CREAM',
      hex: '#F7F4EF',
      cmyk: '1 3 4 0',
      rgb: '247, 244, 239',
      bgClass: 'bg-[#F7F4EF]',
      textClass: 'text-[#0B0B0B]',
      borderClass: 'border-[#DDD8CE]',
      role: 'Primary Typography & Soft Highlights',
    },
    {
      name: 'PURE WHITE',
      hex: '#FFFFFF',
      cmyk: '0 0 0 0',
      rgb: '255, 255, 255',
      bgClass: 'bg-[#FFFFFF]',
      textClass: 'text-[#0B0B0B]',
      borderClass: 'border-white',
      role: 'Focal Points & Micro Contrasts',
    },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedCode(hex);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="brand-identity" className="relative py-28 px-6 sm:px-8 bg-[#0B0B0B]/95 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#DDA83B]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Asymmetric Header */}
        <ParallaxHorizontalWrapper direction="left" distance={60}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#1E1E1E]/40 mb-3">
                <span className="font-brand-sans text-[10px] uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
                  BRAND GUIDELINES SHEET
                </span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white">
                THE ARCHITECTURE OF <span className="gold-gradient-text">VIP BRANDING</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed font-light">
                High-precision visual guidelines designed to project restrained opulence, undisputed authority, and executive distinction.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* 1. LOGO & INSIGNIA MATRIX */}
        <ParallaxHorizontalWrapper direction="left" distance={60} className="mb-20">
          <div className="border border-[#DDA83B]/20 rounded-sm p-8 bg-[#141414]/90 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DDA83B]/15 pb-6 mb-8">
              <div>
                <span className="font-brand-sans text-[10px] uppercase tracking-[0.3em] text-[#DDA83B] font-bold block mb-1">
                  VECTOR ASSET SYSTEM
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  Logotype &amp; Heraldic Insignia Matrix
                </h3>
              </div>
              <span className="text-xs font-mono text-[#DDA83B]/80 px-3 py-1 bg-[#1E1E1E] rounded-sm border border-[#DDA83B]/25 self-start sm:self-auto">
                Official Brand Sheet
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Primary Horizontal Logo */}
              <div className="p-8 rounded-sm bg-[#0B0B0B] border border-[#DDA83B]/20 flex flex-col justify-between items-center text-center group hover:border-[#DDA83B]/50 transition-colors">
                <span className="font-brand-sans text-[10px] uppercase tracking-widest text-[#F7F4EF]/50 mb-6 self-start">
                  Primary Luxury Horizontal Logo
                </span>
                <div className="my-6 flex flex-col items-center">
                  <VipCrestEmblem size={76} className="w-20 h-20 mb-4 animate-float-slow text-[#DDA83B]" />
                  <div className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-[0.2em] text-white">
                    VIP BRANDING
                  </div>
                  <div className="font-brand-sans text-[10px] tracking-[0.45em] text-[#DDA83B] font-bold mt-1 uppercase">
                    Best of the Best
                  </div>
                </div>
                <div className="w-full pt-4 border-t border-[#1E1E1E] text-left text-[11px] font-mono text-[#F7F4EF]/40 flex justify-between">
                  <span>Main Web Header / Global Keynotes</span>
                  <span className="text-[#DDA83B]">Format: Vector SVG</span>
                </div>
              </div>

              {/* Stacked Emblem */}
              <div className="p-8 rounded-sm bg-[#0B0B0B] border border-[#DDA83B]/20 flex flex-col justify-between items-center text-center group hover:border-[#DDA83B]/50 transition-colors">
                <span className="font-brand-sans text-[10px] uppercase tracking-widest text-[#F7F4EF]/50 mb-6 self-start">
                  Heraldic Laurel Medallion (Circular Crest)
                </span>
                <div className="my-4 flex flex-col items-center">
                  <div className="p-4 rounded-full border border-[#DDA83B]/30 gold-glow">
                    <VipCrestEmblem size={84} className="w-24 h-24 text-[#DDA83B]" />
                  </div>
                </div>
                <div className="w-full pt-4 border-t border-[#1E1E1E] text-left text-[11px] font-mono text-[#F7F4EF]/40 flex justify-between">
                  <span>Wax Seal / Mobile App Icon / Favicon</span>
                  <span className="text-[#DDA83B]">Format: 1:1 Vector</span>
                </div>
              </div>
            </div>

            {/* 4 Brand Medallions */}
            <div className="pt-6 border-t border-[#DDA83B]/15">
              <span className="font-brand-sans text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold block mb-4">
                Sub-Brand Crests &amp; Authority Medallions
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm text-center flex flex-col items-center">
                  <MedallionExecutive size={44} className="w-11 h-11 mb-2 text-[#DDA83B]" />
                  <span className="font-serif-luxury text-xs text-white font-semibold">
                    The Sovereign
                  </span>
                  <span className="text-[10px] text-[#F7F4EF]/50 mt-0.5">Executive Crest</span>
                </div>
                <div className="p-4 bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm text-center flex flex-col items-center">
                  <MedallionEquity size={44} className="w-11 h-11 mb-2 text-[#DDA83B]" />
                  <span className="font-serif-luxury text-xs text-white font-semibold">
                    The Luminary
                  </span>
                  <span className="text-[10px] text-[#F7F4EF]/50 mt-0.5">Brand Equity</span>
                </div>
                <div className="p-4 bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm text-center flex flex-col items-center">
                  <MedallionBriefcase size={44} className="w-11 h-11 mb-2 text-[#DDA83B]" />
                  <span className="font-serif-luxury text-xs text-white font-semibold">
                    The Syndicate
                  </span>
                  <span className="text-[10px] text-[#F7F4EF]/50 mt-0.5">Venture &amp; M&amp;A</span>
                </div>
                <div className="p-4 bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm text-center flex flex-col items-center">
                  <MedallionAuthority size={44} className="w-11 h-11 mb-2 text-[#DDA83B]" />
                  <span className="font-serif-luxury text-xs text-white font-semibold">
                    The Empire
                  </span>
                  <span className="text-[10px] text-[#F7F4EF]/50 mt-0.5">Omnipresence</span>
                </div>
              </div>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* 2. CHROMATIC PALETTE */}
        <ParallaxHorizontalWrapper direction="right" distance={60} className="mb-20">
          <div className="border border-[#DDA83B]/20 rounded-sm p-8 bg-[#141414]/90 backdrop-blur-sm shadow-xl">
            <div className="border-b border-[#DDA83B]/15 pb-6 mb-8">
              <span className="font-brand-sans text-[10px] uppercase tracking-[0.3em] text-[#DDA83B] font-bold block mb-1">
                CHROMATIC SYSTEM
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Official Calibrated Color Palette
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {colors.map((color) => (
                <div
                  key={color.hex}
                  className="rounded-sm border border-[#DDA83B]/20 bg-[#0B0B0B] p-4 flex flex-col justify-between group hover:border-[#DDA83B]/60 transition-all"
                >
                  <div>
                    <div
                      className={`w-full h-24 rounded-sm mb-4 border ${color.borderClass} ${color.bgClass} relative flex items-end justify-end p-2`}
                    >
                      <button
                        onClick={() => handleCopy(color.hex)}
                        className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-white flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                        title="Copy HEX Code"
                      >
                        {copiedCode === color.hex ? (
                          <Check className="w-3 h-3 text-[#DDA83B]" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedCode === color.hex ? 'Copied' : color.hex}</span>
                      </button>
                    </div>

                    <h4 className="font-brand-sans text-xs font-bold text-white uppercase tracking-wider mb-1">
                      {color.name}
                    </h4>
                    <p className="font-body text-[11px] text-[#F7F4EF]/60 leading-relaxed mb-4">
                      {color.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1E1E1E] space-y-1 text-[10px] font-mono text-[#F7F4EF]/50">
                    <div className="flex justify-between">
                      <span>HEX:</span>
                      <span className="text-[#DDA83B] font-bold">{color.hex}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>RGB:</span>
                      <span>{color.rgb}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CMYK:</span>
                      <span>{color.cmyk}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* 3. TYPOGRAPHIC HIERARCHY */}
        <ParallaxHorizontalWrapper direction="left" distance={60}>
          <div className="border border-[#DDA83B]/20 rounded-sm p-8 bg-[#141414]/90 backdrop-blur-sm shadow-xl">
            <div className="border-b border-[#DDA83B]/15 pb-6 mb-8">
              <span className="font-brand-sans text-[10px] uppercase tracking-[0.3em] text-[#DDA83B] font-bold block mb-1">
                TYPOGRAPHIC SPECIFICATIONS
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Official Typographic Hierarchy
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Primary Headings */}
              <div className="p-6 rounded-sm bg-[#0B0B0B] border border-[#1E1E1E]">
                <div className="flex items-center justify-between text-xs text-[#DDA83B] font-brand-sans mb-3 pb-2 border-b border-[#1E1E1E]">
                  <span className="font-bold uppercase tracking-wider">Primary Headings (H1/H2)</span>
                  <span className="font-mono text-[10px]">Cinzel Display Serif</span>
                </div>
                <div className="font-serif-luxury text-3xl font-bold text-white my-4 leading-tight">
                  VIP BRANDING
                </div>
                <p className="text-xs text-[#F7F4EF]/60 leading-relaxed font-body">
                  Classical Roman capitals with modern proportions. Conveys sovereignty, heritage, and uncompromising permanence.
                </p>
              </div>

              {/* Subheadings */}
              <div className="p-6 rounded-sm bg-[#0B0B0B] border border-[#1E1E1E]">
                <div className="flex items-center justify-between text-xs text-[#DDA83B] font-brand-sans mb-3 pb-2 border-b border-[#1E1E1E]">
                  <span className="font-bold uppercase tracking-wider">Subheadings &amp; Buttons</span>
                  <span className="font-mono text-[10px]">Montserrat Geometric Sans</span>
                </div>
                <div className="font-brand-sans text-xl font-bold tracking-[0.18em] text-[#DDA83B] my-4 uppercase">
                  BEST OF THE BEST
                </div>
                <p className="text-xs text-[#F7F4EF]/60 leading-relaxed font-body">
                  High-contrast uppercase lettering with generous letter-spacing. Applied across action triggers and badges.
                </p>
              </div>

              {/* Body Text */}
              <div className="p-6 rounded-sm bg-[#0B0B0B] border border-[#1E1E1E]">
                <div className="flex items-center justify-between text-xs text-[#DDA83B] font-brand-sans mb-3 pb-2 border-b border-[#1E1E1E]">
                  <span className="font-bold uppercase tracking-wider">Body &amp; Micro-Copy</span>
                  <span className="font-mono text-[10px]">Inter Variable Sans</span>
                </div>
                <p className="font-body text-sm text-[#F7F4EF]/85 my-4 leading-relaxed font-light">
                  Optimized for exceptional legibility across digital interfaces, dense paragraphs, and financial disclosures.
                </p>
                <div className="text-[10px] font-mono text-[#F7F4EF]/40">
                  Weight: Light (300) / Regular (400)
                </div>
              </div>
            </div>
          </div>
        </ParallaxHorizontalWrapper>
      </div>
    </section>
  );
};
