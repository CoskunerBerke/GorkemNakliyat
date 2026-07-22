import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { Phone, Mail, MapPin, ArrowUp, Globe } from 'lucide-react';

export const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Logo & About */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="full" size="normal" />
            <p className="text-slate-400 text-xs leading-relaxed mt-4">
              {t.footer.aboutText}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-semibold">
              <span className="text-slate-200">Cüneyt Erdem</span>
              <span className="text-slate-700">•</span>
              <a href="tel:05332136801" className="text-blue-400 font-extrabold hover:underline">
                0 533 213 68 01
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.nav.services}</a></li>
              <li><a href="#fleet" className="hover:text-blue-400 transition-colors">{t.nav.fleet}</a></li>
              <li><a href="#calculator" className="hover:text-blue-400 transition-colors">{t.nav.quote}</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.footer.serviceItem1}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.footer.serviceItem2}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.footer.serviceItem3}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.footer.serviceItem4}</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">{t.footer.serviceItem5}</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">{t.footer.contactTitle}</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Ostim OSB Mah. 100. Yıl Blv. Ostim Prestij İş Mrk. D Blok No: 55/35 Yenimahalle / ANKARA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:05332136801" className="hover:text-white font-bold">0 533 213 68 01</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="tel:03123854483" className="hover:text-white">0 312 385 44 83</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:gorkemagirnakliyat@gmail.com" className="hover:text-white">gorkemagirnakliyat@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-4 border-t border-slate-800 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Görkem Ağır Nakliyat & Uluslararası Taşımacılık. {t.footer.rights}</p>
          
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-full border border-slate-800">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => setLang('tr')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${lang === 'tr' ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                TR
              </button>
              <span className="text-slate-700">|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${lang === 'en' ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                EN
              </button>
            </div>

            {/* Scroll To Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
