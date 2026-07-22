import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ShieldCheck, ArrowRight, PhoneCall, MessageSquare, CheckCircle2, Cpu, Eye, ShieldAlert, Award } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const openWhatsAppDirect = () => {
    const text = "Merhaba Görkem Ağır Nakliyat, ağır yük ve uluslararası taşımacılık hakkında teklif almak istiyorum.";
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Main Hero Section - Clean Light Style */}
      <section id="hero" className="bg-white border-b border-slate-200 py-12 md:py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Slanted Badge Chip (Quattro Garaj style) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded text-blue-700 text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
                <span className="skew-x-6 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  {t.hero.badge}
                </span>
              </div>

              {/* Main Bold Uppercase Headline */}
              <h1 className="text-3xl md:text-5xl font-black uppercase text-slate-900 leading-tight tracking-wide">
                {t.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  onClick={openWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:05332136801"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md active:scale-95 transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>0 533 213 68 01</span>
                </a>
              </div>

              {/* Key Trust Tags */}
              <div className="flex flex-wrap items-center gap-4 mt-4 pt-6 border-t border-slate-200 text-xs text-slate-600 font-bold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{t.hero.insuredLabel}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>{t.hero.lowbedLabel}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>{t.hero.ostimLabel}</span>
                </div>
              </div>

            </div>

            {/* Right Card - Logo & Direct Support Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xl space-y-6">
                
                {/* Logo & Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="Görkem Nakliyat Logo" className="h-12 w-auto object-contain rounded-lg border border-slate-300 bg-slate-900 p-1" />
                    <div>
                      <h4 className="text-base font-extrabold uppercase text-slate-900">{t.hero.supportTitle}</h4>
                      <span className="text-xs text-blue-600 font-bold">{t.hero.supportSub}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded border border-emerald-300">
                    {t.hero.activeBadge}
                  </span>
                </div>

                {/* Key Specs */}
                <div className="space-y-2.5 text-xs font-semibold">
                  <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-700">{t.hero.heavyItem1}</span>
                    <span className="font-extrabold text-blue-600">{t.hero.heavyItem1Cap}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-700">{t.hero.heavyItem2}</span>
                    <span className="font-extrabold text-indigo-600">{t.hero.heavyItem2Cap}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-700">{t.hero.heavyItem3}</span>
                    <span className="font-extrabold text-emerald-600">{t.hero.heavyItem3Cap}</span>
                  </div>
                </div>

                {/* Executive Box */}
                <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t.hero.managerTitle}</span>
                      <h5 className="text-base font-black">Cüneyt Erdem</h5>
                    </div>
                    <span className="text-xs font-extrabold text-blue-400">0 533 213 68 01</span>
                  </div>

                  <button
                    onClick={openWhatsAppDirect}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase text-xs py-3 rounded-lg shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.hero.reachDirect}</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Strip (4 White Cards - Quattro Garaj Style) */}
      <section className="bg-slate-50 py-10 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-500/40 shadow-xs transition-all duration-300 group">
              <div className="shrink-0 p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">Güzergah & İzin Analizi</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Resmi izinler ve köprü/yol mühendislik hesaplamaları.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-500/40 shadow-xs transition-all duration-300 group">
              <div className="shrink-0 p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">Şeffaf Operasyon Süreci</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Yükleme anından varış noktasına kadar 7/24 takip.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-500/40 shadow-xs transition-all duration-300 group">
              <div className="shrink-0 p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                <ShieldAlert className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">Sigortalı & Lisanslı Taşıma</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">CMR ve uluslararası nakliyat sigortası güvencesi.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-500/40 shadow-xs transition-all duration-300 group">
              <div className="shrink-0 p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">Uzman Operasyon Kadrosu</h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Ağır nakliyatta 25 yılı aşkın tecrübe ve güven.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
