import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source
            src="https://images.pexels.com/lib/videos/free-videos.js?autoplay=1&loop=1"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Power Your Future with
          <span className="block text-energy-teal mt-2">Clean Energy</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
          Premium solar and energy solutions in Los Cabos, Mexico
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-energy-teal text-white font-semibold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-energy-navy text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all border border-energy-navy shadow-lg"
          >
            Our Services
          </a>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-energy-teal" />
      </a>
    </div>
  );
}
