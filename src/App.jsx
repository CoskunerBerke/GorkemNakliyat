import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FleetSection from './components/FleetSection';
import CalculatorQuoteSection from './components/CalculatorQuoteSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <FleetSection />
        <CalculatorQuoteSection />
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
