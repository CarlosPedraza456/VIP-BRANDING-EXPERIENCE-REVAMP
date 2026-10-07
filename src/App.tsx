import React, { useState } from 'react';
import { ViewTabSwitcher, ActiveViewTab } from './components/ViewTabSwitcher';
import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { BrandArchetypeSelector } from './components/BrandArchetypeSelector';
import { VipExperienceBriefing } from './components/VipExperienceBriefing';
import { FounderDossier } from './components/FounderDossier';
import { RealPortfolioShowcase } from './components/RealPortfolioShowcase';
import { TestimonialsMetrics } from './components/TestimonialsMetrics';
import { SplitContactSection } from './components/SplitContactSection';
import { DeliverablesMatrix } from './components/DeliverablesMatrix';
import { BrandIdentityShowcase } from './components/BrandIdentityShowcase';
import { ExecutivePillars } from './components/ExecutivePillars';
import { MethodologyTimeline } from './components/MethodologyTimeline';
import { BrandEquityCalculator } from './components/BrandEquityCalculator';
import { ExperienceTiers } from './components/ExperienceTiers';
import { ParallaxSectionDivider } from './components/ParallaxSectionDivider';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { AnimationsTutorials } from './components/AnimationsTutorials';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveViewTab>('official');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [diagnosticsData, setDiagnosticsData] = useState<{
    sector: string;
    scale: string;
    multiplier: string;
  } | null>(null);

  const handleOpenConsultation = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    }
    setConsultationOpen(true);
  };

  const handleSelectPlanWithMetrics = (data: {
    sector: string;
    scale: string;
    multiplier: string;
  }) => {
    setDiagnosticsData(data);
    setSelectedPlan('VIP BRANDING EXPERIENCE - POWERDAY');
    setConsultationOpen(true);
  };

  const handleExploreBrand = () => {
    const el = document.getElementById('archetypes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePackages = () => {
    const el = document.getElementById('archetypes') || document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#FDFBF7] relative selection:bg-[#DDA83B]/30 selection:text-white flex flex-col justify-between">
      {/* Dynamic Animated Gold Particle Canvas Background */}
      <ParticleBackground />

      {/* Top Main Navigation (Clean & Unobstructed at the Very Top) */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('VIP BRANDING EXPERIENCE')} />

      <main className="relative z-10 flex-1">
        {activeTab === 'official' ? (
          /* =========================================================
             VIEW 1: OFFICIAL WEBSITE (VIP BRANDING EXPERIENCE)
             ========================================================= */
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenConsultation={() => handleOpenConsultation('VIP BRANDING EXPERIENCE')}
              onExploreBrand={handleExploreBrand}
            />

            {/* 2. Brand Archetypes & Packages Selector */}
            <BrandArchetypeSelector
              onSelectArchetype={(type) => handleOpenConsultation(`${type.toUpperCase()} BRANDING BLUEPRINT`)}
            />

            {/* 3. What You Should Know About The VIP Branding Experience (Below Packages / Archetypes) */}
            <VipExperienceBriefing
              onOpenConsultation={() => handleOpenConsultation('VIP 2-DAY IMMERSION RETREAT')}
              onExplorePackages={handleExplorePackages}
            />

            {/* Parallax 3D Pop-Out Divider */}
            <ParallaxSectionDivider
              direction="3d-popout"
              quote="You will gain access to his lifestyle and learn the best-kept secrets to his success. Space is limited."
              author="REY PEREZ · GLOBAL BRANDING EXPERT"
            />

            {/* 4. Founder Dossier: Rey Perez (with Watch Video button) */}
            <FounderDossier
              onOpenConsultation={() => handleOpenConsultation('MASTERMIND WITH REY PEREZ')}
            />

            {/* 5. Official Visual Portfolio & Client Stills Grid */}
            <RealPortfolioShowcase
              onOpenConsultation={() => handleOpenConsultation('VIP PORTFOLIO INQUIRY')}
            />

            {/* 6. Client Testimonials & Feedback Reel */}
            <TestimonialsMetrics />

            {/* 7. Split Contact Section (Penthouse Asset + Application Form) */}
            <SplitContactSection />
          </>
        ) : activeTab === 'extended' ? (
          /* =========================================================
             VIEW 2: EXTRA MODULES & ATELIER TOOLS
             ========================================================= */
          <div className="pt-24">
            {/* Extended Suite Notice Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#1E1A15] via-[#141414] to-[#121212] border border-[#DDA83B]/40 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#DDA83B]/15 text-[#DDA83B] text-[10px] uppercase tracking-widest font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Complementary Modules &amp; Tools</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                    Atelier Studio &amp; Extended Suite
                  </h2>
                  <p className="text-xs sm:text-sm text-[#FDFBF7]/75 font-light mt-1 max-w-2xl">
                    Conceptual frameworks, cinematic production matrix, equity calculator, 9-week ascension roadmap, and luxury memberships.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('official')}
                  className="btn-gold-luxury px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap inline-flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Back to Official Web</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 1. Cinematic Production Deliverables */}
            <DeliverablesMatrix
              onOpenConsultation={() => handleOpenConsultation('BRAND IN 2 DAYS PRODUCTION SUITE')}
            />

            {/* 2. Brand Guidelines Sheet & Vector Showcase */}
            <BrandIdentityShowcase />

            {/* 3. The 4 Authority Pillars */}
            <ExecutivePillars />

            {/* 4. 9-Week Ascension Roadmap */}
            <MethodologyTimeline />

            {/* 5. Interactive Brand Equity Calculator */}
            <BrandEquityCalculator
              onSelectPlanWithMetrics={handleSelectPlanWithMetrics}
            />

            {/* 6. VIP Memberships & Packages */}
            <div id="packages">
              <ExperienceTiers
                onSelectTier={(tierName) => handleOpenConsultation(tierName)}
              />
            </div>

            {/* 7. What You Should Know About The VIP Branding Experience (Below Packages) */}
            <VipExperienceBriefing
              onOpenConsultation={() => handleOpenConsultation('VIP 2-DAY IMMERSION RETREAT')}
              onExplorePackages={handleExplorePackages}
            />
          </div>
        ) : (
          /* =========================================================
             VIEW 3: ANIMATIONS AND TUTORIALS
             ========================================================= */
          <AnimationsTutorials onBackToOfficial={() => setActiveTab('official')} />
        )}
      </main>

      {/* Official Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation('VIP BRANDING EXPERIENCE')} />

      {/* Project View Switcher Bar (Placed At The Very Bottom After Footer) */}
      <ViewTabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Confidential Consultation / Application Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        prefilledPlan={selectedPlan}
        prefilledDiagnostics={diagnosticsData}
      />
    </div>
  );
}
