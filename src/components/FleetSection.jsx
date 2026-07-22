import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, Scale, Maximize2, Shield, MessageSquare } from 'lucide-react';

export const FleetSection = () => {
  const { t } = useLanguage();

  const getFleetIcon = (idx) => {
    switch (idx) {
      case 0: return <Scale className="w-6 h-6 text-blue-400" />;
      case 1: return <Maximize2 className="w-6 h-6 text-indigo-400" />;
      case 2: return <Truck className="w-6 h-6 text-emerald-400" />;
      case 3: return <Shield className="w-6 h-6 text-amber-400" />;
      default: return <Truck className="w-6 h-6 text-blue-400" />;
    }
  };

  const handleFleetWhatsApp = (vehicleName) => {
    const text = `Merhaba Görkem Ağır Nakliyat, ${vehicleName} kiralama ve taşıma hizmeti hakkında bilgi almak istiyorum.`;
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="fleet" className="py-16 md:py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
            {t.fleet.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.fleet.title}
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {t.fleet.subtitle}
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.fleet.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {getFleetIcon(idx)}
                  </div>
                  <span className="px-3 py-1 bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-bold rounded-full uppercase">
                    {t.fleet.equipmentBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.capacity}</span>
                    <span className="text-xs font-bold text-blue-400 mt-0.5 block">{item.capacity}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.length}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{item.length}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">{t.fleet.specLabels.type}</span>
                    <span className="text-xs font-bold text-slate-300 mt-0.5 block truncate">{item.type}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleFleetWhatsApp(item.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
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
