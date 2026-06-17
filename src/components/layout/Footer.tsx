import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="https://i.ibb.co/wZTZ7SQV/1781696641441.jpg"
                alt="Badello Contractors"
                className="h-14 w-auto object-contain"
              />
              <div className="font-sans font-bold text-xl tracking-tighter uppercase text-white transition-colors">
                <span className="text-brand-gold">BADELLO</span> CONTRACTORS
              </div>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Built Strong. Finished Right. Premium contracting and custom flooring solutions in Trinidad & Tobago.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/badellocontractorsltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/tapfersolutionslimited" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-brand-gold hover:text-brand-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-1">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-1">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  #4A Boodram Street,<br />
                  Enterprise Village,<br />
                  Chaguanas, Trinidad and Tobago
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <a href="tel:+18682388667" className="text-sm text-gray-400 hover:text-white transition-colors font-mono tracking-tight">
                  +1 (868) 238-8667
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <a href="mailto:badellocontractorstt@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  badellocontractorstt@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-1">Business Hours</h3>
            <div className="bg-brand-graphite p-6 rounded-lg border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Monday - Friday</span>
                <span className="text-sm text-white font-medium">8:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            &copy; {currentYear} Badello Contractors Ltd. All Rights Reserved.
          </p>
          <div className="text-[10px] uppercase tracking-widest text-gray-600 flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
