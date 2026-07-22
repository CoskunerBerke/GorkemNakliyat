import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';
import { Phone, Mail, MapPin, Menu, X, MessageSquare } from 'lucide-react';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.fleet, href: "#fleet" },
    { label: t.nav.quote, href: "#calculator" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs border-b border-slate-200 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <a href="tel:05332136801" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold">GSM: 0 533 213 68 01</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a href="tel:03123854483" className="hidden md:flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Tel: 0 312 385 44 83</span>
            </a>
            <span className="hidden md:inline text-slate-700">|</span>
            <a href="mailto:gorkemagirnakliyat@gmail.com" className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>gorkemagirnakliyat@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>OSTİM OSB, 100. Yıl Blv. Ankara</span>
            </div>
            
            {/* Top Right Prominent Language Selector */}
            <div className="flex items-center bg-slate-800 rounded-full p-1 border border-slate-700">
              <button
                onClick={() => setLang('tr')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  lang === 'tr' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Türkçe"
              >
                <span>🇹🇷</span> TR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  lang === 'en' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English"
              >
                <span>🇬🇧</span> EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`px-4 lg:px-8 py-3.5 transition-all ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <Logo variant="full" size="normal" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-3.5 py-2 text-sm font-bold text-slate-800 hover:text-blue-600 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#calculator"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.getQuoteBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center bg-slate-100 rounded-full p-0.5 border border-slate-300">
              <button
                onClick={() => setLang('tr')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold ${lang === 'tr' ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
              >
                TR
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full text-xs font-bold ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-lg hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-blue-600 text-white font-extrabold uppercase py-3 rounded-lg text-xs"
            >
              {t.nav.getQuoteBtn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
