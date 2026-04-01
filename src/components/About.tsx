import { Sun, Shield, Wrench, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  {
    icon: Award,
    title: 'Premium Equipment',
    desc: 'Tier-1 panels, top-rated inverters, marine-grade components.',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    desc: 'Certified team, clean site delivery, no shortcuts.',
  },
  {
    icon: Sun,
    title: 'Custom Engineering',
    desc: 'Designed for your property, not a cookie-cutter template.',
  },
  {
    icon: Shield,
    title: 'Project Management',
    desc: 'One point of contact from quote to commissioning.',
  },
];

export default function About() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="about" className="py-28 bg-energy-arena/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — narrative */}
          <div ref={leftRef} className="animate-on-scroll-left">
            <span className="inline-block text-energy-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-energy-navy mb-6 tracking-tight leading-tight">
              Where the Desert
              <span className="block text-energy-teal">Meets the Sea</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Energy Cabo is Los Cabos' premier energy solutions provider. We combine engineering
              precision with a deep understanding of Baja's climate — 300 days of sun, salt air,
              hurricane season, and the unique demands of coastal living.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every system we install is designed to thrive in this environment. Not adapted,
              not imported from another region — <strong className="text-energy-navy">built for Baja</strong>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-energy-navy text-white text-sm font-semibold rounded-xl">
                CFE Compliant
              </span>
              <span className="px-4 py-2 bg-energy-teal text-white text-sm font-semibold rounded-xl">
                Marine-Grade
              </span>
              <span className="px-4 py-2 bg-energy-torote text-white text-sm font-semibold rounded-xl">
                Hurricane Rated
              </span>
            </div>
          </div>

          {/* Right — 4 pillars */}
          <div ref={rightRef} className="animate-on-scroll-right grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-energy-teal/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-energy-navy/5 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-energy-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-energy-navy mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
