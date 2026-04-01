import { Sun, Zap, Battery, Layers, Mountain, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Sun,
    title: 'Solar Savings',
    description: 'Reduce your CFE bill by up to 95%. Stay connected to the grid while your panels do the work.',
    why: 'Run your AC, pool pump, and kitchen — all at once, all from the sun.',
    color: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Zap,
    title: 'Smart Generation',
    description: 'Generate your own power without exporting to CFE. Perfect for properties that want control.',
    why: 'Keep every watt you produce. No CFE penalties, no surprises.',
    color: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-500',
  },
  {
    icon: Battery,
    title: 'Always On',
    description: 'When CFE goes dark, your home stays lit. Battery backup that kicks in automatically.',
    why: 'Sleep through any outage without noticing. Your life doesn\'t stop.',
    color: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-500',
  },
  {
    icon: Layers,
    title: 'The Complete Solution',
    description: 'Solar + batteries + grid. The best of every technology, designed to work together.',
    why: 'Our most popular system — because it does everything.',
    color: 'from-violet-500/10 to-purple-500/10',
    iconColor: 'text-violet-500',
  },
  {
    icon: Mountain,
    title: 'Total Independence',
    description: 'No CFE connection needed. Complete energy autonomy for remote properties.',
    why: 'Like Cabo Pulmo — isolated, self-sustaining, and beautiful.',
    color: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Shield,
    title: 'Surge Shield',
    description: 'Protect your equipment from voltage spikes and power surges.',
    why: 'Ocean-proof. Category 3 hurricane? Your equipment stays safe.',
    color: 'from-red-500/10 to-orange-500/10',
    iconColor: 'text-red-500',
  },
];

export default function Services() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.1);

  return (
    <section id="services" className="py-28 bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-20">
          <span className="inline-block text-theme-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-5 tracking-tight">
            Energy Solutions Built for Baja
          </h2>
          <p className="text-lg text-theme-text-muted max-w-2xl mx-auto leading-relaxed">
            Every system is custom-designed for Los Cabos' climate, your property, and your energy goals.
          </p>
        </div>

        {/* Service cards */}
        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-theme-surface p-8 rounded-2xl border border-theme-border hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-theme-text mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-theme-text-secondary leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm text-theme-accent font-medium italic">
                    {service.why}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
