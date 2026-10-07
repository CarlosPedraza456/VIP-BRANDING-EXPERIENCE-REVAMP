import React from 'react';

// Circular Gold VIP Crest Emblem (as shown in the Brand Guidelines image)
export const VipCrestEmblem: React.FC<{ className?: string; size?: number }> = ({
  className = "w-16 h-16",
  size = 64
}) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2CA" />
        <stop offset="28%" stopColor="#F8D36D" />
        <stop offset="65%" stopColor="#DDA83B" />
        <stop offset="100%" stopColor="#8C5C12" />
      </linearGradient>
      <linearGradient id="crestGoldRing" x1="10%" y1="10%" x2="90%" y2="90%">
        <stop offset="0%" stopColor="#FFE593" />
        <stop offset="45%" stopColor="#E5B842" />
        <stop offset="80%" stopColor="#C6922C" />
        <stop offset="100%" stopColor="#784C0A" />
      </linearGradient>
      <radialGradient id="crestCenterDark" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1E1911" />
        <stop offset="100%" stopColor="#0B0B0B" />
      </radialGradient>
    </defs>
    
    {/* Outer Double Bezel Ring */}
    <circle cx="50" cy="50" r="47" stroke="url(#crestGold)" strokeWidth="1.6" />
    <circle cx="50" cy="50" r="44" stroke="url(#crestGoldRing)" strokeWidth="0.9" strokeDasharray="2 1.5" />
    <circle cx="50" cy="50" r="41" fill="url(#crestCenterDark)" stroke="url(#crestGold)" strokeWidth="1.2" />

    {/* Imperial Crown at Top */}
    <g transform="translate(50, 24) scale(0.65)" stroke="url(#crestGold)" fill="url(#crestGold)">
      <path d="M-14 6 L-10 -4 L-4 0 L0 -8 L4 0 L10 -4 L14 6 Z" strokeWidth="1" />
      <circle cx="-10" cy="-5" r="1.2" />
      <circle cx="0" cy="-9" r="1.4" />
      <circle cx="10" cy="-5" r="1.2" />
      <rect x="-14" y="6" width="28" height="2" rx="1" />
    </g>

    {/* Laurel Wreath Left */}
    <g stroke="url(#crestGold)" fill="url(#crestGold)" strokeWidth="0.5">
      <path d="M 22 56 C 21 44 26 34 33 27" fill="none" strokeWidth="1.2" />
      {/* Leaves left */}
      <path d="M 23 48 C 20 46 17 48 19 51 C 21 52 23 51 23 48 Z" />
      <path d="M 22 41 C 18 40 17 43 19 45 C 21 46 23 44 22 41 Z" />
      <path d="M 25 34 C 22 32 21 36 24 38 C 26 38 27 36 25 34 Z" />
      <path d="M 29 28 C 26 26 26 30 29 32 C 31 32 31 30 29 28 Z" />
      <path d="M 25 57 C 22 57 20 61 24 62 C 26 61 26 59 25 57 Z" />
      <path d="M 31 67 C 27 68 28 72 32 72 C 34 71 33 68 31 67 Z" />
      <path d="M 40 76 C 36 78 39 81 42 79 C 43 78 42 76 40 76 Z" />
    </g>

    {/* Laurel Wreath Right */}
    <g stroke="url(#crestGold)" fill="url(#crestGold)" strokeWidth="0.5">
      <path d="M 78 56 C 79 44 74 34 67 27" fill="none" strokeWidth="1.2" />
      {/* Leaves right */}
      <path d="M 77 48 C 80 46 83 48 81 51 C 79 52 77 51 77 48 Z" />
      <path d="M 78 41 C 82 40 83 43 81 45 C 79 46 77 44 78 41 Z" />
      <path d="M 75 34 C 78 32 79 36 76 38 C 74 38 73 36 75 34 Z" />
      <path d="M 71 28 C 74 26 74 30 71 32 C 69 32 69 30 71 28 Z" />
      <path d="M 75 57 C 78 57 80 61 76 62 C 74 61 74 59 75 57 Z" />
      <path d="M 69 67 C 73 68 72 72 68 72 C 66 71 67 68 69 67 Z" />
      <path d="M 60 76 C 64 78 61 81 58 79 C 57 78 58 76 60 76 Z" />
    </g>

    {/* Bottom Ribbon / Tie Knot */}
    <circle cx="50" cy="79" r="2.2" fill="url(#crestGold)" />

    {/* Center Typography VIP */}
    <text
      x="50"
      y="54"
      textAnchor="middle"
      fill="url(#crestGold)"
      fontFamily="'Cinzel', serif"
      fontSize="17"
      fontWeight="700"
      letterSpacing="2.5"
    >
      VIP
    </text>

    {/* Micro Star or Diamond */}
    <polygon points="50,60 52,62 50,64 48,62" fill="url(#crestGold)" />
  </svg>
);

