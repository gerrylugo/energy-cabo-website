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
    <section id="about" className="relative py-28 overflow-hidden">
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
          {/* Mobile: top-to-bottom gradient */}
          <div className="lg:hidden absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0.35) 65%, rgba(255,255,255,0.1) 100%)' }} />
        </div>
      ) : (
        <div className="absolute inset-0 bg-theme-bg-warm/50" />
      )}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-48">
          {/* Left — narrative */}
          <div ref={leftRef} className="animate-on-scroll-left max-w-md lg:ml-6">
            <span className="inline-block text-theme-accent text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-theme-text mb-6 tracking-tight leading-tight">
              Where Quality
              <span className="block text-theme-accent">& Reliability Meet</span>
            </h2>
            <p className="text-lg text-theme-text-secondary mb-6 leading-relaxed">
              Energy Cabo is Baja California Sur's premier energy solutions provider. We combine
              engineering precision with a deep understanding of Baja's climate — harnessing 300+ days
              of sun to deliver reliable power to our customers.
            </p>
            <p className="text-lg text-theme-text-secondary mb-8 leading-relaxed">
              Serving all of BCS — from Todos Santos to La Paz, Cabo San Lucas to the East Cape.
              Every system we install is designed to thrive in this environment. Not adapted,
              not imported from another region — <strong className="text-theme-text">built for Baja</strong>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
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
                  className="group relative bg-theme-surface p-6 rounded-2xl border border-theme-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  style={{ borderLeft: `4px solid ${pillar.accent}` }}
                >
                  {/* Hover color tint */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: `${pillar.accent}10` }}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${pillar.accent}15` }}>
                      <Icon className="w-6 h-6" style={{ color: pillar.accent }} />
                    </div>
                    <h3 className="text-lg font-bold text-theme-text mb-2">{pillar.title}</h3>
                    <p className="text-sm text-theme-text-muted leading-relaxed">{pillar.desc}</p>
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
