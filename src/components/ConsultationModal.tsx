import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ShieldCheck, ArrowRight, Lock, Sparkles, Building2, User, Mail, Phone } from 'lucide-react';
import { VipCrestEmblem, LuxuryMonogram } from './BrandIcons';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPlan?: string;
  prefilledDiagnostics?: {
    sector: string;
    scale: string;
    multiplier: string;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledPlan = '',
  prefilledDiagnostics = null,
}) => {
  const [fullName, setFullName] = useState('');
  const [executiveRole, setExecutiveRole] = useState('CEO & Founder');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(prefilledPlan || 'THE EXECUTIVE LUMINARY');
  const [goals, setGoals] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledPlan) {
      setSelectedPlan(prefilledPlan);
    }
  }, [prefilledPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please complete your name and corporate email.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    const randomCode = `VIP-EXEC-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(randomCode);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0B]/90 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-[#DDA83B]/40 rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-10 my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#F7F4EF]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close consultation modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                {/* Header Lockup */}
                <div className="flex items-center gap-3 mb-4">
                  <VipCrestEmblem size={32} className="w-8 h-8 text-[#DDA83B]" />
                  <div>
                    <span className="font-brand-sans text-[10px] uppercase tracking-[0.25em] text-[#DDA83B] font-bold block">
                      PRIVATE ADMISSION PROTOCOL
                    </span>
                    <span className="font-brand-sans text-xs text-[#F7F4EF]/60">
                      Candidacy for the Executive Atelier
                    </span>
                  </div>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  CONFIDENTIAL <span className="gold-gradient-text">CONSULTATION INTAKE</span>
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/75 leading-relaxed mb-6 font-light">
                  All consultations and materials submitted are handled under strict non-disclosure agreement (NDA) standards.
                </p>

                {/* Pre-filled Diagnostic Metrics Banner */}
                {prefilledDiagnostics && (
                  <div className="p-3.5 rounded-sm bg-[#1A1815] border border-[#DDA83B]/30 mb-6 flex items-center justify-between text-xs font-brand-sans">
                    <div>
                      <span className="text-[#F7F4EF]/60 block text-[10px] uppercase">
                        Diagnosed Sector:
                      </span>
                      <span className="text-white font-semibold">{prefilledDiagnostics.sector}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#DDA83B] block text-[10px] uppercase font-bold">
                        Calculated Multiplier:
                      </span>
                      <span className="text-gold-metallic font-bold text-sm">
                        {prefilledDiagnostics.multiplier}x
                      </span>
                    </div>
                  </div>
                )}

                {errorMsg && (
                  <div className="p-3 mb-4 rounded-sm bg-red-950/50 border border-red-500/50 text-xs text-red-200 font-brand-sans">
                    {errorMsg}
                  </div>
                )}

                {/* Intake Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-brand-sans uppercase tracking-wider text-[#F7F4EF]/70 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#DDA83B] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Alexander Sterling"
                          className="w-full bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#DDA83B] font-brand-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-brand-sans uppercase tracking-wider text-[#F7F4EF]/70 mb-1">
                        Executive Title / Role
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-[#DDA83B] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={executiveRole}
                          onChange={(e) => setExecutiveRole(e.target.value)}
                          placeholder="e.g. Managing Partner / CEO"
                          className="w-full bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#DDA83B] font-brand-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-brand-sans uppercase tracking-wider text-[#F7F4EF]/70 mb-1">
                        Corporate / Private Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#DDA83B] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="executive@holding.com"
                          className="w-full bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#DDA83B] font-brand-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-brand-sans uppercase tracking-wider text-[#F7F4EF]/70 mb-1">
                        Phone / Concierge Direct
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#DDA83B] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#DDA83B] font-brand-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-brand-sans uppercase tracking-wider text-[#F7F4EF]/70 mb-1">
                        Enterprise / Fund Name
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Sterling Capital & Ventures"
                        className="w-full bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm px-3 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#DDA83B] font-brand-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-brand-sans uppercase tracking-wider text-[#F7F4EF]/70 mb-1">
                        Target Program
                      </label>
                      <select
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="w-full bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#DDA83B] font-brand-sans"
                      >
                        <option value="VIP BRANDING EXPERIENCE - POWERDAY">
                          VIP BRANDING EXPERIENCE · BRAND IN 2 DAYS
                        </option>
                        <option value="THE SOVEREIGN IDENTITY">
                          THE SOVEREIGN IDENTITY (5 Weeks)
                        </option>
                        <option value="THE EXECUTIVE LUMINARY">
                          THE EXECUTIVE LUMINARY (8 Weeks)
                        </option>
                        <option value="THE EMPIRE ECOSYSTEM">
                          THE EMPIRE ECOSYSTEM (12-Month Retainer)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-brand-sans uppercase tracking-wider text-[#F7F4EF]/70 mb-1">
                      Primary Milestones &amp; Brand Horizon
                    </label>
                    <textarea
                      rows={3}
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      placeholder="Briefly describe your capital raising, board appointments, or thought leadership objectives..."
                      className="w-full bg-[#0E0E0E] border border-[#1E1E1E] rounded-sm p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#DDA83B] font-body resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0B0B0B] bg-gold-gradient bg-gold-gradient-hover gold-glow transition-all duration-300 hover:scale-[1.01] cursor-pointer shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>Submit Private Intake Candidacy</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-brand-sans text-[#F7F4EF]/50 pt-2">
                    <Lock className="w-3.5 h-3.5 text-[#DDA83B]" />
                    <span>Protected under strict Non-Disclosure Agreement (NDA)</span>
                  </div>
                </form>
              </div>
            ) : (
              /* Success / Admission Confirmation State */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gold-gradient p-0.5 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center text-[#DDA83B]">
                    <Check className="w-8 h-8" />
                  </div>
                </div>

                <span className="font-brand-sans text-xs uppercase tracking-[0.25em] text-[#DDA83B] font-bold block mb-2">
                  CANDIDACY CONFIRMED
                </span>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-4">
                  Application Received for <span className="gold-gradient-text">{fullName}</span>
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#F7F4EF]/80 max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Your confidential admission dossier has been registered in our private queue. Our Managing Director will contact you within 24 business hours.
                </p>

                <div className="p-4 rounded-sm bg-[#161616] border border-[#DDA83B]/30 max-w-sm mx-auto mb-8 font-mono text-xs">
                  <span className="text-[#F7F4EF]/50 block text-[10px] uppercase mb-1">
                    Confidential Reference Pass:
                  </span>
                  <span className="text-[#DDA83B] font-bold text-base tracking-widest block">
                    {referenceCode}
                  </span>
                  <span className="text-[10px] text-[#F7F4EF]/40 mt-1 block">
                    Assigned Program: {selectedPlan}
                  </span>
                </div>

                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3 rounded-sm font-brand-sans font-bold text-xs uppercase tracking-widest text-white bg-[#1E1E1E] hover:bg-[#252525] border border-[#DDA83B]/40 transition-colors cursor-pointer"
                >
                  Return to Main Portal
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
