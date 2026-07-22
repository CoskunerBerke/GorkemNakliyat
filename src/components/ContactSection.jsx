import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, User, MessageSquare, Compass, ShieldCheck, Clock } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const nameText = contactForm.name.trim() || 'Belirtilmedi';
    const emailText = contactForm.email.trim() || 'Belirtilmedi';
    const phoneText = contactForm.phone.trim() || 'Belirtilmedi';
    const subjectText = contactForm.subject.trim() || 'Genel İletişim / Teklif';
    const messageText = contactForm.message.trim() || 'Belirtilmedi';

    const text = `Merhaba Görkem Ağır Nakliyat (Cüneyt Erdem),\n\n*Web Sitesi İletişim Mesajı*\n\n👤 *Ad Soyad:* ${nameText}\n📞 *Telefon:* ${phoneText}\n✉️ *E-posta:* ${emailText}\n📌 *Konu:* ${subjectText}\n💬 *Mesaj:* ${messageText}`;

    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Manager & GSM */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-950 text-blue-400 border border-blue-800 flex items-center justify-center mb-4">
              <User className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.contact.managerTitle}</span>
            <h4 className="text-lg font-extrabold text-white mb-2">{t.contact.managerName}</h4>
            <a
              href="tel:05332136801"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{t.contact.mobileNumber}</span>
            </a>
          </div>

          {/* Card 2: Phone & Fax */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.contact.phoneTitle} & {t.contact.faxTitle}</span>
            <div className="space-y-1 mt-1 text-sm font-semibold">
              <p className="text-white">Tel: <a href="tel:03123854483" className="hover:text-blue-400">{t.contact.phoneNumber}</a></p>
              <p className="text-slate-400">Faks: {t.contact.faxNumber}</p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.contact.emailTitle}</span>
            <a
              href="mailto:gorkemagirnakliyat@gmail.com"
              className="text-emerald-400 hover:text-emerald-300 font-bold text-sm break-all mt-1 block"
            >
              {t.contact.emailAddress}
            </a>
          </div>

          {/* Card 4: OSTİM Record */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-950 text-amber-400 border border-amber-800 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{t.contact.ostimRecordTitle}</span>
            <p className="text-xs font-semibold text-slate-200 mt-1 leading-relaxed">
              {t.contact.ostimRecordAddress}
            </p>
          </div>

        </div>

        {/* Detailed Address & Corporate Info Box (Map-free clean layout) */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{t.contact.addressTitle}</h4>
                  <span className="text-xs text-blue-400 font-semibold">{t.contact.addressSub}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  {t.contact.addressFull}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300 pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">{t.contact.managerTitle}:</span>
                  <span className="font-bold text-white mt-0.5 block">Cüneyt Erdem</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">{t.contact.mobileTitle}:</span>
                  <span className="font-bold text-blue-400 mt-0.5 block">0 533 213 68 01</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">{t.contact.phoneTitle}:</span>
                  <span className="font-bold text-white mt-0.5 block">0 312 385 44 83</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">{t.contact.faxTitle}:</span>
                  <span className="font-bold text-white mt-0.5 block">0 312 385 44 84</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href="https://wa.me/905332136801"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Mesaj Gönder</span>
              </a>
              <a
                href="tel:05332136801"
                className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Hemen Ara (0533 213 68 01)</span>
              </a>
            </div>

          </div>
        </div>

        {/* Message Form directly opening WhatsApp */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-6">{t.contact.formTitle}</h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder={t.contact.formNamePlaceholder}
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="email"
                placeholder={t.contact.formEmailPlaceholder}
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                required
                placeholder={t.contact.formPhonePlaceholder}
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="text"
                placeholder={t.contact.formSubjectPlaceholder}
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <textarea
              rows={4}
              required
              placeholder={t.contact.formMessagePlaceholder}
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.contact.formSubmitBtn} (0533 213 68 01)</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
