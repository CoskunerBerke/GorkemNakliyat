import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MevzuatSection from './components/MevzuatSection';
import SertifikalarSection from './components/SertifikalarSection';
import KariyerSection from './components/KariyerSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MevzuatSection />
        <SertifikalarSection />
        <KariyerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
