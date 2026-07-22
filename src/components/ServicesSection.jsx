import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ShieldCheck, Globe, Compass, Wrench, Navigation, CheckCircle2, ArrowRight, X } from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'agir-nakliyat': return <Truck className="w-8 h-8 text-blue-400" />;
      case 'lowbed': return <Wrench className="w-8 h-8 text-indigo-400" />;
      case 'uluslararasi': return <Globe className="w-8 h-8 text-emerald-400" />;
      case 'oncu-escort': return <ShieldCheck className="w-8 h-8 text-amber-400" />;
      case 'proje-lojistigi': return <Compass className="w-8 h-8 text-cyan-400" />;
      case 'transit-depolama': return <Navigation className="w-8 h-8 text-purple-400" />;
      default: return <Truck className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-950/40 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-950/60 transition-all">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setActiveModal(service)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-blue-600 text-slate-200 hover:text-white font-bold text-xs border border-slate-800 hover:border-blue-500 transition-all"
              >
                <span>Detaylı Bilgi & Teklif</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail Window */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center mb-4">
              {getServiceIcon(activeModal.id)}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{activeModal.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{activeModal.shortDesc}</p>

            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">Hizmet Kapsamı ve Özellikler</h4>
            <ul className="space-y-3 mb-8">
              {activeModal.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#calculator"
                onClick={() => setActiveModal(null)}
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg text-sm"
              >
                Bu Hizmet İçin Teklif Al
              </a>
              <a
                href="tel:05332136801"
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 rounded-xl text-sm"
              >
                Cüneyt Erdem'i Ara
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
