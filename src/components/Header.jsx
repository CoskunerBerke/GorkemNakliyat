import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Search, Menu, X } from 'lucide-react';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { label: t.nav.home,         to: '/' },
    { label: t.nav.about,        to: '/hakkimizda' },
    { label: t.nav.mevzuat,      to: '/mevzuat' },
    { label: t.nav.sertifikalar, to: '/sertifikalar' },
    { label: t.nav.kariyer,      to: '/kariyer' },
    { label: t.nav.contact,      to: '/iletisim' },
  ];

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header
      id="header"
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: '#1a1a1a', boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.5)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between" style={{ minHeight: '70px' }}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.jpg"
              alt="Görkem Ağır Nakliyat"
              className="object-contain"
              style={{ height: '52px', maxWidth: '200px' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="px-3 py-5 text-sm font-bold uppercase tracking-wide transition-colors"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  color: isActive(item.to) ? '#e8a000' : '#cccccc',
                  borderBottom: isActive(item.to) ? '2px solid #e8a000' : '2px solid transparent',
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Language + Search */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className="px-2 py-1 text-xs font-bold border rounded transition-all hover:border-yellow-500"
                style={{ borderColor: '#555', color: '#aaa' }}
              >
                {lang === 'tr' ? 'EN' : 'TR'}
              </button>
              <button className="p-1.5" style={{ color: '#aaa' }} aria-label="Search">
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
        <div className="md:hidden border-t" style={{ backgroundColor: '#222', borderColor: '#333' }}>
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="px-3 py-2.5 text-sm font-bold uppercase border-l-2 transition-colors"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  color: isActive(item.to) ? '#e8a000' : '#ccc',
                  borderLeftColor: isActive(item.to) ? '#e8a000' : 'transparent',
                }}
              >
                {item.label}
              </Link>
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
