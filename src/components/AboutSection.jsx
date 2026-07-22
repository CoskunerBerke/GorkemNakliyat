import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, CheckCircle2, Truck, MessageSquare, Award } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open("https://wa.me/905332136801?text=Merhaba%20G%C3%B6rkem%20A%C4%9F%C4%B1r%20Nakliyat%2C%20hakk%C4%B1n%C4%B1zda%20ve%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.", "_blank");
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold uppercase text-slate-900">{t.about.hubTitle}</h4>
                  <span className="text-xs text-blue-600 font-bold">{t.about.hubSub}</span>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">{t.about.opScopeLabel}</span>
                  <span className="text-xs font-black text-slate-900 mt-1 block">{t.about.opScopeVal}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-500 block">{t.about.roadPermitLabel}</span>
                  <span className="text-xs font-black text-emerald-600 mt-1 block">{t.about.roadPermitVal}</span>
                </div>
              </div>

              {/* Executive Box */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{t.about.managerLabel}</span>
                  <h4 className="text-base font-black">{t.about.managerName}</h4>
                  <span className="text-xs text-blue-400 font-extrabold">0 533 213 68 01</span>
                </div>
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold uppercase text-xs px-3.5 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>

            {/* Address Badge */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700 border border-blue-200 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">{t.about.officeRecordTitle}</h5>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Ostim OSB Mah. 100. Yıl Bulvarı, Ostim Prestij İş Merkezi D Blok No: 55/35, Yenimahalle / ANKARA
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded text-blue-700 text-xs font-bold uppercase tracking-widest -skew-x-6 w-fit">
              <span className="skew-x-6 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                {t.about.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-wide">
              {t.about.title}
            </h2>

            <p className="text-blue-600 text-sm sm:text-base font-bold leading-relaxed">
              {t.about.subtitle}
            </p>

            <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {t.about.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-6 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
