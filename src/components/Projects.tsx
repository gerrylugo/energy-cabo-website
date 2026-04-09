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
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block text-theme-primary text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-theme-torote mb-5 tracking-tight">
            Powering Baja
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A69A6' }}>
            From La Paz to the East Cape — homes and businesses running on clean energy.
          </p>
        </div>

        {/* Stats line */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-theme-primary mb-1">500+</div>
            <div className="text-xs uppercase tracking-widest text-theme-torote font-bold">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-theme-primary mb-1">10 MW</div>
            <div className="text-xs uppercase tracking-widest text-theme-torote font-bold">Installed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-theme-primary mb-1">13+</div>
            <div className="text-xs uppercase tracking-widest text-theme-torote font-bold">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-theme-primary mb-1">100%</div>
            <div className="text-xs uppercase tracking-widest text-theme-torote font-bold">Satisfaction</div>
          </div>
        </div>

        {/* Strip with side arrows */}
        <div className="relative">
          {/* Left arrow — vertically centered on images */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous project"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 bg-white/85 backdrop-blur-sm rounded-full items-center justify-center text-theme-primary hover:bg-white hover:scale-110 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next project"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 bg-white/85 backdrop-blur-sm rounded-full items-center justify-center text-theme-primary hover:bg-white hover:scale-110 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </button>

          {/* Mobile swipe hint */}
          <p className="text-center text-sm text-theme-primary/60 mb-3 md:hidden">
            Swipe to explore projects &rarr;
          </p>

          <div
            ref={stripRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 w-[72%] sm:w-[48%] md:w-[32%] lg:w-[23.5%] snap-start shadow-xl"
              >
                {/* Image block (top) */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Info block (bottom) — darker teal bg, fixed height */}
                <div className="px-4 py-4 sm:px-6 sm:py-6 min-h-[100px] sm:min-h-[130px] flex flex-col justify-center" style={{ backgroundColor: '#2AA8A0' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-white/95 text-[10px] font-bold rounded-full uppercase tracking-wider" style={{ color: '#2AA8A0' }}>
                      {project.category}
                    </span>
                    <span className="text-white/90 text-[11px] font-semibold">
                      {project.capacity}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-0.5 tracking-tight leading-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-xs font-medium">
                    {project.system}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
