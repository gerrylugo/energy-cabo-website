import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    system: 'Grid Savings',
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
  const stripRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!stripRef.current) return;
    const card = stripRef.current.querySelector('div');
    const cardWidth = card ? (card as HTMLElement).offsetWidth + 24 : 400;
    stripRef.current.scrollBy({ left: direction === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: 'linear-gradient(135deg, #87CEEB 0%, #F5F0E8 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block text-theme-primary text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme-primary mb-5 tracking-tight">
            Powering Baja
          </h2>
          <p className="text-lg text-theme-primary/70 max-w-2xl mx-auto">
            From La Paz to the East Cape — homes and businesses running on clean energy.
          </p>
        </div>

        {/* Strip */}
        <div>
          <div
            ref={stripRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer flex-shrink-0 w-[85%] md:w-[60%] lg:w-[45%] snap-start"
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

          {/* Minimalist navy arrows below strip with fade animation */}
          <div className="flex justify-center gap-8 mt-8">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous project"
              className="text-theme-primary hover:scale-110 transition-transform animate-arrow-fade"
            >
              <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next project"
              className="text-theme-primary hover:scale-110 transition-transform animate-arrow-fade"
            >
              <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
