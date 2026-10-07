import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ArrowUpRight, X, ExternalLink, CheckCircle, Eye } from 'lucide-react';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';
import { VipCrestEmblem } from './BrandIcons';

export interface PortfolioClient {
  name: string;
  tagline: string;
  category: 'Executive' | 'Entrepreneur' | 'Health & Mindset' | 'Author & Speaker';
  bio: string;
  credentials: string[];
  image: string;
}

const CLIENTS: PortfolioClient[] = [
  {
    name: 'Ann Law',
    tagline: "America's Wellness Coach",
    category: 'Health & Mindset',
    bio: 'Ann Law is an author and serial entrepreneur with over 25 years of experience in health care management as a Family Nurse Practitioner. Ann established the Nurse Practitioner Organization in NY featured in the book "A Few Strong Women". Ann has dedicated her life to teaching wellness to the world, having traveled across 6 countries. Awarded Dutchess County Legislator and Congressional Campaign Manager, Ann\'s greatest passion is to make America healthy again.',
    credentials: ['FNP / RPA Specialist', 'Founder of Nurse Practitioner Org NY', 'Featured in "A Few Strong Women"'],
    image: '/src/assets/images/ann_law_wellness_editorial_1791350157979.jpg'
  },
  {
    name: 'Adam Gaskill',
    tagline: 'Global Contribution & Marketing Strategist',
    category: 'Author & Speaker',
    bio: 'Adam Gaskill is a publisher, speaker, serial entrepreneur and philanthropist in sales and marketing for over two decades. Adam is an NLP Master Practitioner, has published over 45 authors, and created over 60 non-profits. Twice awarded The Business Mastery Champion by Tony Robbins and partnered with 7-time Emmy Award Winner Composer Gary Malkin. Featured on PIX11 NY and Fox5 San Diego.',
    credentials: ['2x Tony Robbins Business Mastery Champion', 'Partnered with Gary Malkin (7x Emmy Winner)', 'Published 45+ Authors & 60+ Non-Profits'],
    image: '/src/assets/images/adam_gaskill_speaker_stage_1791350167682.jpg'
  },
  {
    name: 'Gerald Rogers',
    tagline: 'Soul Alchemist & Transformational Leader',
    category: 'Author & Speaker',
    bio: 'Gerald Rogers is an entrepreneur and soul alchemist who has led seminars and retreats for over 15 years, directing over 180 transformational retreats in Bali, Nepal, Costa Rica, Kenya, and Hawaii. Shared stages with recognized leaders such as Les Brown, Brian Tracy, and John Assaraf. Featured nationally on The Today Show.',
    credentials: ['180+ Global Transformational Retreats', 'Keynote Speaker alongside Les Brown & Brian Tracy', 'Featured on The Today Show (NBC)'],
    image: '/src/assets/images/gerald_rogers_retreat_stage_1791350177785.jpg'
  },
  {
    name: 'Star Durand',
    tagline: 'Wealth & Profitability Strategist',
    category: 'Executive',
    bio: 'Star Durand is an entrepreneur, consultant, speaker, and coach in the credit and funding industry for over a decade, operating a private money and business loan brokerage. Real estate investor and Criminal Justice graduate with military and law enforcement service. Trained with top leaders including Dave Ramsey, Eric Thomas, Grant Cardone, and Brian Tracy.',
    credentials: ['Private Money Brokerage Principal', 'US Military & Law Enforcement Veteran', 'Trained by Grant Cardone & Dave Ramsey'],
    image: '/src/assets/images/executive_tarmac_lifestyle_1791321354279.jpg'
  },
  {
    name: 'Coach Chuck Barnard',
    tagline: "The Champion's Mindset Mentor",
    category: 'Health & Mindset',
    bio: 'Coach Chuck Barnard is an author, speaker and teen mindset coach with over 30 years in education. Chuck holds a master\'s degree in special education, is certified in Advanced Behavioral Modeling, and is a Master NLP, Time-Line Therapy, and Hypnotherapy Practitioner. Baseball coach for over 50 years with a mission to build champions in life.',
    credentials: ['30+ Years in Education & Leadership Coaching', 'Master NLP & Hypnotherapy Practitioner', 'Author & High-Performance Athletic Mentor'],
    image: '/src/assets/images/executive_portrait_boardroom_1791321344990.jpg'
  },
  {
    name: 'Alfonzo Alexander (Fonz)',
    tagline: 'Medical Education Specialist',
    category: 'Executive',
    bio: 'Alfonzo Alexander is a bestselling author, speaker, and serial entrepreneur in business for over 30 years. Founded a successful building service company and led sales for 3 consecutive years. For the last 15 years, he has supported top physicians in providing premium healthcare products and medical services.',
    credentials: ['Bestselling Author & 30+ Years Enterprise', '15+ Years Advising Leading Physicians', 'High-Impact Serial Entrepreneur'],
    image: '/src/assets/images/hero_executive_private_jet_1791321323222.jpg'
  },
  {
    name: 'Mayah Rose',
    tagline: 'Co-Founder Legendary & Mayah Rose Academy',
    category: 'Author & Speaker',
    bio: 'Mayah Rose is an author, speaker, and transformational life coach. Certified Reiki Master awarded by legendary speaker Les Brown for outstanding impact in public speaking. Leads transformational retreats and podcasts around human potential and executive female empowerment.',
    credentials: ['Awarded by Les Brown for Speaking Impact', 'Certified Reiki Master Practitioner', 'Co-Founder of Legendary Academy'],
    image: '/src/assets/images/executive_architectural_villa_1791321334527.jpg'
  },
  {
    name: 'Kathrine Gasc',
    tagline: 'The Love & Intimacy Activator',
    category: 'Health & Mindset',
    bio: 'Kathrine Gasc guides high-achieving entrepreneurs to rediscover passion, align intimacy, and cultivate profound emotional vitality to elevate both personal and business success.',
    credentials: ['High-Performance Relationship Mentor', 'Energetic & Emotional Transformation', 'Keynote Speaker & Workshop Facilitator'],
    image: '/src/assets/images/contact_concierge_penthouse_1791350228673.jpg'
  }
];

