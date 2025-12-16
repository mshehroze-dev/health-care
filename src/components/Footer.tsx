import React, { FC } from "react";
interface FooterProps {
  theme: {
    palette: { primary: string; text_dark: string; background: string; text_light: string };
  };
}
const Footer: React.FC<FooterProps> = ({ theme }) => {
  const { palette } = theme;
  return (
    <footer className="bg-white py-10" style={{ backgroundColor: palette.background, color: palette.text_dark }}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold" style={{ color: palette.primary }}>HealthFirst</a>
            <p className="text-sm mt-2">Your Health, Our Priority</p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center md:space-x-6 space-x-4">
              <li><a href="#services" className="hover:underline text-sm" style={{ color: palette.text_dark }}>Services</a></li>
              <li><a href="#features" className="hover:underline text-sm" style={{ color: palette.text_dark }}>About Us</a></li>
              <li><a href="#faq" className="hover:underline text-sm" style={{ color: palette.text_dark }}>FAQ</a></li>
              <li><a href="#contact" className="hover:underline text-sm" style={{ color: palette.text_dark }}>Contact</a></li>
              <li><a href="#privacy" className="hover:underline text-sm" style={{ color: palette.text_dark }}>Privacy Policy</a></li>
            </ul>
          </nav>
        </div>
        <div className="border-t pt-6 text-sm text-gray-500" style={{ borderColor: palette.text_dark, opacity: 0.2 }}>
          <p>&copy; {new Date().getFullYear()} HealthFirst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
