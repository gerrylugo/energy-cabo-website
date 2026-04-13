import { useState, useEffect } from 'react';
import { Zap, Menu, X, Bolt, Sun, Layers, Star, Phone, Heart } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services', icon: Bolt },
    { href: '#about', label: 'About', icon: Sun },
    { href: '#mission', label: 'Mission', icon: Heart },
    { href: '#projects', label: 'Projects', icon: Layers },
    { href: '#testimonials', label: 'Testimonials', icon: Star },
    { href: '#contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isMobileMenuOpen
          ? 'bg-[#122A4F]'
          : isScrolled
            ? 'bg-theme-bg/95 backdrop-blur-md shadow-lg shadow-black/5'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo-icon.png"
              alt="Energy Cabo"
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-theme-text' : 'text-white'
              }`}>
                Energy Cabo
              </span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-theme-accent' : 'text-white/60'
              }`}>
                Solar & Energy Solutions
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium tracking-wide transition-colors duration-300 hover:text-theme-accent ${
                  isScrolled ? 'text-theme-text-secondary' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-theme-accent text-white text-lg font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isMobileMenuOpen || !isScrolled ? 'text-white' : 'text-theme-text'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40" style={{ background: 'linear-gradient(to bottom, #122A4F, #1B3A6B)' }}>
          <div className="flex flex-col items-center justify-center h-full pb-20">
            <div className="space-y-1 w-full max-w-xs">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-white/85 hover:text-theme-accent transition-all font-semibold text-lg py-3.5 px-5 rounded-xl hover:bg-white/10"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-5 h-5 text-theme-accent" />
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="w-full max-w-xs mt-8 px-5">
              <div className="border-t border-white/10 pt-8">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-8 py-4 bg-theme-accent text-white font-bold text-lg rounded-2xl hover:opacity-90 transition-all text-center shadow-lg shadow-theme-accent/30"
                >
                  Get Quote →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
