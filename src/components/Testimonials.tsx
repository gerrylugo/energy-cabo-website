import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Resort Owner',
    location: 'Cabo San Lucas',
    content: 'Our energy costs dropped by 70% in the first year. The system has been flawless through two hurricane seasons. Energy Cabo\'s team was professional from day one.',
    system: 'Complete Solution — 85 kW',
    rating: 5,
  },
  {
    name: 'Villa Owner',
    location: 'East Cape',
    content: 'Best investment we made for our property. The zero export system works perfectly with CFE, and we love having backup power during storms. Truly built for Baja.',
    system: 'Smart Generation + Backup',
    rating: 5,
  },
  {
    name: 'Restaurant Group',
    location: 'San Jose del Cabo',
    content: 'The solar installation pays for itself with the savings. Their monitoring system gives us complete visibility into production. Worth every dollar.',
    system: 'Solar Savings — 45 kW',
    rating: 5,
  },
];

export default function Testimonials() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.1);

  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-20">
          <span className="inline-block text-energy-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-energy-navy mb-5 tracking-tight">
            Trusted Across Los Cabos
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From boutique hotels to beachfront villas — hear from our clients.
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-energy-arena/40 p-8 rounded-2xl border border-energy-arena hover:border-energy-teal/30 hover:shadow-xl transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-energy-teal/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-energy-gold text-energy-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-5">
                <div className="font-bold text-energy-navy">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
                <div className="text-xs text-energy-teal font-medium mt-1">{testimonial.system}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
