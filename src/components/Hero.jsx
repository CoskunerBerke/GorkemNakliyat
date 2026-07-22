import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ShieldCheck, Award, ArrowRight, PhoneCall, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const openWhatsAppDirect = () => {
    const text = "Merhaba Görkem Ağır Nakliyat, ağir yük ve uluslararası taşımacılık hakkında teklif almak istiyorum.";
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

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

            {/* CTA Buttons - Directly linked to WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={openWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95 text-base"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

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

          {/* Right Visual Card - Clean Vector Graphics & Direct Contact Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Görkem Lojistik Destek</h4>
                    <span className="text-xs text-blue-400 font-medium">Ankara OSTİM Merkez Hattı</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[11px] font-bold rounded-full border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>7/24 Aktif</span>
                </span>
              </div>

              {/* Key Service Badges */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Ağır Yük & Gabari Dışı Taşımacılık</span>
                  </div>
                  <span className="text-[10px] font-bold bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">150 Ton</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Uzatmalı Teleskopik Lowbed Filosu</span>
                  </div>
                  <span className="text-[10px] font-bold bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">35 Metre</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">Öncü Araç (Escort) & Yol İzinleri</span>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">Resmi İzin</span>
                </div>
              </div>

              {/* Direct Executive Contact Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Genel Müdürü / Yetkili</span>
                    <h5 className="text-base font-extrabold text-white">Cüneyt Erdem</h5>
                  </div>
                  <span className="text-xs font-extrabold text-blue-400">0 533 213 68 01</span>
                </div>

                <button
                  onClick={openWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg text-xs shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp ile Doğrudan Ulaş</span>
                </button>
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
