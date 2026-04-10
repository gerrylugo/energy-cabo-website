import { Target, Eye, Heart, Award, Lightbulb, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: Award,
    title: 'Quality',
    desc: 'Only tier-1 equipment and materials from industry-leading brands.',
  },
  {
    icon: Target,
    title: 'Service Excellence',
    desc: 'Personalized, hands-on support throughout every project.',
  },
  {
    icon: Heart,
    title: 'Honesty',
    desc: 'Transparent solutions tailored to your actual needs.',
  },
  {
    icon: Eye,
    title: 'Responsibility',
    desc: 'Commitment, punctuality, and attention to every detail.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'The latest energy technology for proven, measurable results.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    desc: 'Collaboration and respect — with our team, our clients, and our partners.',
  },
];

export default function MissionVision() {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation(0.1);
  const valuesRef = useScrollAnimation(0.1);

  return (
    <section id="mission" className="py-28 bg-theme-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <span className="inline-block text-theme-accent text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-theme-text mb-5 tracking-tight">
            What Drives Us
          </h2>
        </div>

        {/* Mission & Vision cards */}
        <div ref={cardsRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Mission */}
          <div className="relative bg-theme-surface p-8 md:p-10 rounded-2xl border border-theme-border hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-theme-accent" />
              </div>
              <h3 className="text-xl font-bold text-theme-text mb-4 tracking-tight">Our Mission</h3>
              <p className="text-base text-theme-text-secondary leading-relaxed">
                To deliver the highest quality energy systems, integrating reliable and
                long-lasting technology with a service of excellence that ensures total client
                satisfaction — contributing to savings and sustainability across the region.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-theme-surface p-8 md:p-10 rounded-2xl border border-theme-border hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-theme-primary" />
              </div>
              <h3 className="text-xl font-bold text-theme-text mb-4 tracking-tight">Our Vision</h3>
              <p className="text-base text-theme-text-secondary leading-relaxed">
                To be recognized as the most reliable energy company in Los Cabos and Baja
                California Sur — known for the superior quality of our products and the
                personalized care we bring to every client, exceeding expectations on every project.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-theme-text tracking-tight">
            Our Values
          </h3>
        </div>
        <div ref={valuesRef} className="stagger-children grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group text-center bg-theme-surface p-5 rounded-2xl border border-theme-border hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-theme-accent/10 to-theme-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-theme-accent" />
                </div>
                <h4 className="text-sm font-bold text-theme-text mb-1">{value.title}</h4>
                <p className="text-xs text-theme-text-secondary leading-relaxed">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
