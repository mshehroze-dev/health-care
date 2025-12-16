import React, { FC } from "react";
interface HeroSectionProps {
  headline: string;
  sub: string;
  cta_text: string;
  image_url: string;
  theme: {
    palette: { primary: string; text_light: string; background: string; text_dark: string };
    gradient_from: string;
    gradient_to: string;
    radius: string;
  };
  section_y: string;
}
const HeroSection: React.FC<HeroSectionProps> = ({ headline, sub, cta_text, image_url, theme, section_y }) => {
  const { palette, gradient_from, gradient_to, radius } = theme;
  return (
    <section className={`relative overflow-hidden ${section_y}`} style={{ background: `linear-gradient(to right, ${gradient_from}, ${gradient_to})` }}>
      <div className="container mx-auto px-4 py-16 lg:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ color: palette.text_dark }}>
            {headline}
          </h1>
          <p className="text-lg lg:text-xl mb-8" style={{ color: palette.text_dark }}>
            {sub}
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: palette.primary, color: palette.text_light, borderRadius: radius }}
          >
            {cta_text}
          </button>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <img
            src={image_url}
            alt="Healthcare professionals assisting a patient"
            className="w-full max-w-lg object-cover rounded-xl shadow-2xl"
            style={{ borderRadius: radius }}
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
