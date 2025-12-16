import React, { FC } from "react";
import "./App.css"; // Assuming basic CSS setup
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FAQSection from "./components/FAQSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { NuvraBadge } from './components/NuvraBadge';
const App: React.FC<AppProps> = ({ hero, features, faq, theme }) => {
  const { palette, section_y } = theme;
  return (
  <>
    <NuvraBadge />
    <div className="min-h-screen bg-gray-50 text-gray-800" style={{ backgroundColor: palette.background, color: palette.text_dark }}>
      <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold" style={{ color: palette.primary }}>HealthFirst</a>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-primary-600 transition-colors duration-200" style={{ color: palette.text_dark }}>Services</a></li>
              <li><a href="#features" className="hover:text-primary-600 transition-colors duration-200" style={{ color: palette.text_dark }}>About Us</a></li>
              <li><a href="#faq" className="hover:text-primary-600 transition-colors duration-200" style={{ color: palette.text_dark }}>FAQ</a></li>
              <li><a href="#contact" className="px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity duration-200" style={{ backgroundColor: palette.primary }}>Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </header>
      <main>
        <HeroSection {...hero} theme={theme} section_y={section_y} />
        <FeaturesSection items={features} theme={theme} section_y={section_y} />
        <Testimonials theme={theme} section_y={section_y} />
        <FAQSection items={faq} theme={theme} section_y={section_y} />
      </main>
      <Footer theme={theme} />
    </div>
  
  </>
);
};
export default App;