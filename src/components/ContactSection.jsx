import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, User, MessageSquare } from 'lucide-react';

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
    <section id="contact" className="py-16 md:py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-black text-blue-600 uppercase tracking-wider block">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Manager & GSM */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-4">
              <User className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">{t.contact.managerTitle}</span>
            <h4 className="text-base font-black text-slate-900 mb-1">{t.contact.managerName}</h4>
            <a
              href="tel:05332136801"
              className="inline-flex items-center gap-1.5 text-blue-600 font-extrabold text-xs hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.contact.mobileNumber}</span>
            </a>
          </div>

          {/* Card 2: Phone & Fax */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">{t.contact.phoneTitle} & {t.contact.faxTitle}</span>
            <div className="space-y-1 mt-1 text-xs font-bold text-slate-900">
              <p>Tel: <a href="tel:03123854483" className="hover:text-blue-600">{t.contact.phoneNumber}</a></p>
              <p className="text-slate-600">Faks: {t.contact.faxNumber}</p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">{t.contact.emailTitle}</span>
            <a
              href="mailto:gorkemagirnakliyat@gmail.com"
              className="text-emerald-700 hover:text-emerald-800 font-bold text-xs break-all mt-1 block"
            >
              {t.contact.emailAddress}
            </a>
          </div>

          {/* Card 4: OSTİM Record */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">{t.contact.ostimRecordTitle}</span>
            <p className="text-xs font-bold text-slate-900 mt-1 leading-relaxed">
              {t.contact.ostimRecordAddress}
            </p>
          </div>

        </div>

        {/* Detailed Address Box */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase text-slate-900">{t.contact.addressTitle}</h4>
                  <span className="text-xs text-blue-600 font-bold">{t.contact.addressSub}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                  {t.contact.addressFull}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] uppercase block">{t.contact.managerTitle}:</span>
                  <span className="text-slate-900 mt-0.5 block font-bold">Cüneyt Erdem</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] uppercase block">{t.contact.mobileTitle}:</span>
                  <span className="text-blue-600 mt-0.5 block font-bold">0 533 213 68 01</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] uppercase block">{t.contact.phoneTitle}:</span>
                  <span className="text-slate-900 mt-0.5 block font-bold">0 312 385 44 83</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 text-[10px] uppercase block">{t.contact.faxTitle}:</span>
                  <span className="text-slate-900 mt-0.5 block font-bold">0 312 385 44 84</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href="https://wa.me/905332136801"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider py-4 rounded-xl text-xs shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Mesaj Gönder</span>
              </a>
              <a
                href="tel:05332136801"
                className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider py-4 rounded-xl text-xs shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Hemen Ara (0533 213 68 01)</span>
              </a>
            </div>

          </div>
        </div>

        {/* Message Form directly opening WhatsApp */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-2xs max-w-4xl mx-auto">
          <h3 className="text-xl font-black uppercase text-slate-900 text-center mb-6">{t.contact.formTitle}</h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder={t.contact.formNamePlaceholder}
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
              />
              <input
                type="email"
                placeholder={t.contact.formEmailPlaceholder}
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                required
                placeholder={t.contact.formPhonePlaceholder}
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
              />
              <input
                type="text"
                placeholder={t.contact.formSubjectPlaceholder}
                value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
              />
            </div>
            <textarea
              rows={4}
              required
              placeholder={t.contact.formMessagePlaceholder}
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-2xs transition-all text-xs flex items-center justify-center gap-2"
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
