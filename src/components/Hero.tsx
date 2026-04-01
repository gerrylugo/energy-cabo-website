import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background — cinematic gradient with texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-energy-navy-dark via-energy-navy to-[#1a4a7a]" />
        {/* Subtle radial glow behind the heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy-teal/5 rounded-full blur-3xl" />
        {/* Bottom gradient fade to teal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-energy-teal/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        {/* Trust badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-white/80 tracking-wide">
            <span className="w-2 h-2 bg-energy-teal rounded-full animate-pulse" />
            Premium Energy Solutions in Los Cabos
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight leading-[0.95]">
          300 Days of Sun.
          <span className="block text-energy-teal mt-2">Zero Wasted.</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up text-lg md:text-xl text-white/70 mb-12 max-w-2xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Engineer-designed energy systems for homes and businesses in Baja California Sur.
          Built for the desert. Powered by the Sea of Cortez.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="group px-8 py-4 bg-energy-teal text-white font-semibold rounded-xl hover:bg-energy-teal-hover transition-all duration-300 shadow-lg shadow-energy-teal/25 flex items-center justify-center gap-2"
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
        <div className="animate-fade-in-up mt-20 grid grid-cols-3 gap-8 md:gap-16" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white">300+</div>
            <div className="text-sm text-white/50 mt-1 tracking-wide uppercase">Sunny Days / Year</div>
          </div>
          <div className="text-center border-x border-white/10 px-8">
            <div className="text-3xl md:text-4xl font-extrabold text-white">95%</div>
            <div className="text-sm text-white/50 mt-1 tracking-wide uppercase">Bill Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white">25yr</div>
            <div className="text-sm text-white/50 mt-1 tracking-wide uppercase">Panel Warranty</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white/40" />
      </a>
    </div>
  );
}