// Intertwined Monogram Logo (NEG / NEL Monogram as shown in the brand sheet)
export const LuxuryMonogram: React.FC<{ className?: string; size?: number }> = ({
  className = "w-12 h-12",
  size = 48
}) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="monoGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF3CE" />
        <stop offset="35%" stopColor="#F8D36D" />
        <stop offset="70%" stopColor="#DDA83B" />
        <stop offset="100%" stopColor="#875810" />
      </linearGradient>
    </defs>
    
    {/* Stylized N */}
    <path
      d="M26 80 V22 H34 L62 76 V22 H70 V80 H62 L34 26 V80 H26 Z"
      fill="url(#monoGold)"
      fillOpacity="0.95"
    />
    
    {/* Stylized Intertwined G / E Curvature */}
    <path
      d="M58 36 C58 31 63 26 73 26 C82 26 87 32 87 40 H77 C77 36 75 33 73 33 C70 33 68 35 68 39 C68 46 87 45 87 63 C87 74 79 80 69 80 C57 80 54 71 54 62 H64 C64 67 66 73 70 73 C74 73 77 70 77 64 C77 57 58 58 58 36 Z"
      fill="url(#monoGold)"
      fillOpacity="0.98"
    />
    
    {/* Luxury Accent Serifs and Base Line */}
    <line x1="22" y1="22" x2="38" y2="22" stroke="url(#monoGold)" strokeWidth="2.5" strokeLinecap="square" />
    <line x1="22" y1="80" x2="38" y2="80" stroke="url(#monoGold)" strokeWidth="2.5" strokeLinecap="square" />
    <line x1="58" y1="80" x2="74" y2="80" stroke="url(#monoGold)" strokeWidth="2.5" strokeLinecap="square" />
  </svg>
);

// Gold Medallion Icon: Executive (Person in Suit)
export const MedallionExecutive: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className} fill="none">
    <defs>
      <radialGradient id="medallionGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFF2CB" />
        <stop offset="38%" stopColor="#F5CD60" />
        <stop offset="75%" stopColor="#DDA83B" />
        <stop offset="100%" stopColor="#7E520D" />
      </radialGradient>
      <linearGradient id="medRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF6D8" />
        <stop offset="100%" stopColor="#8A5A11" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="38" fill="url(#medallionGrad)" stroke="url(#medRim)" strokeWidth="2" />
    <circle cx="40" cy="40" r="33" stroke="#8A5A11" strokeWidth="1" strokeDasharray="1.5 2" />
    
    {/* Executive Silhouette in Dark Charcoal */}
    <g fill="#0B0B0B">
      <circle cx="40" cy="30" r="8" />
      {/* Suit Jacket & Collar */}
      <path d="M26 56 C26 44 32 41 40 41 C48 41 54 44 54 56 Z" />
      {/* Tie cutout in Gold */}
      <polygon points="40,43 42,47 41,54 40,55 39,54 38,47" fill="#E5B842" />
    </g>
  </svg>
);

