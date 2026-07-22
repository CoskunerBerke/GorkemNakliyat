import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Download } from 'lucide-react';

export const MevzuatSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mevzuat" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <h1
          className="text-2xl font-black uppercase mb-2"
          style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
        >
          {t.mevzuat.title}
        </h1>
        <div style={{ width: '40px', height: '3px', backgroundColor: '#e8a000', marginBottom: '16px' }} />
        <p className="text-gray-600 text-sm mb-10">{t.mevzuat.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.mevzuat.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 flex flex-col hover:border-yellow-400 transition-colors"
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: '#e8a000' }}
              >
                <FileText className="w-6 h-6 text-white" />
              </div>

              <h3
                className="text-base font-black uppercase mb-2"
                style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
              >
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs leading-relaxed flex-1 mb-5">
                {item.desc}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#e8a000', fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                <Download className="w-3.5 h-3.5" />
                PDF İndir
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MevzuatSection;
