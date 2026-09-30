# Görkem Ağır Nakliyat

**Bilingual (TR/EN) corporate website for a heavy-haulage and international road-transport company based in OSTİM, Ankara.**

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Oxlint](https://img.shields.io/badge/lint-oxlint-32F3E9)

> Client project — designed and developed by [Berke Coşkuner](https://github.com/CoskunerBerke) for **Görkem Ağır Nakliyat & Uluslararası Taşımacılık**.

![Hero image used on the home page](public/hero_truck.jpg)

---

## Overview

Görkem Ağır Nakliyat is a transport company in Ostim OSB (Yenimahalle, Ankara) offering heavy and oversized (out-of-gauge) cargo transport, lowbed trailer services and international road freight. This single-page application is the company's corporate site: it presents the services, corporate details, regulations, licences and open positions, and routes every enquiry to the company's WhatsApp, phone or e-mail.

The whole interface is available in **Turkish and English**; visitors switch language from the header and their choice is remembered.

## Features

- **Home** (`/`) — full-width hero listing the core services: heavy/oversized cargo, lowbed trailers, international road transport, secured and insured transport.
- **About** (`/hakkimizda`) — company introduction and corporate details (legal name, address, tax office, registry info).
- **Regulations** (`/mevzuat`) — cards linking to Turkish road-transport legislation PDFs (Road Transport Law no. 4925, Road Transport Regulation, SRC certificate documents).
- **Certificates** (`/sertifikalar`) — authorisation documents and licences the company holds (e.g. C2 and L2 authorisation certificates, insurance).
- **Careers** (`/kariyer`) — open positions with department and requirements; apply by e-mail or WhatsApp.
- **Contact** (`/iletisim`) — embedded Google Map, office and authorised-person contact details, and a form that opens WhatsApp with the message pre-filled (no backend).
- **TR / EN language switch** — React context + a translations dictionary; the choice is stored in `localStorage` and sets `<html lang>`.
- Responsive header with mobile menu, footer with contact shortcuts, catch-all route back to the home page.

## Tech stack

| Layer | Technology |
| --- | --- |
| UI | React 19 (JavaScript / JSX) |
| Build tool | Vite 8 + `@vitejs/plugin-react` |
| Routing | React Router 7 (`BrowserRouter`) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) + inline styles |
| Icons | lucide-react |
| Fonts | Roboto Condensed, Open Sans (Google Fonts) |
| i18n | Custom `LanguageContext` + `src/translations.js` |
| Linting | Oxlint |

## Project structure

```text
gorkemnakliyat/
├── index.html               # SEO title, description, keywords
├── public/                  # hero_truck.jpg, logo.jpg, favicon
└── src/
    ├── main.jsx
    ├── App.jsx              # router + layout (Header / Footer)
    ├── translations.js      # all TR and EN copy
    ├── context/
    │   └── LanguageContext.jsx
    ├── pages/               # Home, Hakkimizda, Mevzuat, Sertifikalar, Kariyer, Iletisim
    └── components/          # Header, Footer, Hero, Logo (+ earlier one-page sections)
```

> The `*Section.jsx` files in `src/components/` (services, fleet, quote calculator, etc.) come from the earlier one-page version of the site. They are not mounted by any route today.

## Getting started

Requirements: Node.js (a version supported by Vite 8) and npm.

```bash
git clone https://github.com/CoskunerBerke/gorkemnakliyat.git
cd gorkemnakliyat
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

No environment variables are required. All texts and contact details are in `src/translations.js`.

Because the site uses `BrowserRouter`, the host serving `dist/` must fall back to `index.html` for unknown paths so that deep links such as `/iletisim` work.

---

## Türkçe

**OSTİM, Ankara merkezli ağır nakliyat ve uluslararası karayolu taşımacılığı firması için iki dilli (TR/EN) kurumsal web sitesi.**

> Müşteri projesi — **Görkem Ağır Nakliyat & Uluslararası Taşımacılık** için [Berke Coşkuner](https://github.com/CoskunerBerke) tarafından tasarlanıp geliştirildi.

### Genel bakış

Görkem Ağır Nakliyat; Ostim OSB'de (Yenimahalle, Ankara) ağır ve gabari dışı yük taşımacılığı, lowbed treyler hizmeti ve uluslararası karayolu taşımacılığı yapan bir firmadır. Bu tek sayfalık uygulama (SPA) firmanın kurumsal sitesidir: hizmetleri, kurumsal bilgileri, mevzuatı, yetki belgelerini ve açık pozisyonları tanıtır; tüm talepleri firmanın WhatsApp, telefon veya e-posta kanallarına yönlendirir.

Arayüzün tamamı **Türkçe ve İngilizce** olarak sunulur; ziyaretçi dili header'dan değiştirir ve tercihi hatırlanır.

### Özellikler

- **Anasayfa** (`/`) — temel hizmetleri listeleyen tam genişlikte hero: ağır/gabari dışı yük, lowbed treyler, uluslararası karayolu taşımacılığı, teminatlı ve sigortalı taşımacılık.
- **Hakkımızda** (`/hakkimizda`) — firma tanıtımı ve kurumsal bilgiler (ünvan, adres, vergi dairesi, sicil bilgileri).
- **Mevzuat** (`/mevzuat`) — karayolu taşımacılığı mevzuatı PDF'lerine bağlantılar (4925 sayılı Karayolu Taşıma Kanunu, Karayolu Taşıma Yönetmeliği, SRC belgesi evrakları).
- **Sertifikalar** (`/sertifikalar`) — firmanın sahip olduğu yetki belgeleri ve lisanslar (C2, L2 yetki belgeleri, sigortalar vb.).
- **Kariyer** (`/kariyer`) — departman ve aranan niteliklerle açık pozisyonlar; e-posta veya WhatsApp ile başvuru.
- **İletişim** (`/iletisim`) — gömülü Google Haritası, ofis ve yetkili iletişim bilgileri, mesajı WhatsApp'a aktaran form (sunucu gerekmez).
- **TR / EN dil seçimi** — React context ve çeviri sözlüğü; tercih `localStorage`'da saklanır ve `<html lang>` güncellenir.
- Mobil menülü duyarlı header, iletişim kısayollu footer, bilinmeyen adresler için anasayfaya dönüş.

### Teknolojiler

React 19, Vite 8, React Router 7, Tailwind CSS 4, lucide-react, Roboto Condensed / Open Sans, özel `LanguageContext`, Oxlint.

### Kurulum

```bash
git clone https://github.com/CoskunerBerke/gorkemnakliyat.git
cd gorkemnakliyat
npm install
npm run dev        # http://localhost:5173
```

Üretim derlemesi için `npm run build` (çıktı: `dist/`), yerelde önizleme için `npm run preview`. Ortam değişkeni gerekmez; tüm metinler ve iletişim bilgileri `src/translations.js` içindedir. Site `BrowserRouter` kullandığı için barındırma tarafında bilinmeyen adreslerin `index.html`'e yönlendirilmesi gerekir.

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