export const RealPortfolioShowcase: React.FC<{ onOpenConsultation: () => void }> = ({
  onOpenConsultation
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalClient, setActiveModalClient] = useState<PortfolioClient | null>(null);

  const filters = ['All', 'Executive', 'Author & Speaker', 'Health & Mindset'];

  const filteredClients = selectedFilter === 'All'
    ? CLIENTS
    : CLIENTS.filter(c => c.category === selectedFilter);

  return (
    <section id="clients" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#DDA83B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Split / Asymmetric Header with Fade-Zoom */}
        <ParallaxHorizontalWrapper direction="fade-zoom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10 mb-3">
                <Award className="w-3.5 h-3.5 text-[#DDA83B]" />
                <span className="text-[10px] tracking-[0.25em] text-[#DDA83B] uppercase font-bold">
                  Official Visual Case Studies
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
                Our Editorial <span className="text-gold-gradient">Portfolio &amp; Client Stills</span>
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col lg:items-end justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#F7F4EF]/70 font-light lg:text-right">
                Industry titans, speakers, and enterprise founders elevated through the VIP Branding Experience methodology.
              </p>

              {/* Filter Buttons - Razor-Sharp Style */}
              <div className="flex flex-wrap items-center gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFilter(f)}
                    className={`px-3.5 py-1.5 rounded-sm text-[10px] font-bold tracking-wider transition-all uppercase cursor-pointer ${
                      selectedFilter === f
                        ? 'bg-[#DDA83B] text-black shadow-md shadow-[#DDA83B]/20'
                        : 'bg-[#141414] text-[#F7F4EF]/60 hover:text-white border border-[#2A2A2A]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* Visual Photo Cards Grid with Combined Parallax Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClients.map((client, idx) => {
            const cardDirection =
              idx % 4 === 0
                ? 'slide-zoom-left'
                : idx % 4 === 3
                ? 'slide-zoom-right'
                : 'zoom-in';

            return (
              <ParallaxHorizontalWrapper
                key={client.name}
                direction={cardDirection}
                distance={70}
              >
                <div
                  onClick={() => setActiveModalClient(client)}
                  className="group relative rounded-sm overflow-hidden border border-[#262626] hover:border-[#DDA83B] bg-[#121212] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(221,168,59,0.2)] cursor-pointer flex flex-col h-[390px]"
                >
                {/* Visual Photography Container */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08] group-hover:scale-108 group-hover:brightness-100 transition-all duration-700"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/55 to-transparent" />

                  {/* Category Badge Top Left (Sharp Edge) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-sm bg-black/85 backdrop-blur-md text-[9px] uppercase tracking-widest text-[#DDA83B] font-bold border border-[#DDA83B]/40 shadow-lg">
                      {client.category}
                    </span>
                  </div>

                  {/* Expand Eye Icon Top Right */}
                  <div className="absolute top-4 right-4 z-10 w-7 h-7 rounded-sm bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 group-hover:text-[#DDA83B] group-hover:border-[#DDA83B] group-hover:scale-110 transition-all">
                    <Eye className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Text Details Overlaid */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white font-serif tracking-tight group-hover:text-[#DDA83B] transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs text-[#DDA83B] font-medium tracking-wide mb-2">
                      {client.tagline}
                    </p>
                    <p className="text-[11px] text-[#F7F4EF]/70 line-clamp-2 font-light leading-relaxed mb-3">
                      {client.bio}
                    </p>

                    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 text-[10px] text-[#F7F4EF]/60 font-mono">
                      <span>View VIP Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#DDA83B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          );
        })}
        </div>
      </div>

      {/* Lightbox / Case Dossier Modal (Architectural Sharp Edges) */}
      <AnimatePresence>
        {activeModalClient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="bg-[#141414] border border-[#DDA83B]/50 rounded-sm max-w-3xl w-full relative shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalClient(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-sm bg-black/80 hover:bg-black text-white/80 hover:text-white transition-colors border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Left Image */}
              <div className="md:col-span-5 relative min-h-[260px] md:min-h-full bg-black">
                <img
                  src={activeModalClient.image}
                  alt={activeModalClient.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold block mb-1">
                    {activeModalClient.category}
                  </span>
                  <h4 className="text-xl font-bold text-white font-serif">
                    {activeModalClient.name}
                  </h4>
                </div>
              </div>

              {/* Modal Right Content */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <VipCrestEmblem className="w-5 h-5 text-[#DDA83B]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#DDA83B] font-bold">
                      Case Study Dossier
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-serif mb-1">
                    {activeModalClient.name}
                  </h3>
                  <p className="text-xs text-[#DDA83B] font-medium tracking-wider mb-5">
                    {activeModalClient.tagline}
                  </p>

                  <div className="p-4 rounded-sm bg-black/60 border border-[#2A2A2A] mb-5">
                    <h5 className="text-[10px] uppercase tracking-widest text-[#F7F4EF]/60 font-semibold mb-2">
                      Trajectory &amp; Transformation:
                    </h5>
                    <p className="text-xs sm:text-sm text-[#F7F4EF]/90 leading-relaxed font-light">
                      {activeModalClient.bio}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-[#DDA83B] font-semibold mb-2">
                      Featured Credentials &amp; Assets:
                    </h5>
                    <div className="space-y-1.5">
                      {activeModalClient.credentials.map((cred, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#F7F4EF]/80">
                          <CheckCircle className="w-3.5 h-3.5 text-[#DDA83B] shrink-0" />
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#262626] mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={() => {
                      setActiveModalClient(null);
                      onOpenConsultation();
                    }}
                    className="btn-gold-luxury px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider text-black inline-flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Apply for VIP Experience</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
