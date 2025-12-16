import React, { FC } from "react";
interface TestimonialsProps {
  theme: {
    palette: { primary: string; text_dark: string; background: string; text_light: string };
    shadow: string;
    radius: string;
  };
  section_y: string;
}
const testimonialsData = [
  {
    quote: "The care I received was exceptional. The doctors were thorough, compassionate, and truly listened to my concerns. Highly recommend!",
    author: "Jane Doe",
    location: "Happy Patient"
  },
  {
    quote: "From scheduling to treatment, everything was seamless. The facility is modern and the staff made me feel comfortable and valued.",
    author: "John Smith",
    location: "Satisfied Client"
  },
  {
    quote: "I've never felt more confident in my healthcare provider. Their patient-centered approach makes a real difference.",
    author: "Emily White",
    location: "Grateful Individual"
  }
];
const Testimonials: React.FC<TestimonialsProps> = ({ theme, section_y }) => {
  const { palette, shadow, radius } = theme;
  return (
    <section id="testimonials" className={`bg-gray-100 ${section_y}`} style={{ backgroundColor: palette.background }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: palette.text_dark }}>
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg flex flex-col justify-between"
              style={{ boxShadow: shadow, borderRadius: radius, backgroundColor: "white" }}
            >
              <p className="text-lg italic mb-6 leading-relaxed" style={{ color: palette.text_dark }}>
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-lg" style={{ color: palette.text_dark }}>
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500" style={{ color: palette.text_dark }}>
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
