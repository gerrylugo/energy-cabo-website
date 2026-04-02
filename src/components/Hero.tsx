import { ChevronDown, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background — photo for techno, gradient for funky */}
      <div className="absolute inset-0">
        {theme === 'techno' ? (
          <>
            <img
              src="/images/hero-arco-techno.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* overlay removed — letting the image shine */}
          </>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom right, var(--color-hero-from), var(--color-hero-via), var(--color-hero-to))',
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
              style={{ backgroundColor: 'var(--color-hero-glow)' }}
            />
          </>
        )}
        {/* Bottom gradient fade */}
        {/* bottom gradient removed — letting full image shine */}
      </div>

      {/* Content — split into upper (text) and lower (CTAs + stats) with gap for image */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between text-center px-4 pt-16 pb-8">
        {/* UPPER GROUP — text, pushed toward top */}
        <div className="mt-8 md:mt-12">
          {/* Trust badge */}
          <div className="animate-fade-in mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-white/80 tracking-wide">
              <span className="w-2 h-2 rounded-full animate-pulse bg-theme-accent" />
              Premium Energy Solutions in Los Cabos
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight leading-[0.95]">
            300 Days of Sun.
            <span className="block mt-2" style={{ color: 'var(--color-accent)' }}>Zero Wasted.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up text-lg md:text-xl font-semibold text-white drop-shadow-lg max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Engineer-designed energy systems for homes and businesses in Baja California Sur.
            Built for the desert. Powered by the Sea of Cortez.
          </p>
        </div>

        {/* Bobo mascot — funky theme only */}
        {theme === 'funky' && (
          <div className="animate-fade-in-up absolute bottom-32 right-8 md:right-16 lg:right-24 hidden md:block" style={{ animationDelay: '0.8s' }}>
            <img
              src="/images/bobo-hero.png"
              alt="Bobo the Blue-footed Booby — Energy Cabo mascot"
              className="w-40 lg:w-56 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* LOWER GROUP — CTAs + stats, pushed toward bottom */}
        <div className="mb-4 md:mb-8">
          {/* CTAs */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center mb-10" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="group px-8 py-4 bg-theme-accent text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              Get Your Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Explore Solutions
            </a>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up grid grid-cols-3 gap-4 md:gap-16" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-extrabold text-white">300+</div>
              <div className="text-xs md:text-sm text-white/80 drop-shadow-md mt-1 tracking-wide uppercase">Sunny Days / Year</div>
            </div>
            <div className="text-center border-x border-white/10 px-4 md:px-8">
              <div className="text-2xl md:text-4xl font-extrabold text-white">95%</div>
              <div className="text-xs md:text-sm text-white/80 drop-shadow-md mt-1 tracking-wide uppercase">Bill Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-extrabold text-white">25yr</div>
              <div className="text-xs md:text-sm text-white/80 drop-shadow-md mt-1 tracking-wide uppercase">Panel Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block"
      >
        <ChevronDown className="w-8 h-8 text-white/40" />
      </a>
    </div>
  );
}
