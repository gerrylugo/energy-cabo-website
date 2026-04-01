import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'Luxury Villa — Palmilla',
    category: 'Residential',
    system: 'Complete Solution',
    capacity: '18 kW + 30 kWh',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Boutique Hotel — Todos Santos',
    category: 'Commercial',
    system: 'Solar Savings',
    capacity: '85 kW',
    image: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Beachfront Home — East Cape',
    category: 'Residential',
    system: 'Total Independence',
    capacity: '12 kW Off-Grid',
    image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Restaurant — San Jose del Cabo',
    category: 'Commercial',
    system: 'Smart Generation',
    capacity: '45 kW Zero Export',
    image: 'https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Projects() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-28 bg-theme-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-20">
          <span className="inline-block text-theme-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Powering Los Cabos
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            From Todos Santos to the East Cape — homes and businesses running on clean energy.
          </p>
        </div>

        {/* Project grid */}
        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-theme-accent/90 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.capacity}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm font-medium">
                  {project.system}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
