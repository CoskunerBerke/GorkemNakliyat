import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ShieldCheck, Globe, Compass, Wrench, Navigation, CheckCircle2, ArrowRight, X } from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'agir-nakliyat': return <Truck className="w-6 h-6 text-blue-400" />;
      case 'lowbed': return <Wrench className="w-6 h-6 text-indigo-400" />;
      case 'uluslararasi': return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'oncu-escort': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'proje-lojistigi': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'transit-depolama': return <Navigation className="w-6 h-6 text-purple-400" />;
      default: return <Truck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setActiveModal(service)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 hover:bg-blue-600 text-slate-200 hover:text-white font-bold text-xs border border-slate-800 hover:border-blue-500 transition-all"
              >
                <span>{t.services.moreInfoBtn}</span>
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

            <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center mb-4">
              {getServiceIcon(activeModal.id)}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{activeModal.title}</h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-6">{activeModal.shortDesc}</p>

            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">{t.services.modalScopeTitle}</h4>
            <ul className="space-y-2.5 mb-8">
              {activeModal.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#calculator"
                onClick={() => setActiveModal(null)}
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs shadow-md"
              >
                {t.services.modalQuoteBtn}
              </a>
              <a
                href="tel:05332136801"
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 rounded-xl text-xs"
              >
                {t.services.modalCallBtn}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
