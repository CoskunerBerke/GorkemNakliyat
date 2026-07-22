import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, User, MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-20 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-red-700 text-sm font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            {t.contact.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase" style={{ fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif" }}>
            {t.contact.title}
          </h2>
          <div className="w-12 h-1 bg-red-700 mt-3" />
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
              <User className="w-4 h-4 text-red-700" />
              <span className="text-xs font-bold uppercase text-gray-700">{t.contact.managerTitle}</span>
            </div>
            <p className="font-black text-gray-900 text-base" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>{t.contact.managerName}</p>
            <a href="tel:05332136801" className="text-red-700 font-bold text-sm hover:underline block mt-1">{t.contact.mobileNumber}</a>
          </div>

          <div className="border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
              <Phone className="w-4 h-4 text-red-700" />
              <span className="text-xs font-bold uppercase text-gray-700">{t.contact.phoneTitle}</span>
            </div>
            <a href="tel:03123854483" className="text-gray-900 font-bold text-sm block hover:text-red-700">{t.contact.phoneNumber}</a>
            <p className="text-gray-500 text-xs mt-1">Faks: {t.contact.faxNumber}</p>
          </div>

          <div className="border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
              <Mail className="w-4 h-4 text-red-700" />
              <span className="text-xs font-bold uppercase text-gray-700">{t.contact.emailTitle}</span>
            </div>
            <a href="mailto:gorkemagirnakliyat@gmail.com" className="text-red-700 font-bold text-xs hover:underline break-all">
              {t.contact.emailAddress}
            </a>
          </div>

          <div className="border border-gray-200 bg-gray-50 p-5">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
              <MapPin className="w-4 h-4 text-red-700" />
              <span className="text-xs font-bold uppercase text-gray-700">{t.contact.ostimRecordTitle}</span>
            </div>
            <p className="text-gray-700 text-xs leading-relaxed font-semibold">{t.contact.ostimRecordAddress}</p>
          </div>

        </div>

        {/* Full Address Box */}
        <div className="bg-gray-50 border border-gray-200 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-black uppercase text-gray-900 text-lg" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                {t.contact.addressTitle}
              </h4>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                {t.contact.addressFull}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-bold">
                <div>
                  <span className="text-gray-400 text-[10px] uppercase block">{t.contact.managerTitle}</span>
                  <span className="text-gray-900">Cüneyt Erdem</span>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] uppercase block">GSM</span>
                  <a href="tel:05332136801" className="text-red-700 hover:underline">0 533 213 68 01</a>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] uppercase block">TEL</span>
                  <a href="tel:03123854483" className="text-gray-900 hover:text-red-700">0 312 385 44 83</a>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] uppercase block">FAKS</span>
                  <span className="text-gray-900">0 312 385 44 84</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/905332136801"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 text-xs uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Mesaj Gönder
              </a>
              <a
                href="tel:05332136801"
                className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold py-3.5 text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
