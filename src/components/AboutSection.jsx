import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, CheckCircle2, Truck, MessageSquare } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    window.open("https://wa.me/905332136801?text=Merhaba%20G%C3%B6rkem%20A%C4%9F%C4%B1r%20Nakliyat%2C%20hakk%C4%B1n%C4%B1zda%20bilgi%20almak%20istiyorum.", "_blank");
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Contact & Address Card */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold uppercase text-slate-900">{t.about.hubTitle}</h4>
                  <span className="text-xs text-blue-600 font-bold">{t.about.hubSub}</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-700 font-semibold">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    Ostim OSB Mah. 100. Yıl Bulvarı, Ostim Prestij İş Merkezi D Blok No: 55/35, Yenimahalle / ANKARA
                  </p>
                </div>
              </div>

              {/* Manager Card */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">{t.about.managerLabel}</span>
                  <h4 className="text-base font-extrabold text-slate-900">{t.about.managerName}</h4>
                  <a href="tel:05332136801" className="text-xs text-blue-600 font-extrabold hover:underline">0 533 213 68 01</a>
                </div>
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2.5 rounded-lg transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Corporate Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <span className="text-xs font-black text-blue-600 uppercase tracking-wider block">
              {t.about.badge}
            </span>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
              {t.about.title}
            </h2>

            <p className="text-blue-600 text-sm sm:text-base font-bold leading-relaxed">
              {t.about.subtitle}
            </p>

            <div className="space-y-4 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.about.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">{feat.title}</h4>
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
