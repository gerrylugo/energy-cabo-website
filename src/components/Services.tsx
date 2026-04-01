import { Sun, Battery, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Solar Solutions',
    description: 'High-efficiency solar panel installations designed for the unique climate of Los Cabos, maximizing energy production year-round.',
  },
  {
    icon: Battery,
    title: 'Backup Systems',
    description: 'Reliable battery backup solutions ensuring uninterrupted power supply during outages and peak demand periods.',
  },
  {
    icon: Zap,
    title: 'Zero Export',
    description: 'Advanced zero export systems that optimize self-consumption while complying with local grid regulations.',
  },
  {
    icon: Shield,
    title: 'Protection Systems',
    description: 'Comprehensive surge protection and monitoring systems to safeguard your investment and ensure optimal performance.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete energy solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 hover:border-energy-teal"
              >
                <div className="w-16 h-16 bg-energy-teal bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-energy-teal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
