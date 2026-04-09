import { Sun, Shield, Wrench, Award, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

const pillars = [
  {
    icon: Award,
    title: 'Premium Equipment',
    desc: 'Tier-1 panels, top-rated inverters, marine-grade components.',
    accent: '#C4883A', // Torote gold
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    desc: 'Certified team, clean site delivery, no shortcuts.',
    accent: '#50BB9B', // Mar de Cortez teal
  },
  {
    icon: Sun,
    title: 'Custom Engineering',
    desc: 'Designed for your property, not a cookie-cutter template.',
    accent: '#1B3A6B', // Navy / rocas
  },
  {
    icon: Shield,
    title: 'Project Management',
    desc: 'One point of contact from quote to commissioning.',
    accent: '#D4519A', // Rosa choya / bugambilia
  },
];

export default function About() {
  const { theme } = useTheme();
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" className="relative py-16 lg:py-28 overflow-hidden">
      {/* Background — photo for techno (portrait mobile, landscape desktop), solid for funky */}
      {theme === 'techno' ? (
        <div className="absolute inset-0">
          {/* Mobile: portrait torote */}
          <img
            src="/images/torote-desert-mobile.png"
            alt=""
            className="lg:hidden w-full h-full object-cover"
          />
          {/* Desktop: landscape torote */}
          <img
            src="/images/torote-desert-techno.png"
            alt=""
            className="hidden lg:block w-full h-full object-cover"
          />
          {/* Desktop: left-to-right gradient */}
          <div className="hidden lg:block absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 30%, rgba(255,255,255,0.3) 55%, rgba(255,255,255,0.05) 100%)' }} />
          {/* Mobile: top-to-bottom gradient — lighter to let torote shine */}
          <div className="lg:hidden absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0.2) 65%, rgba(255,255,255,0.05) 100%)' }} />
        </div>
      ) : (
        <div className="absolute inset-0 bg-theme-bg-warm/50" />
      )}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-48">
          {/* Left — narrative */}
          <div ref={leftRef} className="animate-on-scroll-left max-w-md mx-auto lg:mx-0 lg:ml-6 text-center lg:text-left">
            <span className="inline-block text-theme-accent text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-theme-text mb-6 tracking-tight leading-tight">
              Where Quality
              <span className="block text-theme-accent">& Reliability Meet</span>
            </h2>
            <p className="text-sm lg:text-lg text-theme-text-secondary mb-4 lg:mb-6 leading-relaxed">
              Energy Cabo is Baja California Sur's premier energy solutions provider. We combine
              engineering precision with a deep understanding of Baja's climate — harnessing 300+ days
              of sun to deliver reliable power to our customers.
            </p>
            <p className="text-sm lg:text-lg text-theme-text-secondary mb-6 lg:mb-8 leading-relaxed">
              Serving all of BCS — from Todos Santos to La Paz, Cabo San Lucas to the East Cape.
              Every system we install is designed to thrive in this environment. Not adapted,
              not imported from another region — <strong className="text-theme-text">built for Baja</strong>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center lg:items-start">
              <span className="px-4 py-2 bg-theme-primary text-white text-sm font-semibold rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4" /> CFE Compliant
              </span>
              <span className="px-4 py-2 bg-theme-accent text-white text-sm font-semibold rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4" /> Marine-Grade
              </span>
              <span className="px-4 py-2 bg-theme-torote text-white text-sm font-semibold rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4" /> Hurricane Rated
              </span>
            </div>
          </div>

          {/* Right — 4 pillars */}
          <div ref={rightRef} className="animate-on-scroll-right grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto lg:ml-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/50 backdrop-blur-sm p-4 lg:p-6 rounded-2xl border border-white/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ borderLeft: `4px solid ${pillar.accent}` }}
                >
                  {/* Hover color tint */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: `${pillar.accent}10` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 lg:mb-3">
                      <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${pillar.accent}15` }}>
                        <Icon className="w-5 h-5" style={{ color: pillar.accent }} />
                      </div>
                      <h3 className="text-base lg:text-lg font-bold text-theme-text">{pillar.title}</h3>
                    </div>
                    <p className="text-xs lg:text-sm text-theme-text font-semibold leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
