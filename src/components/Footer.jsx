import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.fleet, href: "#fleet" },
    { label: t.nav.quote, href: "#calculator" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Main Footer - 3 columns like gorkemlojistik.com.tr */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Col 1: About Snippet */}
          <div className="space-y-4">
            <img src="/logo.jpg" alt="Görkem Ağır Nakliyat" className="h-14 w-auto object-contain bg-white p-2 rounded" />
            <h5
              className="text-white font-black uppercase text-base border-b border-gray-700 pb-3"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              {t.footer.aboutTitle || 'Görkem Ağır Nakliyat'}
            </h5>
            <p className="text-gray-400 text-xs leading-relaxed">{t.footer.aboutText}</p>
            <a
              href="#about"
              className="text-red-400 text-xs font-bold uppercase hover:underline"
            >
              {t.footer.readMore || 'devamını oku...'} →
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h5
              className="text-white font-black uppercase text-base border-b border-gray-700 pb-3"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              {t.footer.quickLinks}
            </h5>
            <ul className="space-y-2">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-gray-400 text-xs font-semibold uppercase tracking-wider hover:text-red-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-700">›</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-4">
            <h5
              className="text-white font-black uppercase text-base border-b border-gray-700 pb-3"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              {t.footer.contactTitle}
            </h5>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Ostim OSB Mah. 100. Yıl Bulvarı, Ostim Prestij İş Merkezi D Blok No: 55/35, Yenimahalle / ANKARA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a href="tel:05332136801" className="hover:text-white font-bold">0 533 213 68 01 (Cüneyt Erdem)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gray-600 shrink-0" />
                <a href="tel:03123854483" className="hover:text-white">0 312 385 44 83</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a href="mailto:gorkemagirnakliyat@gmail.com" className="hover:text-white break-all">gorkemagirnakliyat@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800 py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Görkem Ağır Nakliyat & Uluslararası Taşımacılık. {t.footer.rights}
          </p>

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <button
              onClick={() => setLang('tr')}
              className={`text-xs font-bold px-1.5 ${lang === 'tr' ? 'text-red-400' : 'text-gray-500 hover:text-gray-300'}`}
            >
              TR
            </button>
            <span className="text-gray-700">|</span>
            <button
              onClick={() => setLang('en')}
              className={`text-xs font-bold px-1.5 ${lang === 'en' ? 'text-red-400' : 'text-gray-500 hover:text-gray-300'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
