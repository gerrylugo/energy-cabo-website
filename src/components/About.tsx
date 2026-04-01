import { Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '95%', label: 'Energy Savings' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Energy Cabo
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              We are Los Cabos' premier energy solutions provider, specializing in cutting-edge solar technology and sustainable power systems. Our mission is to transform how businesses and homes in Baja California Sur consume energy.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              With over a decade of experience in the renewable energy sector, we combine technical expertise with a deep understanding of the local climate and energy landscape to deliver solutions that maximize efficiency and return on investment.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-energy-navy rounded-lg">
                <span className="text-white font-semibold">Certified Installers</span>
              </div>
              <div className="px-6 py-3 bg-energy-teal rounded-lg">
                <span className="text-white font-semibold">Premium Equipment</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-6 bg-gray-900 p-6 rounded-xl border border-gray-800"
                >
                  <div className="w-16 h-16 bg-energy-teal bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-energy-teal" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
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
