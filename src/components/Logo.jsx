import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LogoEmblem = ({ width = 48, height = 48, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle / Ring */}
      <circle cx="50" cy="50" r="42" stroke="#1E293B" strokeWidth="8" fill="#FFFFFF"/>

      {/* Stylized 'G' shape */}
      <path 
        d="M 68 34 C 62 26 50 24 38 30 C 26 36 22 50 26 62 C 30 74 44 80 58 76 C 68 73 74 65 74 54 L 50 54 L 50 44 L 84 44 C 85 58 78 78 60 84 C 40 90 20 80 14 62 C 8 44 16 26 34 16 C 52 6 74 12 84 26 Z" 
        fill="#1E293B"
      />

      {/* Red accent arrow behind */}
      <path 
        d="M 16 26 L 68 64 L 56 60 L 52 54 L 28 36 Z" 
        fill="#EF4444" 
      />

      {/* Main Cyan/Blue arrow piercing through G */}
      <path 
        d="M 22 20 L 76 58 L 56 56 L 48 48 L 30 32 Z" 
        fill="#2563EB" 
      />
      {/* Arrow head tip */}
      <polygon points="76,58 54,48 64,62" fill="#1D4ED8" />
    </svg>
  );
};

export const Logo = ({ variant = "full", size = "normal" }) => {
  const { t } = useLanguage();
  const isCompact = size === "small";

  return (
    <div className={`logo-container flex items-center gap-3 ${isCompact ? 'scale-90' : ''}`}>
      <div className="logo-icon-wrapper flex items-center justify-center p-1 bg-white rounded-xl shadow-md border border-slate-300 shrink-0">
        <LogoEmblem width={isCompact ? 40 : 48} height={isCompact ? 40 : 48} />
      </div>
      
      {variant !== "icon" && (
        <div className="logo-text-wrapper flex flex-col justify-center text-left">
          <span className="logo-title font-black tracking-wider text-white text-2xl sm:text-3xl leading-none font-sans drop-shadow-sm">
            GÖRKEM
          </span>
          <span className="logo-subtitle mt-1 px-2 py-0.5 bg-blue-600 text-white font-bold text-[10px] sm:text-[11px] rounded tracking-tight uppercase whitespace-nowrap shadow-xs inline-block">
            {t.logo.subtitle}
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
