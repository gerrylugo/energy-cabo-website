import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: 'Mike Meyers',
    location: 'Todos Santos',
    content: 'I can\'t recommend Energy Cabo strongly enough. I originally went to another local company, but the moment an issue came up, they went radio silent. Energy Cabo\'s owner Salomon jumped on it. If a problem comes up, you want Salomon, Alex and the team on your side! Six stars!!!',
    source: 'Google Review',
    rating: 5,
  },
  {
    name: 'Lincoln Swaggart',
    location: 'Los Cabos',
    content: 'Give these guys a look. They are very professional and do complete work. We have had several power outages this past week and the backup system they provided has worked great. Good work done by good folks!!!!',
    source: 'Facebook',
    rating: 5,
  },
  {
    name: 'Kyle Gross',
    location: 'Los Cabos',
    content: 'Alex and his technician were skilled and professional. Excellent communication leading up to our service call.',
    source: 'Google Review',
    rating: 5,
  },
  {
    name: 'Alan Guzman',
    location: 'Los Cabos',
    content: 'First-class company. Quality. Professionalism. Safety.',
    source: 'Facebook',
    rating: 5,
  },
  {
    name: 'Leigh Whillans',
    location: 'Los Cabos',
    content: 'Reliable, honest company! Love these men and woman who did my system. The best!',
    source: 'Facebook',
    rating: 5,
  },
];

export default function Testimonials() {
  const headerRef = useScrollAnimation();
  const stripRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scroll = (direction: 'left' | 'right') => {
    if (!stripRef.current) return;
    const card = stripRef.current.querySelector('div');
    const cardWidth = card ? (card as HTMLElement).offsetWidth + 32 : 400;
    stripRef.current.scrollBy({ left: direction === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {theme === 'techno' && (
        <>
          {/* Mobile: portrait water texture */}
          <img
            src="/images/water-teal-texture-mobile.png"
            alt=""
            className="lg:hidden absolute inset-0 w-full h-full object-cover"
          />
          {/* Desktop: landscape water texture */}
          <img
            src="/images/water-teal-texture.png"
            alt=""
            className="hidden lg:block absolute inset-0 w-full h-full object-cover"
          />
        </>
      )}
      <div className={`absolute inset-0 ${
        theme === 'techno'
          ? 'bg-[#0a1628]/15'
          : 'bg-theme-bg'
      }`} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-20">
          <span className={`inline-block text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow ${
            theme === 'techno' ? 'text-theme-accent' : 'text-theme-accent'
          }`}
          >
            Testimonials
          </span>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-5 tracking-tight ${
            theme === 'techno' ? 'text-white' : 'text-theme-text'
          }`}
          >
            Trusted Across Los Cabos
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${
            theme === 'techno' ? 'text-white/80' : 'text-theme-text-muted'
          }`}
          >
            From boutique hotels to beachfront villas — hear from our clients.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10 w-12 h-12 rounded-full items-center justify-center text-white border border-white/30 bg-white/10 hover:bg-white/25 hover:border-white/50 transition-all arrow-hint-left"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-10 w-12 h-12 rounded-full items-center justify-center text-white border border-white/30 bg-white/10 hover:bg-white/25 hover:border-white/50 transition-all arrow-hint-right"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </button>

          <p className="text-center text-xs text-theme-primary font-medium mb-3 md:hidden">
            Swipe to read more &rarr;
          </p>

          <div
            ref={stripRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border hover:shadow-xl transition-all duration-500 flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] snap-start ${
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
                <div className={`text-xs font-medium mt-1 ${theme === 'techno' ? 'text-teal-300' : 'text-theme-accent'}`}>{testimonial.source}</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
