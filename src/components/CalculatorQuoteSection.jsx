import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, PhoneCall, MapPin, Scale, Truck } from 'lucide-react';

export const CalculatorQuoteSection = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    weight: '',
    cargoType: t.calculator.typeOptions[0],
    name: '',
    phone: '',
    email: '',
    note: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const originText = formData.origin.trim() || 'Belirtilmedi';
    const destText = formData.destination.trim() || 'Belirtilmedi';
    const weightText = formData.weight.trim() ? `${formData.weight} Ton` : 'Belirtilmedi';
    const nameText = formData.name.trim() || 'Belirtilmedi';
    const phoneText = formData.phone.trim() || 'Belirtilmedi';
    const emailText = formData.email.trim() || 'Belirtilmedi';
    const noteText = formData.note.trim() || 'Yok';

    const message = `Merhaba Görkem Ağır Nakliyat (Cüneyt Erdem),\n\n*Hızlı Nakliye Teklif Talebi*\n\n📍 *Çıkış Noktası:* ${originText}\n📍 *Varış Noktası:* ${destText}\n⚖️ *Yük Ağırlığı:* ${weightText}\n🏗️ *Yük Tipi:* ${formData.cargoType}\n\n👤 *Müşteri / Firma:* ${nameText}\n📞 *Telefon:* ${phoneText}\n✉️ *E-posta:* ${emailText}\n📐 *Ölçüler / ilave Notlar:* ${noteText}`;

    const whatsappUrl = `https://wa.me/905332136801?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
            {t.calculator.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Form */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Origin */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.calculator.originLabel} *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-blue-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder={t.calculator.originPlaceholder}
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.calculator.destLabel} *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-indigo-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder={t.calculator.destPlaceholder}
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Weight */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.calculator.weightLabel}
                  </label>
                  <div className="relative">
                    <Scale className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder={t.calculator.weightPlaceholder}
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Cargo Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.calculator.typeLabel}
                  </label>
                  <select
                    value={formData.cargoType}
                    onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    {t.calculator.typeOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal / Company Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-slate-850">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.calculator.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.calculator.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.calculator.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.calculator.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    {t.calculator.emailLabel}
                  </label>
                  <input
                    type="email"
                    placeholder={t.calculator.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  {t.calculator.noteLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.calculator.notePlaceholder}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Submit Button -> Directly triggers WhatsApp */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all text-base"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t.calculator.submitBtn}</span>
                </button>
              </div>

            </form>
          </div>

          {/* Right Direct Call & WhatsApp Contact Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{t.calculator.hotlineTitle}</span>
                <h4 className="text-xl font-bold text-white mt-1">Cüneyt Erdem</h4>
                <p className="text-xs text-slate-400 mt-0.5">Görkem Ağır Nakliyat & Uluslararası Taşımacılık</p>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:05332136801"
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-md transition-all text-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.calculator.callDirect} (0533 213 68 01)</span>
                </a>

                <a
                  href="https://wa.me/905332136801?text=Merhaba%20C%C3%BCneyt%20Bey%2C%20G%C3%B6rkem%20A%C4%9F%C4%B1r%20Nakliyat%20i%C3%A7in%20teklif%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-md transition-all text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.calculator.whatsappDirect}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.calculator.routeScope}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.calculator.payloadPermit}</span>
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CalculatorQuoteSection;
