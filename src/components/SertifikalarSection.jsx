import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award } from 'lucide-react';

export const SertifikalarSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sertifikalar" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <h1
          className="text-2xl font-black uppercase mb-2"
          style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
        >
          {t.sertifikalar.title}
        </h1>
        <div style={{ width: '40px', height: '3px', backgroundColor: '#e8a000', marginBottom: '16px' }} />
        <p className="text-gray-600 text-sm mb-10">{t.sertifikalar.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.sertifikalar.items.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-5 bg-gray-50 flex items-start gap-4 hover:border-yellow-400 transition-colors"
            >
              <div
                className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#e8a000' }}
              >
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4
                  className="font-black uppercase text-sm mb-1"
                  style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
                >
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SertifikalarSection;
