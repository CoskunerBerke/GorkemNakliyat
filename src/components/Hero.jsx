import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    const text = "Merhaba Görkem Ağır Nakliyat, ağır yük ve uluslararası taşımacılık hakkında teklif almak istiyorum.";
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Hero: Dark overlay gradient, no photo, clean corporate */}
      <section
        id="hero"
        className="relative bg-gray-900 text-white"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          minHeight: '520px',
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.05) 60px, rgba(255,255,255,0.05) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.05) 60px, rgba(255,255,255,0.05) 61px)'
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left: Main Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <p className="text-red-400 text-sm font-bold uppercase tracking-widest">
              {t.hero.badge}
            </p>
            <h1
              className="text-3xl md:text-5xl font-black leading-tight uppercase"
              style={{ fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif" }}
            >
              {t.hero.title}
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold px-7 py-3.5 text-sm uppercase tracking-wide transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                {t.hero.ctaPrimary}
              </button>
              <a
                href="tel:05332136801"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-7 py-3.5 text-sm uppercase tracking-wide transition-all"
              >
                <Phone className="w-4 h-4" />
                0 533 213 68 01
              </a>
            </div>
          </div>

          {/* Right: Simple Info Box */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-sm border border-white/20 p-6 space-y-4">
            <h3
              className="text-white font-bold text-lg uppercase border-b border-white/20 pb-3"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              {t.hero.supportTitle}
            </h3>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>OSTİM OSB Mah., 100. Yıl Bulvarı D Blok No:55/35, Ankara</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:05332136801" className="hover:text-red-300 font-bold">0 533 213 68 01</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <a href="tel:03123854483" className="hover:text-red-300">0 312 385 44 83</a>
              </div>
            </div>
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp ile Teklif Al
            </button>
          </div>

        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-red-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-black" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>{t.hero.stat1Title}</div>
              <div className="text-red-200 text-xs uppercase tracking-wider mt-1 font-semibold">{t.hero.stat1Desc}</div>
            </div>
            <div>
              <div className="text-3xl font-black" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>{t.hero.stat2Title}</div>
              <div className="text-red-200 text-xs uppercase tracking-wider mt-1 font-semibold">{t.hero.stat2Desc}</div>
            </div>
            <div>
              <div className="text-3xl font-black" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>{t.hero.stat3Title}</div>
              <div className="text-red-200 text-xs uppercase tracking-wider mt-1 font-semibold">{t.hero.stat3Desc}</div>
            </div>
            <div>
              <div className="text-3xl font-black" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>{t.hero.stat4Title}</div>
              <div className="text-red-200 text-xs uppercase tracking-wider mt-1 font-semibold">{t.hero.stat4Desc}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
