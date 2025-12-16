import React, { FC, useState } from "react";
interface FAQSectionProps {
  items: Array<{ q: string; a: string }>;
  theme: {
    palette: { primary: string; text_dark: string; background: string; text_light: string };
    shadow: string;
    radius: string;
  };
  section_y: string;
}
const FAQSection: React.FC<FAQSectionProps> = ({ items, theme, section_y }) => {
  const { palette, shadow, radius } = theme;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className={`bg-gray-50 ${section_y}`} style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: palette.text_dark }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg"
              style={{ boxShadow: shadow, borderRadius: radius, backgroundColor: "white" }}
            >
              <button
                className="w-full flex justify-between items-center text-left p-6 font-semibold"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                style={{ color: palette.text_dark }}
              >
                {item.q}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600" style={{ color: palette.text_dark }}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
