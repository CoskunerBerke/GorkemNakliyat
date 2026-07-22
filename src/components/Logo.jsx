import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LogoEmblem = ({ width = 64, height = 44, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 160 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Horizontal Oval Ring */}
      <ellipse cx="95" cy="50" rx="52" ry="38" stroke="#1E293B" strokeWidth="8" fill="#F8FAFC"/>
      
      {/* Inner 'G' Shape */}
      {/* Upper arch of G */}
      <path 
        d="M 115 24 C 95 16 72 26 68 44 C 65 58 75 74 95 76 C 112 78 126 68 128 54 L 92 54 L 92 44 L 138 44 C 140 64 128 84 100 86 C 70 88 54 68 56 44 C 58 20 86 8 122 16 Z" 
        fill="#1E293B"
      />

      {/* Red Accent Arrow (Top-left shadow arrow extending outwards) */}
      <path 
        d="M 8 16 L 70 54 L 56 50 L 52 42 L 32 28 L 18 20 Z" 
        fill="#DC2626" 
      />
      {/* Red Arrow Tail Barb */}
      <polygon points="8,16 26,18 18,26" fill="#B91C1C" />

      {/* Main Cyan/Blue Long Arrow Piercing Through G */}
      <path 
        d="M 14 10 L 86 48 L 74 46 L 76 54 L 96 52 L 80 38 L 76 44 L 30 18 Z" 
        fill="#3B82F6" 
        stroke="#1D4ED8"
        strokeWidth="1"
      />
      
      {/* Arrowhead Barbs & Tip */}
      <polygon points="98,53 78,40 82,56" fill="#2563EB" stroke="#1E40AF" strokeWidth="1" />
    </svg>
  );
};

export const Logo = ({ variant = "full", size = "normal" }) => {
  const { t } = useLanguage();
  const isCompact = size === "small";

  return (
    <div className={`logo-container flex items-center gap-3 ${isCompact ? 'scale-90' : ''}`}>
      {/* Logo Emblem Box */}
      <div className="logo-icon-wrapper flex items-center justify-center p-1.5 bg-white rounded-xl shadow-md border border-slate-300 shrink-0">
        <LogoEmblem width={isCompact ? 52 : 64} height={isCompact ? 36 : 44} />
      </div>
      
      {variant !== "icon" && (
        <div className="logo-text-wrapper flex flex-col justify-center text-left">
          <span className="logo-title font-black tracking-wider text-white text-2xl sm:text-3xl leading-none font-sans drop-shadow-sm">
            GÖRKEM
          </span>
          <span className="logo-subtitle mt-1 px-2.5 py-0.5 bg-blue-600 text-white font-bold text-[10px] sm:text-[11px] rounded tracking-tight uppercase whitespace-nowrap shadow-xs inline-block">
            {t.logo.subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
