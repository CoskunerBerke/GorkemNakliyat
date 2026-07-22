import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, ShieldCheck, Globe, Compass, Wrench, Navigation, CheckCircle2, X } from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);

  const icons = {
    'agir-nakliyat': <Truck className="w-7 h-7 text-red-700" />,
    'lowbed': <Wrench className="w-7 h-7 text-red-700" />,
    'uluslararasi': <Globe className="w-7 h-7 text-red-700" />,
    'oncu-escort': <ShieldCheck className="w-7 h-7 text-red-700" />,
    'proje-lojistigi': <Compass className="w-7 h-7 text-red-700" />,
    'transit-depolama': <Navigation className="w-7 h-7 text-red-700" />,
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-red-700 text-sm font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            {t.services.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase" style={{ fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif" }}>
            {t.services.title}
          </h2>
          <div className="w-12 h-1 bg-red-700 mt-3" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 hover:border-red-300 hover:shadow-md transition-all p-6 flex flex-col group"
            >
              <div className="mb-4">
                {icons[service.id] || <Truck className="w-7 h-7 text-red-700" />}
              </div>
              <h3
                className="text-base font-black text-gray-900 uppercase mb-2 group-hover:text-red-700 transition-colors"
                style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                {service.shortDesc}
              </p>
              <button
                onClick={() => setActiveModal(service)}
                className="text-left text-red-700 text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                {t.services.moreInfoBtn} →
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white max-w-lg w-full p-8 relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">{icons[activeModal.id]}</div>
            <h3 className="text-xl font-black uppercase text-gray-900 mb-1" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
              {activeModal.title}
            </h3>
            <div className="w-8 h-0.5 bg-red-700 mb-4" />
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{activeModal.shortDesc}</p>

            <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3">{t.services.modalScopeTitle}</p>
            <ul className="space-y-2 mb-6">
              {activeModal.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a
                href="#calculator"
                onClick={() => setActiveModal(null)}
                className="flex-1 text-center bg-red-700 hover:bg-red-800 text-white font-bold py-3 text-xs uppercase tracking-wider"
              >
                {t.services.modalQuoteBtn}
              </a>
              <a
                href="tel:05332136801"
                className="flex-1 text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 text-xs uppercase tracking-wider"
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
