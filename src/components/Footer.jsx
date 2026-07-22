import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const footerBg = '#1a1a1a';
  const footerBg2 = '#111111';
  const orange = '#e8a000';

  const headStyle = {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontWeight: 900,
    fontSize: '15px',
    color: '#ffffff',
    marginBottom: '16px',
  };

  return (
    <footer>
      {/* Main Footer - 3 columns exactly like gorkemlojistik.com.tr */}
      <div style={{ backgroundColor: footerBg, padding: '40px 0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Col 1: Kimdir */}
            <div>
              <h5 style={headStyle}>{t.footer.kimdir}</h5>
              <p style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.7', marginBottom: '12px' }}>
                {t.footer.kimdirText}
              </p>
              <a
                href="#about"
                style={{ color: orange, fontSize: '13px', fontWeight: 600 }}
                className="hover:underline flex items-center gap-1"
              >
                <span style={{ color: orange }}>›</span> {t.footer.readMore}
              </a>
            </div>

            {/* Col 2: Sosyal Medya */}
            <div>
              <h5 style={headStyle}>{t.footer.sosyalMedya}</h5>
              <div className="flex items-center gap-3 mt-2">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/905332136801"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#25d366' }}
                  title="WhatsApp"
                >
                  <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:gorkemagirnakliyat@gmail.com"
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: orange }}
                  title="E-posta"
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>
                {/* Phone */}
                <a
                  href="tel:05332136801"
                  className="w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#555' }}
                  title="Telefon"
                >
                  <Phone className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Col 3: İletişim Detayları */}
            <div>
              <h5 style={headStyle}>{t.footer.iletisim}</h5>
              <div className="space-y-3">
                <div className="flex items-start gap-2" style={{ fontSize: '13px', color: '#aaa' }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: orange }} />
                  <span>{t.footer.address}</span>
                </div>
                <div className="flex items-center gap-2" style={{ fontSize: '13px', color: '#aaa' }}>
                  <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: orange }} />
                  <a href={`tel:${t.footer.phone.replace(/\s/g, '')}`} className="hover:text-white">{t.footer.phone}</a>
                </div>
                <div className="flex items-center gap-2" style={{ fontSize: '13px', color: '#aaa' }}>
                  <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: orange }} />
                  <a href={`mailto:${t.footer.email}`} className="hover:text-white break-all">{t.footer.email}</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          backgroundColor: footerBg2,
          borderTop: '1px solid #2a2a2a',
          padding: '12px 24px',
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p style={{ color: '#777', fontSize: '12px' }}>
            {t.footer.rights}
          </p>
          <img
            src="/logo.jpg"
            alt="Görkem Ağır Nakliyat"
            style={{ height: '28px', objectFit: 'contain', filter: 'brightness(0.7)' }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
