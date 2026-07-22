import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Truck, Award, PhoneCall, MessageSquare, MapPin } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    const text = "Merhaba Görkem Ağır Nakliyat, ağır yük ve uluslararası taşımacılık hakkında teklif almak istiyorum.";
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="hero" className="bg-slate-950 text-white py-16 md:py-24 border-b border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
        
        {/* Simple Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-blue-400 text-xs font-semibold tracking-wide">
          <MapPin className="w-3.5 h-3.5" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Big Clean Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white max-w-4xl mx-auto">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all text-sm"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{t.hero.ctaPrimary}</span>
          </button>

          <a
            href="tel:05332136801"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-8 py-4 rounded-xl transition-all text-sm"
          >
            <PhoneCall className="w-5 h-5 text-blue-400" />
            <span>Cüneyt Erdem: 0 533 213 68 01</span>
          </a>
        </div>

        {/* Clean Stats Strip */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-800/80 text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">{t.hero.stat1Title}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat1Desc}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">{t.hero.stat2Title}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat2Desc}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">{t.hero.stat3Title}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat3Desc}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{t.hero.stat4Title}</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stat4Desc}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
