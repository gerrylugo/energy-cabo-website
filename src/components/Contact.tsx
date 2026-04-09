import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

const contacts = [
  {
    name: 'Salo',
    role: 'Los Cabos & BCS',
    phone: '+52 612 132 5952',
    waLink: 'https://wa.me/5216121325952',
    telLink: 'tel:+5216121325952',
  },
  {
    name: 'Alex',
    role: 'Todos Santos',
    phone: '+52 612 111 0860',
    waLink: 'https://wa.me/5216121110860',
    telLink: 'tel:+5216121110860',
  },
];

export default function Contact() {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation(0.1);
  const { theme } = useTheme();

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {theme === 'techno' && (
        <>
          {/* Mobile: portrait — swap between options */}
          <img
            src="/images/contact-beach-aerial.png"
            alt=""
            className="lg:hidden absolute inset-0 w-full h-full object-cover"
          />
          {/* Desktop: aerial beach */}
          <img
            src="/images/contact-beach-aerial.png"
            alt=""
            className="hidden lg:block absolute inset-0 w-full h-full object-cover"
          />
        </>
      )}
      <div className={`absolute inset-0 ${
        theme === 'techno'
          ? 'bg-theme-primary/50'
          : 'bg-theme-bg-warm/30'
      }`} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <span className={`inline-block text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow ${
            theme === 'techno' ? 'text-theme-accent' : 'text-theme-accent'
          }`}>
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-theme-text mb-5 tracking-tight">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg text-theme-text-secondary font-medium max-w-2xl mx-auto">
            Get an instant quote in minutes. Or message us directly on WhatsApp.
          </p>
        </div>

        <div ref={contentRef} className="animate-on-scroll space-y-8">
          {/* Primary CTA — Make A Quote */}
          <div className="flex justify-center">
            <a
              href="https://crm.energycabo.com/en/estimator/?channel=website"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-theme-accent text-white font-bold text-xl rounded-2xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Make A Quote
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Compact contact lines */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.telLink}
                className="flex items-center gap-2 text-white/90 hover:text-theme-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-theme-accent" />
                <span className="font-semibold text-sm">{contact.role}</span>
                <span className="text-white/60 text-sm">{contact.phone}</span>
              </a>
            ))}
          </div>

          {/* Coverage */}
          <p className="text-center text-white/60 text-xs">
            Serving Los Cabos, La Paz, Todos Santos & all of BCS
          </p>
        </div>
      </div>
    </section>
  );
}
