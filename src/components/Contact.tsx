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
        <div
          className="absolute inset-0 bg-[length:100%_auto] bg-top transition-opacity duration-700"
          style={{ backgroundImage: "url('/images/contact-beach-aerial.png')" }}
        />
      )}
      <div className={`absolute inset-0 ${
        theme === 'techno'
          ? 'bg-white/60'
          : 'bg-theme-bg-warm/30'
      }`} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <span className={`inline-block text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow ${
            theme === 'techno' ? 'text-[#F5A623]' : 'text-theme-accent'
          }`}>
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-5 tracking-tight">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg text-theme-text-secondary font-medium max-w-2xl mx-auto">
            Get an instant quote in minutes. Or message us directly on WhatsApp.
          </p>
        </div>

        <div ref={contentRef} className="animate-on-scroll space-y-12">
          {/* Primary CTA — Make A Quote */}
          <div className="flex justify-center">
            <a
              href="https://crm.energycabo.com/en/estimator/?channel=website"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-12 py-6 bg-theme-accent text-white font-bold text-2xl rounded-2xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Make A Quote
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Contact cards by zone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-white p-8 rounded-2xl shadow-xl border border-theme-accent/15 text-center"
              >
                <div className="flex items-center justify-center gap-2 text-theme-accent mb-6">
                  <MapPin className="w-5 h-5" />
                  <span className="text-base font-bold tracking-wide uppercase">{contact.role}</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href={contact.telLink}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-theme-primary text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={contact.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:opacity-90 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage zones */}
          <div className="text-center text-theme-text-secondary text-sm">
            Serving <strong className="text-theme-text">Los Cabos</strong>, <strong className="text-theme-text">Baja California Sur</strong>, and <strong className="text-theme-text">Todos Santos</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
