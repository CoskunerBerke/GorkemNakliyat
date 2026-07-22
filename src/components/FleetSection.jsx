import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, Scale, Maximize2, Shield, MessageSquare } from 'lucide-react';

export const FleetSection = () => {
  const { t } = useLanguage();

  const getFleetIcon = (idx) => {
    switch (idx) {
      case 0: return <Scale className="w-7 h-7 text-blue-400" />;
      case 1: return <Maximize2 className="w-7 h-7 text-indigo-400" />;
      case 2: return <Truck className="w-7 h-7 text-emerald-400" />;
      case 3: return <Shield className="w-7 h-7 text-amber-400" />;
      default: return <Truck className="w-7 h-7 text-blue-400" />;
    }
  };

  const handleFleetWhatsApp = (vehicleName) => {
    const text = `Merhaba Görkem Ağır Nakliyat, ${vehicleName} kiralama ve taşıma hizmeti hakkında bilgi almak istiyorum.`;
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="fleet" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            {t.fleet.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.fleet.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.fleet.subtitle}
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.fleet.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl hover:border-blue-500/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-950/60 transition-all">
                    {getFleetIcon(idx)}
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-full uppercase">
                    {t.fleet.equipmentBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{t.fleet.specLabels.capacity}</span>
                    <span className="text-xs font-bold text-blue-400 mt-0.5 block">{item.capacity}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{t.fleet.specLabels.length}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{item.length}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{t.fleet.specLabels.type}</span>
                    <span className="text-xs font-bold text-slate-300 mt-0.5 block truncate">{item.type}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleFleetWhatsApp(item.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold text-xs border border-slate-800 hover:border-emerald-500 transition-all shadow-md"
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
