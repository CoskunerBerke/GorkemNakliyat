import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Menu, X } from 'lucide-react';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jpg"
              alt="Görkem Ağır Nakliyat Logo"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-4 py-2 text-sm font-bold text-gray-800 uppercase tracking-wider hover:text-red-700 transition-colors"
                style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Phone + Language */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:05332136801"
              className="flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-800"
            >
              <Phone className="w-4 h-4" />
              <span>0 533 213 68 01</span>
            </a>
            
            <div className="flex items-center gap-1 border border-gray-300 rounded px-1.5 py-1">
              <button
                onClick={() => setLang('tr')}
                className={`text-xs font-bold px-1.5 py-0.5 rounded transition-all ${
                  lang === 'tr' ? 'bg-red-700 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                TR
              </button>
              <span className="text-gray-300 text-xs">|</span>
              <button
                onClick={() => setLang('en')}
                className={`text-xs font-bold px-1.5 py-0.5 rounded transition-all ${
                  lang === 'en' ? 'bg-red-700 text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile button */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex items-center gap-1 border border-gray-300 rounded px-1.5 py-1">
              <button
                onClick={() => setLang('tr')}
                className={`text-xs font-bold px-1 ${lang === 'tr' ? 'text-red-700' : 'text-gray-500'}`}
              >
                TR
              </button>
              <span className="text-gray-300 text-xs">|</span>
              <button
                onClick={() => setLang('en')}
                className={`text-xs font-bold px-1 ${lang === 'en' ? 'text-red-700' : 'text-gray-500'}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-red-700"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-gray-800 uppercase hover:text-red-700 hover:bg-gray-50 rounded transition-colors"
                style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:05332136801"
              className="mt-2 px-3 py-2 flex items-center gap-2 text-sm font-bold text-red-700"
            >
              <Phone className="w-4 h-4" />
              <span>0 533 213 68 01</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
