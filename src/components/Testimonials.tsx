import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Rodriguez',
    role: 'Hotel Owner',
    content: 'Energy Cabo transformed our resort operations. Our energy costs dropped by 70% in the first year, and the system has been flawless. Their team was professional and the installation was seamless.',
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    role: 'Homeowner',
    content: 'Best investment we made for our villa. The zero export system works perfectly with CFE, and we love having backup power during storms. Highly recommend Energy Cabo!',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    role: 'Restaurant Manager',
    content: 'The solar installation pays for itself with the savings. Their monitoring system gives us complete visibility, and customer service is top-notch. Worth every peso!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied customers across Los Cabos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-energy-teal transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-energy-teal text-energy-teal" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-800 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
