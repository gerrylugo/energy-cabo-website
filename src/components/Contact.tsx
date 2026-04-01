import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation(0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-28 bg-energy-arena/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-20">
          <span className="inline-block text-energy-teal text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-energy-navy mb-5 tracking-tight">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Get a free consultation. We'll design a system tailored to your property and goals.
          </p>
        </div>

        <div ref={contentRef} className="animate-on-scroll grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — contact info (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* CTA card */}
            <div className="bg-energy-navy p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3">Quick Estimate</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Use our online estimator to get an instant energy analysis for your property.
              </p>
              <a
                href="https://crm.energycabo.com/en/estimator/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-energy-teal text-white font-semibold rounded-xl hover:bg-energy-teal-hover transition-all"
              >
                Open Estimator
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <a href="mailto:info@energycabo.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-energy-teal/10 rounded-xl flex items-center justify-center group-hover:bg-energy-teal/20 transition-colors">
                  <Mail className="w-5 h-5 text-energy-teal" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-energy-navy font-semibold">info@energycabo.com</div>
                </div>
              </a>

              <a href="tel:+526241325952" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-energy-teal/10 rounded-xl flex items-center justify-center group-hover:bg-energy-teal/20 transition-colors">
                  <Phone className="w-5 h-5 text-energy-teal" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone / WhatsApp</div>
                  <div className="text-energy-navy font-semibold">+52 624 132 5952</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-energy-teal/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-energy-teal" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-energy-navy font-semibold">Los Cabos, BCS, Mexico</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form (3 cols) */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-energy-navy text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-teal/30 focus:border-energy-teal transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-energy-navy text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-teal/30 focus:border-energy-teal transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-energy-navy text-sm font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-teal/30 focus:border-energy-teal transition-all"
                placeholder="+52 624 ..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-energy-navy text-sm font-semibold mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-energy-teal/30 focus:border-energy-teal transition-all resize-none"
                placeholder="Property type, location, energy goals..."
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-energy-teal/10 border border-energy-teal/20 rounded-xl text-energy-teal font-medium">
                Thank you! We'll get back to you within 24 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-energy-teal text-white font-semibold rounded-xl hover:bg-energy-teal-hover transition-all duration-300 shadow-lg shadow-energy-teal/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
