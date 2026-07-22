import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative w-full flex items-center"
      style={{
        minHeight: '520px',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #1a1a1a 100%)',
      }}
    >
      {/* Subtle overlay pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(232,160,0,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="max-w-lg">
          {/* Question label */}
          <div
            className="inline-block px-4 py-2 mb-6 text-sm font-bold"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: '#ffffff',
              fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif",
            }}
          >
            {t.hero.question}
          </div>

          {/* Service items — exactly like the reference site */}
          <div className="flex flex-col gap-3">
            {t.hero.items.map((item, idx) => (
              <div
                key={idx}
                className="inline-block px-5 py-3 text-lg font-bold"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: '#ffffff',
                  fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif",
                  letterSpacing: '0.02em',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
