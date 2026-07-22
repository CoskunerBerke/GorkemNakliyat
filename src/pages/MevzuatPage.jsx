import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Download } from 'lucide-react';

export default function MevzuatPage() {
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
            {t.mevzuat.title}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-10 max-w-2xl">{t.mevzuat.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.mevzuat.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 flex flex-col hover:border-yellow-400 hover:shadow-md transition-all"
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
}
