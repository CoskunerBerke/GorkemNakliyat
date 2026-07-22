import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Mail, MessageSquare } from 'lucide-react';

export default function KariyerPage() {
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
            {t.kariyer.title}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 max-w-2xl">{t.kariyer.subtitle}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-10 max-w-3xl">{t.kariyer.intro}</p>

        {/* Open positions */}
        <div className="space-y-4 mb-12">
          {t.kariyer.positions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-5 flex items-start gap-4 hover:border-yellow-400 hover:shadow-md transition-all"
            >
              <div
                className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#e8a000' }}
              >
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4
                  className="font-black uppercase text-base mb-1"
                  style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
                >
                  {pos.title}
                </h4>
                <span
                  className="inline-block text-xs font-bold px-2 py-0.5 mb-2"
                  style={{ backgroundColor: '#e8a000', color: '#fff' }}
                >
                  {pos.dept}
                </span>
                <p className="text-gray-600 text-xs">{pos.req}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Apply section */}
        <div
          className="border-t border-gray-200 pt-8"
        >
          <h4
            className="font-black uppercase text-base mb-2"
            style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#333' }}
          >
            {t.kariyer.applyTitle}
          </h4>
          <p className="text-gray-600 text-sm mb-5">{t.kariyer.applyText}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${t.kariyer.applyEmail}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#e8a000' }}
            >
              <Mail className="w-3.5 h-3.5" />
              {t.kariyer.applyEmail}
            </a>
            <a
              href="https://wa.me/905332136801?text=Kariyer%20başvurusu%20için%20CV%20gönderiyorum."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#25d366' }}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
