import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Phone, MapPin, Scale, Truck } from 'lucide-react';

export const CalculatorQuoteSection = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    weight: '',
    cargoType: t.calculator.typeOptions[0],
    name: '',
    phone: '',
    note: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Merhaba Görkem Ağır Nakliyat (Cüneyt Erdem),\n\n*Nakliye Teklif Talebi*\n\n📍 *Çıkış:* ${formData.origin || 'Belirtilmedi'}\n📍 *Varış:* ${formData.destination || 'Belirtilmedi'}\n⚖️ *Ağırlık:* ${formData.weight ? formData.weight + ' Ton' : 'Belirtilmedi'}\n🏗️ *Yük Tipi:* ${formData.cargoType}\n\n👤 *Müşteri:* ${formData.name || 'Belirtilmedi'}\n📞 *Tel:* ${formData.phone || 'Belirtilmedi'}\n📝 *Not:* ${formData.note || 'Yok'}`;
    window.open(`https://wa.me/905332136801?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-red-700 text-sm font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            {t.calculator.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase" style={{ fontFamily: "'Roboto Condensed', 'Arial Black', sans-serif" }}>
            {t.calculator.title}
          </h2>
          <div className="w-12 h-1 bg-red-700 mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-gray-200 p-6 md:p-8">
            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">{t.calculator.originLabel} *</label>
                  <input
                    type="text"
                    required
                    placeholder={t.calculator.originPlaceholder}
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    className="w-full border border-gray-300 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">{t.calculator.destLabel} *</label>
                  <input
                    type="text"
                    required
                    placeholder={t.calculator.destPlaceholder}
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full border border-gray-300 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">{t.calculator.weightLabel}</label>
                  <input
                    type="text"
                    placeholder={t.calculator.weightPlaceholder}
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full border border-gray-300 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">{t.calculator.typeLabel}</label>
                  <select
                    value={formData.cargoType}
                    onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    className="w-full border border-gray-300 py-2.5 px-3 text-sm text-gray-900 focus:outline-none focus:border-red-600"
                  >
                    {t.calculator.typeOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-gray-100">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">{t.calculator.nameLabel} *</label>
                  <input
                    type="text"
                    required
                    placeholder={t.calculator.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">{t.calculator.phoneLabel} *</label>
                  <input
                    type="tel"
                    required
                    placeholder={t.calculator.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-300 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">{t.calculator.noteLabel}</label>
                <textarea
                  rows={3}
                  placeholder={t.calculator.notePlaceholder}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full border border-gray-300 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 text-sm uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                {t.calculator.submitBtn}
              </button>
            </form>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-4">
            <div className="bg-red-700 text-white p-6 space-y-4">
              <h4
                className="font-black uppercase text-lg border-b border-red-600 pb-3"
                style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              >
                {t.calculator.hotlineTitle}
              </h4>
              <div>
                <span className="text-red-200 text-xs uppercase font-bold block">{t.about.managerLabel}</span>
                <span className="text-white font-black text-xl" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>Cüneyt Erdem</span>
              </div>
              <a
                href="tel:05332136801"
                className="flex items-center gap-2 text-white font-bold hover:text-red-200"
              >
                <Phone className="w-4 h-4" />
                0 533 213 68 01
              </a>
              <a
                href="https://wa.me/905332136801"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-red-700 hover:bg-red-50 font-bold py-2.5 text-xs uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                {t.calculator.whatsappDirect}
              </a>
            </div>

            <div className="bg-white border border-gray-200 p-5 space-y-3 text-xs text-gray-600">
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span className="font-semibold">{t.calculator.routeScope}</span>
              </div>
              <div className="flex items-start gap-2">
                <Scale className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span className="font-semibold">{t.calculator.payloadPermit}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <span className="font-semibold">OSTİM OSB / ANKARA</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CalculatorQuoteSection;
