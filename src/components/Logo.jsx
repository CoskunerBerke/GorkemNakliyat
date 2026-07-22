import React from 'react';

export const LogoEmblem = ({ width = 50, height = 40, className = "" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer oval ring */}
      <ellipse cx="60" cy="45" rx="48" ry="36" stroke="#2B364B" strokeWidth="9" fill="none"/>
      
      {/* G inner curve fill / shape */}
      <path 
        d="M 75 30 A 28 22 0 1 0 78 58 L 56 58 L 56 46 L 85 46 A 34 28 0 0 1 32 45 A 34 28 0 0 1 80 24 Z" 
        fill="#2B364B" 
      />

      {/* Red shadow arrow */}
      <path 
        d="M 5 18 L 62 48 L 44 48 L 36 44 L 20 28 Z" 
        fill="#DC2626" 
      />

      {/* Main Cyan/Blue arrow piercing through */}
      <path 
        d="M 10 16 L 76 52 L 58 48 L 50 42 L 25 24 Z" 
        fill="#3B82F6" 
      />
      {/* Arrow head highlight */}
      <polygon points="76,52 56,42 66,54" fill="#1D4ED8" />
    </svg>
  );
};

export const Logo = ({ variant = "full", size = "normal" }) => {
  const isCompact = size === "small";
  
  return (
    <div className={`logo-container flex items-center gap-3 ${isCompact ? 'scale-90' : ''}`}>
      <div className="logo-icon-wrapper relative flex items-center justify-center p-1 bg-white rounded-lg shadow-sm border border-slate-200">
        <LogoEmblem width={isCompact ? 42 : 54} height={isCompact ? 34 : 42} />
      </div>
      
      {variant !== "icon" && (
        <div className="logo-text-wrapper flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <span className="logo-title font-extrabold tracking-wider text-slate-900 text-2xl leading-none font-sans">
              GÖRKEM
            </span>
          </div>
          <div className="logo-subtitle mt-1 px-2 py-0.5 bg-blue-600 text-white font-semibold text-[10px] sm:text-[11px] rounded tracking-tight uppercase whitespace-nowrap shadow-xs">
            Ağır Nakliyat & Uluslararası Taşımacılık
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
