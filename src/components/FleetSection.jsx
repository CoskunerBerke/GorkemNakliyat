import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, Scale, Maximize2, Shield, MessageSquare } from 'lucide-react';

export const FleetSection = () => {
  const { t } = useLanguage();

  const getFleetIcon = (idx) => {
    switch (idx) {
      case 0: return <Scale className="w-6 h-6 text-blue-600" />;
      case 1: return <Maximize2 className="w-6 h-6 text-blue-600" />;
      case 2: return <Truck className="w-6 h-6 text-blue-600" />;
      case 3: return <Shield className="w-6 h-6 text-blue-600" />;
      default: return <Truck className="w-6 h-6 text-blue-600" />;
    }
  };

  const handleFleetWhatsApp = (vehicleName) => {
    const text = `Merhaba Görkem Ağır Nakliyat, ${vehicleName} kiralama ve taşıma hizmeti hakkında bilgi almak istiyorum.`;
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="fleet" className="py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded text-blue-700 text-xs font-bold uppercase tracking-widest -skew-x-6 mb-4">
            <span className="skew-x-6">{t.fleet.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-slate-900">
            {t.fleet.title}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-4 leading-relaxed">
            {t.fleet.subtitle}
          </p>
        </div>

        {/* Fleet Cards (Clean White Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.fleet.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                    {getFleetIcon(idx)}
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 border border-blue-200 text-[10px] font-black uppercase rounded">
                    {t.fleet.equipmentBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black uppercase text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200 text-center">
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[9px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.capacity}</span>
                    <span className="text-xs font-black text-blue-600 mt-0.5 block">{item.capacity}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[9px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.length}</span>
                    <span className="text-xs font-black text-slate-900 mt-0.5 block">{item.length}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[9px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.type}</span>
                    <span className="text-xs font-black text-slate-700 mt-0.5 block truncate">{item.type}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleFleetWhatsApp(item.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase text-xs shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.fleet.inquireWhatsApp}</span>
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
