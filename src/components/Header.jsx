import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { Phone, Mail, MapPin, Menu, X, MessageSquare } from 'lucide-react';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.fleet, href: "#fleet" },
    { label: t.nav.quote, href: "#calculator" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-xs">
      {/* Top Bar - Clean Light */}
      <div className="bg-slate-100 text-slate-700 text-xs py-2 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a href="tel:05332136801" className="flex items-center gap-1.5 font-bold hover:text-blue-600 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>GSM: 0 533 213 68 01</span>
            </a>
            <span className="hidden md:inline text-slate-300">|</span>
            <a href="tel:03123854483" className="hidden md:flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>Tel: 0 312 385 44 83</span>
            </a>
            <span className="hidden md:inline text-slate-300">|</span>
            <a href="mailto:gorkemagirnakliyat@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>gorkemagirnakliyat@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>OSTİM OSB, 100. Yıl Blv. No: 55/35 Ankara</span>
            </div>
            
            {/* Language Switcher */}
            <div className="flex items-center bg-white rounded-full p-1 border border-slate-300 shadow-2xs">
              <button
                onClick={() => setLang('tr')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'tr' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🇹🇷</span> TR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${
                  lang === 'en' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🇬🇧</span> EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Logo variant="full" size="normal" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Direct WhatsApp Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/905332136801?text=Merhaba%20G%C3%B6rkem%20A%C4%9F%C4%B1r%20Nakliyat%2C%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-lg text-xs transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.getQuoteBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-bold text-slate-800 hover:bg-slate-100 rounded-lg hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="https://wa.me/905332136801?text=Merhaba%20G%C3%B6rkem%20A%C4%9F%C4%B1r%20Nakliyat%2C%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-lg text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.getQuoteBtn}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
