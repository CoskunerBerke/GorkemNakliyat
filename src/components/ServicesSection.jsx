import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ShieldCheck, Globe, Compass, Wrench, Navigation, CheckCircle2, ArrowRight, X } from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'agir-nakliyat': return <Truck className="w-6 h-6 text-blue-600" />;
      case 'lowbed': return <Wrench className="w-6 h-6 text-blue-600" />;
      case 'uluslararasi': return <Globe className="w-6 h-6 text-blue-600" />;
      case 'oncu-escort': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'proje-lojistigi': return <Compass className="w-6 h-6 text-blue-600" />;
      case 'transit-depolama': return <Navigation className="w-6 h-6 text-blue-600" />;
      default: return <Truck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black text-blue-600 uppercase tracking-wider block">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
            {t.services.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="text-base font-extrabold uppercase text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setActiveModal(service)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-blue-600 text-slate-900 hover:text-white font-bold text-xs border border-slate-300 hover:border-blue-600 transition-all shadow-2xs"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 bg-slate-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
              {getServiceIcon(activeModal.id)}
            </div>

            <h3 className="text-xl font-black uppercase text-slate-900 mb-2">{activeModal.title}</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-6 font-medium">{activeModal.shortDesc}</p>

            <h4 className="text-xs font-black text-blue-600 uppercase tracking-wider mb-3">{t.services.modalScopeTitle}</h4>
            <ul className="space-y-2.5 mb-8">
              {activeModal.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#calculator"
                onClick={() => setActiveModal(null)}
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs shadow-xs"
              >
                {t.services.modalQuoteBtn}
              </a>
              <a
                href="tel:05332136801"
                className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3 rounded-xl text-xs border border-slate-300"
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
