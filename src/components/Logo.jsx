import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LogoEmblem = ({ className = "h-10 sm:h-12 w-auto" }) => {
  return (
    <img 
      src="/logo.jpg" 
      alt="Görkem Ağır Nakliyat Logo" 
      className={`object-contain rounded-lg shadow-sm ${className}`}
    />
  );
};

export const Logo = ({ variant = "full", size = "normal" }) => {
  const { t } = useLanguage();
  const isCompact = size === "small";

  return (
    <div className={`logo-container flex items-center gap-3 ${isCompact ? 'scale-90' : ''}`}>
      {/* Logo Emblem Box with exact uploaded photo */}
      <div className="logo-icon-wrapper flex items-center justify-center p-1 bg-slate-900 rounded-xl shadow-md border border-slate-700 shrink-0">
        <LogoEmblem className={isCompact ? "h-9 w-auto" : "h-11 sm:h-13 w-auto"} />
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
