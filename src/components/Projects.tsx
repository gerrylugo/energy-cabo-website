const projects = [
  {
    title: 'Luxury Resort Solar Installation',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '500kW',
  },
  {
    title: 'Residential Villa Energy System',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '25kW',
  },
  {
    title: 'Marina Backup Power Solution',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '150kW',
  },
  {
    title: 'Restaurant Solar & Battery',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '75kW',
  },
  {
    title: 'Beachfront Home Zero Export',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '30kW',
  },
  {
    title: 'Office Complex Energy Grid',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: '200kW',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powering Los Cabos, one installation at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-energy-teal text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-energy-navy text-white text-sm font-semibold rounded-full">
                    {project.capacity}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
