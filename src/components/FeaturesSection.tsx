import React, { FC } from "react";
interface FeaturesSectionProps {
  items: Array<{ title: string; desc: string }>;
  theme: {
    palette: { primary: string; text_dark: string; background: string; text_light: string };
    shadow: string;
    radius: string;
  };
  section_y: string;
}
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ items, theme, section_y }) => {
  const { palette, shadow, radius } = theme;
  return (
    <section id="services" className={`bg-white ${section_y}`} style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: palette.text_dark }}>
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg text-center flex flex-col items-center"
              style={{ boxShadow: shadow, borderRadius: radius, backgroundColor: "white" }}
            >
              {/* Placeholder Icon */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: palette.primary, color: palette.text_light }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: palette.text_dark }}>
                {item.title}
              </h3>
              <p className="text-gray-600" style={{ color: palette.text_dark }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
