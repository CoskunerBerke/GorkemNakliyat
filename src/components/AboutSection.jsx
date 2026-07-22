import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MapPin, Phone, UserCheck, CheckCircle2, Truck, Image as ImageIcon } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image / Photo Placeholder Slots */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Image Slot */}
            <div className="relative rounded-2xl bg-slate-950 p-4 border border-slate-800 shadow-2xl overflow-hidden group">
              <div className="aspect-[4/3] rounded-xl bg-slate-900 border-2 border-dashed border-slate-700/80 flex flex-col items-center justify-center p-6 text-center group-hover:border-blue-500/60 transition-colors">
                <div className="w-14 h-14 rounded-full bg-blue-950/80 flex items-center justify-center text-blue-400 mb-3 border border-blue-800">
                  <ImageIcon className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold rounded-md uppercase mb-2">
                  {t.about.photoPlaceholderNotice}
                </span>
                <p className="text-slate-400 text-xs max-w-xs">
                  {t.about.photoPlaceholderSub}
                </p>
              </div>

              {/* Manager Card Overlay */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-400 block">{t.about.managerLabel}</span>
                  <h4 className="text-lg font-bold text-white">{t.about.managerName}</h4>
                </div>
                <a 
                  href="tel:05332136801" 
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>0 533 213 68 01</span>
                </a>
              </div>
            </div>

            {/* Secondary Location info badge */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-900 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-200">Merkez Ofis & OSTİM Kaydı</h5>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Ostim OSB Mah. 100. Yıl Bulvarı, Ostim Prestij İş Merkezi D Blok No: 55/35, Yenimahalle / Ankara
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950 text-blue-400 border border-blue-800 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.about.title}
            </h2>

            <p className="text-blue-400 text-base sm:text-lg font-medium leading-relaxed">
              {t.about.subtitle}
            </p>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Grid Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {t.about.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <h4 className="font-bold text-white text-sm sm:text-base">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 pl-7 leading-relaxed">{feat.desc}</p>
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