// Gold Medallion Icon: Scales of Justice / Balance & Strategic Equity
export const MedallionEquity: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className} fill="none">
    <defs>
      <radialGradient id="medallionGrad2" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFF2CB" />
        <stop offset="38%" stopColor="#F5CD60" />
        <stop offset="75%" stopColor="#DDA83B" />
        <stop offset="100%" stopColor="#7E520D" />
      </radialGradient>
      <linearGradient id="medRim2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF6D8" />
        <stop offset="100%" stopColor="#8A5A11" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="38" fill="url(#medallionGrad2)" stroke="url(#medRim2)" strokeWidth="2" />
    <circle cx="40" cy="40" r="33" stroke="#8A5A11" strokeWidth="1" strokeDasharray="1.5 2" />
    
    {/* Scales Silhouette */}
    <g fill="#0B0B0B">
      <rect x="38" y="24" width="4" height="28" rx="1" />
      <rect x="30" y="52" width="20" height="4" rx="2" />
      <line x1="22" y1="30" x2="58" y2="30" stroke="#0B0B0B" strokeWidth="3" strokeLinecap="round" />
      {/* Left Pan */}
      <line x1="24" y1="31" x2="20" y2="42" stroke="#0B0B0B" strokeWidth="1.5" />
      <line x1="26" y1="31" x2="30" y2="42" stroke="#0B0B0B" strokeWidth="1.5" />
      <path d="M18 42 Q25 48 32 42 Z" fill="#0B0B0B" />
      {/* Right Pan */}
      <line x1="54" y1="31" x2="50" y2="42" stroke="#0B0B0B" strokeWidth="1.5" />
      <line x1="56" y1="31" x2="60" y2="42" stroke="#0B0B0B" strokeWidth="1.5" />
      <path d="M48 42 Q55 48 62 42 Z" fill="#0B0B0B" />
    </g>
  </svg>
);

// Gold Medallion Icon: Briefcase / High-Ticket Deal Flow
export const MedallionBriefcase: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className} fill="none">
    <defs>
      <radialGradient id="medallionGrad3" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFF2CB" />
        <stop offset="38%" stopColor="#F5CD60" />
        <stop offset="75%" stopColor="#DDA83B" />
        <stop offset="100%" stopColor="#7E520D" />
      </radialGradient>
      <linearGradient id="medRim3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF6D8" />
        <stop offset="100%" stopColor="#8A5A11" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="38" fill="url(#medallionGrad3)" stroke="url(#medRim3)" strokeWidth="2" />
    <circle cx="40" cy="40" r="33" stroke="#8A5A11" strokeWidth="1" strokeDasharray="1.5 2" />
    
    {/* Briefcase in Charcoal */}
    <g fill="#0B0B0B">
      <path d="M34 26 C34 24 36 22 38 22 H42 C44 22 46 24 46 26 V28 H34 V26 Z" fill="none" stroke="#0B0B0B" strokeWidth="2.5" />
      <rect x="23" y="28" width="34" height="26" rx="3" />
      <line x1="23" y1="40" x2="57" y2="40" stroke="#E5B842" strokeWidth="1.5" />
      <rect x="37" y="38" width="6" height="5" rx="1" fill="#E5B842" />
    </g>
  </svg>
);

// Gold Medallion Icon: Verified Authority
export const MedallionAuthority: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} className={className} fill="none">
    <defs>
      <radialGradient id="medallionGrad4" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFF2CB" />
        <stop offset="38%" stopColor="#F5CD60" />
        <stop offset="75%" stopColor="#DDA83B" />
        <stop offset="100%" stopColor="#7E520D" />
      </radialGradient>
      <linearGradient id="medRim4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF6D8" />
        <stop offset="100%" stopColor="#8A5A11" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="38" fill="url(#medallionGrad4)" stroke="url(#medRim4)" strokeWidth="2" />
    <circle cx="40" cy="40" r="33" stroke="#8A5A11" strokeWidth="1" strokeDasharray="1.5 2" />
    
    {/* Profile with Checkmark */}
    <g fill="#0B0B0B">
      <circle cx="37" cy="30" r="7.5" />
      <path d="M24 54 C24 44 30 41 37 41 C43 41 48 43 49 51 L44 54 Z" />
      {/* Verified check badge */}
      <circle cx="53" cy="47" r="8" fill="#0B0B0B" />
      <path d="M49 47 L52 50 L57 44" stroke="#E5B842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
);
