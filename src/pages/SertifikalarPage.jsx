import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award } from 'lucide-react';

export default function SertifikalarPage() {
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
            {t.sertifikalar.title}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-10 max-w-2xl">{t.sertifikalar.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.sertifikalar.items.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-5 bg-gray-50 flex items-start gap-4 hover:border-yellow-400 hover:shadow-md transition-all"
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
}
