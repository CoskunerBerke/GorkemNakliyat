import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, User } from 'lucide-react';

export default function IletisimPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Merhaba Görkem Ağır Nakliyat,\n\n*${form.name}* tarafından mesaj:\n\n${form.message}\n\nE-posta: ${form.email}`;
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const iconBoxStyle = {
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8a000',
    flexShrink: 0,
  };

  const sectionHeadStyle = {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontWeight: 900,
    fontSize: '15px',
    color: '#222',
    textTransform: 'uppercase',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '8px',
    marginBottom: '14px',
  };

  const infoRowStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '10px',
    fontSize: '13px',
    color: '#444',
  };

  return (
    <section className="bg-white">

      {/* Page header bar */}
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <div
          className="mb-8 px-5 py-3 flex items-center gap-3"
          style={{ backgroundColor: '#f5f5f5', borderLeft: '4px solid #e8a000' }}
        >
          <span
            className="text-xl font-black uppercase"
            style={{ fontFamily: "'Roboto Condensed', sans-serif", color: '#222' }}
          >
            {t.contact.title}
          </span>
        </div>
      </div>

      {/* Google Maps — full width */}
      <div style={{ width: '100%', height: '340px' }}>
        <iframe
          src="https://maps.google.com/maps?q=Ostim+OSB+Mah.+100.+Y%C4%B1l+Bulvar%C4%B1+Ostim+Prestij+%C4%B0%C5%9F+Merkezi+D+Blok+No+55%2F35+Yenimahalle+Ankara&t=m&z=14&output=embed&iwloc=near"
          width="100%"
          height="340"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Görkem Ağır Nakliyat Konum"
        />
      </div>

      {/* Contact info + form */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: info */}
          <div className="space-y-8">

            {/* Ofis */}
            <div>
              <h4 style={sectionHeadStyle}>{t.contact.officeTitle}</h4>

              <div style={infoRowStyle}>
                <div style={iconBoxStyle}>
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <a
                  href="https://maps.google.com/?q=Ostim+OSB+Mah.+100+Yıl+Bulvarı+Ankara"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#e8a000', textDecoration: 'underline', fontSize: '13px' }}
                >
                  {t.contact.address}
                </a>
              </div>

              <div style={infoRowStyle}>
                <div style={iconBoxStyle}>
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <a href={`tel:${t.contact.phone1.replace(/\s/g, '')}`} style={{ color: '#444' }}>
                  {t.contact.phone1}
                </a>
              </div>

              <div style={infoRowStyle}>
                <div style={iconBoxStyle}>
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <span>{t.contact.phone2}</span>
              </div>

              <div style={infoRowStyle}>
                <div style={iconBoxStyle}>
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <a
                  href={`mailto:${t.contact.email}`}
                  style={{ color: '#e8a000', textDecoration: 'underline' }}
                >
                  {t.contact.email}
                </a>
              </div>
            </div>

            {/* Yetkili */}
            <div>
              <h4 style={sectionHeadStyle}>{t.contact.yetkiliTitle}</h4>

              <div style={infoRowStyle}>
                <div style={iconBoxStyle}>
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
                <span style={{ fontWeight: 700, color: '#333' }}>{t.contact.yetkiliName}</span>
              </div>

              <div style={infoRowStyle}>
                <div style={iconBoxStyle}>
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <a href="tel:05332136801" style={{ color: '#e8a000', fontWeight: 700 }}>
                  {t.contact.yetkiliPhone}
                </a>
              </div>

              <div style={infoRowStyle}>
                <div style={iconBoxStyle}>
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <a href={`mailto:${t.contact.yetkiliEmail}`} style={{ color: '#e8a000', textDecoration: 'underline' }}>
                  {t.contact.yetkiliEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h4 style={sectionHeadStyle}>{t.contact.formTitle}</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder={t.contact.formName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none"
                style={{ focusBorderColor: '#e8a000' }}
              />
              <input
                type="email"
                required
                placeholder={t.contact.formEmail}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none"
              />
              <textarea
                required
                rows={6}
                placeholder={t.contact.formMessage}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none resize-y"
              />
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-bold uppercase text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: '#e8a000', fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {t.contact.formSend}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
