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
    <section id="fleet" className="py-16 md:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black text-blue-600 uppercase tracking-wider block">
            {t.fleet.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
            {t.fleet.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            {t.fleet.subtitle}
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.fleet.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-2xs hover:border-blue-400 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                    {getFleetIcon(idx)}
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-extrabold rounded-full uppercase">
                    {t.fleet.equipmentBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black uppercase text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.capacity}</span>
                    <span className="text-xs font-black text-blue-600 mt-0.5 block">{item.capacity}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.length}</span>
                    <span className="text-xs font-black text-slate-900 mt-0.5 block">{item.length}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.type}</span>
                    <span className="text-xs font-black text-slate-700 mt-0.5 block truncate">{item.type}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleFleetWhatsApp(item.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all"
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
