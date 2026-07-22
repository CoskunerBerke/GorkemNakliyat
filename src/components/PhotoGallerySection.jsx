import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Image as ImageIcon, Upload, Eye, CheckCircle } from 'lucide-react';

export const PhotoGallerySection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const gallerySlots = [
    { id: 1, category: 'heavy', title: 'Ağır Yük Nakliyesi - Proje 1' },
    { id: 2, category: 'lowbed', title: 'Lowbed Yükleme Görseli 1' },
    { id: 3, category: 'international', title: 'Uluslararası Sevk - Transit 1' },
    { id: 4, category: 'heavy', title: 'Gabari Dışı Trafo Taşıma' },
    { id: 5, category: 'lowbed', title: 'Teleskopik Treyler İş Makinesi' },
    { id: 6, category: 'international', title: 'Sınır Ötesi Ağır Nakliye' },
  ];

  const filteredSlots = activeTab === 'all' 
    ? gallerySlots 
    : gallerySlots.filter(s => s.category === activeTab);

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            {t.gallery.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Informational Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-800/60 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{t.gallery.noticeTitle}</h4>
              <p className="text-xs text-slate-300 mt-0.5 max-w-xl">{t.gallery.noticeDesc}</p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-blue-600/20 text-blue-300 text-xs font-bold border border-blue-500/40 whitespace-nowrap">
            Görkem Nakliyat Medya Alanı
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.gallery.allTab}
          </button>
          <button
            onClick={() => setActiveTab('heavy')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'heavy'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.gallery.heavyTab}
          </button>
          <button
            onClick={() => setActiveTab('lowbed')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'lowbed'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.gallery.lowbedTab}
          </button>
          <button
            onClick={() => setActiveTab('international')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'international'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {t.gallery.internationalTab}
          </button>
        </div>

        {/* Photo Slot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSlots.map((slot) => (
            <div
              key={slot.id}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/40 transition-all group"
            >
              <div className="aspect-[4/3] bg-slate-950 p-6 flex flex-col items-center justify-center text-center relative border-b border-slate-850">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-3 group-hover:scale-110 group-hover:text-blue-400 transition-all">
                  <ImageIcon className="w-7 h-7" />
                </div>

                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-md mb-1">
                  {t.gallery.slotText}
                </span>

                <h4 className="text-slate-300 font-bold text-sm mt-1">{slot.title}</h4>
                <p className="text-slate-500 text-xs mt-0.5">{t.gallery.slotHint}</p>
              </div>
              <div className="p-3 bg-slate-900 text-center">
                <span className="text-[11px] font-semibold text-slate-400">
                  Görkem Ağır Nakliyat & Uluslararası Taşımacılık
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhotoGallerySection;
