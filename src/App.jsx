import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import HakkimizdaPage from './pages/HakkimizdaPage';
import MevzuatPage from './pages/MevzuatPage';
import SertifikalarPage from './pages/SertifikalarPage';
import KariyerPage from './pages/KariyerPage';
import IletisimPage from './pages/IletisimPage';

function Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/"              element={<HomePage />} />
          <Route path="/hakkimizda"    element={<HakkimizdaPage />} />
          <Route path="/mevzuat"       element={<MevzuatPage />} />
          <Route path="/sertifikalar"  element={<SertifikalarPage />} />
          <Route path="/kariyer"       element={<KariyerPage />} />
          <Route path="/iletisim"      element={<IletisimPage />} />
          {/* Fallback: redirect to home */}
          <Route path="*"              element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
