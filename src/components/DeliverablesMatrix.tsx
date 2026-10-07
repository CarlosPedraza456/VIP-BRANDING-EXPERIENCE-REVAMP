import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CreditCard,
  Video,
  Share2,
  QrCode,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';

interface DeliverableCategory {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  items: {
    name: string;
    description: string;
    highlight: string;
  }[];
}

const CATEGORIES: DeliverableCategory[] = [
  {
    id: 'credibility',
    title: 'Credibility Card & Motion Avatars',
    badge: 'IMMEDIATE CONNECTION ASSET',
    icon: CreditCard,
    description:
      'Showcases the client’s trajectory, leveraging their personal experiences and passions to create a connection with their potential customers.',
    items: [
      {
        name: 'Digital Credibility Card',
        description: 'Interactive digital credibility card synthesizing career milestones, editorial bio, and direct call-to-actions.',
        highlight: 'Exclusive design with scannable QR code & universal link.'
      },
      {
        name: 'Profile Picture & Animated GIFs',
        description: 'Ultra-high-definition studio photography and dynamic animated avatars to command attention in inboxes and messaging apps.',
        highlight: 'Boosts visual recognition by over 300%.'
      }
    ]
  },
  {
    id: 'video',
    title: 'Video Marketing Services',
    badge: 'CINEMATIC AUTHORITY SUITE',
    icon: Video,
    description:
      'Video allows you to share the maximum amount of information quickly and has the highest engagement. If you don’t have videos on your website, social media and email marketing then you are behind your competition.',
    items: [
      {
        name: '360 Welcome Video',
        description:
          'Your 360 Site is the most powerful marketing and networking tool you have! Now, with a welcome video, your prospects and leads can get a quick tour of your 360 site and be able to fully navigate your social media and contact page. This will increase retention and 10x the "WOW Factor" of your 360 site.',
        highlight: '10x WOW Factor & Prospect Retention'
      },
      {
        name: 'Brand Launch Video',
        description:
          'Brand Launch Videos are great for building excitement for the new personal brand that is being developed at Brand in 2 Days, the ultimate branding event. Gives audiences a behind-the-scenes look at the new personal brand.',
        highlight: 'Behind-the-scenes look from Brand in 2 Days'
      },
      {
        name: 'Personal Intro Video',
        description:
          'Introduction Videos are great for building relatedness between the business owners or representatives and potential customer/clients. Gives people a closer inside look which really helps separate you from the competition.',
        highlight: 'Immediate emotional connection & differentiation'
      },
      {
        name: 'Business Spotlight Video',
        description:
          'Business Introduction Video is typically used on the about us page on a company website. This video focuses on giving more background information about the owner and their business to create a connection.',
        highlight: 'Core asset for About Us and Investor presentations'
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Media Covers & Omnipresence',
    badge: '360° MULTI-PLATFORM IDENTITY',
    icon: Share2,
    description:
      'Having consistent branding across all social media platforms makes it easier for customers to engage with your brand and navigate your online presence, which can lead to more effective marketing campaigns and brand awareness.',
    items: [
      {
        name: 'LinkedIn Professional Cover',
        description:
          'LinkedIn is the largest online professional network in the world. You can use LinkedIn to find the perfect job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career.',
        highlight: 'Optimized for boardrooms and high-level B2B deals'
      },
      {
        name: 'YouTube Channel Art Cover',
        description:
          'YouTube channel brings brand exposure to a Worldwide Audience, can help generate leads, become a trusted authority, acquire customers, and diversify your marketing efforts.',
        highlight: 'Global authority & inbound lead generation'
      },
      {
        name: 'X (Twitter) Custom Header',
        description:
          'With over 500 million users, it is one of the world’s largest social networks. Users can share and post text messages, images, and videos.',
        highlight: 'Ultra-crisp design for thought leadership positioning'
      },
      {
        name: 'Personal Facebook Cover & Instagram Story Sets',
        description:
          'Keep up with friends and family while communicating undisputed authority. Instagram Stories allow you to share everyday moments with custom branded highlight covers.',
        highlight: 'Cohesive personal and enterprise messaging'
      }
    ]
  },
  {
    id: 'assets',
    title: 'Additional Branding Assets',
    badge: 'NETWORKING ECOSYSTEM',
    icon: QrCode,
    description:
      'Having the same brand identity through every client communication and platform creates a cohesive and unified image for your brand, which can help strengthen your brand identity and messaging.',
    items: [
      {
        name: 'Corporate HTML Email Signature',
        description:
          'This is a live example of what the email signature looks like when sending a client an email. Incorporates photo, title, logos, and verified credentials.',
        highlight: 'Fiduciary presentation across every email sent'
      },
      {
        name: 'Phone Lock Screen QR Code',
        description:
          'Custom lock screen for your smartphone featuring your brand emblem and instant scannable QR code to exchange contact details in 2 seconds flat.',
        highlight: 'Frictionless high-impact in-person networking'
      }
    ]
  }
];

export const DeliverablesMatrix: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('video');
  const activeCategory = CATEGORIES.find((c) => c.id === selectedCat) || CATEGORIES[0];
  const IconCat = activeCategory.icon;

  return (
    <section id="deliverables" className="py-24 bg-[#0E0E0E] relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ParallaxHorizontalWrapper direction="left" distance={60}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10 mb-3">
                <Layers className="w-3.5 h-3.5 text-[#DDA83B]" />
                <span className="text-[10px] tracking-[0.25em] text-[#DDA83B] uppercase font-bold">
                  Brand in 2 Days — Deliverables Suite
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
                Cinematic <span className="gold-gradient-text">Production Deliverables</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs sm:text-sm text-[#F7F4EF]/70 font-light">
                All marketing, video, photography, and social assets produced on-site during the VIP experience.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* Categories selector */}
        <ParallaxHorizontalWrapper direction="right" distance={60}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              const CatIcon = cat.icon;
              const isSelected = selectedCat === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`p-4 rounded-lg text-left transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#1F1F1F] to-[#141414] border-[#DDA83B] shadow-lg shadow-[#DDA83B]/10 text-white'
                      : 'bg-[#141414]/70 border-white/10 text-[#F7F4EF]/60 hover:text-white hover:border-[#DDA83B]/40'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CatIcon className={`w-5 h-5 ${isSelected ? 'text-[#DDA83B]' : 'text-[#F7F4EF]/40'}`} />
                    <span className="text-xs uppercase tracking-wider font-bold truncate">
                      {cat.title.split(' ')[0]}
                    </span>
                  </div>
                  <span className="text-xs font-semibold block text-white/90 truncate">
                    {cat.title}
                  </span>
                </button>
              );
            })}
          </div>
        </ParallaxHorizontalWrapper>

        {/* Active Category Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-[#141414] border border-[#DDA83B]/30 rounded-xl p-8 sm:p-10 shadow-2xl relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#DDA83B]/10 border border-[#DDA83B]/30 flex items-center justify-center text-[#DDA83B]">
                  <IconCat className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] tracking-widest text-[#DDA83B] uppercase font-bold">
                    {activeCategory.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif">
                    {activeCategory.title}
                  </h3>
                </div>
              </div>

              <span className="text-xs text-[#F7F4EF]/50 font-mono">
                {activeCategory.items.length} High-Impact Components
              </span>
            </div>

            <div className="p-4 bg-black/40 border-l-2 border-[#DDA83B] rounded mb-8">
              <p className="text-sm text-[#F7F4EF]/80 italic font-light">
                "{activeCategory.description}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-black/40 border border-white/5 hover:border-[#DDA83B]/40 transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="text-base font-bold text-white font-serif group-hover:text-[#DDA83B] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#DDA83B]/10 text-[#DDA83B] border border-[#DDA83B]/20 whitespace-nowrap">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F7F4EF]/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#F7F4EF]/50 text-center sm:text-left">
                All production assets delivered fully mastered and ready for deployment.
              </span>
              <button
                onClick={onOpenConsultation}
                className="btn-gold-luxury px-6 py-3 rounded text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2"
              >
                <span>Request This Deliverables Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
