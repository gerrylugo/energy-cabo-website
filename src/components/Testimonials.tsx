import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

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
  const { theme } = useTheme();

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {theme === 'techno' && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: "url('/images/water-teal-texture.png')" }}
        />
      )}
      <div className={`absolute inset-0 ${
        theme === 'techno'
          ? 'bg-[#0a1628]/15'
          : 'bg-theme-bg'
      }`} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-20">
          <span className={`inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${
            theme === 'techno' ? 'text-[#F5A623] font-bold' : 'text-theme-accent'
          }`}
            style={theme === 'techno' ? { textShadow: '0 0 15px rgba(0,0,0,0.8)' } : undefined}
          >
            Testimonials
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-5 tracking-tight ${
            theme === 'techno' ? 'text-white' : 'text-theme-text'
          }`}
            style={theme === 'techno' ? { textShadow: '0 0 15px rgba(0,0,0,0.8)' } : undefined}
          >
            Trusted Across Los Cabos
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'techno' ? 'text-[#F5A623]' : 'text-theme-text-muted'
          }`}
            style={theme === 'techno' ? { textShadow: '0 0 15px rgba(0,0,0,0.8)' } : undefined}
          >
            From boutique hotels to beachfront villas — hear from our clients.
          </p>
        </div>

        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 ${
                theme === 'techno'
                  ? 'bg-white/15 backdrop-blur-md border-white/20 hover:border-white/40 shadow-lg'
                  : 'bg-theme-bg-warm/40 border-theme-border hover:border-theme-accent/30'
              }`}
            >
              <Quote className={`w-10 h-10 mb-4 ${
                theme === 'techno' ? 'text-white/40' : 'text-theme-accent/20'
              }`} />
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-energy-gold text-energy-gold" />
                ))}
              </div>
              <p className={`mb-6 leading-relaxed ${
                theme === 'techno' ? 'text-white/90' : 'text-theme-text-secondary'
              }`}>
                "{testimonial.content}"
              </p>
              <div className={`border-t pt-5 ${
                theme === 'techno' ? 'border-white/20' : 'border-theme-border'
              }`}>
                <div className={`font-bold ${theme === 'techno' ? 'text-white' : 'text-theme-text'}`}>{testimonial.name}</div>
                <div className={`text-sm ${theme === 'techno' ? 'text-white/70' : 'text-theme-text-muted'}`}>{testimonial.location}</div>
                <div className={`text-xs font-medium mt-1 ${theme === 'techno' ? 'text-teal-300' : 'text-theme-accent'}`}>{testimonial.system}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
