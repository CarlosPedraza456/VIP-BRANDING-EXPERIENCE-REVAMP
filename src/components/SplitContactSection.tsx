import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, User } from 'lucide-react';
import { VipCrestEmblem } from './BrandIcons';
import { ParallaxHorizontalWrapper } from './ParallaxHorizontalWrapper';

export const SplitContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brandType: 'Executive',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-t border-[#DDA83B]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric Section Header with Fade-Zoom */}
        <ParallaxHorizontalWrapper direction="fade-zoom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-white/10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#DDA83B]/30 bg-[#DDA83B]/10 mb-3">
                <Mail className="w-3.5 h-3.5 text-[#DDA83B]" />
                <span className="text-[10px] tracking-[0.25em] text-[#DDA83B] uppercase font-bold">
                  Official Communication Channel
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
                Direct <span className="text-gold-gradient">Contact &amp; Private Intake</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs sm:text-sm text-[#FDFBF7]/70 font-light">
                Connect directly with Rey Perez's executive admissions team at AMP CONCEPTS INC.
              </p>
            </div>
          </div>
        </ParallaxHorizontalWrapper>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          
          {/* LEFT SIDE: Luxury Concierge Asset & Contact Details with Dynamic Slide-Zoom */}
          <div className="lg:col-span-5 flex flex-col">
            <ParallaxHorizontalWrapper direction="slide-zoom-left" distance={80} className="h-full">
              <div className="relative rounded-sm overflow-hidden border border-[#DDA83B]/35 bg-gradient-to-b from-[#161616] via-[#121212] to-[#0A0A0A] p-8 sm:p-10 flex flex-col justify-between h-full shadow-2xl group">
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-35 transition-opacity duration-700">
                  <img
                    src="/src/assets/images/contact_concierge_penthouse_1791350228673.jpg"
                    alt="Concierge Penthouse Lounge"
                    className="w-full h-full object-cover object-center filter brightness-75 scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
                </div>

                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#DDA83B]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <VipCrestEmblem className="w-10 h-10 text-[#DDA83B]" />
                    <div>
                      <h3 className="text-xl font-bold text-white font-serif">
                        VIP BRANDING EXPERIENCE
                      </h3>
                      <span className="text-[10px] text-[#DDA83B] uppercase tracking-widest font-semibold block">
                        AMP CONCEPTS INC
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#FDFBF7]/80 font-light leading-relaxed mb-8">
                    Our private <strong className="text-white font-medium">Brand in 2 Days</strong> retreats and mastermind programs admit strictly limited cohorts per quarter to ensure personalized executive execution.
                  </p>

                  {/* Direct Contact Cards (Sharp Luxury Design) */}
                  <div className="space-y-4 mb-8">
                    <a
                      href="tel:+13055047337"
                      className="flex items-center gap-3 p-3.5 rounded-sm bg-black/70 border border-[#2A2A2A] hover:border-[#DDA83B] transition-colors group/item"
                    >
                      <div className="w-9 h-9 rounded-sm bg-[#DDA83B]/10 border border-[#DDA83B]/30 flex items-center justify-center text-[#DDA83B] group-hover/item:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#DDA83B] uppercase tracking-wider font-bold">
                          Direct Phone Line
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          +1 (305) 504-7337
                        </span>
                      </div>
                    </a>

                    <a
                      href="mailto:info@iampyourbrand.com"
                      className="flex items-center gap-3 p-3.5 rounded-sm bg-black/70 border border-[#2A2A2A] hover:border-[#DDA83B] transition-colors group/item"
                    >
                      <div className="w-9 h-9 rounded-sm bg-[#DDA83B]/10 border border-[#DDA83B]/30 flex items-center justify-center text-[#DDA83B] group-hover/item:scale-110 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#DDA83B] uppercase tracking-wider font-bold">
                          Official Email
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-none">
                          info@iampyourbrand.com
                        </span>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3.5 rounded-sm bg-black/70 border border-[#2A2A2A]">
                      <div className="w-9 h-9 rounded-sm bg-[#DDA83B]/10 border border-[#DDA83B]/30 flex items-center justify-center text-[#DDA83B] shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-[#DDA83B] uppercase tracking-wider font-bold">
                          Corporate Headquarters
                        </span>
                        <span className="text-xs text-[#FDFBF7]/80">
                          7857 NW 188th Lane, Hialeah, FL 33015
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 text-[10px] text-[#FDFBF7]/50 leading-relaxed font-light">
                  <div className="flex items-center gap-1.5 text-[#DDA83B] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="font-semibold uppercase tracking-wider">Protected Intake</span>
                  </div>
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
              </div>
            </ParallaxHorizontalWrapper>
          </div>

          {/* RIGHT SIDE: Interactive Application Form with Dynamic Slide-Zoom */}
          <div className="lg:col-span-7 flex flex-col">
            <ParallaxHorizontalWrapper direction="slide-zoom-right" distance={80} className="h-full">
              <div className="bg-[#121212] border border-[#DDA83B]/40 rounded-sm p-8 sm:p-10 shadow-2xl relative h-full flex flex-col justify-between">
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DDA83B] to-transparent opacity-80" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center my-auto"
                  >
                    <div className="w-16 h-16 rounded-sm bg-[#DDA83B]/20 border border-[#DDA83B] flex items-center justify-center mx-auto mb-6 text-[#DDA83B]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-serif mb-2">
                      Application Received Successfully
                    </h3>
                    <p className="text-sm text-[#FDFBF7]/80 max-w-md mx-auto mb-6 leading-relaxed font-light">
                      Thank you, <span className="text-[#DDA83B] font-semibold">{formData.name}</span>. Our executive admissions team will review your application and respond within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', brandType: 'Executive', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold border border-[#DDA83B]/40 text-[#DDA83B] hover:bg-[#DDA83B]/10 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#DDA83B] font-bold block mb-1">
                        Application Form
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-2">
                        Get In Touch With Our Team
                      </h3>
                      <p className="text-xs text-[#FDFBF7]/60 font-light">
                        Fill out your information below to check event availability and schedule your strategic intake session.
                      </p>
                    </div>

                    {/* Full Name Input */}
                    <div>
                      <label className="block text-xs font-semibold text-[#FDFBF7]/90 uppercase tracking-wider mb-1.5">
                        Name <span className="text-[#DDA83B]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#DDA83B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Full Name"
                          className="w-full bg-[#181818] border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#DDA83B] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#FDFBF7]/90 uppercase tracking-wider mb-1.5">
                          E-Mail <span className="text-[#DDA83B]">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#DDA83B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="executive@company.com"
                            className="w-full bg-[#181818] border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#DDA83B] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#FDFBF7]/90 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-[#DDA83B]">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#DDA83B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (305) 000-0000"
                            className="w-full bg-[#181818] border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#DDA83B] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Brand Archetype Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#FDFBF7]/90 uppercase tracking-wider mb-1.5">
                        Brand Category
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Executive', 'Entrepreneur', 'Artist', 'Corporate'].map((cat) => (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => setFormData({ ...formData, brandType: cat })}
                            className={`py-2 px-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                              formData.brandType === cat
                                ? 'bg-gold-gradient text-black font-extrabold shadow-md shadow-[#DDA83B]/25'
                                : 'bg-[#181818] text-[#FDFBF7]/60 hover:text-white border border-[#2A2A2A]'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-semibold text-[#FDFBF7]/90 uppercase tracking-wider mb-1.5">
                        Message / Objectives
                      </label>
                      <div className="relative">
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Briefly tell us about your brand goals and current milestones..."
                          className="w-full bg-[#181818] border border-white/10 rounded-sm p-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#DDA83B] transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-[0.22em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ParallaxHorizontalWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
