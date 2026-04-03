import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';

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
  const { theme } = useTheme();

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
    <section id="contact" className="relative py-28 overflow-hidden">
      {theme === 'techno' && (
        <div
          className="absolute inset-0 bg-[length:100%_auto] bg-top transition-opacity duration-700"
          style={{ backgroundImage: "url('/images/contact-beach-aerial.png')" }}
        />
      )}
      <div className={`absolute inset-0 ${
        theme === 'techno'
          ? 'bg-white/60'
          : 'bg-theme-bg-warm/30'
      }`} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-20">
          <span className={`inline-block text-base font-bold tracking-[0.2em] uppercase mb-4 section-label-glow ${
            theme === 'techno' ? 'text-[#F5A623]' : 'text-theme-accent'
          }`}>
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-5 tracking-tight">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg text-theme-text-secondary font-medium max-w-2xl mx-auto">
            Get a free consultation. We'll design a system tailored to your property and goals.
          </p>
        </div>

        <div ref={contentRef} className="animate-on-scroll grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-theme-primary p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-3">Quick Estimate</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Use our online estimator to get an instant energy analysis for your property.
              </p>
              <a
                href="https://crm.energycabo.com/en/estimator/?channel=website"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-theme-accent text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                Open Estimator
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-5">
              <a href="mailto:info@energycabo.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-theme-accent/15 rounded-xl flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-theme-accent" />
                </div>
                <div>
                  <div className="text-sm text-theme-text-secondary font-medium">Email</div>
                  <div className="text-theme-text font-semibold">info@energycabo.com</div>
                </div>
              </a>

              <a href="tel:+526241325952" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-theme-accent/15 rounded-xl flex items-center justify-center group-hover:bg-theme-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-theme-accent" />
                </div>
                <div>
                  <div className="text-sm text-theme-text-secondary font-medium">Phone / WhatsApp</div>
                  <div className="text-theme-text font-semibold">+52 624 132 5952</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-theme-accent/15 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-theme-accent" />
                </div>
                <div>
                  <div className="text-sm text-theme-text-secondary font-medium">Location</div>
                  <div className="text-theme-text font-semibold">Los Cabos, BCS, Mexico</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-theme-bg-warm/40 p-8 md:p-10 rounded-2xl shadow-xl border border-theme-accent/15 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-theme-text text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-theme-bg-alt text-theme-text border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-accent/30 focus:border-theme-accent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-theme-text text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-theme-bg-alt text-theme-text border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-accent/30 focus:border-theme-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-theme-text text-sm font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-theme-bg-alt text-theme-text border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-accent/30 focus:border-theme-accent transition-all"
                placeholder="+52 624 ..."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-theme-text text-sm font-semibold mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-theme-bg-alt text-theme-text border border-theme-border rounded-xl focus:outline-none focus:ring-2 focus:ring-theme-accent/30 focus:border-theme-accent transition-all resize-none"
                placeholder="Property type, location, energy goals..."
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-theme-accent/10 border border-theme-accent/20 rounded-xl text-theme-accent font-medium">
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
              className="w-full px-8 py-4 bg-theme-accent text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
