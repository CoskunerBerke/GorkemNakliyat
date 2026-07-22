import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Truck, Scale, Maximize2, Shield, Image as ImageIcon } from 'lucide-react';

export const FleetSection = () => {
  const { t } = useLanguage();

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
              className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              {/* Photo Area / Placeholder */}
              <div className="relative aspect-[16/9] bg-slate-900 border-b border-slate-800 flex flex-col items-center justify-center p-6 text-center group">
                <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center text-blue-400 mb-3 border border-slate-800 shadow-md">
                  <Truck className="w-8 h-8" />
                </div>
                
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-md uppercase mb-1">
                  {t.fleet.photoPendingBadge}
                </span>

                <span className="text-xs text-slate-400 font-medium">
                  {item.name} Görseli
                </span>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{t.fleet.specLabels.capacity}</span>
                    <span className="text-xs font-bold text-blue-400 mt-0.5 block">{item.capacity}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{t.fleet.specLabels.length}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{item.length}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">{t.fleet.specLabels.type}</span>
                    <span className="text-xs font-bold text-slate-300 mt-0.5 block truncate">{item.type}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FleetSection;
