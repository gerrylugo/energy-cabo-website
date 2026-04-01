import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-energy-teal rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Energy Cabo</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading provider of premium solar and energy solutions in Los Cabos, Mexico. Powering your future with clean, sustainable energy.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-energy-teal transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-energy-teal transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-energy-teal transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-energy-teal transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-energy-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-energy-teal transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-energy-teal transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-energy-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">info@energycabo.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-energy-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+52 624 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-energy-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Los Cabos, BCS, Mexico
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Energy Cabo. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-energy-teal transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-energy-teal transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
