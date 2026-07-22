import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Corporate Text */}
          <div className="space-y-5">
            <p
              className="text-red-700 text-sm font-bold uppercase tracking-widest"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              {t.about.badge}
            </p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-tight"
              style={{ fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif" }}
            >
              {t.about.title}
            </h2>
            <div className="w-12 h-1 bg-red-700" />
            
            <p className="text-gray-600 text-sm leading-relaxed">{t.about.p1}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{t.about.p2}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {t.about.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-gray-900 uppercase block">{feat.title}</span>
                    <span className="text-xs text-gray-500">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact & Address */}
          <div className="space-y-4">
            {/* Contact Card */}
            <div className="border border-gray-200 bg-gray-50 p-6 space-y-4">
              <h4
                className="text-gray-900 font-black uppercase text-base border-b border-gray-200 pb-3"
                style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {t.about.hubTitle}
              </h4>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                  <span>Ostim OSB Mah. 100. Yıl Bulvarı, Ostim Prestij İş Merkezi D Blok No: 55/35, Yenimahalle / ANKARA</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase font-bold block">{t.about.managerLabel}</span>
                    <span className="text-base font-black text-gray-900" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                      {t.about.managerName}
                    </span>
                  </div>
                  <div className="text-right">
                    <a href="tel:05332136801" className="text-red-700 font-bold text-sm block hover:underline">0 533 213 68 01</a>
                    <a href="tel:03123854483" className="text-gray-500 text-xs block hover:underline">0 312 385 44 83</a>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://wa.me/905332136801?text=Merhaba%20G%C3%B6rkem%20A%C4%9F%C4%B1r%20Nakliyat%2C%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 text-xs uppercase tracking-wider transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:05332136801"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2.5 text-xs uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {t.contact.phoneTitle}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
