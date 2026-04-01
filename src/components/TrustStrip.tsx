import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  { label: 'CFE Compliant', detail: 'All systems meet Mexican grid standards' },
  { label: 'Marine-Grade', detail: 'Salt-spray resistant components (IEC 61701)' },
  { label: 'Hurricane Rated', detail: 'Engineered for Category 3 wind loads' },
  { label: '25-Year Warranty', detail: 'A generation of clean energy' },
];

export default function TrustStrip() {
  const ref = useScrollAnimation();

  return (
    <div className="bg-theme-primary-dark">
      <div ref={ref} className="animate-on-scroll max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-bold text-sm tracking-wide mb-1">
                {feature.label}
              </div>
              <div className="text-white/40 text-xs leading-relaxed">
                {feature.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
