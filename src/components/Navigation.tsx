import { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

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

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-theme-bg/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-theme-accent rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
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
              isScrolled ? 'text-theme-text' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-theme-primary shadow-2xl border-t border-white/10">
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/90 hover:text-theme-accent transition-colors font-semibold text-lg py-3 px-4 rounded-xl hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-6 px-6 py-4 bg-theme-accent text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all text-center"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
