import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Mail, MessageSquare } from 'lucide-react';

export const KariyerSection = () => {
  const { t } = useLanguage();

  return (
    <section id="kariyer" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <h1
          className="text-2xl font-black uppercase mb-2"
          style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
        >
          {t.kariyer.title}
        </h1>
        <div style={{ width: '40px', height: '3px', backgroundColor: '#e8a000', marginBottom: '16px' }} />
        <p className="text-gray-600 text-sm mb-4">{t.kariyer.subtitle}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-10">{t.kariyer.intro}</p>

        {/* Open positions */}
        <div className="space-y-4 mb-10">
          {t.kariyer.positions.map((pos, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-5 flex items-start gap-4 hover:border-yellow-400 transition-colors">
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

        {/* How to apply */}
        <div className="border-t border-gray-200 pt-8">
          <h4
            className="font-black uppercase text-base mb-2"
            style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#333' }}
          >
            {t.kariyer.applyTitle}
          </h4>
          <p className="text-gray-600 text-sm mb-4">{t.kariyer.applyText}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${t.kariyer.applyEmail}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase text-white"
              style={{ backgroundColor: '#e8a000' }}
            >
              <Mail className="w-3.5 h-3.5" />
              {t.kariyer.applyEmail}
            </a>
            <a
              href="https://wa.me/905332136801?text=Kariyer%20başvurusu%20için%20CV%20gönderiyorum."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase text-white"
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
};

export default KariyerSection;
