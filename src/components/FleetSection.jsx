import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, Scale, Maximize2, Shield, MessageSquare } from 'lucide-react';

export const FleetSection = () => {
  const { t } = useLanguage();

  const icons = [
    <Scale className="w-7 h-7 text-red-700" />,
    <Maximize2 className="w-7 h-7 text-red-700" />,
    <Truck className="w-7 h-7 text-red-700" />,
    <Shield className="w-7 h-7 text-red-700" />,
  ];

  const handleWhatsApp = (vehicleName) => {
    const text = `Merhaba Görkem Ağır Nakliyat, ${vehicleName} hakkında bilgi almak istiyorum.`;
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="fleet" className="py-16 md:py-20 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-red-700 text-sm font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            {t.fleet.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase" style={{ fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif" }}>
            {t.fleet.title}
          </h2>
          <div className="w-12 h-1 bg-red-700 mt-3" />
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.fleet.items.map((item, idx) => (
            <div key={idx} className="border border-gray-200 hover:border-red-300 hover:shadow-md transition-all bg-gray-50">
              {/* Top bar */}
              <div className="bg-red-700 px-5 py-3 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded">
                  {icons[idx] || <Truck className="w-7 h-7 text-white" />}
                </div>
                <h3
                  className="text-white font-black uppercase text-base"
                  style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
                >
                  {item.name}
                </h3>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-[10px] text-gray-500 font-bold uppercase">{t.fleet.specLabels.capacity}</div>
                    <div className="text-red-700 font-black text-sm mt-0.5" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>{item.capacity}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-gray-500 font-bold uppercase">{t.fleet.specLabels.length}</div>
                    <div className="text-gray-900 font-black text-sm mt-0.5" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>{item.length}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-gray-500 font-bold uppercase">{t.fleet.specLabels.type}</div>
                    <div className="text-gray-700 font-bold text-xs mt-0.5 truncate">{item.type}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsApp(item.name)}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  {t.fleet.inquireWhatsApp}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FleetSection;
