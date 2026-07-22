import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function HakkimizdaPage() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page header bar */}
        <div
          className="mb-8 px-5 py-3 flex items-center gap-3"
          style={{ backgroundColor: '#f5f5f5', borderLeft: '4px solid #e8a000' }}
        >
          <span
            className="text-xl font-black uppercase"
            style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
          >
            {t.about.title}
          </span>
        </div>

        {/* Body text */}
        <div className="max-w-4xl space-y-5">
          <p className="text-gray-700 text-sm leading-relaxed">{t.about.p1}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{t.about.p2}</p>
        </div>

        {/* Corporate info */}
        <div className="mt-10 border-t border-gray-200 pt-8 max-w-xl">
          <h4
            className="text-base font-black uppercase mb-4"
            style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#333' }}
          >
            {t.about.corporateTitle}
          </h4>
          <div className="space-y-2 text-sm text-gray-700">
            <p>{t.about.unvan}</p>
            <p>{t.about.adres}</p>
            <p>{t.about.vergiDairesi}</p>
            <p>{t.about.vergiNo}</p>
            <p>{t.about.ticSicilNo}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
