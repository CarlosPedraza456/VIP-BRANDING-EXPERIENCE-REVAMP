import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';

export const Footer: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#070707] text-[#F7F4EF] border-t border-[#DDA83B]/20 pt-20 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#DDA83B]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#DDA83B]/15">
          {/* Brand Identity Lockup (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <VipCrestEmblem size={44} className="w-11 h-11 text-[#DDA83B]" />
                <div>
                  <span className="font-serif-luxury text-lg font-bold tracking-wider text-white block">
                    VIP BRANDING EXPERIENCE
                  </span>
                  <span className="font-brand-sans text-[10px] uppercase tracking-[0.25em] text-[#DDA83B] font-semibold">
                    Best of the Best · Personal Branding
                  </span>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/70 leading-relaxed max-w-sm mb-6 font-light">
                Creating celebrity-status personal brands for top entrepreneurs, executives, and high performers who want to dominate their niche. Founded by Rey Perez.
              </p>

              {/* Corporate Contact Block */}
              <div className="space-y-2 text-xs text-[#F7F4EF]/70 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#DDA83B]" />
                  <span>AMP CONCEPTS INC — 7857 NW 188th Lane, Hialeah, FL 33015</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#DDA83B]" />
                  <a href="tel:+13055047337" className="hover:text-white transition-colors">
                    +1 (305) 504-7337
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#DDA83B]" />
                  <a href="mailto:info@iampyourbrand.com" className="hover:text-white transition-colors">
                    info@iampyourbrand.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-[0.18em] text-[#0B0B0B] bg-gold-gradient cursor-pointer shadow-lg hover:scale-[1.01] transition-transform"
              >
                <span>Apply for Experience</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Navigation Links Mirror (Col 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-bold mb-4">
              Official Navigation
            </h4>
            <ul className="space-y-2.5 font-brand-sans text-xs text-[#F7F4EF]/70">
              <li>
                <a href="#archetypes" className="hover:text-[#DDA83B] transition-colors">
                  Brand Archetypes
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#DDA83B] transition-colors">
                  Founder Rey Perez
                </a>
              </li>
              <li>
                <a href="#deliverables" className="hover:text-[#DDA83B] transition-colors">
                  Deliverables Suite
                </a>
              </li>
              <li>
                <a href="#brand-identity" className="hover:text-[#DDA83B] transition-colors">
                  Brand Guidelines Sheet
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#DDA83B] transition-colors">
                  VIP Client Portfolio
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#DDA83B] transition-colors">
                  Packages &amp; Memberships
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#DDA83B] transition-colors">
                  Brand Equity Calculator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DDA83B] transition-colors">
                  Contact &amp; Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Private Newsletter Dispatch (Col 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-bold mb-2">
              The Executive Dispatch
            </h4>
            <p className="font-body text-xs text-[#F7F4EF]/65 leading-relaxed mb-4 font-light">
              Receive confidential essays on brand authority, market positioning, and accelerated deal execution from Rey Perez.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="executive@company.com"
                  className="w-full px-3.5 py-2.5 bg-[#141414] border border-[#DDA83B]/30 text-white placeholder-white/20 text-xs rounded-l-sm focus:outline-none focus:border-[#DDA83B]"
                />
                <button
                  type="submit"
                  className="px-4 bg-gold-gradient text-[#0B0B0B] font-bold text-xs uppercase tracking-wider rounded-r-sm cursor-pointer hover:brightness-110 flex items-center justify-center"
                  aria-label="Subscribe to dispatch"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-brand-sans pt-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscription confirmed to private dispatch.</span>
                </div>
              )}
            </form>

            <div className="flex items-center gap-2 text-[10px] text-[#F7F4EF]/45 mt-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DDA83B]" />
              <span>Confidentiality guaranteed. AMP CONCEPTS INC.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-brand-sans text-[#F7F4EF]/50">
          <div>
            © Copyright - VIP Branding Experience {new Date().getFullYear()} · AMP CONCEPTS INC. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#DDA83B] transition-colors cursor-pointer">
              Terms &amp; Conditions
            </span>
            <span>|</span>
            <span className="hover:text-[#DDA83B] transition-colors cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
