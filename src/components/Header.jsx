import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, Menu, X } from 'lucide-react';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.mevzuat, href: '#mevzuat' },
    { label: t.nav.sertifikalar, href: '#sertifikalar' },
    { label: t.nav.kariyer, href: '#kariyer' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      id="header"
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between" style={{ minHeight: '70px' }}>
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jpg"
              alt="Görkem Ağır Nakliyat"
              className="object-contain"
              style={{ height: '52px', maxWidth: '200px' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-3 py-5 text-sm font-bold uppercase tracking-wide transition-colors hover:text-yellow-400"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  color: '#cccccc',
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </a>
            ))}

            {/* Language + Search */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className="px-2 py-1 text-xs font-bold border rounded transition-all"
                style={{ borderColor: '#555', color: '#aaa' }}
                title="Dil / Language"
              >
                {lang === 'tr' ? 'EN' : 'TR'}
              </button>
              <button
                className="p-1.5 transition-colors"
                style={{ color: '#aaa' }}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            style={{ color: '#ccc' }}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: '#222', borderColor: '#333' }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm font-bold uppercase hover:text-yellow-400"
                style={{ color: '#ccc', fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
              className="mt-2 px-3 py-1.5 text-xs font-bold border rounded self-start"
              style={{ borderColor: '#555', color: '#aaa' }}
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
