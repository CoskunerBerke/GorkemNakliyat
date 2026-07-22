import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ShieldCheck, Clock, Award, ArrowRight, PhoneCall, ChevronRight } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Certification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-600/40 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95 text-base"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="tel:05332136801"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-6 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95 text-base"
              >
                <PhoneCall className="w-5 h-5 text-blue-400" />
                <span>0 533 213 68 01</span>
              </a>
            </div>

            {/* Quick Contact & Address Reminder */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sigortalı & Lisanslı Taşıma</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>Lowbed & Teleskopik Treyler</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>OSTİM Ankara Merkez</span>
              </div>
            </div>

          </div>

          {/* Right Visual Card / Photo Slot */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 border border-slate-800 shadow-2xl overflow-hidden group">
              
              {/* Decorative Accent Ring */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all" />

              {/* Photo Area Box */}
              <div className="relative aspect-[4/3] rounded-xl bg-slate-900/90 border-2 border-dashed border-slate-700/80 flex flex-col items-center justify-center p-6 text-center group-hover:border-blue-500/60 transition-colors">
                
                <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 mb-4 shadow-lg border border-blue-800/50">
                  <Truck className="w-8 h-8" />
                </div>
                
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-md uppercase mb-2">
                  Fotoğraf Alanı - Yüklenecek
                </span>
                
                <h4 className="text-slate-200 font-bold text-sm sm:text-base">
                  Görkem Ağır Nakliyat Araç Görseli
                </h4>
                <p className="text-slate-400 text-xs mt-1 max-w-xs">
                  Fotoğrafları gönderdiğinizde bu alana yüksek çözünürlüklü filo görseli yerleştirilecektir.
                </p>
              </div>

              {/* Quick Specs Highlight Box */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Genel Müdürü / Contact</span>
                  <span className="text-slate-200 font-bold text-sm">Cüneyt Erdem</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Direkt GSM / Phone</span>
                  <span className="text-blue-400 font-bold text-sm">0 533 213 68 01</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid Ticker */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl">
          <div className="text-center p-3 border-r border-slate-800 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-blue-400">{t.hero.stat1Title}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{t.hero.stat1Desc}</div>
          </div>
          <div className="text-center p-3 border-r border-slate-800 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-white">{t.hero.stat2Title}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{t.hero.stat2Desc}</div>
          </div>
          <div className="text-center p-3 border-r border-slate-800 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400">{t.hero.stat3Title}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{t.hero.stat3Desc}</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-4xl font-extrabold text-amber-400">{t.hero.stat4Title}</div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{t.hero.stat4Desc}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
