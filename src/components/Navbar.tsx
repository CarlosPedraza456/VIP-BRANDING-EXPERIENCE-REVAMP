import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  Crown,
  ChevronRight,
} from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      // Detect if user has reached bottom 100px of page
      const atBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsAtBottom(atBottom);

      // Detect if user has scrolled past top hero margin
      setScrolled(scrollTop > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const navigationItems = [
    {
      num: '01',
      label: 'Brand Archetypes',
      sublabel: 'Executive · Entrepreneur · Artist · Corporate',
      href: '#archetypes',
    },
    {
      num: '02',
      label: 'Founder Rey Perez',
      sublabel: 'Global Branding Expert & CEO AMP Productions',
      href: '#founder',
    },
    {
      num: '03',
      label: 'Deliverables Suite',
      sublabel: 'Credibility Card, 360 Video, Social Kits & QR',
      href: '#deliverables',
    },
    {
      num: '04',
      label: 'Brand Guidelines Sheet',
      sublabel: 'Vector Identity & Chromatic Architecture',
      href: '#brand-identity',
    },
    {
      num: '05',
      label: 'Real Client Portfolio',
      sublabel: 'Ann Law, Adam Gaskill, Gerald Rogers & More',
      href: '#clients',
    },
    {
      num: '06',
      label: 'Brand Equity Calculator',
      sublabel: 'Deal Flow Multiplier & Valuation Diagnostics',
      href: '#calculator',
    },
    {
      num: '07',
      label: 'VIP Memberships & Programs',
      sublabel: 'Brand in 2 Days · Sovereign Identity · Empire Ecosystem',
      href: '#packages',
    },
    {
      num: '08',
      label: 'Contact & Application',
      sublabel: 'Direct Intake with Rey Perez Team',
      href: '#contact',
    },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isAtBottom
            ? 'bg-transparent border-b border-transparent py-3 opacity-90'
            : scrolled
            ? 'bg-[#0B0B0B]/92 backdrop-blur-xl border-b border-[#DDA83B]/30 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.9)]'
            : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center">
            
            {/* LEFT ZONE: CONTACT INFORMATION */}
            <div className="flex items-center justify-start gap-3 sm:gap-5 min-w-0">
              <a
                href="tel:+13055047337"
                className="hidden md:flex items-center gap-2.5 group py-1 text-left"
                title="Direct VIP Concierge Line"
              >
                <div className="w-7 h-7 rounded-full border border-[#DDA83B]/35 bg-[#141414] flex items-center justify-center text-[#DDA83B] group-hover:border-[#DDA83B] group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(221,168,59,0.4)] transition-all">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] font-brand-sans uppercase tracking-widest text-[#DDA83B] font-bold">
                    VIP Concierge
                  </span>
                  <span className="text-xs font-brand-sans font-semibold text-[#FDFBF7]/90 group-hover:text-white transition-colors">
                    +1 (305) 504-7337
                  </span>
                </div>
              </a>

              <div className="hidden lg:block w-[1px] h-5 bg-[#DDA83B]/20" />

              <a
                href="mailto:info@iampyourbrand.com"
                className="hidden lg:flex items-center gap-2 text-xs font-brand-sans text-[#FDFBF7]/70 hover:text-[#DDA83B] transition-colors group py-1"
                title="Official Email"
              >
                <Mail className="w-3.5 h-3.5 text-[#DDA83B]/80 group-hover:text-[#DDA83B]" />
                <span className="truncate max-w-[150px] xl:max-w-[180px]">
                  info@iampyourbrand.com
                </span>
              </a>

              {/* Mobile Quick Action Buttons */}
              <div className="flex md:hidden items-center gap-1.5">
                <a
                  href="tel:+13055047337"
                  className="w-8 h-8 rounded-full border border-[#DDA83B]/30 bg-[#141414] flex items-center justify-center text-[#DDA83B] hover:border-[#DDA83B] transition-colors"
                  aria-label="Call Concierge"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:info@iampyourbrand.com"
                  className="w-8 h-8 rounded-full border border-[#DDA83B]/30 bg-[#141414] flex items-center justify-center text-[#DDA83B] hover:border-[#DDA83B] transition-colors"
                  aria-label="Email VIP Branding"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CENTER ZONE: CENTERED LOGO */}
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDA83B] py-1"
                aria-label="VIP Branding Experience Home"
              >
                <VipCrestEmblem
                  className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(221,168,59,0.35)] shrink-0 text-[#DDA83B]"
                  size={40}
                />
                <div className="flex flex-col text-left">
                  <span className="font-serif-luxury text-sm sm:text-lg font-bold tracking-wider text-white group-hover:text-gold-gradient transition-colors leading-tight whitespace-nowrap">
                    VIP BRANDING
                  </span>
                  <span className="font-brand-sans text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[#DDA83B] font-semibold leading-none mt-0.5 whitespace-nowrap">
                    Best of the Best
                  </span>
                </div>
              </a>
            </div>

            {/* RIGHT ZONE: CTA & MENU BUTTON */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-sm font-brand-sans font-bold text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer shadow-lg"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="group flex items-center gap-2 px-3 py-2 rounded-sm border border-[#DDA83B]/40 bg-[#161616]/90 hover:bg-[#1C1814] hover:border-[#DDA83B] text-white transition-all duration-300 cursor-pointer focus:outline-none shadow-md"
                aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
              >
                <span className="font-brand-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDA83B] hidden sm:inline-block">
                  {menuOpen ? 'CLOSE' : 'MENU'}
                </span>
                <div className="w-5 h-4 flex flex-col justify-between items-end">
                  <span
                    className={`h-[1.5px] bg-[#DDA83B] transition-all duration-300 ${
                      menuOpen ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'
                    }`}
                  />
                  <span
                    className={`h-[1.5px] bg-[#DDA83B] transition-all duration-300 ${
                      menuOpen ? 'opacity-0' : 'w-3.5 group-hover:w-5'
                    }`}
                  />
                  <span
                    className={`h-[1.5px] bg-[#DDA83B] transition-all duration-300 ${
                      menuOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-4 group-hover:w-5'
                    }`}
                  />
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#070707]/96 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto pt-24 pb-12 px-6 sm:px-12 lg:px-20"
          >
            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto">
              {/* Left Column: Navigation Directory */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#DDA83B]/20">
                  <VipCrestEmblem size={24} className="w-6 h-6 text-[#DDA83B]" />
                  <span className="font-brand-sans text-[11px] uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
                    OFFICIAL DIRECTORY · VIP BRANDING EXPERIENCE
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {navigationItems.map((item, idx) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="group w-full flex items-center justify-between text-left p-2 sm:p-2.5 rounded hover:bg-[#141414]/80 border border-transparent hover:border-[#DDA83B]/30 transition-all cursor-pointer"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-serif-luxury text-sm font-bold text-[#DDA83B]/70 group-hover:text-[#DDA83B] tabular-nums">
                            {item.num}
                          </span>
                          <div>
                            <span className="font-serif-luxury text-base sm:text-xl font-bold text-white group-hover:text-gold-gradient transition-colors block">
                              {item.label}
                            </span>
                            <span className="font-body text-xs text-[#FDFBF7]/50 group-hover:text-[#FDFBF7]/80 transition-colors hidden sm:block">
                              {item.sublabel}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-[#DDA83B]/40 group-hover:text-[#DDA83B] group-hover:translate-x-1 transition-all" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Fast Contact & Booking */}
              <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded bg-gradient-to-b from-[#181614] via-[#121110] to-[#0A0A0A] border border-[#DDA83B]/35 shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-5 h-5 text-[#DDA83B]" />
                    <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-bold">
                      AMP CONCEPTS INC
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                    GLOBAL BRANDING HEADQUARTERS
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#FDFBF7]/75 leading-relaxed mb-6 font-light">
                    Led by Rey Perez. We create celebrity brands for high-achieving entrepreneurs who want to dominate their niche.
                  </p>

                  <div className="space-y-3 p-4 rounded bg-[#0E0E0E] border border-[#DDA83B]/20 mb-6 text-xs font-brand-sans">
                    <div className="flex items-center justify-between">
                      <span className="text-[#FDFBF7]/55">Direct Phone:</span>
                      <a href="tel:+13055047337" className="text-white font-semibold hover:text-[#DDA83B]">
                        +1 (305) 504-7337
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#FDFBF7]/55">Corporate Email:</span>
                      <a href="mailto:info@iampyourbrand.com" className="text-white font-medium hover:text-[#DDA83B]">
                        info@iampyourbrand.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#FDFBF7]/55">Headquarters:</span>
                      <span className="text-[#DDA83B] font-medium">Hialeah, FL 33015</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full py-4 px-6 rounded font-brand-sans font-bold text-xs uppercase tracking-[0.22em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow shadow-xl cursor-pointer transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <span>Request VIP Admission</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer inside Menu */}
            <div className="max-w-7xl mx-auto w-full pt-6 mt-4 border-t border-[#DDA83B]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] font-brand-sans text-[#FDFBF7]/45">
              <span>© {new Date().getFullYear()} VIP BRANDING EXPERIENCE · AMP CONCEPTS INC.</span>
              <span className="text-[#DDA83B]">Best of the Best Personal Branding</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
