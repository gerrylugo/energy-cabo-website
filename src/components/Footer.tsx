import { Zap, Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo-icon.png" alt="Energy Cabo" className="h-10 w-auto brightness-0 invert" />
              <div>
                <span className="text-xl font-bold text-white">Energy Cabo</span>
                <span className="block text-[10px] text-white/60 font-medium tracking-[0.2em] uppercase">
                  Solar & Energy Solutions
                </span>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed text-sm">
              Premium energy solutions for homes and businesses in Los Cabos, Baja California Sur.
              Built for the desert. Powered by the Sea of Cortez.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/EnergyCaboBCS/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-theme-accent transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white/80" />
              </a>
              <a
                href="https://www.instagram.com/energycabo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-theme-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-white/80" />
              </a>
              <a
                href="https://wa.me/5216242790172"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-theme-accent transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5 text-white/80" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'About', 'Projects', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/70 hover:text-theme-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://crm.energycabo.com/en/estimator/?channel=website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-accent hover:text-theme-accent-light transition-colors text-sm font-medium"
                >
                  Online Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-theme-accent flex-shrink-0 mt-1" />
                <a href="mailto:info@energycabo.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@energycabo.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-theme-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-0.5">Los Cabos &amp; BCS</div>
                  <a href="tel:+5216121325952" className="text-white/70 hover:text-white transition-colors text-sm">
                    +52 612 132 5952
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-theme-accent flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-wider mb-0.5">Todos Santos</div>
                  <a href="tel:+5216121110860" className="text-white/70 hover:text-white transition-colors text-sm">
                    +52 612 111 0860
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              &copy; {currentYear} Energy Cabo. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              From La Paz to San José del Cabo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
