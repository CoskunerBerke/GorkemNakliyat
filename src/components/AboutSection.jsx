import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page title style like gorkemlojistik.com.tr */}
        <h1
          className="text-2xl font-black uppercase mb-6"
          style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
        >
          {t.about.title}
        </h1>
        <div style={{ width: '40px', height: '3px', backgroundColor: '#e8a000', marginBottom: '24px' }} />

        {/* Body text */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.about.p1}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-10">{t.about.p2}</p>

        {/* Corporate info box */}
        <div className="border-t border-gray-200 pt-6">
          <h4
            className="text-base font-black uppercase mb-4"
            style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#333' }}
          >
            {t.about.corporateTitle}
          </h4>
          <div className="space-y-1 text-sm text-gray-700">
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
};

export default AboutSection;
