import React from 'react';
import { Globe, Layers, Code } from 'lucide-react';

export type ActiveViewTab = 'official' | 'extended' | 'tutorials';

interface ViewTabSwitcherProps {
  activeTab: ActiveViewTab;
  onTabChange: (tab: ActiveViewTab) => void;
}

export const ViewTabSwitcher: React.FC<ViewTabSwitcherProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <footer className="bg-[#070707] border-t border-[#DDA83B]/30 py-3.5 px-4 sm:px-8 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left Status Label */}
        <div className="flex items-center gap-2.5 text-xs text-[#FDFBF7]/75">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-brand-sans uppercase tracking-widest text-[10px] text-[#DDA83B] font-bold">
            PROJECT VIEW SWITCHER:
          </span>
          <span className="hidden md:inline text-[11px] text-[#FDFBF7]/60">
            {activeTab === 'official'
              ? 'Official web structure (vipbrandingexperience.com)'
              : activeTab === 'extended'
              ? 'Complementary Atelier studio & extended modules'
              : 'Motion architecture, parallax scroll tutorials & navbar styles'}
          </span>
        </div>

        {/* Center/Right Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 p-1 rounded-sm bg-[#141414] border border-white/10 shadow-inner">
          <button
            onClick={() => onTabChange('official')}
            className={`relative px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'official'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md shadow-[#DDA83B]/25'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Official Web</span>
            {activeTab === 'official' && (
              <span className="text-[9px] px-1.5 py-0.2 rounded-sm bg-black/20 font-mono">
                OFFICIAL
              </span>
            )}
          </button>

          <button
            onClick={() => onTabChange('extended')}
            className={`relative px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'extended'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md shadow-[#DDA83B]/25'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Extra Modules</span>
            {activeTab === 'extended' && (
              <span className="text-[9px] px-1.5 py-0.2 rounded-sm bg-black/20 font-mono">
                ATELIER
              </span>
            )}
          </button>

          <button
            onClick={() => onTabChange('tutorials')}
            className={`relative px-3.5 py-1.5 rounded-sm text-xs font-semibold tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'tutorials'
                ? 'bg-gold-gradient text-black font-extrabold shadow-md shadow-[#DDA83B]/25'
                : 'text-[#FDFBF7]/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Animations and Tutorials</span>
            {activeTab === 'tutorials' && (
              <span className="text-[9px] px-1.5 py-0.2 rounded-sm bg-black/20 font-mono">
                GUIDE
              </span>
            )}
          </button>
        </div>

        {/* Right Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#DDA83B] font-mono">
          <span>VIP BRANDING EXPERIENCE</span>
        </div>
      </div>
    </footer>
  );
};
